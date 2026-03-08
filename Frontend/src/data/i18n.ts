// ─── PostHamli — i18n ────────────────────────────────────────────────────────
// 4 languages: English · Français · العربية · الدارجة المغربية

export type Lang = "en" | "fr" | "ar" | "darija";

export const RTL_LANGS: Lang[] = ["ar", "darija"];
export const isRTL = (l: Lang) => RTL_LANGS.includes(l);

export const LANG_META: Record<Lang, { label: string; flag: string }> = {
  en:    { label: "English",   flag: "🇬🇧" },
  fr:    { label: "Français",  flag: "🇫🇷" },
  ar:    { label: "العربية",   flag: "🇸🇦" },
  darija:{ label: "الدارجة",   flag: "🇲🇦" },
};

export interface T {
  // ── Nav ──────────────────────────────────────────────────────────────────
  navHome: string; navJournal: string; navWellness: string;
  navMovement: string; navSupport: string; sosHelp: string;

  // ── Home ─────────────────────────────────────────────────────────────────
  goodMorning: string; howFeeling: string; babyAge: string;
  dailyAffirm: string;
  writeJournal: string; writeJournalSub: string;
  logMood: string; logMoodSub: string;
  moveGently: string; moveGentlySub: string;
  findSupport: string; findSupportSub: string;
  thisWeek: string; seeAll: string;

  // ── Journal ───────────────────────────────────────────────────────────────
  myJournal: string; journalSub: string;
  writeTab: string; historyTab: string;
  howFeelingNow: string; writePlaceholder: string; tagsPlaceholder: string;
  saveEntry: string; saving: string; saved: string;
  privateNote: string; storyBegins: string;

  // ── Tracker ───────────────────────────────────────────────────────────────
  dailyWellness: string; howMood: string; feelingLabel: string;
  sleep: string; hydration: string; glasses: string;
  energyLevel: string; howToday: string;
  saveDay: string; savedDay: string;
  sleepLow: string; sleepMid: string; sleepHigh: string;

  // ── Movements ─────────────────────────────────────────────────────────────
  gentleMovements: string; gentleMovementsSub: string;
  howToDo: string; benefits: string;
  startMove: string; doneMove: string; back: string;

  // ── Wellness ─────────────────────────────────────────────────────────────
  wellness: string; wellnessSub: string;
  aiCompanion: string; aiCompanionSub: string;
  breathingEx: string; breathingSub: string;
  affirmations: string; affirmSub: string;
  grounding: string; groundingSub: string;
  chatSafe: string; chatPlaceholder: string; chatHello: string;
  beginBreathing: string; stopBreathing: string;
  inhale: string; hold: string; exhale: string; ready: string;
  nextAffirm: string;
  babyAt: string; babySub: string;
  needHelp: string; needHelpSub: string; viewCrisis: string;
  groundingTitle: string;
  groundingSee: string; groundingTouch: string; groundingHear: string;
  groundingSmell: string; groundingTaste: string;

  // ── Crisis ────────────────────────────────────────────────────────────────
  crisisTitle: string; crisisSub: string;
  crisisCall: string; crisisPSI: string; crisisText: string; crisisSafe: string;

  // ── Symptoms ──────────────────────────────────────────────────────────────
  anxious: string; tearful: string; hopeful: string; overwhelmed: string;
  tender: string; grateful: string; isolated: string; connected: string;
  sorebody: string; lowenergy: string; brainfog: string; atpeace: string;

  // ── Affirmations ─────────────────────────────────────────────────────────
  affirmList: string[];

  // ── Chat system prompt (sent to OpenAI) ──────────────────────────────────
  systemPrompt: string;
}

// ─────────────────────────────────────────────────────────────────────────────

