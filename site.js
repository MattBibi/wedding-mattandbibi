(() => {
'use strict';
const translations = {
en: {
skip:'Skip to content',navLabel:'Main navigation',navStory:'Our story',navCeremony:'The ceremony',navTravel:'Your journey',themeLabel:'Australian visual theme',australia:'Australia',
heroAlt:'Illustrated Porto Alegre waterfront at sunset, a Brazilian and Australian feast, flowers, an electric guitar and black boots on a chair.',
heroEyebrow:'BRAZIL & AUSTRALIA, TOGETHER',heroTitle:'Our favourite<br>kind of harmony.',weddingCelebration:'WEDDING CELEBRATION',heroLocation:'Porto Alegre, Brazil',date:'December 2028',dateNote:'Exact date to be confirmed',heroCta:'A little letter for you',
detailsLabel:'At a glance',ceremonyLabel:'THE CEREMONY',celebrationLabel:'THE CELEBRATION',dateNoteShort:'Date to be confirmed',tableTitle:'TWO FAMILIES. ONE TABLE.',tableSmall:'Brazilian and Australian flavours,',tableSmallEnd:'family and friends.',
storyEyebrow:'A LITTLE BRAZIL. A LITTLE AUSTRALIA.',storyTitle:'A whole lot<br>of us.',storyLead:'Two countries, a shared love of music, food, travel and the arts, and a celebration that brings it all together.',
storyText:"Bibi brings Brazil. Matt brings Australia. Together, we're bringing the people we love to Porto Alegre for our wedding celebration. Think flowers and guitar strings, boots and a beautiful table, and room for both our families.",
storyClosing:'Good food. Loud music. Our favourite people.',heritageBrazil:"A little Brazilian warmth, wherever you're coming from.",heritageAustralia:'A little Australian sunshine, all the way to Brazil.',
ceremonyEyebrow:'WHERE WE’LL SAY “I DO”',ceremonyTitle:'The ceremony',churchEnglish:'St. John the Baptist Parish',brazil:'Brazil',timePending:'The exact date and ceremony time will be shared here.',viewMap:'View on Google Maps',
travelEyebrow:'FROM NEAR, FAR & THE OTHER SIDE OF THE WORLD',travelTitle:'Make a little journey of it.',travelIntro:"Whether you're coming across town or crossing an ocean, we're so glad you're part of this.",
travelGettingTitle:'Getting to Porto Alegre',travelGettingText:"For our guests travelling from Australia and elsewhere, we'll share planning information here as our plans take shape. Please wait for the confirmed wedding date before booking.",
travelStayingTitle:'A place to settle in',travelStayingText:'Suggestions for where to stay and how to get to the ceremony will follow. For now, keep December 2028 in mind.',
travelCelebratingTitle:'More than a day',travelCelebratingText:"We love good food, music and exploring together. We'll add the celebration details and any plans around the wedding here when they're confirmed.",
letterEyebrow:'SOMETHING IN THE POST FOR YOU',letterTitle:'We saved you a little letter.',letterIntro:'The exact date is still to come. For now, let us know if you hope to celebrate with us.',openLetter:'Open your invitation',scrollOpen:'Scroll to open',
letterSalutation:'Dear family & friends,',letterBody:"We'd love to have you with us in Brazil. Send us a little note below.",
nameLabel:'Your name',emailLabel:'Email address',attendanceLabel:'Will you join us?',yes:'Yes',maybe:'Hopefully',no:'No',guestsLabel:'Number of guests',guestNamesLabel:'Names of other guests',optional:'Optional',dietaryLabel:'Dietary requirements',dietaryPlaceholder:'e.g. vegetarian, gluten-free, allergies…',messageLabel:'A note for us',messagePlaceholder:'A little hello is always welcome.',
privacyNote:'Your reply is sent to Bibi & Matt by email via FormSubmit, only to help us plan the celebration.',sendRsvp:'Send RSVP',sending:'Sending your letter…',
successTitle:'Your letter is on its way.',successText:"Thank you for getting in touch. We can't wait to share more with you.",letterSignature:'With love, Bibi & Matt',
errorText:"We couldn't confirm delivery. Your answers are still here. Please try again later, or email us directly.",emailUs:'Email Bibi & Matt',
activationText:'Email delivery is awaiting activation. Your reply has not been confirmed. Please email us directly for now.',
footerLine:'Two countries. Our favourite people. One celebration.',backTop:'Back to top',
pageTitle:'Bibi & Matt | Porto Alegre · December 2028',pageDescription:'Two families. One table. Join Bibi and Matt for their wedding celebration in Porto Alegre, Brazil, in December 2028. Exact date to be confirmed.'
},
pt: {
skip:'Pular para o conteúdo',navLabel:'Navegação principal',navStory:'Nossa história',navCeremony:'A cerimônia',navTravel:'Sua viagem',themeLabel:'Tema visual australiano',australia:'Austrália',
heroAlt:'Ilustração da orla de Porto Alegre ao pôr do sol, uma mesa com comidas brasileiras e australianas, flores, uma guitarra e coturnos pretos sobre uma cadeira.',
heroEyebrow:'BRASIL & AUSTRÁLIA, JUNTOS',heroTitle:'Nossa forma<br>favorita de harmonia.',weddingCelebration:'CELEBRAÇÃO DO NOSSO CASAMENTO',heroLocation:'Porto Alegre, Brasil',date:'Dezembro de 2028',dateNote:'Data exata a confirmar',heroCta:'Uma cartinha para você',
detailsLabel:'Informações principais',ceremonyLabel:'A CERIMÔNIA',celebrationLabel:'A CELEBRAÇÃO',dateNoteShort:'Data a confirmar',tableTitle:'DUAS FAMÍLIAS. UMA SÓ MESA.',tableSmall:'Sabores do Brasil e da Austrália,',tableSmallEnd:'família e amigos.',
storyEyebrow:'UM POUCO DE BRASIL. UM POUCO DE AUSTRÁLIA.',storyTitle:'Muito<br>de nós.',storyLead:'Dois países, o amor pela música, pela comida, pelas viagens e pelas artes, e uma celebração que reúne tudo isso.',
storyText:'Bibi traz o Brasil. Matt traz a Austrália. Juntos, vamos reunir as pessoas que amamos em Porto Alegre para celebrar nosso casamento. Imagine flores e cordas de guitarra, coturnos e uma mesa linda, com lugar para as nossas duas famílias.',
storyClosing:'Comida boa. Música alta. Nossas pessoas favoritas.',heritageBrazil:'Um pouco do calor brasileiro, de onde quer que você venha.',heritageAustralia:'Um pouco do sol australiano, até aqui no Brasil.',
ceremonyEyebrow:'ONDE VAMOS DIZER “SIM”',ceremonyTitle:'A cerimônia',churchEnglish:'Paróquia São João Batista, em Porto Alegre',brazil:'Brasil',timePending:'A data exata e o horário da cerimônia serão divulgados aqui.',viewMap:'Ver no Google Maps',
travelEyebrow:'DE PERTO, DE LONGE E DO OUTRO LADO DO MUNDO',travelTitle:'Que tal aproveitar a viagem?',travelIntro:'Seja atravessando a cidade ou um oceano, ficamos muito felizes por ter você com a gente.',
travelGettingTitle:'Chegando a Porto Alegre',travelGettingText:'Para quem vem da Austrália ou de outros lugares, vamos compartilhar informações para a viagem conforme os planos forem tomando forma. Aguarde a confirmação da data antes de fazer reservas.',
travelStayingTitle:'Um cantinho para ficar',travelStayingText:'Em breve, teremos sugestões de hospedagem e informações sobre como chegar à cerimônia. Por enquanto, reserve dezembro de 2028 nos seus planos.',
travelCelebratingTitle:'Mais que um dia',travelCelebratingText:'Adoramos comida boa, música e explorar lugares juntos. Os detalhes da festa e os planos para os dias próximos ao casamento serão publicados aqui quando estiverem confirmados.',
letterEyebrow:'CHEGOU UMA CARTINHA PARA VOCÊ',letterTitle:'Guardamos uma cartinha para você.',letterIntro:'A data exata ainda está por vir. Por enquanto, conte para nós se você pretende celebrar com a gente.',openLetter:'Abra seu convite',scrollOpen:'Role para abrir',
letterSalutation:'Querida família e queridos amigos,',letterBody:'Vamos adorar ter vocês com a gente no Brasil. Deixem uma mensagem aqui embaixo.',
nameLabel:'Seu nome',emailLabel:'Seu e-mail',attendanceLabel:'Você vem celebrar com a gente?',yes:'Sim',maybe:'Espero que sim',no:'Não',guestsLabel:'Número de pessoas',guestNamesLabel:'Nomes dos acompanhantes',optional:'Opcional',dietaryLabel:'Restrições alimentares',dietaryPlaceholder:'Ex.: vegetarianismo, sem glúten, alergias…',messageLabel:'Um recadinho para nós',messagePlaceholder:'Um oi é sempre bem-vindo.',
privacyNote:'Sua resposta será enviada por e-mail à Bibi e ao Matt via FormSubmit, apenas para ajudar a organizar a celebração.',sendRsvp:'Enviar resposta',sending:'Enviando sua cartinha…',
successTitle:'Sua cartinha está a caminho.',successText:'Obrigada por responder! Estamos ansiosos para compartilhar mais novidades com você.',letterSignature:'Com carinho, Bibi & Matt',
errorText:'Não foi possível confirmar o envio. Suas respostas continuam aqui. Tente novamente mais tarde ou envie um e-mail para nós.',emailUs:'Enviar e-mail à Bibi e ao Matt',
activationText:'O envio por e-mail aguarda ativação. Sua resposta ainda não foi confirmada. Por enquanto, envie um e-mail diretamente para nós.',
footerLine:'Dois países. Nossas pessoas favoritas. Uma celebração.',backTop:'Voltar ao início',
pageTitle:'Bibi & Matt | Porto Alegre · Dezembro de 2028',pageDescription:'Duas famílias. Uma só mesa. Celebre o casamento de Bibi e Matt em Porto Alegre, Brasil, em dezembro de 2028. Data exata a confirmar.'
}
};
let language = 'en';
let theme = 'brasil';
let isSubmitting = false;
let lastError = '';
const getSaved = (key) => { try { return localStorage.getItem(key); } catch { return null; } };
const save = (key, value) => { try { localStorage.setItem(key, value); } catch { /* Private browsing remains fully usable. */ } };
const languagePreference = getSaved('bm-language');
const browserLanguage = (navigator.languages && navigator.languages[0]) || navigator.language || 'en';
language = languagePreference === 'pt' || languagePreference === 'en' ? languagePreference : browserLanguage.toLowerCase().startsWith('pt') ? 'pt' : 'en';
theme = getSaved('bm-theme') === 'australia' ? 'australia' : 'brasil';
const t = (key) => translations[language][key];
const form = document.querySelector('#rsvp-form');
const status = document.querySelector('#form-status');
const sendButton = form.querySelector('button[type="submit"]');
function updateHeritage() {
 const note = document.querySelector('#heritage-note span:last-child');
 note.dataset.i18n = theme === 'australia' ? 'heritageAustralia' : 'heritageBrazil';
 note.textContent = t(note.dataset.i18n);
}
function showError(key) {
 lastError = key;
 status.replaceChildren(document.createTextNode(t(key) + ' '));
 const link = document.createElement('a');
 link.href = 'mailto:souzabibi@hotmail.com,matt@mattcarolan.net?subject=' + encodeURIComponent('Bibi & Matt | Wedding RSVP');
 link.textContent = t('emailUs');
 status.append(link);
 status.classList.add('error');
}
function setLanguage(next, persist = true) {
 language = next;
 document.documentElement.lang = next === 'pt' ? 'pt-BR' : 'en';
 document.querySelectorAll('[data-i18n]').forEach((el) => {
   const value = t(el.dataset.i18n);
   if (el.dataset.i18n === 'heroTitle' || el.dataset.i18n === 'storyTitle') {
     el.replaceChildren();
     value.split('<br>').forEach((line, i) => { if (i) el.append(document.createElement('br')); el.append(document.createTextNode(line)); });
   } else el.textContent = value;
 });
 [['[data-i18n-placeholder]','placeholder','i18nPlaceholder'],['[data-i18n-aria]','aria-label','i18nAria'],['[data-i18n-alt]','alt','i18nAlt']].forEach(([selector, attribute, key]) => {
   document.querySelectorAll(selector).forEach((el) => el.setAttribute(attribute, t(el.dataset[key])));
 });
 document.querySelectorAll('[data-language]').forEach((button) => button.setAttribute('aria-pressed', String(button.dataset.language === next)));
 document.title = t('pageTitle');
 document.querySelector('meta[name="description"]').content = t('pageDescription');
 updateHeritage();
 if (isSubmitting) sendButton.querySelector('span').textContent = t('sending');
 if (lastError) showError(lastError);
 if (persist) save('bm-language', next);
}
function setTheme(next, persist = true) {
 theme = next;
 document.documentElement.dataset.theme = next;
 document.querySelector('#culture-switch').setAttribute('aria-checked', String(next === 'australia'));
 document.querySelector('meta[name="theme-color"]').content = next === 'australia' ? '#173b3e' : '#34132f';
 updateHeritage();
 if (persist) save('bm-theme', next);
}
document.querySelectorAll('[data-language]').forEach((button) => button.addEventListener('click', () => setLanguage(button.dataset.language)));
document.querySelector('#culture-switch').addEventListener('click', () => setTheme(theme === 'brasil' ? 'australia' : 'brasil'));
setLanguage(language, false);
setTheme(theme, false);
const stage = document.querySelector('#envelope-stage');
const letter = document.querySelector('#rsvp-letter');
const openButton = document.querySelector('#open-letter');
function openLetter() {
 if (stage.classList.contains('is-open')) return;
 stage.classList.add('is-open');
 letter.inert = false;
 openButton.setAttribute('aria-expanded','true');
}
openButton.addEventListener('click', () => {
 openLetter();
 window.setTimeout(() => document.querySelector('#guest-name').focus({ preventScroll:true }), matchMedia('(prefers-reduced-motion: reduce)').matches ? 0 : 850);
});
letter.addEventListener('focusin', openLetter);
if ('IntersectionObserver' in window) {
 const observer = new IntersectionObserver((entries) => {
   if (entries.some((entry) => entry.isIntersecting)) { openLetter(); observer.disconnect(); }
 }, { threshold:.18, rootMargin:'0px 0px -40px 0px' });
 observer.observe(stage);
}
function updateAttendance() {
 const no = form.querySelector('input[name="Attendance"]:checked')?.value === 'No';
 form.querySelectorAll('.guest-count-row select, #guest-names').forEach((input) => { input.disabled = no; });
 const row = form.querySelector('.guest-count-row');
 row.style.opacity = no ? '.45' : '1';
}
form.querySelectorAll('input[name="Attendance"]').forEach((input) => input.addEventListener('change',updateAttendance));
form.addEventListener('submit', async (event) => {
 event.preventDefault();
 if (isSubmitting || !form.reportValidity()) return;
 if (form.elements._honey.value) return;
 isSubmitting = true;
 lastError = '';
 status.textContent = '';
 status.classList.remove('error');
 sendButton.disabled = true;
 sendButton.querySelector('span').textContent = t('sending');
 const payload = Object.fromEntries(new FormData(form).entries());
 payload['Response language'] = language === 'pt' ? 'Português (Brasil)' : 'English';
 payload['Wedding date'] = 'December 2028 — exact date to be confirmed';
 payload._subject = 'Bibi & Matt | RSVP | ' + payload.name;
 if (payload.Attendance === 'No') payload['Number of guests'] = '0';
 const controller = new AbortController();
 const timer = window.setTimeout(() => controller.abort(), 20000);
 try {
   const response = await fetch('https://formsubmit.co/ajax/souzabibi@hotmail.com', {
     method:'POST',headers:{'Content-Type':'application/json','Accept':'application/json'},
     body:JSON.stringify(payload),signal:controller.signal
   });
   const result = await response.json();
   if (!response.ok || (result.success !== true && result.success !== 'true')) throw new Error('Submission not acknowledged');
   if (/activat|confirm your email|check your email|verif/i.test(result.message || '')) {
     showError('activationText');
   } else {
     form.hidden = true;
     const success = document.querySelector('#rsvp-success');
     success.hidden = false;
     success.focus({preventScroll:true});
     // Only a real service acknowledgement reaches this state.
   }
 } catch {
   showError('errorText');
 } finally {
   clearTimeout(timer);
   isSubmitting = false;
   sendButton.disabled = false;
   sendButton.querySelector('span').textContent = t('sendRsvp');
 }
});
})();