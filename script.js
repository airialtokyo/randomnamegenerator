//defining all the variables and the arrays used throughtout the code outside the blockscope
let isButtonEnabler = false
let theButtonEnabler = false
let randomWordOne = ["adorable", "adventurous", "aggressive", "agreeable", "alert", "alive", "amused", "angry", "annoyed", "annoying", "anxious", "arrogant", 
"ashamed", "attractive", "average", "awful", "bad", "beautiful", "better", "bewildered", "black", "bloody", "blue", "blue-eyed", "blushing", "bored", "brainy", 
"brave", "breakable", "bright", "busy", "calm", "careful", "cautious", "charming", "cheerful", "clear", "clever", "cloudy", "clumsy", "colorful", "combative", "comfortable",
 "concerned", "condemned", "confused", "cooperative", "courageous", "crazy", "creepy", "crowded", "cruel", "curious", "cute", "dangerous", "dark", "dead", "defeated", "defiant",
  "delightful", "depressed", "determined", "different", "difficult", "disgusted", "distinct", "disturbed", "dizzy", "doubtful", "drab", "dull", "eager", "easy", "elated", "elegant", 
  "embarrassed", "enchanting", "encouraging", "energetic", "enthusiastic", "envious", "evil", "excited", "expensive", "exuberant", "fair", "faithful", "famous", "fancy", 
  "fantastic", "fierce", "filthy", "fine","foolish", "fragile", "frail", "frantic", "friendly", "frightened", "funny", "gentle", "gifted", "glamorous", "gleaming", 
  "glorious", "good", "gorgeous", "graceful", "grieving", "grotesque", "grumpy", "handsome", "happy", "healthy", "helpful", "helpless", "hilarious", "homeless", "homely", 
  "horrible", "hungry", "hurt", "ill", "important", "impossible", "inexpensive", "innocent", "inquisitive", "itchy", "jealous", "jittery",  "jolly", "joyous", "kind", "lazy",
  "light","lively","lonely","long","lovely","lucky","magnificent","misty","modern","motionless","muddy","mushy","mysterious","nasty","naughty","nervous","nice","nutty","obedient",
  "obnoxious","odd","oldfashioned","open","outrageous","outstanding","panicky","perfect","plain","pleasant","poised","poor","powerful","precious","prickly","proud","putrid",
  "puzzled","quaint","real","relieved","repulsive","rich","scary","selfish","shiny","shy","silly","sleepy","smiling","smoggy","sore","sparkling","splendid","spotless","stormy",
  "strange","stupid", "successful", "super","talented","tame","tasty","tender","tense","terrible","thankful","thoughtful","thoughtless","tired","tough","troubled","ugliest",
  "ugly","uninterested","unsightly","unusual","upset","uptight","vast","victorious","vivacious","wandering","weary","wicked","wideeyed","wild","witty","worried","worrisome"
  ,"wrong","zany","zealous"]
