const quotes = [
    {
        "q": "If your mind is empty, it is always ready for anything, it is open to everything.",
        "a": "Shunryu Suzuki",
        "c": "81",
        "h": "<blockquote>&ldquo;If your mind is empty, it is always ready for anything, it is open to everything.&rdquo; &mdash; <footer>Shunryu Suzuki</footer></blockquote>"
    },
    {
        "q": "Human beings can alter their lives by altering their attitudes of mind.",
        "a": "William James",
        "c": "71",
        "h": "<blockquote>&ldquo;Human beings can alter their lives by altering their attitudes of mind.&rdquo; &mdash; <footer>William James</footer></blockquote>"
    },
    {
        "q": "Resilience is not what happens to you. It's how you react to, respond to, and recover from what happens to you.",
        "a": "Jeffrey Gitomer",
        "c": "111",
        "h": "<blockquote>&ldquo;Resilience is not what happens to you. It's how you react to, respond to, and recover from what happens to you.&rdquo; &mdash; <footer>Jeffrey Gitomer</footer></blockquote>"
    },
    {
        "q": "The wise man reads both books and life itself.",
        "a": "Lin Yutang",
        "c": "46",
        "h": "<blockquote>&ldquo;The wise man reads both books and life itself.&rdquo; &mdash; <footer>Lin Yutang</footer></blockquote>"
    },
    {
        "q": "Adventure is not outside man; it is within.",
        "a": "George Eliot",
        "c": "43",
        "h": "<blockquote>&ldquo;Adventure is not outside man; it is within.&rdquo; &mdash; <footer>George Eliot</footer></blockquote>"
    },
    {
        "q": "Before you embark on a journey of revenge, dig two graves. ",
        "a": "Confucius",
        "c": "59",
        "h": "<blockquote>&ldquo;Before you embark on a journey of revenge, dig two graves. &rdquo; &mdash; <footer>Confucius</footer></blockquote>"
    },
    {
        "q": "Even if you're sure you can win, be careful that you can live with what you lose.",
        "a": "Gary Keller",
        "c": "81",
        "h": "<blockquote>&ldquo;Even if you're sure you can win, be careful that you can live with what you lose.&rdquo; &mdash; <footer>Gary Keller</footer></blockquote>"
    },
    {
        "q": "You change the world by being yourself.",
        "a": "Yoko Ono",
        "c": "39",
        "h": "<blockquote>&ldquo;You change the world by being yourself.&rdquo; &mdash; <footer>Yoko Ono</footer></blockquote>"
    },
    {
        "q": "Teachers open the door. You enter by yourself. ",
        "a": "Chinese Proverb",
        "c": "47",
        "h": "<blockquote>&ldquo;Teachers open the door. You enter by yourself. &rdquo; &mdash; <footer>Chinese Proverb</footer></blockquote>"
    },
    {
        "q": "Always dream and shoot higher than you know you can do. Do not bother just to be better than your contemporaries or predecessors. Try to be better than yourself.",
        "a": "William Faulkner",
        "c": "161",
        "h": "<blockquote>&ldquo;Always dream and shoot higher than you know you can do. Do not bother just to be better than your contemporaries or predecessors. Try to be better than yourself.&rdquo; &mdash; <footer>William Faulkner</footer></blockquote>"
    },
    {
        "q": "If you are far from the enemy, make him believe you are near.",
        "a": "Sun Tzu",
        "c": "61",
        "h": "<blockquote>&ldquo;If you are far from the enemy, make him believe you are near.&rdquo; &mdash; <footer>Sun Tzu</footer></blockquote>"
    },
    {
        "q": "Pleasure in the job puts perfection in the work.",
        "a": "Aristotle",
        "c": "48",
        "h": "<blockquote>&ldquo;Pleasure in the job puts perfection in the work.&rdquo; &mdash; <footer>Aristotle</footer></blockquote>"
    },
    {
        "q": "Allow motion to equal emotion.",
        "a": "Elbert Hubbard",
        "c": "30",
        "h": "<blockquote>&ldquo;Allow motion to equal emotion.&rdquo; &mdash; <footer>Elbert Hubbard</footer></blockquote>"
    },
    {
        "q": "Dreams provide nourishment for the soul, just as a meal does for the body.",
        "a": "Paulo Coelho",
        "c": "74",
        "h": "<blockquote>&ldquo;Dreams provide nourishment for the soul, just as a meal does for the body.&rdquo; &mdash; <footer>Paulo Coelho</footer></blockquote>"
    },
    {
        "q": "The people who are crazy enough to think they can change the world are the ones who do.",
        "a": "Steve Jobs",
        "c": "87",
        "h": "<blockquote>&ldquo;The people who are crazy enough to think they can change the world are the ones who do.&rdquo; &mdash; <footer>Steve Jobs</footer></blockquote>"
    },
    {
        "q": "The only lost cause is one we give up on before we enter the struggle.",
        "a": "Vaclav Havel",
        "c": "70",
        "h": "<blockquote>&ldquo;The only lost cause is one we give up on before we enter the struggle.&rdquo; &mdash; <footer>Vaclav Havel</footer></blockquote>"
    },
    {
        "q": "You must live in the present, launch yourself on every wave, find your eternity in each moment. Fools stand on their island of opportunities and look toward another land. There is no other land; there is no other life but this.",
        "a": "Henry David Thoreau",
        "c": "227",
        "h": "<blockquote>&ldquo;You must live in the present, launch yourself on every wave, find your eternity in each moment. Fools stand on their island of opportunities and look toward another land. There is no other land; there is no other life but this.&rdquo; &mdash; <footer>Henry David Thoreau</footer></blockquote>"
    },
    {
        "q": "Cease striving. Then there will be transformation.",
        "a": "Zhuangzi",
        "c": "50",
        "h": "<blockquote>&ldquo;Cease striving. Then there will be transformation.&rdquo; &mdash; <footer>Zhuangzi</footer></blockquote>"
    },
    {
        "q": "It's necessary to get the losers out of your life if you want to live your dream.",
        "a": "Les Brown",
        "c": "81",
        "h": "<blockquote>&ldquo;It's necessary to get the losers out of your life if you want to live your dream.&rdquo; &mdash; <footer>Les Brown</footer></blockquote>"
    },
    {
        "q": "There is a big difference between being centered and being self-centered.",
        "a": "Lolly Daskal",
        "c": "73",
        "h": "<blockquote>&ldquo;There is a big difference between being centered and being self-centered.&rdquo; &mdash; <footer>Lolly Daskal</footer></blockquote>"
    },
    {
        "q": "What we dwell on is who we become.",
        "a": "Oprah Winfrey",
        "c": "34",
        "h": "<blockquote>&ldquo;What we dwell on is who we become.&rdquo; &mdash; <footer>Oprah Winfrey</footer></blockquote>"
    },
    {
        "q": "Don't give up on your dreams, or your dreams will give up on you.",
        "a": "John Wooden",
        "c": "65",
        "h": "<blockquote>&ldquo;Don't give up on your dreams, or your dreams will give up on you.&rdquo; &mdash; <footer>John Wooden</footer></blockquote>"
    },
    {
        "q": "This is the most simple and basic component of life: our struggles determine our successes.",
        "a": "Mark Manson",
        "c": "91",
        "h": "<blockquote>&ldquo;This is the most simple and basic component of life: our struggles determine our successes.&rdquo; &mdash; <footer>Mark Manson</footer></blockquote>"
    },
    {
        "q": "Never whine, never complain, never try to justify yourself.",
        "a": "Robert Greene",
        "c": "59",
        "h": "<blockquote>&ldquo;Never whine, never complain, never try to justify yourself.&rdquo; &mdash; <footer>Robert Greene</footer></blockquote>"
    },
    {
        "q": "Most of us will do anything to avoid facing ourselves.",
        "a": "Lolly Daskal",
        "c": "54",
        "h": "<blockquote>&ldquo;Most of us will do anything to avoid facing ourselves.&rdquo; &mdash; <footer>Lolly Daskal</footer></blockquote>"
    },
    {
        "q": "To some degree, you control your life by controlling your time.",
        "a": "Conrad Hilton",
        "c": "63",
        "h": "<blockquote>&ldquo;To some degree, you control your life by controlling your time.&rdquo; &mdash; <footer>Conrad Hilton</footer></blockquote>"
    },
    {
        "q": "None are more hopelessly enslaved than those who falsely believe they are free.",
        "a": "Johann Wolfgang von Goethe",
        "c": "79",
        "h": "<blockquote>&ldquo;None are more hopelessly enslaved than those who falsely believe they are free.&rdquo; &mdash; <footer>Johann Wolfgang von Goethe</footer></blockquote>"
    },
    {
        "q": "Life is a gift, and it offers us the privilege, opportunity, and responsibility to give something back by becoming more.",
        "a": "Tony Robbins",
        "c": "120",
        "h": "<blockquote>&ldquo;Life is a gift, and it offers us the privilege, opportunity, and responsibility to give something back by becoming more.&rdquo; &mdash; <footer>Tony Robbins</footer></blockquote>"
    },
    {
        "q": "Always turn a negative situation into a positive situation.",
        "a": "Michael Jordan",
        "c": "59",
        "h": "<blockquote>&ldquo;Always turn a negative situation into a positive situation.&rdquo; &mdash; <footer>Michael Jordan</footer></blockquote>"
    },
    {
        "q": "A tiny change today brings a dramatically different tomorrow.",
        "a": "Richard Bach",
        "c": "61",
        "h": "<blockquote>&ldquo;A tiny change today brings a dramatically different tomorrow.&rdquo; &mdash; <footer>Richard Bach</footer></blockquote>"
    },
    {
        "q": "Life has more imagination than we carry in our dreams.",
        "a": "Christopher Columbus",
        "c": "54",
        "h": "<blockquote>&ldquo;Life has more imagination than we carry in our dreams.&rdquo; &mdash; <footer>Christopher Columbus</footer></blockquote>"
    },
    {
        "q": "People are weird. When we find someone with weirdness that is compatible with ours, we team up and call it love.",
        "a": "Dr. Seuss",
        "c": "112",
        "h": "<blockquote>&ldquo;People are weird. When we find someone with weirdness that is compatible with ours, we team up and call it love.&rdquo; &mdash; <footer>Dr. Seuss</footer></blockquote>"
    },
    {
        "q": "Everything that is done in the world is done by hope.",
        "a": "Martin Luther",
        "c": "53",
        "h": "<blockquote>&ldquo;Everything that is done in the world is done by hope.&rdquo; &mdash; <footer>Martin Luther</footer></blockquote>"
    },
    {
        "q": "The moment you doubt whether you can fly, you cease for ever to be able to do it.",
        "a": "James Matthew Barrie",
        "c": "81",
        "h": "<blockquote>&ldquo;The moment you doubt whether you can fly, you cease for ever to be able to do it.&rdquo; &mdash; <footer>James Matthew Barrie</footer></blockquote>"
    },
    {
        "q": "Where ever you are, you are one with the clouds and one with the sun and the stars you see. You are one with everything.",
        "a": "Shunryu Suzuki",
        "c": "120",
        "h": "<blockquote>&ldquo;Where ever you are, you are one with the clouds and one with the sun and the stars you see. You are one with everything.&rdquo; &mdash; <footer>Shunryu Suzuki</footer></blockquote>"
    },
    {
        "q": "Never be bored, and you will never be boring.",
        "a": "Eleanor Roosevelt",
        "c": "45",
        "h": "<blockquote>&ldquo;Never be bored, and you will never be boring.&rdquo; &mdash; <footer>Eleanor Roosevelt</footer></blockquote>"
    },
    {
        "q": "Get busy living, or get busy dying.",
        "a": "Stephen King",
        "c": "35",
        "h": "<blockquote>&ldquo;Get busy living, or get busy dying.&rdquo; &mdash; <footer>Stephen King</footer></blockquote>"
    },
    {
        "q": "What the caterpillar calls the end of the world, the master calls a butterfly.",
        "a": "Richard Bach",
        "c": "78",
        "h": "<blockquote>&ldquo;What the caterpillar calls the end of the world, the master calls a butterfly.&rdquo; &mdash; <footer>Richard Bach</footer></blockquote>"
    },
    {
        "q": "Be still when you have nothing to say; when genuine passion moves you, say what you've got to say, and say it hot.",
        "a": "D. H. Lawrence",
        "c": "114",
        "h": "<blockquote>&ldquo;Be still when you have nothing to say; when genuine passion moves you, say what you've got to say, and say it hot.&rdquo; &mdash; <footer>D. H. Lawrence</footer></blockquote>"
    },
    {
        "q": "If you care about someone enough, you'll always be there for them no matter what.",
        "a": "Roy T. Bennett",
        "c": "81",
        "h": "<blockquote>&ldquo;If you care about someone enough, you'll always be there for them no matter what.&rdquo; &mdash; <footer>Roy T. Bennett</footer></blockquote>"
    },
    {
        "q": "I learned the value of hard work by working hard. ",
        "a": "Margaret Mead",
        "c": "50",
        "h": "<blockquote>&ldquo;I learned the value of hard work by working hard. &rdquo; &mdash; <footer>Margaret Mead</footer></blockquote>"
    },
    {
        "q": "Observe things as they are and don't pay attention to other people.",
        "a": "Huang Po",
        "c": "67",
        "h": "<blockquote>&ldquo;Observe things as they are and don't pay attention to other people.&rdquo; &mdash; <footer>Huang Po</footer></blockquote>"
    },
    {
        "q": "Don't give up the fight, Stand up for your rights.",
        "a": "Bob Marley",
        "c": "50",
        "h": "<blockquote>&ldquo;Don't give up the fight, Stand up for your rights.&rdquo; &mdash; <footer>Bob Marley</footer></blockquote>"
    },
    {
        "q": "To get angry is like to revenge yourself for the guilt of others.",
        "a": "Jonathan Swift",
        "c": "65",
        "h": "<blockquote>&ldquo;To get angry is like to revenge yourself for the guilt of others.&rdquo; &mdash; <footer>Jonathan Swift</footer></blockquote>"
    },
    {
        "q": "To understand the heart and mind of a person, look not at what he has already achieved, but at what he aspires to.",
        "a": "Kahlil Gibran",
        "c": "114",
        "h": "<blockquote>&ldquo;To understand the heart and mind of a person, look not at what he has already achieved, but at what he aspires to.&rdquo; &mdash; <footer>Kahlil Gibran</footer></blockquote>"
    },
    {
        "q": "There is little success where there is little laughter.",
        "a": "Andrew Carnegie",
        "c": "55",
        "h": "<blockquote>&ldquo;There is little success where there is little laughter.&rdquo; &mdash; <footer>Andrew Carnegie</footer></blockquote>"
    },
    {
        "q": "He who knows best knows how little he knows.",
        "a": "Thomas Jefferson",
        "c": "44",
        "h": "<blockquote>&ldquo;He who knows best knows how little he knows.&rdquo; &mdash; <footer>Thomas Jefferson</footer></blockquote>"
    },
    {
        "q": "There are no second chances in life, except to feel remorse.",
        "a": "Carlos Ruiz Zafon",
        "c": "60",
        "h": "<blockquote>&ldquo;There are no second chances in life, except to feel remorse.&rdquo; &mdash; <footer>Carlos Ruiz Zafon</footer></blockquote>"
    },
    {
        "q": "Give more than you think you can, trusting that you are richer than you think.",
        "a": "Jon Kabat-Zinn",
        "c": "78",
        "h": "<blockquote>&ldquo;Give more than you think you can, trusting that you are richer than you think.&rdquo; &mdash; <footer>Jon Kabat-Zinn</footer></blockquote>"
    },
    {
        "q": "You came empty handed, and you will leave empty handed.",
        "a": "Bhagavad Gita",
        "c": "55",
        "h": "<blockquote>&ldquo;You came empty handed, and you will leave empty handed.&rdquo; &mdash; <footer>Bhagavad Gita</footer></blockquote>"
    }
]
export default quotes