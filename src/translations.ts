export type Language = 'pt-BR' | 'en' | 'ja';

export const translations = {
  'pt-BR': {
    hero: {
      title: "Feliz Aniversário!",
      subtitle: "Para a minha gatinha mais talentosa <3",
      start: "START GAME"
    },
    timer: {
      title: "LEVEL 1: O INÍCIO",
      since: "Juntos desde 01/01/2026",
      days: "DIAS",
      hours: "HORAS",
      minutes: "MIN",
      seconds: "SEG"
    },
    gallery: {
      title: "LEVEL 2: MEMÓRIAS",
      photo: "Foto"
    },
    quiz: {
      title: "LEVEL 3: QUIZ DO AMOR",
      question: "Pergunta",
      result: "Resultado!",
      score: (score: number, total: number) => `Você acertou ${score} de ${total}!`,
      perfect: "PERFEITO! VOCÊ NOS CONHECE TÃO BEM! ❤️",
      tryAgain: "Quase lá! Vamos tentar de novo?",
      buttonTryAgain: "Tentar Novamente",
      questions: [
        {
          question: "Qual a Nossa comida favorita?",
          options: ["Pizza", "Hambúrguer", "Sushi", "Lasanha"],
          correct: 1
        },
        {
          question: "Onde foi nosso primeiro encontro?",
          options: ["Cinema", "Parque", "No Ginásio", "Praia"],
          correct: 2
        },
        {
          question: "Qual série nós amamos assistir juntos?",
          options: ["Friends", "Modern Family", "Stranger Things", "Brooklyn 99"],
          correct: 1
        }
      ]
    },
    level4: {
      title: "LEVEL 4: FALE COMIGO",
      clickMe: "Clique nos bonequinhos!",
      messages: [
        { text: "Oi minha gatinha! ❤️", sender: 'boy' },
        { text: "Oi labubaby! Tudo bem?", sender: 'girl' },
        { text: "Você é muito talentosa!", sender: 'boy' },
        { text: "Aww, obrigada amor!", sender: 'girl' },
        { text: "Tenho muito orgulho de você!", sender: 'boy' },
        { text: "Oi lepolepo!", sender: 'girl' },
        { text: "Te amo gatenha!", sender: 'boy' }
      ]
    },
    level5: {
      title: "LEVEL 5: CORRIDA DO AMOR",
      instructions: "Pressione ESPAÇO ou toque na tela para pular! Pegue as comidas!",
      score: "Pontos",
      gameOver: "Fim de Jogo!",
      playAgain: "Jogar Novamente",
      start: "Começar"
    },
    petGenerator: {
      title: "LEVEL EXTRA: GERADOR DE FOFURA",
      button: "Gerar Fofura",
      alt: "Um animalzinho fofo"
    },
    level6: {
      title: "LEVEL 6: NOSSO WRAPPED 2025",
      stats: [
        { label: "Comidas devoradas juntos", value: "156", icon: "burger", details: [] },
        { label: "Filmes assistidos", value: "8", icon: "tv", details: ["About Time", "Knives Out", "The GoodWill Hunting", "Re/Member", "As Duas Faces de um Crime", "Twisters", "Carros", "Garotas Malvadas"] },
        { label: "Séries maratonadas", value: "4", icon: "tv", details: ["It Derry", "Modern Family", "Six Feet Under", "Detroit Become Human"] },
        { label: "Beijinhos trocados", value: "∞", icon: "heart", details: [] }
      ]
    },
    compliment: {
      prefix: "Você é a menina mais",
      suffix: "e você é capaz de coisas incríveis",
      adjectives: ["linda", "talentosa", "capaz", "inteligente", "cheirosa", "esforçada"]
    },
    final: {
      title: "Te amo muito!",
      message: "Oi meu momoreco, eu sei que não é grande coisa mas fiz de coração pra você, sinceramente não sou o maior fã de comprar objetos pra dar de presente, eu penso em poder te entregar o que a gente pode levar dessa terra quando a gente partir, tipo sinceridade, sentimentos, sensações, experiencias. Parece mó papo de liso né kkkkkkk, quando eu tiver meu dinheirinho eu compro muitas besteirinhas para você... mas é sério, pra mim nenhum presente é mais importante do que sua atenção, seu carinho e as memórias criadas. Parabéns e eu queria que você soubesse o quão talentosa você é.",
      sign: "Com amor,\n Eduardo"
    },
    footer: "Feito com muy amor"
  },
  'en': {
    hero: {
      title: "Happy Birthday!",
      subtitle: "To my most talented kitten <3",
      start: "START GAME"
    },
    timer: {
      title: "LEVEL 1: THE BEGINNING",
      since: "Together since 01/01/2026",
      days: "DAYS",
      hours: "HOURS",
      minutes: "MIN",
      seconds: "SEC"
    },
    gallery: {
      title: "LEVEL 2: MEMORIES",
      photo: "Photo"
    },
    quiz: {
      title: "LEVEL 3: LOVE QUIZ",
      question: "Question",
      result: "Result!",
      score: (score: number, total: number) => `You got ${score} out of ${total}!`,
      perfect: "PERFECT! YOU KNOW US SO WELL! ❤️",
      tryAgain: "Almost there! Let's try again?",
      buttonTryAgain: "Try Again",
      questions: [
        {
          question: "What is Our favorite food?",
          options: ["Pizza", "Burger", "Sushi", "Lasagna"],
          correct: 1
        },
        {
          question: "Where was our first date?",
          options: ["Cinema", "Park", "At the Gymnasium", "Beach"],
          correct: 2
        },
        {
          question: "Which series do we love watching together?",
          options: ["Friends", "Modern Family", "Stranger Things", "Brooklyn 99"],
          correct: 1
        }
      ]
    },
    level4: {
      title: "LEVEL 4: TALK TO ME",
      clickMe: "Click the characters!",
      messages: [
        { text: "Hi my kitten! ❤️", sender: 'boy' },
        { text: "Hi labubaby! How are you?", sender: 'girl' },
        { text: "You are very talented!", sender: 'boy' },
        { text: "Aww, thank you love!", sender: 'girl' },
        { text: "I'm so proud of you!", sender: 'boy' },
        { text: "Hi labubinha!", sender: 'girl' },
        { text: "Love you lepolepo!", sender: 'boy' }
      ]
    },
    level5: {
      title: "LEVEL 5: LOVE RUN",
      instructions: "Press SPACE or tap screen to jump! Collect food!",
      score: "Score",
      gameOver: "Game Over!",
      playAgain: "Play Again",
      start: "Start"
    },
    petGenerator: {
      title: "LEVEL EXTRA: CUTENESS GENERATOR",
      button: "Generate Cuteness",
      alt: "A cute little animal"
    },
    level6: {
      title: "LEVEL 6: OUR WRAPPED 2025",
      stats: [
        { label: "Meals eaten together", value: "156", icon: "burger", details: [] },
        { label: "Movies watched", value: "8", icon: "tv", details: ["About Time", "Knives Out", "The GoodWill Hunting", "Re/Member", "As Duas Faces de um Crime", "Twisters", "Carros", "Garotas Malvadas"] },
        { label: "Series binged", value: "4", icon: "tv", details: ["It Derry", "Modern Family", "Six Feet Under", "Detroit Become Human"] },
        { label: "Kisses given", value: "∞", icon: "heart", details: [] }
      ]
    },
    compliment: {
      prefix: "You are the most",
      suffix: "girl and you are capable of amazing things",
      adjectives: ["beautiful", "talented", "capable", "intelligent", "smelling good", "hardworking"]
    },
    final: {
      title: "I love you so much!",
      message: "Hey my sweetheart, I know it's not much, but I made it from the heart for you. Honestly, I'm not the biggest fan of buying things as gifts. I think about giving you what we can take from this earth when we leave, like sincerity, feelings, sensations, experiences. Sounds like cheap talk, right? Hahaha, when I have my money I'll buy you lots of little things... but seriously, for me no gift is more important than your attention, your affection, and the memories we create. Congratulations, and I wanted you to know how talented you are.",
      sign: "With love,\n Eduardo"
    },
    footer: "Made with muyyy love"
  },
  'ja': {
    hero: {
      title: "お誕生日おめでとう！",
      subtitle: "私の最も才能のある子猫へ <3",
      start: "ゲームスタート"
    },
    timer: {
      title: "LEVEL 1: 始まり",
      since: "2026年1月1日から一緒",
      days: "日",
      hours: "時間",
      minutes: "分",
      seconds: "秒"
    },
    gallery: {
      title: "LEVEL 2: 思い出",
      photo: "写真"
    },
    quiz: {
      title: "LEVEL 3: ラブクイズ",
      question: "質問",
      result: "結果！",
      score: (score: number, total: number) => `${total}問中${score}問正解！`,
      perfect: "完璧！私のことをよく知ってるね！ ❤️",
      tryAgain: "惜しい！もう一度やってみよう？",
      buttonTryAgain: "もう一度挑戦",
      questions: [
        {
          question: "私たちの好きな食べ物は？",
          options: ["ピザ", "ハンバーガー", "寿司", "ラザニア"],
          correct: 1
        },
        {
          question: "初デートの場所は？",
          options: ["映画館", "公園", "ジムで", "海"],
          correct: 2
        },
        {
          question: "私たちが一緒に見るのが好きなドラマは？",
          options: ["フレンズ", "モダン・ファミリー", "ストレンジャー・シングス", "ブルックリン・ナイン-ナイン"],
          correct: 1
        }
      ]
    },
    level4: {
      title: "LEVEL 4: お話ししよう",
      clickMe: "キャラクターをクリックしてね！",
      messages: [
        { text: "xin zhao pong ping piu", sender: 'boy' },
        { text: "元気？", sender: 'girl' },
        { text: "liu kang thai muai", sender: 'boy' },
        { text: "わあ、ありがとう！", sender: 'girl' },
        { text: "zarabatana moippo!", sender: 'boy' },
        { text: "やっほー、ラブブ！", sender: 'girl' },
        { text: "anyeong haseyo", sender: 'boy' }
      ]
    },
    level5: {
      title: "LEVEL 5: ラブラン",
      instructions: "スペースキーかタップでジャンプ！食べ物を集めよう！",
      score: "スコア",
      gameOver: "ゲームオーバー！",
      playAgain: "もう一度遊ぶ",
      start: "スタート"
    },
    petGenerator: {
      title: "LEVEL EXTRA: 可愛さジェネレーター",
      button: "可愛さを生成",
      alt: "かわいい動物"
    },
    level6: {
      title: "LEVEL 6: 私たちの2025年まとめ",
      stats: [
        { label: "一緒に食べたご飯", value: "156", icon: "burger", details: [] },
        { label: "見た映画", value: "8", icon: "tv", details: ["About Time", "Knives Out", "The GoodWill Hunting", "Re/Member", "As Duas Faces de um Crime", "Twisters", "Carros", "Garotas Malvadas"] },
        { label: "見たドラマ", value: "4", icon: "tv", details: ["It Derry", "Modern Family", "Six Feet Under", "Detroit Become Human"] },
        { label: "キスの数", value: "∞", icon: "heart", details: [] }
      ]
    },
    compliment: {
      prefix: "あなたは最も",
      suffix: "な女の子で、素晴らしいことができます",
      adjectives: ["美しい", "才能ある", "有能な", "賢い", "いい匂いのする", "頑張り屋な"]
    },
    final: {
      title: "大好きだよ！",
      message: "ねえ、愛しい人。大したことじゃないって分かってるけど、心を込めて作ったの。正直、プレゼントに物を買うのはあまり好きじゃないの。この世を去る時に、私たちが持ち帰れるもの、例えば誠実さ、気持ち、感覚、経験などをあなたに贈りたいと思ってるの。安っぽい言葉に聞こえるでしょ？ハハハ、お金が貯まったら、ちょっとしたものをたくさん買うわ…でも、本気で、私にとってあなたの気遣い、愛情、そして一緒に作る思い出以上に大切な贈り物はないの。おめでとう。あなたの才能を知ってほしかったの。",
      sign: "愛を込めて、\n[あなたの名前]"
    },
    footer: "xin xon zin sheun ping"
  }
};
