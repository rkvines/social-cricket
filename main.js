// USe The Javascript 

// All Object Define Here On DOM
const UserCard = document.getElementById("main_content"),
    Front = document.getElementById("main_front"),
    ErrMsg = document.getElementById("erro_msg");


// Card Object Define Here On This Profile Card
const styleUSer = document.getElementById('user_style_content'),
    Age = document.getElementById('user_age'),
    Grade = document.getElementById('user_grade'),
    UserAboutName = document.getElementById('user_about_name'),
    UserPlayerName = document.getElementById('user_character_of_name'),
    UserAboutDescri = document.getElementById('user_About_descri_content'),
    UserImg = document.getElementById('user_character_img');


// Login Button 
const loginNavBtn = document.getElementById('log_and_sign_btn'),
    loginFront = document.getElementById('log_btn_front'),
    logOut = document.getElementById('log_and_out_btn');

// User Array 
const users = [181818, 454545, 111111]

// Login Promot Process
loginFront.addEventListener('click', () => {
    let log_user = prompt("Enter Your Player I'd :- ")

    // Check Login User
    // Check User I'd 
    if (log_user == users[0]) {
        UserCard.style.display = 'flex';
        Front.style.display = 'none'
        logOut.style.display = 'flex'
        loginNavBtn.style.display = 'none'

        document.getElementById('45').style.display = 'none'
        document.getElementById('18').style.display = 'block'
        document.getElementById('1').style.display = 'none'

        styleUSer.innerHTML = 'Batter'
        Age.innerHTML = '35'
        Grade.innerHTML = 'A+'
        UserAboutName.innerHTML = 'Virat Kohali'
        UserPlayerName.innerHTML = 'Virat Kohali'
        UserAboutDescri.innerHTML = "Virat Kohli had a dream. A dream like every other young kid in India to represent the country in the gentleman’s game. It is this vigor and fervor for the game of cricket that has helped this extremely talented young boy from Delhi to scale great heights at a very young age. He was barely in his teens when he led the India Under-19 team to a World Cup victory in Kuala Lumpur in 2008 which was a pointer of bigger and better things to come in the future. After that famous victory, it was not long before he made his entry into the senior team and Kohli was soon brushing shoulders with the best in the business and his cricketing idol Sachin Tendulkar. The stylish right-handed batsman banked on the opportunities at disposal and displayed a tremendous sense of maturity as if to show he belonged. He was termed brash and aggressive for being expressive on and off the field, but Kohli imbibed all of those qualities in his gameplay only to become better with each passing game. He began chasing totals for India with ridiculous ease and India had found a stable batsman in the middle order for the long run. Such is his batting prowess and cricketing mind that Ray Jennings(his coach with Royal Challengers Bangalore) touted him to be the leader of future India. Kohli made his mark in the shorter formats of the game but got a chance to don the whites in 2011. He registered his maiden Test century against Australia in Adelaide in January 2012 and followed it up with impressive centuries in India and abroad - namely South Africa and New Zealand."
    } else if (log_user == users[1]) {
        UserCard.style.display = 'flex';
        Front.style.display = 'none'
        logOut.style.display = 'flex'
        loginNavBtn.style.display = 'none'

        // Card Content 
        styleUSer.innerHTML = 'Batter'
        Age.innerHTML = '36'
        document.getElementById('45').style.display = 'block'
        document.getElementById('18').style.display = 'none'
        Grade.innerHTML = 'A+'
        UserAboutName.innerHTML = 'Rohit Sharma'
        UserPlayerName.innerHTML = 'Rohit Sharma'
        UserAboutDescri.innerHTML = "Popularly known as the Hitman for his hard hitting skills, Rohit Sharma is a gifted batsman and an immensely talented cricketer who is pleasing on the eye with his elegance and ability to time the ball. Each time Rohit Sharma walks out to bat, the word “talent” features more often than not amongst his fans and the cricketing circles. Rohit Sharma got off to a good start in his international career with crucial contributions in the T20 World Cup in 2007 and the CB Series in Australia. He almost made his Test debut in 2010 against South Africa but he injured himself on the morning of the Test match; Rohit would then have to wait for three more years to finally represent India in whites. Rohit continued to take giant strides in the shortest format of the game and attracted a lot of attention by achieving success in the IPL. He also led the Mumbai Indians to their maiden IPL title in 2013. His inconsistency for the national side though saw him in and out of the Indian team until he got a chance to feature in India's tour of the Caribbean in 2011. Rohit proved to be a revelation there and bagged the Man-of-the-series award. He later had an on and off career graph stringing in useful contributions for India in ODIs. He was then promoted to open the innings, a move that proved to be a masterstroke for India as Rohit began to prove his critics wrong batting with a lot of freedom and exuberance. He scored an ODI double century against Australia in Bengaluru; a feat that was achieved by Sachin Tendulkar and Virender Sehwag before. In 2013 he made his Test debut against West Indies in Kolkata and straight away made an impression with a century as if to say he belonged. He followed it up with yet another century in Mumbai against the same opposition which paved way for his entry into the Test side more frequently. He did have a poor run overseas but these are still early days in his Test career and India see a lot of potential in him in Tests as well."
    } else if (log_user == users[2]) {
        UserCard.style.display = 'flex';
        Front.style.display = 'none'
        logOut.style.display = 'flex'
        loginNavBtn.style.display = 'none'

        // Card Content 
        styleUSer.innerHTML = 'Batter & W.K'
        Age.innerHTML = '31'
        Grade.innerHTML = 'B'
        document.getElementById('45').style.display = 'none'
        document.getElementById('18').style.display = 'none'
        document.getElementById('1').style.display = 'block'
        UserAboutName.innerHTML = 'Kl Rahul'
        UserPlayerName.innerHTML = 'Kl Rahul'
        UserAboutDescri.innerHTML = "Young KL Rahul is amongst the most talented opening batsmen in India’s next generation setup. He was a part of India's squad in the 2010 Under-19 World Cup and made his first-class debut later that year. He has never been one of those cricketers who has set the stage on fire or has been the talk of the town for his batting skills. Rahul has taken gentle strides over the years and made a name for himself for being a consistent performer in the domestic circles. He enjoyed a breakthrough 2013-14 season, laying the foundation for Karnataka's Ranji Trophy victory with 1033 runs, which included three centuries, three nineties, and a Man-of-the-Match performance in the final. Not surprisingly, Rahul attracted a lot of bids in the IPL player auctions and ended up with the Sunrisers Hyderabad in the 2014 season. He has received much praise from some of the legends of the game namely Rahul Dravid. His consistent performances in India's A tour of Australia and the 2014-15 domestic season earned him a Test call up for India's tour of Australia."
    }
    else {
        Front.style.display = 'none'
        ErrMsg.style.display = 'block'
    }
})


loginNavBtn.addEventListener('click', () => {
    let log_user = prompt("Enter Your Player I'd :- ")

})

// Logout System 
logOut.addEventListener('click', () => {
    let logout_confirm = confirm(" You are Sure logout your account !")

    // Check
    if (logout_confirm) {
        UserCard.style.display = 'none';
        Front.style.display = 'block'
        logOut.style.display = 'none'
        loginNavBtn.style.display = 'block'
    }
})