let randomWordTwo = ["Ability","Access","Accident","Account","Act","Action","Activity","Actor","Ad","Addition","Address","Administration","Advantage","Advertising",
"Advice","Affair","Age","Agency","Agreement","Air","Airport","Alcohol","Ambition","Amount","Analysis","Analyst","Animal","Answer","Anxiety","Apartment","Appearance","Apple",
"Application","Appointment","Area","Argument","Army","Arrival","Art","Article","Aspect","Assignment","Assistance","Assistant","Association","Assumption","Atmosphere","Attempt",
"Attention","Attitude","Audience","Aunt","Average","AwarenessBack","Bad","Balance","Ball","Bank","Baseball","Basis","Basket","Bath","Bathroom","Bedroom","Beer","Beginning","Benefit",
"Bird","Birth","Birthday","Bit","Blood","Board","Boat","Body","Bonus","Book","Boss","Bottom","Box","Boy","Boyfriend","Bread","Breath","Brother","Building","Bus","Business",
"Buyer","Cabinet","Camera","Cancer","Candidate","Capital","Car","Card","Care","Career","Case","Cash","Cat","Category","Cause","Celebration","Cell","Championship","Chance",
"Chapter","Charity","Cheek","Chemistry","Chest","Chicken","Child","Childhood","Chocolate","Choice","Church","Cigarette","City","Class","Classroom","Client","Climate","Clothes",
"Coast","Coffee","Collection","College","Combination","Committee","Communication","Community","Company","Comparison","Competition","Complaint","Computer","Concept","Conclusion",
"Condition","Confusion","Connection","Consequence","Construction","Contact","Context","Contract","Contribution","Control","Conversation","Cookie","Country","County","Courage",
"Course","Cousin","Craft","Credit","Criticism","Culture","Currency","Customer","Cycle","Dad","Data","Database","Date","Day","Dealer","Death","Debt","Decision","Definition",
"Delivery","Demand","Department","Departure","Depression","Depth","Description","Design","Desk","Development","Device","Diamond","Difference","Difficulty","Dinner","Direction",
"Director","Dirt","Disaster","Discipline","Discussion","Disease","Disk","Distribution","Dog","Drama","Drawer","Drawing","Driver","Ear","Earth","Economics","Economy","Editor",
"Education","Effect","Efficiency","Effort","Egg","Election","Elevator","Emotion","Emphasis","Employee","Employer","Employment","End","Energy","Engine","Entertainment","Enthusiasm",
"Entry","Environment","Equipment","Error","Establishment","Estate","Event","Exam","Examination","Example","Exchange","Excitement","Exercise","Experience","Explanation","Expression",
"Extent","Eye","Face","Fact","Failure","Family","Farmer","Fat","Feature","Feedback","Field","Figure","Film","Finding","Fire","Fish","Flight","Focus","Food","Football","Force",
"Form","Fortune","Foundation","Frame","Freedom","Friendship","Fun","Funeral","Future","Game","Garbage","Garden","Gate","Gene","Gift","Girl","Girlfriend","Goal","Government",
"Grandmother","Grocery","Group","Growth","Guest","Guidance","Guide","Guitar","Hair","Half","Hall","Hand","Hat","Head","Health","Hearing","Heart","Heat","Height","Highway",
"Historian","History","Home","Homework","Honey","Hope","Hospital","Hotel","House","Housing","Ice","Idea","Image","Imagination","Impact","Importance","Impression","Improvement",
"Income","Independence","Indication","Industry","Inflation","Information","Initiative","Injury","Insect","Inside","Inspection","Inspector","Instance","Instruction","Insurance",
"Intention","Interaction","Interest","Internet","Introduction","Investment","Issue","Item","Job","Judgment","Key","Kind","King","Knowledge","Lab","Ladder","Lady","Lake",
"Language","Law","Leader","Leadership","Length","Level","Library","Life","Light","Line","Link","List","Literature","Location","Loss","Love","Machine","Magazine",
"Maintenance","Mall","Man","Management","Manager","Manufacturer","Map","Market","Marketing","Marriage","Material","Math","Matter","Meal","Meaning","Measurement","Meat",
"Media","Medicine","Medium","Member","Membership","Memory","Menu","Message","Metal","Method","Midnight","Mind","Mixture","Mode","Model","Mom","Moment","Money","Month","Mood",
"Morning","Mouse","Movie","Mud","Music","Name","Nation","Nature","Negotiation","Network","News","Newspaper","Night","Note","Nothing","Number","Object","Obligation","Office",
"Oil","Operation","Opinion","Opportunity","Orange","Order","Organization","Outcome","Outside","Oven","Owner","Page","Paint","Painting","Paper","Part","Passenger","Passion",
"Patience","Payment","Penalty","People","Percentage","Perception","Performance","Period","Permission","Person","Personality","Perspective","Philosophy","Phone","Photo",
"Physics","Piano","Picture","Pie","Piece","Pizza","Place","Plan","Platform","Player","Poem","Poet","Poetry","Point","Police","Policy","Politics","Pollution","Population",
"Position","Possession","Possibility","Post","Pot","Potato","Power","Practice","Preference","Preparation","Presence","Presentation","President","Pressure","Price","Priority",
"Problem","Procedure","Process","Product","Profession","Professor","Profit","Program","Promotion","Property","Proposal","Protection","Psychology","Purpose","Quality",
"Quantity","Queen","Question","Radio","Range","Rate","Ratio","Reaction","Reality","Reason","Reception","Recipe","Recognition","Recommendation","Record","Recording",
"Reflection","Refrigerator","Region","Relation","Relationship","Replacement","Republic","Reputation","Requirement","Research","Resolution","Resource","Response","Responsibility",
"Restaurant","Result","Revenue","Review","Revolution","Risk","River","Road","Rock","Role","Room","Rule","Safety","Salad","Salt","Sample","Satisfaction","Scale","Scene",
"School","Science","Screen","Secretary","Section","Sector","Security","Selection","Sense","Series","Service","Session","Setting","Shape","Share","Shirt","Side","Sign",
"Signature","Significance","Singer","Sir","Sister","Site","Situation","Size","Skill","Society","Software","Soil","Solution","Son","Song","Sound","Soup","Source","Space",
"Speaker","Speech","Sport","Square","Standard","Star","State","Statement","Steak","Step","Stock","Storage","Store","Story","Stranger","Strategy","Stress","Structure",
"Student","Studio","Study","Style","Subject","Success","Suggestion","Sun","Supermarket","Surgery","Sympathy","System","Table","Tale","Task","Tax","Tea","Teacher",
"Technology","Television","Temperature","Tennis","Tension","Term","Test","Thanks","Theory","Thing","Thought","Throat","Time","Tongue","Tool","Tooth","Top","Topic",
"Town","Trade","Tradition","Trainer","Training","Transportation","Truth","Two","Type","Uncle","Understanding","Union","Unit","University","User","Value","Variation",
"Variety","Vehicle","Version","Video","View","Village","Virus","Voice","Volume","War","Warning","Water","Way","Weakness","Wealth","Weather","Web","Wedding","Week",
"While","Wife","Wind","Winner","Woman","Wood","Word","Work","Worker","World","Writer","Writing","Year","Youth"]
let customWord 
let randomWordFinalOne
let randomWordFinalTwo
let finalFinalWord


