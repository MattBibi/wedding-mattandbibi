(() => {
'use strict';
const translations = {
  "en": {
    "skip": "Skip to content",
    "navLabel": "Main navigation",
    "navStory": "Our story",
    "navCeremony": "The ceremony",
    "navTravel": "Your journey",
    "themeLabel": "Australian visual theme",
    "australia": "Australia",
    "heroAlt": "An artistic Porto Alegre waterfront at sunset, with the Gasômetro chimney, flowers, a symbolic family table, black boots on a wooden chair and a red guitar leaning against it.",
    "heroEyebrow": "BRAZIL & AUSTRALIA, TOGETHER",
    "heroTitle": "Our favourite<br>kind of harmony.",
    "weddingCelebration": "OUR CHURCH WEDDING",
    "heroLocation": "Porto Alegre, Brazil",
    "date": "December 2027",
    "dateNote": "Exact date to be confirmed",
    "heroCta": "A little letter for you",
    "detailsLabel": "At a glance",
    "ceremonyLabel": "THE CEREMONY",
    "celebrationLabel": "WHEN WE SAY “I DO”",
    "dateNoteShort": "Date to be confirmed",
    "tableTitle": "TWO FAMILIES. COMING TOGETHER.",
    "tableSmall": "Brazil, Australia and the people we love.",
    "tableSmallEnd": "Together for our wedding in Brazil.",
    "storyEyebrow": "A LITTLE BRAZIL. A LITTLE AUSTRALIA.",
    "storyTitle": "A whole lot<br>of us.",
    "storyLead": "Two countries, a shared love of music, travel and the arts, and two families coming together.",
    "storyText": "Bibi brings Brazil. Matt brings Australia. In December 2027, we would love you to join us for our church wedding at St. John the Baptist Parish in Porto Alegre. We will share the exact date, ceremony time and further details here as our plans take shape.",
    "storyClosing": "Two families. Our favourite people. One wedding.",
    "heritageBrazil": "A little Brazilian warmth, wherever you're coming from.",
    "heritageAustralia": "A little Australian sunshine, all the way to Brazil.",
    "ceremonyEyebrow": "WHERE WE’LL SAY “I DO”",
    "ceremonyTitle": "The ceremony",
    "churchEnglish": "St. John the Baptist Parish",
    "brazil": "Brazil",
    "timePending": "The exact date and ceremony time will be shared here.",
    "viewMap": "View on Google Maps",
    "travelEyebrow": "FROM NEAR, FAR & THE OTHER SIDE OF THE WORLD",
    "travelTitle": "Make a little journey of it.",
    "travelIntro": "Whether you're coming across town or crossing an ocean, we're so glad you're part of this.",
    "travelGettingTitle": "Getting to Porto Alegre",
    "travelGettingText": "For our guests travelling from Australia and elsewhere, we'll share planning information here as our plans take shape. Please wait for the confirmed wedding date before booking.",
    "travelStayingTitle": "A place to settle in",
    "travelStayingText": "Suggestions for where to stay and how to get to the church will follow. For now, keep December 2027 in mind.",
    "travelCelebratingTitle": "More details to come",
    "travelCelebratingText": "This is an early announcement of our church wedding in Brazil. We will update this page with the confirmed date, ceremony time and practical information.",
    "letterEyebrow": "SOMETHING IN THE POST FOR YOU",
    "letterTitle": "We saved you a little letter.",
    "letterIntro": "The exact date is still to come. For now, let us know if you hope to join us at the church in December 2027.",
    "openLetter": "Click to Open",
    "letterSalutation": "Dear family & friends,",
    "letterBody": "We would love you to join us for our church wedding in Porto Alegre in December 2027. While we confirm the exact date, send us a little note to let us know whether you hope to be there.",
    "nameLabel": "Your name",
    "emailLabel": "Email address",
    "attendanceLabel": "Do you hope to join us at the church?",
    "yes": "Yes",
    "maybe": "Hopefully",
    "no": "No",
    "guestsLabel": "Number of guests",
    "guestNamesLabel": "Names of other guests",
    "optional": "Optional",
    "messageLabel": "A note for us",
    "messagePlaceholder": "A little hello is always welcome.",
    "privacyNote": "Your reply is sent to Bibi & Matt by email via FormSubmit, only to help us plan our church wedding.",
    "sendRsvp": "Send RSVP",
    "sending": "Sending your letter…",
    "successTitle": "Your letter is on its way.",
    "successText": "Thank you for getting in touch. We can't wait to share more with you.",
    "letterSignature": "With love, Bibi & Matt",
    "errorText": "We couldn't confirm delivery. Your answers are still here. Please try again later, or email us directly.",
    "emailUs": "Email Bibi & Matt",
    "activationText": "Email delivery is awaiting activation. Your reply has not been confirmed. Please email us directly for now.",
    "footerLine": "Two countries. Our favourite people. One wedding.",
    "backTop": "Back to top",
    "pageTitle": "Bibi & Matt | Porto Alegre · December 2027",
    "pageDescription": "Join Bibi and Matt for their church wedding at St. John the Baptist Parish in Porto Alegre, Brazil, in December 2027. Exact date and further details to come."
  },
  "pt": {
    "skip": "Pular para o conteúdo",
    "navLabel": "Navegação principal",
    "navStory": "Nossa história",
    "navCeremony": "A cerimônia",
    "navTravel": "Sua viagem",
    "themeLabel": "Tema visual australiano",
    "australia": "Austrália",
    "heroAlt": "Ilustração da orla de Porto Alegre ao pôr do sol, com a chaminé do Gasômetro, flores, uma mesa simbolizando a união das famílias, coturnos pretos sobre uma cadeira de madeira e uma guitarra vermelha apoiada nela.",
    "heroEyebrow": "BRASIL & AUSTRÁLIA, JUNTOS",
    "heroTitle": "Nossa forma<br>favorita de harmonia.",
    "weddingCelebration": "NOSSO CASAMENTO NA IGREJA",
    "heroLocation": "Porto Alegre, Brasil",
    "date": "Dezembro de 2027",
    "dateNote": "Data exata a confirmar",
    "heroCta": "Uma cartinha para você",
    "detailsLabel": "Informações principais",
    "ceremonyLabel": "A CERIMÔNIA",
    "celebrationLabel": "QUANDO VAMOS DIZER “SIM”",
    "dateNoteShort": "Data a confirmar",
    "tableTitle": "DUAS FAMÍLIAS. UMA UNIÃO.",
    "tableSmall": "Brasil, Austrália e as pessoas que amamos.",
    "tableSmallEnd": "Juntos para o nosso casamento no Brasil.",
    "storyEyebrow": "UM POUCO DE BRASIL. UM POUCO DE AUSTRÁLIA.",
    "storyTitle": "Muito<br>de nós.",
    "storyLead": "Dois países, o amor pela música, pelas viagens e pelas artes, e duas famílias que se unem.",
    "storyText": "Bibi traz o Brasil. Matt traz a Austrália. Em dezembro de 2027, vamos adorar ter vocês conosco no nosso casamento na Paróquia São João Batista, em Porto Alegre. Vamos compartilhar aqui a data exata, o horário da cerimônia e mais informações conforme os planos forem tomando forma.",
    "storyClosing": "Duas famílias. Nossas pessoas favoritas. Um casamento.",
    "heritageBrazil": "Um pouco do calor brasileiro, de onde quer que você venha.",
    "heritageAustralia": "Um pouco do sol australiano, até aqui no Brasil.",
    "ceremonyEyebrow": "ONDE VAMOS DIZER “SIM”",
    "ceremonyTitle": "A cerimônia",
    "churchEnglish": "Paróquia São João Batista, em Porto Alegre",
    "brazil": "Brasil",
    "timePending": "A data exata e o horário da cerimônia serão divulgados aqui.",
    "viewMap": "Ver no Google Maps",
    "travelEyebrow": "DE PERTO, DE LONGE E DO OUTRO LADO DO MUNDO",
    "travelTitle": "Que tal aproveitar a viagem?",
    "travelIntro": "Seja atravessando a cidade ou um oceano, ficamos muito felizes por ter você com a gente.",
    "travelGettingTitle": "Chegando a Porto Alegre",
    "travelGettingText": "Para quem vem da Austrália ou de outros lugares, vamos compartilhar informações para a viagem conforme os planos forem tomando forma. Aguarde a confirmação da data antes de fazer reservas.",
    "travelStayingTitle": "Um cantinho para ficar",
    "travelStayingText": "Em breve, teremos sugestões de hospedagem e informações sobre como chegar à igreja. Por enquanto, reserve dezembro de 2027 nos seus planos.",
    "travelCelebratingTitle": "Mais informações em breve",
    "travelCelebratingText": "Este é um primeiro anúncio do nosso casamento na igreja, no Brasil. Vamos atualizar esta página com a data confirmada, o horário da cerimônia e as informações práticas.",
    "letterEyebrow": "CHEGOU UMA CARTINHA PARA VOCÊ",
    "letterTitle": "Guardamos uma cartinha para você.",
    "letterIntro": "A data exata ainda está por vir. Por enquanto, conte para nós se você espera estar conosco na igreja em dezembro de 2027.",
    "openLetter": "Clique para Abrir",
    "letterSalutation": "Querida família e queridos amigos,",
    "letterBody": "Vamos adorar ter vocês conosco no nosso casamento na igreja, em Porto Alegre, em dezembro de 2027. Enquanto confirmamos a data exata, deixem um recadinho para contar se esperam estar presentes.",
    "nameLabel": "Seu nome",
    "emailLabel": "Seu e-mail",
    "attendanceLabel": "Você espera estar conosco na igreja?",
    "yes": "Sim",
    "maybe": "Espero que sim",
    "no": "Não",
    "guestsLabel": "Número de pessoas",
    "guestNamesLabel": "Nomes dos acompanhantes",
    "optional": "Opcional",
    "messageLabel": "Um recadinho para nós",
    "messagePlaceholder": "Um oi é sempre bem-vindo.",
    "privacyNote": "Sua resposta será enviada por e-mail à Bibi e ao Matt via FormSubmit, apenas para ajudar a organizar nosso casamento na igreja.",
    "sendRsvp": "Enviar resposta",
    "sending": "Enviando sua cartinha…",
    "successTitle": "Sua cartinha está a caminho.",
    "successText": "Obrigada por responder! Estamos ansiosos para compartilhar mais novidades com você.",
    "letterSignature": "Com carinho, Bibi & Matt",
    "errorText": "Não foi possível confirmar o envio. Suas respostas continuam aqui. Tente novamente mais tarde ou envie um e-mail para nós.",
    "emailUs": "Enviar e-mail à Bibi e ao Matt",
    "activationText": "O envio por e-mail aguarda ativação. Sua resposta ainda não foi confirmada. Por enquanto, envie um e-mail diretamente para nós.",
    "footerLine": "Dois países. Nossas pessoas favoritas. Um casamento.",
    "backTop": "Voltar ao início",
    "pageTitle": "Bibi & Matt | Porto Alegre · Dezembro de 2027",
    "pageDescription": "Participe do casamento de Bibi e Matt na Paróquia São João Batista, em Porto Alegre, Brasil, em dezembro de 2027. Data exata e mais informações em breve."
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
let petalTimer;
function sweepPetals(next) {
 const layer = document.querySelector('#petal-transition');
 clearTimeout(petalTimer);
 layer.replaceChildren();
 const toggle = document.querySelector('#culture-switch');
 toggle.classList.remove('is-switching');
 if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;
 const fragment = document.createDocumentFragment();
 for (let i = 0; i < 28; i++) {
  const petal = document.createElement('span');
  petal.className = 'flying-petal ' + (next === 'australia' ? 'wattle-petal' : 'orchid-petal');
  petal.style.setProperty('--y', ((i * 37) % 100) + 'vh');
  petal.style.setProperty('--delay', (i % 7 * .065) + 's');
  petal.style.setProperty('--size', (9 + i % 5 * 3) + 'px');
  petal.style.setProperty('--drift', (i % 2 ? 18 : -16) + 'vh');
  fragment.append(petal);
 }
 layer.append(fragment);
 void toggle.offsetWidth;
 toggle.classList.add('is-switching');
 petalTimer = setTimeout(() => {layer.replaceChildren();toggle.classList.remove('is-switching');}, 2100);
}
function setTheme(next, persist = true) {
 if (persist && next !== theme) sweepPetals(next);
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
// The sealed letter opens only when its wax seal is activated.
function openLetter() {
 if (stage.classList.contains('is-open')) return;
 const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
 openButton.setAttribute('aria-expanded','true');
 stage.classList.add('is-open');
 window.setTimeout(() => {
   letter.inert = false;
   document.querySelector('#guest-name').focus({preventScroll:true});
   openButton.hidden = true;
 }, reduced ? 0 : 1700);
}
openButton.addEventListener('click',openLetter);
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
 payload['Wedding date'] = 'December 2027 - exact date to be confirmed';
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