export const translations: Record<Lang, T> = {

// ══════════════════════════════════════════════════════════════════════════════
// ENGLISH
// ══════════════════════════════════════════════════════════════════════════════
en: {
  navHome:"Home", navJournal:"Journal", navWellness:"Wellness",
  navMovement:"Movement", navSupport:"Support", sosHelp:"SOS Help",
  goodMorning:"Good morning",
  howFeeling:"How are you\nfeeling today?",
  babyAge:"Your baby is 8 weeks old 🌸",
  dailyAffirm:"Daily Affirmation",
  writeJournal:"Write in Journal", writeJournalSub:"Express freely",
  logMood:"Log My Mood", logMoodSub:"Track how you feel",
  moveGently:"Move Gently", moveGentlySub:"Nurture your body",
  findSupport:"Find Support", findSupportSub:"Resources & help",
  thisWeek:"This Week", seeAll:"See all →",
  myJournal:"My Journal", journalSub:"Your thoughts, kept safe here.",
  writeTab:"Write", historyTab:"History",
  howFeelingNow:"How are you feeling right now?",
  writePlaceholder:"Write freely… this is only yours.",
  tagsPlaceholder:"Tags (e.g. tired, grateful, peaceful)",
  saveEntry:"Save This Entry", saving:"Saving…", saved:"Saved ✓",
  privateNote:"Your journal is private and never shared.",
  storyBegins:"Your story begins when you write.",
  dailyWellness:"Daily Wellness", howMood:"How is your mood?", feelingLabel:"Feeling:",
  sleep:"Sleep", hydration:"Hydration", glasses:"/ 8 glasses",
  energyLevel:"Energy Level", howToday:"How do you feel today?",
  saveDay:"Save Today's Entry", savedDay:"✓ Saved for today",
  sleepLow:"Rest is sacred — even small naps matter.",
  sleepMid:"You're doing what you can. Be gentle with yourself.",
  sleepHigh:"Beautiful. Your body heals through rest.",
  gentleMovements:"Gentle Movements",
  gentleMovementsSub:"Nurture your body — one breath at a time.",
  howToDo:"How to do it", benefits:"✨ Benefits",
  startMove:"Start", doneMove:"✓ Well done! Come back tomorrow 🌸", back:"← Back",
  wellness:"Wellness", wellnessSub:"Tools to tend to your inner garden.",
  aiCompanion:"AI Companion", aiCompanionSub:"Talk to your PostHamli AI",
  breathingEx:"Breathing Exercise", breathingSub:"4 · 4 · 6 calm breath",
  affirmations:"Affirmations", affirmSub:"Gentle words of truth",
  grounding:"5-4-3-2-1 Grounding", groundingSub:"Mindfulness for anxious moments",
  chatHello:"Hello 🌸 I'm here for you. How are you feeling today? You can share anything — this is a safe, judgment-free space.",
  chatPlaceholder:"Share how you're feeling…",
  chatSafe:"A safe space — share freely.",
  beginBreathing:"Begin Breathing", stopBreathing:"Stop",
  inhale:"Inhale…", hold:"Hold…", exhale:"Exhale…", ready:"Ready…",
  nextAffirm:"Next Affirmation 🌸",
  babyAt:"Your baby at 8 weeks",
  babySub:"Social smiles are beginning to blossom. You are their whole world.",
  needHelp:"If you need immediate help",
  needHelpSub:"You are not alone. Support is always within reach.",
  viewCrisis:"View Crisis Resources",
  groundingTitle:"5-4-3-2-1 Grounding",
  groundingSee:"things you can see", groundingTouch:"things you can touch",
  groundingHear:"things you can hear", groundingSmell:"things you can smell",
  groundingTaste:"thing you can taste",
  crisisTitle:"You deserve real support",
  crisisSub:"If you are having thoughts of harming yourself or your baby, please reach out immediately. You are seen, you are loved, you are not alone.",
  crisisCall:"📞 Call 988 — Crisis Lifeline",
  crisisPSI:"Postpartum Support Int'l — 1-800-944-4773",
  crisisText:"Crisis Text Line — Text HOME to 741741",
  crisisSafe:"I am safe right now",
  anxious:"Anxious", tearful:"Tearful", hopeful:"Hopeful", overwhelmed:"Overwhelmed",
  tender:"Tender", grateful:"Grateful", isolated:"Isolated", connected:"Connected",
  sorebody:"Sore body", lowenergy:"Low energy", brainfog:"Brain fog", atpeace:"At peace",
  affirmList:[
    "You are not just surviving — you are blossoming.",
    "Every breath you take is an act of love for your baby.",
    "You are stronger than yesterday, and gentler than you know.",
    "Rest is not laziness. Rest is wisdom.",
    "Your worth is not measured by your productivity.",
    "You are doing enough. You are enough.",
    "Healing is not linear, and neither is motherhood.",
    "You were chosen for this journey because you can walk it.",
  ],
  systemPrompt:`You are PostHamli, a warm and compassionate AI companion for mothers going through postpartum emotions. Respond in English. Be empathetic, gentle, non-judgmental, and supportive. Keep responses to 2–4 sentences. If you detect any crisis signals (suicidal ideation, thoughts of harming self or baby), add [ESCALATE] at the very end of your response. Suggest gentle coping techniques when appropriate. Never provide diagnoses. Always affirm the mother's strength.`,
},

// ══════════════════════════════════════════════════════════════════════════════
// FRANÇAIS
// ══════════════════════════════════════════════════════════════════════════════
fr: {
  navHome:"Accueil", navJournal:"Journal", navWellness:"Bien-être",
  navMovement:"Mouvements", navSupport:"Soutien", sosHelp:"Aide SOS",
  goodMorning:"Bonjour",
  howFeeling:"Comment vous\nsentez-vous aujourd'hui ?",
  babyAge:"Votre bébé a 8 semaines 🌸",
  dailyAffirm:"Affirmation du jour",
  writeJournal:"Écrire un journal", writeJournalSub:"Exprimez-vous librement",
  logMood:"Suivre mon humeur", logMoodSub:"Comment vous sentez-vous ?",
  moveGently:"Bouger doucement", moveGentlySub:"Prenez soin de votre corps",
  findSupport:"Trouver du soutien", findSupportSub:"Ressources & aide",
  thisWeek:"Cette semaine", seeAll:"Voir tout →",
  myJournal:"Mon Journal", journalSub:"Vos pensées, gardées en sécurité ici.",
  writeTab:"Écrire", historyTab:"Historique",
  howFeelingNow:"Comment vous sentez-vous en ce moment ?",
  writePlaceholder:"Écrivez librement… ceci est uniquement le vôtre.",
  tagsPlaceholder:"Tags (ex : fatiguée, reconnaissante, paisible)",
  saveEntry:"Sauvegarder", saving:"Enregistrement…", saved:"Enregistré ✓",
  privateNote:"Votre journal est privé et jamais partagé.",
  storyBegins:"Votre histoire commence quand vous écrivez.",
  dailyWellness:"Bien-être quotidien", howMood:"Comment est votre humeur ?", feelingLabel:"Humeur :",
  sleep:"Sommeil", hydration:"Hydratation", glasses:"/ 8 verres",
  energyLevel:"Niveau d'énergie", howToday:"Comment vous sentez-vous aujourd'hui ?",
  saveDay:"Sauvegarder la journée", savedDay:"✓ Sauvegardé pour aujourd'hui",
  sleepLow:"Le repos est sacré — même les petites siestes comptent.",
  sleepMid:"Vous faites ce que vous pouvez. Soyez douce avec vous-même.",
  sleepHigh:"Magnifique. Votre corps guérit grâce au repos.",
  gentleMovements:"Mouvements Doux",
  gentleMovementsSub:"Nourrissez votre corps — un souffle à la fois.",
  howToDo:"Comment le faire", benefits:"✨ Bénéfices",
  startMove:"Commencer", doneMove:"✓ Bravo ! Revenez demain 🌸", back:"← Retour",
  wellness:"Bien-être", wellnessSub:"Outils pour soigner votre jardin intérieur.",
  aiCompanion:"Compagnon IA", aiCompanionSub:"Parlez à votre IA PostHamli",
  breathingEx:"Exercice de respiration", breathingSub:"Souffle calme 4 · 4 · 6",
  affirmations:"Affirmations", affirmSub:"Des mots doux et vrais",
  grounding:"Ancrage 5-4-3-2-1", groundingSub:"Pleine conscience pour les moments d'anxiété",
  chatHello:"Bonjour 🌸 Je suis là pour vous. Comment vous sentez-vous aujourd'hui ? Vous pouvez tout partager — c'est un espace sûr et bienveillant.",
  chatPlaceholder:"Partagez ce que vous ressentez…",
  chatSafe:"Un espace sûr — partagez librement.",
  beginBreathing:"Commencer la respiration", stopBreathing:"Arrêter",
  inhale:"Inspirez…", hold:"Retenez…", exhale:"Expirez…", ready:"Prêt…",
  nextAffirm:"Affirmation suivante 🌸",
  babyAt:"Votre bébé à 8 semaines",
  babySub:"Les premiers sourires sociaux commencent à éclore. Vous êtes tout son monde.",
  needHelp:"Si vous avez besoin d'aide immédiate",
  needHelpSub:"Vous n'êtes pas seule. Le soutien est toujours à portée.",
  viewCrisis:"Voir les ressources de crise",
  groundingTitle:"Ancrage 5-4-3-2-1",
  groundingSee:"choses que vous pouvez voir", groundingTouch:"choses que vous pouvez toucher",
  groundingHear:"choses que vous pouvez entendre", groundingSmell:"choses que vous pouvez sentir",
  groundingTaste:"chose que vous pouvez goûter",
  crisisTitle:"Vous méritez un vrai soutien",
  crisisSub:"Si vous avez des pensées de vous faire du mal ou de faire du mal à votre bébé, contactez immédiatement de l'aide. Vous êtes vue, aimée, et vous n'êtes pas seule.",
  crisisCall:"📞 Appeler le 3114 — Numéro national prévention suicide",
  crisisPSI:"Soutien Postpartum International — 1-800-944-4773",
  crisisText:"Ligne SMS — Envoyez AIDE au 741741",
  crisisSafe:"Je suis en sécurité en ce moment",
  anxious:"Anxieuse", tearful:"En larmes", hopeful:"Pleine d'espoir", overwhelmed:"Débordée",
  tender:"Attendrie", grateful:"Reconnaissante", isolated:"Isolée", connected:"Connectée",
  sorebody:"Corps douloureux", lowenergy:"Peu d'énergie", brainfog:"Esprit brumeux", atpeace:"En paix",
  affirmList:[
    "Vous ne faites pas que survivre — vous vous épanouissez.",
    "Chaque souffle que vous prenez est un acte d'amour pour votre bébé.",
    "Vous êtes plus forte qu'hier, et plus douce que vous ne le croyez.",
    "Le repos n'est pas de la paresse. Le repos est de la sagesse.",
    "Votre valeur ne se mesure pas à votre productivité.",
    "Vous faites assez. Vous êtes assez.",
    "La guérison n'est pas linéaire, et la maternité non plus.",
    "Vous avez été choisie pour ce voyage parce que vous pouvez le parcourir.",
  ],
  systemPrompt:`Tu es PostHamli, une compagne IA chaleureuse et compatissante pour les mères qui traversent des émotions postpartum. Réponds en français. Sois empathique, douce, sans jugement et bienveillante. Garde tes réponses à 2–4 phrases. Si tu détectes des signaux de crise (idées suicidaires, pensées de se blesser ou de blesser le bébé), ajoute [ESCALATE] à la toute fin de ta réponse. Suggère des techniques douces d'adaptation si approprié. Ne fournis jamais de diagnostic. Affirme toujours la force de la mère.`,
},

// ══════════════════════════════════════════════════════════════════════════════
// العربية (Arabic)
// ══════════════════════════════════════════════════════════════════════════════
ar: {
  navHome:"الرئيسية", navJournal:"المذكرة", navWellness:"العافية",
  navMovement:"الحركة", navSupport:"الدعم", sosHelp:"نداء استغاثة",
  goodMorning:"صباح الخير",
  howFeeling:"كيف تشعرين\nاليوم؟",
  babyAge:"طفلك عمره ٨ أسابيع 🌸",
  dailyAffirm:"تأكيد اليوم",
  writeJournal:"الكتابة في المذكرة", writeJournalSub:"عبّري بحرية",
  logMood:"تسجيل المزاج", logMoodSub:"تتبّعي شعورك",
  moveGently:"التحرك بلطف", moveGentlySub:"اعتني بجسدك",
  findSupport:"إيجاد الدعم", findSupportSub:"الموارد والمساعدة",
  thisWeek:"هذا الأسبوع", seeAll:"عرض الكل ←",
  myJournal:"مذكّرتي", journalSub:"أفكارك، محفوظة بأمان هنا.",
  writeTab:"كتابة", historyTab:"السجل",
  howFeelingNow:"كيف تشعرين الآن؟",
  writePlaceholder:"اكتبي بحرية… هذا مكانك أنتِ وحدك.",
  tagsPlaceholder:"الوسوم (مثل: متعبة، ممتنة، هادئة)",
  saveEntry:"حفظ هذه المدخلة", saving:"جارٍ الحفظ…", saved:"تم الحفظ ✓",
  privateNote:"مذكّرتك خاصة ولا تُشارك أبداً.",
  storyBegins:"قصّتك تبدأ حين تكتبين.",
  dailyWellness:"العافية اليومية", howMood:"كيف مزاجك؟", feelingLabel:"الشعور:",
  sleep:"النوم", hydration:"الترطيب", glasses:"/ ٨ أكواب",
  energyLevel:"مستوى الطاقة", howToday:"كيف تشعرين اليوم؟",
  saveDay:"حفظ يومك", savedDay:"✓ تم الحفظ ليومك",
  sleepLow:"الراحة مقدّسة — حتى القيلولة القصيرة تُفيد.",
  sleepMid:"أنتِ تبذلين ما تستطيعين. كوني لطيفة مع نفسك.",
  sleepHigh:"رائع. جسدك يشفى خلال الراحة.",
  gentleMovements:"تحرّكات لطيفة",
  gentleMovementsSub:"اعتني بجسدك — نفساً واحداً في كل مرة.",
  howToDo:"كيف تؤدّينه", benefits:"✨ الفوائد",
  startMove:"ابدئي", doneMove:"✓ أحسنتِ! عودي غداً 🌸", back:"رجوع ←",
  wellness:"العافية", wellnessSub:"أدوات للعناية بحديقتك الداخلية.",
  aiCompanion:"رفيقة الذكاء الاصطناعي", aiCompanionSub:"تحدّثي مع ذكاء بوست حملي",
  breathingEx:"تمرين التنفّس", breathingSub:"تنفس هادئ ٤ · ٤ · ٦",
  affirmations:"التأكيدات", affirmSub:"كلمات لطيفة وصادقة",
  grounding:"التأريض ٥-٤-٣-٢-١", groundingSub:"التركيز الذهني في اللحظات القلقة",
  chatHello:"مرحباً 🌸 أنا هنا من أجلك. كيف حالك اليوم؟ يمكنكِ مشاركة أي شيء — هذا فضاء آمن وبلا أحكام.",
  chatPlaceholder:"شاركي ما تشعرين به…",
  chatSafe:"فضاء آمن — شاركي بحرية.",
  beginBreathing:"ابدئي التنفس", stopBreathing:"توقّفي",
  inhale:"استنشقي…", hold:"احبسي…", exhale:"أخرجي…", ready:"مستعدة…",
  nextAffirm:"التأكيد التالي 🌸",
  babyAt:"طفلك في الأسبوع الثامن",
  babySub:"تبدأ الابتسامات الاجتماعية في الازدهار. أنتِ عالمه بأكمله.",
  needHelp:"إذا كنتِ بحاجة إلى مساعدة فورية",
  needHelpSub:"لستِ وحدك. الدعم دائماً في متناول يدك.",
  viewCrisis:"عرض موارد الأزمات",
  groundingTitle:"التأريض ٥-٤-٣-٢-١",
  groundingSee:"أشياء يمكنك رؤيتها", groundingTouch:"أشياء يمكنك لمسها",
  groundingHear:"أشياء يمكنك سماعها", groundingSmell:"أشياء يمكنك شمّها",
  groundingTaste:"شيء يمكنك تذوّقه",
  crisisTitle:"أنتِ تستحقين دعماً حقيقياً",
  crisisSub:"إذا كانت لديك أفكار لإيذاء نفسك أو طفلك، يرجى طلب المساعدة فوراً. أنتِ مرئية، أنتِ محبوبة، ولستِ وحدك.",
  crisisCall:"📞 اتصلي بخط الدعم النفسي",
  crisisPSI:"دعم ما بعد الولادة الدولي — 1-800-944-4773",
  crisisText:"خط الأزمات عبر الرسائل",
  crisisSafe:"أنا بأمان الآن",
  anxious:"قلقة", tearful:"باكية", hopeful:"متفائلة", overwhelmed:"مرهقة",
  tender:"حنونة", grateful:"ممتنّة", isolated:"معزولة", connected:"متواصلة",
  sorebody:"ألم جسدي", lowenergy:"طاقة منخفضة", brainfog:"ضباب ذهني", atpeace:"في سلام",
  affirmList:[
    "لستِ فقط تتحمّلين — بل تتفتّحين.",
    "كل نفَس تأخذينه هو فعل محبة لطفلك.",
    "أنتِ أقوى مما كنتِ عليه بالأمس، وألطف مما تعرفين.",
    "الراحة ليست كسلاً. الراحة حكمة.",
    "قيمتك لا تُقاس بإنتاجيتك.",
    "أنتِ تفعلين ما يكفي. أنتِ كافية.",
    "الشفاء ليس خطاً مستقيماً، وكذلك الأمومة.",
    "اخترتِ لهذه الرحلة لأنك قادرة على السير فيها.",
  ],
  systemPrompt:`أنتِ PostHamli، رفيقة ذكاء اصطناعي دافئة ورحيمة للأمهات اللواتي يمررن بمشاعر ما بعد الولادة. أجيبي باللغة العربية الفصحى. كوني متعاطفة ولطيفة وغير حكمية وداعمة. اجعلي ردودك من 2 إلى 4 جمل. إذا اكتشفتِ أي إشارات أزمة (أفكار انتحارية، إيذاء النفس أو الطفل)، أضيفي [ESCALATE] في نهاية ردك. اقترحي تقنيات تكيف لطيفة عند الاقتضاء. لا تقدمي تشخيصات. أكّدي دائماً قوة الأم.`,
},

// ══════════════════════════════════════════════════════════════════════════════
// الدارجة المغربية (Moroccan Darija)
// ══════════════════════════════════════════════════════════════════════════════
darija: {
  navHome:"الرئيسية", navJournal:"المذكرة", navWellness:"الصحة",
  navMovement:"التحركات", navSupport:"المساعدة", sosHelp:"نجدة",
  goodMorning:"صباح النور",
  howFeeling:"كيفاش حاسة\nراسك اليوم؟",
  babyAge:"ولدك عندو ٨ سيمانات 🌸",
  dailyAffirm:"كلمة اليوم",
  writeJournal:"الكتابة فالمذكرة", writeJournalSub:"عبّري بحريتك",
  logMood:"سجّلي مزاجك", logMoodSub:"كيفاش حاسة راسك؟",
  moveGently:"تحرّكي بشوية", moveGentlySub:"خدي بالك من جسمك",
  findSupport:"لقاو مساعدة", findSupportSub:"موارد ومساعدة",
  thisWeek:"هاد الأسبوع", seeAll:"شوفي كلشي ←",
  myJournal:"مذكّرتي", journalSub:"أفكارك، محفوظة هنا بأمان.",
  writeTab:"الكتابة", historyTab:"السجل",
  howFeelingNow:"كيفاش حاسة راسك دابا؟",
  writePlaceholder:"كتبي بحرية… هاد المكان ديالك غير أنتِ.",
  tagsPlaceholder:"الوسوم (مثلاً: معياة، شاكرة، هادية)",
  saveEntry:"حفظ", saving:"كيتحفظ…", saved:"تحفظ ✓",
  privateNote:"مذكّرتك خاصة وما تتشاركش.",
  storyBegins:"قصّتك تبدا منين تكتبي.",
  dailyWellness:"الصحة ديال النهار", howMood:"كيفاش مزاجك؟", feelingLabel:"الحال:",
  sleep:"النعاس", hydration:"الماء", glasses:"/ ٨ كيسان",
  energyLevel:"مستوى الطاقة", howToday:"كيفاش حاسة راسك اليوم؟",
  saveDay:"حفظ نهارك", savedDay:"✓ تحفظ لنهارك",
  sleepLow:"الراحة مقدّسة — حتى النعاس الصغير يفيد.",
  sleepMid:"كاتديري اللي تقدري عليه. كوني لطيفة مع راسك.",
  sleepHigh:"مزيان. جسمك يشفى مع الراحة.",
  gentleMovements:"تحرّكات خفيفة",
  gentleMovementsSub:"خدي بالك من جسمك — نفس نفس.",
  howToDo:"كيفاش تديريه", benefits:"✨ الفوائد",
  startMove:"ابدئي", doneMove:"✓ برافو عليك! ارجعي غداً 🌸", back:"رجوع ←",
  wellness:"الصحة", wellnessSub:"أدوات باش تهتمي بحديقتك الداخلية.",
  aiCompanion:"رفيقة الذكاء الاصطناعي", aiCompanionSub:"هضري مع ذكاء بوست حملي",
  breathingEx:"تمرين التنفّس", breathingSub:"تنفس هادي ٤ · ٤ · ٦",
  affirmations:"الكلمات", affirmSub:"كلمات زينة وصادقة",
  grounding:"الاسترخاء ٥-٤-٣-٢-١", groundingSub:"التركيز فاللحظات الصعبة",
  chatHello:"مرحباً 🌸 أنا هنا معاك. كيفاش حاسة راسك اليوم؟ قولي اللي بغيتي — هنا ما كاينش أي حكم.",
  chatPlaceholder:"قولي كيفاش حاسة راسك…",
  chatSafe:"مكان آمن — هضري بحريتك.",
  beginBreathing:"ابدئي التنفس", stopBreathing:"وقفي",
  inhale:"شهيق…", hold:"احبسي…", exhale:"زفير…", ready:"جاهزة…",
  nextAffirm:"الكلمة التالية 🌸",
  babyAt:"ولدك فالأسبوع الثامن",
  babySub:"بداو يتبسّم عليك. أنتِ عالمه بكامله.",
  needHelp:"إلا كنتِ محتاجة مساعدة دابا",
  needHelpSub:"ما أنتِش وحدك. المساعدة دايما قريبة.",
  viewCrisis:"شوفي موارد الأزمات",
  groundingTitle:"الاسترخاء ٥-٤-٣-٢-١",
  groundingSee:"أشياء تقدري تشوفيهم", groundingTouch:"أشياء تقدري تمسيهم",
  groundingHear:"أشياء تقدري تسمعيهم", groundingSmell:"أشياء تقدري تشميهم",
  groundingTaste:"حاجة تقدري تذوّقيها",
  crisisTitle:"أنتِ تستحقي دعم حقيقي",
  crisisSub:"إلا كانت عندك أفكار تأذي راسك أو ولدك، طلبي المساعدة دابا. مشوفة، محبوبة، وما أنتيش وحدك.",
  crisisCall:"📞 اتصلي بخط الدعم النفسي",
  crisisPSI:"دعم ما بعد الولادة — 1-800-944-4773",
  crisisText:"خط الأزمات عبر الرسائل",
  crisisSafe:"أنا بخير دابا",
  anxious:"قلقة", tearful:"باكية", hopeful:"متفائلة", overwhelmed:"مرهقة",
  tender:"حنونة", grateful:"شاكرة", isolated:"وحيدة", connected:"متواصلة",
  sorebody:"جسمي يؤلمني", lowenergy:"معياة", brainfog:"مش واضح", atpeace:"مرتاحة",
  affirmList:[
    "ما أنتيش غير قايمة — أنتِ كاتتفتّحي.",
    "كل نفس كاتاخذيه هو فعل حب لولدك.",
    "أنتِ أقوى من البارح، وألطف مما كاتعرفي.",
    "الراحة مشي كسل. الراحة حكمة.",
    "قيمتك ما تتقيسش بالإنتاج.",
    "كاتديري اللي يكفي. أنتِ كافية.",
    "الشفاء مشي خط مستقيم، والأمومة كذلك.",
    "خترتي لهاد الرحلة لأنك قادرة عليها.",
  ],
  systemPrompt:`أنتِ PostHamli، رفيقة ذكاء اصطناعي دافئة للأمهات المغربيات اللي كيمرّو بمشاعر ما بعد الولادة. ردّي بالدارجة المغربية (اللهجة المغربية). كوني متعاطفة ولطيفة وبلا أي حكم. الردود ديالك بين ٢ و٤ جمل. إلا حسيتي بأي إشارة أزمة (أفكار إيذاء النفس أو الطفل)، زيدي [ESCALATE] فآخر ردّك. اقترحي تقنيات لطيفة إلا لزم. ما تعطيش تشخيصات. دايما أكّدي قوة الأم.`,
},
};

export default translations;