//getting a random number and then using that number in each array and assigning the word chosen in the array to a variable 
function getWordOne(){
  randomNumGenOne=  Math.floor(Math.random()*227);
  randomWordFinalOne = randomWordOne[randomNumGenOne];

};
getWordOne();

function getWordTwo(){
    randomNumGenTwo=  Math.floor(Math.random()*699);
    randomWordFinalTwo = randomWordTwo[randomNumGenTwo];
  
  };
getWordTwo();

//getting the custom word from the html input 
function getCustomWord() {

    customWord = document.getElementById("inputname").value;
};
//switching the color of the the and is selector and also switching them between false and true
function theButtonOn(){
    theButtonEnabler = true;
    document.getElementById("theselector").style.backgroundColor = "forestgreen";

};

function theButtonOff(){
    theButtonEnabler = false;
    document.getElementById("theselector").style.backgroundColor = "azure";
};

function theButtonSwitcher(){
    if(theButtonEnabler == true){
        theButtonOff()
    }
    else if(theButtonEnabler !== true){
        theButtonOn()
    }
};

function isButtonOn(){
    isButtonEnabler = true;
    document.getElementById("isselector").style.backgroundColor = "forestgreen";
};

function isButtonOff() {
    isButtonEnabler = false;
    document.getElementById("isselector").style.backgroundColor = "azure";

};

function isButtonSwitcher(){
    if( isButtonEnabler == false){
        isButtonOn()
    }

    else if( isButtonEnabler !== false){
        isButtonOff()
    }
};
// coming up with the final word based on user input and the randomly selected words, then displaying it.
function wordCompounderAndDisplay(){
    if( isButtonEnabler == false && theButtonEnabler == false && typeof customWord == "undefined"){
    finalFinalWord = randomWordFinalOne+randomWordFinalTwo 
    }

    else if ( isButtonEnabler == true && theButtonEnabler == false && typeof customWord == "undefined"){
        finalFinalWord = randomWordFinalTwo+"is"+randomWordFinalOne
    }
    else if ( isButtonEnabler == false && theButtonEnabler == true && typeof customWord == "undefined"){
        finalFinalWord = randomWordFinalTwo+"the"+randomWordFinalOne
    }
    else if ( isButtonEnabler == true && theButtonEnabler == true && typeof customWord == "undefined"){
        finalFinalWord = randomWordFinalOne+"isthe"+randomWordFinalTwo
    }
    else if ( isButtonEnabler == true && theButtonEnabler == false && typeof customWord !== "undefined"){
        finalFinalWord = customWord+"is"+randomWordFinalOne
    }
    else if ( isButtonEnabler == false && theButtonEnabler == true && typeof customWord !== "undefined"){
        finalFinalWord = customWord+"the"+randomWordFinalOne
    }
    else if ( isButtonEnabler == true && theButtonEnabler == true && typeof customWord !== "undefined"){
        finalFinalWord = customWord+"isthe"+randomWordFinalTwo
    }
    else if ( isButtonEnabler == false && theButtonEnabler == false && typeof customWord !== "undefined"){
        finalFinalWord = customWord+randomWordFinalTwo
    }
    document.getElementById("displaybox").style.display = 'block';
    document.getElementById("innertext").innerHTML = finalFinalWord;

};
function reloadPage (){
    location.reload()
};


//all the buttons activation and clicks and such, making them run functions displayed earlier

document.getElementById("isselector").addEventListener('click', isButtonSwitcher)
document.getElementById("theselector").addEventListener('click', theButtonSwitcher)
document.getElementById("button").addEventListener('click', wordCompounderAndDisplay)
document.getElementById("refreshbutton").addEventListener('click',reloadPage)