// Génère le fichier contact (vCard) à partir de profile.js
const fs = require('fs');
const path = require('path');
const P = require('../profile.js');

const tx = v => (v && typeof v === 'object') ? (v.fr || Object.values(v)[0] || '') : (v || '');
const esc = s => String(s).replace(/\\/g, '\\\\').replace(/\n/g, '\\n').replace(/,/g, '\\,').replace(/;/g, '\\;');
const fold = l => { const o = []; while (l.length > 75) { o.push(l.slice(0, 75)); l = ' ' + l.slice(75); } o.push(l); return o.join('\r\n'); };
const clean = s => String(s).replace(/[\s-]/g, '');

module.exports = (req, res) => {
  const name = `${P.firstName} ${P.lastName}`.trim();
  const L = ['BEGIN:VCARD', 'VERSION:3.0', `N:${esc(P.lastName)};${esc(P.firstName)};;;`, `FN:${esc(name)}`];
  if (P.company) L.push(`ORG:${esc(P.company)}`);
  if (tx(P.title)) L.push(`TITLE:${esc(tx(P.title))}`);
  if (P.phone) L.push(`TEL;TYPE=CELL,VOICE,PREF:${clean(P.phone)}`);
  if (P.whatsapp) {
    const wa = '+' + String(P.whatsapp).replace(/\D/g, '');
    if (wa !== clean(P.phone || '')) L.push(`TEL;TYPE=CELL:${wa}`);
  }
  if (P.email) L.push(`EMAIL;TYPE=INTERNET,WORK:${P.email}`);
  if (P.website) L.push(`URL:${P.website}`);
  Object.values(P.social || {}).filter(Boolean).forEach(u => L.push(`URL:${u}`));
  if (P.address) L.push(`ADR;TYPE=WORK:;;${esc(P.address)};;;;`);
  try { // photo de profil dans le contact (si < 250 Ko)
    const b = fs.readFileSync(path.join(__dirname, '..', 'images', 'photo.jpg'));
    if (b.length < 250000) L.push('PHOTO;ENCODING=b;TYPE=JPEG:' + b.toString('base64'));
  } catch (e) {}
  L.push('END:VCARD');

  res.setHeader('Content-Type', 'text/vcard; charset=utf-8');
  res.setHeader('Content-Disposition', `inline; filename="${name.replace(/[^\w]+/g, '_')}.vcf"`);
  res.setHeader('Cache-Control', 'no-store');
  res.status(200).send(L.map(fold).join('\r\n') + '\r\n');
};
