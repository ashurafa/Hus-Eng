function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6biqeX7KYkW":
        Script1();
        break;
      case "64NZPWXZ0Tt":
        Script2();
        break;
      case "5Y3Irm27Lna":
        Script3();
        break;
      case "5tnu8xnW1DL":
        Script4();
        break;
      case "5f5AgGS8fXm":
        Script5();
        break;
      case "6Wah40sbiww":
        Script6();
        break;
      case "66m2hs7CYid":
        Script7();
        break;
      case "5VYDd77sYNF":
        Script8();
        break;
      case "63SrGGoQEsT":
        Script9();
        break;
      case "68plhEFcZ8g":
        Script10();
        break;
      case "63RHBGUt05Q":
        Script11();
        break;
      case "5vqOlEGeLim":
        Script12();
        break;
      case "6iCDsuNriFI":
        Script13();
        break;
      case "69D1cJS25c3":
        Script14();
        break;
      case "6N6ueIYJwRA":
        Script15();
        break;
      case "5ZFA8Zihwov":
        Script16();
        break;
      case "6c1uJ919Xyr":
        Script17();
        break;
      case "67gtJ4VuvUV":
        Script18();
        break;
      case "5kLX2MgE6wm":
        Script19();
        break;
      case "6nbaxgaofE5":
        Script20();
        break;
      case "5uclArQhsg0":
        Script21();
        break;
      case "5hog79W3zzh":
        Script22();
        break;
      case "6GHQj5P2GhG":
        Script23();
        break;
      case "5rHM27iXkRo":
        Script24();
        break;
      case "6f4LjUPtp6I":
        Script25();
        break;
      case "64BK27bVaXb":
        Script26();
        break;
      case "6imRJd5Nnhu":
        Script27();
        break;
      case "6a1g59YBW3H":
        Script28();
        break;
      case "6fMWeV27IMl":
        Script29();
        break;
      case "5uyM9irM8NR":
        Script30();
        break;
      case "6CCwSNFtGVH":
        Script31();
        break;
      case "65fKWM7jzok":
        Script32();
        break;
      case "6pYDom2dAg6":
        Script33();
        break;
      case "6Al57sXy9ZM":
        Script34();
        break;
      case "5VotM0brSVu":
        Script35();
        break;
      case "6OsJoxTACFY":
        Script36();
        break;
      case "5oJO6PrNAq1":
        Script37();
        break;
      case "6NmZt3KX8lA":
        Script38();
        break;
      case "6q10Jahw0iL":
        Script39();
        break;
      case "5XL5j28H7u8":
        Script40();
        break;
      case "5XUY5I5bK1s":
        Script41();
        break;
      case "60StbUHvpVs":
        Script42();
        break;
      case "5e2rW4j3xYO":
        Script43();
        break;
      case "6KRw8LBU6Ey":
        Script44();
        break;
      case "5v98XpE8Cod":
        Script45();
        break;
      case "6G1Y26EVvHO":
        Script46();
        break;
      case "6MQ1OC2WKYr":
        Script47();
        break;
      case "5o1QXAaSKyI":
        Script48();
        break;
      case "5iFTBUyyghX":
        Script49();
        break;
      case "68pcUvcRqSj":
        Script50();
        break;
  }
}

function Script1()
{
  // Odd = Engligh question, next Even = Arabic answer;
// random is even for arabic answer;

var player = GetPlayer();

var Words = 194; 

var NumA= Math.floor(Math.random()*Words+1)*2;
var NumA1= Math.floor(Math.random()*Words+1)*2;
var NumA2= Math.floor(Math.random()*Words+1)*2;
var NumA3= Math.floor(Math.random()*Words+1)*2;
var NumA4= Math.floor(Math.random()*Words+1)*2;







if ( (NumA1 == NumA)  || (NumA1 ==  NumA2) || (NumA1 ==  NumA3) || (NumA1 ==  NumA4) ) {
  var NumA1= 0
}

if ( (NumA2 == NumA)  || (NumA2 ==  NumA1) || (NumA2 ==  NumA3) || (NumA2 ==  NumA4) ) {
  var NumA2=  0
}

if ( (NumA3 == NumA)  || (NumA3 ==  NumA1) || (NumA3 ==  NumA2) || (NumA3 ==  NumA4) ) {
  var NumA3= 0
}


if ( (NumA4 == NumA)  || (NumA4 ==  NumA1) || (NumA4 ==  NumA2) || (NumA4 ==  NumA3) ) {
  var NumA4= 0
}


var Words= [
"Free Answer for You",

"	abilities	"	,	"	قدرات	"	,
"	ability	"	,	"	قدرة	"	,
"	able	"	,	"	قادر	"	,
"	about	"	,	"	حول	"	,
"	above	"	,	"	في الاعلى	"	,
"	abroad	"	,	"	في الخارج	"	,
"	absentminded	"	,	"	شارد الذهن	"	,
"	abuse	"	,	"	سوء المعاملة	"	,
"	academic	"	,	"	أكاديمي	"	,
"	academy	"	,	"	أكاديمية	"	,
"	accent	"	,	"	لهجة	"	,
"	accept	"	,	"	يقبل 	"	,
"	accepted	"	,	"	مقبول	"	,
"	accepting	"	,	"	قبول	"	,
"	accident	"	,	"	حادثة	"	,
"	accidentally	"	,	"	من غير قصد	"	,
"	accidents	"	,	"	حوادث	"	,
"	accommodation	"	,	"	إقامة	"	,
"	according	"	,	"	تبعا	"	,
"	accountant	"	,	"	محاسب	"	,
"	accounting	"	,	"	محاسبة	"	,
"	accurate	"	,	"	دقيق	"	,
"	accustomed	"	,	"	معتاد	"	,
"	achieve	"	,	"	ينجز	"	,
"	across	"	,	"	بجانب	"	,
"	act	"	,	"	فعل	"	,
"	action	"	,	"	عمل	"	,
"	actions	"	,	"	أجراءات	"	,
"	activities	"	,	"	أنشطة	"	,
"	activities	"	,	"	أنشطة	"	,
"	actor	"	,	"	ممثل	"	,
"	actors	"	,	"	ممثلين	"	,
"	actually	"	,	"	في الواقع	"	,
"	adapted	"	,	"	معدل	"	,
"	adapting	"	,	"	متكيف	"	,
"	add	"	,	"	يضيف	"	,
"	adding	"	,	"	مضيفا	"	,
"	address	"	,	"	عنوان	"	,
"	adept	"	,	"	ماهر	"	,
"	adjective	"	,	"	صفة	"	,
"	adjectives	"	,	"	صفات	"	,
"	adjust	"	,	"	يضبط	"	,
"	adjusted	"	,	"	معدل	"	,
"	adjustment	"	,	"	تعديل	"	,
"	teanagers	"	,	"	المراهقين	"	,
"	adult	"	,	"	بالغ	"	,
"	adults	"	,	"	كبار	"	,
"	advance	"	,	"	يتقدم	"	,
"	advantage	"	,	"	ايجابية	"	,
"	advantages	"	,	"	مزايا	"	,
"	adventure	"	,	"	مغامرة	"	,
"	adventurous	"	,	"	مغامر	"	,
"	adverb	"	,	"	ظرف حال	"	,
"	adverbs	"	,	"	أحوال	"	,
"	advertisement	"	,	"	إعلان	"	,
"	advertisements	"	,	"	إعلانات	"	,
"	advice	"	,	"	نصيحة	"	,
"	advisable	"	,	"	مستحسن	"	,
"	advise	"	,	"	ينصح	"	,
"	advisor	"	,	"	مستشار	"	,
"	aerobatics	"	,	"	بهلوانات جوية	"	,
"	affairs	"	,	"	أمور	"	,
"	affect	"	,	"	تؤثر	"	,
"	effects	"	,	"	تأثيرات	"	,
"	affirmative	"	,	"	اثبات	"	,
"	afford	"	,	"	تحمل الشراء 	"	,
"	afraid	"	,	"	خائف	"	,
"	Africa	"	,	"	أفريقيا	"	,
"	after	"	,	"	بعد	"	,
"	afternoon	"	,	"	بعد الظهر	"	,
"	again	"	,	"	مجددا	"	,
"	against	"	,	"	ضد	"	,
"	age	"	,	"	عمر	"	,
"	agent	"	,	"	وكيل	"	,
"	aggressive	"	,	"	عنيف	"	,
"	aggressively	"	,	"	بقوة	"	,
"	ago	"	,	"	منذ	"	,
"	agree on	"	,	"	يوافق على	"	,
"	agreed on	"	,	"	متفق عليه	"	,
"	agreeing	"	,	"	الاتفاق	"	,
"	ahead	"	,	"	امام	"	,
"	air	"	,	"	هواء	"	,
"	airline	"	,	"	شركة طيران	"	,
"	airplane	"	,	"	طائرة	"	,
"	airport	"	,	"	مطار	"	,
"	airshow	"	,	"	بث حي	"	,
"	alarms	"	,	"	إنذارات	"	,
"	all	"	,	"	الكل	"	,
"	allow	"	,	"	يسمح	"	,
"	allowed	"	,	"	مسموح	"	,
"	allowing	"	,	"	السماح	"	,
"	almost	"	,	"	تقريبيا	"	,
"	alone	"	,	"	وحده	"	,
"	along	"	,	"	على طول	"	,
"	already	"	,	"	سابقا	"	,
"	also	"	,	"	أيضا	"	,
"	always	"	,	"	دائما	"	,
"	am	"	,	"	صباحا	"	,
"	amazing	"	,	"	مدهش	"	,
"	ambition	"	,	"	طموح	"	,
"	ambitious	"	,	"	طموح	"	,
"	America	"	,	"	أمريكا	"	,
"	American	"	,	"	أمريكي	"	,
"	Americans	"	,	"	امريكيون	"	,
"	among	"	,	"	من بين	"	,
"	amount	"	,	"	مقدار	"	,
"	amounts	"	,	"	مبالغ	"	,
"	ancient	"	,	"	قديمة جدا	"	,
"	angry	"	,	"	غاضب	"	,
"	animals	"	,	"	حيوانات	"	,
"	annoying	"	,	"	مزعج	"	,
"	annoy	"	,	"	يزعج	"	,
"	another	"	,	"	اخر	"	,
"	answer	"	,	"	إجابة	"	,
"	answered	"	,	"	أجاب	"	,
"	answers	"	,	"	اجوبة	"	,
"	antique	"	,	"	أثر قديم	"	,
"	ants	"	,	"	نمل	"	,
"	any	"	,	"	أي	"	,
"	anymore	"	,	"	أي أكثر من ذلك	"	,
"	anyone	"	,	"	أي واحد	"	,
"	anything	"	,	"	اي شى	"	,
"	anytime	"	,	"	في أي وقت	"	,
"	anywhere	"	,	"	في أى مكان	"	,
"	apartment	"	,	"	شقة	"	,
"	apologize	"	,	"	يعتذر	"	,
"	appear	"	,	"	يظهر	"	,
"	apple	"	,	"	تفاحة	"	,
"	application	"	,	"	تطبيق	"	,
"	apply	"	,	"	يتقدم	"	,
"	appointment	"	,	"	موعد	"	,
"	appointments	"	,	"	تعيينات	"	,
"	appreciate	"	,	"	يقدر	"	,
"	appropriate	"	,	"	ملائم	"	,
"	aptitude	"	,	"	موهبة	"	,
"	personality	"	,	"	 شخصية	"	,
"	aptitude	"	,	"	الكفاءة	"	,
"	aptitudes	"	,	"	استعدادات	"	,
"	Arabia	"	,	"	جزيره العرب	"	,
"	architect	"	,	"	مهندس معماري	"	,
"	argue	"	,	"	تجادل	"	,
"	argument	"	,	"	جدال	"	,
"	arguments	"	,	"	الحجج	"	,
"	around	"	,	"	حول	"	,
"	arrive	"	,	"	يصل	"	,
"	arrived	"	,	"	وصل	"	,
"	arriving	"	,	"	وصول	"	,
"	art	"	,	"	فن	"	,
"	article	"	,	"	مقالة - سلعة	"	,
"	artist	"	,	"	فنان	"	,
"	artists	"	,	"	فنانين	"	,
"	artwork	"	,	"	عمل فني	"	,
"	Asian	"	,	"	آسيا	"	,
"	aside	"	,	"	جانبا	"	,
"	Ask	"	,	"	يسأل	"	,
"	asked	"	,	"	مطلوب	"	,
"	asking	"	,	"	يسأل	"	,
"	aspects	"	,	"	أوجه	"	,
"	assessment	"	,	"	تقييم	"	,
"	assess	"	,	"	يقيم	"	,
"	assessing	"	,	"	تقييم	"	,
"	assets	"	,	"	اصول	"	,
"	assignments	"	,	"	تعيينات	"	,
"	assimilate	"	,	"	يستوعب	"	,
"	assimilating	"	,	"	استيعاب	"	,
"	assimilation	"	,	"	استيعاب	"	,
"	association	"	,	"	جمعية	"	,
"	assurance	"	,	"	توكيد	"	,
"	at	"	,	"	في	"	,
"	ate v2	"	,	"	أكل	"	,
"	athletic	"	,	"	رياضي	"	,
"	attack n	"	,	"	هجوم	"	,
"	attend	"	,	"	حضر	"	,
"	attendant	"	,	"	حاضر	"	,
"	attention	"	,	"	انتباه	"	,
"	attract	"	,	"	جذب	"	,
"	attraction	"	,	"	جاذبية	"	,
"	attractive	"	,	"	ملفت للانتباه	"	,
"	audio	"	,	"	صوتي	"	,
"	aunt	"	,	"	عمة	"	,
"	author	"	,	"	مؤلف	"	,
"	authorities	"	,	"	سلطات	"	,
"	authors	"	,	"	مؤلفون	"	,
"	automatic	"	,	"	تلقائي	"	,
"	automobile	"	,	"	سيارة	"	,
"	auxiliaries	"	,	"	اكسسوارات	"	,
"	available	"	,	"	متوفرة	"	,
"	average	"	,	"	معدل	"	,
"	avoid	"	,	"	تجنب	"	,
"	avoided	"	,	"	تجنب	"	,
"	avoiding	"	,	"	تجنب	"	,
"	awards	"	,	"	جوائز	"	,
"	awareness	"	,	"	وعي	"	,
"	away	"	,	"	بعيد	"	,

];

var WordQ = Words[NumA-1];
var WordA = Words[NumA];

var WordQ1 = Words[NumA1-1];
var WordA1 = Words[NumA1];

var WordQ2 = Words[NumA2-1];
var WordA2 = Words[NumA2];

var WordQ3 = Words[NumA3-1];
var WordA3 = Words[NumA3];

var WordQ4 = Words[NumA4-1];
var WordA4 = Words[NumA4];


player.SetVar("NumA",NumA);
player.SetVar("NumA1",NumA1);
player.SetVar("NumA2",NumA2);
player.SetVar("NumA3",NumA3);
player.SetVar("NumA4",NumA4);

player.SetVar("WordQ",WordQ);
player.SetVar("WordQ1",WordQ1);
player.SetVar("WordQ2",WordQ2);
player.SetVar("WordQ3",WordQ3);
player.SetVar("WordQ4",WordQ4);


player.SetVar("WordA",WordA);
player.SetVar("WordA1",WordA1);
player.SetVar("WordA2",WordA2);
player.SetVar("WordA3",WordA3);
player.SetVar("WordA4",WordA4);

}

function Script2()
{
  // Odd = Engligh question, next Even = Arabic answer;
// random is even for arabic answer;

var player = GetPlayer();

var Words = 194; 

var NumA= Math.floor(Math.random()*Words+1)*2;
var NumA1= Math.floor(Math.random()*Words+1)*2;
var NumA2= Math.floor(Math.random()*Words+1)*2;
var NumA3= Math.floor(Math.random()*Words+1)*2;
var NumA4= Math.floor(Math.random()*Words+1)*2;







if ( (NumA1 == NumA)  || (NumA1 ==  NumA2) || (NumA1 ==  NumA3) || (NumA1 ==  NumA4) ) {
  var NumA1= 0
}

if ( (NumA2 == NumA)  || (NumA2 ==  NumA1) || (NumA2 ==  NumA3) || (NumA2 ==  NumA4) ) {
  var NumA2=  0
}

if ( (NumA3 == NumA)  || (NumA3 ==  NumA1) || (NumA3 ==  NumA2) || (NumA3 ==  NumA4) ) {
  var NumA3= 0
}


if ( (NumA4 == NumA)  || (NumA4 ==  NumA1) || (NumA4 ==  NumA2) || (NumA4 ==  NumA3) ) {
  var NumA4= 0
}


var Words= [
"Free Answer for You",

"	abilities	"	,	"	قدرات	"	,
"	ability	"	,	"	قدرة	"	,
"	able	"	,	"	قادر	"	,
"	about	"	,	"	حول	"	,
"	above	"	,	"	في الاعلى	"	,
"	abroad	"	,	"	في الخارج	"	,
"	absentminded	"	,	"	شارد الذهن	"	,
"	abuse	"	,	"	سوء المعاملة	"	,
"	academic	"	,	"	أكاديمي	"	,
"	academy	"	,	"	أكاديمية	"	,
"	accent	"	,	"	لهجة	"	,
"	accept	"	,	"	يقبل 	"	,
"	accepted	"	,	"	مقبول	"	,
"	accepting	"	,	"	قبول	"	,
"	accident	"	,	"	حادثة	"	,
"	accidentally	"	,	"	من غير قصد	"	,
"	accidents	"	,	"	حوادث	"	,
"	accommodation	"	,	"	إقامة	"	,
"	according	"	,	"	تبعا	"	,
"	accountant	"	,	"	محاسب	"	,
"	accounting	"	,	"	محاسبة	"	,
"	accurate	"	,	"	دقيق	"	,
"	accustomed	"	,	"	معتاد	"	,
"	achieve	"	,	"	ينجز	"	,
"	across	"	,	"	بجانب	"	,
"	act	"	,	"	فعل	"	,
"	action	"	,	"	عمل	"	,
"	actions	"	,	"	أجراءات	"	,
"	activities	"	,	"	أنشطة	"	,
"	activities	"	,	"	أنشطة	"	,
"	actor	"	,	"	ممثل	"	,
"	actors	"	,	"	ممثلين	"	,
"	actually	"	,	"	في الواقع	"	,
"	adapted	"	,	"	معدل	"	,
"	adapting	"	,	"	متكيف	"	,
"	add	"	,	"	يضيف	"	,
"	adding	"	,	"	مضيفا	"	,
"	address	"	,	"	عنوان	"	,
"	adept	"	,	"	ماهر	"	,
"	adjective	"	,	"	صفة	"	,
"	adjectives	"	,	"	صفات	"	,
"	adjust	"	,	"	يضبط	"	,
"	adjusted	"	,	"	معدل	"	,
"	adjustment	"	,	"	تعديل	"	,
"	teanagers	"	,	"	المراهقين	"	,
"	adult	"	,	"	بالغ	"	,
"	adults	"	,	"	كبار	"	,
"	advance	"	,	"	يتقدم	"	,
"	advantage	"	,	"	ايجابية	"	,
"	advantages	"	,	"	مزايا	"	,
"	adventure	"	,	"	مغامرة	"	,
"	adventurous	"	,	"	مغامر	"	,
"	adverb	"	,	"	ظرف حال	"	,
"	adverbs	"	,	"	أحوال	"	,
"	advertisement	"	,	"	إعلان	"	,
"	advertisements	"	,	"	إعلانات	"	,
"	advice	"	,	"	نصيحة	"	,
"	advisable	"	,	"	مستحسن	"	,
"	advise	"	,	"	ينصح	"	,
"	advisor	"	,	"	مستشار	"	,
"	aerobatics	"	,	"	بهلوانات جوية	"	,
"	affairs	"	,	"	أمور	"	,
"	affect	"	,	"	تؤثر	"	,
"	effects	"	,	"	تأثيرات	"	,
"	affirmative	"	,	"	اثبات	"	,
"	afford	"	,	"	تحمل الشراء 	"	,
"	afraid	"	,	"	خائف	"	,
"	Africa	"	,	"	أفريقيا	"	,
"	after	"	,	"	بعد	"	,
"	afternoon	"	,	"	بعد الظهر	"	,
"	again	"	,	"	مجددا	"	,
"	against	"	,	"	ضد	"	,
"	age	"	,	"	عمر	"	,
"	agent	"	,	"	وكيل	"	,
"	aggressive	"	,	"	عنيف	"	,
"	aggressively	"	,	"	بقوة	"	,
"	ago	"	,	"	منذ	"	,
"	agree on	"	,	"	يوافق على	"	,
"	agreed on	"	,	"	متفق عليه	"	,
"	agreeing	"	,	"	الاتفاق	"	,
"	ahead	"	,	"	امام	"	,
"	air	"	,	"	هواء	"	,
"	airline	"	,	"	شركة طيران	"	,
"	airplane	"	,	"	طائرة	"	,
"	airport	"	,	"	مطار	"	,
"	airshow	"	,	"	بث حي	"	,
"	alarms	"	,	"	إنذارات	"	,
"	all	"	,	"	الكل	"	,
"	allow	"	,	"	يسمح	"	,
"	allowed	"	,	"	مسموح	"	,
"	allowing	"	,	"	السماح	"	,
"	almost	"	,	"	تقريبيا	"	,
"	alone	"	,	"	وحده	"	,
"	along	"	,	"	على طول	"	,
"	already	"	,	"	سابقا	"	,
"	also	"	,	"	أيضا	"	,
"	always	"	,	"	دائما	"	,
"	am	"	,	"	صباحا	"	,
"	amazing	"	,	"	مدهش	"	,
"	ambition	"	,	"	طموح	"	,
"	ambitious	"	,	"	طموح	"	,
"	America	"	,	"	أمريكا	"	,
"	American	"	,	"	أمريكي	"	,
"	Americans	"	,	"	امريكيون	"	,
"	among	"	,	"	من بين	"	,
"	amount	"	,	"	مقدار	"	,
"	amounts	"	,	"	مبالغ	"	,
"	ancient	"	,	"	قديمة جدا	"	,
"	angry	"	,	"	غاضب	"	,
"	animals	"	,	"	حيوانات	"	,
"	annoying	"	,	"	مزعج	"	,
"	annoy	"	,	"	يزعج	"	,
"	another	"	,	"	اخر	"	,
"	answer	"	,	"	إجابة	"	,
"	answered	"	,	"	أجاب	"	,
"	answers	"	,	"	اجوبة	"	,
"	antique	"	,	"	أثر قديم	"	,
"	ants	"	,	"	نمل	"	,
"	any	"	,	"	أي	"	,
"	anymore	"	,	"	أي أكثر من ذلك	"	,
"	anyone	"	,	"	أي واحد	"	,
"	anything	"	,	"	اي شى	"	,
"	anytime	"	,	"	في أي وقت	"	,
"	anywhere	"	,	"	في أى مكان	"	,
"	apartment	"	,	"	شقة	"	,
"	apologize	"	,	"	يعتذر	"	,
"	appear	"	,	"	يظهر	"	,
"	apple	"	,	"	تفاحة	"	,
"	application	"	,	"	تطبيق	"	,
"	apply	"	,	"	يتقدم	"	,
"	appointment	"	,	"	موعد	"	,
"	appointments	"	,	"	تعيينات	"	,
"	appreciate	"	,	"	يقدر	"	,
"	appropriate	"	,	"	ملائم	"	,
"	aptitude	"	,	"	موهبة	"	,
"	personality	"	,	"	 شخصية	"	,
"	aptitude	"	,	"	الكفاءة	"	,
"	aptitudes	"	,	"	استعدادات	"	,
"	Arabia	"	,	"	جزيره العرب	"	,
"	architect	"	,	"	مهندس معماري	"	,
"	argue	"	,	"	تجادل	"	,
"	argument	"	,	"	جدال	"	,
"	arguments	"	,	"	الحجج	"	,
"	around	"	,	"	حول	"	,
"	arrive	"	,	"	يصل	"	,
"	arrived	"	,	"	وصل	"	,
"	arriving	"	,	"	وصول	"	,
"	art	"	,	"	فن	"	,
"	article	"	,	"	مقالة - سلعة	"	,
"	artist	"	,	"	فنان	"	,
"	artists	"	,	"	فنانين	"	,
"	artwork	"	,	"	عمل فني	"	,
"	Asian	"	,	"	آسيا	"	,
"	aside	"	,	"	جانبا	"	,
"	Ask	"	,	"	يسأل	"	,
"	asked	"	,	"	مطلوب	"	,
"	asking	"	,	"	يسأل	"	,
"	aspects	"	,	"	أوجه	"	,
"	assessment	"	,	"	تقييم	"	,
"	assess	"	,	"	يقيم	"	,
"	assessing	"	,	"	تقييم	"	,
"	assets	"	,	"	اصول	"	,
"	assignments	"	,	"	تعيينات	"	,
"	assimilate	"	,	"	يستوعب	"	,
"	assimilating	"	,	"	استيعاب	"	,
"	assimilation	"	,	"	استيعاب	"	,
"	association	"	,	"	جمعية	"	,
"	assurance	"	,	"	توكيد	"	,
"	at	"	,	"	في	"	,
"	ate v2	"	,	"	أكل	"	,
"	athletic	"	,	"	رياضي	"	,
"	attack n	"	,	"	هجوم	"	,
"	attend	"	,	"	حضر	"	,
"	attendant	"	,	"	حاضر	"	,
"	attention	"	,	"	انتباه	"	,
"	attract	"	,	"	جذب	"	,
"	attraction	"	,	"	جاذبية	"	,
"	attractive	"	,	"	ملفت للانتباه	"	,
"	audio	"	,	"	صوتي	"	,
"	aunt	"	,	"	عمة	"	,
"	author	"	,	"	مؤلف	"	,
"	authorities	"	,	"	سلطات	"	,
"	authors	"	,	"	مؤلفون	"	,
"	automatic	"	,	"	تلقائي	"	,
"	automobile	"	,	"	سيارة	"	,
"	auxiliaries	"	,	"	اكسسوارات	"	,
"	available	"	,	"	متوفرة	"	,
"	average	"	,	"	معدل	"	,
"	avoid	"	,	"	تجنب	"	,
"	avoided	"	,	"	تجنب	"	,
"	avoiding	"	,	"	تجنب	"	,
"	awards	"	,	"	جوائز	"	,
"	awareness	"	,	"	وعي	"	,
"	away	"	,	"	بعيد	"	,

];

var WordQ = Words[NumA-1];
var WordA = Words[NumA];

var WordQ1 = Words[NumA1-1];
var WordA1 = Words[NumA1];

var WordQ2 = Words[NumA2-1];
var WordA2 = Words[NumA2];

var WordQ3 = Words[NumA3-1];
var WordA3 = Words[NumA3];

var WordQ4 = Words[NumA4-1];
var WordA4 = Words[NumA4];


player.SetVar("NumA",NumA);
player.SetVar("NumA1",NumA1);
player.SetVar("NumA2",NumA2);
player.SetVar("NumA3",NumA3);
player.SetVar("NumA4",NumA4);

player.SetVar("WordQ",WordQ);
player.SetVar("WordQ1",WordQ1);
player.SetVar("WordQ2",WordQ2);
player.SetVar("WordQ3",WordQ3);
player.SetVar("WordQ4",WordQ4);


player.SetVar("WordA",WordA);
player.SetVar("WordA1",WordA1);
player.SetVar("WordA2",WordA2);
player.SetVar("WordA3",WordA3);
player.SetVar("WordA4",WordA4);

}

function Script3()
{
  // Odd = Engligh question, next Even = Arabic answer;
// random is even for arabic answer;

var player = GetPlayer();

var Words = 194; 

var NumA= Math.floor(Math.random()*Words+1)*2;
var NumA1= Math.floor(Math.random()*Words+1)*2;
var NumA2= Math.floor(Math.random()*Words+1)*2;
var NumA3= Math.floor(Math.random()*Words+1)*2;
var NumA4= Math.floor(Math.random()*Words+1)*2;







if ( (NumA1 == NumA)  || (NumA1 ==  NumA2) || (NumA1 ==  NumA3) || (NumA1 ==  NumA4) ) {
  var NumA1= 0
}

if ( (NumA2 == NumA)  || (NumA2 ==  NumA1) || (NumA2 ==  NumA3) || (NumA2 ==  NumA4) ) {
  var NumA2=  0
}

if ( (NumA3 == NumA)  || (NumA3 ==  NumA1) || (NumA3 ==  NumA2) || (NumA3 ==  NumA4) ) {
  var NumA3= 0
}


if ( (NumA4 == NumA)  || (NumA4 ==  NumA1) || (NumA4 ==  NumA2) || (NumA4 ==  NumA3) ) {
  var NumA4= 0
}


var Words= [
"Free Answer for You",

"	abilities	"	,	"	قدرات	"	,
"	ability	"	,	"	قدرة	"	,
"	able	"	,	"	قادر	"	,
"	about	"	,	"	حول	"	,
"	above	"	,	"	في الاعلى	"	,
"	abroad	"	,	"	في الخارج	"	,
"	absentminded	"	,	"	شارد الذهن	"	,
"	abuse	"	,	"	سوء المعاملة	"	,
"	academic	"	,	"	أكاديمي	"	,
"	academy	"	,	"	أكاديمية	"	,
"	accent	"	,	"	لهجة	"	,
"	accept	"	,	"	يقبل 	"	,
"	accepted	"	,	"	مقبول	"	,
"	accepting	"	,	"	قبول	"	,
"	accident	"	,	"	حادثة	"	,
"	accidentally	"	,	"	من غير قصد	"	,
"	accidents	"	,	"	حوادث	"	,
"	accommodation	"	,	"	إقامة	"	,
"	according	"	,	"	تبعا	"	,
"	accountant	"	,	"	محاسب	"	,
"	accounting	"	,	"	محاسبة	"	,
"	accurate	"	,	"	دقيق	"	,
"	accustomed	"	,	"	معتاد	"	,
"	achieve	"	,	"	ينجز	"	,
"	across	"	,	"	بجانب	"	,
"	act	"	,	"	فعل	"	,
"	action	"	,	"	عمل	"	,
"	actions	"	,	"	أجراءات	"	,
"	activities	"	,	"	أنشطة	"	,
"	activities	"	,	"	أنشطة	"	,
"	actor	"	,	"	ممثل	"	,
"	actors	"	,	"	ممثلين	"	,
"	actually	"	,	"	في الواقع	"	,
"	adapted	"	,	"	معدل	"	,
"	adapting	"	,	"	متكيف	"	,
"	add	"	,	"	يضيف	"	,
"	adding	"	,	"	مضيفا	"	,
"	address	"	,	"	عنوان	"	,
"	adept	"	,	"	ماهر	"	,
"	adjective	"	,	"	صفة	"	,
"	adjectives	"	,	"	صفات	"	,
"	adjust	"	,	"	يضبط	"	,
"	adjusted	"	,	"	معدل	"	,
"	adjustment	"	,	"	تعديل	"	,
"	teanagers	"	,	"	المراهقين	"	,
"	adult	"	,	"	بالغ	"	,
"	adults	"	,	"	كبار	"	,
"	advance	"	,	"	يتقدم	"	,
"	advantage	"	,	"	ايجابية	"	,
"	advantages	"	,	"	مزايا	"	,
"	adventure	"	,	"	مغامرة	"	,
"	adventurous	"	,	"	مغامر	"	,
"	adverb	"	,	"	ظرف حال	"	,
"	adverbs	"	,	"	أحوال	"	,
"	advertisement	"	,	"	إعلان	"	,
"	advertisements	"	,	"	إعلانات	"	,
"	advice	"	,	"	نصيحة	"	,
"	advisable	"	,	"	مستحسن	"	,
"	advise	"	,	"	ينصح	"	,
"	advisor	"	,	"	مستشار	"	,
"	aerobatics	"	,	"	بهلوانات جوية	"	,
"	affairs	"	,	"	أمور	"	,
"	affect	"	,	"	تؤثر	"	,
"	effects	"	,	"	تأثيرات	"	,
"	affirmative	"	,	"	اثبات	"	,
"	afford	"	,	"	تحمل الشراء 	"	,
"	afraid	"	,	"	خائف	"	,
"	Africa	"	,	"	أفريقيا	"	,
"	after	"	,	"	بعد	"	,
"	afternoon	"	,	"	بعد الظهر	"	,
"	again	"	,	"	مجددا	"	,
"	against	"	,	"	ضد	"	,
"	age	"	,	"	عمر	"	,
"	agent	"	,	"	وكيل	"	,
"	aggressive	"	,	"	عنيف	"	,
"	aggressively	"	,	"	بقوة	"	,
"	ago	"	,	"	منذ	"	,
"	agree on	"	,	"	يوافق على	"	,
"	agreed on	"	,	"	متفق عليه	"	,
"	agreeing	"	,	"	الاتفاق	"	,
"	ahead	"	,	"	امام	"	,
"	air	"	,	"	هواء	"	,
"	airline	"	,	"	شركة طيران	"	,
"	airplane	"	,	"	طائرة	"	,
"	airport	"	,	"	مطار	"	,
"	airshow	"	,	"	بث حي	"	,
"	alarms	"	,	"	إنذارات	"	,
"	all	"	,	"	الكل	"	,
"	allow	"	,	"	يسمح	"	,
"	allowed	"	,	"	مسموح	"	,
"	allowing	"	,	"	السماح	"	,
"	almost	"	,	"	تقريبيا	"	,
"	alone	"	,	"	وحده	"	,
"	along	"	,	"	على طول	"	,
"	already	"	,	"	سابقا	"	,
"	also	"	,	"	أيضا	"	,
"	always	"	,	"	دائما	"	,
"	am	"	,	"	صباحا	"	,
"	amazing	"	,	"	مدهش	"	,
"	ambition	"	,	"	طموح	"	,
"	ambitious	"	,	"	طموح	"	,
"	America	"	,	"	أمريكا	"	,
"	American	"	,	"	أمريكي	"	,
"	Americans	"	,	"	امريكيون	"	,
"	among	"	,	"	من بين	"	,
"	amount	"	,	"	مقدار	"	,
"	amounts	"	,	"	مبالغ	"	,
"	ancient	"	,	"	قديمة جدا	"	,
"	angry	"	,	"	غاضب	"	,
"	animals	"	,	"	حيوانات	"	,
"	annoying	"	,	"	مزعج	"	,
"	annoy	"	,	"	يزعج	"	,
"	another	"	,	"	اخر	"	,
"	answer	"	,	"	إجابة	"	,
"	answered	"	,	"	أجاب	"	,
"	answers	"	,	"	اجوبة	"	,
"	antique	"	,	"	أثر قديم	"	,
"	ants	"	,	"	نمل	"	,
"	any	"	,	"	أي	"	,
"	anymore	"	,	"	أي أكثر من ذلك	"	,
"	anyone	"	,	"	أي واحد	"	,
"	anything	"	,	"	اي شى	"	,
"	anytime	"	,	"	في أي وقت	"	,
"	anywhere	"	,	"	في أى مكان	"	,
"	apartment	"	,	"	شقة	"	,
"	apologize	"	,	"	يعتذر	"	,
"	appear	"	,	"	يظهر	"	,
"	apple	"	,	"	تفاحة	"	,
"	application	"	,	"	تطبيق	"	,
"	apply	"	,	"	يتقدم	"	,
"	appointment	"	,	"	موعد	"	,
"	appointments	"	,	"	تعيينات	"	,
"	appreciate	"	,	"	يقدر	"	,
"	appropriate	"	,	"	ملائم	"	,
"	aptitude	"	,	"	موهبة	"	,
"	personality	"	,	"	 شخصية	"	,
"	aptitude	"	,	"	الكفاءة	"	,
"	aptitudes	"	,	"	استعدادات	"	,
"	Arabia	"	,	"	جزيره العرب	"	,
"	architect	"	,	"	مهندس معماري	"	,
"	argue	"	,	"	تجادل	"	,
"	argument	"	,	"	جدال	"	,
"	arguments	"	,	"	الحجج	"	,
"	around	"	,	"	حول	"	,
"	arrive	"	,	"	يصل	"	,
"	arrived	"	,	"	وصل	"	,
"	arriving	"	,	"	وصول	"	,
"	art	"	,	"	فن	"	,
"	article	"	,	"	مقالة - سلعة	"	,
"	artist	"	,	"	فنان	"	,
"	artists	"	,	"	فنانين	"	,
"	artwork	"	,	"	عمل فني	"	,
"	Asian	"	,	"	آسيا	"	,
"	aside	"	,	"	جانبا	"	,
"	Ask	"	,	"	يسأل	"	,
"	asked	"	,	"	مطلوب	"	,
"	asking	"	,	"	يسأل	"	,
"	aspects	"	,	"	أوجه	"	,
"	assessment	"	,	"	تقييم	"	,
"	assess	"	,	"	يقيم	"	,
"	assessing	"	,	"	تقييم	"	,
"	assets	"	,	"	اصول	"	,
"	assignments	"	,	"	تعيينات	"	,
"	assimilate	"	,	"	يستوعب	"	,
"	assimilating	"	,	"	استيعاب	"	,
"	assimilation	"	,	"	استيعاب	"	,
"	association	"	,	"	جمعية	"	,
"	assurance	"	,	"	توكيد	"	,
"	at	"	,	"	في	"	,
"	ate v2	"	,	"	أكل	"	,
"	athletic	"	,	"	رياضي	"	,
"	attack n	"	,	"	هجوم	"	,
"	attend	"	,	"	حضر	"	,
"	attendant	"	,	"	حاضر	"	,
"	attention	"	,	"	انتباه	"	,
"	attract	"	,	"	جذب	"	,
"	attraction	"	,	"	جاذبية	"	,
"	attractive	"	,	"	ملفت للانتباه	"	,
"	audio	"	,	"	صوتي	"	,
"	aunt	"	,	"	عمة	"	,
"	author	"	,	"	مؤلف	"	,
"	authorities	"	,	"	سلطات	"	,
"	authors	"	,	"	مؤلفون	"	,
"	automatic	"	,	"	تلقائي	"	,
"	automobile	"	,	"	سيارة	"	,
"	auxiliaries	"	,	"	اكسسوارات	"	,
"	available	"	,	"	متوفرة	"	,
"	average	"	,	"	معدل	"	,
"	avoid	"	,	"	تجنب	"	,
"	avoided	"	,	"	تجنب	"	,
"	avoiding	"	,	"	تجنب	"	,
"	awards	"	,	"	جوائز	"	,
"	awareness	"	,	"	وعي	"	,
"	away	"	,	"	بعيد	"	,

];

var WordQ = Words[NumA-1];
var WordA = Words[NumA];

var WordQ1 = Words[NumA1-1];
var WordA1 = Words[NumA1];

var WordQ2 = Words[NumA2-1];
var WordA2 = Words[NumA2];

var WordQ3 = Words[NumA3-1];
var WordA3 = Words[NumA3];

var WordQ4 = Words[NumA4-1];
var WordA4 = Words[NumA4];


player.SetVar("NumA",NumA);
player.SetVar("NumA1",NumA1);
player.SetVar("NumA2",NumA2);
player.SetVar("NumA3",NumA3);
player.SetVar("NumA4",NumA4);

player.SetVar("WordQ",WordQ);
player.SetVar("WordQ1",WordQ1);
player.SetVar("WordQ2",WordQ2);
player.SetVar("WordQ3",WordQ3);
player.SetVar("WordQ4",WordQ4);


player.SetVar("WordA",WordA);
player.SetVar("WordA1",WordA1);
player.SetVar("WordA2",WordA2);
player.SetVar("WordA3",WordA3);
player.SetVar("WordA4",WordA4);

}

function Script4()
{
  // Odd = Engligh question, next Even = Arabic answer;
// random is even for arabic answer;

var player = GetPlayer();

var Words = 194; 

var NumA= Math.floor(Math.random()*Words+1)*2;
var NumA1= Math.floor(Math.random()*Words+1)*2;
var NumA2= Math.floor(Math.random()*Words+1)*2;
var NumA3= Math.floor(Math.random()*Words+1)*2;
var NumA4= Math.floor(Math.random()*Words+1)*2;







if ( (NumA1 == NumA)  || (NumA1 ==  NumA2) || (NumA1 ==  NumA3) || (NumA1 ==  NumA4) ) {
  var NumA1= 0
}

if ( (NumA2 == NumA)  || (NumA2 ==  NumA1) || (NumA2 ==  NumA3) || (NumA2 ==  NumA4) ) {
  var NumA2=  0
}

if ( (NumA3 == NumA)  || (NumA3 ==  NumA1) || (NumA3 ==  NumA2) || (NumA3 ==  NumA4) ) {
  var NumA3= 0
}


if ( (NumA4 == NumA)  || (NumA4 ==  NumA1) || (NumA4 ==  NumA2) || (NumA4 ==  NumA3) ) {
  var NumA4= 0
}


var Words= [
"Free Answer for You",

"	abilities	"	,	"	قدرات	"	,
"	ability	"	,	"	قدرة	"	,
"	able	"	,	"	قادر	"	,
"	about	"	,	"	حول	"	,
"	above	"	,	"	في الاعلى	"	,
"	abroad	"	,	"	في الخارج	"	,
"	absentminded	"	,	"	شارد الذهن	"	,
"	abuse	"	,	"	سوء المعاملة	"	,
"	academic	"	,	"	أكاديمي	"	,
"	academy	"	,	"	أكاديمية	"	,
"	accent	"	,	"	لهجة	"	,
"	accept	"	,	"	يقبل 	"	,
"	accepted	"	,	"	مقبول	"	,
"	accepting	"	,	"	قبول	"	,
"	accident	"	,	"	حادثة	"	,
"	accidentally	"	,	"	من غير قصد	"	,
"	accidents	"	,	"	حوادث	"	,
"	accommodation	"	,	"	إقامة	"	,
"	according	"	,	"	تبعا	"	,
"	accountant	"	,	"	محاسب	"	,
"	accounting	"	,	"	محاسبة	"	,
"	accurate	"	,	"	دقيق	"	,
"	accustomed	"	,	"	معتاد	"	,
"	achieve	"	,	"	ينجز	"	,
"	across	"	,	"	بجانب	"	,
"	act	"	,	"	فعل	"	,
"	action	"	,	"	عمل	"	,
"	actions	"	,	"	أجراءات	"	,
"	activities	"	,	"	أنشطة	"	,
"	activities	"	,	"	أنشطة	"	,
"	actor	"	,	"	ممثل	"	,
"	actors	"	,	"	ممثلين	"	,
"	actually	"	,	"	في الواقع	"	,
"	adapted	"	,	"	معدل	"	,
"	adapting	"	,	"	متكيف	"	,
"	add	"	,	"	يضيف	"	,
"	adding	"	,	"	مضيفا	"	,
"	address	"	,	"	عنوان	"	,
"	adept	"	,	"	ماهر	"	,
"	adjective	"	,	"	صفة	"	,
"	adjectives	"	,	"	صفات	"	,
"	adjust	"	,	"	يضبط	"	,
"	adjusted	"	,	"	معدل	"	,
"	adjustment	"	,	"	تعديل	"	,
"	teanagers	"	,	"	المراهقين	"	,
"	adult	"	,	"	بالغ	"	,
"	adults	"	,	"	كبار	"	,
"	advance	"	,	"	يتقدم	"	,
"	advantage	"	,	"	ايجابية	"	,
"	advantages	"	,	"	مزايا	"	,
"	adventure	"	,	"	مغامرة	"	,
"	adventurous	"	,	"	مغامر	"	,
"	adverb	"	,	"	ظرف حال	"	,
"	adverbs	"	,	"	أحوال	"	,
"	advertisement	"	,	"	إعلان	"	,
"	advertisements	"	,	"	إعلانات	"	,
"	advice	"	,	"	نصيحة	"	,
"	advisable	"	,	"	مستحسن	"	,
"	advise	"	,	"	ينصح	"	,
"	advisor	"	,	"	مستشار	"	,
"	aerobatics	"	,	"	بهلوانات جوية	"	,
"	affairs	"	,	"	أمور	"	,
"	affect	"	,	"	تؤثر	"	,
"	effects	"	,	"	تأثيرات	"	,
"	affirmative	"	,	"	اثبات	"	,
"	afford	"	,	"	تحمل الشراء 	"	,
"	afraid	"	,	"	خائف	"	,
"	Africa	"	,	"	أفريقيا	"	,
"	after	"	,	"	بعد	"	,
"	afternoon	"	,	"	بعد الظهر	"	,
"	again	"	,	"	مجددا	"	,
"	against	"	,	"	ضد	"	,
"	age	"	,	"	عمر	"	,
"	agent	"	,	"	وكيل	"	,
"	aggressive	"	,	"	عنيف	"	,
"	aggressively	"	,	"	بقوة	"	,
"	ago	"	,	"	منذ	"	,
"	agree on	"	,	"	يوافق على	"	,
"	agreed on	"	,	"	متفق عليه	"	,
"	agreeing	"	,	"	الاتفاق	"	,
"	ahead	"	,	"	امام	"	,
"	air	"	,	"	هواء	"	,
"	airline	"	,	"	شركة طيران	"	,
"	airplane	"	,	"	طائرة	"	,
"	airport	"	,	"	مطار	"	,
"	airshow	"	,	"	بث حي	"	,
"	alarms	"	,	"	إنذارات	"	,
"	all	"	,	"	الكل	"	,
"	allow	"	,	"	يسمح	"	,
"	allowed	"	,	"	مسموح	"	,
"	allowing	"	,	"	السماح	"	,
"	almost	"	,	"	تقريبيا	"	,
"	alone	"	,	"	وحده	"	,
"	along	"	,	"	على طول	"	,
"	already	"	,	"	سابقا	"	,
"	also	"	,	"	أيضا	"	,
"	always	"	,	"	دائما	"	,
"	am	"	,	"	صباحا	"	,
"	amazing	"	,	"	مدهش	"	,
"	ambition	"	,	"	طموح	"	,
"	ambitious	"	,	"	طموح	"	,
"	America	"	,	"	أمريكا	"	,
"	American	"	,	"	أمريكي	"	,
"	Americans	"	,	"	امريكيون	"	,
"	among	"	,	"	من بين	"	,
"	amount	"	,	"	مقدار	"	,
"	amounts	"	,	"	مبالغ	"	,
"	ancient	"	,	"	قديمة جدا	"	,
"	angry	"	,	"	غاضب	"	,
"	animals	"	,	"	حيوانات	"	,
"	annoying	"	,	"	مزعج	"	,
"	annoy	"	,	"	يزعج	"	,
"	another	"	,	"	اخر	"	,
"	answer	"	,	"	إجابة	"	,
"	answered	"	,	"	أجاب	"	,
"	answers	"	,	"	اجوبة	"	,
"	antique	"	,	"	أثر قديم	"	,
"	ants	"	,	"	نمل	"	,
"	any	"	,	"	أي	"	,
"	anymore	"	,	"	أي أكثر من ذلك	"	,
"	anyone	"	,	"	أي واحد	"	,
"	anything	"	,	"	اي شى	"	,
"	anytime	"	,	"	في أي وقت	"	,
"	anywhere	"	,	"	في أى مكان	"	,
"	apartment	"	,	"	شقة	"	,
"	apologize	"	,	"	يعتذر	"	,
"	appear	"	,	"	يظهر	"	,
"	apple	"	,	"	تفاحة	"	,
"	application	"	,	"	تطبيق	"	,
"	apply	"	,	"	يتقدم	"	,
"	appointment	"	,	"	موعد	"	,
"	appointments	"	,	"	تعيينات	"	,
"	appreciate	"	,	"	يقدر	"	,
"	appropriate	"	,	"	ملائم	"	,
"	aptitude	"	,	"	موهبة	"	,
"	personality	"	,	"	 شخصية	"	,
"	aptitude	"	,	"	الكفاءة	"	,
"	aptitudes	"	,	"	استعدادات	"	,
"	Arabia	"	,	"	جزيره العرب	"	,
"	architect	"	,	"	مهندس معماري	"	,
"	argue	"	,	"	تجادل	"	,
"	argument	"	,	"	جدال	"	,
"	arguments	"	,	"	الحجج	"	,
"	around	"	,	"	حول	"	,
"	arrive	"	,	"	يصل	"	,
"	arrived	"	,	"	وصل	"	,
"	arriving	"	,	"	وصول	"	,
"	art	"	,	"	فن	"	,
"	article	"	,	"	مقالة - سلعة	"	,
"	artist	"	,	"	فنان	"	,
"	artists	"	,	"	فنانين	"	,
"	artwork	"	,	"	عمل فني	"	,
"	Asian	"	,	"	آسيا	"	,
"	aside	"	,	"	جانبا	"	,
"	Ask	"	,	"	يسأل	"	,
"	asked	"	,	"	مطلوب	"	,
"	asking	"	,	"	يسأل	"	,
"	aspects	"	,	"	أوجه	"	,
"	assessment	"	,	"	تقييم	"	,
"	assess	"	,	"	يقيم	"	,
"	assessing	"	,	"	تقييم	"	,
"	assets	"	,	"	اصول	"	,
"	assignments	"	,	"	تعيينات	"	,
"	assimilate	"	,	"	يستوعب	"	,
"	assimilating	"	,	"	استيعاب	"	,
"	assimilation	"	,	"	استيعاب	"	,
"	association	"	,	"	جمعية	"	,
"	assurance	"	,	"	توكيد	"	,
"	at	"	,	"	في	"	,
"	ate v2	"	,	"	أكل	"	,
"	athletic	"	,	"	رياضي	"	,
"	attack n	"	,	"	هجوم	"	,
"	attend	"	,	"	حضر	"	,
"	attendant	"	,	"	حاضر	"	,
"	attention	"	,	"	انتباه	"	,
"	attract	"	,	"	جذب	"	,
"	attraction	"	,	"	جاذبية	"	,
"	attractive	"	,	"	ملفت للانتباه	"	,
"	audio	"	,	"	صوتي	"	,
"	aunt	"	,	"	عمة	"	,
"	author	"	,	"	مؤلف	"	,
"	authorities	"	,	"	سلطات	"	,
"	authors	"	,	"	مؤلفون	"	,
"	automatic	"	,	"	تلقائي	"	,
"	automobile	"	,	"	سيارة	"	,
"	auxiliaries	"	,	"	اكسسوارات	"	,
"	available	"	,	"	متوفرة	"	,
"	average	"	,	"	معدل	"	,
"	avoid	"	,	"	تجنب	"	,
"	avoided	"	,	"	تجنب	"	,
"	avoiding	"	,	"	تجنب	"	,
"	awards	"	,	"	جوائز	"	,
"	awareness	"	,	"	وعي	"	,
"	away	"	,	"	بعيد	"	,

];

var WordQ = Words[NumA-1];
var WordA = Words[NumA];

var WordQ1 = Words[NumA1-1];
var WordA1 = Words[NumA1];

var WordQ2 = Words[NumA2-1];
var WordA2 = Words[NumA2];

var WordQ3 = Words[NumA3-1];
var WordA3 = Words[NumA3];

var WordQ4 = Words[NumA4-1];
var WordA4 = Words[NumA4];


player.SetVar("NumA",NumA);
player.SetVar("NumA1",NumA1);
player.SetVar("NumA2",NumA2);
player.SetVar("NumA3",NumA3);
player.SetVar("NumA4",NumA4);

player.SetVar("WordQ",WordQ);
player.SetVar("WordQ1",WordQ1);
player.SetVar("WordQ2",WordQ2);
player.SetVar("WordQ3",WordQ3);
player.SetVar("WordQ4",WordQ4);


player.SetVar("WordA",WordA);
player.SetVar("WordA1",WordA1);
player.SetVar("WordA2",WordA2);
player.SetVar("WordA3",WordA3);
player.SetVar("WordA4",WordA4);

}

function Script5()
{
  // Odd = Engligh question, next Even = Arabic answer;
// random is even for arabic answer;

var player = GetPlayer();

var Words = 194; 

var NumA= Math.floor(Math.random()*Words+1)*2;
var NumA1= Math.floor(Math.random()*Words+1)*2;
var NumA2= Math.floor(Math.random()*Words+1)*2;
var NumA3= Math.floor(Math.random()*Words+1)*2;
var NumA4= Math.floor(Math.random()*Words+1)*2;







if ( (NumA1 == NumA)  || (NumA1 ==  NumA2) || (NumA1 ==  NumA3) || (NumA1 ==  NumA4) ) {
  var NumA1= 0
}

if ( (NumA2 == NumA)  || (NumA2 ==  NumA1) || (NumA2 ==  NumA3) || (NumA2 ==  NumA4) ) {
  var NumA2=  0
}

if ( (NumA3 == NumA)  || (NumA3 ==  NumA1) || (NumA3 ==  NumA2) || (NumA3 ==  NumA4) ) {
  var NumA3= 0
}


if ( (NumA4 == NumA)  || (NumA4 ==  NumA1) || (NumA4 ==  NumA2) || (NumA4 ==  NumA3) ) {
  var NumA4= 0
}


var Words= [
"Free Answer for You",

"	abilities	"	,	"	قدرات	"	,
"	ability	"	,	"	قدرة	"	,
"	able	"	,	"	قادر	"	,
"	about	"	,	"	حول	"	,
"	above	"	,	"	في الاعلى	"	,
"	abroad	"	,	"	في الخارج	"	,
"	absentminded	"	,	"	شارد الذهن	"	,
"	abuse	"	,	"	سوء المعاملة	"	,
"	academic	"	,	"	أكاديمي	"	,
"	academy	"	,	"	أكاديمية	"	,
"	accent	"	,	"	لهجة	"	,
"	accept	"	,	"	يقبل 	"	,
"	accepted	"	,	"	مقبول	"	,
"	accepting	"	,	"	قبول	"	,
"	accident	"	,	"	حادثة	"	,
"	accidentally	"	,	"	من غير قصد	"	,
"	accidents	"	,	"	حوادث	"	,
"	accommodation	"	,	"	إقامة	"	,
"	according	"	,	"	تبعا	"	,
"	accountant	"	,	"	محاسب	"	,
"	accounting	"	,	"	محاسبة	"	,
"	accurate	"	,	"	دقيق	"	,
"	accustomed	"	,	"	معتاد	"	,
"	achieve	"	,	"	ينجز	"	,
"	across	"	,	"	بجانب	"	,
"	act	"	,	"	فعل	"	,
"	action	"	,	"	عمل	"	,
"	actions	"	,	"	أجراءات	"	,
"	activities	"	,	"	أنشطة	"	,
"	activities	"	,	"	أنشطة	"	,
"	actor	"	,	"	ممثل	"	,
"	actors	"	,	"	ممثلين	"	,
"	actually	"	,	"	في الواقع	"	,
"	adapted	"	,	"	معدل	"	,
"	adapting	"	,	"	متكيف	"	,
"	add	"	,	"	يضيف	"	,
"	adding	"	,	"	مضيفا	"	,
"	address	"	,	"	عنوان	"	,
"	adept	"	,	"	ماهر	"	,
"	adjective	"	,	"	صفة	"	,
"	adjectives	"	,	"	صفات	"	,
"	adjust	"	,	"	يضبط	"	,
"	adjusted	"	,	"	معدل	"	,
"	adjustment	"	,	"	تعديل	"	,
"	teanagers	"	,	"	المراهقين	"	,
"	adult	"	,	"	بالغ	"	,
"	adults	"	,	"	كبار	"	,
"	advance	"	,	"	يتقدم	"	,
"	advantage	"	,	"	ايجابية	"	,
"	advantages	"	,	"	مزايا	"	,
"	adventure	"	,	"	مغامرة	"	,
"	adventurous	"	,	"	مغامر	"	,
"	adverb	"	,	"	ظرف حال	"	,
"	adverbs	"	,	"	أحوال	"	,
"	advertisement	"	,	"	إعلان	"	,
"	advertisements	"	,	"	إعلانات	"	,
"	advice	"	,	"	نصيحة	"	,
"	advisable	"	,	"	مستحسن	"	,
"	advise	"	,	"	ينصح	"	,
"	advisor	"	,	"	مستشار	"	,
"	aerobatics	"	,	"	بهلوانات جوية	"	,
"	affairs	"	,	"	أمور	"	,
"	affect	"	,	"	تؤثر	"	,
"	effects	"	,	"	تأثيرات	"	,
"	affirmative	"	,	"	اثبات	"	,
"	afford	"	,	"	تحمل الشراء 	"	,
"	afraid	"	,	"	خائف	"	,
"	Africa	"	,	"	أفريقيا	"	,
"	after	"	,	"	بعد	"	,
"	afternoon	"	,	"	بعد الظهر	"	,
"	again	"	,	"	مجددا	"	,
"	against	"	,	"	ضد	"	,
"	age	"	,	"	عمر	"	,
"	agent	"	,	"	وكيل	"	,
"	aggressive	"	,	"	عنيف	"	,
"	aggressively	"	,	"	بقوة	"	,
"	ago	"	,	"	منذ	"	,
"	agree on	"	,	"	يوافق على	"	,
"	agreed on	"	,	"	متفق عليه	"	,
"	agreeing	"	,	"	الاتفاق	"	,
"	ahead	"	,	"	امام	"	,
"	air	"	,	"	هواء	"	,
"	airline	"	,	"	شركة طيران	"	,
"	airplane	"	,	"	طائرة	"	,
"	airport	"	,	"	مطار	"	,
"	airshow	"	,	"	بث حي	"	,
"	alarms	"	,	"	إنذارات	"	,
"	all	"	,	"	الكل	"	,
"	allow	"	,	"	يسمح	"	,
"	allowed	"	,	"	مسموح	"	,
"	allowing	"	,	"	السماح	"	,
"	almost	"	,	"	تقريبيا	"	,
"	alone	"	,	"	وحده	"	,
"	along	"	,	"	على طول	"	,
"	already	"	,	"	سابقا	"	,
"	also	"	,	"	أيضا	"	,
"	always	"	,	"	دائما	"	,
"	am	"	,	"	صباحا	"	,
"	amazing	"	,	"	مدهش	"	,
"	ambition	"	,	"	طموح	"	,
"	ambitious	"	,	"	طموح	"	,
"	America	"	,	"	أمريكا	"	,
"	American	"	,	"	أمريكي	"	,
"	Americans	"	,	"	امريكيون	"	,
"	among	"	,	"	من بين	"	,
"	amount	"	,	"	مقدار	"	,
"	amounts	"	,	"	مبالغ	"	,
"	ancient	"	,	"	قديمة جدا	"	,
"	angry	"	,	"	غاضب	"	,
"	animals	"	,	"	حيوانات	"	,
"	annoying	"	,	"	مزعج	"	,
"	annoy	"	,	"	يزعج	"	,
"	another	"	,	"	اخر	"	,
"	answer	"	,	"	إجابة	"	,
"	answered	"	,	"	أجاب	"	,
"	answers	"	,	"	اجوبة	"	,
"	antique	"	,	"	أثر قديم	"	,
"	ants	"	,	"	نمل	"	,
"	any	"	,	"	أي	"	,
"	anymore	"	,	"	أي أكثر من ذلك	"	,
"	anyone	"	,	"	أي واحد	"	,
"	anything	"	,	"	اي شى	"	,
"	anytime	"	,	"	في أي وقت	"	,
"	anywhere	"	,	"	في أى مكان	"	,
"	apartment	"	,	"	شقة	"	,
"	apologize	"	,	"	يعتذر	"	,
"	appear	"	,	"	يظهر	"	,
"	apple	"	,	"	تفاحة	"	,
"	application	"	,	"	تطبيق	"	,
"	apply	"	,	"	يتقدم	"	,
"	appointment	"	,	"	موعد	"	,
"	appointments	"	,	"	تعيينات	"	,
"	appreciate	"	,	"	يقدر	"	,
"	appropriate	"	,	"	ملائم	"	,
"	aptitude	"	,	"	موهبة	"	,
"	personality	"	,	"	 شخصية	"	,
"	aptitude	"	,	"	الكفاءة	"	,
"	aptitudes	"	,	"	استعدادات	"	,
"	Arabia	"	,	"	جزيره العرب	"	,
"	architect	"	,	"	مهندس معماري	"	,
"	argue	"	,	"	تجادل	"	,
"	argument	"	,	"	جدال	"	,
"	arguments	"	,	"	الحجج	"	,
"	around	"	,	"	حول	"	,
"	arrive	"	,	"	يصل	"	,
"	arrived	"	,	"	وصل	"	,
"	arriving	"	,	"	وصول	"	,
"	art	"	,	"	فن	"	,
"	article	"	,	"	مقالة - سلعة	"	,
"	artist	"	,	"	فنان	"	,
"	artists	"	,	"	فنانين	"	,
"	artwork	"	,	"	عمل فني	"	,
"	Asian	"	,	"	آسيا	"	,
"	aside	"	,	"	جانبا	"	,
"	Ask	"	,	"	يسأل	"	,
"	asked	"	,	"	مطلوب	"	,
"	asking	"	,	"	يسأل	"	,
"	aspects	"	,	"	أوجه	"	,
"	assessment	"	,	"	تقييم	"	,
"	assess	"	,	"	يقيم	"	,
"	assessing	"	,	"	تقييم	"	,
"	assets	"	,	"	اصول	"	,
"	assignments	"	,	"	تعيينات	"	,
"	assimilate	"	,	"	يستوعب	"	,
"	assimilating	"	,	"	استيعاب	"	,
"	assimilation	"	,	"	استيعاب	"	,
"	association	"	,	"	جمعية	"	,
"	assurance	"	,	"	توكيد	"	,
"	at	"	,	"	في	"	,
"	ate v2	"	,	"	أكل	"	,
"	athletic	"	,	"	رياضي	"	,
"	attack n	"	,	"	هجوم	"	,
"	attend	"	,	"	حضر	"	,
"	attendant	"	,	"	حاضر	"	,
"	attention	"	,	"	انتباه	"	,
"	attract	"	,	"	جذب	"	,
"	attraction	"	,	"	جاذبية	"	,
"	attractive	"	,	"	ملفت للانتباه	"	,
"	audio	"	,	"	صوتي	"	,
"	aunt	"	,	"	عمة	"	,
"	author	"	,	"	مؤلف	"	,
"	authorities	"	,	"	سلطات	"	,
"	authors	"	,	"	مؤلفون	"	,
"	automatic	"	,	"	تلقائي	"	,
"	automobile	"	,	"	سيارة	"	,
"	auxiliaries	"	,	"	اكسسوارات	"	,
"	available	"	,	"	متوفرة	"	,
"	average	"	,	"	معدل	"	,
"	avoid	"	,	"	تجنب	"	,
"	avoided	"	,	"	تجنب	"	,
"	avoiding	"	,	"	تجنب	"	,
"	awards	"	,	"	جوائز	"	,
"	awareness	"	,	"	وعي	"	,
"	away	"	,	"	بعيد	"	,

];

var WordQ = Words[NumA-1];
var WordA = Words[NumA];

var WordQ1 = Words[NumA1-1];
var WordA1 = Words[NumA1];

var WordQ2 = Words[NumA2-1];
var WordA2 = Words[NumA2];

var WordQ3 = Words[NumA3-1];
var WordA3 = Words[NumA3];

var WordQ4 = Words[NumA4-1];
var WordA4 = Words[NumA4];


player.SetVar("NumA",NumA);
player.SetVar("NumA1",NumA1);
player.SetVar("NumA2",NumA2);
player.SetVar("NumA3",NumA3);
player.SetVar("NumA4",NumA4);

player.SetVar("WordQ",WordQ);
player.SetVar("WordQ1",WordQ1);
player.SetVar("WordQ2",WordQ2);
player.SetVar("WordQ3",WordQ3);
player.SetVar("WordQ4",WordQ4);


player.SetVar("WordA",WordA);
player.SetVar("WordA1",WordA1);
player.SetVar("WordA2",WordA2);
player.SetVar("WordA3",WordA3);
player.SetVar("WordA4",WordA4);

}

function Script6()
{
  // Odd = Engligh question, next Even = Arabic answer;
// random is even for arabic answer;

var player = GetPlayer();

var Words = 141; 

var NumA= Math.floor(Math.random()*Words+1)*2;
var NumA1= Math.floor(Math.random()*Words+1)*2;
var NumA2= Math.floor(Math.random()*Words+1)*2;
var NumA3= Math.floor(Math.random()*Words+1)*2;
var NumA4= Math.floor(Math.random()*Words+1)*2;







if ( (NumA1 == NumA)  || (NumA1 ==  NumA2) || (NumA1 ==  NumA3) || (NumA1 ==  NumA4) ) {
  var NumA1= 0
}

if ( (NumA2 == NumA)  || (NumA2 ==  NumA1) || (NumA2 ==  NumA3) || (NumA2 ==  NumA4) ) {
  var NumA2=  0
}

if ( (NumA3 == NumA)  || (NumA3 ==  NumA1) || (NumA3 ==  NumA2) || (NumA3 ==  NumA4) ) {
  var NumA3= 0
}


if ( (NumA4 == NumA)  || (NumA4 ==  NumA1) || (NumA4 ==  NumA2) || (NumA4 ==  NumA3) ) {
  var NumA4= 0
}


var Words= [
"Free Answer for You",

"	baby	"	,	"	طفل	"	,
"	back	"	,	"	عودة	"	,
"	backpack	"	,	"	حقيبة ظهر	"	,
"	backward	"	,	"	الى الوراء	"	,
"	bad	"	,	"	سيئ	"	,
"	badly	"	,	"	بشكل سيئ	"	,
"	bags	"	,	"	أكياس	"	,
"	bake	"	,	"	خبز	"	,
"	baker	"	,	"	خباز	"	,
"	balcony	"	,	"	شرفة	"	,
"	ball	"	,	"	كرة	"	,
"	Bangladesh	"	,	"	بنغلاديش	"	,
"	bank	"	,	"	مصرف	"	,
"	banker	"	,	"	مصرفي	"	,
"	banks	"	,	"	البنوك	"	,
"	bargain	"	,	"	يساوم	"	,
"	bargains	"	,	"	صفقات	"	,
"	barriers	"	,	"	حواجز	"	,
"	base	"	,	"	يتمركز	"	,
"	based	"	,	"	قائم على	"	,
"	basic	"	,	"	أساسي	"	,
"	basketball	"	,	"	كرة سلة	"	,
"	bathroom	"	,	"	حمام	"	,
"	beach	"	,	"	شاطئ بحر	"	,
"	bear	"	,	"	يتحمل	"	,
"	beautiful	"	,	"	جميل	"	,
"	beauty	"	,	"	جمال	"	,
"	became	"	,	"	أصبح	"	,
"	because	"	,	"	لأن	"	,
"	become	"	,	"	يصبح	"	,
"	becoming	"	,	"	تصبح	"	,
"	bed	"	,	"	السرير	"	,
"	bedroom	"	,	"	غرفة نوم	"	,
"	before	"	,	"	قبل	"	,
"	began	"	,	"	بدأت	"	,
"	beginning	"	,	"	بداية	"	,
"	begin	"	,	"	يبدأ	"	,
"	behave	"	,	"	يتصرف	"	,
"	behavior	"	,	"	سلوك	"	,
"	behind	"	,	"	وراء	"	,
"	beige	"	,	"	اللون البيج	"	,
"	Beijing	"	,	"	بكين	"	,
"	being	"	,	"	يجرى	"	,
"	beings	"	,	"	كائنات	"	,
"	beliefs	"	,	"	المعتقدات	"	,
"	believe	"	,	"	يصدق	"	,
"	belong	"	,	"	ينتمي ل	"	,
"	beloved	"	,	"	محبوب	"	,
"	below	"	,	"	أقل	"	,
"	belt	"	,	"	حزام	"	,
"	belts	"	,	"	الأحزمة	"	,
"	bench	"	,	"	مقعد	"	,
"	beneficial	"	,	"	نافع	"	,
"	benefit	"	,	"	المنفعة	"	,
"	benefits	"	,	"	فوائد	"	,
"	best	"	,	"	الأفضل	"	,
"	better	"	,	"	أفضل	"	,
"	between	"	,	"	بين	"	,
"	beyond	"	,	"	وراء  فى الجانب الاخر	"	,
"	bicycle	"	,	"	دراجة	"	,
"	big	"	,	"	كبير	"	,
"	bike	"	,	"	دراجة هوائية	"	,
"	billion	"	,	"	مليار	"	,
"	binoculars	"	,	"	المناظير	"	,
"	biological	"	,	"	بيولوجي	"	,
"	birds	"	,	"	الطيور	"	,
"	bit	"	,	"	قليلا	"	,
"	bite	"	,	"	يعض	"	,
"	black	"	,	"	أسود	"	,
"	blank	"	,	"	فارغ	"	,
"	blend	"	,	"	يمزج	"	,
"	blessed	"	,	"	مبارك	"	,
"	blew	"	,	"	ينفخ	"	,
"	block	"	,	"	منع	"	,
"	blocking	"	,	"	حجب	"	,
"	blood	"	,	"	دم	"	,
"	blow	"	,	"	نفخ	"	,
"	blown	"	,	"	منفوخ	"	,
"	blue	"	,	"	أزرق	"	,
"	board	"	,	"	مجلس	"	,
"	boarding	"	,	"	الصعود	"	,
"	boat	"	,	"	قارب	"	,
"	bodies	"	,	"	جثث	"	,
"	body	"	,	"	الجسم	"	,
"	bold	"	,	"	بالخط العريض	"	,
"	bond	"	,	"	سند مالي	"	,
"	bones	"	,	"	العظام	"	,
"	book	"	,	"	كتاب	"	,
"	books	"	,	"	الكتب	"	,
"	boring	"	,	"	ممل	"	,
"	born	"	,	"	ولد	"	,
"	borrow	"	,	"	تقترض	"	,
"	borrowed	"	,	"	استعارت	"	,
"	borrowers	"	,	"	المقترضين	"	,
"	borrowing	"	,	"	الاقتراض	"	,
"	boss	"	,	"	رئيس	"	,
"	both	"	,	"	على حد سواء	"	,
"	bother	"	,	"	يزعج	"	,
"	bottles	"	,	"	زجاجات	"	,
"	bottom	"	,	"	قاع	"	,
"	bought	"	,	"	مشترى	"	,
"	bowl	"	,	"	صحن	"	,
"	box	"	,	"	علبة	"	,
"	boxes	"	,	"	مربعات	"	,
"	boxing	"	,	"	ملاكمة	"	,
"	boy	"	,	"	صبي	"	,
"	boys	"	,	"	أولاد	"	,
"	bracelet	"	,	"	إسورة	"	,
"	brake	"	,	"	فرامل	"	,
"	branches	"	,	"	الفروع	"	,
"	brand	"	,	"	ماركة	"	,
"	bread	"	,	"	خبز	"	,
"	break	"	,	"	فترة راحة	"	,
"	breakfast	"	,	"	وجبة افطار	"	,
"	bring	"	,	"	يجلب	"	,
"	British	"	,	"	بريطاني	"	,
"	broadband	"	,	"	موجة عريضة	"	,
"	broadcast	"	,	"	إذاعة	"	,
"	broken	"	,	"	مكسور	"	,
"	brother	"	,	"	شقيق	"	,
"	brown	"	,	"	بني	"	,
"	brush	"	,	"	فرشاة	"	,
"	build	"	,	"	يبني	"	,
"	building	"	,	"	بناء	"	,
"	builds	"	,	"	يبني	"	,
"	built	"	,	"	مبني	"	,
"	Bulgaria	"	,	"	بلغاريا	"	,
"	bump	"	,	"	صدم	"	,
"	bumper	"	,	"	ممتص الصدمات	"	,
"	bus	"	,	"	أوتوبيس	"	,
"	buses	"	,	"	الباصات	"	,
"	business	"	,	"	عمل	"	,
"	businesses	"	,	"	الأعمال	"	,
"	businessman	"	,	"	رجل اعمال	"	,
"	businessmen	"	,	"	رجال أعمال	"	,
"	busy	"	,	"	مشغول	"	,
"	but	"	,	"	لكن	"	,
"	buy	"	,	"	يشترى	"	,
"	buying	"	,	"	شراء	"	,
"	buy	"	,	"	تشتري	"	,
"	by	"	,	"	بواسطة	"	,



];

var WordQ = Words[NumA-1];
var WordA = Words[NumA];

var WordQ1 = Words[NumA1-1];
var WordA1 = Words[NumA1];

var WordQ2 = Words[NumA2-1];
var WordA2 = Words[NumA2];

var WordQ3 = Words[NumA3-1];
var WordA3 = Words[NumA3];

var WordQ4 = Words[NumA4-1];
var WordA4 = Words[NumA4];


player.SetVar("NumA",NumA);
player.SetVar("NumA1",NumA1);
player.SetVar("NumA2",NumA2);
player.SetVar("NumA3",NumA3);
player.SetVar("NumA4",NumA4);

player.SetVar("WordQ",WordQ);
player.SetVar("WordQ1",WordQ1);
player.SetVar("WordQ2",WordQ2);
player.SetVar("WordQ3",WordQ3);
player.SetVar("WordQ4",WordQ4);


player.SetVar("WordA",WordA);
player.SetVar("WordA1",WordA1);
player.SetVar("WordA2",WordA2);
player.SetVar("WordA3",WordA3);
player.SetVar("WordA4",WordA4);

}

function Script7()
{
  // Odd = Engligh question, next Even = Arabic answer;
// random is even for arabic answer;

var player = GetPlayer();

var Words = 141; 

var NumA= Math.floor(Math.random()*Words+1)*2;
var NumA1= Math.floor(Math.random()*Words+1)*2;
var NumA2= Math.floor(Math.random()*Words+1)*2;
var NumA3= Math.floor(Math.random()*Words+1)*2;
var NumA4= Math.floor(Math.random()*Words+1)*2;







if ( (NumA1 == NumA)  || (NumA1 ==  NumA2) || (NumA1 ==  NumA3) || (NumA1 ==  NumA4) ) {
  var NumA1= 0
}

if ( (NumA2 == NumA)  || (NumA2 ==  NumA1) || (NumA2 ==  NumA3) || (NumA2 ==  NumA4) ) {
  var NumA2=  0
}

if ( (NumA3 == NumA)  || (NumA3 ==  NumA1) || (NumA3 ==  NumA2) || (NumA3 ==  NumA4) ) {
  var NumA3= 0
}


if ( (NumA4 == NumA)  || (NumA4 ==  NumA1) || (NumA4 ==  NumA2) || (NumA4 ==  NumA3) ) {
  var NumA4= 0
}


var Words= [
"Free Answer for You",

"	baby	"	,	"	طفل	"	,
"	back	"	,	"	عودة	"	,
"	backpack	"	,	"	حقيبة ظهر	"	,
"	backward	"	,	"	الى الوراء	"	,
"	bad	"	,	"	سيئ	"	,
"	badly	"	,	"	بشكل سيئ	"	,
"	bags	"	,	"	أكياس	"	,
"	bake	"	,	"	خبز	"	,
"	baker	"	,	"	خباز	"	,
"	balcony	"	,	"	شرفة	"	,
"	ball	"	,	"	كرة	"	,
"	Bangladesh	"	,	"	بنغلاديش	"	,
"	bank	"	,	"	مصرف	"	,
"	banker	"	,	"	مصرفي	"	,
"	banks	"	,	"	البنوك	"	,
"	bargain	"	,	"	يساوم	"	,
"	bargains	"	,	"	صفقات	"	,
"	barriers	"	,	"	حواجز	"	,
"	base	"	,	"	يتمركز	"	,
"	based	"	,	"	قائم على	"	,
"	basic	"	,	"	أساسي	"	,
"	basketball	"	,	"	كرة سلة	"	,
"	bathroom	"	,	"	حمام	"	,
"	beach	"	,	"	شاطئ بحر	"	,
"	bear	"	,	"	يتحمل	"	,
"	beautiful	"	,	"	جميل	"	,
"	beauty	"	,	"	جمال	"	,
"	became	"	,	"	أصبح	"	,
"	because	"	,	"	لأن	"	,
"	become	"	,	"	يصبح	"	,
"	becoming	"	,	"	تصبح	"	,
"	bed	"	,	"	السرير	"	,
"	bedroom	"	,	"	غرفة نوم	"	,
"	before	"	,	"	قبل	"	,
"	began	"	,	"	بدأت	"	,
"	beginning	"	,	"	بداية	"	,
"	begin	"	,	"	يبدأ	"	,
"	behave	"	,	"	يتصرف	"	,
"	behavior	"	,	"	سلوك	"	,
"	behind	"	,	"	وراء	"	,
"	beige	"	,	"	اللون البيج	"	,
"	Beijing	"	,	"	بكين	"	,
"	being	"	,	"	يجرى	"	,
"	beings	"	,	"	كائنات	"	,
"	beliefs	"	,	"	المعتقدات	"	,
"	believe	"	,	"	يصدق	"	,
"	belong	"	,	"	ينتمي ل	"	,
"	beloved	"	,	"	محبوب	"	,
"	below	"	,	"	أقل	"	,
"	belt	"	,	"	حزام	"	,
"	belts	"	,	"	الأحزمة	"	,
"	bench	"	,	"	مقعد	"	,
"	beneficial	"	,	"	نافع	"	,
"	benefit	"	,	"	المنفعة	"	,
"	benefits	"	,	"	فوائد	"	,
"	best	"	,	"	الأفضل	"	,
"	better	"	,	"	أفضل	"	,
"	between	"	,	"	بين	"	,
"	beyond	"	,	"	وراء  فى الجانب الاخر	"	,
"	bicycle	"	,	"	دراجة	"	,
"	big	"	,	"	كبير	"	,
"	bike	"	,	"	دراجة هوائية	"	,
"	billion	"	,	"	مليار	"	,
"	binoculars	"	,	"	المناظير	"	,
"	biological	"	,	"	بيولوجي	"	,
"	birds	"	,	"	الطيور	"	,
"	bit	"	,	"	قليلا	"	,
"	bite	"	,	"	يعض	"	,
"	black	"	,	"	أسود	"	,
"	blank	"	,	"	فارغ	"	,
"	blend	"	,	"	يمزج	"	,
"	blessed	"	,	"	مبارك	"	,
"	blew	"	,	"	ينفخ	"	,
"	block	"	,	"	منع	"	,
"	blocking	"	,	"	حجب	"	,
"	blood	"	,	"	دم	"	,
"	blow	"	,	"	نفخ	"	,
"	blown	"	,	"	منفوخ	"	,
"	blue	"	,	"	أزرق	"	,
"	board	"	,	"	مجلس	"	,
"	boarding	"	,	"	الصعود	"	,
"	boat	"	,	"	قارب	"	,
"	bodies	"	,	"	جثث	"	,
"	body	"	,	"	الجسم	"	,
"	bold	"	,	"	بالخط العريض	"	,
"	bond	"	,	"	سند مالي	"	,
"	bones	"	,	"	العظام	"	,
"	book	"	,	"	كتاب	"	,
"	books	"	,	"	الكتب	"	,
"	boring	"	,	"	ممل	"	,
"	born	"	,	"	ولد	"	,
"	borrow	"	,	"	تقترض	"	,
"	borrowed	"	,	"	استعارت	"	,
"	borrowers	"	,	"	المقترضين	"	,
"	borrowing	"	,	"	الاقتراض	"	,
"	boss	"	,	"	رئيس	"	,
"	both	"	,	"	على حد سواء	"	,
"	bother	"	,	"	يزعج	"	,
"	bottles	"	,	"	زجاجات	"	,
"	bottom	"	,	"	قاع	"	,
"	bought	"	,	"	مشترى	"	,
"	bowl	"	,	"	صحن	"	,
"	box	"	,	"	علبة	"	,
"	boxes	"	,	"	مربعات	"	,
"	boxing	"	,	"	ملاكمة	"	,
"	boy	"	,	"	صبي	"	,
"	boys	"	,	"	أولاد	"	,
"	bracelet	"	,	"	إسورة	"	,
"	brake	"	,	"	فرامل	"	,
"	branches	"	,	"	الفروع	"	,
"	brand	"	,	"	ماركة	"	,
"	bread	"	,	"	خبز	"	,
"	break	"	,	"	فترة راحة	"	,
"	breakfast	"	,	"	وجبة افطار	"	,
"	bring	"	,	"	يجلب	"	,
"	British	"	,	"	بريطاني	"	,
"	broadband	"	,	"	موجة عريضة	"	,
"	broadcast	"	,	"	إذاعة	"	,
"	broken	"	,	"	مكسور	"	,
"	brother	"	,	"	شقيق	"	,
"	brown	"	,	"	بني	"	,
"	brush	"	,	"	فرشاة	"	,
"	build	"	,	"	يبني	"	,
"	building	"	,	"	بناء	"	,
"	builds	"	,	"	يبني	"	,
"	built	"	,	"	مبني	"	,
"	Bulgaria	"	,	"	بلغاريا	"	,
"	bump	"	,	"	صدم	"	,
"	bumper	"	,	"	ممتص الصدمات	"	,
"	bus	"	,	"	أوتوبيس	"	,
"	buses	"	,	"	الباصات	"	,
"	business	"	,	"	عمل	"	,
"	businesses	"	,	"	الأعمال	"	,
"	businessman	"	,	"	رجل اعمال	"	,
"	businessmen	"	,	"	رجال أعمال	"	,
"	busy	"	,	"	مشغول	"	,
"	but	"	,	"	لكن	"	,
"	buy	"	,	"	يشترى	"	,
"	buying	"	,	"	شراء	"	,
"	buy	"	,	"	تشتري	"	,
"	by	"	,	"	بواسطة	"	,



];

var WordQ = Words[NumA-1];
var WordA = Words[NumA];

var WordQ1 = Words[NumA1-1];
var WordA1 = Words[NumA1];

var WordQ2 = Words[NumA2-1];
var WordA2 = Words[NumA2];

var WordQ3 = Words[NumA3-1];
var WordA3 = Words[NumA3];

var WordQ4 = Words[NumA4-1];
var WordA4 = Words[NumA4];


player.SetVar("NumA",NumA);
player.SetVar("NumA1",NumA1);
player.SetVar("NumA2",NumA2);
player.SetVar("NumA3",NumA3);
player.SetVar("NumA4",NumA4);

player.SetVar("WordQ",WordQ);
player.SetVar("WordQ1",WordQ1);
player.SetVar("WordQ2",WordQ2);
player.SetVar("WordQ3",WordQ3);
player.SetVar("WordQ4",WordQ4);


player.SetVar("WordA",WordA);
player.SetVar("WordA1",WordA1);
player.SetVar("WordA2",WordA2);
player.SetVar("WordA3",WordA3);
player.SetVar("WordA4",WordA4);

}

function Script8()
{
  // Odd = Engligh question, next Even = Arabic answer;
// random is even for arabic answer;

var player = GetPlayer();

var Words = 141; 

var NumA= Math.floor(Math.random()*Words+1)*2;
var NumA1= Math.floor(Math.random()*Words+1)*2;
var NumA2= Math.floor(Math.random()*Words+1)*2;
var NumA3= Math.floor(Math.random()*Words+1)*2;
var NumA4= Math.floor(Math.random()*Words+1)*2;







if ( (NumA1 == NumA)  || (NumA1 ==  NumA2) || (NumA1 ==  NumA3) || (NumA1 ==  NumA4) ) {
  var NumA1= 0
}

if ( (NumA2 == NumA)  || (NumA2 ==  NumA1) || (NumA2 ==  NumA3) || (NumA2 ==  NumA4) ) {
  var NumA2=  0
}

if ( (NumA3 == NumA)  || (NumA3 ==  NumA1) || (NumA3 ==  NumA2) || (NumA3 ==  NumA4) ) {
  var NumA3= 0
}


if ( (NumA4 == NumA)  || (NumA4 ==  NumA1) || (NumA4 ==  NumA2) || (NumA4 ==  NumA3) ) {
  var NumA4= 0
}


var Words= [
"Free Answer for You",

"	baby	"	,	"	طفل	"	,
"	back	"	,	"	عودة	"	,
"	backpack	"	,	"	حقيبة ظهر	"	,
"	backward	"	,	"	الى الوراء	"	,
"	bad	"	,	"	سيئ	"	,
"	badly	"	,	"	بشكل سيئ	"	,
"	bags	"	,	"	أكياس	"	,
"	bake	"	,	"	خبز	"	,
"	baker	"	,	"	خباز	"	,
"	balcony	"	,	"	شرفة	"	,
"	ball	"	,	"	كرة	"	,
"	Bangladesh	"	,	"	بنغلاديش	"	,
"	bank	"	,	"	مصرف	"	,
"	banker	"	,	"	مصرفي	"	,
"	banks	"	,	"	البنوك	"	,
"	bargain	"	,	"	يساوم	"	,
"	bargains	"	,	"	صفقات	"	,
"	barriers	"	,	"	حواجز	"	,
"	base	"	,	"	يتمركز	"	,
"	based	"	,	"	قائم على	"	,
"	basic	"	,	"	أساسي	"	,
"	basketball	"	,	"	كرة سلة	"	,
"	bathroom	"	,	"	حمام	"	,
"	beach	"	,	"	شاطئ بحر	"	,
"	bear	"	,	"	يتحمل	"	,
"	beautiful	"	,	"	جميل	"	,
"	beauty	"	,	"	جمال	"	,
"	became	"	,	"	أصبح	"	,
"	because	"	,	"	لأن	"	,
"	become	"	,	"	يصبح	"	,
"	becoming	"	,	"	تصبح	"	,
"	bed	"	,	"	السرير	"	,
"	bedroom	"	,	"	غرفة نوم	"	,
"	before	"	,	"	قبل	"	,
"	began	"	,	"	بدأت	"	,
"	beginning	"	,	"	بداية	"	,
"	begin	"	,	"	يبدأ	"	,
"	behave	"	,	"	يتصرف	"	,
"	behavior	"	,	"	سلوك	"	,
"	behind	"	,	"	وراء	"	,
"	beige	"	,	"	اللون البيج	"	,
"	Beijing	"	,	"	بكين	"	,
"	being	"	,	"	يجرى	"	,
"	beings	"	,	"	كائنات	"	,
"	beliefs	"	,	"	المعتقدات	"	,
"	believe	"	,	"	يصدق	"	,
"	belong	"	,	"	ينتمي ل	"	,
"	beloved	"	,	"	محبوب	"	,
"	below	"	,	"	أقل	"	,
"	belt	"	,	"	حزام	"	,
"	belts	"	,	"	الأحزمة	"	,
"	bench	"	,	"	مقعد	"	,
"	beneficial	"	,	"	نافع	"	,
"	benefit	"	,	"	المنفعة	"	,
"	benefits	"	,	"	فوائد	"	,
"	best	"	,	"	الأفضل	"	,
"	better	"	,	"	أفضل	"	,
"	between	"	,	"	بين	"	,
"	beyond	"	,	"	وراء  فى الجانب الاخر	"	,
"	bicycle	"	,	"	دراجة	"	,
"	big	"	,	"	كبير	"	,
"	bike	"	,	"	دراجة هوائية	"	,
"	billion	"	,	"	مليار	"	,
"	binoculars	"	,	"	المناظير	"	,
"	biological	"	,	"	بيولوجي	"	,
"	birds	"	,	"	الطيور	"	,
"	bit	"	,	"	قليلا	"	,
"	bite	"	,	"	يعض	"	,
"	black	"	,	"	أسود	"	,
"	blank	"	,	"	فارغ	"	,
"	blend	"	,	"	يمزج	"	,
"	blessed	"	,	"	مبارك	"	,
"	blew	"	,	"	ينفخ	"	,
"	block	"	,	"	منع	"	,
"	blocking	"	,	"	حجب	"	,
"	blood	"	,	"	دم	"	,
"	blow	"	,	"	نفخ	"	,
"	blown	"	,	"	منفوخ	"	,
"	blue	"	,	"	أزرق	"	,
"	board	"	,	"	مجلس	"	,
"	boarding	"	,	"	الصعود	"	,
"	boat	"	,	"	قارب	"	,
"	bodies	"	,	"	جثث	"	,
"	body	"	,	"	الجسم	"	,
"	bold	"	,	"	بالخط العريض	"	,
"	bond	"	,	"	سند مالي	"	,
"	bones	"	,	"	العظام	"	,
"	book	"	,	"	كتاب	"	,
"	books	"	,	"	الكتب	"	,
"	boring	"	,	"	ممل	"	,
"	born	"	,	"	ولد	"	,
"	borrow	"	,	"	تقترض	"	,
"	borrowed	"	,	"	استعارت	"	,
"	borrowers	"	,	"	المقترضين	"	,
"	borrowing	"	,	"	الاقتراض	"	,
"	boss	"	,	"	رئيس	"	,
"	both	"	,	"	على حد سواء	"	,
"	bother	"	,	"	يزعج	"	,
"	bottles	"	,	"	زجاجات	"	,
"	bottom	"	,	"	قاع	"	,
"	bought	"	,	"	مشترى	"	,
"	bowl	"	,	"	صحن	"	,
"	box	"	,	"	علبة	"	,
"	boxes	"	,	"	مربعات	"	,
"	boxing	"	,	"	ملاكمة	"	,
"	boy	"	,	"	صبي	"	,
"	boys	"	,	"	أولاد	"	,
"	bracelet	"	,	"	إسورة	"	,
"	brake	"	,	"	فرامل	"	,
"	branches	"	,	"	الفروع	"	,
"	brand	"	,	"	ماركة	"	,
"	bread	"	,	"	خبز	"	,
"	break	"	,	"	فترة راحة	"	,
"	breakfast	"	,	"	وجبة افطار	"	,
"	bring	"	,	"	يجلب	"	,
"	British	"	,	"	بريطاني	"	,
"	broadband	"	,	"	موجة عريضة	"	,
"	broadcast	"	,	"	إذاعة	"	,
"	broken	"	,	"	مكسور	"	,
"	brother	"	,	"	شقيق	"	,
"	brown	"	,	"	بني	"	,
"	brush	"	,	"	فرشاة	"	,
"	build	"	,	"	يبني	"	,
"	building	"	,	"	بناء	"	,
"	builds	"	,	"	يبني	"	,
"	built	"	,	"	مبني	"	,
"	Bulgaria	"	,	"	بلغاريا	"	,
"	bump	"	,	"	صدم	"	,
"	bumper	"	,	"	ممتص الصدمات	"	,
"	bus	"	,	"	أوتوبيس	"	,
"	buses	"	,	"	الباصات	"	,
"	business	"	,	"	عمل	"	,
"	businesses	"	,	"	الأعمال	"	,
"	businessman	"	,	"	رجل اعمال	"	,
"	businessmen	"	,	"	رجال أعمال	"	,
"	busy	"	,	"	مشغول	"	,
"	but	"	,	"	لكن	"	,
"	buy	"	,	"	يشترى	"	,
"	buying	"	,	"	شراء	"	,
"	buy	"	,	"	تشتري	"	,
"	by	"	,	"	بواسطة	"	,



];

var WordQ = Words[NumA-1];
var WordA = Words[NumA];

var WordQ1 = Words[NumA1-1];
var WordA1 = Words[NumA1];

var WordQ2 = Words[NumA2-1];
var WordA2 = Words[NumA2];

var WordQ3 = Words[NumA3-1];
var WordA3 = Words[NumA3];

var WordQ4 = Words[NumA4-1];
var WordA4 = Words[NumA4];


player.SetVar("NumA",NumA);
player.SetVar("NumA1",NumA1);
player.SetVar("NumA2",NumA2);
player.SetVar("NumA3",NumA3);
player.SetVar("NumA4",NumA4);

player.SetVar("WordQ",WordQ);
player.SetVar("WordQ1",WordQ1);
player.SetVar("WordQ2",WordQ2);
player.SetVar("WordQ3",WordQ3);
player.SetVar("WordQ4",WordQ4);


player.SetVar("WordA",WordA);
player.SetVar("WordA1",WordA1);
player.SetVar("WordA2",WordA2);
player.SetVar("WordA3",WordA3);
player.SetVar("WordA4",WordA4);

}

function Script9()
{
  // Odd = Engligh question, next Even = Arabic answer;
// random is even for arabic answer;

var player = GetPlayer();

var Words = 141; 

var NumA= Math.floor(Math.random()*Words+1)*2;
var NumA1= Math.floor(Math.random()*Words+1)*2;
var NumA2= Math.floor(Math.random()*Words+1)*2;
var NumA3= Math.floor(Math.random()*Words+1)*2;
var NumA4= Math.floor(Math.random()*Words+1)*2;







if ( (NumA1 == NumA)  || (NumA1 ==  NumA2) || (NumA1 ==  NumA3) || (NumA1 ==  NumA4) ) {
  var NumA1= 0
}

if ( (NumA2 == NumA)  || (NumA2 ==  NumA1) || (NumA2 ==  NumA3) || (NumA2 ==  NumA4) ) {
  var NumA2=  0
}

if ( (NumA3 == NumA)  || (NumA3 ==  NumA1) || (NumA3 ==  NumA2) || (NumA3 ==  NumA4) ) {
  var NumA3= 0
}


if ( (NumA4 == NumA)  || (NumA4 ==  NumA1) || (NumA4 ==  NumA2) || (NumA4 ==  NumA3) ) {
  var NumA4= 0
}


var Words= [
"Free Answer for You",

"	baby	"	,	"	طفل	"	,
"	back	"	,	"	عودة	"	,
"	backpack	"	,	"	حقيبة ظهر	"	,
"	backward	"	,	"	الى الوراء	"	,
"	bad	"	,	"	سيئ	"	,
"	badly	"	,	"	بشكل سيئ	"	,
"	bags	"	,	"	أكياس	"	,
"	bake	"	,	"	خبز	"	,
"	baker	"	,	"	خباز	"	,
"	balcony	"	,	"	شرفة	"	,
"	ball	"	,	"	كرة	"	,
"	Bangladesh	"	,	"	بنغلاديش	"	,
"	bank	"	,	"	مصرف	"	,
"	banker	"	,	"	مصرفي	"	,
"	banks	"	,	"	البنوك	"	,
"	bargain	"	,	"	يساوم	"	,
"	bargains	"	,	"	صفقات	"	,
"	barriers	"	,	"	حواجز	"	,
"	base	"	,	"	يتمركز	"	,
"	based	"	,	"	قائم على	"	,
"	basic	"	,	"	أساسي	"	,
"	basketball	"	,	"	كرة سلة	"	,
"	bathroom	"	,	"	حمام	"	,
"	beach	"	,	"	شاطئ بحر	"	,
"	bear	"	,	"	يتحمل	"	,
"	beautiful	"	,	"	جميل	"	,
"	beauty	"	,	"	جمال	"	,
"	became	"	,	"	أصبح	"	,
"	because	"	,	"	لأن	"	,
"	become	"	,	"	يصبح	"	,
"	becoming	"	,	"	تصبح	"	,
"	bed	"	,	"	السرير	"	,
"	bedroom	"	,	"	غرفة نوم	"	,
"	before	"	,	"	قبل	"	,
"	began	"	,	"	بدأت	"	,
"	beginning	"	,	"	بداية	"	,
"	begin	"	,	"	يبدأ	"	,
"	behave	"	,	"	يتصرف	"	,
"	behavior	"	,	"	سلوك	"	,
"	behind	"	,	"	وراء	"	,
"	beige	"	,	"	اللون البيج	"	,
"	Beijing	"	,	"	بكين	"	,
"	being	"	,	"	يجرى	"	,
"	beings	"	,	"	كائنات	"	,
"	beliefs	"	,	"	المعتقدات	"	,
"	believe	"	,	"	يصدق	"	,
"	belong	"	,	"	ينتمي ل	"	,
"	beloved	"	,	"	محبوب	"	,
"	below	"	,	"	أقل	"	,
"	belt	"	,	"	حزام	"	,
"	belts	"	,	"	الأحزمة	"	,
"	bench	"	,	"	مقعد	"	,
"	beneficial	"	,	"	نافع	"	,
"	benefit	"	,	"	المنفعة	"	,
"	benefits	"	,	"	فوائد	"	,
"	best	"	,	"	الأفضل	"	,
"	better	"	,	"	أفضل	"	,
"	between	"	,	"	بين	"	,
"	beyond	"	,	"	وراء  فى الجانب الاخر	"	,
"	bicycle	"	,	"	دراجة	"	,
"	big	"	,	"	كبير	"	,
"	bike	"	,	"	دراجة هوائية	"	,
"	billion	"	,	"	مليار	"	,
"	binoculars	"	,	"	المناظير	"	,
"	biological	"	,	"	بيولوجي	"	,
"	birds	"	,	"	الطيور	"	,
"	bit	"	,	"	قليلا	"	,
"	bite	"	,	"	يعض	"	,
"	black	"	,	"	أسود	"	,
"	blank	"	,	"	فارغ	"	,
"	blend	"	,	"	يمزج	"	,
"	blessed	"	,	"	مبارك	"	,
"	blew	"	,	"	ينفخ	"	,
"	block	"	,	"	منع	"	,
"	blocking	"	,	"	حجب	"	,
"	blood	"	,	"	دم	"	,
"	blow	"	,	"	نفخ	"	,
"	blown	"	,	"	منفوخ	"	,
"	blue	"	,	"	أزرق	"	,
"	board	"	,	"	مجلس	"	,
"	boarding	"	,	"	الصعود	"	,
"	boat	"	,	"	قارب	"	,
"	bodies	"	,	"	جثث	"	,
"	body	"	,	"	الجسم	"	,
"	bold	"	,	"	بالخط العريض	"	,
"	bond	"	,	"	سند مالي	"	,
"	bones	"	,	"	العظام	"	,
"	book	"	,	"	كتاب	"	,
"	books	"	,	"	الكتب	"	,
"	boring	"	,	"	ممل	"	,
"	born	"	,	"	ولد	"	,
"	borrow	"	,	"	تقترض	"	,
"	borrowed	"	,	"	استعارت	"	,
"	borrowers	"	,	"	المقترضين	"	,
"	borrowing	"	,	"	الاقتراض	"	,
"	boss	"	,	"	رئيس	"	,
"	both	"	,	"	على حد سواء	"	,
"	bother	"	,	"	يزعج	"	,
"	bottles	"	,	"	زجاجات	"	,
"	bottom	"	,	"	قاع	"	,
"	bought	"	,	"	مشترى	"	,
"	bowl	"	,	"	صحن	"	,
"	box	"	,	"	علبة	"	,
"	boxes	"	,	"	مربعات	"	,
"	boxing	"	,	"	ملاكمة	"	,
"	boy	"	,	"	صبي	"	,
"	boys	"	,	"	أولاد	"	,
"	bracelet	"	,	"	إسورة	"	,
"	brake	"	,	"	فرامل	"	,
"	branches	"	,	"	الفروع	"	,
"	brand	"	,	"	ماركة	"	,
"	bread	"	,	"	خبز	"	,
"	break	"	,	"	فترة راحة	"	,
"	breakfast	"	,	"	وجبة افطار	"	,
"	bring	"	,	"	يجلب	"	,
"	British	"	,	"	بريطاني	"	,
"	broadband	"	,	"	موجة عريضة	"	,
"	broadcast	"	,	"	إذاعة	"	,
"	broken	"	,	"	مكسور	"	,
"	brother	"	,	"	شقيق	"	,
"	brown	"	,	"	بني	"	,
"	brush	"	,	"	فرشاة	"	,
"	build	"	,	"	يبني	"	,
"	building	"	,	"	بناء	"	,
"	builds	"	,	"	يبني	"	,
"	built	"	,	"	مبني	"	,
"	Bulgaria	"	,	"	بلغاريا	"	,
"	bump	"	,	"	صدم	"	,
"	bumper	"	,	"	ممتص الصدمات	"	,
"	bus	"	,	"	أوتوبيس	"	,
"	buses	"	,	"	الباصات	"	,
"	business	"	,	"	عمل	"	,
"	businesses	"	,	"	الأعمال	"	,
"	businessman	"	,	"	رجل اعمال	"	,
"	businessmen	"	,	"	رجال أعمال	"	,
"	busy	"	,	"	مشغول	"	,
"	but	"	,	"	لكن	"	,
"	buy	"	,	"	يشترى	"	,
"	buying	"	,	"	شراء	"	,
"	buy	"	,	"	تشتري	"	,
"	by	"	,	"	بواسطة	"	,



];

var WordQ = Words[NumA-1];
var WordA = Words[NumA];

var WordQ1 = Words[NumA1-1];
var WordA1 = Words[NumA1];

var WordQ2 = Words[NumA2-1];
var WordA2 = Words[NumA2];

var WordQ3 = Words[NumA3-1];
var WordA3 = Words[NumA3];

var WordQ4 = Words[NumA4-1];
var WordA4 = Words[NumA4];


player.SetVar("NumA",NumA);
player.SetVar("NumA1",NumA1);
player.SetVar("NumA2",NumA2);
player.SetVar("NumA3",NumA3);
player.SetVar("NumA4",NumA4);

player.SetVar("WordQ",WordQ);
player.SetVar("WordQ1",WordQ1);
player.SetVar("WordQ2",WordQ2);
player.SetVar("WordQ3",WordQ3);
player.SetVar("WordQ4",WordQ4);


player.SetVar("WordA",WordA);
player.SetVar("WordA1",WordA1);
player.SetVar("WordA2",WordA2);
player.SetVar("WordA3",WordA3);
player.SetVar("WordA4",WordA4);

}

function Script10()
{
  // Odd = Engligh question, next Even = Arabic answer;
// random is even for arabic answer;

var player = GetPlayer();

var Words = 141; 

var NumA= Math.floor(Math.random()*Words+1)*2;
var NumA1= Math.floor(Math.random()*Words+1)*2;
var NumA2= Math.floor(Math.random()*Words+1)*2;
var NumA3= Math.floor(Math.random()*Words+1)*2;
var NumA4= Math.floor(Math.random()*Words+1)*2;







if ( (NumA1 == NumA)  || (NumA1 ==  NumA2) || (NumA1 ==  NumA3) || (NumA1 ==  NumA4) ) {
  var NumA1= 0
}

if ( (NumA2 == NumA)  || (NumA2 ==  NumA1) || (NumA2 ==  NumA3) || (NumA2 ==  NumA4) ) {
  var NumA2=  0
}

if ( (NumA3 == NumA)  || (NumA3 ==  NumA1) || (NumA3 ==  NumA2) || (NumA3 ==  NumA4) ) {
  var NumA3= 0
}


if ( (NumA4 == NumA)  || (NumA4 ==  NumA1) || (NumA4 ==  NumA2) || (NumA4 ==  NumA3) ) {
  var NumA4= 0
}


var Words= [
"Free Answer for You",

"	baby	"	,	"	طفل	"	,
"	back	"	,	"	عودة	"	,
"	backpack	"	,	"	حقيبة ظهر	"	,
"	backward	"	,	"	الى الوراء	"	,
"	bad	"	,	"	سيئ	"	,
"	badly	"	,	"	بشكل سيئ	"	,
"	bags	"	,	"	أكياس	"	,
"	bake	"	,	"	خبز	"	,
"	baker	"	,	"	خباز	"	,
"	balcony	"	,	"	شرفة	"	,
"	ball	"	,	"	كرة	"	,
"	Bangladesh	"	,	"	بنغلاديش	"	,
"	bank	"	,	"	مصرف	"	,
"	banker	"	,	"	مصرفي	"	,
"	banks	"	,	"	البنوك	"	,
"	bargain	"	,	"	يساوم	"	,
"	bargains	"	,	"	صفقات	"	,
"	barriers	"	,	"	حواجز	"	,
"	base	"	,	"	يتمركز	"	,
"	based	"	,	"	قائم على	"	,
"	basic	"	,	"	أساسي	"	,
"	basketball	"	,	"	كرة سلة	"	,
"	bathroom	"	,	"	حمام	"	,
"	beach	"	,	"	شاطئ بحر	"	,
"	bear	"	,	"	يتحمل	"	,
"	beautiful	"	,	"	جميل	"	,
"	beauty	"	,	"	جمال	"	,
"	became	"	,	"	أصبح	"	,
"	because	"	,	"	لأن	"	,
"	become	"	,	"	يصبح	"	,
"	becoming	"	,	"	تصبح	"	,
"	bed	"	,	"	السرير	"	,
"	bedroom	"	,	"	غرفة نوم	"	,
"	before	"	,	"	قبل	"	,
"	began	"	,	"	بدأت	"	,
"	beginning	"	,	"	بداية	"	,
"	begin	"	,	"	يبدأ	"	,
"	behave	"	,	"	يتصرف	"	,
"	behavior	"	,	"	سلوك	"	,
"	behind	"	,	"	وراء	"	,
"	beige	"	,	"	اللون البيج	"	,
"	Beijing	"	,	"	بكين	"	,
"	being	"	,	"	يجرى	"	,
"	beings	"	,	"	كائنات	"	,
"	beliefs	"	,	"	المعتقدات	"	,
"	believe	"	,	"	يصدق	"	,
"	belong	"	,	"	ينتمي ل	"	,
"	beloved	"	,	"	محبوب	"	,
"	below	"	,	"	أقل	"	,
"	belt	"	,	"	حزام	"	,
"	belts	"	,	"	الأحزمة	"	,
"	bench	"	,	"	مقعد	"	,
"	beneficial	"	,	"	نافع	"	,
"	benefit	"	,	"	المنفعة	"	,
"	benefits	"	,	"	فوائد	"	,
"	best	"	,	"	الأفضل	"	,
"	better	"	,	"	أفضل	"	,
"	between	"	,	"	بين	"	,
"	beyond	"	,	"	وراء  فى الجانب الاخر	"	,
"	bicycle	"	,	"	دراجة	"	,
"	big	"	,	"	كبير	"	,
"	bike	"	,	"	دراجة هوائية	"	,
"	billion	"	,	"	مليار	"	,
"	binoculars	"	,	"	المناظير	"	,
"	biological	"	,	"	بيولوجي	"	,
"	birds	"	,	"	الطيور	"	,
"	bit	"	,	"	قليلا	"	,
"	bite	"	,	"	يعض	"	,
"	black	"	,	"	أسود	"	,
"	blank	"	,	"	فارغ	"	,
"	blend	"	,	"	يمزج	"	,
"	blessed	"	,	"	مبارك	"	,
"	blew	"	,	"	ينفخ	"	,
"	block	"	,	"	منع	"	,
"	blocking	"	,	"	حجب	"	,
"	blood	"	,	"	دم	"	,
"	blow	"	,	"	نفخ	"	,
"	blown	"	,	"	منفوخ	"	,
"	blue	"	,	"	أزرق	"	,
"	board	"	,	"	مجلس	"	,
"	boarding	"	,	"	الصعود	"	,
"	boat	"	,	"	قارب	"	,
"	bodies	"	,	"	جثث	"	,
"	body	"	,	"	الجسم	"	,
"	bold	"	,	"	بالخط العريض	"	,
"	bond	"	,	"	سند مالي	"	,
"	bones	"	,	"	العظام	"	,
"	book	"	,	"	كتاب	"	,
"	books	"	,	"	الكتب	"	,
"	boring	"	,	"	ممل	"	,
"	born	"	,	"	ولد	"	,
"	borrow	"	,	"	تقترض	"	,
"	borrowed	"	,	"	استعارت	"	,
"	borrowers	"	,	"	المقترضين	"	,
"	borrowing	"	,	"	الاقتراض	"	,
"	boss	"	,	"	رئيس	"	,
"	both	"	,	"	على حد سواء	"	,
"	bother	"	,	"	يزعج	"	,
"	bottles	"	,	"	زجاجات	"	,
"	bottom	"	,	"	قاع	"	,
"	bought	"	,	"	مشترى	"	,
"	bowl	"	,	"	صحن	"	,
"	box	"	,	"	علبة	"	,
"	boxes	"	,	"	مربعات	"	,
"	boxing	"	,	"	ملاكمة	"	,
"	boy	"	,	"	صبي	"	,
"	boys	"	,	"	أولاد	"	,
"	bracelet	"	,	"	إسورة	"	,
"	brake	"	,	"	فرامل	"	,
"	branches	"	,	"	الفروع	"	,
"	brand	"	,	"	ماركة	"	,
"	bread	"	,	"	خبز	"	,
"	break	"	,	"	فترة راحة	"	,
"	breakfast	"	,	"	وجبة افطار	"	,
"	bring	"	,	"	يجلب	"	,
"	British	"	,	"	بريطاني	"	,
"	broadband	"	,	"	موجة عريضة	"	,
"	broadcast	"	,	"	إذاعة	"	,
"	broken	"	,	"	مكسور	"	,
"	brother	"	,	"	شقيق	"	,
"	brown	"	,	"	بني	"	,
"	brush	"	,	"	فرشاة	"	,
"	build	"	,	"	يبني	"	,
"	building	"	,	"	بناء	"	,
"	builds	"	,	"	يبني	"	,
"	built	"	,	"	مبني	"	,
"	Bulgaria	"	,	"	بلغاريا	"	,
"	bump	"	,	"	صدم	"	,
"	bumper	"	,	"	ممتص الصدمات	"	,
"	bus	"	,	"	أوتوبيس	"	,
"	buses	"	,	"	الباصات	"	,
"	business	"	,	"	عمل	"	,
"	businesses	"	,	"	الأعمال	"	,
"	businessman	"	,	"	رجل اعمال	"	,
"	businessmen	"	,	"	رجال أعمال	"	,
"	busy	"	,	"	مشغول	"	,
"	but	"	,	"	لكن	"	,
"	buy	"	,	"	يشترى	"	,
"	buying	"	,	"	شراء	"	,
"	buy	"	,	"	تشتري	"	,
"	by	"	,	"	بواسطة	"	,



];

var WordQ = Words[NumA-1];
var WordA = Words[NumA];

var WordQ1 = Words[NumA1-1];
var WordA1 = Words[NumA1];

var WordQ2 = Words[NumA2-1];
var WordA2 = Words[NumA2];

var WordQ3 = Words[NumA3-1];
var WordA3 = Words[NumA3];

var WordQ4 = Words[NumA4-1];
var WordA4 = Words[NumA4];


player.SetVar("NumA",NumA);
player.SetVar("NumA1",NumA1);
player.SetVar("NumA2",NumA2);
player.SetVar("NumA3",NumA3);
player.SetVar("NumA4",NumA4);

player.SetVar("WordQ",WordQ);
player.SetVar("WordQ1",WordQ1);
player.SetVar("WordQ2",WordQ2);
player.SetVar("WordQ3",WordQ3);
player.SetVar("WordQ4",WordQ4);


player.SetVar("WordA",WordA);
player.SetVar("WordA1",WordA1);
player.SetVar("WordA2",WordA2);
player.SetVar("WordA3",WordA3);
player.SetVar("WordA4",WordA4);

}

function Script11()
{
  // Odd = Engligh question, next Even = Arabic answer;
// random is even for arabic answer;

var player = GetPlayer();

var Words = 138; 

var NumA= Math.floor(Math.random()*Words+1)*2;
var NumA1= Math.floor(Math.random()*Words+1)*2;
var NumA2= Math.floor(Math.random()*Words+1)*2;
var NumA3= Math.floor(Math.random()*Words+1)*2;
var NumA4= Math.floor(Math.random()*Words+1)*2;







if ( (NumA1 == NumA)  || (NumA1 ==  NumA2) || (NumA1 ==  NumA3) || (NumA1 ==  NumA4) ) {
  var NumA1= 0
}

if ( (NumA2 == NumA)  || (NumA2 ==  NumA1) || (NumA2 ==  NumA3) || (NumA2 ==  NumA4) ) {
  var NumA2=  0
}

if ( (NumA3 == NumA)  || (NumA3 ==  NumA1) || (NumA3 ==  NumA2) || (NumA3 ==  NumA4) ) {
  var NumA3= 0
}


if ( (NumA4 == NumA)  || (NumA4 ==  NumA1) || (NumA4 ==  NumA2) || (NumA4 ==  NumA3) ) {
  var NumA4= 0
}


var Words= [
"Free Answer for You",

"	daily	"	,	"	يومي	"	,
"	danger	"	,	"	خطر	"	,
"	dangerous	"	,	"	خطير	"	,
"	dangerously	"	,	"	بخطورة	"	,
"	Daniel	"	,	"	دانيال	"	,
"	dark	"	,	"	مظلم	"	,
"	dash	"	,	"	اندفاع	"	,
"	dashboard	"	,	"	لوحة القيادة	"	,
"	database	"	,	"	قاعدة البيانات	"	,
"	daughter	"	,	"	بنت	"	,
"	David	"	,	"	ديفيد	"	,
"	daytime	"	,	"	نهار	"	,
"	deal	"	,	"	صفقة	"	,
"	dear	"	,	"	عزيزي	"	,
"	deaths	"	,	"	حالات الوفاة	"	,
"	decide	"	,	"	يقرر	"	,
"	decided	"	,	"	مقرر	"	,
"	deciding	"	,	"	تقرير	"	,
"	decision	"	,	"	قرار	"	,
"	decisions	"	,	"	قرارات	"	,
"	decrease	"	,	"	تخفيض	"	,
"	defend	"	,	"	يدافع	"	,
"	defined	"	,	"	وصف بالتعريف	"	,
"	definitely	"	,	"	قطعا	"	,
"	definition	"	,	"	تعريف	"	,
"	definitions	"	,	"	تعريفات	"	,
"	degree	"	,	"	الدرجة العلمية	"	,
"	degrees	"	,	"	درجات	"	,
"	delay	"	,	"	تأخير	"	,
"	delicate	"	,	"	حساس	"	,
"	delivered	"	,	"	تم التوصيل	"	,
"	delivers	"	,	"	يسلم	"	,
"	dentist	"	,	"	دكتورالاسنان	"	,
"	department	"	,	"	قسم	"	,
"	departure	"	,	"	اقلاع	"	,
"	depend	"	,	"	تعتمد	"	,
"	depends	"	,	"	يعتمد على	"	,
"	depressed	"	,	"	محبط	"	,
"	Derek	"	,	"	ديريك	"	,
"	describe	"	,	"	يصف	"	,
"	describes	"	,	"	يصف	"	,
"	description	"	,	"	وصف	"	,
"	descriptions	"	,	"	شروحات	"	,
"	descriptive	"	,	"	وصفي	"	,
"	design	"	,	"	تصميم	"	,
"	designed	"	,	"	تم تصميمه	"	,
"	designer	"	,	"	مصمم	"	,
"	designs	"	,	"	تصميمات	"	,
"	despite	"	,	"	بالرغم من	"	,
"	dessert	"	,	"	حلوى	"	,
"	destroyed	"	,	"	مدمر	"	,
"	details	"	,	"	تفاصيل	"	,
"	determine	"	,	"	يحدد	"	,
"	develop	"	,	"	يطور	"	,
"	developed	"	,	"	متقدم	"	,
"	development	"	,	"	تطور	"	,
"	devices	"	,	"	أجهزة	"	,
"	Dhahran	"	,	"	الظهران	"	,
"	diagram	"	,	"	رسم بياني	"	,
"	dictionary	"	,	"	قاموس	"	,
"	die	"	,	"	يموت	"	,
"	died	"	,	"	مات	"	,
"	diet	"	,	"	حمية	"	,
"	difference	"	,	"	فرق	"	,
"	different	"	,	"	مختلف	"	,
"	difficult	"	,	"	صعب	"	,
"	difficulties	"	,	"	صعوبات	"	,
"	difficulty	"	,	"	صعوبة	"	,
"	dilemma	"	,	"	معضلة	"	,
"	dinner	"	,	"	عشاء	"	,
"	direct	"	,	"	مباشرة	"	,
"	direction	"	,	"	اتجاه	"	,
"	directions	"	,	"	اتجاهات	"	,
"	directly	"	,	"	مباشرة	"	,
"	director	"	,	"	مدير	"	,
"	dirty	"	,	"	قذر	"	,
"	disabilities	"	,	"	إعاقة	"	,
"	disadvantages	"	,	"	سلبيات	"	,
"	disagree	"	,	"	يختلف مع	"	,
"	disapprove	"	,	"	لا يوافق	"	,
"	disbelief	"	,	"	كفر	"	,
"	discount	"	,	"	خصم	"	,
"	discouraged	"	,	"	محبط	"	,
"	discuss	"	,	"	يناقش	"	,
"	discussion	"	,	"	مناقشة	"	,
"	disease	"	,	"	مرض	"	,
"	dishes	"	,	"	أطباق	"	,
"	dishonest	"	,	"	غير أمين	"	,
"	dishwasher	"	,	"	غسالة أطباق	"	,
"	dishwashing	"	,	"	غسل الصحون	"	,
"	dislike	"	,	"	لا يعجبنى	"	,
"	display	"	,	"	عرض	"	,
"	distance	"	,	"	مسافه: بعد	"	,
"	distinct	"	,	"	خامد	"	,
"	distract	"	,	"	يشتت	"	,
"	distracted	"	,	"	مشتت الذهن	"	,
"	distributed	"	,	"	وزع	"	,
"	disturb	"	,	"	يزعج	"	,
"	donation	"	,	"	هبة	"	,
"	done	"	,	"	انتهى	"	,
"	doorway	"	,	"	مدخل	"	,
"	double	"	,	"	مزدوج	"	,
"	down	"	,	"	تحت	"	,
"	downhill	"	,	"	انحدار	"	,
"	downstairs	"	,	"	طابق الأسفل	"	,
"	downtown	"	,	"	وسط البلد	"	,
"	drafted	"	,	"	صاغت	"	,
"	drank	"	,	"	شرب	"	,
"	draw	"	,	"	يرسم	"	,
"	drawing	"	,	"	رسم	"	,
"	dream	"	,	"	يحلم	"	,
"	dreams	"	,	"	أحلام	"	,
"	dress	"	,	"	فستان	"	,
"	dressed	"	,	"	ارتدى	"	,
"	dresses	"	,	"	فساتين	"	,
"	drew	"	,	"	رسم	"	,
"	drink	"	,	"	يشرب	"	,
"	drinking	"	,	"	شرب	"	,
"	drinks	"	,	"	مشروبات	"	,
"	drive	"	,	"	يقود	"	,
"	driver	"	,	"	سائق	"	,
"	drives	"	,	"	محركات	"	,
"	drives	"	,	"	محركات الأقراص	"	,
"	driving	"	,	"	قيادة	"	,
"	drop	"	,	"	يسقط	"	,
"	drops	"	,	"	قطرات	"	,
"	drove	"	,	"	قاد	"	,
"	drunk	"	,	"	سكران	"	,
"	dryer	"	,	"	مجفف	"	,
"	Dublin	"	,	"	دبلن	"	,
"	due	"	,	"	بسبب	"	,
"	dump	"	,	"	أحمق	"	,
"	dumps	"	,	"	نفايات	"	,
"	duplicated	"	,	"	مكرر	"	,
"	during	"	,	"	خلال	"	,
"	dust	"	,	"	غبار	"	,
"	duty	"	,	"	واجب	"	,
"	dynamic	"	,	"	متحرك	"	,



];

var WordQ = Words[NumA-1];
var WordA = Words[NumA];

var WordQ1 = Words[NumA1-1];
var WordA1 = Words[NumA1];

var WordQ2 = Words[NumA2-1];
var WordA2 = Words[NumA2];

var WordQ3 = Words[NumA3-1];
var WordA3 = Words[NumA3];

var WordQ4 = Words[NumA4-1];
var WordA4 = Words[NumA4];


player.SetVar("NumA",NumA);
player.SetVar("NumA1",NumA1);
player.SetVar("NumA2",NumA2);
player.SetVar("NumA3",NumA3);
player.SetVar("NumA4",NumA4);

player.SetVar("WordQ",WordQ);
player.SetVar("WordQ1",WordQ1);
player.SetVar("WordQ2",WordQ2);
player.SetVar("WordQ3",WordQ3);
player.SetVar("WordQ4",WordQ4);


player.SetVar("WordA",WordA);
player.SetVar("WordA1",WordA1);
player.SetVar("WordA2",WordA2);
player.SetVar("WordA3",WordA3);
player.SetVar("WordA4",WordA4);

}

function Script12()
{
  // Odd = Engligh question, next Even = Arabic answer;
// random is even for arabic answer;

var player = GetPlayer();

var Words = 138; 

var NumA= Math.floor(Math.random()*Words+1)*2;
var NumA1= Math.floor(Math.random()*Words+1)*2;
var NumA2= Math.floor(Math.random()*Words+1)*2;
var NumA3= Math.floor(Math.random()*Words+1)*2;
var NumA4= Math.floor(Math.random()*Words+1)*2;







if ( (NumA1 == NumA)  || (NumA1 ==  NumA2) || (NumA1 ==  NumA3) || (NumA1 ==  NumA4) ) {
  var NumA1= 0
}

if ( (NumA2 == NumA)  || (NumA2 ==  NumA1) || (NumA2 ==  NumA3) || (NumA2 ==  NumA4) ) {
  var NumA2=  0
}

if ( (NumA3 == NumA)  || (NumA3 ==  NumA1) || (NumA3 ==  NumA2) || (NumA3 ==  NumA4) ) {
  var NumA3= 0
}


if ( (NumA4 == NumA)  || (NumA4 ==  NumA1) || (NumA4 ==  NumA2) || (NumA4 ==  NumA3) ) {
  var NumA4= 0
}


var Words= [
"Free Answer for You",

"	daily	"	,	"	يومي	"	,
"	danger	"	,	"	خطر	"	,
"	dangerous	"	,	"	خطير	"	,
"	dangerously	"	,	"	بخطورة	"	,
"	Daniel	"	,	"	دانيال	"	,
"	dark	"	,	"	مظلم	"	,
"	dash	"	,	"	اندفاع	"	,
"	dashboard	"	,	"	لوحة القيادة	"	,
"	database	"	,	"	قاعدة البيانات	"	,
"	daughter	"	,	"	بنت	"	,
"	David	"	,	"	ديفيد	"	,
"	daytime	"	,	"	نهار	"	,
"	deal	"	,	"	صفقة	"	,
"	dear	"	,	"	عزيزي	"	,
"	deaths	"	,	"	حالات الوفاة	"	,
"	decide	"	,	"	يقرر	"	,
"	decided	"	,	"	مقرر	"	,
"	deciding	"	,	"	تقرير	"	,
"	decision	"	,	"	قرار	"	,
"	decisions	"	,	"	قرارات	"	,
"	decrease	"	,	"	تخفيض	"	,
"	defend	"	,	"	يدافع	"	,
"	defined	"	,	"	وصف بالتعريف	"	,
"	definitely	"	,	"	قطعا	"	,
"	definition	"	,	"	تعريف	"	,
"	definitions	"	,	"	تعريفات	"	,
"	degree	"	,	"	الدرجة العلمية	"	,
"	degrees	"	,	"	درجات	"	,
"	delay	"	,	"	تأخير	"	,
"	delicate	"	,	"	حساس	"	,
"	delivered	"	,	"	تم التوصيل	"	,
"	delivers	"	,	"	يسلم	"	,
"	dentist	"	,	"	دكتورالاسنان	"	,
"	department	"	,	"	قسم	"	,
"	departure	"	,	"	اقلاع	"	,
"	depend	"	,	"	تعتمد	"	,
"	depends	"	,	"	يعتمد على	"	,
"	depressed	"	,	"	محبط	"	,
"	Derek	"	,	"	ديريك	"	,
"	describe	"	,	"	يصف	"	,
"	describes	"	,	"	يصف	"	,
"	description	"	,	"	وصف	"	,
"	descriptions	"	,	"	شروحات	"	,
"	descriptive	"	,	"	وصفي	"	,
"	design	"	,	"	تصميم	"	,
"	designed	"	,	"	تم تصميمه	"	,
"	designer	"	,	"	مصمم	"	,
"	designs	"	,	"	تصميمات	"	,
"	despite	"	,	"	بالرغم من	"	,
"	dessert	"	,	"	حلوى	"	,
"	destroyed	"	,	"	مدمر	"	,
"	details	"	,	"	تفاصيل	"	,
"	determine	"	,	"	يحدد	"	,
"	develop	"	,	"	يطور	"	,
"	developed	"	,	"	متقدم	"	,
"	development	"	,	"	تطور	"	,
"	devices	"	,	"	أجهزة	"	,
"	Dhahran	"	,	"	الظهران	"	,
"	diagram	"	,	"	رسم بياني	"	,
"	dictionary	"	,	"	قاموس	"	,
"	die	"	,	"	يموت	"	,
"	died	"	,	"	مات	"	,
"	diet	"	,	"	حمية	"	,
"	difference	"	,	"	فرق	"	,
"	different	"	,	"	مختلف	"	,
"	difficult	"	,	"	صعب	"	,
"	difficulties	"	,	"	صعوبات	"	,
"	difficulty	"	,	"	صعوبة	"	,
"	dilemma	"	,	"	معضلة	"	,
"	dinner	"	,	"	عشاء	"	,
"	direct	"	,	"	مباشرة	"	,
"	direction	"	,	"	اتجاه	"	,
"	directions	"	,	"	اتجاهات	"	,
"	directly	"	,	"	مباشرة	"	,
"	director	"	,	"	مدير	"	,
"	dirty	"	,	"	قذر	"	,
"	disabilities	"	,	"	إعاقة	"	,
"	disadvantages	"	,	"	سلبيات	"	,
"	disagree	"	,	"	يختلف مع	"	,
"	disapprove	"	,	"	لا يوافق	"	,
"	disbelief	"	,	"	كفر	"	,
"	discount	"	,	"	خصم	"	,
"	discouraged	"	,	"	محبط	"	,
"	discuss	"	,	"	يناقش	"	,
"	discussion	"	,	"	مناقشة	"	,
"	disease	"	,	"	مرض	"	,
"	dishes	"	,	"	أطباق	"	,
"	dishonest	"	,	"	غير أمين	"	,
"	dishwasher	"	,	"	غسالة أطباق	"	,
"	dishwashing	"	,	"	غسل الصحون	"	,
"	dislike	"	,	"	لا يعجبنى	"	,
"	display	"	,	"	عرض	"	,
"	distance	"	,	"	مسافه: بعد	"	,
"	distinct	"	,	"	خامد	"	,
"	distract	"	,	"	يشتت	"	,
"	distracted	"	,	"	مشتت الذهن	"	,
"	distributed	"	,	"	وزع	"	,
"	disturb	"	,	"	يزعج	"	,
"	donation	"	,	"	هبة	"	,
"	done	"	,	"	انتهى	"	,
"	doorway	"	,	"	مدخل	"	,
"	double	"	,	"	مزدوج	"	,
"	down	"	,	"	تحت	"	,
"	downhill	"	,	"	انحدار	"	,
"	downstairs	"	,	"	طابق الأسفل	"	,
"	downtown	"	,	"	وسط البلد	"	,
"	drafted	"	,	"	صاغت	"	,
"	drank	"	,	"	شرب	"	,
"	draw	"	,	"	يرسم	"	,
"	drawing	"	,	"	رسم	"	,
"	dream	"	,	"	يحلم	"	,
"	dreams	"	,	"	أحلام	"	,
"	dress	"	,	"	فستان	"	,
"	dressed	"	,	"	ارتدى	"	,
"	dresses	"	,	"	فساتين	"	,
"	drew	"	,	"	رسم	"	,
"	drink	"	,	"	يشرب	"	,
"	drinking	"	,	"	شرب	"	,
"	drinks	"	,	"	مشروبات	"	,
"	drive	"	,	"	يقود	"	,
"	driver	"	,	"	سائق	"	,
"	drives	"	,	"	محركات	"	,
"	drives	"	,	"	محركات الأقراص	"	,
"	driving	"	,	"	قيادة	"	,
"	drop	"	,	"	يسقط	"	,
"	drops	"	,	"	قطرات	"	,
"	drove	"	,	"	قاد	"	,
"	drunk	"	,	"	سكران	"	,
"	dryer	"	,	"	مجفف	"	,
"	Dublin	"	,	"	دبلن	"	,
"	due	"	,	"	بسبب	"	,
"	dump	"	,	"	أحمق	"	,
"	dumps	"	,	"	نفايات	"	,
"	duplicated	"	,	"	مكرر	"	,
"	during	"	,	"	خلال	"	,
"	dust	"	,	"	غبار	"	,
"	duty	"	,	"	واجب	"	,
"	dynamic	"	,	"	متحرك	"	,



];

var WordQ = Words[NumA-1];
var WordA = Words[NumA];

var WordQ1 = Words[NumA1-1];
var WordA1 = Words[NumA1];

var WordQ2 = Words[NumA2-1];
var WordA2 = Words[NumA2];

var WordQ3 = Words[NumA3-1];
var WordA3 = Words[NumA3];

var WordQ4 = Words[NumA4-1];
var WordA4 = Words[NumA4];


player.SetVar("NumA",NumA);
player.SetVar("NumA1",NumA1);
player.SetVar("NumA2",NumA2);
player.SetVar("NumA3",NumA3);
player.SetVar("NumA4",NumA4);

player.SetVar("WordQ",WordQ);
player.SetVar("WordQ1",WordQ1);
player.SetVar("WordQ2",WordQ2);
player.SetVar("WordQ3",WordQ3);
player.SetVar("WordQ4",WordQ4);


player.SetVar("WordA",WordA);
player.SetVar("WordA1",WordA1);
player.SetVar("WordA2",WordA2);
player.SetVar("WordA3",WordA3);
player.SetVar("WordA4",WordA4);

}

function Script13()
{
  // Odd = Engligh question, next Even = Arabic answer;
// random is even for arabic answer;

var player = GetPlayer();

var Words = 138; 

var NumA= Math.floor(Math.random()*Words+1)*2;
var NumA1= Math.floor(Math.random()*Words+1)*2;
var NumA2= Math.floor(Math.random()*Words+1)*2;
var NumA3= Math.floor(Math.random()*Words+1)*2;
var NumA4= Math.floor(Math.random()*Words+1)*2;







if ( (NumA1 == NumA)  || (NumA1 ==  NumA2) || (NumA1 ==  NumA3) || (NumA1 ==  NumA4) ) {
  var NumA1= 0
}

if ( (NumA2 == NumA)  || (NumA2 ==  NumA1) || (NumA2 ==  NumA3) || (NumA2 ==  NumA4) ) {
  var NumA2=  0
}

if ( (NumA3 == NumA)  || (NumA3 ==  NumA1) || (NumA3 ==  NumA2) || (NumA3 ==  NumA4) ) {
  var NumA3= 0
}


if ( (NumA4 == NumA)  || (NumA4 ==  NumA1) || (NumA4 ==  NumA2) || (NumA4 ==  NumA3) ) {
  var NumA4= 0
}


var Words= [
"Free Answer for You",

"	daily	"	,	"	يومي	"	,
"	danger	"	,	"	خطر	"	,
"	dangerous	"	,	"	خطير	"	,
"	dangerously	"	,	"	بخطورة	"	,
"	Daniel	"	,	"	دانيال	"	,
"	dark	"	,	"	مظلم	"	,
"	dash	"	,	"	اندفاع	"	,
"	dashboard	"	,	"	لوحة القيادة	"	,
"	database	"	,	"	قاعدة البيانات	"	,
"	daughter	"	,	"	بنت	"	,
"	David	"	,	"	ديفيد	"	,
"	daytime	"	,	"	نهار	"	,
"	deal	"	,	"	صفقة	"	,
"	dear	"	,	"	عزيزي	"	,
"	deaths	"	,	"	حالات الوفاة	"	,
"	decide	"	,	"	يقرر	"	,
"	decided	"	,	"	مقرر	"	,
"	deciding	"	,	"	تقرير	"	,
"	decision	"	,	"	قرار	"	,
"	decisions	"	,	"	قرارات	"	,
"	decrease	"	,	"	تخفيض	"	,
"	defend	"	,	"	يدافع	"	,
"	defined	"	,	"	وصف بالتعريف	"	,
"	definitely	"	,	"	قطعا	"	,
"	definition	"	,	"	تعريف	"	,
"	definitions	"	,	"	تعريفات	"	,
"	degree	"	,	"	الدرجة العلمية	"	,
"	degrees	"	,	"	درجات	"	,
"	delay	"	,	"	تأخير	"	,
"	delicate	"	,	"	حساس	"	,
"	delivered	"	,	"	تم التوصيل	"	,
"	delivers	"	,	"	يسلم	"	,
"	dentist	"	,	"	دكتورالاسنان	"	,
"	department	"	,	"	قسم	"	,
"	departure	"	,	"	اقلاع	"	,
"	depend	"	,	"	تعتمد	"	,
"	depends	"	,	"	يعتمد على	"	,
"	depressed	"	,	"	محبط	"	,
"	Derek	"	,	"	ديريك	"	,
"	describe	"	,	"	يصف	"	,
"	describes	"	,	"	يصف	"	,
"	description	"	,	"	وصف	"	,
"	descriptions	"	,	"	شروحات	"	,
"	descriptive	"	,	"	وصفي	"	,
"	design	"	,	"	تصميم	"	,
"	designed	"	,	"	تم تصميمه	"	,
"	designer	"	,	"	مصمم	"	,
"	designs	"	,	"	تصميمات	"	,
"	despite	"	,	"	بالرغم من	"	,
"	dessert	"	,	"	حلوى	"	,
"	destroyed	"	,	"	مدمر	"	,
"	details	"	,	"	تفاصيل	"	,
"	determine	"	,	"	يحدد	"	,
"	develop	"	,	"	يطور	"	,
"	developed	"	,	"	متقدم	"	,
"	development	"	,	"	تطور	"	,
"	devices	"	,	"	أجهزة	"	,
"	Dhahran	"	,	"	الظهران	"	,
"	diagram	"	,	"	رسم بياني	"	,
"	dictionary	"	,	"	قاموس	"	,
"	die	"	,	"	يموت	"	,
"	died	"	,	"	مات	"	,
"	diet	"	,	"	حمية	"	,
"	difference	"	,	"	فرق	"	,
"	different	"	,	"	مختلف	"	,
"	difficult	"	,	"	صعب	"	,
"	difficulties	"	,	"	صعوبات	"	,
"	difficulty	"	,	"	صعوبة	"	,
"	dilemma	"	,	"	معضلة	"	,
"	dinner	"	,	"	عشاء	"	,
"	direct	"	,	"	مباشرة	"	,
"	direction	"	,	"	اتجاه	"	,
"	directions	"	,	"	اتجاهات	"	,
"	directly	"	,	"	مباشرة	"	,
"	director	"	,	"	مدير	"	,
"	dirty	"	,	"	قذر	"	,
"	disabilities	"	,	"	إعاقة	"	,
"	disadvantages	"	,	"	سلبيات	"	,
"	disagree	"	,	"	يختلف مع	"	,
"	disapprove	"	,	"	لا يوافق	"	,
"	disbelief	"	,	"	كفر	"	,
"	discount	"	,	"	خصم	"	,
"	discouraged	"	,	"	محبط	"	,
"	discuss	"	,	"	يناقش	"	,
"	discussion	"	,	"	مناقشة	"	,
"	disease	"	,	"	مرض	"	,
"	dishes	"	,	"	أطباق	"	,
"	dishonest	"	,	"	غير أمين	"	,
"	dishwasher	"	,	"	غسالة أطباق	"	,
"	dishwashing	"	,	"	غسل الصحون	"	,
"	dislike	"	,	"	لا يعجبنى	"	,
"	display	"	,	"	عرض	"	,
"	distance	"	,	"	مسافه: بعد	"	,
"	distinct	"	,	"	خامد	"	,
"	distract	"	,	"	يشتت	"	,
"	distracted	"	,	"	مشتت الذهن	"	,
"	distributed	"	,	"	وزع	"	,
"	disturb	"	,	"	يزعج	"	,
"	donation	"	,	"	هبة	"	,
"	done	"	,	"	انتهى	"	,
"	doorway	"	,	"	مدخل	"	,
"	double	"	,	"	مزدوج	"	,
"	down	"	,	"	تحت	"	,
"	downhill	"	,	"	انحدار	"	,
"	downstairs	"	,	"	طابق الأسفل	"	,
"	downtown	"	,	"	وسط البلد	"	,
"	drafted	"	,	"	صاغت	"	,
"	drank	"	,	"	شرب	"	,
"	draw	"	,	"	يرسم	"	,
"	drawing	"	,	"	رسم	"	,
"	dream	"	,	"	يحلم	"	,
"	dreams	"	,	"	أحلام	"	,
"	dress	"	,	"	فستان	"	,
"	dressed	"	,	"	ارتدى	"	,
"	dresses	"	,	"	فساتين	"	,
"	drew	"	,	"	رسم	"	,
"	drink	"	,	"	يشرب	"	,
"	drinking	"	,	"	شرب	"	,
"	drinks	"	,	"	مشروبات	"	,
"	drive	"	,	"	يقود	"	,
"	driver	"	,	"	سائق	"	,
"	drives	"	,	"	محركات	"	,
"	drives	"	,	"	محركات الأقراص	"	,
"	driving	"	,	"	قيادة	"	,
"	drop	"	,	"	يسقط	"	,
"	drops	"	,	"	قطرات	"	,
"	drove	"	,	"	قاد	"	,
"	drunk	"	,	"	سكران	"	,
"	dryer	"	,	"	مجفف	"	,
"	Dublin	"	,	"	دبلن	"	,
"	due	"	,	"	بسبب	"	,
"	dump	"	,	"	أحمق	"	,
"	dumps	"	,	"	نفايات	"	,
"	duplicated	"	,	"	مكرر	"	,
"	during	"	,	"	خلال	"	,
"	dust	"	,	"	غبار	"	,
"	duty	"	,	"	واجب	"	,
"	dynamic	"	,	"	متحرك	"	,



];

var WordQ = Words[NumA-1];
var WordA = Words[NumA];

var WordQ1 = Words[NumA1-1];
var WordA1 = Words[NumA1];

var WordQ2 = Words[NumA2-1];
var WordA2 = Words[NumA2];

var WordQ3 = Words[NumA3-1];
var WordA3 = Words[NumA3];

var WordQ4 = Words[NumA4-1];
var WordA4 = Words[NumA4];


player.SetVar("NumA",NumA);
player.SetVar("NumA1",NumA1);
player.SetVar("NumA2",NumA2);
player.SetVar("NumA3",NumA3);
player.SetVar("NumA4",NumA4);

player.SetVar("WordQ",WordQ);
player.SetVar("WordQ1",WordQ1);
player.SetVar("WordQ2",WordQ2);
player.SetVar("WordQ3",WordQ3);
player.SetVar("WordQ4",WordQ4);


player.SetVar("WordA",WordA);
player.SetVar("WordA1",WordA1);
player.SetVar("WordA2",WordA2);
player.SetVar("WordA3",WordA3);
player.SetVar("WordA4",WordA4);

}

function Script14()
{
  // Odd = Engligh question, next Even = Arabic answer;
// random is even for arabic answer;

var player = GetPlayer();

var Words = 138; 

var NumA= Math.floor(Math.random()*Words+1)*2;
var NumA1= Math.floor(Math.random()*Words+1)*2;
var NumA2= Math.floor(Math.random()*Words+1)*2;
var NumA3= Math.floor(Math.random()*Words+1)*2;
var NumA4= Math.floor(Math.random()*Words+1)*2;







if ( (NumA1 == NumA)  || (NumA1 ==  NumA2) || (NumA1 ==  NumA3) || (NumA1 ==  NumA4) ) {
  var NumA1= 0
}

if ( (NumA2 == NumA)  || (NumA2 ==  NumA1) || (NumA2 ==  NumA3) || (NumA2 ==  NumA4) ) {
  var NumA2=  0
}

if ( (NumA3 == NumA)  || (NumA3 ==  NumA1) || (NumA3 ==  NumA2) || (NumA3 ==  NumA4) ) {
  var NumA3= 0
}


if ( (NumA4 == NumA)  || (NumA4 ==  NumA1) || (NumA4 ==  NumA2) || (NumA4 ==  NumA3) ) {
  var NumA4= 0
}


var Words= [
"Free Answer for You",

"	daily	"	,	"	يومي	"	,
"	danger	"	,	"	خطر	"	,
"	dangerous	"	,	"	خطير	"	,
"	dangerously	"	,	"	بخطورة	"	,
"	Daniel	"	,	"	دانيال	"	,
"	dark	"	,	"	مظلم	"	,
"	dash	"	,	"	اندفاع	"	,
"	dashboard	"	,	"	لوحة القيادة	"	,
"	database	"	,	"	قاعدة البيانات	"	,
"	daughter	"	,	"	بنت	"	,
"	David	"	,	"	ديفيد	"	,
"	daytime	"	,	"	نهار	"	,
"	deal	"	,	"	صفقة	"	,
"	dear	"	,	"	عزيزي	"	,
"	deaths	"	,	"	حالات الوفاة	"	,
"	decide	"	,	"	يقرر	"	,
"	decided	"	,	"	مقرر	"	,
"	deciding	"	,	"	تقرير	"	,
"	decision	"	,	"	قرار	"	,
"	decisions	"	,	"	قرارات	"	,
"	decrease	"	,	"	تخفيض	"	,
"	defend	"	,	"	يدافع	"	,
"	defined	"	,	"	وصف بالتعريف	"	,
"	definitely	"	,	"	قطعا	"	,
"	definition	"	,	"	تعريف	"	,
"	definitions	"	,	"	تعريفات	"	,
"	degree	"	,	"	الدرجة العلمية	"	,
"	degrees	"	,	"	درجات	"	,
"	delay	"	,	"	تأخير	"	,
"	delicate	"	,	"	حساس	"	,
"	delivered	"	,	"	تم التوصيل	"	,
"	delivers	"	,	"	يسلم	"	,
"	dentist	"	,	"	دكتورالاسنان	"	,
"	department	"	,	"	قسم	"	,
"	departure	"	,	"	اقلاع	"	,
"	depend	"	,	"	تعتمد	"	,
"	depends	"	,	"	يعتمد على	"	,
"	depressed	"	,	"	محبط	"	,
"	Derek	"	,	"	ديريك	"	,
"	describe	"	,	"	يصف	"	,
"	describes	"	,	"	يصف	"	,
"	description	"	,	"	وصف	"	,
"	descriptions	"	,	"	شروحات	"	,
"	descriptive	"	,	"	وصفي	"	,
"	design	"	,	"	تصميم	"	,
"	designed	"	,	"	تم تصميمه	"	,
"	designer	"	,	"	مصمم	"	,
"	designs	"	,	"	تصميمات	"	,
"	despite	"	,	"	بالرغم من	"	,
"	dessert	"	,	"	حلوى	"	,
"	destroyed	"	,	"	مدمر	"	,
"	details	"	,	"	تفاصيل	"	,
"	determine	"	,	"	يحدد	"	,
"	develop	"	,	"	يطور	"	,
"	developed	"	,	"	متقدم	"	,
"	development	"	,	"	تطور	"	,
"	devices	"	,	"	أجهزة	"	,
"	Dhahran	"	,	"	الظهران	"	,
"	diagram	"	,	"	رسم بياني	"	,
"	dictionary	"	,	"	قاموس	"	,
"	die	"	,	"	يموت	"	,
"	died	"	,	"	مات	"	,
"	diet	"	,	"	حمية	"	,
"	difference	"	,	"	فرق	"	,
"	different	"	,	"	مختلف	"	,
"	difficult	"	,	"	صعب	"	,
"	difficulties	"	,	"	صعوبات	"	,
"	difficulty	"	,	"	صعوبة	"	,
"	dilemma	"	,	"	معضلة	"	,
"	dinner	"	,	"	عشاء	"	,
"	direct	"	,	"	مباشرة	"	,
"	direction	"	,	"	اتجاه	"	,
"	directions	"	,	"	اتجاهات	"	,
"	directly	"	,	"	مباشرة	"	,
"	director	"	,	"	مدير	"	,
"	dirty	"	,	"	قذر	"	,
"	disabilities	"	,	"	إعاقة	"	,
"	disadvantages	"	,	"	سلبيات	"	,
"	disagree	"	,	"	يختلف مع	"	,
"	disapprove	"	,	"	لا يوافق	"	,
"	disbelief	"	,	"	كفر	"	,
"	discount	"	,	"	خصم	"	,
"	discouraged	"	,	"	محبط	"	,
"	discuss	"	,	"	يناقش	"	,
"	discussion	"	,	"	مناقشة	"	,
"	disease	"	,	"	مرض	"	,
"	dishes	"	,	"	أطباق	"	,
"	dishonest	"	,	"	غير أمين	"	,
"	dishwasher	"	,	"	غسالة أطباق	"	,
"	dishwashing	"	,	"	غسل الصحون	"	,
"	dislike	"	,	"	لا يعجبنى	"	,
"	display	"	,	"	عرض	"	,
"	distance	"	,	"	مسافه: بعد	"	,
"	distinct	"	,	"	خامد	"	,
"	distract	"	,	"	يشتت	"	,
"	distracted	"	,	"	مشتت الذهن	"	,
"	distributed	"	,	"	وزع	"	,
"	disturb	"	,	"	يزعج	"	,
"	donation	"	,	"	هبة	"	,
"	done	"	,	"	انتهى	"	,
"	doorway	"	,	"	مدخل	"	,
"	double	"	,	"	مزدوج	"	,
"	down	"	,	"	تحت	"	,
"	downhill	"	,	"	انحدار	"	,
"	downstairs	"	,	"	طابق الأسفل	"	,
"	downtown	"	,	"	وسط البلد	"	,
"	drafted	"	,	"	صاغت	"	,
"	drank	"	,	"	شرب	"	,
"	draw	"	,	"	يرسم	"	,
"	drawing	"	,	"	رسم	"	,
"	dream	"	,	"	يحلم	"	,
"	dreams	"	,	"	أحلام	"	,
"	dress	"	,	"	فستان	"	,
"	dressed	"	,	"	ارتدى	"	,
"	dresses	"	,	"	فساتين	"	,
"	drew	"	,	"	رسم	"	,
"	drink	"	,	"	يشرب	"	,
"	drinking	"	,	"	شرب	"	,
"	drinks	"	,	"	مشروبات	"	,
"	drive	"	,	"	يقود	"	,
"	driver	"	,	"	سائق	"	,
"	drives	"	,	"	محركات	"	,
"	drives	"	,	"	محركات الأقراص	"	,
"	driving	"	,	"	قيادة	"	,
"	drop	"	,	"	يسقط	"	,
"	drops	"	,	"	قطرات	"	,
"	drove	"	,	"	قاد	"	,
"	drunk	"	,	"	سكران	"	,
"	dryer	"	,	"	مجفف	"	,
"	Dublin	"	,	"	دبلن	"	,
"	due	"	,	"	بسبب	"	,
"	dump	"	,	"	أحمق	"	,
"	dumps	"	,	"	نفايات	"	,
"	duplicated	"	,	"	مكرر	"	,
"	during	"	,	"	خلال	"	,
"	dust	"	,	"	غبار	"	,
"	duty	"	,	"	واجب	"	,
"	dynamic	"	,	"	متحرك	"	,



];

var WordQ = Words[NumA-1];
var WordA = Words[NumA];

var WordQ1 = Words[NumA1-1];
var WordA1 = Words[NumA1];

var WordQ2 = Words[NumA2-1];
var WordA2 = Words[NumA2];

var WordQ3 = Words[NumA3-1];
var WordA3 = Words[NumA3];

var WordQ4 = Words[NumA4-1];
var WordA4 = Words[NumA4];


player.SetVar("NumA",NumA);
player.SetVar("NumA1",NumA1);
player.SetVar("NumA2",NumA2);
player.SetVar("NumA3",NumA3);
player.SetVar("NumA4",NumA4);

player.SetVar("WordQ",WordQ);
player.SetVar("WordQ1",WordQ1);
player.SetVar("WordQ2",WordQ2);
player.SetVar("WordQ3",WordQ3);
player.SetVar("WordQ4",WordQ4);


player.SetVar("WordA",WordA);
player.SetVar("WordA1",WordA1);
player.SetVar("WordA2",WordA2);
player.SetVar("WordA3",WordA3);
player.SetVar("WordA4",WordA4);

}

function Script15()
{
  // Odd = Engligh question, next Even = Arabic answer;
// random is even for arabic answer;

var player = GetPlayer();

var Words = 138; 

var NumA= Math.floor(Math.random()*Words+1)*2;
var NumA1= Math.floor(Math.random()*Words+1)*2;
var NumA2= Math.floor(Math.random()*Words+1)*2;
var NumA3= Math.floor(Math.random()*Words+1)*2;
var NumA4= Math.floor(Math.random()*Words+1)*2;







if ( (NumA1 == NumA)  || (NumA1 ==  NumA2) || (NumA1 ==  NumA3) || (NumA1 ==  NumA4) ) {
  var NumA1= 0
}

if ( (NumA2 == NumA)  || (NumA2 ==  NumA1) || (NumA2 ==  NumA3) || (NumA2 ==  NumA4) ) {
  var NumA2=  0
}

if ( (NumA3 == NumA)  || (NumA3 ==  NumA1) || (NumA3 ==  NumA2) || (NumA3 ==  NumA4) ) {
  var NumA3= 0
}


if ( (NumA4 == NumA)  || (NumA4 ==  NumA1) || (NumA4 ==  NumA2) || (NumA4 ==  NumA3) ) {
  var NumA4= 0
}


var Words= [
"Free Answer for You",

"	daily	"	,	"	يومي	"	,
"	danger	"	,	"	خطر	"	,
"	dangerous	"	,	"	خطير	"	,
"	dangerously	"	,	"	بخطورة	"	,
"	Daniel	"	,	"	دانيال	"	,
"	dark	"	,	"	مظلم	"	,
"	dash	"	,	"	اندفاع	"	,
"	dashboard	"	,	"	لوحة القيادة	"	,
"	database	"	,	"	قاعدة البيانات	"	,
"	daughter	"	,	"	بنت	"	,
"	David	"	,	"	ديفيد	"	,
"	daytime	"	,	"	نهار	"	,
"	deal	"	,	"	صفقة	"	,
"	dear	"	,	"	عزيزي	"	,
"	deaths	"	,	"	حالات الوفاة	"	,
"	decide	"	,	"	يقرر	"	,
"	decided	"	,	"	مقرر	"	,
"	deciding	"	,	"	تقرير	"	,
"	decision	"	,	"	قرار	"	,
"	decisions	"	,	"	قرارات	"	,
"	decrease	"	,	"	تخفيض	"	,
"	defend	"	,	"	يدافع	"	,
"	defined	"	,	"	وصف بالتعريف	"	,
"	definitely	"	,	"	قطعا	"	,
"	definition	"	,	"	تعريف	"	,
"	definitions	"	,	"	تعريفات	"	,
"	degree	"	,	"	الدرجة العلمية	"	,
"	degrees	"	,	"	درجات	"	,
"	delay	"	,	"	تأخير	"	,
"	delicate	"	,	"	حساس	"	,
"	delivered	"	,	"	تم التوصيل	"	,
"	delivers	"	,	"	يسلم	"	,
"	dentist	"	,	"	دكتورالاسنان	"	,
"	department	"	,	"	قسم	"	,
"	departure	"	,	"	اقلاع	"	,
"	depend	"	,	"	تعتمد	"	,
"	depends	"	,	"	يعتمد على	"	,
"	depressed	"	,	"	محبط	"	,
"	Derek	"	,	"	ديريك	"	,
"	describe	"	,	"	يصف	"	,
"	describes	"	,	"	يصف	"	,
"	description	"	,	"	وصف	"	,
"	descriptions	"	,	"	شروحات	"	,
"	descriptive	"	,	"	وصفي	"	,
"	design	"	,	"	تصميم	"	,
"	designed	"	,	"	تم تصميمه	"	,
"	designer	"	,	"	مصمم	"	,
"	designs	"	,	"	تصميمات	"	,
"	despite	"	,	"	بالرغم من	"	,
"	dessert	"	,	"	حلوى	"	,
"	destroyed	"	,	"	مدمر	"	,
"	details	"	,	"	تفاصيل	"	,
"	determine	"	,	"	يحدد	"	,
"	develop	"	,	"	يطور	"	,
"	developed	"	,	"	متقدم	"	,
"	development	"	,	"	تطور	"	,
"	devices	"	,	"	أجهزة	"	,
"	Dhahran	"	,	"	الظهران	"	,
"	diagram	"	,	"	رسم بياني	"	,
"	dictionary	"	,	"	قاموس	"	,
"	die	"	,	"	يموت	"	,
"	died	"	,	"	مات	"	,
"	diet	"	,	"	حمية	"	,
"	difference	"	,	"	فرق	"	,
"	different	"	,	"	مختلف	"	,
"	difficult	"	,	"	صعب	"	,
"	difficulties	"	,	"	صعوبات	"	,
"	difficulty	"	,	"	صعوبة	"	,
"	dilemma	"	,	"	معضلة	"	,
"	dinner	"	,	"	عشاء	"	,
"	direct	"	,	"	مباشرة	"	,
"	direction	"	,	"	اتجاه	"	,
"	directions	"	,	"	اتجاهات	"	,
"	directly	"	,	"	مباشرة	"	,
"	director	"	,	"	مدير	"	,
"	dirty	"	,	"	قذر	"	,
"	disabilities	"	,	"	إعاقة	"	,
"	disadvantages	"	,	"	سلبيات	"	,
"	disagree	"	,	"	يختلف مع	"	,
"	disapprove	"	,	"	لا يوافق	"	,
"	disbelief	"	,	"	كفر	"	,
"	discount	"	,	"	خصم	"	,
"	discouraged	"	,	"	محبط	"	,
"	discuss	"	,	"	يناقش	"	,
"	discussion	"	,	"	مناقشة	"	,
"	disease	"	,	"	مرض	"	,
"	dishes	"	,	"	أطباق	"	,
"	dishonest	"	,	"	غير أمين	"	,
"	dishwasher	"	,	"	غسالة أطباق	"	,
"	dishwashing	"	,	"	غسل الصحون	"	,
"	dislike	"	,	"	لا يعجبنى	"	,
"	display	"	,	"	عرض	"	,
"	distance	"	,	"	مسافه: بعد	"	,
"	distinct	"	,	"	خامد	"	,
"	distract	"	,	"	يشتت	"	,
"	distracted	"	,	"	مشتت الذهن	"	,
"	distributed	"	,	"	وزع	"	,
"	disturb	"	,	"	يزعج	"	,
"	donation	"	,	"	هبة	"	,
"	done	"	,	"	انتهى	"	,
"	doorway	"	,	"	مدخل	"	,
"	double	"	,	"	مزدوج	"	,
"	down	"	,	"	تحت	"	,
"	downhill	"	,	"	انحدار	"	,
"	downstairs	"	,	"	طابق الأسفل	"	,
"	downtown	"	,	"	وسط البلد	"	,
"	drafted	"	,	"	صاغت	"	,
"	drank	"	,	"	شرب	"	,
"	draw	"	,	"	يرسم	"	,
"	drawing	"	,	"	رسم	"	,
"	dream	"	,	"	يحلم	"	,
"	dreams	"	,	"	أحلام	"	,
"	dress	"	,	"	فستان	"	,
"	dressed	"	,	"	ارتدى	"	,
"	dresses	"	,	"	فساتين	"	,
"	drew	"	,	"	رسم	"	,
"	drink	"	,	"	يشرب	"	,
"	drinking	"	,	"	شرب	"	,
"	drinks	"	,	"	مشروبات	"	,
"	drive	"	,	"	يقود	"	,
"	driver	"	,	"	سائق	"	,
"	drives	"	,	"	محركات	"	,
"	drives	"	,	"	محركات الأقراص	"	,
"	driving	"	,	"	قيادة	"	,
"	drop	"	,	"	يسقط	"	,
"	drops	"	,	"	قطرات	"	,
"	drove	"	,	"	قاد	"	,
"	drunk	"	,	"	سكران	"	,
"	dryer	"	,	"	مجفف	"	,
"	Dublin	"	,	"	دبلن	"	,
"	due	"	,	"	بسبب	"	,
"	dump	"	,	"	أحمق	"	,
"	dumps	"	,	"	نفايات	"	,
"	duplicated	"	,	"	مكرر	"	,
"	during	"	,	"	خلال	"	,
"	dust	"	,	"	غبار	"	,
"	duty	"	,	"	واجب	"	,
"	dynamic	"	,	"	متحرك	"	,



];

var WordQ = Words[NumA-1];
var WordA = Words[NumA];

var WordQ1 = Words[NumA1-1];
var WordA1 = Words[NumA1];

var WordQ2 = Words[NumA2-1];
var WordA2 = Words[NumA2];

var WordQ3 = Words[NumA3-1];
var WordA3 = Words[NumA3];

var WordQ4 = Words[NumA4-1];
var WordA4 = Words[NumA4];


player.SetVar("NumA",NumA);
player.SetVar("NumA1",NumA1);
player.SetVar("NumA2",NumA2);
player.SetVar("NumA3",NumA3);
player.SetVar("NumA4",NumA4);

player.SetVar("WordQ",WordQ);
player.SetVar("WordQ1",WordQ1);
player.SetVar("WordQ2",WordQ2);
player.SetVar("WordQ3",WordQ3);
player.SetVar("WordQ4",WordQ4);


player.SetVar("WordA",WordA);
player.SetVar("WordA1",WordA1);
player.SetVar("WordA2",WordA2);
player.SetVar("WordA3",WordA3);
player.SetVar("WordA4",WordA4);

}

function Script16()
{
  // Odd = Engligh question, next Even = Arabic answer;
// random is even for arabic answer;

var player = GetPlayer();

var Words = 142; 

var NumA= Math.floor(Math.random()*Words+1)*2;
var NumA1= Math.floor(Math.random()*Words+1)*2;
var NumA2= Math.floor(Math.random()*Words+1)*2;
var NumA3= Math.floor(Math.random()*Words+1)*2;
var NumA4= Math.floor(Math.random()*Words+1)*2;





if ( (NumA1 == NumA)  || (NumA1 ==  NumA2) || (NumA1 ==  NumA3) || (NumA1 ==  NumA4) ) {
  var NumA1= 0
}

if ( (NumA2 == NumA)  || (NumA2 ==  NumA1) || (NumA2 ==  NumA3) || (NumA2 ==  NumA4) ) {
  var NumA2=  0
}

if ( (NumA3 == NumA)  || (NumA3 ==  NumA1) || (NumA3 ==  NumA2) || (NumA3 ==  NumA4) ) {
  var NumA3= 0
}


if ( (NumA4 == NumA)  || (NumA4 ==  NumA1) || (NumA4 ==  NumA2) || (NumA4 ==  NumA3) ) {
  var NumA4= 0
}


var Words= [
"Free Answer for You",

"	each	"	,	"	كل	"	,
"	earlier	"	,	"	ابكر	"	,
"	early	"	,	"	مبكرا	"	,
"	earn	"	,	"	يكسب	"	,
"	earnings	"	,	"	أرباح	"	,
"	earthquake	"	,	"	هزة أرضية	"	,
"	easier	"	,	"	أسهل	"	,
"	easily	"	,	"	بسهولة	"	,
"	east	"	,	"	شرق	"	,
"	easy	"	,	"	سهل	"	,
"	eat	"	,	"	يأكل	"	,
"	eaten	"	,	"	مأكول	"	,
"	eater	"	,	"	آكل	"	,
"	eating	"	,	"	يتناول الطعام	"	,
"	eco friendly	"	,	"	صديقة للبيئة	"	,
"	economic	"	,	"	اقتصادي	"	,
"	economics	"	,	"	اقتصاديات	"	,
"	economy	"	,	"	اقتصاد	"	,
"	eddy	"	,	"	دوامة	"	,
"	edit	"	,	"	تعديل	"	,
"	edition	"	,	"	إصدار	"	,
"	editor	"	,	"	محرر	"	,
"	editorial	"	,	"	افتتاحية	"	,
"	editors	"	,	"	محررين	"	,
"	education	"	,	"	تعليم	"	,
"	educational	"	,	"	تربوي	"	,
"	effect	"	,	"	تأثير	"	,
"	effective	"	,	"	فعال	"	,
"	effects	"	,	"	تأثيرات	"	,
"	efficient	"	,	"	فعال	"	,
"	effort	"	,	"	مجهود	"	,
"	egg	"	,	"	بيضة	"	,
"	Egyptian	"	,	"	مصري	"	,
"	eight	"	,	"	ثمانية	"	,
"	either	"	,	"	إما	"	,
"	elder	"	,	"	مسن	"	,
"	elderly	"	,	"	كبار السن	"	,
"	electric	"	,	"	كهربائي	"	,
"	electrician	"	,	"	عامل الكهرباء	"	,
"	electronic	"	,	"	إلكتروني	"	,
"	elegant	"	,	"	أنيق	"	,
"	elevator	"	,	"	مصعد	"	,
"	else	"	,	"	آخر	"	,
"	emotional	"	,	"	عاطفي	"	,
"	emotions	"	,	"	عواطف	"	,
"	employees	"	,	"	موظفين	"	,
"	employers	"	,	"	أرباب العمل	"	,
"	emptiness	"	,	"	فراغ	"	,
"	empty	"	,	"	فارغة	"	,
"	enable	"	,	"	يمكن	"	,
"	encounter	"	,	"	يواجه ينجز	"	,
"	end	"	,	"	نهاية	"	,
"	ending	"	,	"	إنهاء	"	,
"	endings	"	,	"	نهايات	"	,
"	ends	"	,	"	ينتهي	"	,
"	energetic	"	,	"	نشيط	"	,
"	energy	"	,	"	طاقة	"	,
"	energy efficient	"	,	"	كفاءة الطاقة	"	,
"	engineer	"	,	"	مهندس	"	,
"	England	"	,	"	إنكلترا	"	,
"	English	"	,	"	إنجليزية	"	,
"	enhanced	"	,	"	محسن	"	,
"	enjoy	"	,	"	يستمتع	"	,
"	enjoyable	"	,	"	ممتع	"	,
"	enjoyed	"	,	"	استمتعت	"	,
"	enjoying	"	,	"	تتمتع	"	,
"	enough	"	,	"	كاف	"	,
"	ensure	"	,	"	التأكد من	"	,
"	enter	"	,	"	يدخل	"	,
"	entering	"	,	"	دخول	"	,
"	entertainment	"	,	"	ترفيه	"	,
"	enthusiastic	"	,	"	متحمس	"	,
"	entire	"	,	"	بأكمله	"	,
"	entrepreneurs	"	,	"	رجال الأعمال	"	,
"	entries	"	,	"	إدخالات	"	,
"	entry	"	,	"	دخول	"	,
"	environment	"	,	"	بيئة	"	,
"	environments	"	,	"	بيئات	"	,
"	equal	"	,	"	مساو	"	,
"	escalator	"	,	"	سلم كهربائى	"	,
"	escalators	"	,	"	السلالم المتحركة	"	,
"	especially	"	,	"	خصوصا	"	,
"	essay	"	,	"	مقال	"	,
"	establish	"	,	"	ينشئ	"	,
"	established	"	,	"	أنشئت	"	,
"	establishing	"	,	"	تأسيس	"	,
"	etc	"	,	"	إلخ	"	,
"	etchings	"	,	"	ختوم	"	,
"	Europe	"	,	"	أوروبا	"	,
"	Europeans	"	,	"	الأوروبيون	"	,
"	even	"	,	"	حتى	"	,
"	evening	"	,	"	اخر النهار	"	,
"	events	"	,	"	أحداث	"	,
"	eventually	"	,	"	في النهاية	"	,
"	ever	"	,	"	أبدا	"	,
"	every	"	,	"	كل	"	,
"	everyday	"	,	"	كل يوم	"	,
"	everyone	"	,	"	الجميع	"	,
"	everything	"	,	"	كل شىء	"	,
"	evidence	"	,	"	دليل	"	,
"	exactly	"	,	"	بالضبط	"	,
"	exam	"	,	"	امتحان	"	,
"	examiner	"	,	"	ممتحن	"	,
"	examples	"	,	"	أمثلة	"	,
"	exceptional	"	,	"	استثنائي	"	,
"	exchange	"	,	"	تبادل	"	,
"	exchanged	"	,	"	متبادل	"	,
"	excited	"	,	"	مثار	"	,
"	exciting	"	,	"	مثير	"	,
"	exclusive	"	,	"	حصرية	"	,
"	excuse	"	,	"	عذر	"	,
"	exercise	"	,	"	ممارسه الرياضه	"	,
"	exhausted	"	,	"	استنفد	"	,
"	exhaustion	"	,	"	إنهاك	"	,
"	expand	"	,	"	يتوسع	"	,
"	EXPANSION	"	,	"	توسع	"	,
"	expect	"	,	"	يتوقع	"	,
"	expected	"	,	"	متوقع	"	,
"	expensive	"	,	"	غالي	"	,
"	experience	"	,	"	خبرة	"	,
"	experienced	"	,	"	أختبر	"	,
"	experiences	"	,	"	خبرات	"	,
"	experiencing	"	,	"	يعاني	"	,
"	experimental	"	,	"	تجريبي	"	,
"	expert	"	,	"	خبير	"	,
"	explain	"	,	"	يشرح	"	,
"	explained	"	,	"	مشروح	"	,
"	explanation	"	,	"	شرح	"	,
"	explanations	"	,	"	تفسيرات	"	,
"	explode	"	,	"	ينفجر	"	,
"	exploration	"	,	"	استكشاف	"	,
"	exploring	"	,	"	يستكشف	"	,
"	export	"	,	"	يصدر	"	,
"	express	"	,	"	يعبر	"	,
"	expression	"	,	"	تعبير	"	,
"	extension	"	,	"	امتداد	"	,
"	exterior	"	,	"	خارجي	"	,
"	extra	"	,	"	إضافي	"	,
"	extreme	"	,	"	شديد	"	,
"	eye	"	,	"	عين	"	,
"	eye catching	"	,	"	لافتة للنظر	"	,
"	eyes	"	,	"	عيون	"	,


];

var WordQ = Words[NumA-1];
var WordA = Words[NumA];

var WordQ1 = Words[NumA1-1];
var WordA1 = Words[NumA1];

var WordQ2 = Words[NumA2-1];
var WordA2 = Words[NumA2];

var WordQ3 = Words[NumA3-1];
var WordA3 = Words[NumA3];

var WordQ4 = Words[NumA4-1];
var WordA4 = Words[NumA4];


player.SetVar("NumA",NumA);
player.SetVar("NumA1",NumA1);
player.SetVar("NumA2",NumA2);
player.SetVar("NumA3",NumA3);
player.SetVar("NumA4",NumA4);

player.SetVar("WordQ",WordQ);
player.SetVar("WordQ1",WordQ1);
player.SetVar("WordQ2",WordQ2);
player.SetVar("WordQ3",WordQ3);
player.SetVar("WordQ4",WordQ4);


player.SetVar("WordA",WordA);
player.SetVar("WordA1",WordA1);
player.SetVar("WordA2",WordA2);
player.SetVar("WordA3",WordA3);
player.SetVar("WordA4",WordA4);

}

function Script17()
{
  // Odd = Engligh question, next Even = Arabic answer;
// random is even for arabic answer;

var player = GetPlayer();

var Words = 142; 

var NumA= Math.floor(Math.random()*Words+1)*2;
var NumA1= Math.floor(Math.random()*Words+1)*2;
var NumA2= Math.floor(Math.random()*Words+1)*2;
var NumA3= Math.floor(Math.random()*Words+1)*2;
var NumA4= Math.floor(Math.random()*Words+1)*2;





if ( (NumA1 == NumA)  || (NumA1 ==  NumA2) || (NumA1 ==  NumA3) || (NumA1 ==  NumA4) ) {
  var NumA1= 0
}

if ( (NumA2 == NumA)  || (NumA2 ==  NumA1) || (NumA2 ==  NumA3) || (NumA2 ==  NumA4) ) {
  var NumA2=  0
}

if ( (NumA3 == NumA)  || (NumA3 ==  NumA1) || (NumA3 ==  NumA2) || (NumA3 ==  NumA4) ) {
  var NumA3= 0
}


if ( (NumA4 == NumA)  || (NumA4 ==  NumA1) || (NumA4 ==  NumA2) || (NumA4 ==  NumA3) ) {
  var NumA4= 0
}


var Words= [
"Free Answer for You",

"	each	"	,	"	كل	"	,
"	earlier	"	,	"	ابكر	"	,
"	early	"	,	"	مبكرا	"	,
"	earn	"	,	"	يكسب	"	,
"	earnings	"	,	"	أرباح	"	,
"	earthquake	"	,	"	هزة أرضية	"	,
"	easier	"	,	"	أسهل	"	,
"	easily	"	,	"	بسهولة	"	,
"	east	"	,	"	شرق	"	,
"	easy	"	,	"	سهل	"	,
"	eat	"	,	"	يأكل	"	,
"	eaten	"	,	"	مأكول	"	,
"	eater	"	,	"	آكل	"	,
"	eating	"	,	"	يتناول الطعام	"	,
"	eco friendly	"	,	"	صديقة للبيئة	"	,
"	economic	"	,	"	اقتصادي	"	,
"	economics	"	,	"	اقتصاديات	"	,
"	economy	"	,	"	اقتصاد	"	,
"	eddy	"	,	"	دوامة	"	,
"	edit	"	,	"	تعديل	"	,
"	edition	"	,	"	إصدار	"	,
"	editor	"	,	"	محرر	"	,
"	editorial	"	,	"	افتتاحية	"	,
"	editors	"	,	"	محررين	"	,
"	education	"	,	"	تعليم	"	,
"	educational	"	,	"	تربوي	"	,
"	effect	"	,	"	تأثير	"	,
"	effective	"	,	"	فعال	"	,
"	effects	"	,	"	تأثيرات	"	,
"	efficient	"	,	"	فعال	"	,
"	effort	"	,	"	مجهود	"	,
"	egg	"	,	"	بيضة	"	,
"	Egyptian	"	,	"	مصري	"	,
"	eight	"	,	"	ثمانية	"	,
"	either	"	,	"	إما	"	,
"	elder	"	,	"	مسن	"	,
"	elderly	"	,	"	كبار السن	"	,
"	electric	"	,	"	كهربائي	"	,
"	electrician	"	,	"	عامل الكهرباء	"	,
"	electronic	"	,	"	إلكتروني	"	,
"	elegant	"	,	"	أنيق	"	,
"	elevator	"	,	"	مصعد	"	,
"	else	"	,	"	آخر	"	,
"	emotional	"	,	"	عاطفي	"	,
"	emotions	"	,	"	عواطف	"	,
"	employees	"	,	"	موظفين	"	,
"	employers	"	,	"	أرباب العمل	"	,
"	emptiness	"	,	"	فراغ	"	,
"	empty	"	,	"	فارغة	"	,
"	enable	"	,	"	يمكن	"	,
"	encounter	"	,	"	يواجه ينجز	"	,
"	end	"	,	"	نهاية	"	,
"	ending	"	,	"	إنهاء	"	,
"	endings	"	,	"	نهايات	"	,
"	ends	"	,	"	ينتهي	"	,
"	energetic	"	,	"	نشيط	"	,
"	energy	"	,	"	طاقة	"	,
"	energy efficient	"	,	"	كفاءة الطاقة	"	,
"	engineer	"	,	"	مهندس	"	,
"	England	"	,	"	إنكلترا	"	,
"	English	"	,	"	إنجليزية	"	,
"	enhanced	"	,	"	محسن	"	,
"	enjoy	"	,	"	يستمتع	"	,
"	enjoyable	"	,	"	ممتع	"	,
"	enjoyed	"	,	"	استمتعت	"	,
"	enjoying	"	,	"	تتمتع	"	,
"	enough	"	,	"	كاف	"	,
"	ensure	"	,	"	التأكد من	"	,
"	enter	"	,	"	يدخل	"	,
"	entering	"	,	"	دخول	"	,
"	entertainment	"	,	"	ترفيه	"	,
"	enthusiastic	"	,	"	متحمس	"	,
"	entire	"	,	"	بأكمله	"	,
"	entrepreneurs	"	,	"	رجال الأعمال	"	,
"	entries	"	,	"	إدخالات	"	,
"	entry	"	,	"	دخول	"	,
"	environment	"	,	"	بيئة	"	,
"	environments	"	,	"	بيئات	"	,
"	equal	"	,	"	مساو	"	,
"	escalator	"	,	"	سلم كهربائى	"	,
"	escalators	"	,	"	السلالم المتحركة	"	,
"	especially	"	,	"	خصوصا	"	,
"	essay	"	,	"	مقال	"	,
"	establish	"	,	"	ينشئ	"	,
"	established	"	,	"	أنشئت	"	,
"	establishing	"	,	"	تأسيس	"	,
"	etc	"	,	"	إلخ	"	,
"	etchings	"	,	"	ختوم	"	,
"	Europe	"	,	"	أوروبا	"	,
"	Europeans	"	,	"	الأوروبيون	"	,
"	even	"	,	"	حتى	"	,
"	evening	"	,	"	اخر النهار	"	,
"	events	"	,	"	أحداث	"	,
"	eventually	"	,	"	في النهاية	"	,
"	ever	"	,	"	أبدا	"	,
"	every	"	,	"	كل	"	,
"	everyday	"	,	"	كل يوم	"	,
"	everyone	"	,	"	الجميع	"	,
"	everything	"	,	"	كل شىء	"	,
"	evidence	"	,	"	دليل	"	,
"	exactly	"	,	"	بالضبط	"	,
"	exam	"	,	"	امتحان	"	,
"	examiner	"	,	"	ممتحن	"	,
"	examples	"	,	"	أمثلة	"	,
"	exceptional	"	,	"	استثنائي	"	,
"	exchange	"	,	"	تبادل	"	,
"	exchanged	"	,	"	متبادل	"	,
"	excited	"	,	"	مثار	"	,
"	exciting	"	,	"	مثير	"	,
"	exclusive	"	,	"	حصرية	"	,
"	excuse	"	,	"	عذر	"	,
"	exercise	"	,	"	ممارسه الرياضه	"	,
"	exhausted	"	,	"	استنفد	"	,
"	exhaustion	"	,	"	إنهاك	"	,
"	expand	"	,	"	يتوسع	"	,
"	EXPANSION	"	,	"	توسع	"	,
"	expect	"	,	"	يتوقع	"	,
"	expected	"	,	"	متوقع	"	,
"	expensive	"	,	"	غالي	"	,
"	experience	"	,	"	خبرة	"	,
"	experienced	"	,	"	أختبر	"	,
"	experiences	"	,	"	خبرات	"	,
"	experiencing	"	,	"	يعاني	"	,
"	experimental	"	,	"	تجريبي	"	,
"	expert	"	,	"	خبير	"	,
"	explain	"	,	"	يشرح	"	,
"	explained	"	,	"	مشروح	"	,
"	explanation	"	,	"	شرح	"	,
"	explanations	"	,	"	تفسيرات	"	,
"	explode	"	,	"	ينفجر	"	,
"	exploration	"	,	"	استكشاف	"	,
"	exploring	"	,	"	يستكشف	"	,
"	export	"	,	"	يصدر	"	,
"	express	"	,	"	يعبر	"	,
"	expression	"	,	"	تعبير	"	,
"	extension	"	,	"	امتداد	"	,
"	exterior	"	,	"	خارجي	"	,
"	extra	"	,	"	إضافي	"	,
"	extreme	"	,	"	شديد	"	,
"	eye	"	,	"	عين	"	,
"	eye catching	"	,	"	لافتة للنظر	"	,
"	eyes	"	,	"	عيون	"	,


];

var WordQ = Words[NumA-1];
var WordA = Words[NumA];

var WordQ1 = Words[NumA1-1];
var WordA1 = Words[NumA1];

var WordQ2 = Words[NumA2-1];
var WordA2 = Words[NumA2];

var WordQ3 = Words[NumA3-1];
var WordA3 = Words[NumA3];

var WordQ4 = Words[NumA4-1];
var WordA4 = Words[NumA4];


player.SetVar("NumA",NumA);
player.SetVar("NumA1",NumA1);
player.SetVar("NumA2",NumA2);
player.SetVar("NumA3",NumA3);
player.SetVar("NumA4",NumA4);

player.SetVar("WordQ",WordQ);
player.SetVar("WordQ1",WordQ1);
player.SetVar("WordQ2",WordQ2);
player.SetVar("WordQ3",WordQ3);
player.SetVar("WordQ4",WordQ4);


player.SetVar("WordA",WordA);
player.SetVar("WordA1",WordA1);
player.SetVar("WordA2",WordA2);
player.SetVar("WordA3",WordA3);
player.SetVar("WordA4",WordA4);

}

function Script18()
{
  // Odd = Engligh question, next Even = Arabic answer;
// random is even for arabic answer;

var player = GetPlayer();

var Words = 142; 

var NumA= Math.floor(Math.random()*Words+1)*2;
var NumA1= Math.floor(Math.random()*Words+1)*2;
var NumA2= Math.floor(Math.random()*Words+1)*2;
var NumA3= Math.floor(Math.random()*Words+1)*2;
var NumA4= Math.floor(Math.random()*Words+1)*2;





if ( (NumA1 == NumA)  || (NumA1 ==  NumA2) || (NumA1 ==  NumA3) || (NumA1 ==  NumA4) ) {
  var NumA1= 0
}

if ( (NumA2 == NumA)  || (NumA2 ==  NumA1) || (NumA2 ==  NumA3) || (NumA2 ==  NumA4) ) {
  var NumA2=  0
}

if ( (NumA3 == NumA)  || (NumA3 ==  NumA1) || (NumA3 ==  NumA2) || (NumA3 ==  NumA4) ) {
  var NumA3= 0
}


if ( (NumA4 == NumA)  || (NumA4 ==  NumA1) || (NumA4 ==  NumA2) || (NumA4 ==  NumA3) ) {
  var NumA4= 0
}


var Words= [
"Free Answer for You",

"	each	"	,	"	كل	"	,
"	earlier	"	,	"	ابكر	"	,
"	early	"	,	"	مبكرا	"	,
"	earn	"	,	"	يكسب	"	,
"	earnings	"	,	"	أرباح	"	,
"	earthquake	"	,	"	هزة أرضية	"	,
"	easier	"	,	"	أسهل	"	,
"	easily	"	,	"	بسهولة	"	,
"	east	"	,	"	شرق	"	,
"	easy	"	,	"	سهل	"	,
"	eat	"	,	"	يأكل	"	,
"	eaten	"	,	"	مأكول	"	,
"	eater	"	,	"	آكل	"	,
"	eating	"	,	"	يتناول الطعام	"	,
"	eco friendly	"	,	"	صديقة للبيئة	"	,
"	economic	"	,	"	اقتصادي	"	,
"	economics	"	,	"	اقتصاديات	"	,
"	economy	"	,	"	اقتصاد	"	,
"	eddy	"	,	"	دوامة	"	,
"	edit	"	,	"	تعديل	"	,
"	edition	"	,	"	إصدار	"	,
"	editor	"	,	"	محرر	"	,
"	editorial	"	,	"	افتتاحية	"	,
"	editors	"	,	"	محررين	"	,
"	education	"	,	"	تعليم	"	,
"	educational	"	,	"	تربوي	"	,
"	effect	"	,	"	تأثير	"	,
"	effective	"	,	"	فعال	"	,
"	effects	"	,	"	تأثيرات	"	,
"	efficient	"	,	"	فعال	"	,
"	effort	"	,	"	مجهود	"	,
"	egg	"	,	"	بيضة	"	,
"	Egyptian	"	,	"	مصري	"	,
"	eight	"	,	"	ثمانية	"	,
"	either	"	,	"	إما	"	,
"	elder	"	,	"	مسن	"	,
"	elderly	"	,	"	كبار السن	"	,
"	electric	"	,	"	كهربائي	"	,
"	electrician	"	,	"	عامل الكهرباء	"	,
"	electronic	"	,	"	إلكتروني	"	,
"	elegant	"	,	"	أنيق	"	,
"	elevator	"	,	"	مصعد	"	,
"	else	"	,	"	آخر	"	,
"	emotional	"	,	"	عاطفي	"	,
"	emotions	"	,	"	عواطف	"	,
"	employees	"	,	"	موظفين	"	,
"	employers	"	,	"	أرباب العمل	"	,
"	emptiness	"	,	"	فراغ	"	,
"	empty	"	,	"	فارغة	"	,
"	enable	"	,	"	يمكن	"	,
"	encounter	"	,	"	يواجه ينجز	"	,
"	end	"	,	"	نهاية	"	,
"	ending	"	,	"	إنهاء	"	,
"	endings	"	,	"	نهايات	"	,
"	ends	"	,	"	ينتهي	"	,
"	energetic	"	,	"	نشيط	"	,
"	energy	"	,	"	طاقة	"	,
"	energy efficient	"	,	"	كفاءة الطاقة	"	,
"	engineer	"	,	"	مهندس	"	,
"	England	"	,	"	إنكلترا	"	,
"	English	"	,	"	إنجليزية	"	,
"	enhanced	"	,	"	محسن	"	,
"	enjoy	"	,	"	يستمتع	"	,
"	enjoyable	"	,	"	ممتع	"	,
"	enjoyed	"	,	"	استمتعت	"	,
"	enjoying	"	,	"	تتمتع	"	,
"	enough	"	,	"	كاف	"	,
"	ensure	"	,	"	التأكد من	"	,
"	enter	"	,	"	يدخل	"	,
"	entering	"	,	"	دخول	"	,
"	entertainment	"	,	"	ترفيه	"	,
"	enthusiastic	"	,	"	متحمس	"	,
"	entire	"	,	"	بأكمله	"	,
"	entrepreneurs	"	,	"	رجال الأعمال	"	,
"	entries	"	,	"	إدخالات	"	,
"	entry	"	,	"	دخول	"	,
"	environment	"	,	"	بيئة	"	,
"	environments	"	,	"	بيئات	"	,
"	equal	"	,	"	مساو	"	,
"	escalator	"	,	"	سلم كهربائى	"	,
"	escalators	"	,	"	السلالم المتحركة	"	,
"	especially	"	,	"	خصوصا	"	,
"	essay	"	,	"	مقال	"	,
"	establish	"	,	"	ينشئ	"	,
"	established	"	,	"	أنشئت	"	,
"	establishing	"	,	"	تأسيس	"	,
"	etc	"	,	"	إلخ	"	,
"	etchings	"	,	"	ختوم	"	,
"	Europe	"	,	"	أوروبا	"	,
"	Europeans	"	,	"	الأوروبيون	"	,
"	even	"	,	"	حتى	"	,
"	evening	"	,	"	اخر النهار	"	,
"	events	"	,	"	أحداث	"	,
"	eventually	"	,	"	في النهاية	"	,
"	ever	"	,	"	أبدا	"	,
"	every	"	,	"	كل	"	,
"	everyday	"	,	"	كل يوم	"	,
"	everyone	"	,	"	الجميع	"	,
"	everything	"	,	"	كل شىء	"	,
"	evidence	"	,	"	دليل	"	,
"	exactly	"	,	"	بالضبط	"	,
"	exam	"	,	"	امتحان	"	,
"	examiner	"	,	"	ممتحن	"	,
"	examples	"	,	"	أمثلة	"	,
"	exceptional	"	,	"	استثنائي	"	,
"	exchange	"	,	"	تبادل	"	,
"	exchanged	"	,	"	متبادل	"	,
"	excited	"	,	"	مثار	"	,
"	exciting	"	,	"	مثير	"	,
"	exclusive	"	,	"	حصرية	"	,
"	excuse	"	,	"	عذر	"	,
"	exercise	"	,	"	ممارسه الرياضه	"	,
"	exhausted	"	,	"	استنفد	"	,
"	exhaustion	"	,	"	إنهاك	"	,
"	expand	"	,	"	يتوسع	"	,
"	EXPANSION	"	,	"	توسع	"	,
"	expect	"	,	"	يتوقع	"	,
"	expected	"	,	"	متوقع	"	,
"	expensive	"	,	"	غالي	"	,
"	experience	"	,	"	خبرة	"	,
"	experienced	"	,	"	أختبر	"	,
"	experiences	"	,	"	خبرات	"	,
"	experiencing	"	,	"	يعاني	"	,
"	experimental	"	,	"	تجريبي	"	,
"	expert	"	,	"	خبير	"	,
"	explain	"	,	"	يشرح	"	,
"	explained	"	,	"	مشروح	"	,
"	explanation	"	,	"	شرح	"	,
"	explanations	"	,	"	تفسيرات	"	,
"	explode	"	,	"	ينفجر	"	,
"	exploration	"	,	"	استكشاف	"	,
"	exploring	"	,	"	يستكشف	"	,
"	export	"	,	"	يصدر	"	,
"	express	"	,	"	يعبر	"	,
"	expression	"	,	"	تعبير	"	,
"	extension	"	,	"	امتداد	"	,
"	exterior	"	,	"	خارجي	"	,
"	extra	"	,	"	إضافي	"	,
"	extreme	"	,	"	شديد	"	,
"	eye	"	,	"	عين	"	,
"	eye catching	"	,	"	لافتة للنظر	"	,
"	eyes	"	,	"	عيون	"	,


];

var WordQ = Words[NumA-1];
var WordA = Words[NumA];

var WordQ1 = Words[NumA1-1];
var WordA1 = Words[NumA1];

var WordQ2 = Words[NumA2-1];
var WordA2 = Words[NumA2];

var WordQ3 = Words[NumA3-1];
var WordA3 = Words[NumA3];

var WordQ4 = Words[NumA4-1];
var WordA4 = Words[NumA4];


player.SetVar("NumA",NumA);
player.SetVar("NumA1",NumA1);
player.SetVar("NumA2",NumA2);
player.SetVar("NumA3",NumA3);
player.SetVar("NumA4",NumA4);

player.SetVar("WordQ",WordQ);
player.SetVar("WordQ1",WordQ1);
player.SetVar("WordQ2",WordQ2);
player.SetVar("WordQ3",WordQ3);
player.SetVar("WordQ4",WordQ4);


player.SetVar("WordA",WordA);
player.SetVar("WordA1",WordA1);
player.SetVar("WordA2",WordA2);
player.SetVar("WordA3",WordA3);
player.SetVar("WordA4",WordA4);

}

function Script19()
{
  // Odd = Engligh question, next Even = Arabic answer;
// random is even for arabic answer;

var player = GetPlayer();

var Words = 142; 

var NumA= Math.floor(Math.random()*Words+1)*2;
var NumA1= Math.floor(Math.random()*Words+1)*2;
var NumA2= Math.floor(Math.random()*Words+1)*2;
var NumA3= Math.floor(Math.random()*Words+1)*2;
var NumA4= Math.floor(Math.random()*Words+1)*2;





if ( (NumA1 == NumA)  || (NumA1 ==  NumA2) || (NumA1 ==  NumA3) || (NumA1 ==  NumA4) ) {
  var NumA1= 0
}

if ( (NumA2 == NumA)  || (NumA2 ==  NumA1) || (NumA2 ==  NumA3) || (NumA2 ==  NumA4) ) {
  var NumA2=  0
}

if ( (NumA3 == NumA)  || (NumA3 ==  NumA1) || (NumA3 ==  NumA2) || (NumA3 ==  NumA4) ) {
  var NumA3= 0
}


if ( (NumA4 == NumA)  || (NumA4 ==  NumA1) || (NumA4 ==  NumA2) || (NumA4 ==  NumA3) ) {
  var NumA4= 0
}


var Words= [
"Free Answer for You",

"	each	"	,	"	كل	"	,
"	earlier	"	,	"	ابكر	"	,
"	early	"	,	"	مبكرا	"	,
"	earn	"	,	"	يكسب	"	,
"	earnings	"	,	"	أرباح	"	,
"	earthquake	"	,	"	هزة أرضية	"	,
"	easier	"	,	"	أسهل	"	,
"	easily	"	,	"	بسهولة	"	,
"	east	"	,	"	شرق	"	,
"	easy	"	,	"	سهل	"	,
"	eat	"	,	"	يأكل	"	,
"	eaten	"	,	"	مأكول	"	,
"	eater	"	,	"	آكل	"	,
"	eating	"	,	"	يتناول الطعام	"	,
"	eco friendly	"	,	"	صديقة للبيئة	"	,
"	economic	"	,	"	اقتصادي	"	,
"	economics	"	,	"	اقتصاديات	"	,
"	economy	"	,	"	اقتصاد	"	,
"	eddy	"	,	"	دوامة	"	,
"	edit	"	,	"	تعديل	"	,
"	edition	"	,	"	إصدار	"	,
"	editor	"	,	"	محرر	"	,
"	editorial	"	,	"	افتتاحية	"	,
"	editors	"	,	"	محررين	"	,
"	education	"	,	"	تعليم	"	,
"	educational	"	,	"	تربوي	"	,
"	effect	"	,	"	تأثير	"	,
"	effective	"	,	"	فعال	"	,
"	effects	"	,	"	تأثيرات	"	,
"	efficient	"	,	"	فعال	"	,
"	effort	"	,	"	مجهود	"	,
"	egg	"	,	"	بيضة	"	,
"	Egyptian	"	,	"	مصري	"	,
"	eight	"	,	"	ثمانية	"	,
"	either	"	,	"	إما	"	,
"	elder	"	,	"	مسن	"	,
"	elderly	"	,	"	كبار السن	"	,
"	electric	"	,	"	كهربائي	"	,
"	electrician	"	,	"	عامل الكهرباء	"	,
"	electronic	"	,	"	إلكتروني	"	,
"	elegant	"	,	"	أنيق	"	,
"	elevator	"	,	"	مصعد	"	,
"	else	"	,	"	آخر	"	,
"	emotional	"	,	"	عاطفي	"	,
"	emotions	"	,	"	عواطف	"	,
"	employees	"	,	"	موظفين	"	,
"	employers	"	,	"	أرباب العمل	"	,
"	emptiness	"	,	"	فراغ	"	,
"	empty	"	,	"	فارغة	"	,
"	enable	"	,	"	يمكن	"	,
"	encounter	"	,	"	يواجه ينجز	"	,
"	end	"	,	"	نهاية	"	,
"	ending	"	,	"	إنهاء	"	,
"	endings	"	,	"	نهايات	"	,
"	ends	"	,	"	ينتهي	"	,
"	energetic	"	,	"	نشيط	"	,
"	energy	"	,	"	طاقة	"	,
"	energy efficient	"	,	"	كفاءة الطاقة	"	,
"	engineer	"	,	"	مهندس	"	,
"	England	"	,	"	إنكلترا	"	,
"	English	"	,	"	إنجليزية	"	,
"	enhanced	"	,	"	محسن	"	,
"	enjoy	"	,	"	يستمتع	"	,
"	enjoyable	"	,	"	ممتع	"	,
"	enjoyed	"	,	"	استمتعت	"	,
"	enjoying	"	,	"	تتمتع	"	,
"	enough	"	,	"	كاف	"	,
"	ensure	"	,	"	التأكد من	"	,
"	enter	"	,	"	يدخل	"	,
"	entering	"	,	"	دخول	"	,
"	entertainment	"	,	"	ترفيه	"	,
"	enthusiastic	"	,	"	متحمس	"	,
"	entire	"	,	"	بأكمله	"	,
"	entrepreneurs	"	,	"	رجال الأعمال	"	,
"	entries	"	,	"	إدخالات	"	,
"	entry	"	,	"	دخول	"	,
"	environment	"	,	"	بيئة	"	,
"	environments	"	,	"	بيئات	"	,
"	equal	"	,	"	مساو	"	,
"	escalator	"	,	"	سلم كهربائى	"	,
"	escalators	"	,	"	السلالم المتحركة	"	,
"	especially	"	,	"	خصوصا	"	,
"	essay	"	,	"	مقال	"	,
"	establish	"	,	"	ينشئ	"	,
"	established	"	,	"	أنشئت	"	,
"	establishing	"	,	"	تأسيس	"	,
"	etc	"	,	"	إلخ	"	,
"	etchings	"	,	"	ختوم	"	,
"	Europe	"	,	"	أوروبا	"	,
"	Europeans	"	,	"	الأوروبيون	"	,
"	even	"	,	"	حتى	"	,
"	evening	"	,	"	اخر النهار	"	,
"	events	"	,	"	أحداث	"	,
"	eventually	"	,	"	في النهاية	"	,
"	ever	"	,	"	أبدا	"	,
"	every	"	,	"	كل	"	,
"	everyday	"	,	"	كل يوم	"	,
"	everyone	"	,	"	الجميع	"	,
"	everything	"	,	"	كل شىء	"	,
"	evidence	"	,	"	دليل	"	,
"	exactly	"	,	"	بالضبط	"	,
"	exam	"	,	"	امتحان	"	,
"	examiner	"	,	"	ممتحن	"	,
"	examples	"	,	"	أمثلة	"	,
"	exceptional	"	,	"	استثنائي	"	,
"	exchange	"	,	"	تبادل	"	,
"	exchanged	"	,	"	متبادل	"	,
"	excited	"	,	"	مثار	"	,
"	exciting	"	,	"	مثير	"	,
"	exclusive	"	,	"	حصرية	"	,
"	excuse	"	,	"	عذر	"	,
"	exercise	"	,	"	ممارسه الرياضه	"	,
"	exhausted	"	,	"	استنفد	"	,
"	exhaustion	"	,	"	إنهاك	"	,
"	expand	"	,	"	يتوسع	"	,
"	EXPANSION	"	,	"	توسع	"	,
"	expect	"	,	"	يتوقع	"	,
"	expected	"	,	"	متوقع	"	,
"	expensive	"	,	"	غالي	"	,
"	experience	"	,	"	خبرة	"	,
"	experienced	"	,	"	أختبر	"	,
"	experiences	"	,	"	خبرات	"	,
"	experiencing	"	,	"	يعاني	"	,
"	experimental	"	,	"	تجريبي	"	,
"	expert	"	,	"	خبير	"	,
"	explain	"	,	"	يشرح	"	,
"	explained	"	,	"	مشروح	"	,
"	explanation	"	,	"	شرح	"	,
"	explanations	"	,	"	تفسيرات	"	,
"	explode	"	,	"	ينفجر	"	,
"	exploration	"	,	"	استكشاف	"	,
"	exploring	"	,	"	يستكشف	"	,
"	export	"	,	"	يصدر	"	,
"	express	"	,	"	يعبر	"	,
"	expression	"	,	"	تعبير	"	,
"	extension	"	,	"	امتداد	"	,
"	exterior	"	,	"	خارجي	"	,
"	extra	"	,	"	إضافي	"	,
"	extreme	"	,	"	شديد	"	,
"	eye	"	,	"	عين	"	,
"	eye catching	"	,	"	لافتة للنظر	"	,
"	eyes	"	,	"	عيون	"	,


];

var WordQ = Words[NumA-1];
var WordA = Words[NumA];

var WordQ1 = Words[NumA1-1];
var WordA1 = Words[NumA1];

var WordQ2 = Words[NumA2-1];
var WordA2 = Words[NumA2];

var WordQ3 = Words[NumA3-1];
var WordA3 = Words[NumA3];

var WordQ4 = Words[NumA4-1];
var WordA4 = Words[NumA4];


player.SetVar("NumA",NumA);
player.SetVar("NumA1",NumA1);
player.SetVar("NumA2",NumA2);
player.SetVar("NumA3",NumA3);
player.SetVar("NumA4",NumA4);

player.SetVar("WordQ",WordQ);
player.SetVar("WordQ1",WordQ1);
player.SetVar("WordQ2",WordQ2);
player.SetVar("WordQ3",WordQ3);
player.SetVar("WordQ4",WordQ4);


player.SetVar("WordA",WordA);
player.SetVar("WordA1",WordA1);
player.SetVar("WordA2",WordA2);
player.SetVar("WordA3",WordA3);
player.SetVar("WordA4",WordA4);

}

function Script20()
{
  // Odd = Engligh question, next Even = Arabic answer;
// random is even for arabic answer;

var player = GetPlayer();

var Words = 142; 

var NumA= Math.floor(Math.random()*Words+1)*2;
var NumA1= Math.floor(Math.random()*Words+1)*2;
var NumA2= Math.floor(Math.random()*Words+1)*2;
var NumA3= Math.floor(Math.random()*Words+1)*2;
var NumA4= Math.floor(Math.random()*Words+1)*2;





if ( (NumA1 == NumA)  || (NumA1 ==  NumA2) || (NumA1 ==  NumA3) || (NumA1 ==  NumA4) ) {
  var NumA1= 0
}

if ( (NumA2 == NumA)  || (NumA2 ==  NumA1) || (NumA2 ==  NumA3) || (NumA2 ==  NumA4) ) {
  var NumA2=  0
}

if ( (NumA3 == NumA)  || (NumA3 ==  NumA1) || (NumA3 ==  NumA2) || (NumA3 ==  NumA4) ) {
  var NumA3= 0
}


if ( (NumA4 == NumA)  || (NumA4 ==  NumA1) || (NumA4 ==  NumA2) || (NumA4 ==  NumA3) ) {
  var NumA4= 0
}


var Words= [
"Free Answer for You",

"	each	"	,	"	كل	"	,
"	earlier	"	,	"	ابكر	"	,
"	early	"	,	"	مبكرا	"	,
"	earn	"	,	"	يكسب	"	,
"	earnings	"	,	"	أرباح	"	,
"	earthquake	"	,	"	هزة أرضية	"	,
"	easier	"	,	"	أسهل	"	,
"	easily	"	,	"	بسهولة	"	,
"	east	"	,	"	شرق	"	,
"	easy	"	,	"	سهل	"	,
"	eat	"	,	"	يأكل	"	,
"	eaten	"	,	"	مأكول	"	,
"	eater	"	,	"	آكل	"	,
"	eating	"	,	"	يتناول الطعام	"	,
"	eco friendly	"	,	"	صديقة للبيئة	"	,
"	economic	"	,	"	اقتصادي	"	,
"	economics	"	,	"	اقتصاديات	"	,
"	economy	"	,	"	اقتصاد	"	,
"	eddy	"	,	"	دوامة	"	,
"	edit	"	,	"	تعديل	"	,
"	edition	"	,	"	إصدار	"	,
"	editor	"	,	"	محرر	"	,
"	editorial	"	,	"	افتتاحية	"	,
"	editors	"	,	"	محررين	"	,
"	education	"	,	"	تعليم	"	,
"	educational	"	,	"	تربوي	"	,
"	effect	"	,	"	تأثير	"	,
"	effective	"	,	"	فعال	"	,
"	effects	"	,	"	تأثيرات	"	,
"	efficient	"	,	"	فعال	"	,
"	effort	"	,	"	مجهود	"	,
"	egg	"	,	"	بيضة	"	,
"	Egyptian	"	,	"	مصري	"	,
"	eight	"	,	"	ثمانية	"	,
"	either	"	,	"	إما	"	,
"	elder	"	,	"	مسن	"	,
"	elderly	"	,	"	كبار السن	"	,
"	electric	"	,	"	كهربائي	"	,
"	electrician	"	,	"	عامل الكهرباء	"	,
"	electronic	"	,	"	إلكتروني	"	,
"	elegant	"	,	"	أنيق	"	,
"	elevator	"	,	"	مصعد	"	,
"	else	"	,	"	آخر	"	,
"	emotional	"	,	"	عاطفي	"	,
"	emotions	"	,	"	عواطف	"	,
"	employees	"	,	"	موظفين	"	,
"	employers	"	,	"	أرباب العمل	"	,
"	emptiness	"	,	"	فراغ	"	,
"	empty	"	,	"	فارغة	"	,
"	enable	"	,	"	يمكن	"	,
"	encounter	"	,	"	يواجه ينجز	"	,
"	end	"	,	"	نهاية	"	,
"	ending	"	,	"	إنهاء	"	,
"	endings	"	,	"	نهايات	"	,
"	ends	"	,	"	ينتهي	"	,
"	energetic	"	,	"	نشيط	"	,
"	energy	"	,	"	طاقة	"	,
"	energy efficient	"	,	"	كفاءة الطاقة	"	,
"	engineer	"	,	"	مهندس	"	,
"	England	"	,	"	إنكلترا	"	,
"	English	"	,	"	إنجليزية	"	,
"	enhanced	"	,	"	محسن	"	,
"	enjoy	"	,	"	يستمتع	"	,
"	enjoyable	"	,	"	ممتع	"	,
"	enjoyed	"	,	"	استمتعت	"	,
"	enjoying	"	,	"	تتمتع	"	,
"	enough	"	,	"	كاف	"	,
"	ensure	"	,	"	التأكد من	"	,
"	enter	"	,	"	يدخل	"	,
"	entering	"	,	"	دخول	"	,
"	entertainment	"	,	"	ترفيه	"	,
"	enthusiastic	"	,	"	متحمس	"	,
"	entire	"	,	"	بأكمله	"	,
"	entrepreneurs	"	,	"	رجال الأعمال	"	,
"	entries	"	,	"	إدخالات	"	,
"	entry	"	,	"	دخول	"	,
"	environment	"	,	"	بيئة	"	,
"	environments	"	,	"	بيئات	"	,
"	equal	"	,	"	مساو	"	,
"	escalator	"	,	"	سلم كهربائى	"	,
"	escalators	"	,	"	السلالم المتحركة	"	,
"	especially	"	,	"	خصوصا	"	,
"	essay	"	,	"	مقال	"	,
"	establish	"	,	"	ينشئ	"	,
"	established	"	,	"	أنشئت	"	,
"	establishing	"	,	"	تأسيس	"	,
"	etc	"	,	"	إلخ	"	,
"	etchings	"	,	"	ختوم	"	,
"	Europe	"	,	"	أوروبا	"	,
"	Europeans	"	,	"	الأوروبيون	"	,
"	even	"	,	"	حتى	"	,
"	evening	"	,	"	اخر النهار	"	,
"	events	"	,	"	أحداث	"	,
"	eventually	"	,	"	في النهاية	"	,
"	ever	"	,	"	أبدا	"	,
"	every	"	,	"	كل	"	,
"	everyday	"	,	"	كل يوم	"	,
"	everyone	"	,	"	الجميع	"	,
"	everything	"	,	"	كل شىء	"	,
"	evidence	"	,	"	دليل	"	,
"	exactly	"	,	"	بالضبط	"	,
"	exam	"	,	"	امتحان	"	,
"	examiner	"	,	"	ممتحن	"	,
"	examples	"	,	"	أمثلة	"	,
"	exceptional	"	,	"	استثنائي	"	,
"	exchange	"	,	"	تبادل	"	,
"	exchanged	"	,	"	متبادل	"	,
"	excited	"	,	"	مثار	"	,
"	exciting	"	,	"	مثير	"	,
"	exclusive	"	,	"	حصرية	"	,
"	excuse	"	,	"	عذر	"	,
"	exercise	"	,	"	ممارسه الرياضه	"	,
"	exhausted	"	,	"	استنفد	"	,
"	exhaustion	"	,	"	إنهاك	"	,
"	expand	"	,	"	يتوسع	"	,
"	EXPANSION	"	,	"	توسع	"	,
"	expect	"	,	"	يتوقع	"	,
"	expected	"	,	"	متوقع	"	,
"	expensive	"	,	"	غالي	"	,
"	experience	"	,	"	خبرة	"	,
"	experienced	"	,	"	أختبر	"	,
"	experiences	"	,	"	خبرات	"	,
"	experiencing	"	,	"	يعاني	"	,
"	experimental	"	,	"	تجريبي	"	,
"	expert	"	,	"	خبير	"	,
"	explain	"	,	"	يشرح	"	,
"	explained	"	,	"	مشروح	"	,
"	explanation	"	,	"	شرح	"	,
"	explanations	"	,	"	تفسيرات	"	,
"	explode	"	,	"	ينفجر	"	,
"	exploration	"	,	"	استكشاف	"	,
"	exploring	"	,	"	يستكشف	"	,
"	export	"	,	"	يصدر	"	,
"	express	"	,	"	يعبر	"	,
"	expression	"	,	"	تعبير	"	,
"	extension	"	,	"	امتداد	"	,
"	exterior	"	,	"	خارجي	"	,
"	extra	"	,	"	إضافي	"	,
"	extreme	"	,	"	شديد	"	,
"	eye	"	,	"	عين	"	,
"	eye catching	"	,	"	لافتة للنظر	"	,
"	eyes	"	,	"	عيون	"	,


];

var WordQ = Words[NumA-1];
var WordA = Words[NumA];

var WordQ1 = Words[NumA1-1];
var WordA1 = Words[NumA1];

var WordQ2 = Words[NumA2-1];
var WordA2 = Words[NumA2];

var WordQ3 = Words[NumA3-1];
var WordA3 = Words[NumA3];

var WordQ4 = Words[NumA4-1];
var WordA4 = Words[NumA4];


player.SetVar("NumA",NumA);
player.SetVar("NumA1",NumA1);
player.SetVar("NumA2",NumA2);
player.SetVar("NumA3",NumA3);
player.SetVar("NumA4",NumA4);

player.SetVar("WordQ",WordQ);
player.SetVar("WordQ1",WordQ1);
player.SetVar("WordQ2",WordQ2);
player.SetVar("WordQ3",WordQ3);
player.SetVar("WordQ4",WordQ4);


player.SetVar("WordA",WordA);
player.SetVar("WordA1",WordA1);
player.SetVar("WordA2",WordA2);
player.SetVar("WordA3",WordA3);
player.SetVar("WordA4",WordA4);

}

function Script21()
{
  // Odd = Engligh question, next Even = Arabic answer;
// random is even for arabic answer;

var player = GetPlayer();

var Words = 131; 

var NumA= Math.floor(Math.random()*Words+1)*2;
var NumA1= Math.floor(Math.random()*Words+1)*2;
var NumA2= Math.floor(Math.random()*Words+1)*2;
var NumA3= Math.floor(Math.random()*Words+1)*2;
var NumA4= Math.floor(Math.random()*Words+1)*2;







if ( (NumA1 == NumA)  || (NumA1 ==  NumA2) || (NumA1 ==  NumA3) || (NumA1 ==  NumA4) ) {
  var NumA1= 0
}

if ( (NumA2 == NumA)  || (NumA2 ==  NumA1) || (NumA2 ==  NumA3) || (NumA2 ==  NumA4) ) {
  var NumA2=  0
}

if ( (NumA3 == NumA)  || (NumA3 ==  NumA1) || (NumA3 ==  NumA2) || (NumA3 ==  NumA4) ) {
  var NumA3= 0
}


if ( (NumA4 == NumA)  || (NumA4 ==  NumA1) || (NumA4 ==  NumA2) || (NumA4 ==  NumA3) ) {
  var NumA4= 0
}


var Words= [
"Free Answer for You",


"	face	"	,	"	وجه	"	,
"	facilitate	"	,	"	يسهل	"	,
"	facilities	"	,	"	مرافق	"	,
"	fact	"	,	"	حقيقة	"	,
"	factories	"	,	"	مصانع	"	,
"	factors	"	,	"	عوامل	"	,
"	factory	"	,	"	مصنع	"	,
"	facts	"	,	"	حقائق	"	,
"	fail	"	,	"	يفشل	"	,
"	failed	"	,	"	فشل	"	,
"	failing	"	,	"	اخفاق	"	,
"	fair	"	,	"	عدل	"	,
"	fake	"	,	"	مزيف	"	,
"	fall	"	,	"	خريف	"	,
"	fallen	"	,	"	سقط	"	,
"	falls	"	,	"	يسقط	"	,
"	familiar	"	,	"	معروف	"	,
"	families	"	,	"	أسر	"	,
"	family	"	,	"	أسرة	"	,
"	famous	"	,	"	مشهور	"	,
"	fan	"	,	"	معجب	"	,
"	fans	"	,	"	مشجعين	"	,
"	far	"	,	"	بعيدا	"	,
"	farm	"	,	"	مزرعة	"	,
"	farmer	"	,	"	مزارع	"	,
"	fashionable	"	,	"	موضة	"	,
"	fast	"	,	"	سريع	"	,
"	faster	"	,	"	أسرع	"	,
"	father	"	,	"	الاب	"	,
"	favorite	"	,	"	المفضل	"	,
"	feather	"	,	"	ريشة	"	,
"	feature	"	,	"	خاصية	"	,
"	features	"	,	"	سمات	"	,
"	fed	"	,	"	تغذيها	"	,
"	feed	"	,	"	تغذية	"	,
"	feel	"	,	"	شعور	"	,
"	feeling	"	,	"	شعور	"	,
"	feelings	"	,	"	مشاعر	"	,
"	feels	"	,	"	يشعر	"	,
"	fees	"	,	"	مصاريف	"	,
"	feet	"	,	"	القدمين	"	,
"	fell	"	,	"	سقط	"	,
"	felt	"	,	"	شعور	"	,
"	female	"	,	"	أنثى	"	,
"	festive	"	,	"	احتفالي	"	,
"	few	"	,	"	قليل	"	,
"	field	"	,	"	حقل	"	,
"	fifteenth	"	,	"	خامس عشر	"	,
"	fight	"	,	"	يقاتل	"	,
"	figure	"	,	"	شكل	"	,
"	fill	"	,	"	ملء	"	,
"	finally	"	,	"	أخيرا	"	,
"	finance	"	,	"	يمول	"	,
"	find	"	,	"	يجد	"	,
"	finding	"	,	"	عثور على	"	,
"	findings	"	,	"	موجودات	"	,
"	finds	"	,	"	يجد	"	,
"	fine	"	,	"	بخير	"	,
"	finger	"	,	"	اصبع اليد	"	,
"	fingers	"	,	"	أصابع	"	,
"	finish	"	,	"	إنهاء	"	,
"	finished	"	,	"	تم الانتهاء من	"	,
"	first	"	,	"	أول	"	,
"	fish	"	,	"	سمك	"	,
"	fishing	"	,	"	صيد السمك	"	,
"	fit	"	,	"	لائق بدنيا	"	,
"	fitting	"	,	"	مناسب	"	,
"	five	"	,	"	خمسة	"	,
"	fix	"	,	"	يصلح	"	,
"	flash	"	,	"	فلاش	"	,
"	flew	"	,	"	طار	"	,
"	flexible	"	,	"	مرن	"	,
"	flight	"	,	"	طيران	"	,
"	float	"	,	"	يطفو	"	,
"	floor	"	,	"	ارض	"	,
"	flour	"	,	"	دقيق	"	,
"	flowers	"	,	"	زهور	"	,
"	flown	"	,	"	طار	"	,
"	fluently	"	,	"	بطلاقة	"	,
"	fly	"	,	"	يطير	"	,
"	flyers	"	,	"	نشرات	"	,
"	focus	"	,	"	التركيز	"	,
"	focuses	"	,	"	يركز	"	,
"	follow	"	,	"	يتبع	"	,
"	followed	"	,	"	مبوع	"	,
"	following	"	,	"	تابع	"	,
"	food	"	,	"	غذاء	"	,
"	football	"	,	"	كرة القدم	"	,
"	for	"	,	"	إلى عن على	"	,
"	force	"	,	"	قوة	"	,
"	foreign	"	,	"	أجنبي	"	,
"	forever	"	,	"	إلى الأبد	"	,
"	forget	"	,	"	ينسى	"	,
"	forgot	"	,	"	نسيت	"	,
"	fork	"	,	"	شوكة	"	,
"	forks	"	,	"	الشوك	"	,
"	form	"	,	"	شكل	"	,
"	formal	"	,	"	رسمي	"	,
"	format	"	,	"	صيغة	"	,
"	formed	"	,	"	شكلت	"	,
"	forms	"	,	"	نماذج	"	,
"	fortunately	"	,	"	لحسن الحظ	"	,
"	forum	"	,	"	منتدى	"	,
"	fought	"	,	"	قاتل	"	,
"	found	"	,	"	وجدت	"	,
"	founded	"	,	"	مؤسس	"	,
"	fourdoor	"	,	"	أربعة أبواب	"	,
"	France	"	,	"	فرنسا	"	,
"	free	"	,	"	مجانا	"	,
"	freedom	"	,	"	حرية	"	,
"	freely	"	,	"	بحرية	"	,
"	freeze	"	,	"	يتجمد	"	,
"	freezer	"	,	"	فريزر	"	,
"	French	"	,	"	فرنسي	"	,
"	frequent	"	,	"	متكرر	"	,
"	Friday	"	,	"	جمعة	"	,
"	friend	"	,	"	صديق	"	,
"	friendship	"	,	"	صداقة	"	,
"	from	"	,	"	من	"	,
"	front	"	,	"	أمامي	"	,
"	fruit	"	,	"	فاكهة	"	,
"	frustrating	"	,	"	محبط	"	,
"	frying	"	,	"	قلي	"	,
"	fulfill	"	,	"	يتحقيق	"	,
"	full	"	,	"	ممتلىء	"	,
"	fun	"	,	"	مرح	"	,
"	function	"	,	"	وظيفة	"	,
"	functions	"	,	"	مهام	"	,
"	funny	"	,	"	مضحك	"	,
"	furniture	"	,	"	أثاث المنزل	"	,
"	future	"	,	"	مستقبل	"	,


];

var WordQ = Words[NumA-1];
var WordA = Words[NumA];

var WordQ1 = Words[NumA1-1];
var WordA1 = Words[NumA1];

var WordQ2 = Words[NumA2-1];
var WordA2 = Words[NumA2];

var WordQ3 = Words[NumA3-1];
var WordA3 = Words[NumA3];

var WordQ4 = Words[NumA4-1];
var WordA4 = Words[NumA4];


player.SetVar("NumA",NumA);
player.SetVar("NumA1",NumA1);
player.SetVar("NumA2",NumA2);
player.SetVar("NumA3",NumA3);
player.SetVar("NumA4",NumA4);

player.SetVar("WordQ",WordQ);
player.SetVar("WordQ1",WordQ1);
player.SetVar("WordQ2",WordQ2);
player.SetVar("WordQ3",WordQ3);
player.SetVar("WordQ4",WordQ4);


player.SetVar("WordA",WordA);
player.SetVar("WordA1",WordA1);
player.SetVar("WordA2",WordA2);
player.SetVar("WordA3",WordA3);
player.SetVar("WordA4",WordA4);

}

function Script22()
{
  // Odd = Engligh question, next Even = Arabic answer;
// random is even for arabic answer;

var player = GetPlayer();

var Words = 131; 

var NumA= Math.floor(Math.random()*Words+1)*2;
var NumA1= Math.floor(Math.random()*Words+1)*2;
var NumA2= Math.floor(Math.random()*Words+1)*2;
var NumA3= Math.floor(Math.random()*Words+1)*2;
var NumA4= Math.floor(Math.random()*Words+1)*2;







if ( (NumA1 == NumA)  || (NumA1 ==  NumA2) || (NumA1 ==  NumA3) || (NumA1 ==  NumA4) ) {
  var NumA1= 0
}

if ( (NumA2 == NumA)  || (NumA2 ==  NumA1) || (NumA2 ==  NumA3) || (NumA2 ==  NumA4) ) {
  var NumA2=  0
}

if ( (NumA3 == NumA)  || (NumA3 ==  NumA1) || (NumA3 ==  NumA2) || (NumA3 ==  NumA4) ) {
  var NumA3= 0
}


if ( (NumA4 == NumA)  || (NumA4 ==  NumA1) || (NumA4 ==  NumA2) || (NumA4 ==  NumA3) ) {
  var NumA4= 0
}


var Words= [
"Free Answer for You",


"	face	"	,	"	وجه	"	,
"	facilitate	"	,	"	يسهل	"	,
"	facilities	"	,	"	مرافق	"	,
"	fact	"	,	"	حقيقة	"	,
"	factories	"	,	"	مصانع	"	,
"	factors	"	,	"	عوامل	"	,
"	factory	"	,	"	مصنع	"	,
"	facts	"	,	"	حقائق	"	,
"	fail	"	,	"	يفشل	"	,
"	failed	"	,	"	فشل	"	,
"	failing	"	,	"	اخفاق	"	,
"	fair	"	,	"	عدل	"	,
"	fake	"	,	"	مزيف	"	,
"	fall	"	,	"	خريف	"	,
"	fallen	"	,	"	سقط	"	,
"	falls	"	,	"	يسقط	"	,
"	familiar	"	,	"	معروف	"	,
"	families	"	,	"	أسر	"	,
"	family	"	,	"	أسرة	"	,
"	famous	"	,	"	مشهور	"	,
"	fan	"	,	"	معجب	"	,
"	fans	"	,	"	مشجعين	"	,
"	far	"	,	"	بعيدا	"	,
"	farm	"	,	"	مزرعة	"	,
"	farmer	"	,	"	مزارع	"	,
"	fashionable	"	,	"	موضة	"	,
"	fast	"	,	"	سريع	"	,
"	faster	"	,	"	أسرع	"	,
"	father	"	,	"	الاب	"	,
"	favorite	"	,	"	المفضل	"	,
"	feather	"	,	"	ريشة	"	,
"	feature	"	,	"	خاصية	"	,
"	features	"	,	"	سمات	"	,
"	fed	"	,	"	تغذيها	"	,
"	feed	"	,	"	تغذية	"	,
"	feel	"	,	"	شعور	"	,
"	feeling	"	,	"	شعور	"	,
"	feelings	"	,	"	مشاعر	"	,
"	feels	"	,	"	يشعر	"	,
"	fees	"	,	"	مصاريف	"	,
"	feet	"	,	"	القدمين	"	,
"	fell	"	,	"	سقط	"	,
"	felt	"	,	"	شعور	"	,
"	female	"	,	"	أنثى	"	,
"	festive	"	,	"	احتفالي	"	,
"	few	"	,	"	قليل	"	,
"	field	"	,	"	حقل	"	,
"	fifteenth	"	,	"	خامس عشر	"	,
"	fight	"	,	"	يقاتل	"	,
"	figure	"	,	"	شكل	"	,
"	fill	"	,	"	ملء	"	,
"	finally	"	,	"	أخيرا	"	,
"	finance	"	,	"	يمول	"	,
"	find	"	,	"	يجد	"	,
"	finding	"	,	"	عثور على	"	,
"	findings	"	,	"	موجودات	"	,
"	finds	"	,	"	يجد	"	,
"	fine	"	,	"	بخير	"	,
"	finger	"	,	"	اصبع اليد	"	,
"	fingers	"	,	"	أصابع	"	,
"	finish	"	,	"	إنهاء	"	,
"	finished	"	,	"	تم الانتهاء من	"	,
"	first	"	,	"	أول	"	,
"	fish	"	,	"	سمك	"	,
"	fishing	"	,	"	صيد السمك	"	,
"	fit	"	,	"	لائق بدنيا	"	,
"	fitting	"	,	"	مناسب	"	,
"	five	"	,	"	خمسة	"	,
"	fix	"	,	"	يصلح	"	,
"	flash	"	,	"	فلاش	"	,
"	flew	"	,	"	طار	"	,
"	flexible	"	,	"	مرن	"	,
"	flight	"	,	"	طيران	"	,
"	float	"	,	"	يطفو	"	,
"	floor	"	,	"	ارض	"	,
"	flour	"	,	"	دقيق	"	,
"	flowers	"	,	"	زهور	"	,
"	flown	"	,	"	طار	"	,
"	fluently	"	,	"	بطلاقة	"	,
"	fly	"	,	"	يطير	"	,
"	flyers	"	,	"	نشرات	"	,
"	focus	"	,	"	التركيز	"	,
"	focuses	"	,	"	يركز	"	,
"	follow	"	,	"	يتبع	"	,
"	followed	"	,	"	مبوع	"	,
"	following	"	,	"	تابع	"	,
"	food	"	,	"	غذاء	"	,
"	football	"	,	"	كرة القدم	"	,
"	for	"	,	"	إلى عن على	"	,
"	force	"	,	"	قوة	"	,
"	foreign	"	,	"	أجنبي	"	,
"	forever	"	,	"	إلى الأبد	"	,
"	forget	"	,	"	ينسى	"	,
"	forgot	"	,	"	نسيت	"	,
"	fork	"	,	"	شوكة	"	,
"	forks	"	,	"	الشوك	"	,
"	form	"	,	"	شكل	"	,
"	formal	"	,	"	رسمي	"	,
"	format	"	,	"	صيغة	"	,
"	formed	"	,	"	شكلت	"	,
"	forms	"	,	"	نماذج	"	,
"	fortunately	"	,	"	لحسن الحظ	"	,
"	forum	"	,	"	منتدى	"	,
"	fought	"	,	"	قاتل	"	,
"	found	"	,	"	وجدت	"	,
"	founded	"	,	"	مؤسس	"	,
"	fourdoor	"	,	"	أربعة أبواب	"	,
"	France	"	,	"	فرنسا	"	,
"	free	"	,	"	مجانا	"	,
"	freedom	"	,	"	حرية	"	,
"	freely	"	,	"	بحرية	"	,
"	freeze	"	,	"	يتجمد	"	,
"	freezer	"	,	"	فريزر	"	,
"	French	"	,	"	فرنسي	"	,
"	frequent	"	,	"	متكرر	"	,
"	Friday	"	,	"	جمعة	"	,
"	friend	"	,	"	صديق	"	,
"	friendship	"	,	"	صداقة	"	,
"	from	"	,	"	من	"	,
"	front	"	,	"	أمامي	"	,
"	fruit	"	,	"	فاكهة	"	,
"	frustrating	"	,	"	محبط	"	,
"	frying	"	,	"	قلي	"	,
"	fulfill	"	,	"	يتحقيق	"	,
"	full	"	,	"	ممتلىء	"	,
"	fun	"	,	"	مرح	"	,
"	function	"	,	"	وظيفة	"	,
"	functions	"	,	"	مهام	"	,
"	funny	"	,	"	مضحك	"	,
"	furniture	"	,	"	أثاث المنزل	"	,
"	future	"	,	"	مستقبل	"	,


];

var WordQ = Words[NumA-1];
var WordA = Words[NumA];

var WordQ1 = Words[NumA1-1];
var WordA1 = Words[NumA1];

var WordQ2 = Words[NumA2-1];
var WordA2 = Words[NumA2];

var WordQ3 = Words[NumA3-1];
var WordA3 = Words[NumA3];

var WordQ4 = Words[NumA4-1];
var WordA4 = Words[NumA4];


player.SetVar("NumA",NumA);
player.SetVar("NumA1",NumA1);
player.SetVar("NumA2",NumA2);
player.SetVar("NumA3",NumA3);
player.SetVar("NumA4",NumA4);

player.SetVar("WordQ",WordQ);
player.SetVar("WordQ1",WordQ1);
player.SetVar("WordQ2",WordQ2);
player.SetVar("WordQ3",WordQ3);
player.SetVar("WordQ4",WordQ4);


player.SetVar("WordA",WordA);
player.SetVar("WordA1",WordA1);
player.SetVar("WordA2",WordA2);
player.SetVar("WordA3",WordA3);
player.SetVar("WordA4",WordA4);

}

function Script23()
{
  // Odd = Engligh question, next Even = Arabic answer;
// random is even for arabic answer;

var player = GetPlayer();

var Words = 131; 

var NumA= Math.floor(Math.random()*Words+1)*2;
var NumA1= Math.floor(Math.random()*Words+1)*2;
var NumA2= Math.floor(Math.random()*Words+1)*2;
var NumA3= Math.floor(Math.random()*Words+1)*2;
var NumA4= Math.floor(Math.random()*Words+1)*2;







if ( (NumA1 == NumA)  || (NumA1 ==  NumA2) || (NumA1 ==  NumA3) || (NumA1 ==  NumA4) ) {
  var NumA1= 0
}

if ( (NumA2 == NumA)  || (NumA2 ==  NumA1) || (NumA2 ==  NumA3) || (NumA2 ==  NumA4) ) {
  var NumA2=  0
}

if ( (NumA3 == NumA)  || (NumA3 ==  NumA1) || (NumA3 ==  NumA2) || (NumA3 ==  NumA4) ) {
  var NumA3= 0
}


if ( (NumA4 == NumA)  || (NumA4 ==  NumA1) || (NumA4 ==  NumA2) || (NumA4 ==  NumA3) ) {
  var NumA4= 0
}


var Words= [
"Free Answer for You",


"	face	"	,	"	وجه	"	,
"	facilitate	"	,	"	يسهل	"	,
"	facilities	"	,	"	مرافق	"	,
"	fact	"	,	"	حقيقة	"	,
"	factories	"	,	"	مصانع	"	,
"	factors	"	,	"	عوامل	"	,
"	factory	"	,	"	مصنع	"	,
"	facts	"	,	"	حقائق	"	,
"	fail	"	,	"	يفشل	"	,
"	failed	"	,	"	فشل	"	,
"	failing	"	,	"	اخفاق	"	,
"	fair	"	,	"	عدل	"	,
"	fake	"	,	"	مزيف	"	,
"	fall	"	,	"	خريف	"	,
"	fallen	"	,	"	سقط	"	,
"	falls	"	,	"	يسقط	"	,
"	familiar	"	,	"	معروف	"	,
"	families	"	,	"	أسر	"	,
"	family	"	,	"	أسرة	"	,
"	famous	"	,	"	مشهور	"	,
"	fan	"	,	"	معجب	"	,
"	fans	"	,	"	مشجعين	"	,
"	far	"	,	"	بعيدا	"	,
"	farm	"	,	"	مزرعة	"	,
"	farmer	"	,	"	مزارع	"	,
"	fashionable	"	,	"	موضة	"	,
"	fast	"	,	"	سريع	"	,
"	faster	"	,	"	أسرع	"	,
"	father	"	,	"	الاب	"	,
"	favorite	"	,	"	المفضل	"	,
"	feather	"	,	"	ريشة	"	,
"	feature	"	,	"	خاصية	"	,
"	features	"	,	"	سمات	"	,
"	fed	"	,	"	تغذيها	"	,
"	feed	"	,	"	تغذية	"	,
"	feel	"	,	"	شعور	"	,
"	feeling	"	,	"	شعور	"	,
"	feelings	"	,	"	مشاعر	"	,
"	feels	"	,	"	يشعر	"	,
"	fees	"	,	"	مصاريف	"	,
"	feet	"	,	"	القدمين	"	,
"	fell	"	,	"	سقط	"	,
"	felt	"	,	"	شعور	"	,
"	female	"	,	"	أنثى	"	,
"	festive	"	,	"	احتفالي	"	,
"	few	"	,	"	قليل	"	,
"	field	"	,	"	حقل	"	,
"	fifteenth	"	,	"	خامس عشر	"	,
"	fight	"	,	"	يقاتل	"	,
"	figure	"	,	"	شكل	"	,
"	fill	"	,	"	ملء	"	,
"	finally	"	,	"	أخيرا	"	,
"	finance	"	,	"	يمول	"	,
"	find	"	,	"	يجد	"	,
"	finding	"	,	"	عثور على	"	,
"	findings	"	,	"	موجودات	"	,
"	finds	"	,	"	يجد	"	,
"	fine	"	,	"	بخير	"	,
"	finger	"	,	"	اصبع اليد	"	,
"	fingers	"	,	"	أصابع	"	,
"	finish	"	,	"	إنهاء	"	,
"	finished	"	,	"	تم الانتهاء من	"	,
"	first	"	,	"	أول	"	,
"	fish	"	,	"	سمك	"	,
"	fishing	"	,	"	صيد السمك	"	,
"	fit	"	,	"	لائق بدنيا	"	,
"	fitting	"	,	"	مناسب	"	,
"	five	"	,	"	خمسة	"	,
"	fix	"	,	"	يصلح	"	,
"	flash	"	,	"	فلاش	"	,
"	flew	"	,	"	طار	"	,
"	flexible	"	,	"	مرن	"	,
"	flight	"	,	"	طيران	"	,
"	float	"	,	"	يطفو	"	,
"	floor	"	,	"	ارض	"	,
"	flour	"	,	"	دقيق	"	,
"	flowers	"	,	"	زهور	"	,
"	flown	"	,	"	طار	"	,
"	fluently	"	,	"	بطلاقة	"	,
"	fly	"	,	"	يطير	"	,
"	flyers	"	,	"	نشرات	"	,
"	focus	"	,	"	التركيز	"	,
"	focuses	"	,	"	يركز	"	,
"	follow	"	,	"	يتبع	"	,
"	followed	"	,	"	مبوع	"	,
"	following	"	,	"	تابع	"	,
"	food	"	,	"	غذاء	"	,
"	football	"	,	"	كرة القدم	"	,
"	for	"	,	"	إلى عن على	"	,
"	force	"	,	"	قوة	"	,
"	foreign	"	,	"	أجنبي	"	,
"	forever	"	,	"	إلى الأبد	"	,
"	forget	"	,	"	ينسى	"	,
"	forgot	"	,	"	نسيت	"	,
"	fork	"	,	"	شوكة	"	,
"	forks	"	,	"	الشوك	"	,
"	form	"	,	"	شكل	"	,
"	formal	"	,	"	رسمي	"	,
"	format	"	,	"	صيغة	"	,
"	formed	"	,	"	شكلت	"	,
"	forms	"	,	"	نماذج	"	,
"	fortunately	"	,	"	لحسن الحظ	"	,
"	forum	"	,	"	منتدى	"	,
"	fought	"	,	"	قاتل	"	,
"	found	"	,	"	وجدت	"	,
"	founded	"	,	"	مؤسس	"	,
"	fourdoor	"	,	"	أربعة أبواب	"	,
"	France	"	,	"	فرنسا	"	,
"	free	"	,	"	مجانا	"	,
"	freedom	"	,	"	حرية	"	,
"	freely	"	,	"	بحرية	"	,
"	freeze	"	,	"	يتجمد	"	,
"	freezer	"	,	"	فريزر	"	,
"	French	"	,	"	فرنسي	"	,
"	frequent	"	,	"	متكرر	"	,
"	Friday	"	,	"	جمعة	"	,
"	friend	"	,	"	صديق	"	,
"	friendship	"	,	"	صداقة	"	,
"	from	"	,	"	من	"	,
"	front	"	,	"	أمامي	"	,
"	fruit	"	,	"	فاكهة	"	,
"	frustrating	"	,	"	محبط	"	,
"	frying	"	,	"	قلي	"	,
"	fulfill	"	,	"	يتحقيق	"	,
"	full	"	,	"	ممتلىء	"	,
"	fun	"	,	"	مرح	"	,
"	function	"	,	"	وظيفة	"	,
"	functions	"	,	"	مهام	"	,
"	funny	"	,	"	مضحك	"	,
"	furniture	"	,	"	أثاث المنزل	"	,
"	future	"	,	"	مستقبل	"	,


];

var WordQ = Words[NumA-1];
var WordA = Words[NumA];

var WordQ1 = Words[NumA1-1];
var WordA1 = Words[NumA1];

var WordQ2 = Words[NumA2-1];
var WordA2 = Words[NumA2];

var WordQ3 = Words[NumA3-1];
var WordA3 = Words[NumA3];

var WordQ4 = Words[NumA4-1];
var WordA4 = Words[NumA4];


player.SetVar("NumA",NumA);
player.SetVar("NumA1",NumA1);
player.SetVar("NumA2",NumA2);
player.SetVar("NumA3",NumA3);
player.SetVar("NumA4",NumA4);

player.SetVar("WordQ",WordQ);
player.SetVar("WordQ1",WordQ1);
player.SetVar("WordQ2",WordQ2);
player.SetVar("WordQ3",WordQ3);
player.SetVar("WordQ4",WordQ4);


player.SetVar("WordA",WordA);
player.SetVar("WordA1",WordA1);
player.SetVar("WordA2",WordA2);
player.SetVar("WordA3",WordA3);
player.SetVar("WordA4",WordA4);

}

function Script24()
{
  // Odd = Engligh question, next Even = Arabic answer;
// random is even for arabic answer;

var player = GetPlayer();

var Words = 131; 

var NumA= Math.floor(Math.random()*Words+1)*2;
var NumA1= Math.floor(Math.random()*Words+1)*2;
var NumA2= Math.floor(Math.random()*Words+1)*2;
var NumA3= Math.floor(Math.random()*Words+1)*2;
var NumA4= Math.floor(Math.random()*Words+1)*2;







if ( (NumA1 == NumA)  || (NumA1 ==  NumA2) || (NumA1 ==  NumA3) || (NumA1 ==  NumA4) ) {
  var NumA1= 0
}

if ( (NumA2 == NumA)  || (NumA2 ==  NumA1) || (NumA2 ==  NumA3) || (NumA2 ==  NumA4) ) {
  var NumA2=  0
}

if ( (NumA3 == NumA)  || (NumA3 ==  NumA1) || (NumA3 ==  NumA2) || (NumA3 ==  NumA4) ) {
  var NumA3= 0
}


if ( (NumA4 == NumA)  || (NumA4 ==  NumA1) || (NumA4 ==  NumA2) || (NumA4 ==  NumA3) ) {
  var NumA4= 0
}


var Words= [
"Free Answer for You",


"	face	"	,	"	وجه	"	,
"	facilitate	"	,	"	يسهل	"	,
"	facilities	"	,	"	مرافق	"	,
"	fact	"	,	"	حقيقة	"	,
"	factories	"	,	"	مصانع	"	,
"	factors	"	,	"	عوامل	"	,
"	factory	"	,	"	مصنع	"	,
"	facts	"	,	"	حقائق	"	,
"	fail	"	,	"	يفشل	"	,
"	failed	"	,	"	فشل	"	,
"	failing	"	,	"	اخفاق	"	,
"	fair	"	,	"	عدل	"	,
"	fake	"	,	"	مزيف	"	,
"	fall	"	,	"	خريف	"	,
"	fallen	"	,	"	سقط	"	,
"	falls	"	,	"	يسقط	"	,
"	familiar	"	,	"	معروف	"	,
"	families	"	,	"	أسر	"	,
"	family	"	,	"	أسرة	"	,
"	famous	"	,	"	مشهور	"	,
"	fan	"	,	"	معجب	"	,
"	fans	"	,	"	مشجعين	"	,
"	far	"	,	"	بعيدا	"	,
"	farm	"	,	"	مزرعة	"	,
"	farmer	"	,	"	مزارع	"	,
"	fashionable	"	,	"	موضة	"	,
"	fast	"	,	"	سريع	"	,
"	faster	"	,	"	أسرع	"	,
"	father	"	,	"	الاب	"	,
"	favorite	"	,	"	المفضل	"	,
"	feather	"	,	"	ريشة	"	,
"	feature	"	,	"	خاصية	"	,
"	features	"	,	"	سمات	"	,
"	fed	"	,	"	تغذيها	"	,
"	feed	"	,	"	تغذية	"	,
"	feel	"	,	"	شعور	"	,
"	feeling	"	,	"	شعور	"	,
"	feelings	"	,	"	مشاعر	"	,
"	feels	"	,	"	يشعر	"	,
"	fees	"	,	"	مصاريف	"	,
"	feet	"	,	"	القدمين	"	,
"	fell	"	,	"	سقط	"	,
"	felt	"	,	"	شعور	"	,
"	female	"	,	"	أنثى	"	,
"	festive	"	,	"	احتفالي	"	,
"	few	"	,	"	قليل	"	,
"	field	"	,	"	حقل	"	,
"	fifteenth	"	,	"	خامس عشر	"	,
"	fight	"	,	"	يقاتل	"	,
"	figure	"	,	"	شكل	"	,
"	fill	"	,	"	ملء	"	,
"	finally	"	,	"	أخيرا	"	,
"	finance	"	,	"	يمول	"	,
"	find	"	,	"	يجد	"	,
"	finding	"	,	"	عثور على	"	,
"	findings	"	,	"	موجودات	"	,
"	finds	"	,	"	يجد	"	,
"	fine	"	,	"	بخير	"	,
"	finger	"	,	"	اصبع اليد	"	,
"	fingers	"	,	"	أصابع	"	,
"	finish	"	,	"	إنهاء	"	,
"	finished	"	,	"	تم الانتهاء من	"	,
"	first	"	,	"	أول	"	,
"	fish	"	,	"	سمك	"	,
"	fishing	"	,	"	صيد السمك	"	,
"	fit	"	,	"	لائق بدنيا	"	,
"	fitting	"	,	"	مناسب	"	,
"	five	"	,	"	خمسة	"	,
"	fix	"	,	"	يصلح	"	,
"	flash	"	,	"	فلاش	"	,
"	flew	"	,	"	طار	"	,
"	flexible	"	,	"	مرن	"	,
"	flight	"	,	"	طيران	"	,
"	float	"	,	"	يطفو	"	,
"	floor	"	,	"	ارض	"	,
"	flour	"	,	"	دقيق	"	,
"	flowers	"	,	"	زهور	"	,
"	flown	"	,	"	طار	"	,
"	fluently	"	,	"	بطلاقة	"	,
"	fly	"	,	"	يطير	"	,
"	flyers	"	,	"	نشرات	"	,
"	focus	"	,	"	التركيز	"	,
"	focuses	"	,	"	يركز	"	,
"	follow	"	,	"	يتبع	"	,
"	followed	"	,	"	مبوع	"	,
"	following	"	,	"	تابع	"	,
"	food	"	,	"	غذاء	"	,
"	football	"	,	"	كرة القدم	"	,
"	for	"	,	"	إلى عن على	"	,
"	force	"	,	"	قوة	"	,
"	foreign	"	,	"	أجنبي	"	,
"	forever	"	,	"	إلى الأبد	"	,
"	forget	"	,	"	ينسى	"	,
"	forgot	"	,	"	نسيت	"	,
"	fork	"	,	"	شوكة	"	,
"	forks	"	,	"	الشوك	"	,
"	form	"	,	"	شكل	"	,
"	formal	"	,	"	رسمي	"	,
"	format	"	,	"	صيغة	"	,
"	formed	"	,	"	شكلت	"	,
"	forms	"	,	"	نماذج	"	,
"	fortunately	"	,	"	لحسن الحظ	"	,
"	forum	"	,	"	منتدى	"	,
"	fought	"	,	"	قاتل	"	,
"	found	"	,	"	وجدت	"	,
"	founded	"	,	"	مؤسس	"	,
"	fourdoor	"	,	"	أربعة أبواب	"	,
"	France	"	,	"	فرنسا	"	,
"	free	"	,	"	مجانا	"	,
"	freedom	"	,	"	حرية	"	,
"	freely	"	,	"	بحرية	"	,
"	freeze	"	,	"	يتجمد	"	,
"	freezer	"	,	"	فريزر	"	,
"	French	"	,	"	فرنسي	"	,
"	frequent	"	,	"	متكرر	"	,
"	Friday	"	,	"	جمعة	"	,
"	friend	"	,	"	صديق	"	,
"	friendship	"	,	"	صداقة	"	,
"	from	"	,	"	من	"	,
"	front	"	,	"	أمامي	"	,
"	fruit	"	,	"	فاكهة	"	,
"	frustrating	"	,	"	محبط	"	,
"	frying	"	,	"	قلي	"	,
"	fulfill	"	,	"	يتحقيق	"	,
"	full	"	,	"	ممتلىء	"	,
"	fun	"	,	"	مرح	"	,
"	function	"	,	"	وظيفة	"	,
"	functions	"	,	"	مهام	"	,
"	funny	"	,	"	مضحك	"	,
"	furniture	"	,	"	أثاث المنزل	"	,
"	future	"	,	"	مستقبل	"	,


];

var WordQ = Words[NumA-1];
var WordA = Words[NumA];

var WordQ1 = Words[NumA1-1];
var WordA1 = Words[NumA1];

var WordQ2 = Words[NumA2-1];
var WordA2 = Words[NumA2];

var WordQ3 = Words[NumA3-1];
var WordA3 = Words[NumA3];

var WordQ4 = Words[NumA4-1];
var WordA4 = Words[NumA4];


player.SetVar("NumA",NumA);
player.SetVar("NumA1",NumA1);
player.SetVar("NumA2",NumA2);
player.SetVar("NumA3",NumA3);
player.SetVar("NumA4",NumA4);

player.SetVar("WordQ",WordQ);
player.SetVar("WordQ1",WordQ1);
player.SetVar("WordQ2",WordQ2);
player.SetVar("WordQ3",WordQ3);
player.SetVar("WordQ4",WordQ4);


player.SetVar("WordA",WordA);
player.SetVar("WordA1",WordA1);
player.SetVar("WordA2",WordA2);
player.SetVar("WordA3",WordA3);
player.SetVar("WordA4",WordA4);

}

function Script25()
{
  // Odd = Engligh question, next Even = Arabic answer;
// random is even for arabic answer;

var player = GetPlayer();

var Words = 131; 

var NumA= Math.floor(Math.random()*Words+1)*2;
var NumA1= Math.floor(Math.random()*Words+1)*2;
var NumA2= Math.floor(Math.random()*Words+1)*2;
var NumA3= Math.floor(Math.random()*Words+1)*2;
var NumA4= Math.floor(Math.random()*Words+1)*2;







if ( (NumA1 == NumA)  || (NumA1 ==  NumA2) || (NumA1 ==  NumA3) || (NumA1 ==  NumA4) ) {
  var NumA1= 0
}

if ( (NumA2 == NumA)  || (NumA2 ==  NumA1) || (NumA2 ==  NumA3) || (NumA2 ==  NumA4) ) {
  var NumA2=  0
}

if ( (NumA3 == NumA)  || (NumA3 ==  NumA1) || (NumA3 ==  NumA2) || (NumA3 ==  NumA4) ) {
  var NumA3= 0
}


if ( (NumA4 == NumA)  || (NumA4 ==  NumA1) || (NumA4 ==  NumA2) || (NumA4 ==  NumA3) ) {
  var NumA4= 0
}


var Words= [
"Free Answer for You",


"	face	"	,	"	وجه	"	,
"	facilitate	"	,	"	يسهل	"	,
"	facilities	"	,	"	مرافق	"	,
"	fact	"	,	"	حقيقة	"	,
"	factories	"	,	"	مصانع	"	,
"	factors	"	,	"	عوامل	"	,
"	factory	"	,	"	مصنع	"	,
"	facts	"	,	"	حقائق	"	,
"	fail	"	,	"	يفشل	"	,
"	failed	"	,	"	فشل	"	,
"	failing	"	,	"	اخفاق	"	,
"	fair	"	,	"	عدل	"	,
"	fake	"	,	"	مزيف	"	,
"	fall	"	,	"	خريف	"	,
"	fallen	"	,	"	سقط	"	,
"	falls	"	,	"	يسقط	"	,
"	familiar	"	,	"	معروف	"	,
"	families	"	,	"	أسر	"	,
"	family	"	,	"	أسرة	"	,
"	famous	"	,	"	مشهور	"	,
"	fan	"	,	"	معجب	"	,
"	fans	"	,	"	مشجعين	"	,
"	far	"	,	"	بعيدا	"	,
"	farm	"	,	"	مزرعة	"	,
"	farmer	"	,	"	مزارع	"	,
"	fashionable	"	,	"	موضة	"	,
"	fast	"	,	"	سريع	"	,
"	faster	"	,	"	أسرع	"	,
"	father	"	,	"	الاب	"	,
"	favorite	"	,	"	المفضل	"	,
"	feather	"	,	"	ريشة	"	,
"	feature	"	,	"	خاصية	"	,
"	features	"	,	"	سمات	"	,
"	fed	"	,	"	تغذيها	"	,
"	feed	"	,	"	تغذية	"	,
"	feel	"	,	"	شعور	"	,
"	feeling	"	,	"	شعور	"	,
"	feelings	"	,	"	مشاعر	"	,
"	feels	"	,	"	يشعر	"	,
"	fees	"	,	"	مصاريف	"	,
"	feet	"	,	"	القدمين	"	,
"	fell	"	,	"	سقط	"	,
"	felt	"	,	"	شعور	"	,
"	female	"	,	"	أنثى	"	,
"	festive	"	,	"	احتفالي	"	,
"	few	"	,	"	قليل	"	,
"	field	"	,	"	حقل	"	,
"	fifteenth	"	,	"	خامس عشر	"	,
"	fight	"	,	"	يقاتل	"	,
"	figure	"	,	"	شكل	"	,
"	fill	"	,	"	ملء	"	,
"	finally	"	,	"	أخيرا	"	,
"	finance	"	,	"	يمول	"	,
"	find	"	,	"	يجد	"	,
"	finding	"	,	"	عثور على	"	,
"	findings	"	,	"	موجودات	"	,
"	finds	"	,	"	يجد	"	,
"	fine	"	,	"	بخير	"	,
"	finger	"	,	"	اصبع اليد	"	,
"	fingers	"	,	"	أصابع	"	,
"	finish	"	,	"	إنهاء	"	,
"	finished	"	,	"	تم الانتهاء من	"	,
"	first	"	,	"	أول	"	,
"	fish	"	,	"	سمك	"	,
"	fishing	"	,	"	صيد السمك	"	,
"	fit	"	,	"	لائق بدنيا	"	,
"	fitting	"	,	"	مناسب	"	,
"	five	"	,	"	خمسة	"	,
"	fix	"	,	"	يصلح	"	,
"	flash	"	,	"	فلاش	"	,
"	flew	"	,	"	طار	"	,
"	flexible	"	,	"	مرن	"	,
"	flight	"	,	"	طيران	"	,
"	float	"	,	"	يطفو	"	,
"	floor	"	,	"	ارض	"	,
"	flour	"	,	"	دقيق	"	,
"	flowers	"	,	"	زهور	"	,
"	flown	"	,	"	طار	"	,
"	fluently	"	,	"	بطلاقة	"	,
"	fly	"	,	"	يطير	"	,
"	flyers	"	,	"	نشرات	"	,
"	focus	"	,	"	التركيز	"	,
"	focuses	"	,	"	يركز	"	,
"	follow	"	,	"	يتبع	"	,
"	followed	"	,	"	مبوع	"	,
"	following	"	,	"	تابع	"	,
"	food	"	,	"	غذاء	"	,
"	football	"	,	"	كرة القدم	"	,
"	for	"	,	"	إلى عن على	"	,
"	force	"	,	"	قوة	"	,
"	foreign	"	,	"	أجنبي	"	,
"	forever	"	,	"	إلى الأبد	"	,
"	forget	"	,	"	ينسى	"	,
"	forgot	"	,	"	نسيت	"	,
"	fork	"	,	"	شوكة	"	,
"	forks	"	,	"	الشوك	"	,
"	form	"	,	"	شكل	"	,
"	formal	"	,	"	رسمي	"	,
"	format	"	,	"	صيغة	"	,
"	formed	"	,	"	شكلت	"	,
"	forms	"	,	"	نماذج	"	,
"	fortunately	"	,	"	لحسن الحظ	"	,
"	forum	"	,	"	منتدى	"	,
"	fought	"	,	"	قاتل	"	,
"	found	"	,	"	وجدت	"	,
"	founded	"	,	"	مؤسس	"	,
"	fourdoor	"	,	"	أربعة أبواب	"	,
"	France	"	,	"	فرنسا	"	,
"	free	"	,	"	مجانا	"	,
"	freedom	"	,	"	حرية	"	,
"	freely	"	,	"	بحرية	"	,
"	freeze	"	,	"	يتجمد	"	,
"	freezer	"	,	"	فريزر	"	,
"	French	"	,	"	فرنسي	"	,
"	frequent	"	,	"	متكرر	"	,
"	Friday	"	,	"	جمعة	"	,
"	friend	"	,	"	صديق	"	,
"	friendship	"	,	"	صداقة	"	,
"	from	"	,	"	من	"	,
"	front	"	,	"	أمامي	"	,
"	fruit	"	,	"	فاكهة	"	,
"	frustrating	"	,	"	محبط	"	,
"	frying	"	,	"	قلي	"	,
"	fulfill	"	,	"	يتحقيق	"	,
"	full	"	,	"	ممتلىء	"	,
"	fun	"	,	"	مرح	"	,
"	function	"	,	"	وظيفة	"	,
"	functions	"	,	"	مهام	"	,
"	funny	"	,	"	مضحك	"	,
"	furniture	"	,	"	أثاث المنزل	"	,
"	future	"	,	"	مستقبل	"	,


];

var WordQ = Words[NumA-1];
var WordA = Words[NumA];

var WordQ1 = Words[NumA1-1];
var WordA1 = Words[NumA1];

var WordQ2 = Words[NumA2-1];
var WordA2 = Words[NumA2];

var WordQ3 = Words[NumA3-1];
var WordA3 = Words[NumA3];

var WordQ4 = Words[NumA4-1];
var WordA4 = Words[NumA4];


player.SetVar("NumA",NumA);
player.SetVar("NumA1",NumA1);
player.SetVar("NumA2",NumA2);
player.SetVar("NumA3",NumA3);
player.SetVar("NumA4",NumA4);

player.SetVar("WordQ",WordQ);
player.SetVar("WordQ1",WordQ1);
player.SetVar("WordQ2",WordQ2);
player.SetVar("WordQ3",WordQ3);
player.SetVar("WordQ4",WordQ4);


player.SetVar("WordA",WordA);
player.SetVar("WordA1",WordA1);
player.SetVar("WordA2",WordA2);
player.SetVar("WordA3",WordA3);
player.SetVar("WordA4",WordA4);

}

function Script26()
{
  // Odd = Engligh question, next Even = Arabic answer;
// random is even for arabic answer;

var player = GetPlayer();

var Words = 83; 

var NumA= Math.floor(Math.random()*Words+1)*2;
var NumA1= Math.floor(Math.random()*Words+1)*2;
var NumA2= Math.floor(Math.random()*Words+1)*2;
var NumA3= Math.floor(Math.random()*Words+1)*2;
var NumA4= Math.floor(Math.random()*Words+1)*2;







if ( (NumA1 == NumA)  || (NumA1 ==  NumA2) || (NumA1 ==  NumA3) || (NumA1 ==  NumA4) ) {
  var NumA1= 0
}

if ( (NumA2 == NumA)  || (NumA2 ==  NumA1) || (NumA2 ==  NumA3) || (NumA2 ==  NumA4) ) {
  var NumA2=  0
}

if ( (NumA3 == NumA)  || (NumA3 ==  NumA1) || (NumA3 ==  NumA2) || (NumA3 ==  NumA4) ) {
  var NumA3= 0
}


if ( (NumA4 == NumA)  || (NumA4 ==  NumA1) || (NumA4 ==  NumA2) || (NumA4 ==  NumA3) ) {
  var NumA4= 0
}


var Words= [
"Free Answer for You",

"	gaining	"	,	"	كسب	"	,
"	galleries	"	,	"	المعارض	"	,
"	gallery	"	,	"	صالة عرض	"	,
"	game	"	,	"	لعبه	"	,
"	games	"	,	"	ألعاب	"	,
"	garage	"	,	"	كراج	"	,
"	garbage	"	,	"	قمامة	"	,
"	garden	"	,	"	حديقة	"	,
"	gas	"	,	"	غاز	"	,
"	gate	"	,	"	بوابة	"	,
"	gave	"	,	"	أعطى	"	,
"	general	"	,	"	جنرال لواء	"	,
"	generally	"	,	"	عموما	"	,
"	generate	"	,	"	انشاء	"	,
"	generous	"	,	"	كريم	"	,
"	genius	"	,	"	العبقري	"	,
"	geography	"	,	"	جغرافية	"	,
"	Germans	"	,	"	الألمان	"	,
"	Germany	"	,	"	ألمانيا	"	,
"	gerunds	"	,	"	أسماء المصدر	"	,
"	gesture	"	,	"	إيماءة	"	,
"	get	"	,	"	احصل على	"	,
"	getting	"	,	"	الحصول على	"	,
"	gift	"	,	"	هدية مجانية	"	,
"	gifted	"	,	"	موهوب	"	,
"	girl	"	,	"	فتاة	"	,
"	give	"	,	"	يعطي	"	,
"	given	"	,	"	معطى	"	,
"	giving	"	,	"	إعطاء	"	,
"	glad	"	,	"	مسرور	"	,
"	glasses	"	,	"	نظارات	"	,
"	global	"	,	"	عالمي	"	,
"	globalized	"	,	"	معولم	"	,
"	glove	"	,	"	قفاز	"	,
"	go	"	,	"	يذهب	"	,
"	goal	"	,	"	هدف	"	,
"	going	"	,	"	ذاهب	"	,
"	gold	"	,	"	ذهب	"	,
"	golden	"	,	"	ذهبي	"	,
"	goldsmith	"	,	"	صائغ	"	,
"	gone	"	,	"	ذهب	"	,
"	goodbye	"	,	"	مع السلامة	"	,
"	goods	"	,	"	بضائع	"	,
"	got	"	,	"	يملك	"	,
"	gotten	"	,	"	حصلت	"	,
"	government	"	,	"	حكومة	"	,
"	governments	"	,	"	حكومات	"	,
"	grabbed	"	,	"	اقتطف	"	,
"	grade	"	,	"	صف دراسي	"	,
"	grades	"	,	"	درجات	"	,
"	graduate	"	,	"	متخرج	"	,
"	graduated	"	,	"	تخرج	"	,
"	graduates	"	,	"	خريجين	"	,
"	graduation	"	,	"	تخرج	"	,
"	grammar	"	,	"	قواعد	"	,
"	grand	"	,	"	كبير	"	,
"	grandparents	"	,	"	الجد والجدة	"	,
"	grass	"	,	"	عشب	"	,
"	gratitude	"	,	"	امتنان	"	,
"	great	"	,	"	عظيم	"	,
"	Greece	"	,	"	اليونان	"	,
"	Greek	"	,	"	يوناني	"	,
"	green	"	,	"	لون أخضر	"	,
"	greeted	"	,	"	بادر بالتحية	"	,
"	greeting	"	,	"	تحية	"	,
"	greet	"	,	"	يحيي	"	,
"	grew	"	,	"	نمت	"	,
"	grocery	"	,	"	خضروات	"	,
"	ground	"	,	"	أرض	"	,
"	group	"	,	"	مجموعة	"	,
"	groups	"	,	"	مجموعات	"	,
"	grow	"	,	"	تنمو	"	,
"	growing	"	,	"	متزايد	"	,
"	growth	"	,	"	نمو	"	,
"	guaranteed	"	,	"	مضمون	"	,
"	guard	"	,	"	يحمي	"	,
"	guess	"	,	"	يخمن	"	,
"	guesses	"	,	"	تخمينات	"	,
"	guest	"	,	"	زائر	"	,
"	guests	"	,	"	ضيوف	"	,
"	guidance	"	,	"	إرشاد	"	,
"	guide	"	,	"	يرشد	"	,
"	guy	"	,	"	شاب	"	,



];

var WordQ = Words[NumA-1];
var WordA = Words[NumA];

var WordQ1 = Words[NumA1-1];
var WordA1 = Words[NumA1];

var WordQ2 = Words[NumA2-1];
var WordA2 = Words[NumA2];

var WordQ3 = Words[NumA3-1];
var WordA3 = Words[NumA3];

var WordQ4 = Words[NumA4-1];
var WordA4 = Words[NumA4];


player.SetVar("NumA",NumA);
player.SetVar("NumA1",NumA1);
player.SetVar("NumA2",NumA2);
player.SetVar("NumA3",NumA3);
player.SetVar("NumA4",NumA4);

player.SetVar("WordQ",WordQ);
player.SetVar("WordQ1",WordQ1);
player.SetVar("WordQ2",WordQ2);
player.SetVar("WordQ3",WordQ3);
player.SetVar("WordQ4",WordQ4);


player.SetVar("WordA",WordA);
player.SetVar("WordA1",WordA1);
player.SetVar("WordA2",WordA2);
player.SetVar("WordA3",WordA3);
player.SetVar("WordA4",WordA4);

}

function Script27()
{
  // Odd = Engligh question, next Even = Arabic answer;
// random is even for arabic answer;

var player = GetPlayer();

var Words = 83; 

var NumA= Math.floor(Math.random()*Words+1)*2;
var NumA1= Math.floor(Math.random()*Words+1)*2;
var NumA2= Math.floor(Math.random()*Words+1)*2;
var NumA3= Math.floor(Math.random()*Words+1)*2;
var NumA4= Math.floor(Math.random()*Words+1)*2;







if ( (NumA1 == NumA)  || (NumA1 ==  NumA2) || (NumA1 ==  NumA3) || (NumA1 ==  NumA4) ) {
  var NumA1= 0
}

if ( (NumA2 == NumA)  || (NumA2 ==  NumA1) || (NumA2 ==  NumA3) || (NumA2 ==  NumA4) ) {
  var NumA2=  0
}

if ( (NumA3 == NumA)  || (NumA3 ==  NumA1) || (NumA3 ==  NumA2) || (NumA3 ==  NumA4) ) {
  var NumA3= 0
}


if ( (NumA4 == NumA)  || (NumA4 ==  NumA1) || (NumA4 ==  NumA2) || (NumA4 ==  NumA3) ) {
  var NumA4= 0
}


var Words= [
"Free Answer for You",

"	gaining	"	,	"	كسب	"	,
"	galleries	"	,	"	المعارض	"	,
"	gallery	"	,	"	صالة عرض	"	,
"	game	"	,	"	لعبه	"	,
"	games	"	,	"	ألعاب	"	,
"	garage	"	,	"	كراج	"	,
"	garbage	"	,	"	قمامة	"	,
"	garden	"	,	"	حديقة	"	,
"	gas	"	,	"	غاز	"	,
"	gate	"	,	"	بوابة	"	,
"	gave	"	,	"	أعطى	"	,
"	general	"	,	"	جنرال لواء	"	,
"	generally	"	,	"	عموما	"	,
"	generate	"	,	"	انشاء	"	,
"	generous	"	,	"	كريم	"	,
"	genius	"	,	"	العبقري	"	,
"	geography	"	,	"	جغرافية	"	,
"	Germans	"	,	"	الألمان	"	,
"	Germany	"	,	"	ألمانيا	"	,
"	gerunds	"	,	"	أسماء المصدر	"	,
"	gesture	"	,	"	إيماءة	"	,
"	get	"	,	"	احصل على	"	,
"	getting	"	,	"	الحصول على	"	,
"	gift	"	,	"	هدية مجانية	"	,
"	gifted	"	,	"	موهوب	"	,
"	girl	"	,	"	فتاة	"	,
"	give	"	,	"	يعطي	"	,
"	given	"	,	"	معطى	"	,
"	giving	"	,	"	إعطاء	"	,
"	glad	"	,	"	مسرور	"	,
"	glasses	"	,	"	نظارات	"	,
"	global	"	,	"	عالمي	"	,
"	globalized	"	,	"	معولم	"	,
"	glove	"	,	"	قفاز	"	,
"	go	"	,	"	يذهب	"	,
"	goal	"	,	"	هدف	"	,
"	going	"	,	"	ذاهب	"	,
"	gold	"	,	"	ذهب	"	,
"	golden	"	,	"	ذهبي	"	,
"	goldsmith	"	,	"	صائغ	"	,
"	gone	"	,	"	ذهب	"	,
"	goodbye	"	,	"	مع السلامة	"	,
"	goods	"	,	"	بضائع	"	,
"	got	"	,	"	يملك	"	,
"	gotten	"	,	"	حصلت	"	,
"	government	"	,	"	حكومة	"	,
"	governments	"	,	"	حكومات	"	,
"	grabbed	"	,	"	اقتطف	"	,
"	grade	"	,	"	صف دراسي	"	,
"	grades	"	,	"	درجات	"	,
"	graduate	"	,	"	متخرج	"	,
"	graduated	"	,	"	تخرج	"	,
"	graduates	"	,	"	خريجين	"	,
"	graduation	"	,	"	تخرج	"	,
"	grammar	"	,	"	قواعد	"	,
"	grand	"	,	"	كبير	"	,
"	grandparents	"	,	"	الجد والجدة	"	,
"	grass	"	,	"	عشب	"	,
"	gratitude	"	,	"	امتنان	"	,
"	great	"	,	"	عظيم	"	,
"	Greece	"	,	"	اليونان	"	,
"	Greek	"	,	"	يوناني	"	,
"	green	"	,	"	لون أخضر	"	,
"	greeted	"	,	"	بادر بالتحية	"	,
"	greeting	"	,	"	تحية	"	,
"	greet	"	,	"	يحيي	"	,
"	grew	"	,	"	نمت	"	,
"	grocery	"	,	"	خضروات	"	,
"	ground	"	,	"	أرض	"	,
"	group	"	,	"	مجموعة	"	,
"	groups	"	,	"	مجموعات	"	,
"	grow	"	,	"	تنمو	"	,
"	growing	"	,	"	متزايد	"	,
"	growth	"	,	"	نمو	"	,
"	guaranteed	"	,	"	مضمون	"	,
"	guard	"	,	"	يحمي	"	,
"	guess	"	,	"	يخمن	"	,
"	guesses	"	,	"	تخمينات	"	,
"	guest	"	,	"	زائر	"	,
"	guests	"	,	"	ضيوف	"	,
"	guidance	"	,	"	إرشاد	"	,
"	guide	"	,	"	يرشد	"	,
"	guy	"	,	"	شاب	"	,



];

var WordQ = Words[NumA-1];
var WordA = Words[NumA];

var WordQ1 = Words[NumA1-1];
var WordA1 = Words[NumA1];

var WordQ2 = Words[NumA2-1];
var WordA2 = Words[NumA2];

var WordQ3 = Words[NumA3-1];
var WordA3 = Words[NumA3];

var WordQ4 = Words[NumA4-1];
var WordA4 = Words[NumA4];


player.SetVar("NumA",NumA);
player.SetVar("NumA1",NumA1);
player.SetVar("NumA2",NumA2);
player.SetVar("NumA3",NumA3);
player.SetVar("NumA4",NumA4);

player.SetVar("WordQ",WordQ);
player.SetVar("WordQ1",WordQ1);
player.SetVar("WordQ2",WordQ2);
player.SetVar("WordQ3",WordQ3);
player.SetVar("WordQ4",WordQ4);


player.SetVar("WordA",WordA);
player.SetVar("WordA1",WordA1);
player.SetVar("WordA2",WordA2);
player.SetVar("WordA3",WordA3);
player.SetVar("WordA4",WordA4);

}

function Script28()
{
  // Odd = Engligh question, next Even = Arabic answer;
// random is even for arabic answer;

var player = GetPlayer();

var Words = 83; 

var NumA= Math.floor(Math.random()*Words+1)*2;
var NumA1= Math.floor(Math.random()*Words+1)*2;
var NumA2= Math.floor(Math.random()*Words+1)*2;
var NumA3= Math.floor(Math.random()*Words+1)*2;
var NumA4= Math.floor(Math.random()*Words+1)*2;







if ( (NumA1 == NumA)  || (NumA1 ==  NumA2) || (NumA1 ==  NumA3) || (NumA1 ==  NumA4) ) {
  var NumA1= 0
}

if ( (NumA2 == NumA)  || (NumA2 ==  NumA1) || (NumA2 ==  NumA3) || (NumA2 ==  NumA4) ) {
  var NumA2=  0
}

if ( (NumA3 == NumA)  || (NumA3 ==  NumA1) || (NumA3 ==  NumA2) || (NumA3 ==  NumA4) ) {
  var NumA3= 0
}


if ( (NumA4 == NumA)  || (NumA4 ==  NumA1) || (NumA4 ==  NumA2) || (NumA4 ==  NumA3) ) {
  var NumA4= 0
}


var Words= [
"Free Answer for You",

"	gaining	"	,	"	كسب	"	,
"	galleries	"	,	"	المعارض	"	,
"	gallery	"	,	"	صالة عرض	"	,
"	game	"	,	"	لعبه	"	,
"	games	"	,	"	ألعاب	"	,
"	garage	"	,	"	كراج	"	,
"	garbage	"	,	"	قمامة	"	,
"	garden	"	,	"	حديقة	"	,
"	gas	"	,	"	غاز	"	,
"	gate	"	,	"	بوابة	"	,
"	gave	"	,	"	أعطى	"	,
"	general	"	,	"	جنرال لواء	"	,
"	generally	"	,	"	عموما	"	,
"	generate	"	,	"	انشاء	"	,
"	generous	"	,	"	كريم	"	,
"	genius	"	,	"	العبقري	"	,
"	geography	"	,	"	جغرافية	"	,
"	Germans	"	,	"	الألمان	"	,
"	Germany	"	,	"	ألمانيا	"	,
"	gerunds	"	,	"	أسماء المصدر	"	,
"	gesture	"	,	"	إيماءة	"	,
"	get	"	,	"	احصل على	"	,
"	getting	"	,	"	الحصول على	"	,
"	gift	"	,	"	هدية مجانية	"	,
"	gifted	"	,	"	موهوب	"	,
"	girl	"	,	"	فتاة	"	,
"	give	"	,	"	يعطي	"	,
"	given	"	,	"	معطى	"	,
"	giving	"	,	"	إعطاء	"	,
"	glad	"	,	"	مسرور	"	,
"	glasses	"	,	"	نظارات	"	,
"	global	"	,	"	عالمي	"	,
"	globalized	"	,	"	معولم	"	,
"	glove	"	,	"	قفاز	"	,
"	go	"	,	"	يذهب	"	,
"	goal	"	,	"	هدف	"	,
"	going	"	,	"	ذاهب	"	,
"	gold	"	,	"	ذهب	"	,
"	golden	"	,	"	ذهبي	"	,
"	goldsmith	"	,	"	صائغ	"	,
"	gone	"	,	"	ذهب	"	,
"	goodbye	"	,	"	مع السلامة	"	,
"	goods	"	,	"	بضائع	"	,
"	got	"	,	"	يملك	"	,
"	gotten	"	,	"	حصلت	"	,
"	government	"	,	"	حكومة	"	,
"	governments	"	,	"	حكومات	"	,
"	grabbed	"	,	"	اقتطف	"	,
"	grade	"	,	"	صف دراسي	"	,
"	grades	"	,	"	درجات	"	,
"	graduate	"	,	"	متخرج	"	,
"	graduated	"	,	"	تخرج	"	,
"	graduates	"	,	"	خريجين	"	,
"	graduation	"	,	"	تخرج	"	,
"	grammar	"	,	"	قواعد	"	,
"	grand	"	,	"	كبير	"	,
"	grandparents	"	,	"	الجد والجدة	"	,
"	grass	"	,	"	عشب	"	,
"	gratitude	"	,	"	امتنان	"	,
"	great	"	,	"	عظيم	"	,
"	Greece	"	,	"	اليونان	"	,
"	Greek	"	,	"	يوناني	"	,
"	green	"	,	"	لون أخضر	"	,
"	greeted	"	,	"	بادر بالتحية	"	,
"	greeting	"	,	"	تحية	"	,
"	greet	"	,	"	يحيي	"	,
"	grew	"	,	"	نمت	"	,
"	grocery	"	,	"	خضروات	"	,
"	ground	"	,	"	أرض	"	,
"	group	"	,	"	مجموعة	"	,
"	groups	"	,	"	مجموعات	"	,
"	grow	"	,	"	تنمو	"	,
"	growing	"	,	"	متزايد	"	,
"	growth	"	,	"	نمو	"	,
"	guaranteed	"	,	"	مضمون	"	,
"	guard	"	,	"	يحمي	"	,
"	guess	"	,	"	يخمن	"	,
"	guesses	"	,	"	تخمينات	"	,
"	guest	"	,	"	زائر	"	,
"	guests	"	,	"	ضيوف	"	,
"	guidance	"	,	"	إرشاد	"	,
"	guide	"	,	"	يرشد	"	,
"	guy	"	,	"	شاب	"	,



];

var WordQ = Words[NumA-1];
var WordA = Words[NumA];

var WordQ1 = Words[NumA1-1];
var WordA1 = Words[NumA1];

var WordQ2 = Words[NumA2-1];
var WordA2 = Words[NumA2];

var WordQ3 = Words[NumA3-1];
var WordA3 = Words[NumA3];

var WordQ4 = Words[NumA4-1];
var WordA4 = Words[NumA4];


player.SetVar("NumA",NumA);
player.SetVar("NumA1",NumA1);
player.SetVar("NumA2",NumA2);
player.SetVar("NumA3",NumA3);
player.SetVar("NumA4",NumA4);

player.SetVar("WordQ",WordQ);
player.SetVar("WordQ1",WordQ1);
player.SetVar("WordQ2",WordQ2);
player.SetVar("WordQ3",WordQ3);
player.SetVar("WordQ4",WordQ4);


player.SetVar("WordA",WordA);
player.SetVar("WordA1",WordA1);
player.SetVar("WordA2",WordA2);
player.SetVar("WordA3",WordA3);
player.SetVar("WordA4",WordA4);

}

function Script29()
{
  // Odd = Engligh question, next Even = Arabic answer;
// random is even for arabic answer;

var player = GetPlayer();

var Words = 83; 

var NumA= Math.floor(Math.random()*Words+1)*2;
var NumA1= Math.floor(Math.random()*Words+1)*2;
var NumA2= Math.floor(Math.random()*Words+1)*2;
var NumA3= Math.floor(Math.random()*Words+1)*2;
var NumA4= Math.floor(Math.random()*Words+1)*2;







if ( (NumA1 == NumA)  || (NumA1 ==  NumA2) || (NumA1 ==  NumA3) || (NumA1 ==  NumA4) ) {
  var NumA1= 0
}

if ( (NumA2 == NumA)  || (NumA2 ==  NumA1) || (NumA2 ==  NumA3) || (NumA2 ==  NumA4) ) {
  var NumA2=  0
}

if ( (NumA3 == NumA)  || (NumA3 ==  NumA1) || (NumA3 ==  NumA2) || (NumA3 ==  NumA4) ) {
  var NumA3= 0
}


if ( (NumA4 == NumA)  || (NumA4 ==  NumA1) || (NumA4 ==  NumA2) || (NumA4 ==  NumA3) ) {
  var NumA4= 0
}


var Words= [
"Free Answer for You",

"	gaining	"	,	"	كسب	"	,
"	galleries	"	,	"	المعارض	"	,
"	gallery	"	,	"	صالة عرض	"	,
"	game	"	,	"	لعبه	"	,
"	games	"	,	"	ألعاب	"	,
"	garage	"	,	"	كراج	"	,
"	garbage	"	,	"	قمامة	"	,
"	garden	"	,	"	حديقة	"	,
"	gas	"	,	"	غاز	"	,
"	gate	"	,	"	بوابة	"	,
"	gave	"	,	"	أعطى	"	,
"	general	"	,	"	جنرال لواء	"	,
"	generally	"	,	"	عموما	"	,
"	generate	"	,	"	انشاء	"	,
"	generous	"	,	"	كريم	"	,
"	genius	"	,	"	العبقري	"	,
"	geography	"	,	"	جغرافية	"	,
"	Germans	"	,	"	الألمان	"	,
"	Germany	"	,	"	ألمانيا	"	,
"	gerunds	"	,	"	أسماء المصدر	"	,
"	gesture	"	,	"	إيماءة	"	,
"	get	"	,	"	احصل على	"	,
"	getting	"	,	"	الحصول على	"	,
"	gift	"	,	"	هدية مجانية	"	,
"	gifted	"	,	"	موهوب	"	,
"	girl	"	,	"	فتاة	"	,
"	give	"	,	"	يعطي	"	,
"	given	"	,	"	معطى	"	,
"	giving	"	,	"	إعطاء	"	,
"	glad	"	,	"	مسرور	"	,
"	glasses	"	,	"	نظارات	"	,
"	global	"	,	"	عالمي	"	,
"	globalized	"	,	"	معولم	"	,
"	glove	"	,	"	قفاز	"	,
"	go	"	,	"	يذهب	"	,
"	goal	"	,	"	هدف	"	,
"	going	"	,	"	ذاهب	"	,
"	gold	"	,	"	ذهب	"	,
"	golden	"	,	"	ذهبي	"	,
"	goldsmith	"	,	"	صائغ	"	,
"	gone	"	,	"	ذهب	"	,
"	goodbye	"	,	"	مع السلامة	"	,
"	goods	"	,	"	بضائع	"	,
"	got	"	,	"	يملك	"	,
"	gotten	"	,	"	حصلت	"	,
"	government	"	,	"	حكومة	"	,
"	governments	"	,	"	حكومات	"	,
"	grabbed	"	,	"	اقتطف	"	,
"	grade	"	,	"	صف دراسي	"	,
"	grades	"	,	"	درجات	"	,
"	graduate	"	,	"	متخرج	"	,
"	graduated	"	,	"	تخرج	"	,
"	graduates	"	,	"	خريجين	"	,
"	graduation	"	,	"	تخرج	"	,
"	grammar	"	,	"	قواعد	"	,
"	grand	"	,	"	كبير	"	,
"	grandparents	"	,	"	الجد والجدة	"	,
"	grass	"	,	"	عشب	"	,
"	gratitude	"	,	"	امتنان	"	,
"	great	"	,	"	عظيم	"	,
"	Greece	"	,	"	اليونان	"	,
"	Greek	"	,	"	يوناني	"	,
"	green	"	,	"	لون أخضر	"	,
"	greeted	"	,	"	بادر بالتحية	"	,
"	greeting	"	,	"	تحية	"	,
"	greet	"	,	"	يحيي	"	,
"	grew	"	,	"	نمت	"	,
"	grocery	"	,	"	خضروات	"	,
"	ground	"	,	"	أرض	"	,
"	group	"	,	"	مجموعة	"	,
"	groups	"	,	"	مجموعات	"	,
"	grow	"	,	"	تنمو	"	,
"	growing	"	,	"	متزايد	"	,
"	growth	"	,	"	نمو	"	,
"	guaranteed	"	,	"	مضمون	"	,
"	guard	"	,	"	يحمي	"	,
"	guess	"	,	"	يخمن	"	,
"	guesses	"	,	"	تخمينات	"	,
"	guest	"	,	"	زائر	"	,
"	guests	"	,	"	ضيوف	"	,
"	guidance	"	,	"	إرشاد	"	,
"	guide	"	,	"	يرشد	"	,
"	guy	"	,	"	شاب	"	,



];

var WordQ = Words[NumA-1];
var WordA = Words[NumA];

var WordQ1 = Words[NumA1-1];
var WordA1 = Words[NumA1];

var WordQ2 = Words[NumA2-1];
var WordA2 = Words[NumA2];

var WordQ3 = Words[NumA3-1];
var WordA3 = Words[NumA3];

var WordQ4 = Words[NumA4-1];
var WordA4 = Words[NumA4];


player.SetVar("NumA",NumA);
player.SetVar("NumA1",NumA1);
player.SetVar("NumA2",NumA2);
player.SetVar("NumA3",NumA3);
player.SetVar("NumA4",NumA4);

player.SetVar("WordQ",WordQ);
player.SetVar("WordQ1",WordQ1);
player.SetVar("WordQ2",WordQ2);
player.SetVar("WordQ3",WordQ3);
player.SetVar("WordQ4",WordQ4);


player.SetVar("WordA",WordA);
player.SetVar("WordA1",WordA1);
player.SetVar("WordA2",WordA2);
player.SetVar("WordA3",WordA3);
player.SetVar("WordA4",WordA4);

}

function Script30()
{
  // Odd = Engligh question, next Even = Arabic answer;
// random is even for arabic answer;

var player = GetPlayer();

var Words = 83; 

var NumA= Math.floor(Math.random()*Words+1)*2;
var NumA1= Math.floor(Math.random()*Words+1)*2;
var NumA2= Math.floor(Math.random()*Words+1)*2;
var NumA3= Math.floor(Math.random()*Words+1)*2;
var NumA4= Math.floor(Math.random()*Words+1)*2;







if ( (NumA1 == NumA)  || (NumA1 ==  NumA2) || (NumA1 ==  NumA3) || (NumA1 ==  NumA4) ) {
  var NumA1= 0
}

if ( (NumA2 == NumA)  || (NumA2 ==  NumA1) || (NumA2 ==  NumA3) || (NumA2 ==  NumA4) ) {
  var NumA2=  0
}

if ( (NumA3 == NumA)  || (NumA3 ==  NumA1) || (NumA3 ==  NumA2) || (NumA3 ==  NumA4) ) {
  var NumA3= 0
}


if ( (NumA4 == NumA)  || (NumA4 ==  NumA1) || (NumA4 ==  NumA2) || (NumA4 ==  NumA3) ) {
  var NumA4= 0
}


var Words= [
"Free Answer for You",

"	gaining	"	,	"	كسب	"	,
"	galleries	"	,	"	المعارض	"	,
"	gallery	"	,	"	صالة عرض	"	,
"	game	"	,	"	لعبه	"	,
"	games	"	,	"	ألعاب	"	,
"	garage	"	,	"	كراج	"	,
"	garbage	"	,	"	قمامة	"	,
"	garden	"	,	"	حديقة	"	,
"	gas	"	,	"	غاز	"	,
"	gate	"	,	"	بوابة	"	,
"	gave	"	,	"	أعطى	"	,
"	general	"	,	"	جنرال لواء	"	,
"	generally	"	,	"	عموما	"	,
"	generate	"	,	"	انشاء	"	,
"	generous	"	,	"	كريم	"	,
"	genius	"	,	"	العبقري	"	,
"	geography	"	,	"	جغرافية	"	,
"	Germans	"	,	"	الألمان	"	,
"	Germany	"	,	"	ألمانيا	"	,
"	gerunds	"	,	"	أسماء المصدر	"	,
"	gesture	"	,	"	إيماءة	"	,
"	get	"	,	"	احصل على	"	,
"	getting	"	,	"	الحصول على	"	,
"	gift	"	,	"	هدية مجانية	"	,
"	gifted	"	,	"	موهوب	"	,
"	girl	"	,	"	فتاة	"	,
"	give	"	,	"	يعطي	"	,
"	given	"	,	"	معطى	"	,
"	giving	"	,	"	إعطاء	"	,
"	glad	"	,	"	مسرور	"	,
"	glasses	"	,	"	نظارات	"	,
"	global	"	,	"	عالمي	"	,
"	globalized	"	,	"	معولم	"	,
"	glove	"	,	"	قفاز	"	,
"	go	"	,	"	يذهب	"	,
"	goal	"	,	"	هدف	"	,
"	going	"	,	"	ذاهب	"	,
"	gold	"	,	"	ذهب	"	,
"	golden	"	,	"	ذهبي	"	,
"	goldsmith	"	,	"	صائغ	"	,
"	gone	"	,	"	ذهب	"	,
"	goodbye	"	,	"	مع السلامة	"	,
"	goods	"	,	"	بضائع	"	,
"	got	"	,	"	يملك	"	,
"	gotten	"	,	"	حصلت	"	,
"	government	"	,	"	حكومة	"	,
"	governments	"	,	"	حكومات	"	,
"	grabbed	"	,	"	اقتطف	"	,
"	grade	"	,	"	صف دراسي	"	,
"	grades	"	,	"	درجات	"	,
"	graduate	"	,	"	متخرج	"	,
"	graduated	"	,	"	تخرج	"	,
"	graduates	"	,	"	خريجين	"	,
"	graduation	"	,	"	تخرج	"	,
"	grammar	"	,	"	قواعد	"	,
"	grand	"	,	"	كبير	"	,
"	grandparents	"	,	"	الجد والجدة	"	,
"	grass	"	,	"	عشب	"	,
"	gratitude	"	,	"	امتنان	"	,
"	great	"	,	"	عظيم	"	,
"	Greece	"	,	"	اليونان	"	,
"	Greek	"	,	"	يوناني	"	,
"	green	"	,	"	لون أخضر	"	,
"	greeted	"	,	"	بادر بالتحية	"	,
"	greeting	"	,	"	تحية	"	,
"	greet	"	,	"	يحيي	"	,
"	grew	"	,	"	نمت	"	,
"	grocery	"	,	"	خضروات	"	,
"	ground	"	,	"	أرض	"	,
"	group	"	,	"	مجموعة	"	,
"	groups	"	,	"	مجموعات	"	,
"	grow	"	,	"	تنمو	"	,
"	growing	"	,	"	متزايد	"	,
"	growth	"	,	"	نمو	"	,
"	guaranteed	"	,	"	مضمون	"	,
"	guard	"	,	"	يحمي	"	,
"	guess	"	,	"	يخمن	"	,
"	guesses	"	,	"	تخمينات	"	,
"	guest	"	,	"	زائر	"	,
"	guests	"	,	"	ضيوف	"	,
"	guidance	"	,	"	إرشاد	"	,
"	guide	"	,	"	يرشد	"	,
"	guy	"	,	"	شاب	"	,



];

var WordQ = Words[NumA-1];
var WordA = Words[NumA];

var WordQ1 = Words[NumA1-1];
var WordA1 = Words[NumA1];

var WordQ2 = Words[NumA2-1];
var WordA2 = Words[NumA2];

var WordQ3 = Words[NumA3-1];
var WordA3 = Words[NumA3];

var WordQ4 = Words[NumA4-1];
var WordA4 = Words[NumA4];


player.SetVar("NumA",NumA);
player.SetVar("NumA1",NumA1);
player.SetVar("NumA2",NumA2);
player.SetVar("NumA3",NumA3);
player.SetVar("NumA4",NumA4);

player.SetVar("WordQ",WordQ);
player.SetVar("WordQ1",WordQ1);
player.SetVar("WordQ2",WordQ2);
player.SetVar("WordQ3",WordQ3);
player.SetVar("WordQ4",WordQ4);


player.SetVar("WordA",WordA);
player.SetVar("WordA1",WordA1);
player.SetVar("WordA2",WordA2);
player.SetVar("WordA3",WordA3);
player.SetVar("WordA4",WordA4);

}

function Script31()
{
  // Odd = Engligh question, next Even = Arabic answer;
// random is even for arabic answer;

var player = GetPlayer();

var Words = 103; 

var NumA= Math.floor(Math.random()*Words+1)*2;
var NumA1= Math.floor(Math.random()*Words+1)*2;
var NumA2= Math.floor(Math.random()*Words+1)*2;
var NumA3= Math.floor(Math.random()*Words+1)*2;
var NumA4= Math.floor(Math.random()*Words+1)*2;







if ( (NumA1 == NumA)  || (NumA1 ==  NumA2) || (NumA1 ==  NumA3) || (NumA1 ==  NumA4) ) {
  var NumA1= 0
}

if ( (NumA2 == NumA)  || (NumA2 ==  NumA1) || (NumA2 ==  NumA3) || (NumA2 ==  NumA4) ) {
  var NumA2=  0
}

if ( (NumA3 == NumA)  || (NumA3 ==  NumA1) || (NumA3 ==  NumA2) || (NumA3 ==  NumA4) ) {
  var NumA3= 0
}


if ( (NumA4 == NumA)  || (NumA4 ==  NumA1) || (NumA4 ==  NumA2) || (NumA4 ==  NumA3) ) {
  var NumA4= 0
}


var Words= [
"Free Answer for You",


"	habits	"	,	"	عادات	"	,
"	had	"	,	"	ملك	"	,
"	hair	"	,	"	شعر	"	,
"	hairbrush	"	,	"	فرشاة للشعر	"	,
"	half	"	,	"	نصف	"	,
"	hammer	"	,	"	شاكوش	"	,
"	hand	"	,	"	يسلم	"	,
"	hand	"	,	"	كف	"	,
"	handing	"	,	"	تسليم	"	,
"	handle	"	,	"	يتعامل	"	,
"	hands	"	,	"	أيادي	"	,
"	hang	"	,	"	يشنق	"	,
"	hanging	"	,	"	شنقا	"	,
"	happen	"	,	"	يحدث	"	,
"	happened	"	,	"	حدث	"	,
"	happening	"	,	"	حادث	"	,
"	happy	"	,	"	سعيد	"	,
"	harbor	"	,	"	مرفأ	"	,
"	hard	"	,	"	صعب	"	,
"	harder	"	,	"	أصعب	"	,
"	hardly	"	,	"	بالكاد	"	,
"	hardworking	"	,	"	العمل الجاد	"	,
"	harmony	"	,	"	انسجام	"	,
"	hate	"	,	"	يكره	"	,
"	having	"	,	"	نأخذ	"	,
"	head	"	,	"	رأس رئيس	"	,
"	headlight	"	,	"	مصباح أمامي	"	,
"	heads	"	,	"	رؤساء	"	,
"	health	"	,	"	صحة	"	,
"	healthy	"	,	"	صحي	"	,
"	hear	"	,	"	يسمع	"	,
"	heard	"	,	"	سمع	"	,
"	heart	"	,	"	قلب	"	,
"	hearts	"	,	"	قلوب	"	,
"	heat	"	,	"	حرارة	"	,
"	held	"	,	"	محتجز	"	,
"	help	"	,	"	يساعد	"	,
"	helped	"	,	"	ساعد	"	,
"	helpful	"	,	"	متعاون	"	,
"	her	"	,	"	ها	"	,
"	hey	"	,	"	مهلا	"	,
"	hide	"	,	"	يختفي	"	,
"	high	"	,	"	مرتفع	"	,
"	higher	"	,	"	أعلى	"	,
"	highest	"	,	"	الأعلى	"	,
"	high interest	"	,	"	فائدة المرتفعة	"	,
"	high speed	"	,	"	سرعه العاليه	"	,
"	high tech	"	,	"	تكنولوجيا العالية	"	,
"	highway	"	,	"	طريق السريع	"	,
"	highways	"	,	"	طرق السريعة	"	,
"	hike	"	,	"	رفع	"	,
"	hiking	"	,	"	جولة على الأقدام	"	,
"	him	"	,	"	له	"	,
"	himself	"	,	"	نفسه	"	,
"	hire	"	,	"	توظيف	"	,
"	historians	"	,	"	مؤرخون	"	,
"	historical	"	,	"	تاريخي	"	,
"	history	"	,	"	تاريخ	"	,
"	hit	"	,	"	يضرب	"	,
"	hitting	"	,	"	ضرب	"	,
"	hold	"	,	"	معلق	"	,
"	holder	"	,	"	مالك	"	,
"	holy	"	,	"	مقدس	"	,
"	home page	"	,	"	صفحة الرئيسية	"	,
"	homecoming	"	,	"	عودة إلى الوطن	"	,
"	homemade	"	,	"	محلي الصنع	"	,
"	homesick	"	,	"	مشتاق للعودة إلى الوطن	"	,
"	homework	"	,	"	عمل في المنزل	"	,
"	honest	"	,	"	صادق	"	,
"	honk	"	,	"	بوق	"	,
"	honor	"	,	"	شرف	"	,
"	hood	"	,	"	غطاء محرك السيارة	"	,
"	hope	"	,	"	أمل	"	,
"	hoped	"	,	"	امنية	"	,
"	hopeless	"	,	"	ميئوس منه	"	,
"	horn	"	,	"	بوق	"	,
"	horns	"	,	"	قرون	"	,
"	horse	"	,	"	حصان	"	,
"	horses	"	,	"	خيل	"	,
"	hose	"	,	"	خرطوم مياه	"	,
"	hospital	"	,	"	مستشفى	"	,
"	host	"	,	"	مضيف	"	,
"	hot	"	,	"	حار	"	,
"	hotel	"	,	"	فندق	"	,
"	hottest	"	,	"	الاسخن	"	,
"	hour	"	,	"	ساعة	"	,
"	hours	"	,	"	ساعات	"	,
"	household	"	,	"	أسرة	"	,
"	housing	"	,	"	إسكان	"	,
"	how	"	,	"	كيف	"	,
"	however	"	,	"	ومع ذلك	"	,
"	huge	"	,	"	ضخم	"	,
"	human	"	,	"	بشري	"	,
"	humanitarian	"	,	"	إنساني	"	,
"	humor	"	,	"	دعابة	"	,
"	hundred	"	,	"	مائة	"	,
"	hundreds	"	,	"	مئات	"	,
"	hung	"	,	"	يتعلق	"	,
"	hungry	"	,	"	جوعان	"	,
"	hurry	"	,	"	عجل	"	,
"	hurt	"	,	"	جرح	"	,
"	husband	"	,	"	زوج	"	,
"	hypothetical	"	,	"	افتراضي	"	,



];

var WordQ = Words[NumA-1];
var WordA = Words[NumA];

var WordQ1 = Words[NumA1-1];
var WordA1 = Words[NumA1];

var WordQ2 = Words[NumA2-1];
var WordA2 = Words[NumA2];

var WordQ3 = Words[NumA3-1];
var WordA3 = Words[NumA3];

var WordQ4 = Words[NumA4-1];
var WordA4 = Words[NumA4];


player.SetVar("NumA",NumA);
player.SetVar("NumA1",NumA1);
player.SetVar("NumA2",NumA2);
player.SetVar("NumA3",NumA3);
player.SetVar("NumA4",NumA4);

player.SetVar("WordQ",WordQ);
player.SetVar("WordQ1",WordQ1);
player.SetVar("WordQ2",WordQ2);
player.SetVar("WordQ3",WordQ3);
player.SetVar("WordQ4",WordQ4);


player.SetVar("WordA",WordA);
player.SetVar("WordA1",WordA1);
player.SetVar("WordA2",WordA2);
player.SetVar("WordA3",WordA3);
player.SetVar("WordA4",WordA4);

}

function Script32()
{
  // Odd = Engligh question, next Even = Arabic answer;
// random is even for arabic answer;

var player = GetPlayer();

var Words = 103; 

var NumA= Math.floor(Math.random()*Words+1)*2;
var NumA1= Math.floor(Math.random()*Words+1)*2;
var NumA2= Math.floor(Math.random()*Words+1)*2;
var NumA3= Math.floor(Math.random()*Words+1)*2;
var NumA4= Math.floor(Math.random()*Words+1)*2;







if ( (NumA1 == NumA)  || (NumA1 ==  NumA2) || (NumA1 ==  NumA3) || (NumA1 ==  NumA4) ) {
  var NumA1= 0
}

if ( (NumA2 == NumA)  || (NumA2 ==  NumA1) || (NumA2 ==  NumA3) || (NumA2 ==  NumA4) ) {
  var NumA2=  0
}

if ( (NumA3 == NumA)  || (NumA3 ==  NumA1) || (NumA3 ==  NumA2) || (NumA3 ==  NumA4) ) {
  var NumA3= 0
}


if ( (NumA4 == NumA)  || (NumA4 ==  NumA1) || (NumA4 ==  NumA2) || (NumA4 ==  NumA3) ) {
  var NumA4= 0
}


var Words= [
"Free Answer for You",


"	habits	"	,	"	عادات	"	,
"	had	"	,	"	ملك	"	,
"	hair	"	,	"	شعر	"	,
"	hairbrush	"	,	"	فرشاة للشعر	"	,
"	half	"	,	"	نصف	"	,
"	hammer	"	,	"	شاكوش	"	,
"	hand	"	,	"	يسلم	"	,
"	hand	"	,	"	كف	"	,
"	handing	"	,	"	تسليم	"	,
"	handle	"	,	"	يتعامل	"	,
"	hands	"	,	"	أيادي	"	,
"	hang	"	,	"	يشنق	"	,
"	hanging	"	,	"	شنقا	"	,
"	happen	"	,	"	يحدث	"	,
"	happened	"	,	"	حدث	"	,
"	happening	"	,	"	حادث	"	,
"	happy	"	,	"	سعيد	"	,
"	harbor	"	,	"	مرفأ	"	,
"	hard	"	,	"	صعب	"	,
"	harder	"	,	"	أصعب	"	,
"	hardly	"	,	"	بالكاد	"	,
"	hardworking	"	,	"	العمل الجاد	"	,
"	harmony	"	,	"	انسجام	"	,
"	hate	"	,	"	يكره	"	,
"	having	"	,	"	نأخذ	"	,
"	head	"	,	"	رأس رئيس	"	,
"	headlight	"	,	"	مصباح أمامي	"	,
"	heads	"	,	"	رؤساء	"	,
"	health	"	,	"	صحة	"	,
"	healthy	"	,	"	صحي	"	,
"	hear	"	,	"	يسمع	"	,
"	heard	"	,	"	سمع	"	,
"	heart	"	,	"	قلب	"	,
"	hearts	"	,	"	قلوب	"	,
"	heat	"	,	"	حرارة	"	,
"	held	"	,	"	محتجز	"	,
"	help	"	,	"	يساعد	"	,
"	helped	"	,	"	ساعد	"	,
"	helpful	"	,	"	متعاون	"	,
"	her	"	,	"	ها	"	,
"	hey	"	,	"	مهلا	"	,
"	hide	"	,	"	يختفي	"	,
"	high	"	,	"	مرتفع	"	,
"	higher	"	,	"	أعلى	"	,
"	highest	"	,	"	الأعلى	"	,
"	high interest	"	,	"	فائدة المرتفعة	"	,
"	high speed	"	,	"	سرعه العاليه	"	,
"	high tech	"	,	"	تكنولوجيا العالية	"	,
"	highway	"	,	"	طريق السريع	"	,
"	highways	"	,	"	طرق السريعة	"	,
"	hike	"	,	"	رفع	"	,
"	hiking	"	,	"	جولة على الأقدام	"	,
"	him	"	,	"	له	"	,
"	himself	"	,	"	نفسه	"	,
"	hire	"	,	"	توظيف	"	,
"	historians	"	,	"	مؤرخون	"	,
"	historical	"	,	"	تاريخي	"	,
"	history	"	,	"	تاريخ	"	,
"	hit	"	,	"	يضرب	"	,
"	hitting	"	,	"	ضرب	"	,
"	hold	"	,	"	معلق	"	,
"	holder	"	,	"	مالك	"	,
"	holy	"	,	"	مقدس	"	,
"	home page	"	,	"	صفحة الرئيسية	"	,
"	homecoming	"	,	"	عودة إلى الوطن	"	,
"	homemade	"	,	"	محلي الصنع	"	,
"	homesick	"	,	"	مشتاق للعودة إلى الوطن	"	,
"	homework	"	,	"	عمل في المنزل	"	,
"	honest	"	,	"	صادق	"	,
"	honk	"	,	"	بوق	"	,
"	honor	"	,	"	شرف	"	,
"	hood	"	,	"	غطاء محرك السيارة	"	,
"	hope	"	,	"	أمل	"	,
"	hoped	"	,	"	امنية	"	,
"	hopeless	"	,	"	ميئوس منه	"	,
"	horn	"	,	"	بوق	"	,
"	horns	"	,	"	قرون	"	,
"	horse	"	,	"	حصان	"	,
"	horses	"	,	"	خيل	"	,
"	hose	"	,	"	خرطوم مياه	"	,
"	hospital	"	,	"	مستشفى	"	,
"	host	"	,	"	مضيف	"	,
"	hot	"	,	"	حار	"	,
"	hotel	"	,	"	فندق	"	,
"	hottest	"	,	"	الاسخن	"	,
"	hour	"	,	"	ساعة	"	,
"	hours	"	,	"	ساعات	"	,
"	household	"	,	"	أسرة	"	,
"	housing	"	,	"	إسكان	"	,
"	how	"	,	"	كيف	"	,
"	however	"	,	"	ومع ذلك	"	,
"	huge	"	,	"	ضخم	"	,
"	human	"	,	"	بشري	"	,
"	humanitarian	"	,	"	إنساني	"	,
"	humor	"	,	"	دعابة	"	,
"	hundred	"	,	"	مائة	"	,
"	hundreds	"	,	"	مئات	"	,
"	hung	"	,	"	يتعلق	"	,
"	hungry	"	,	"	جوعان	"	,
"	hurry	"	,	"	عجل	"	,
"	hurt	"	,	"	جرح	"	,
"	husband	"	,	"	زوج	"	,
"	hypothetical	"	,	"	افتراضي	"	,



];

var WordQ = Words[NumA-1];
var WordA = Words[NumA];

var WordQ1 = Words[NumA1-1];
var WordA1 = Words[NumA1];

var WordQ2 = Words[NumA2-1];
var WordA2 = Words[NumA2];

var WordQ3 = Words[NumA3-1];
var WordA3 = Words[NumA3];

var WordQ4 = Words[NumA4-1];
var WordA4 = Words[NumA4];


player.SetVar("NumA",NumA);
player.SetVar("NumA1",NumA1);
player.SetVar("NumA2",NumA2);
player.SetVar("NumA3",NumA3);
player.SetVar("NumA4",NumA4);

player.SetVar("WordQ",WordQ);
player.SetVar("WordQ1",WordQ1);
player.SetVar("WordQ2",WordQ2);
player.SetVar("WordQ3",WordQ3);
player.SetVar("WordQ4",WordQ4);


player.SetVar("WordA",WordA);
player.SetVar("WordA1",WordA1);
player.SetVar("WordA2",WordA2);
player.SetVar("WordA3",WordA3);
player.SetVar("WordA4",WordA4);

}

function Script33()
{
  // Odd = Engligh question, next Even = Arabic answer;
// random is even for arabic answer;

var player = GetPlayer();

var Words = 103; 

var NumA= Math.floor(Math.random()*Words+1)*2;
var NumA1= Math.floor(Math.random()*Words+1)*2;
var NumA2= Math.floor(Math.random()*Words+1)*2;
var NumA3= Math.floor(Math.random()*Words+1)*2;
var NumA4= Math.floor(Math.random()*Words+1)*2;







if ( (NumA1 == NumA)  || (NumA1 ==  NumA2) || (NumA1 ==  NumA3) || (NumA1 ==  NumA4) ) {
  var NumA1= 0
}

if ( (NumA2 == NumA)  || (NumA2 ==  NumA1) || (NumA2 ==  NumA3) || (NumA2 ==  NumA4) ) {
  var NumA2=  0
}

if ( (NumA3 == NumA)  || (NumA3 ==  NumA1) || (NumA3 ==  NumA2) || (NumA3 ==  NumA4) ) {
  var NumA3= 0
}


if ( (NumA4 == NumA)  || (NumA4 ==  NumA1) || (NumA4 ==  NumA2) || (NumA4 ==  NumA3) ) {
  var NumA4= 0
}


var Words= [
"Free Answer for You",


"	habits	"	,	"	عادات	"	,
"	had	"	,	"	ملك	"	,
"	hair	"	,	"	شعر	"	,
"	hairbrush	"	,	"	فرشاة للشعر	"	,
"	half	"	,	"	نصف	"	,
"	hammer	"	,	"	شاكوش	"	,
"	hand	"	,	"	يسلم	"	,
"	hand	"	,	"	كف	"	,
"	handing	"	,	"	تسليم	"	,
"	handle	"	,	"	يتعامل	"	,
"	hands	"	,	"	أيادي	"	,
"	hang	"	,	"	يشنق	"	,
"	hanging	"	,	"	شنقا	"	,
"	happen	"	,	"	يحدث	"	,
"	happened	"	,	"	حدث	"	,
"	happening	"	,	"	حادث	"	,
"	happy	"	,	"	سعيد	"	,
"	harbor	"	,	"	مرفأ	"	,
"	hard	"	,	"	صعب	"	,
"	harder	"	,	"	أصعب	"	,
"	hardly	"	,	"	بالكاد	"	,
"	hardworking	"	,	"	العمل الجاد	"	,
"	harmony	"	,	"	انسجام	"	,
"	hate	"	,	"	يكره	"	,
"	having	"	,	"	نأخذ	"	,
"	head	"	,	"	رأس رئيس	"	,
"	headlight	"	,	"	مصباح أمامي	"	,
"	heads	"	,	"	رؤساء	"	,
"	health	"	,	"	صحة	"	,
"	healthy	"	,	"	صحي	"	,
"	hear	"	,	"	يسمع	"	,
"	heard	"	,	"	سمع	"	,
"	heart	"	,	"	قلب	"	,
"	hearts	"	,	"	قلوب	"	,
"	heat	"	,	"	حرارة	"	,
"	held	"	,	"	محتجز	"	,
"	help	"	,	"	يساعد	"	,
"	helped	"	,	"	ساعد	"	,
"	helpful	"	,	"	متعاون	"	,
"	her	"	,	"	ها	"	,
"	hey	"	,	"	مهلا	"	,
"	hide	"	,	"	يختفي	"	,
"	high	"	,	"	مرتفع	"	,
"	higher	"	,	"	أعلى	"	,
"	highest	"	,	"	الأعلى	"	,
"	high interest	"	,	"	فائدة المرتفعة	"	,
"	high speed	"	,	"	سرعه العاليه	"	,
"	high tech	"	,	"	تكنولوجيا العالية	"	,
"	highway	"	,	"	طريق السريع	"	,
"	highways	"	,	"	طرق السريعة	"	,
"	hike	"	,	"	رفع	"	,
"	hiking	"	,	"	جولة على الأقدام	"	,
"	him	"	,	"	له	"	,
"	himself	"	,	"	نفسه	"	,
"	hire	"	,	"	توظيف	"	,
"	historians	"	,	"	مؤرخون	"	,
"	historical	"	,	"	تاريخي	"	,
"	history	"	,	"	تاريخ	"	,
"	hit	"	,	"	يضرب	"	,
"	hitting	"	,	"	ضرب	"	,
"	hold	"	,	"	معلق	"	,
"	holder	"	,	"	مالك	"	,
"	holy	"	,	"	مقدس	"	,
"	home page	"	,	"	صفحة الرئيسية	"	,
"	homecoming	"	,	"	عودة إلى الوطن	"	,
"	homemade	"	,	"	محلي الصنع	"	,
"	homesick	"	,	"	مشتاق للعودة إلى الوطن	"	,
"	homework	"	,	"	عمل في المنزل	"	,
"	honest	"	,	"	صادق	"	,
"	honk	"	,	"	بوق	"	,
"	honor	"	,	"	شرف	"	,
"	hood	"	,	"	غطاء محرك السيارة	"	,
"	hope	"	,	"	أمل	"	,
"	hoped	"	,	"	امنية	"	,
"	hopeless	"	,	"	ميئوس منه	"	,
"	horn	"	,	"	بوق	"	,
"	horns	"	,	"	قرون	"	,
"	horse	"	,	"	حصان	"	,
"	horses	"	,	"	خيل	"	,
"	hose	"	,	"	خرطوم مياه	"	,
"	hospital	"	,	"	مستشفى	"	,
"	host	"	,	"	مضيف	"	,
"	hot	"	,	"	حار	"	,
"	hotel	"	,	"	فندق	"	,
"	hottest	"	,	"	الاسخن	"	,
"	hour	"	,	"	ساعة	"	,
"	hours	"	,	"	ساعات	"	,
"	household	"	,	"	أسرة	"	,
"	housing	"	,	"	إسكان	"	,
"	how	"	,	"	كيف	"	,
"	however	"	,	"	ومع ذلك	"	,
"	huge	"	,	"	ضخم	"	,
"	human	"	,	"	بشري	"	,
"	humanitarian	"	,	"	إنساني	"	,
"	humor	"	,	"	دعابة	"	,
"	hundred	"	,	"	مائة	"	,
"	hundreds	"	,	"	مئات	"	,
"	hung	"	,	"	يتعلق	"	,
"	hungry	"	,	"	جوعان	"	,
"	hurry	"	,	"	عجل	"	,
"	hurt	"	,	"	جرح	"	,
"	husband	"	,	"	زوج	"	,
"	hypothetical	"	,	"	افتراضي	"	,



];

var WordQ = Words[NumA-1];
var WordA = Words[NumA];

var WordQ1 = Words[NumA1-1];
var WordA1 = Words[NumA1];

var WordQ2 = Words[NumA2-1];
var WordA2 = Words[NumA2];

var WordQ3 = Words[NumA3-1];
var WordA3 = Words[NumA3];

var WordQ4 = Words[NumA4-1];
var WordA4 = Words[NumA4];


player.SetVar("NumA",NumA);
player.SetVar("NumA1",NumA1);
player.SetVar("NumA2",NumA2);
player.SetVar("NumA3",NumA3);
player.SetVar("NumA4",NumA4);

player.SetVar("WordQ",WordQ);
player.SetVar("WordQ1",WordQ1);
player.SetVar("WordQ2",WordQ2);
player.SetVar("WordQ3",WordQ3);
player.SetVar("WordQ4",WordQ4);


player.SetVar("WordA",WordA);
player.SetVar("WordA1",WordA1);
player.SetVar("WordA2",WordA2);
player.SetVar("WordA3",WordA3);
player.SetVar("WordA4",WordA4);

}

function Script34()
{
  // Odd = Engligh question, next Even = Arabic answer;
// random is even for arabic answer;

var player = GetPlayer();

var Words = 103; 

var NumA= Math.floor(Math.random()*Words+1)*2;
var NumA1= Math.floor(Math.random()*Words+1)*2;
var NumA2= Math.floor(Math.random()*Words+1)*2;
var NumA3= Math.floor(Math.random()*Words+1)*2;
var NumA4= Math.floor(Math.random()*Words+1)*2;







if ( (NumA1 == NumA)  || (NumA1 ==  NumA2) || (NumA1 ==  NumA3) || (NumA1 ==  NumA4) ) {
  var NumA1= 0
}

if ( (NumA2 == NumA)  || (NumA2 ==  NumA1) || (NumA2 ==  NumA3) || (NumA2 ==  NumA4) ) {
  var NumA2=  0
}

if ( (NumA3 == NumA)  || (NumA3 ==  NumA1) || (NumA3 ==  NumA2) || (NumA3 ==  NumA4) ) {
  var NumA3= 0
}


if ( (NumA4 == NumA)  || (NumA4 ==  NumA1) || (NumA4 ==  NumA2) || (NumA4 ==  NumA3) ) {
  var NumA4= 0
}


var Words= [
"Free Answer for You",


"	habits	"	,	"	عادات	"	,
"	had	"	,	"	ملك	"	,
"	hair	"	,	"	شعر	"	,
"	hairbrush	"	,	"	فرشاة للشعر	"	,
"	half	"	,	"	نصف	"	,
"	hammer	"	,	"	شاكوش	"	,
"	hand	"	,	"	يسلم	"	,
"	hand	"	,	"	كف	"	,
"	handing	"	,	"	تسليم	"	,
"	handle	"	,	"	يتعامل	"	,
"	hands	"	,	"	أيادي	"	,
"	hang	"	,	"	يشنق	"	,
"	hanging	"	,	"	شنقا	"	,
"	happen	"	,	"	يحدث	"	,
"	happened	"	,	"	حدث	"	,
"	happening	"	,	"	حادث	"	,
"	happy	"	,	"	سعيد	"	,
"	harbor	"	,	"	مرفأ	"	,
"	hard	"	,	"	صعب	"	,
"	harder	"	,	"	أصعب	"	,
"	hardly	"	,	"	بالكاد	"	,
"	hardworking	"	,	"	العمل الجاد	"	,
"	harmony	"	,	"	انسجام	"	,
"	hate	"	,	"	يكره	"	,
"	having	"	,	"	نأخذ	"	,
"	head	"	,	"	رأس رئيس	"	,
"	headlight	"	,	"	مصباح أمامي	"	,
"	heads	"	,	"	رؤساء	"	,
"	health	"	,	"	صحة	"	,
"	healthy	"	,	"	صحي	"	,
"	hear	"	,	"	يسمع	"	,
"	heard	"	,	"	سمع	"	,
"	heart	"	,	"	قلب	"	,
"	hearts	"	,	"	قلوب	"	,
"	heat	"	,	"	حرارة	"	,
"	held	"	,	"	محتجز	"	,
"	help	"	,	"	يساعد	"	,
"	helped	"	,	"	ساعد	"	,
"	helpful	"	,	"	متعاون	"	,
"	her	"	,	"	ها	"	,
"	hey	"	,	"	مهلا	"	,
"	hide	"	,	"	يختفي	"	,
"	high	"	,	"	مرتفع	"	,
"	higher	"	,	"	أعلى	"	,
"	highest	"	,	"	الأعلى	"	,
"	high interest	"	,	"	فائدة المرتفعة	"	,
"	high speed	"	,	"	سرعه العاليه	"	,
"	high tech	"	,	"	تكنولوجيا العالية	"	,
"	highway	"	,	"	طريق السريع	"	,
"	highways	"	,	"	طرق السريعة	"	,
"	hike	"	,	"	رفع	"	,
"	hiking	"	,	"	جولة على الأقدام	"	,
"	him	"	,	"	له	"	,
"	himself	"	,	"	نفسه	"	,
"	hire	"	,	"	توظيف	"	,
"	historians	"	,	"	مؤرخون	"	,
"	historical	"	,	"	تاريخي	"	,
"	history	"	,	"	تاريخ	"	,
"	hit	"	,	"	يضرب	"	,
"	hitting	"	,	"	ضرب	"	,
"	hold	"	,	"	معلق	"	,
"	holder	"	,	"	مالك	"	,
"	holy	"	,	"	مقدس	"	,
"	home page	"	,	"	صفحة الرئيسية	"	,
"	homecoming	"	,	"	عودة إلى الوطن	"	,
"	homemade	"	,	"	محلي الصنع	"	,
"	homesick	"	,	"	مشتاق للعودة إلى الوطن	"	,
"	homework	"	,	"	عمل في المنزل	"	,
"	honest	"	,	"	صادق	"	,
"	honk	"	,	"	بوق	"	,
"	honor	"	,	"	شرف	"	,
"	hood	"	,	"	غطاء محرك السيارة	"	,
"	hope	"	,	"	أمل	"	,
"	hoped	"	,	"	امنية	"	,
"	hopeless	"	,	"	ميئوس منه	"	,
"	horn	"	,	"	بوق	"	,
"	horns	"	,	"	قرون	"	,
"	horse	"	,	"	حصان	"	,
"	horses	"	,	"	خيل	"	,
"	hose	"	,	"	خرطوم مياه	"	,
"	hospital	"	,	"	مستشفى	"	,
"	host	"	,	"	مضيف	"	,
"	hot	"	,	"	حار	"	,
"	hotel	"	,	"	فندق	"	,
"	hottest	"	,	"	الاسخن	"	,
"	hour	"	,	"	ساعة	"	,
"	hours	"	,	"	ساعات	"	,
"	household	"	,	"	أسرة	"	,
"	housing	"	,	"	إسكان	"	,
"	how	"	,	"	كيف	"	,
"	however	"	,	"	ومع ذلك	"	,
"	huge	"	,	"	ضخم	"	,
"	human	"	,	"	بشري	"	,
"	humanitarian	"	,	"	إنساني	"	,
"	humor	"	,	"	دعابة	"	,
"	hundred	"	,	"	مائة	"	,
"	hundreds	"	,	"	مئات	"	,
"	hung	"	,	"	يتعلق	"	,
"	hungry	"	,	"	جوعان	"	,
"	hurry	"	,	"	عجل	"	,
"	hurt	"	,	"	جرح	"	,
"	husband	"	,	"	زوج	"	,
"	hypothetical	"	,	"	افتراضي	"	,



];

var WordQ = Words[NumA-1];
var WordA = Words[NumA];

var WordQ1 = Words[NumA1-1];
var WordA1 = Words[NumA1];

var WordQ2 = Words[NumA2-1];
var WordA2 = Words[NumA2];

var WordQ3 = Words[NumA3-1];
var WordA3 = Words[NumA3];

var WordQ4 = Words[NumA4-1];
var WordA4 = Words[NumA4];


player.SetVar("NumA",NumA);
player.SetVar("NumA1",NumA1);
player.SetVar("NumA2",NumA2);
player.SetVar("NumA3",NumA3);
player.SetVar("NumA4",NumA4);

player.SetVar("WordQ",WordQ);
player.SetVar("WordQ1",WordQ1);
player.SetVar("WordQ2",WordQ2);
player.SetVar("WordQ3",WordQ3);
player.SetVar("WordQ4",WordQ4);


player.SetVar("WordA",WordA);
player.SetVar("WordA1",WordA1);
player.SetVar("WordA2",WordA2);
player.SetVar("WordA3",WordA3);
player.SetVar("WordA4",WordA4);

}

function Script35()
{
  // Odd = Engligh question, next Even = Arabic answer;
// random is even for arabic answer;

var player = GetPlayer();

var Words = 103; 

var NumA= Math.floor(Math.random()*Words+1)*2;
var NumA1= Math.floor(Math.random()*Words+1)*2;
var NumA2= Math.floor(Math.random()*Words+1)*2;
var NumA3= Math.floor(Math.random()*Words+1)*2;
var NumA4= Math.floor(Math.random()*Words+1)*2;







if ( (NumA1 == NumA)  || (NumA1 ==  NumA2) || (NumA1 ==  NumA3) || (NumA1 ==  NumA4) ) {
  var NumA1= 0
}

if ( (NumA2 == NumA)  || (NumA2 ==  NumA1) || (NumA2 ==  NumA3) || (NumA2 ==  NumA4) ) {
  var NumA2=  0
}

if ( (NumA3 == NumA)  || (NumA3 ==  NumA1) || (NumA3 ==  NumA2) || (NumA3 ==  NumA4) ) {
  var NumA3= 0
}


if ( (NumA4 == NumA)  || (NumA4 ==  NumA1) || (NumA4 ==  NumA2) || (NumA4 ==  NumA3) ) {
  var NumA4= 0
}


var Words= [
"Free Answer for You",


"	habits	"	,	"	عادات	"	,
"	had	"	,	"	ملك	"	,
"	hair	"	,	"	شعر	"	,
"	hairbrush	"	,	"	فرشاة للشعر	"	,
"	half	"	,	"	نصف	"	,
"	hammer	"	,	"	شاكوش	"	,
"	hand	"	,	"	يسلم	"	,
"	hand	"	,	"	كف	"	,
"	handing	"	,	"	تسليم	"	,
"	handle	"	,	"	يتعامل	"	,
"	hands	"	,	"	أيادي	"	,
"	hang	"	,	"	يشنق	"	,
"	hanging	"	,	"	شنقا	"	,
"	happen	"	,	"	يحدث	"	,
"	happened	"	,	"	حدث	"	,
"	happening	"	,	"	حادث	"	,
"	happy	"	,	"	سعيد	"	,
"	harbor	"	,	"	مرفأ	"	,
"	hard	"	,	"	صعب	"	,
"	harder	"	,	"	أصعب	"	,
"	hardly	"	,	"	بالكاد	"	,
"	hardworking	"	,	"	العمل الجاد	"	,
"	harmony	"	,	"	انسجام	"	,
"	hate	"	,	"	يكره	"	,
"	having	"	,	"	نأخذ	"	,
"	head	"	,	"	رأس رئيس	"	,
"	headlight	"	,	"	مصباح أمامي	"	,
"	heads	"	,	"	رؤساء	"	,
"	health	"	,	"	صحة	"	,
"	healthy	"	,	"	صحي	"	,
"	hear	"	,	"	يسمع	"	,
"	heard	"	,	"	سمع	"	,
"	heart	"	,	"	قلب	"	,
"	hearts	"	,	"	قلوب	"	,
"	heat	"	,	"	حرارة	"	,
"	held	"	,	"	محتجز	"	,
"	help	"	,	"	يساعد	"	,
"	helped	"	,	"	ساعد	"	,
"	helpful	"	,	"	متعاون	"	,
"	her	"	,	"	ها	"	,
"	hey	"	,	"	مهلا	"	,
"	hide	"	,	"	يختفي	"	,
"	high	"	,	"	مرتفع	"	,
"	higher	"	,	"	أعلى	"	,
"	highest	"	,	"	الأعلى	"	,
"	high interest	"	,	"	فائدة المرتفعة	"	,
"	high speed	"	,	"	سرعه العاليه	"	,
"	high tech	"	,	"	تكنولوجيا العالية	"	,
"	highway	"	,	"	طريق السريع	"	,
"	highways	"	,	"	طرق السريعة	"	,
"	hike	"	,	"	رفع	"	,
"	hiking	"	,	"	جولة على الأقدام	"	,
"	him	"	,	"	له	"	,
"	himself	"	,	"	نفسه	"	,
"	hire	"	,	"	توظيف	"	,
"	historians	"	,	"	مؤرخون	"	,
"	historical	"	,	"	تاريخي	"	,
"	history	"	,	"	تاريخ	"	,
"	hit	"	,	"	يضرب	"	,
"	hitting	"	,	"	ضرب	"	,
"	hold	"	,	"	معلق	"	,
"	holder	"	,	"	مالك	"	,
"	holy	"	,	"	مقدس	"	,
"	home page	"	,	"	صفحة الرئيسية	"	,
"	homecoming	"	,	"	عودة إلى الوطن	"	,
"	homemade	"	,	"	محلي الصنع	"	,
"	homesick	"	,	"	مشتاق للعودة إلى الوطن	"	,
"	homework	"	,	"	عمل في المنزل	"	,
"	honest	"	,	"	صادق	"	,
"	honk	"	,	"	بوق	"	,
"	honor	"	,	"	شرف	"	,
"	hood	"	,	"	غطاء محرك السيارة	"	,
"	hope	"	,	"	أمل	"	,
"	hoped	"	,	"	امنية	"	,
"	hopeless	"	,	"	ميئوس منه	"	,
"	horn	"	,	"	بوق	"	,
"	horns	"	,	"	قرون	"	,
"	horse	"	,	"	حصان	"	,
"	horses	"	,	"	خيل	"	,
"	hose	"	,	"	خرطوم مياه	"	,
"	hospital	"	,	"	مستشفى	"	,
"	host	"	,	"	مضيف	"	,
"	hot	"	,	"	حار	"	,
"	hotel	"	,	"	فندق	"	,
"	hottest	"	,	"	الاسخن	"	,
"	hour	"	,	"	ساعة	"	,
"	hours	"	,	"	ساعات	"	,
"	household	"	,	"	أسرة	"	,
"	housing	"	,	"	إسكان	"	,
"	how	"	,	"	كيف	"	,
"	however	"	,	"	ومع ذلك	"	,
"	huge	"	,	"	ضخم	"	,
"	human	"	,	"	بشري	"	,
"	humanitarian	"	,	"	إنساني	"	,
"	humor	"	,	"	دعابة	"	,
"	hundred	"	,	"	مائة	"	,
"	hundreds	"	,	"	مئات	"	,
"	hung	"	,	"	يتعلق	"	,
"	hungry	"	,	"	جوعان	"	,
"	hurry	"	,	"	عجل	"	,
"	hurt	"	,	"	جرح	"	,
"	husband	"	,	"	زوج	"	,
"	hypothetical	"	,	"	افتراضي	"	,



];

var WordQ = Words[NumA-1];
var WordA = Words[NumA];

var WordQ1 = Words[NumA1-1];
var WordA1 = Words[NumA1];

var WordQ2 = Words[NumA2-1];
var WordA2 = Words[NumA2];

var WordQ3 = Words[NumA3-1];
var WordA3 = Words[NumA3];

var WordQ4 = Words[NumA4-1];
var WordA4 = Words[NumA4];


player.SetVar("NumA",NumA);
player.SetVar("NumA1",NumA1);
player.SetVar("NumA2",NumA2);
player.SetVar("NumA3",NumA3);
player.SetVar("NumA4",NumA4);

player.SetVar("WordQ",WordQ);
player.SetVar("WordQ1",WordQ1);
player.SetVar("WordQ2",WordQ2);
player.SetVar("WordQ3",WordQ3);
player.SetVar("WordQ4",WordQ4);


player.SetVar("WordA",WordA);
player.SetVar("WordA1",WordA1);
player.SetVar("WordA2",WordA2);
player.SetVar("WordA3",WordA3);
player.SetVar("WordA4",WordA4);

}

function Script36()
{
  // Odd = Engligh question, next Even = Arabic answer;
// random is even for arabic answer;

var player = GetPlayer();

var Words = 96; 

var NumA= Math.floor(Math.random()*Words+1)*2;
var NumA1= Math.floor(Math.random()*Words+1)*2;
var NumA2= Math.floor(Math.random()*Words+1)*2;
var NumA3= Math.floor(Math.random()*Words+1)*2;
var NumA4= Math.floor(Math.random()*Words+1)*2;







if ( (NumA1 == NumA)  || (NumA1 ==  NumA2) || (NumA1 ==  NumA3) || (NumA1 ==  NumA4) ) {
  var NumA1= 0
}

if ( (NumA2 == NumA)  || (NumA2 ==  NumA1) || (NumA2 ==  NumA3) || (NumA2 ==  NumA4) ) {
  var NumA2=  0
}

if ( (NumA3 == NumA)  || (NumA3 ==  NumA1) || (NumA3 ==  NumA2) || (NumA3 ==  NumA4) ) {
  var NumA3= 0
}


if ( (NumA4 == NumA)  || (NumA4 ==  NumA1) || (NumA4 ==  NumA2) || (NumA4 ==  NumA3) ) {
  var NumA4= 0
}


var Words= [
"Free Answer for You",

"	ice	"	,	"	جليد	"	,
"	idea	"	,	"	فكرة	"	,
"	ideas	"	,	"	أفكار	"	,
"	identical	"	,	"	مطابق	"	,
"	identified	"	,	"	محدد	"	,
"	identify	"	,	"	يحدد	"	,
"	identities	"	,	"	متطابقات	"	,
"	idiom	"	,	"	تعبير مجازي	"	,
"	idioms	"	,	"	تعابير	"	,
"	if	"	,	"	إذا	"	,
"	if-clause	"	,	"	جملة شرطية	"	,
"	ignition	"	,	"	اشتعال	"	,
"	ignore	"	,	"	يتجاهل	"	,
"	illustrations	"	,	"	رسوم توضيحية	"	,
"	images	"	,	"	صور	"	,
"	imaginary	"	,	"	خيالي	"	,
"	imagination	"	,	"	خيال	"	,
"	imagine	"	,	"	يتصور	"	,
"	immature	"	,	"	غير ناضج	"	,
"	immediate	"	,	"	مباشر	"	,
"	immediately	"	,	"	في الحال	"	,
"	impact	"	,	"	تأثير	"	,
"	imperative	"	,	"	صيغة الامر	"	,
"	impolite	"	,	"	غير مهذب	"	,
"	importance	"	,	"	أهمية	"	,
"	important	"	,	"	مهم	"	,
"	impossible	"	,	"	مستحيل	"	,
"	impression	"	,	"	انطباع	"	,
"	impressions	"	,	"	انطباعات	"	,
"	impulses	"	,	"	نبضات	"	,
"	inability	"	,	"	عجز	"	,
"	include	"	,	"	يتضمن	"	,
"	included	"	,	"	مشمول	"	,
"	includes	"	,	"	يشمل	"	,
"	including	"	,	"	بما فيها	"	,
"	incomes	"	,	"	إيرادات	"	,
"	inconsiderate	"	,	"	متهور	"	,
"	incredible	"	,	"	لا يصدق	"	,
"	independent	"	,	"	مستقل	"	,
"	India	"	,	"	الهند	"	,
"	Indian	"	,	"	هندي	"	,
"	indicate	"	,	"	يشير	"	,
"	induce	"	,	"	إستنتج	"	,
"	infinitive	"	,	"	صيغة المصدر	"	,
"	influence	"	,	"	تأثير	"	,
"	influenced	"	,	"	متأثر	"	,
"	influences	"	,	"	تأثيرات	"	,
"	information	"	,	"	معلومة	"	,
"	ingredients	"	,	"	مكونات	"	,
"	initial	"	,	"	مبدئي	"	,
"	initiatives	"	,	"	مبادرات	"	,
"	innovative	"	,	"	مبتكر	"	,
"	insane	"	,	"	مجنون	"	,
"	inspiring	"	,	"	ملهم	"	,
"	instead	"	,	"	في حين أن	"	,
"	instructed	"	,	"	تعليمات	"	,
"	instructor	"	,	"	معلم	"	,
"	integrate	"	,	"	دمج	"	,
"	intelligence	"	,	"	ذكاء	"	,
"	intelligent	"	,	"	ذكي	"	,
"	interactive	"	,	"	متفاعل	"	,
"	interest	"	,	"	اهتمام	"	,
"	interested	"	,	"	مهتم	"	,
"	interesting	"	,	"	مثير للاهتمام	"	,
"	interests	"	,	"	إهتمامات	"	,
"	interfere	"	,	"	تدخل	"	,
"	interior	"	,	"	داخلي	"	,
"	international	"	,	"	دولي	"	,
"	interrupted	"	,	"	انقطع	"	,
"	interrupts	"	,	"	مقاطعات	"	,
"	intersection	"	,	"	تداخل	"	,
"	Interview	"	,	"	يقابل	"	,
"	interviews	"	,	"	مقابلات	"	,
"	into	"	,	"	إلى	"	,
"	introduce	"	,	"	أعرض	"	,
"	introduced	"	,	"	أدخلت	"	,
"	introduction	"	,	"	تقديم	"	,
"	invented	"	,	"	اخترع	"	,
"	inventor	"	,	"	مخترع	"	,
"	investigate	"	,	"	يحقق	"	,
"	invite	"	,	"	يدعو	"	,
"	invited	"	,	"	مدعو	"	,
"	involve	"	,	"	يتضمن	"	,
"	Ireland	"	,	"	أيرلندا	"	,
"	Irish	"	,	"	أيرلندي	"	,
"	ironed	"	,	"	تسويتها	"	,
"	irregular	"	,	"	غير عادي	"	,
"	irritate	"	,	"	يزعج	"	,
"	Islamic	"	,	"	إسلامية	"	,
"	island	"	,	"	جزيرة	"	,
"	issue	"	,	"	قضية	"	,
"	issued	"	,	"	صادر	"	,
"	issues	"	,	"	مسائل	"	,
"	Italian	"	,	"	إيطالي	"	,
"	Italy	"	,	"	إيطاليا	"	,
"	items	"	,	"	عناصر	"	,



];

var WordQ = Words[NumA-1];
var WordA = Words[NumA];

var WordQ1 = Words[NumA1-1];
var WordA1 = Words[NumA1];

var WordQ2 = Words[NumA2-1];
var WordA2 = Words[NumA2];

var WordQ3 = Words[NumA3-1];
var WordA3 = Words[NumA3];

var WordQ4 = Words[NumA4-1];
var WordA4 = Words[NumA4];


player.SetVar("NumA",NumA);
player.SetVar("NumA1",NumA1);
player.SetVar("NumA2",NumA2);
player.SetVar("NumA3",NumA3);
player.SetVar("NumA4",NumA4);

player.SetVar("WordQ",WordQ);
player.SetVar("WordQ1",WordQ1);
player.SetVar("WordQ2",WordQ2);
player.SetVar("WordQ3",WordQ3);
player.SetVar("WordQ4",WordQ4);


player.SetVar("WordA",WordA);
player.SetVar("WordA1",WordA1);
player.SetVar("WordA2",WordA2);
player.SetVar("WordA3",WordA3);
player.SetVar("WordA4",WordA4);

}

function Script37()
{
  // Odd = Engligh question, next Even = Arabic answer;
// random is even for arabic answer;

var player = GetPlayer();

var Words = 96; 

var NumA= Math.floor(Math.random()*Words+1)*2;
var NumA1= Math.floor(Math.random()*Words+1)*2;
var NumA2= Math.floor(Math.random()*Words+1)*2;
var NumA3= Math.floor(Math.random()*Words+1)*2;
var NumA4= Math.floor(Math.random()*Words+1)*2;







if ( (NumA1 == NumA)  || (NumA1 ==  NumA2) || (NumA1 ==  NumA3) || (NumA1 ==  NumA4) ) {
  var NumA1= 0
}

if ( (NumA2 == NumA)  || (NumA2 ==  NumA1) || (NumA2 ==  NumA3) || (NumA2 ==  NumA4) ) {
  var NumA2=  0
}

if ( (NumA3 == NumA)  || (NumA3 ==  NumA1) || (NumA3 ==  NumA2) || (NumA3 ==  NumA4) ) {
  var NumA3= 0
}


if ( (NumA4 == NumA)  || (NumA4 ==  NumA1) || (NumA4 ==  NumA2) || (NumA4 ==  NumA3) ) {
  var NumA4= 0
}


var Words= [
"Free Answer for You",

"	ice	"	,	"	جليد	"	,
"	idea	"	,	"	فكرة	"	,
"	ideas	"	,	"	أفكار	"	,
"	identical	"	,	"	مطابق	"	,
"	identified	"	,	"	محدد	"	,
"	identify	"	,	"	يحدد	"	,
"	identities	"	,	"	متطابقات	"	,
"	idiom	"	,	"	تعبير مجازي	"	,
"	idioms	"	,	"	تعابير	"	,
"	if	"	,	"	إذا	"	,
"	if-clause	"	,	"	جملة شرطية	"	,
"	ignition	"	,	"	اشتعال	"	,
"	ignore	"	,	"	يتجاهل	"	,
"	illustrations	"	,	"	رسوم توضيحية	"	,
"	images	"	,	"	صور	"	,
"	imaginary	"	,	"	خيالي	"	,
"	imagination	"	,	"	خيال	"	,
"	imagine	"	,	"	يتصور	"	,
"	immature	"	,	"	غير ناضج	"	,
"	immediate	"	,	"	مباشر	"	,
"	immediately	"	,	"	في الحال	"	,
"	impact	"	,	"	تأثير	"	,
"	imperative	"	,	"	صيغة الامر	"	,
"	impolite	"	,	"	غير مهذب	"	,
"	importance	"	,	"	أهمية	"	,
"	important	"	,	"	مهم	"	,
"	impossible	"	,	"	مستحيل	"	,
"	impression	"	,	"	انطباع	"	,
"	impressions	"	,	"	انطباعات	"	,
"	impulses	"	,	"	نبضات	"	,
"	inability	"	,	"	عجز	"	,
"	include	"	,	"	يتضمن	"	,
"	included	"	,	"	مشمول	"	,
"	includes	"	,	"	يشمل	"	,
"	including	"	,	"	بما فيها	"	,
"	incomes	"	,	"	إيرادات	"	,
"	inconsiderate	"	,	"	متهور	"	,
"	incredible	"	,	"	لا يصدق	"	,
"	independent	"	,	"	مستقل	"	,
"	India	"	,	"	الهند	"	,
"	Indian	"	,	"	هندي	"	,
"	indicate	"	,	"	يشير	"	,
"	induce	"	,	"	إستنتج	"	,
"	infinitive	"	,	"	صيغة المصدر	"	,
"	influence	"	,	"	تأثير	"	,
"	influenced	"	,	"	متأثر	"	,
"	influences	"	,	"	تأثيرات	"	,
"	information	"	,	"	معلومة	"	,
"	ingredients	"	,	"	مكونات	"	,
"	initial	"	,	"	مبدئي	"	,
"	initiatives	"	,	"	مبادرات	"	,
"	innovative	"	,	"	مبتكر	"	,
"	insane	"	,	"	مجنون	"	,
"	inspiring	"	,	"	ملهم	"	,
"	instead	"	,	"	في حين أن	"	,
"	instructed	"	,	"	تعليمات	"	,
"	instructor	"	,	"	معلم	"	,
"	integrate	"	,	"	دمج	"	,
"	intelligence	"	,	"	ذكاء	"	,
"	intelligent	"	,	"	ذكي	"	,
"	interactive	"	,	"	متفاعل	"	,
"	interest	"	,	"	اهتمام	"	,
"	interested	"	,	"	مهتم	"	,
"	interesting	"	,	"	مثير للاهتمام	"	,
"	interests	"	,	"	إهتمامات	"	,
"	interfere	"	,	"	تدخل	"	,
"	interior	"	,	"	داخلي	"	,
"	international	"	,	"	دولي	"	,
"	interrupted	"	,	"	انقطع	"	,
"	interrupts	"	,	"	مقاطعات	"	,
"	intersection	"	,	"	تداخل	"	,
"	Interview	"	,	"	يقابل	"	,
"	interviews	"	,	"	مقابلات	"	,
"	into	"	,	"	إلى	"	,
"	introduce	"	,	"	أعرض	"	,
"	introduced	"	,	"	أدخلت	"	,
"	introduction	"	,	"	تقديم	"	,
"	invented	"	,	"	اخترع	"	,
"	inventor	"	,	"	مخترع	"	,
"	investigate	"	,	"	يحقق	"	,
"	invite	"	,	"	يدعو	"	,
"	invited	"	,	"	مدعو	"	,
"	involve	"	,	"	يتضمن	"	,
"	Ireland	"	,	"	أيرلندا	"	,
"	Irish	"	,	"	أيرلندي	"	,
"	ironed	"	,	"	تسويتها	"	,
"	irregular	"	,	"	غير عادي	"	,
"	irritate	"	,	"	يزعج	"	,
"	Islamic	"	,	"	إسلامية	"	,
"	island	"	,	"	جزيرة	"	,
"	issue	"	,	"	قضية	"	,
"	issued	"	,	"	صادر	"	,
"	issues	"	,	"	مسائل	"	,
"	Italian	"	,	"	إيطالي	"	,
"	Italy	"	,	"	إيطاليا	"	,
"	items	"	,	"	عناصر	"	,



];

var WordQ = Words[NumA-1];
var WordA = Words[NumA];

var WordQ1 = Words[NumA1-1];
var WordA1 = Words[NumA1];

var WordQ2 = Words[NumA2-1];
var WordA2 = Words[NumA2];

var WordQ3 = Words[NumA3-1];
var WordA3 = Words[NumA3];

var WordQ4 = Words[NumA4-1];
var WordA4 = Words[NumA4];


player.SetVar("NumA",NumA);
player.SetVar("NumA1",NumA1);
player.SetVar("NumA2",NumA2);
player.SetVar("NumA3",NumA3);
player.SetVar("NumA4",NumA4);

player.SetVar("WordQ",WordQ);
player.SetVar("WordQ1",WordQ1);
player.SetVar("WordQ2",WordQ2);
player.SetVar("WordQ3",WordQ3);
player.SetVar("WordQ4",WordQ4);


player.SetVar("WordA",WordA);
player.SetVar("WordA1",WordA1);
player.SetVar("WordA2",WordA2);
player.SetVar("WordA3",WordA3);
player.SetVar("WordA4",WordA4);

}

function Script38()
{
  // Odd = Engligh question, next Even = Arabic answer;
// random is even for arabic answer;

var player = GetPlayer();

var Words = 96; 

var NumA= Math.floor(Math.random()*Words+1)*2;
var NumA1= Math.floor(Math.random()*Words+1)*2;
var NumA2= Math.floor(Math.random()*Words+1)*2;
var NumA3= Math.floor(Math.random()*Words+1)*2;
var NumA4= Math.floor(Math.random()*Words+1)*2;







if ( (NumA1 == NumA)  || (NumA1 ==  NumA2) || (NumA1 ==  NumA3) || (NumA1 ==  NumA4) ) {
  var NumA1= 0
}

if ( (NumA2 == NumA)  || (NumA2 ==  NumA1) || (NumA2 ==  NumA3) || (NumA2 ==  NumA4) ) {
  var NumA2=  0
}

if ( (NumA3 == NumA)  || (NumA3 ==  NumA1) || (NumA3 ==  NumA2) || (NumA3 ==  NumA4) ) {
  var NumA3= 0
}


if ( (NumA4 == NumA)  || (NumA4 ==  NumA1) || (NumA4 ==  NumA2) || (NumA4 ==  NumA3) ) {
  var NumA4= 0
}


var Words= [
"Free Answer for You",

"	ice	"	,	"	جليد	"	,
"	idea	"	,	"	فكرة	"	,
"	ideas	"	,	"	أفكار	"	,
"	identical	"	,	"	مطابق	"	,
"	identified	"	,	"	محدد	"	,
"	identify	"	,	"	يحدد	"	,
"	identities	"	,	"	متطابقات	"	,
"	idiom	"	,	"	تعبير مجازي	"	,
"	idioms	"	,	"	تعابير	"	,
"	if	"	,	"	إذا	"	,
"	if-clause	"	,	"	جملة شرطية	"	,
"	ignition	"	,	"	اشتعال	"	,
"	ignore	"	,	"	يتجاهل	"	,
"	illustrations	"	,	"	رسوم توضيحية	"	,
"	images	"	,	"	صور	"	,
"	imaginary	"	,	"	خيالي	"	,
"	imagination	"	,	"	خيال	"	,
"	imagine	"	,	"	يتصور	"	,
"	immature	"	,	"	غير ناضج	"	,
"	immediate	"	,	"	مباشر	"	,
"	immediately	"	,	"	في الحال	"	,
"	impact	"	,	"	تأثير	"	,
"	imperative	"	,	"	صيغة الامر	"	,
"	impolite	"	,	"	غير مهذب	"	,
"	importance	"	,	"	أهمية	"	,
"	important	"	,	"	مهم	"	,
"	impossible	"	,	"	مستحيل	"	,
"	impression	"	,	"	انطباع	"	,
"	impressions	"	,	"	انطباعات	"	,
"	impulses	"	,	"	نبضات	"	,
"	inability	"	,	"	عجز	"	,
"	include	"	,	"	يتضمن	"	,
"	included	"	,	"	مشمول	"	,
"	includes	"	,	"	يشمل	"	,
"	including	"	,	"	بما فيها	"	,
"	incomes	"	,	"	إيرادات	"	,
"	inconsiderate	"	,	"	متهور	"	,
"	incredible	"	,	"	لا يصدق	"	,
"	independent	"	,	"	مستقل	"	,
"	India	"	,	"	الهند	"	,
"	Indian	"	,	"	هندي	"	,
"	indicate	"	,	"	يشير	"	,
"	induce	"	,	"	إستنتج	"	,
"	infinitive	"	,	"	صيغة المصدر	"	,
"	influence	"	,	"	تأثير	"	,
"	influenced	"	,	"	متأثر	"	,
"	influences	"	,	"	تأثيرات	"	,
"	information	"	,	"	معلومة	"	,
"	ingredients	"	,	"	مكونات	"	,
"	initial	"	,	"	مبدئي	"	,
"	initiatives	"	,	"	مبادرات	"	,
"	innovative	"	,	"	مبتكر	"	,
"	insane	"	,	"	مجنون	"	,
"	inspiring	"	,	"	ملهم	"	,
"	instead	"	,	"	في حين أن	"	,
"	instructed	"	,	"	تعليمات	"	,
"	instructor	"	,	"	معلم	"	,
"	integrate	"	,	"	دمج	"	,
"	intelligence	"	,	"	ذكاء	"	,
"	intelligent	"	,	"	ذكي	"	,
"	interactive	"	,	"	متفاعل	"	,
"	interest	"	,	"	اهتمام	"	,
"	interested	"	,	"	مهتم	"	,
"	interesting	"	,	"	مثير للاهتمام	"	,
"	interests	"	,	"	إهتمامات	"	,
"	interfere	"	,	"	تدخل	"	,
"	interior	"	,	"	داخلي	"	,
"	international	"	,	"	دولي	"	,
"	interrupted	"	,	"	انقطع	"	,
"	interrupts	"	,	"	مقاطعات	"	,
"	intersection	"	,	"	تداخل	"	,
"	Interview	"	,	"	يقابل	"	,
"	interviews	"	,	"	مقابلات	"	,
"	into	"	,	"	إلى	"	,
"	introduce	"	,	"	أعرض	"	,
"	introduced	"	,	"	أدخلت	"	,
"	introduction	"	,	"	تقديم	"	,
"	invented	"	,	"	اخترع	"	,
"	inventor	"	,	"	مخترع	"	,
"	investigate	"	,	"	يحقق	"	,
"	invite	"	,	"	يدعو	"	,
"	invited	"	,	"	مدعو	"	,
"	involve	"	,	"	يتضمن	"	,
"	Ireland	"	,	"	أيرلندا	"	,
"	Irish	"	,	"	أيرلندي	"	,
"	ironed	"	,	"	تسويتها	"	,
"	irregular	"	,	"	غير عادي	"	,
"	irritate	"	,	"	يزعج	"	,
"	Islamic	"	,	"	إسلامية	"	,
"	island	"	,	"	جزيرة	"	,
"	issue	"	,	"	قضية	"	,
"	issued	"	,	"	صادر	"	,
"	issues	"	,	"	مسائل	"	,
"	Italian	"	,	"	إيطالي	"	,
"	Italy	"	,	"	إيطاليا	"	,
"	items	"	,	"	عناصر	"	,



];

var WordQ = Words[NumA-1];
var WordA = Words[NumA];

var WordQ1 = Words[NumA1-1];
var WordA1 = Words[NumA1];

var WordQ2 = Words[NumA2-1];
var WordA2 = Words[NumA2];

var WordQ3 = Words[NumA3-1];
var WordA3 = Words[NumA3];

var WordQ4 = Words[NumA4-1];
var WordA4 = Words[NumA4];


player.SetVar("NumA",NumA);
player.SetVar("NumA1",NumA1);
player.SetVar("NumA2",NumA2);
player.SetVar("NumA3",NumA3);
player.SetVar("NumA4",NumA4);

player.SetVar("WordQ",WordQ);
player.SetVar("WordQ1",WordQ1);
player.SetVar("WordQ2",WordQ2);
player.SetVar("WordQ3",WordQ3);
player.SetVar("WordQ4",WordQ4);


player.SetVar("WordA",WordA);
player.SetVar("WordA1",WordA1);
player.SetVar("WordA2",WordA2);
player.SetVar("WordA3",WordA3);
player.SetVar("WordA4",WordA4);

}

function Script39()
{
  // Odd = Engligh question, next Even = Arabic answer;
// random is even for arabic answer;

var player = GetPlayer();

var Words = 96; 

var NumA= Math.floor(Math.random()*Words+1)*2;
var NumA1= Math.floor(Math.random()*Words+1)*2;
var NumA2= Math.floor(Math.random()*Words+1)*2;
var NumA3= Math.floor(Math.random()*Words+1)*2;
var NumA4= Math.floor(Math.random()*Words+1)*2;







if ( (NumA1 == NumA)  || (NumA1 ==  NumA2) || (NumA1 ==  NumA3) || (NumA1 ==  NumA4) ) {
  var NumA1= 0
}

if ( (NumA2 == NumA)  || (NumA2 ==  NumA1) || (NumA2 ==  NumA3) || (NumA2 ==  NumA4) ) {
  var NumA2=  0
}

if ( (NumA3 == NumA)  || (NumA3 ==  NumA1) || (NumA3 ==  NumA2) || (NumA3 ==  NumA4) ) {
  var NumA3= 0
}


if ( (NumA4 == NumA)  || (NumA4 ==  NumA1) || (NumA4 ==  NumA2) || (NumA4 ==  NumA3) ) {
  var NumA4= 0
}


var Words= [
"Free Answer for You",

"	ice	"	,	"	جليد	"	,
"	idea	"	,	"	فكرة	"	,
"	ideas	"	,	"	أفكار	"	,
"	identical	"	,	"	مطابق	"	,
"	identified	"	,	"	محدد	"	,
"	identify	"	,	"	يحدد	"	,
"	identities	"	,	"	متطابقات	"	,
"	idiom	"	,	"	تعبير مجازي	"	,
"	idioms	"	,	"	تعابير	"	,
"	if	"	,	"	إذا	"	,
"	if-clause	"	,	"	جملة شرطية	"	,
"	ignition	"	,	"	اشتعال	"	,
"	ignore	"	,	"	يتجاهل	"	,
"	illustrations	"	,	"	رسوم توضيحية	"	,
"	images	"	,	"	صور	"	,
"	imaginary	"	,	"	خيالي	"	,
"	imagination	"	,	"	خيال	"	,
"	imagine	"	,	"	يتصور	"	,
"	immature	"	,	"	غير ناضج	"	,
"	immediate	"	,	"	مباشر	"	,
"	immediately	"	,	"	في الحال	"	,
"	impact	"	,	"	تأثير	"	,
"	imperative	"	,	"	صيغة الامر	"	,
"	impolite	"	,	"	غير مهذب	"	,
"	importance	"	,	"	أهمية	"	,
"	important	"	,	"	مهم	"	,
"	impossible	"	,	"	مستحيل	"	,
"	impression	"	,	"	انطباع	"	,
"	impressions	"	,	"	انطباعات	"	,
"	impulses	"	,	"	نبضات	"	,
"	inability	"	,	"	عجز	"	,
"	include	"	,	"	يتضمن	"	,
"	included	"	,	"	مشمول	"	,
"	includes	"	,	"	يشمل	"	,
"	including	"	,	"	بما فيها	"	,
"	incomes	"	,	"	إيرادات	"	,
"	inconsiderate	"	,	"	متهور	"	,
"	incredible	"	,	"	لا يصدق	"	,
"	independent	"	,	"	مستقل	"	,
"	India	"	,	"	الهند	"	,
"	Indian	"	,	"	هندي	"	,
"	indicate	"	,	"	يشير	"	,
"	induce	"	,	"	إستنتج	"	,
"	infinitive	"	,	"	صيغة المصدر	"	,
"	influence	"	,	"	تأثير	"	,
"	influenced	"	,	"	متأثر	"	,
"	influences	"	,	"	تأثيرات	"	,
"	information	"	,	"	معلومة	"	,
"	ingredients	"	,	"	مكونات	"	,
"	initial	"	,	"	مبدئي	"	,
"	initiatives	"	,	"	مبادرات	"	,
"	innovative	"	,	"	مبتكر	"	,
"	insane	"	,	"	مجنون	"	,
"	inspiring	"	,	"	ملهم	"	,
"	instead	"	,	"	في حين أن	"	,
"	instructed	"	,	"	تعليمات	"	,
"	instructor	"	,	"	معلم	"	,
"	integrate	"	,	"	دمج	"	,
"	intelligence	"	,	"	ذكاء	"	,
"	intelligent	"	,	"	ذكي	"	,
"	interactive	"	,	"	متفاعل	"	,
"	interest	"	,	"	اهتمام	"	,
"	interested	"	,	"	مهتم	"	,
"	interesting	"	,	"	مثير للاهتمام	"	,
"	interests	"	,	"	إهتمامات	"	,
"	interfere	"	,	"	تدخل	"	,
"	interior	"	,	"	داخلي	"	,
"	international	"	,	"	دولي	"	,
"	interrupted	"	,	"	انقطع	"	,
"	interrupts	"	,	"	مقاطعات	"	,
"	intersection	"	,	"	تداخل	"	,
"	Interview	"	,	"	يقابل	"	,
"	interviews	"	,	"	مقابلات	"	,
"	into	"	,	"	إلى	"	,
"	introduce	"	,	"	أعرض	"	,
"	introduced	"	,	"	أدخلت	"	,
"	introduction	"	,	"	تقديم	"	,
"	invented	"	,	"	اخترع	"	,
"	inventor	"	,	"	مخترع	"	,
"	investigate	"	,	"	يحقق	"	,
"	invite	"	,	"	يدعو	"	,
"	invited	"	,	"	مدعو	"	,
"	involve	"	,	"	يتضمن	"	,
"	Ireland	"	,	"	أيرلندا	"	,
"	Irish	"	,	"	أيرلندي	"	,
"	ironed	"	,	"	تسويتها	"	,
"	irregular	"	,	"	غير عادي	"	,
"	irritate	"	,	"	يزعج	"	,
"	Islamic	"	,	"	إسلامية	"	,
"	island	"	,	"	جزيرة	"	,
"	issue	"	,	"	قضية	"	,
"	issued	"	,	"	صادر	"	,
"	issues	"	,	"	مسائل	"	,
"	Italian	"	,	"	إيطالي	"	,
"	Italy	"	,	"	إيطاليا	"	,
"	items	"	,	"	عناصر	"	,



];

var WordQ = Words[NumA-1];
var WordA = Words[NumA];

var WordQ1 = Words[NumA1-1];
var WordA1 = Words[NumA1];

var WordQ2 = Words[NumA2-1];
var WordA2 = Words[NumA2];

var WordQ3 = Words[NumA3-1];
var WordA3 = Words[NumA3];

var WordQ4 = Words[NumA4-1];
var WordA4 = Words[NumA4];


player.SetVar("NumA",NumA);
player.SetVar("NumA1",NumA1);
player.SetVar("NumA2",NumA2);
player.SetVar("NumA3",NumA3);
player.SetVar("NumA4",NumA4);

player.SetVar("WordQ",WordQ);
player.SetVar("WordQ1",WordQ1);
player.SetVar("WordQ2",WordQ2);
player.SetVar("WordQ3",WordQ3);
player.SetVar("WordQ4",WordQ4);


player.SetVar("WordA",WordA);
player.SetVar("WordA1",WordA1);
player.SetVar("WordA2",WordA2);
player.SetVar("WordA3",WordA3);
player.SetVar("WordA4",WordA4);

}

function Script40()
{
  // Odd = Engligh question, next Even = Arabic answer;
// random is even for arabic answer;

var player = GetPlayer();

var Words = 96; 

var NumA= Math.floor(Math.random()*Words+1)*2;
var NumA1= Math.floor(Math.random()*Words+1)*2;
var NumA2= Math.floor(Math.random()*Words+1)*2;
var NumA3= Math.floor(Math.random()*Words+1)*2;
var NumA4= Math.floor(Math.random()*Words+1)*2;







if ( (NumA1 == NumA)  || (NumA1 ==  NumA2) || (NumA1 ==  NumA3) || (NumA1 ==  NumA4) ) {
  var NumA1= 0
}

if ( (NumA2 == NumA)  || (NumA2 ==  NumA1) || (NumA2 ==  NumA3) || (NumA2 ==  NumA4) ) {
  var NumA2=  0
}

if ( (NumA3 == NumA)  || (NumA3 ==  NumA1) || (NumA3 ==  NumA2) || (NumA3 ==  NumA4) ) {
  var NumA3= 0
}


if ( (NumA4 == NumA)  || (NumA4 ==  NumA1) || (NumA4 ==  NumA2) || (NumA4 ==  NumA3) ) {
  var NumA4= 0
}


var Words= [
"Free Answer for You",

"	ice	"	,	"	جليد	"	,
"	idea	"	,	"	فكرة	"	,
"	ideas	"	,	"	أفكار	"	,
"	identical	"	,	"	مطابق	"	,
"	identified	"	,	"	محدد	"	,
"	identify	"	,	"	يحدد	"	,
"	identities	"	,	"	متطابقات	"	,
"	idiom	"	,	"	تعبير مجازي	"	,
"	idioms	"	,	"	تعابير	"	,
"	if	"	,	"	إذا	"	,
"	if-clause	"	,	"	جملة شرطية	"	,
"	ignition	"	,	"	اشتعال	"	,
"	ignore	"	,	"	يتجاهل	"	,
"	illustrations	"	,	"	رسوم توضيحية	"	,
"	images	"	,	"	صور	"	,
"	imaginary	"	,	"	خيالي	"	,
"	imagination	"	,	"	خيال	"	,
"	imagine	"	,	"	يتصور	"	,
"	immature	"	,	"	غير ناضج	"	,
"	immediate	"	,	"	مباشر	"	,
"	immediately	"	,	"	في الحال	"	,
"	impact	"	,	"	تأثير	"	,
"	imperative	"	,	"	صيغة الامر	"	,
"	impolite	"	,	"	غير مهذب	"	,
"	importance	"	,	"	أهمية	"	,
"	important	"	,	"	مهم	"	,
"	impossible	"	,	"	مستحيل	"	,
"	impression	"	,	"	انطباع	"	,
"	impressions	"	,	"	انطباعات	"	,
"	impulses	"	,	"	نبضات	"	,
"	inability	"	,	"	عجز	"	,
"	include	"	,	"	يتضمن	"	,
"	included	"	,	"	مشمول	"	,
"	includes	"	,	"	يشمل	"	,
"	including	"	,	"	بما فيها	"	,
"	incomes	"	,	"	إيرادات	"	,
"	inconsiderate	"	,	"	متهور	"	,
"	incredible	"	,	"	لا يصدق	"	,
"	independent	"	,	"	مستقل	"	,
"	India	"	,	"	الهند	"	,
"	Indian	"	,	"	هندي	"	,
"	indicate	"	,	"	يشير	"	,
"	induce	"	,	"	إستنتج	"	,
"	infinitive	"	,	"	صيغة المصدر	"	,
"	influence	"	,	"	تأثير	"	,
"	influenced	"	,	"	متأثر	"	,
"	influences	"	,	"	تأثيرات	"	,
"	information	"	,	"	معلومة	"	,
"	ingredients	"	,	"	مكونات	"	,
"	initial	"	,	"	مبدئي	"	,
"	initiatives	"	,	"	مبادرات	"	,
"	innovative	"	,	"	مبتكر	"	,
"	insane	"	,	"	مجنون	"	,
"	inspiring	"	,	"	ملهم	"	,
"	instead	"	,	"	في حين أن	"	,
"	instructed	"	,	"	تعليمات	"	,
"	instructor	"	,	"	معلم	"	,
"	integrate	"	,	"	دمج	"	,
"	intelligence	"	,	"	ذكاء	"	,
"	intelligent	"	,	"	ذكي	"	,
"	interactive	"	,	"	متفاعل	"	,
"	interest	"	,	"	اهتمام	"	,
"	interested	"	,	"	مهتم	"	,
"	interesting	"	,	"	مثير للاهتمام	"	,
"	interests	"	,	"	إهتمامات	"	,
"	interfere	"	,	"	تدخل	"	,
"	interior	"	,	"	داخلي	"	,
"	international	"	,	"	دولي	"	,
"	interrupted	"	,	"	انقطع	"	,
"	interrupts	"	,	"	مقاطعات	"	,
"	intersection	"	,	"	تداخل	"	,
"	Interview	"	,	"	يقابل	"	,
"	interviews	"	,	"	مقابلات	"	,
"	into	"	,	"	إلى	"	,
"	introduce	"	,	"	أعرض	"	,
"	introduced	"	,	"	أدخلت	"	,
"	introduction	"	,	"	تقديم	"	,
"	invented	"	,	"	اخترع	"	,
"	inventor	"	,	"	مخترع	"	,
"	investigate	"	,	"	يحقق	"	,
"	invite	"	,	"	يدعو	"	,
"	invited	"	,	"	مدعو	"	,
"	involve	"	,	"	يتضمن	"	,
"	Ireland	"	,	"	أيرلندا	"	,
"	Irish	"	,	"	أيرلندي	"	,
"	ironed	"	,	"	تسويتها	"	,
"	irregular	"	,	"	غير عادي	"	,
"	irritate	"	,	"	يزعج	"	,
"	Islamic	"	,	"	إسلامية	"	,
"	island	"	,	"	جزيرة	"	,
"	issue	"	,	"	قضية	"	,
"	issued	"	,	"	صادر	"	,
"	issues	"	,	"	مسائل	"	,
"	Italian	"	,	"	إيطالي	"	,
"	Italy	"	,	"	إيطاليا	"	,
"	items	"	,	"	عناصر	"	,



];

var WordQ = Words[NumA-1];
var WordA = Words[NumA];

var WordQ1 = Words[NumA1-1];
var WordA1 = Words[NumA1];

var WordQ2 = Words[NumA2-1];
var WordA2 = Words[NumA2];

var WordQ3 = Words[NumA3-1];
var WordA3 = Words[NumA3];

var WordQ4 = Words[NumA4-1];
var WordA4 = Words[NumA4];


player.SetVar("NumA",NumA);
player.SetVar("NumA1",NumA1);
player.SetVar("NumA2",NumA2);
player.SetVar("NumA3",NumA3);
player.SetVar("NumA4",NumA4);

player.SetVar("WordQ",WordQ);
player.SetVar("WordQ1",WordQ1);
player.SetVar("WordQ2",WordQ2);
player.SetVar("WordQ3",WordQ3);
player.SetVar("WordQ4",WordQ4);


player.SetVar("WordA",WordA);
player.SetVar("WordA1",WordA1);
player.SetVar("WordA2",WordA2);
player.SetVar("WordA3",WordA3);
player.SetVar("WordA4",WordA4);

}

function Script41()
{
  // Odd = Engligh question, next Even = Arabic answer;
// random is even for arabic answer;

var player = GetPlayer();

var Words = 133; 

var NumA= Math.floor(Math.random()*Words+1)*2;
var NumA1= Math.floor(Math.random()*Words+1)*2;
var NumA2= Math.floor(Math.random()*Words+1)*2;
var NumA3= Math.floor(Math.random()*Words+1)*2;
var NumA4= Math.floor(Math.random()*Words+1)*2;







if ( (NumA1 == NumA)  || (NumA1 ==  NumA2) || (NumA1 ==  NumA3) || (NumA1 ==  NumA4) ) {
  var NumA1= 0
}

if ( (NumA2 == NumA)  || (NumA2 ==  NumA1) || (NumA2 ==  NumA3) || (NumA2 ==  NumA4) ) {
  var NumA2=  0
}

if ( (NumA3 == NumA)  || (NumA3 ==  NumA1) || (NumA3 ==  NumA2) || (NumA3 ==  NumA4) ) {
  var NumA3= 0
}


if ( (NumA4 == NumA)  || (NumA4 ==  NumA1) || (NumA4 ==  NumA2) || (NumA4 ==  NumA3) ) {
  var NumA4= 0
}


var Words= [
"Free Answer for You",

"	jacket	"	,	"	سترة	"	,
"	jackets	"	,	"	سترات	"	,
"	jail	"	,	"	سجن	"	,
"	jam	"	,	"	مربى	"	,
"	Janet	"	,	"	جانيت	"	,
"	Japan	"	,	"	اليابان	"	,
"	job	"	,	"	وظيفة	"	,
"	join	"	,	"	ينضم	"	,
"	joined	"	,	"	انضم	"	,
"	jokes	"	,	"	نكات	"	,
"	joking	"	,	"	يمزح	"	,
"	Jorge	"	,	"	خورخي	"	,
"	journalist	"	,	"	صحافي	"	,
"	jumped	"	,	"	قفز	"	,
"	just	"	,	"	مجرد	"	,
"	keep	"	,	"	احتفظ	"	,
"	kept	"	,	"	أبقى	"	,
"	Kevin	"	,	"	كيفن	"	,
"	key	"	,	"	مفتاح	"	,
"	kidding	"	,	"	مزاح	"	,
"	kids	"	,	"	صغار في السن	"	,
"	kilometers	"	,	"	كم	"	,
"	kind	"	,	"	طيب القلب	"	,
"	kinds	"	,	"	أنواع	"	,
"	king	"	,	"	ملك	"	,
"	kingdom	"	,	"	مملكة	"	,
"	kitchen	"	,	"	مطبخ	"	,
"	knees	"	,	"	كبتين	"	,
"	knew	"	,	"	عرف	"	,
"	knife	"	,	"	سكين	"	,
"	knives	"	,	"	سكاكين	"	,
"	know	"	,	"	أعرف	"	,
"	knowledge	"	,	"	معرفه	"	,
"	lack	"	,	"	قلة	"	,
"	ladder	"	,	"	سلم	"	,
"	lake	"	,	"	بحيرة	"	,
"	lamp	"	,	"	مصباح	"	,
"	land	"	,	"	أرض	"	,
"	lanes	"	,	"	ممرات	"	,
"	language	"	,	"	لغة	"	,
"	languages	"	,	"	لغات	"	,
"	laptop	"	,	"	حاسوب محمول	"	,
"	large	"	,	"	كبير	"	,
"	last	"	,	"	الاخير	"	,
"	late	"	,	"	متأخر	"	,
"	lately	"	,	"	مؤخرا	"	,
"	Later	"	,	"	لاحقا	"	,
"	Latin	"	,	"	لاتينية	"	,
"	laugh	"	,	"	يضحك	"	,
"	laughed	"	,	"	ضحك	"	,
"	launched	"	,	"	أطلقت	"	,
"	laundry	"	,	"	غسيل ملابس	"	,
"	Laura	"	,	"	لورا	"	,
"	law	"	,	"	قانون	"	,
"	laws	"	,	"	قوانين	"	,
"	lawyer	"	,	"	محامي	"	,
"	lazy	"	,	"	كسول	"	,
"	lead	"	,	"	يقود	"	,
"	learn	"	,	"	يتعلم	"	,
"	learned	"	,	"	تعلمت	"	,
"	Learning	"	,	"	تعلم	"	,
"	learns	"	,	"	يتعلم	"	,
"	least	"	,	"	أقل	"	,
"	leave	"	,	"	غادر	"	,
"	leaves	"	,	"	اوراق اشجار	"	,
"	leaving	"	,	"	مغادرة	"	,
"	left	"	,	"	اليسار	"	,
"	legal	"	,	"	قانوني	"	,
"	lend	"	,	"	أعار	"	,
"	lent	"	,	"	أقرض	"	,
"	less	"	,	"	أقل	"	,
"	lesson	"	,	"	درس	"	,
"	let us	"	,	"	دعونا	"	,
"	letter	"	,	"	خطاب	"	,
"	letters	"	,	"	حروف	"	,
"	level	"	,	"	مستوى	"	,
"	libraries	"	,	"	مكتبات	"	,
"	library	"	,	"	مكتبة	"	,
"	license	"	,	"	رخصة	"	,
"	licensing	"	,	"	الترخيص	"	,
"	lie	"	,	"	يكذب	"	,
"	life	"	,	"	حياة	"	,
"	lifelong	"	,	"	مدى الحياة	"	,
"	light	"	,	"	نور	"	,
"	lightbulb	"	,	"	مصباح الكهربائي	"	,
"	lights	"	,	"	أضواء	"	,
"	like	"	,	"	مثل	"	,
"	liked	"	,	"	احب	"	,
"	likely	"	,	"	محتمل أن	"	,
"	likes	"	,	"	إعجابات	"	,
"	limit	"	,	"	يحد	"	,
"	limited	"	,	"	محدود	"	,
"	limits	"	,	"	حدود	"	,
"	line	"	,	"	خط	"	,
"	link	"	,	"	حلقة الوصل	"	,
"	linking	"	,	"	ربط	"	,
"	liquid	"	,	"	سائل	"	,
"	Lisa	"	,	"	ليزا	"	,
"	list	"	,	"	قائمة	"	,
"	listed	"	,	"	مدرجة	"	,
"	listen	"	,	"	يستمع	"	,
"	listened	"	,	"	استمع	"	,
"	listening	"	,	"	استماع	"	,
"	lists	"	,	"	قوائم	"	,
"	literal	"	,	"	حرفي	"	,
"	litter	"	,	"	قمامة	"	,
"	little	"	,	"	قليل	"	,
"	live	"	,	"	حي	"	,
"	lived	"	,	"	يسكن	"	,
"	lives	"	,	"	أرواح	"	,
"	living	"	,	"	معيشة	"	,
"	loan	"	,	"	يقرض	"	,
"	loans	"	,	"	قروض	"	,
"	local	"	,	"	محلي	"	,
"	logic	"	,	"	منطق	"	,
"	logical	"	,	"	منطقي	"	,
"	London	"	,	"	لندن	"	,
"	lonely	"	,	"	وحيدا	"	,
"	long	"	,	"	طويل	"	,
"	Look for	"	,	"	يبحث	"	,
"	looked	"	,	"	بدا	"	,
"	looks	"	,	"	تبدو	"	,
"	lose	"	,	"	تخسر	"	,
"	loss	"	,	"	خسارة	"	,
"	lost	"	,	"	ضائع	"	,
"	lot	"	,	"	كثير	"	,
"	loudly	"	,	"	بصوت عالي	"	,
"	love	"	,	"	حب	"	,
"	loves	"	,	"	يحب	"	,
"	low	"	,	"	منخفض	"	,
"	lowered	"	,	"	خفض	"	,
"	luggage	"	,	"	أمتعة	"	,
"	lunch	"	,	"	غداء	"	,



];

var WordQ = Words[NumA-1];
var WordA = Words[NumA];

var WordQ1 = Words[NumA1-1];
var WordA1 = Words[NumA1];

var WordQ2 = Words[NumA2-1];
var WordA2 = Words[NumA2];

var WordQ3 = Words[NumA3-1];
var WordA3 = Words[NumA3];

var WordQ4 = Words[NumA4-1];
var WordA4 = Words[NumA4];


player.SetVar("NumA",NumA);
player.SetVar("NumA1",NumA1);
player.SetVar("NumA2",NumA2);
player.SetVar("NumA3",NumA3);
player.SetVar("NumA4",NumA4);

player.SetVar("WordQ",WordQ);
player.SetVar("WordQ1",WordQ1);
player.SetVar("WordQ2",WordQ2);
player.SetVar("WordQ3",WordQ3);
player.SetVar("WordQ4",WordQ4);


player.SetVar("WordA",WordA);
player.SetVar("WordA1",WordA1);
player.SetVar("WordA2",WordA2);
player.SetVar("WordA3",WordA3);
player.SetVar("WordA4",WordA4);

}

function Script42()
{
  // Odd = Engligh question, next Even = Arabic answer;
// random is even for arabic answer;

var player = GetPlayer();

var Words = 133; 

var NumA= Math.floor(Math.random()*Words+1)*2;
var NumA1= Math.floor(Math.random()*Words+1)*2;
var NumA2= Math.floor(Math.random()*Words+1)*2;
var NumA3= Math.floor(Math.random()*Words+1)*2;
var NumA4= Math.floor(Math.random()*Words+1)*2;







if ( (NumA1 == NumA)  || (NumA1 ==  NumA2) || (NumA1 ==  NumA3) || (NumA1 ==  NumA4) ) {
  var NumA1= 0
}

if ( (NumA2 == NumA)  || (NumA2 ==  NumA1) || (NumA2 ==  NumA3) || (NumA2 ==  NumA4) ) {
  var NumA2=  0
}

if ( (NumA3 == NumA)  || (NumA3 ==  NumA1) || (NumA3 ==  NumA2) || (NumA3 ==  NumA4) ) {
  var NumA3= 0
}


if ( (NumA4 == NumA)  || (NumA4 ==  NumA1) || (NumA4 ==  NumA2) || (NumA4 ==  NumA3) ) {
  var NumA4= 0
}


var Words= [
"Free Answer for You",

"	jacket	"	,	"	سترة	"	,
"	jackets	"	,	"	سترات	"	,
"	jail	"	,	"	سجن	"	,
"	jam	"	,	"	مربى	"	,
"	Janet	"	,	"	جانيت	"	,
"	Japan	"	,	"	اليابان	"	,
"	job	"	,	"	وظيفة	"	,
"	join	"	,	"	ينضم	"	,
"	joined	"	,	"	انضم	"	,
"	jokes	"	,	"	نكات	"	,
"	joking	"	,	"	يمزح	"	,
"	Jorge	"	,	"	خورخي	"	,
"	journalist	"	,	"	صحافي	"	,
"	jumped	"	,	"	قفز	"	,
"	just	"	,	"	مجرد	"	,
"	keep	"	,	"	احتفظ	"	,
"	kept	"	,	"	أبقى	"	,
"	Kevin	"	,	"	كيفن	"	,
"	key	"	,	"	مفتاح	"	,
"	kidding	"	,	"	مزاح	"	,
"	kids	"	,	"	صغار في السن	"	,
"	kilometers	"	,	"	كم	"	,
"	kind	"	,	"	طيب القلب	"	,
"	kinds	"	,	"	أنواع	"	,
"	king	"	,	"	ملك	"	,
"	kingdom	"	,	"	مملكة	"	,
"	kitchen	"	,	"	مطبخ	"	,
"	knees	"	,	"	كبتين	"	,
"	knew	"	,	"	عرف	"	,
"	knife	"	,	"	سكين	"	,
"	knives	"	,	"	سكاكين	"	,
"	know	"	,	"	أعرف	"	,
"	knowledge	"	,	"	معرفه	"	,
"	lack	"	,	"	قلة	"	,
"	ladder	"	,	"	سلم	"	,
"	lake	"	,	"	بحيرة	"	,
"	lamp	"	,	"	مصباح	"	,
"	land	"	,	"	أرض	"	,
"	lanes	"	,	"	ممرات	"	,
"	language	"	,	"	لغة	"	,
"	languages	"	,	"	لغات	"	,
"	laptop	"	,	"	حاسوب محمول	"	,
"	large	"	,	"	كبير	"	,
"	last	"	,	"	الاخير	"	,
"	late	"	,	"	متأخر	"	,
"	lately	"	,	"	مؤخرا	"	,
"	Later	"	,	"	لاحقا	"	,
"	Latin	"	,	"	لاتينية	"	,
"	laugh	"	,	"	يضحك	"	,
"	laughed	"	,	"	ضحك	"	,
"	launched	"	,	"	أطلقت	"	,
"	laundry	"	,	"	غسيل ملابس	"	,
"	Laura	"	,	"	لورا	"	,
"	law	"	,	"	قانون	"	,
"	laws	"	,	"	قوانين	"	,
"	lawyer	"	,	"	محامي	"	,
"	lazy	"	,	"	كسول	"	,
"	lead	"	,	"	يقود	"	,
"	learn	"	,	"	يتعلم	"	,
"	learned	"	,	"	تعلمت	"	,
"	Learning	"	,	"	تعلم	"	,
"	learns	"	,	"	يتعلم	"	,
"	least	"	,	"	أقل	"	,
"	leave	"	,	"	غادر	"	,
"	leaves	"	,	"	اوراق اشجار	"	,
"	leaving	"	,	"	مغادرة	"	,
"	left	"	,	"	اليسار	"	,
"	legal	"	,	"	قانوني	"	,
"	lend	"	,	"	أعار	"	,
"	lent	"	,	"	أقرض	"	,
"	less	"	,	"	أقل	"	,
"	lesson	"	,	"	درس	"	,
"	let us	"	,	"	دعونا	"	,
"	letter	"	,	"	خطاب	"	,
"	letters	"	,	"	حروف	"	,
"	level	"	,	"	مستوى	"	,
"	libraries	"	,	"	مكتبات	"	,
"	library	"	,	"	مكتبة	"	,
"	license	"	,	"	رخصة	"	,
"	licensing	"	,	"	الترخيص	"	,
"	lie	"	,	"	يكذب	"	,
"	life	"	,	"	حياة	"	,
"	lifelong	"	,	"	مدى الحياة	"	,
"	light	"	,	"	نور	"	,
"	lightbulb	"	,	"	مصباح الكهربائي	"	,
"	lights	"	,	"	أضواء	"	,
"	like	"	,	"	مثل	"	,
"	liked	"	,	"	احب	"	,
"	likely	"	,	"	محتمل أن	"	,
"	likes	"	,	"	إعجابات	"	,
"	limit	"	,	"	يحد	"	,
"	limited	"	,	"	محدود	"	,
"	limits	"	,	"	حدود	"	,
"	line	"	,	"	خط	"	,
"	link	"	,	"	حلقة الوصل	"	,
"	linking	"	,	"	ربط	"	,
"	liquid	"	,	"	سائل	"	,
"	Lisa	"	,	"	ليزا	"	,
"	list	"	,	"	قائمة	"	,
"	listed	"	,	"	مدرجة	"	,
"	listen	"	,	"	يستمع	"	,
"	listened	"	,	"	استمع	"	,
"	listening	"	,	"	استماع	"	,
"	lists	"	,	"	قوائم	"	,
"	literal	"	,	"	حرفي	"	,
"	litter	"	,	"	قمامة	"	,
"	little	"	,	"	قليل	"	,
"	live	"	,	"	حي	"	,
"	lived	"	,	"	يسكن	"	,
"	lives	"	,	"	أرواح	"	,
"	living	"	,	"	معيشة	"	,
"	loan	"	,	"	يقرض	"	,
"	loans	"	,	"	قروض	"	,
"	local	"	,	"	محلي	"	,
"	logic	"	,	"	منطق	"	,
"	logical	"	,	"	منطقي	"	,
"	London	"	,	"	لندن	"	,
"	lonely	"	,	"	وحيدا	"	,
"	long	"	,	"	طويل	"	,
"	Look for	"	,	"	يبحث	"	,
"	looked	"	,	"	بدا	"	,
"	looks	"	,	"	تبدو	"	,
"	lose	"	,	"	تخسر	"	,
"	loss	"	,	"	خسارة	"	,
"	lost	"	,	"	ضائع	"	,
"	lot	"	,	"	كثير	"	,
"	loudly	"	,	"	بصوت عالي	"	,
"	love	"	,	"	حب	"	,
"	loves	"	,	"	يحب	"	,
"	low	"	,	"	منخفض	"	,
"	lowered	"	,	"	خفض	"	,
"	luggage	"	,	"	أمتعة	"	,
"	lunch	"	,	"	غداء	"	,



];

var WordQ = Words[NumA-1];
var WordA = Words[NumA];

var WordQ1 = Words[NumA1-1];
var WordA1 = Words[NumA1];

var WordQ2 = Words[NumA2-1];
var WordA2 = Words[NumA2];

var WordQ3 = Words[NumA3-1];
var WordA3 = Words[NumA3];

var WordQ4 = Words[NumA4-1];
var WordA4 = Words[NumA4];


player.SetVar("NumA",NumA);
player.SetVar("NumA1",NumA1);
player.SetVar("NumA2",NumA2);
player.SetVar("NumA3",NumA3);
player.SetVar("NumA4",NumA4);

player.SetVar("WordQ",WordQ);
player.SetVar("WordQ1",WordQ1);
player.SetVar("WordQ2",WordQ2);
player.SetVar("WordQ3",WordQ3);
player.SetVar("WordQ4",WordQ4);


player.SetVar("WordA",WordA);
player.SetVar("WordA1",WordA1);
player.SetVar("WordA2",WordA2);
player.SetVar("WordA3",WordA3);
player.SetVar("WordA4",WordA4);

}

function Script43()
{
  // Odd = Engligh question, next Even = Arabic answer;
// random is even for arabic answer;

var player = GetPlayer();

var Words = 133; 

var NumA= Math.floor(Math.random()*Words+1)*2;
var NumA1= Math.floor(Math.random()*Words+1)*2;
var NumA2= Math.floor(Math.random()*Words+1)*2;
var NumA3= Math.floor(Math.random()*Words+1)*2;
var NumA4= Math.floor(Math.random()*Words+1)*2;







if ( (NumA1 == NumA)  || (NumA1 ==  NumA2) || (NumA1 ==  NumA3) || (NumA1 ==  NumA4) ) {
  var NumA1= 0
}

if ( (NumA2 == NumA)  || (NumA2 ==  NumA1) || (NumA2 ==  NumA3) || (NumA2 ==  NumA4) ) {
  var NumA2=  0
}

if ( (NumA3 == NumA)  || (NumA3 ==  NumA1) || (NumA3 ==  NumA2) || (NumA3 ==  NumA4) ) {
  var NumA3= 0
}


if ( (NumA4 == NumA)  || (NumA4 ==  NumA1) || (NumA4 ==  NumA2) || (NumA4 ==  NumA3) ) {
  var NumA4= 0
}


var Words= [
"Free Answer for You",

"	jacket	"	,	"	سترة	"	,
"	jackets	"	,	"	سترات	"	,
"	jail	"	,	"	سجن	"	,
"	jam	"	,	"	مربى	"	,
"	Janet	"	,	"	جانيت	"	,
"	Japan	"	,	"	اليابان	"	,
"	job	"	,	"	وظيفة	"	,
"	join	"	,	"	ينضم	"	,
"	joined	"	,	"	انضم	"	,
"	jokes	"	,	"	نكات	"	,
"	joking	"	,	"	يمزح	"	,
"	Jorge	"	,	"	خورخي	"	,
"	journalist	"	,	"	صحافي	"	,
"	jumped	"	,	"	قفز	"	,
"	just	"	,	"	مجرد	"	,
"	keep	"	,	"	احتفظ	"	,
"	kept	"	,	"	أبقى	"	,
"	Kevin	"	,	"	كيفن	"	,
"	key	"	,	"	مفتاح	"	,
"	kidding	"	,	"	مزاح	"	,
"	kids	"	,	"	صغار في السن	"	,
"	kilometers	"	,	"	كم	"	,
"	kind	"	,	"	طيب القلب	"	,
"	kinds	"	,	"	أنواع	"	,
"	king	"	,	"	ملك	"	,
"	kingdom	"	,	"	مملكة	"	,
"	kitchen	"	,	"	مطبخ	"	,
"	knees	"	,	"	كبتين	"	,
"	knew	"	,	"	عرف	"	,
"	knife	"	,	"	سكين	"	,
"	knives	"	,	"	سكاكين	"	,
"	know	"	,	"	أعرف	"	,
"	knowledge	"	,	"	معرفه	"	,
"	lack	"	,	"	قلة	"	,
"	ladder	"	,	"	سلم	"	,
"	lake	"	,	"	بحيرة	"	,
"	lamp	"	,	"	مصباح	"	,
"	land	"	,	"	أرض	"	,
"	lanes	"	,	"	ممرات	"	,
"	language	"	,	"	لغة	"	,
"	languages	"	,	"	لغات	"	,
"	laptop	"	,	"	حاسوب محمول	"	,
"	large	"	,	"	كبير	"	,
"	last	"	,	"	الاخير	"	,
"	late	"	,	"	متأخر	"	,
"	lately	"	,	"	مؤخرا	"	,
"	Later	"	,	"	لاحقا	"	,
"	Latin	"	,	"	لاتينية	"	,
"	laugh	"	,	"	يضحك	"	,
"	laughed	"	,	"	ضحك	"	,
"	launched	"	,	"	أطلقت	"	,
"	laundry	"	,	"	غسيل ملابس	"	,
"	Laura	"	,	"	لورا	"	,
"	law	"	,	"	قانون	"	,
"	laws	"	,	"	قوانين	"	,
"	lawyer	"	,	"	محامي	"	,
"	lazy	"	,	"	كسول	"	,
"	lead	"	,	"	يقود	"	,
"	learn	"	,	"	يتعلم	"	,
"	learned	"	,	"	تعلمت	"	,
"	Learning	"	,	"	تعلم	"	,
"	learns	"	,	"	يتعلم	"	,
"	least	"	,	"	أقل	"	,
"	leave	"	,	"	غادر	"	,
"	leaves	"	,	"	اوراق اشجار	"	,
"	leaving	"	,	"	مغادرة	"	,
"	left	"	,	"	اليسار	"	,
"	legal	"	,	"	قانوني	"	,
"	lend	"	,	"	أعار	"	,
"	lent	"	,	"	أقرض	"	,
"	less	"	,	"	أقل	"	,
"	lesson	"	,	"	درس	"	,
"	let us	"	,	"	دعونا	"	,
"	letter	"	,	"	خطاب	"	,
"	letters	"	,	"	حروف	"	,
"	level	"	,	"	مستوى	"	,
"	libraries	"	,	"	مكتبات	"	,
"	library	"	,	"	مكتبة	"	,
"	license	"	,	"	رخصة	"	,
"	licensing	"	,	"	الترخيص	"	,
"	lie	"	,	"	يكذب	"	,
"	life	"	,	"	حياة	"	,
"	lifelong	"	,	"	مدى الحياة	"	,
"	light	"	,	"	نور	"	,
"	lightbulb	"	,	"	مصباح الكهربائي	"	,
"	lights	"	,	"	أضواء	"	,
"	like	"	,	"	مثل	"	,
"	liked	"	,	"	احب	"	,
"	likely	"	,	"	محتمل أن	"	,
"	likes	"	,	"	إعجابات	"	,
"	limit	"	,	"	يحد	"	,
"	limited	"	,	"	محدود	"	,
"	limits	"	,	"	حدود	"	,
"	line	"	,	"	خط	"	,
"	link	"	,	"	حلقة الوصل	"	,
"	linking	"	,	"	ربط	"	,
"	liquid	"	,	"	سائل	"	,
"	Lisa	"	,	"	ليزا	"	,
"	list	"	,	"	قائمة	"	,
"	listed	"	,	"	مدرجة	"	,
"	listen	"	,	"	يستمع	"	,
"	listened	"	,	"	استمع	"	,
"	listening	"	,	"	استماع	"	,
"	lists	"	,	"	قوائم	"	,
"	literal	"	,	"	حرفي	"	,
"	litter	"	,	"	قمامة	"	,
"	little	"	,	"	قليل	"	,
"	live	"	,	"	حي	"	,
"	lived	"	,	"	يسكن	"	,
"	lives	"	,	"	أرواح	"	,
"	living	"	,	"	معيشة	"	,
"	loan	"	,	"	يقرض	"	,
"	loans	"	,	"	قروض	"	,
"	local	"	,	"	محلي	"	,
"	logic	"	,	"	منطق	"	,
"	logical	"	,	"	منطقي	"	,
"	London	"	,	"	لندن	"	,
"	lonely	"	,	"	وحيدا	"	,
"	long	"	,	"	طويل	"	,
"	Look for	"	,	"	يبحث	"	,
"	looked	"	,	"	بدا	"	,
"	looks	"	,	"	تبدو	"	,
"	lose	"	,	"	تخسر	"	,
"	loss	"	,	"	خسارة	"	,
"	lost	"	,	"	ضائع	"	,
"	lot	"	,	"	كثير	"	,
"	loudly	"	,	"	بصوت عالي	"	,
"	love	"	,	"	حب	"	,
"	loves	"	,	"	يحب	"	,
"	low	"	,	"	منخفض	"	,
"	lowered	"	,	"	خفض	"	,
"	luggage	"	,	"	أمتعة	"	,
"	lunch	"	,	"	غداء	"	,



];

var WordQ = Words[NumA-1];
var WordA = Words[NumA];

var WordQ1 = Words[NumA1-1];
var WordA1 = Words[NumA1];

var WordQ2 = Words[NumA2-1];
var WordA2 = Words[NumA2];

var WordQ3 = Words[NumA3-1];
var WordA3 = Words[NumA3];

var WordQ4 = Words[NumA4-1];
var WordA4 = Words[NumA4];


player.SetVar("NumA",NumA);
player.SetVar("NumA1",NumA1);
player.SetVar("NumA2",NumA2);
player.SetVar("NumA3",NumA3);
player.SetVar("NumA4",NumA4);

player.SetVar("WordQ",WordQ);
player.SetVar("WordQ1",WordQ1);
player.SetVar("WordQ2",WordQ2);
player.SetVar("WordQ3",WordQ3);
player.SetVar("WordQ4",WordQ4);


player.SetVar("WordA",WordA);
player.SetVar("WordA1",WordA1);
player.SetVar("WordA2",WordA2);
player.SetVar("WordA3",WordA3);
player.SetVar("WordA4",WordA4);

}

function Script44()
{
  // Odd = Engligh question, next Even = Arabic answer;
// random is even for arabic answer;

var player = GetPlayer();

var Words = 133; 

var NumA= Math.floor(Math.random()*Words+1)*2;
var NumA1= Math.floor(Math.random()*Words+1)*2;
var NumA2= Math.floor(Math.random()*Words+1)*2;
var NumA3= Math.floor(Math.random()*Words+1)*2;
var NumA4= Math.floor(Math.random()*Words+1)*2;







if ( (NumA1 == NumA)  || (NumA1 ==  NumA2) || (NumA1 ==  NumA3) || (NumA1 ==  NumA4) ) {
  var NumA1= 0
}

if ( (NumA2 == NumA)  || (NumA2 ==  NumA1) || (NumA2 ==  NumA3) || (NumA2 ==  NumA4) ) {
  var NumA2=  0
}

if ( (NumA3 == NumA)  || (NumA3 ==  NumA1) || (NumA3 ==  NumA2) || (NumA3 ==  NumA4) ) {
  var NumA3= 0
}


if ( (NumA4 == NumA)  || (NumA4 ==  NumA1) || (NumA4 ==  NumA2) || (NumA4 ==  NumA3) ) {
  var NumA4= 0
}


var Words= [
"Free Answer for You",

"	jacket	"	,	"	سترة	"	,
"	jackets	"	,	"	سترات	"	,
"	jail	"	,	"	سجن	"	,
"	jam	"	,	"	مربى	"	,
"	Janet	"	,	"	جانيت	"	,
"	Japan	"	,	"	اليابان	"	,
"	job	"	,	"	وظيفة	"	,
"	join	"	,	"	ينضم	"	,
"	joined	"	,	"	انضم	"	,
"	jokes	"	,	"	نكات	"	,
"	joking	"	,	"	يمزح	"	,
"	Jorge	"	,	"	خورخي	"	,
"	journalist	"	,	"	صحافي	"	,
"	jumped	"	,	"	قفز	"	,
"	just	"	,	"	مجرد	"	,
"	keep	"	,	"	احتفظ	"	,
"	kept	"	,	"	أبقى	"	,
"	Kevin	"	,	"	كيفن	"	,
"	key	"	,	"	مفتاح	"	,
"	kidding	"	,	"	مزاح	"	,
"	kids	"	,	"	صغار في السن	"	,
"	kilometers	"	,	"	كم	"	,
"	kind	"	,	"	طيب القلب	"	,
"	kinds	"	,	"	أنواع	"	,
"	king	"	,	"	ملك	"	,
"	kingdom	"	,	"	مملكة	"	,
"	kitchen	"	,	"	مطبخ	"	,
"	knees	"	,	"	كبتين	"	,
"	knew	"	,	"	عرف	"	,
"	knife	"	,	"	سكين	"	,
"	knives	"	,	"	سكاكين	"	,
"	know	"	,	"	أعرف	"	,
"	knowledge	"	,	"	معرفه	"	,
"	lack	"	,	"	قلة	"	,
"	ladder	"	,	"	سلم	"	,
"	lake	"	,	"	بحيرة	"	,
"	lamp	"	,	"	مصباح	"	,
"	land	"	,	"	أرض	"	,
"	lanes	"	,	"	ممرات	"	,
"	language	"	,	"	لغة	"	,
"	languages	"	,	"	لغات	"	,
"	laptop	"	,	"	حاسوب محمول	"	,
"	large	"	,	"	كبير	"	,
"	last	"	,	"	الاخير	"	,
"	late	"	,	"	متأخر	"	,
"	lately	"	,	"	مؤخرا	"	,
"	Later	"	,	"	لاحقا	"	,
"	Latin	"	,	"	لاتينية	"	,
"	laugh	"	,	"	يضحك	"	,
"	laughed	"	,	"	ضحك	"	,
"	launched	"	,	"	أطلقت	"	,
"	laundry	"	,	"	غسيل ملابس	"	,
"	Laura	"	,	"	لورا	"	,
"	law	"	,	"	قانون	"	,
"	laws	"	,	"	قوانين	"	,
"	lawyer	"	,	"	محامي	"	,
"	lazy	"	,	"	كسول	"	,
"	lead	"	,	"	يقود	"	,
"	learn	"	,	"	يتعلم	"	,
"	learned	"	,	"	تعلمت	"	,
"	Learning	"	,	"	تعلم	"	,
"	learns	"	,	"	يتعلم	"	,
"	least	"	,	"	أقل	"	,
"	leave	"	,	"	غادر	"	,
"	leaves	"	,	"	اوراق اشجار	"	,
"	leaving	"	,	"	مغادرة	"	,
"	left	"	,	"	اليسار	"	,
"	legal	"	,	"	قانوني	"	,
"	lend	"	,	"	أعار	"	,
"	lent	"	,	"	أقرض	"	,
"	less	"	,	"	أقل	"	,
"	lesson	"	,	"	درس	"	,
"	let us	"	,	"	دعونا	"	,
"	letter	"	,	"	خطاب	"	,
"	letters	"	,	"	حروف	"	,
"	level	"	,	"	مستوى	"	,
"	libraries	"	,	"	مكتبات	"	,
"	library	"	,	"	مكتبة	"	,
"	license	"	,	"	رخصة	"	,
"	licensing	"	,	"	الترخيص	"	,
"	lie	"	,	"	يكذب	"	,
"	life	"	,	"	حياة	"	,
"	lifelong	"	,	"	مدى الحياة	"	,
"	light	"	,	"	نور	"	,
"	lightbulb	"	,	"	مصباح الكهربائي	"	,
"	lights	"	,	"	أضواء	"	,
"	like	"	,	"	مثل	"	,
"	liked	"	,	"	احب	"	,
"	likely	"	,	"	محتمل أن	"	,
"	likes	"	,	"	إعجابات	"	,
"	limit	"	,	"	يحد	"	,
"	limited	"	,	"	محدود	"	,
"	limits	"	,	"	حدود	"	,
"	line	"	,	"	خط	"	,
"	link	"	,	"	حلقة الوصل	"	,
"	linking	"	,	"	ربط	"	,
"	liquid	"	,	"	سائل	"	,
"	Lisa	"	,	"	ليزا	"	,
"	list	"	,	"	قائمة	"	,
"	listed	"	,	"	مدرجة	"	,
"	listen	"	,	"	يستمع	"	,
"	listened	"	,	"	استمع	"	,
"	listening	"	,	"	استماع	"	,
"	lists	"	,	"	قوائم	"	,
"	literal	"	,	"	حرفي	"	,
"	litter	"	,	"	قمامة	"	,
"	little	"	,	"	قليل	"	,
"	live	"	,	"	حي	"	,
"	lived	"	,	"	يسكن	"	,
"	lives	"	,	"	أرواح	"	,
"	living	"	,	"	معيشة	"	,
"	loan	"	,	"	يقرض	"	,
"	loans	"	,	"	قروض	"	,
"	local	"	,	"	محلي	"	,
"	logic	"	,	"	منطق	"	,
"	logical	"	,	"	منطقي	"	,
"	London	"	,	"	لندن	"	,
"	lonely	"	,	"	وحيدا	"	,
"	long	"	,	"	طويل	"	,
"	Look for	"	,	"	يبحث	"	,
"	looked	"	,	"	بدا	"	,
"	looks	"	,	"	تبدو	"	,
"	lose	"	,	"	تخسر	"	,
"	loss	"	,	"	خسارة	"	,
"	lost	"	,	"	ضائع	"	,
"	lot	"	,	"	كثير	"	,
"	loudly	"	,	"	بصوت عالي	"	,
"	love	"	,	"	حب	"	,
"	loves	"	,	"	يحب	"	,
"	low	"	,	"	منخفض	"	,
"	lowered	"	,	"	خفض	"	,
"	luggage	"	,	"	أمتعة	"	,
"	lunch	"	,	"	غداء	"	,



];

var WordQ = Words[NumA-1];
var WordA = Words[NumA];

var WordQ1 = Words[NumA1-1];
var WordA1 = Words[NumA1];

var WordQ2 = Words[NumA2-1];
var WordA2 = Words[NumA2];

var WordQ3 = Words[NumA3-1];
var WordA3 = Words[NumA3];

var WordQ4 = Words[NumA4-1];
var WordA4 = Words[NumA4];


player.SetVar("NumA",NumA);
player.SetVar("NumA1",NumA1);
player.SetVar("NumA2",NumA2);
player.SetVar("NumA3",NumA3);
player.SetVar("NumA4",NumA4);

player.SetVar("WordQ",WordQ);
player.SetVar("WordQ1",WordQ1);
player.SetVar("WordQ2",WordQ2);
player.SetVar("WordQ3",WordQ3);
player.SetVar("WordQ4",WordQ4);


player.SetVar("WordA",WordA);
player.SetVar("WordA1",WordA1);
player.SetVar("WordA2",WordA2);
player.SetVar("WordA3",WordA3);
player.SetVar("WordA4",WordA4);

}

function Script45()
{
  // Odd = Engligh question, next Even = Arabic answer;
// random is even for arabic answer;

var player = GetPlayer();

var Words = 133; 

var NumA= Math.floor(Math.random()*Words+1)*2;
var NumA1= Math.floor(Math.random()*Words+1)*2;
var NumA2= Math.floor(Math.random()*Words+1)*2;
var NumA3= Math.floor(Math.random()*Words+1)*2;
var NumA4= Math.floor(Math.random()*Words+1)*2;







if ( (NumA1 == NumA)  || (NumA1 ==  NumA2) || (NumA1 ==  NumA3) || (NumA1 ==  NumA4) ) {
  var NumA1= 0
}

if ( (NumA2 == NumA)  || (NumA2 ==  NumA1) || (NumA2 ==  NumA3) || (NumA2 ==  NumA4) ) {
  var NumA2=  0
}

if ( (NumA3 == NumA)  || (NumA3 ==  NumA1) || (NumA3 ==  NumA2) || (NumA3 ==  NumA4) ) {
  var NumA3= 0
}


if ( (NumA4 == NumA)  || (NumA4 ==  NumA1) || (NumA4 ==  NumA2) || (NumA4 ==  NumA3) ) {
  var NumA4= 0
}


var Words= [
"Free Answer for You",

"	jacket	"	,	"	سترة	"	,
"	jackets	"	,	"	سترات	"	,
"	jail	"	,	"	سجن	"	,
"	jam	"	,	"	مربى	"	,
"	Janet	"	,	"	جانيت	"	,
"	Japan	"	,	"	اليابان	"	,
"	job	"	,	"	وظيفة	"	,
"	join	"	,	"	ينضم	"	,
"	joined	"	,	"	انضم	"	,
"	jokes	"	,	"	نكات	"	,
"	joking	"	,	"	يمزح	"	,
"	Jorge	"	,	"	خورخي	"	,
"	journalist	"	,	"	صحافي	"	,
"	jumped	"	,	"	قفز	"	,
"	just	"	,	"	مجرد	"	,
"	keep	"	,	"	احتفظ	"	,
"	kept	"	,	"	أبقى	"	,
"	Kevin	"	,	"	كيفن	"	,
"	key	"	,	"	مفتاح	"	,
"	kidding	"	,	"	مزاح	"	,
"	kids	"	,	"	صغار في السن	"	,
"	kilometers	"	,	"	كم	"	,
"	kind	"	,	"	طيب القلب	"	,
"	kinds	"	,	"	أنواع	"	,
"	king	"	,	"	ملك	"	,
"	kingdom	"	,	"	مملكة	"	,
"	kitchen	"	,	"	مطبخ	"	,
"	knees	"	,	"	كبتين	"	,
"	knew	"	,	"	عرف	"	,
"	knife	"	,	"	سكين	"	,
"	knives	"	,	"	سكاكين	"	,
"	know	"	,	"	أعرف	"	,
"	knowledge	"	,	"	معرفه	"	,
"	lack	"	,	"	قلة	"	,
"	ladder	"	,	"	سلم	"	,
"	lake	"	,	"	بحيرة	"	,
"	lamp	"	,	"	مصباح	"	,
"	land	"	,	"	أرض	"	,
"	lanes	"	,	"	ممرات	"	,
"	language	"	,	"	لغة	"	,
"	languages	"	,	"	لغات	"	,
"	laptop	"	,	"	حاسوب محمول	"	,
"	large	"	,	"	كبير	"	,
"	last	"	,	"	الاخير	"	,
"	late	"	,	"	متأخر	"	,
"	lately	"	,	"	مؤخرا	"	,
"	Later	"	,	"	لاحقا	"	,
"	Latin	"	,	"	لاتينية	"	,
"	laugh	"	,	"	يضحك	"	,
"	laughed	"	,	"	ضحك	"	,
"	launched	"	,	"	أطلقت	"	,
"	laundry	"	,	"	غسيل ملابس	"	,
"	Laura	"	,	"	لورا	"	,
"	law	"	,	"	قانون	"	,
"	laws	"	,	"	قوانين	"	,
"	lawyer	"	,	"	محامي	"	,
"	lazy	"	,	"	كسول	"	,
"	lead	"	,	"	يقود	"	,
"	learn	"	,	"	يتعلم	"	,
"	learned	"	,	"	تعلمت	"	,
"	Learning	"	,	"	تعلم	"	,
"	learns	"	,	"	يتعلم	"	,
"	least	"	,	"	أقل	"	,
"	leave	"	,	"	غادر	"	,
"	leaves	"	,	"	اوراق اشجار	"	,
"	leaving	"	,	"	مغادرة	"	,
"	left	"	,	"	اليسار	"	,
"	legal	"	,	"	قانوني	"	,
"	lend	"	,	"	أعار	"	,
"	lent	"	,	"	أقرض	"	,
"	less	"	,	"	أقل	"	,
"	lesson	"	,	"	درس	"	,
"	let us	"	,	"	دعونا	"	,
"	letter	"	,	"	خطاب	"	,
"	letters	"	,	"	حروف	"	,
"	level	"	,	"	مستوى	"	,
"	libraries	"	,	"	مكتبات	"	,
"	library	"	,	"	مكتبة	"	,
"	license	"	,	"	رخصة	"	,
"	licensing	"	,	"	الترخيص	"	,
"	lie	"	,	"	يكذب	"	,
"	life	"	,	"	حياة	"	,
"	lifelong	"	,	"	مدى الحياة	"	,
"	light	"	,	"	نور	"	,
"	lightbulb	"	,	"	مصباح الكهربائي	"	,
"	lights	"	,	"	أضواء	"	,
"	like	"	,	"	مثل	"	,
"	liked	"	,	"	احب	"	,
"	likely	"	,	"	محتمل أن	"	,
"	likes	"	,	"	إعجابات	"	,
"	limit	"	,	"	يحد	"	,
"	limited	"	,	"	محدود	"	,
"	limits	"	,	"	حدود	"	,
"	line	"	,	"	خط	"	,
"	link	"	,	"	حلقة الوصل	"	,
"	linking	"	,	"	ربط	"	,
"	liquid	"	,	"	سائل	"	,
"	Lisa	"	,	"	ليزا	"	,
"	list	"	,	"	قائمة	"	,
"	listed	"	,	"	مدرجة	"	,
"	listen	"	,	"	يستمع	"	,
"	listened	"	,	"	استمع	"	,
"	listening	"	,	"	استماع	"	,
"	lists	"	,	"	قوائم	"	,
"	literal	"	,	"	حرفي	"	,
"	litter	"	,	"	قمامة	"	,
"	little	"	,	"	قليل	"	,
"	live	"	,	"	حي	"	,
"	lived	"	,	"	يسكن	"	,
"	lives	"	,	"	أرواح	"	,
"	living	"	,	"	معيشة	"	,
"	loan	"	,	"	يقرض	"	,
"	loans	"	,	"	قروض	"	,
"	local	"	,	"	محلي	"	,
"	logic	"	,	"	منطق	"	,
"	logical	"	,	"	منطقي	"	,
"	London	"	,	"	لندن	"	,
"	lonely	"	,	"	وحيدا	"	,
"	long	"	,	"	طويل	"	,
"	Look for	"	,	"	يبحث	"	,
"	looked	"	,	"	بدا	"	,
"	looks	"	,	"	تبدو	"	,
"	lose	"	,	"	تخسر	"	,
"	loss	"	,	"	خسارة	"	,
"	lost	"	,	"	ضائع	"	,
"	lot	"	,	"	كثير	"	,
"	loudly	"	,	"	بصوت عالي	"	,
"	love	"	,	"	حب	"	,
"	loves	"	,	"	يحب	"	,
"	low	"	,	"	منخفض	"	,
"	lowered	"	,	"	خفض	"	,
"	luggage	"	,	"	أمتعة	"	,
"	lunch	"	,	"	غداء	"	,



];

var WordQ = Words[NumA-1];
var WordA = Words[NumA];

var WordQ1 = Words[NumA1-1];
var WordA1 = Words[NumA1];

var WordQ2 = Words[NumA2-1];
var WordA2 = Words[NumA2];

var WordQ3 = Words[NumA3-1];
var WordA3 = Words[NumA3];

var WordQ4 = Words[NumA4-1];
var WordA4 = Words[NumA4];


player.SetVar("NumA",NumA);
player.SetVar("NumA1",NumA1);
player.SetVar("NumA2",NumA2);
player.SetVar("NumA3",NumA3);
player.SetVar("NumA4",NumA4);

player.SetVar("WordQ",WordQ);
player.SetVar("WordQ1",WordQ1);
player.SetVar("WordQ2",WordQ2);
player.SetVar("WordQ3",WordQ3);
player.SetVar("WordQ4",WordQ4);


player.SetVar("WordA",WordA);
player.SetVar("WordA1",WordA1);
player.SetVar("WordA2",WordA2);
player.SetVar("WordA3",WordA3);
player.SetVar("WordA4",WordA4);

}

function Script46()
{
  // Odd = Engligh question, next Even = Arabic answer;
// random is even for arabic answer;

var player = GetPlayer();

var Words = 264; 

var NumA= Math.floor(Math.random()*Words+1)*2;
var NumA1= Math.floor(Math.random()*Words+1)*2;
var NumA2= Math.floor(Math.random()*Words+1)*2;
var NumA3= Math.floor(Math.random()*Words+1)*2;
var NumA4= Math.floor(Math.random()*Words+1)*2;




if ( (NumA1 == NumA)  || (NumA1 ==  NumA2) || (NumA1 ==  NumA3) || (NumA1 ==  NumA4) ) {
  var NumA1= 0
}

if ( (NumA2 == NumA)  || (NumA2 ==  NumA1) || (NumA2 ==  NumA3) || (NumA2 ==  NumA4) ) {
  var NumA2=  0
}

if ( (NumA3 == NumA)  || (NumA3 ==  NumA1) || (NumA3 ==  NumA2) || (NumA3 ==  NumA4) ) {
  var NumA3= 0
}


if ( (NumA4 == NumA)  || (NumA4 ==  NumA1) || (NumA4 ==  NumA2) || (NumA4 ==  NumA3) ) {
  var NumA4= 0
}


var Words= [
"Free Answer for You",


"	cab	"	,	"	سيارة أجرة	"	,
"	cable	"	,	"	كابل	"	,
"	cables	"	,	"	كابلات	"	,
"	cafeteria	"	,	"	كافيتيريا	"	,
"	cake	"	,	"	كيك	"	,
"	California	"	,	"	كاليفورنيا	"	,
"	call	"	,	"	يتصل	"	,
"	called	"	,	"	مسمى	"	,
"	calm	"	,	"	هادئ	"	,
"	came	"	,	"	أتى	"	,
"	camera	"	,	"	الة تصوير	"	,
"	cameras	"	,	"	كاميرات	"	,
"	camping	"	,	"	تخييم	"	,
"	campus	"	,	"	حرم الجامعي	"	,
"	can	"	,	"	علبة	"	,
"	Canada	"	,	"	كندا	"	,
"	cancel	"	,	"	إلغاء	"	,
"	cancer	"	,	"	سرطان	"	,
"	candy	"	,	"	حلويات	"	,
"	cannot	"	,	"	لا تستطيع	"	,
"	capitals	"	,	"	عواصم	"	,
"	car	"	,	"	سيارات	"	,
"	card	"	,	"	بطاقة	"	,
"	cards	"	,	"	بطاقات	"	,
"	care	"	,	"	رعاية	"	,
"	career	"	,	"	حياة مهنية	"	,
"	careful	"	,	"	حذر	"	,
"	carefully	"	,	"	بحرص	"	,
"	carpenter	"	,	"	نجار	"	,
"	carpets	"	,	"	سجاد	"	,
"	carriage	"	,	"	عربة قطار	"	,
"	carrots	"	,	"	جزر	"	,
"	carry	"	,	"	احمل	"	,
"	carrying	"	,	"	حمل	"	,
"	cars	"	,	"	سيارات	"	,
"	cartoonists	"	,	"	رسامي الكاريكاتير	"	,
"	cases	"	,	"	حالات	"	,
"	catch	"	,	"	قبض على	"	,
"	catching	"	,	"	اصطياد	"	,
"	caught	"	,	"	قبض على	"	,
"	cause	"	,	"	سبب	"	,
"	caused	"	,	"	يتسبب	"	,
"	causes	"	,	"	أسباب	"	,
"	causing	"	,	"	مما تسبب في	"	,
"	cease	"	,	"	انقطع	"	,
"	celebrate	"	,	"	احتفل	"	,
"	celebrities	"	,	"	مشاهير	"	,
"	cell	"	,	"	خلية	"	,
"	Celsius	"	,	"	درجة مئوية	"	,
"	center	"	,	"	مركز	"	,
"	certain	"	,	"	تأكيد	"	,
"	certainly	"	,	"	بالتأكيد	"	,
"	chain	"	,	"	سلسلة	"	,
"	chair	"	,	"	كرسي	"	,
"	chairs	"	,	"	كراسي جلوس	"	,
"	challenge	"	,	"	تحدي	"	,
"	champion	"	,	"	بطل	"	,
"	chance	"	,	"	فرصة	"	,
"	change	"	,	"	يتغيرون	"	,
"	changed	"	,	"	تغير	"	,
"	changes	"	,	"	تغييرات	"	,
"	channel	"	,	"	قناة	"	,
"	chants	"	,	"	أناشيد	"	,
"	character	"	,	"	حرف	"	,
"	characterize	"	,	"	يتميز	"	,
"	charity	"	,	"	اعمال الخيرية	"	,
"	Charles	"	,	"	تشارلز	"	,
"	charts	"	,	"	رسوم البيانية	"	,
"	cheap	"	,	"	رخيص	"	,
"	cheat	"	,	"	يغش	"	,
"	check	"	,	"	التحقق من	"	,
"	checklist	"	,	"	قائمة تدقيق	"	,
"	checkout	"	,	"	دفع	"	,
"	cheeks	"	,	"	الخدين	"	,
"	chef	"	,	"	طاه	"	,
"	chemicals	"	,	"	مواد كيميائية	"	,
"	chew	"	,	"	مضغ	"	,
"	Chicago	"	,	"	شيكاغو	"	,
"	chicken	"	,	"	دجاج	"	,
"	child	"	,	"	طفل	"	,
"	children	"	,	"	أطفال	"	,
"	China	"	,	"	الصين	"	,
"	Chinese	"	,	"	صينى	"	,
"	choice	"	,	"	خيار	"	,
"	choices	"	,	"	اختيارات	"	,
"	choose	"	,	"	يختار	"	,
"	choosing	"	,	"	اختيار	"	,
"	chosen	"	,	"	مختار	"	,
"	cigarette	"	,	"	سيجارة	"	,
"	circle	"	,	"	دائرة	"	,
"	circles	"	,	"	دوائر	"	,
"	cities	"	,	"	مدن	"	,
"	citizens	"	,	"	مواطنين	"	,
"	city	"	,	"	مدينة	"	,
"	claims	"	,	"	مزاعم	"	,
"	class	"	,	"	صف دراسي	"	,
"	classes	"	,	"	طبقات	"	,
"	classic	"	,	"	كلاسيكي	"	,
"	classify	"	,	"	يصنف	"	,
"	classmate	"	,	"	زميل الصف	"	,
"	classmates	"	,	"	زملاء الصف	"	,
"	clauses	"	,	"	شروط	"	,
"	clean	"	,	"	ينظف	"	,
"	cleaner	"	,	"	منظف	"	,
"	cleaning	"	,	"	تنظيف	"	,
"	clear	"	,	"	صافي	"	,
"	clearly	"	,	"	بوضوح	"	,
"	clever	"	,	"	ماهر	"	,
"	climate	"	,	"	مناخ	"	,
"	climb	"	,	"	تسلق	"	,
"	clinic	"	,	"	عيادة	"	,
"	close	"	,	"	قريب	"	,
"	closely	"	,	"	بعناية	"	,
"	closeness	"	,	"	قرب	"	,
"	closest	"	,	"	الأقرب	"	,
"	closet	"	,	"	خزانة	"	,
"	closing	"	,	"	إغلاق	"	,
"	clothes	"	,	"	ملابس	"	,
"	cloud	"	,	"	غيم	"	,
"	club	"	,	"	النادي	"	,
"	clusters	"	,	"	عناقيد المجموعات	"	,
"	coach	"	,	"	مدرب رياضي	"	,
"	co exist	"	,	"	تعايش	"	,
"	coffee	"	,	"	قهوة	"	,
"	cognitive	"	,	"	إدراكي	"	,
"	coincidence	"	,	"	صدفة	"	,
"	cold	"	,	"	برد	"	,
"	colder	"	,	"	ابرد	"	,
"	colleagues	"	,	"	زملاء	"	,
"	college	"	,	"	كلية	"	,
"	color	"	,	"	لون	"	,
"	colorful	"	,	"	زاهى الألوان	"	,
"	combine	"	,	"	يجمع	"	,
"	combined	"	,	"	مجموع	"	,
"	come	"	,	"	تأتي	"	,
"	comfortable	"	,	"	مريح	"	,
"	coming	"	,	"	آت	"	,
"	commands	"	,	"	أوامر	"	,
"	comments	"	,	"	تعليقات	"	,
"	common	"	,	"	مشترك	"	,
"	communicate	"	,	"	يتواصل	"	,
"	communication	"	,	"	اتصالات	"	,
"	community	"	,	"	مجموعة متضامنة	"	,
"	company	"	,	"	شركة	"	,
"	compare	"	,	"	يقارن	"	,
"	comparing	"	,	"	مقارنة	"	,
"	compartment	"	,	"	حجرة	"	,
"	compete	"	,	"	يتنافس	"	,
"	competitions	"	,	"	مسابقات	"	,
"	complain	"	,	"	يتذمر	"	,
"	complaint	"	,	"	شكوى	"	,
"	complaints	"	,	"	شكاوي	"	,
"	complete	"	,	"	اكتمال	"	,
"	completed	"	,	"	منجز	"	,
"	completely	"	,	"	بالكامل	"	,
"	compliment	"	,	"	إطراء	"	,
"	complimenting	"	,	"	المدح	"	,
"	comprehension	"	,	"	فهم	"	,
"	computer	"	,	"	الحاسوب	"	,
"	concentration	"	,	"	تركيز	"	,
"	concept	"	,	"	مفهوم	"	,
"	concepts	"	,	"	مفاهيم	"	,
"	concern	"	,	"	اهتمام	"	,
"	conclusion	"	,	"	استنتاج	"	,
"	condition	"	,	"	حالة	"	,
"	conditional	"	,	"	مشروط	"	,
"	cone	"	,	"	مخروط	"	,
"	conference	"	,	"	مؤتمر	"	,
"	confident	"	,	"	موثوق	"	,
"	confidently	"	,	"	بثقة	"	,
"	confirm	"	,	"	يتأكد	"	,
"	confirmation	"	,	"	تأكيد	"	,
"	confuse	"	,	"	يشوش	"	,
"	confused	"	,	"	مشوش	"	,
"	confusing	"	,	"	مربك	"	,
"	confusion	"	,	"	التباس	"	,
"	connected	"	,	"	متصل	"	,
"	connections	"	,	"	روابط	"	,
"	conquer	"	,	"	يسيطر	"	,
"	consent	"	,	"	موافقة	"	,
"	consequence	"	,	"	عاقبة	"	,
"	consequences	"	,	"	آثار	"	,
"	consequently	"	,	"	بناء على ذلك	"	,
"	conservationist	"	,	"	حفاظ على البيئة	"	,
"	conservationists	"	,	"	محفاظ على البيئة	"	,
"	consider	"	,	"	ينصح	"	,
"	considered	"	,	"	معتبر	"	,
"	consistent	"	,	"	ثابت	"	,
"	consonant	"	,	"	حرف ساكن	"	,
"	constantly	"	,	"	باستمرار	"	,
"	construction	"	,	"	اعمال بناء	"	,
"	contact	"	,	"	اتصل	"	,
"	contain	"	,	"	يحتوي	"	,
"	contemporary	"	,	"	معاصر	"	,
"	contents	"	,	"	محتويات	"	,
"	context	"	,	"	سياق الكلام	"	,
"	continue	"	,	"	استمر	"	,
"	continuously	"	,	"	بشكل متواصل	"	,
"	contraction	"	,	"	تقلص	"	,
"	contribute	"	,	"	يساهم	"	,
"	contributing	"	,	"	مساهمة	"	,
"	control	"	,	"	تحكم	"	,
"	conversation	"	,	"	محادثة	"	,
"	conversational	"	,	"	تخاطبي	"	,
"	conversations	"	,	"	محادثات	"	,
"	cook	"	,	"	يطبخ	"	,
"	cooked	"	,	"	المطبوخة	"	,
"	cooking	"	,	"	طبخ	"	,
"	cool	"	,	"	بارد	"	,
"	coordinator	"	,	"	منسق	"	,
"	copyright	"	,	"	حقوق النشر	"	,
"	corner	"	,	"	ركن	"	,
"	correct	"	,	"	صحيح	"	,
"	correctly	"	,	"	بشكل صحيح	"	,
"	cost	"	,	"	كلفة	"	,
"	costs	"	,	"	تكاليف	"	,
"	could	"	,	"	يمكن أن	"	,
"	couldn’t	"	,	"	لم أستطع	"	,
"	council	"	,	"	مجلس	"	,
"	counters	"	,	"	عدادات	"	,
"	countries	"	,	"	الدول	"	,
"	country	"	,	"	بلد	"	,
"	countryside	"	,	"	اطراف المدينة	"	,
"	couple	"	,	"	زوج	"	,
"	course	"	,	"	طريقة او دورة	"	,
"	cousin	"	,	"	ولد عم	"	,
"	cousins	"	,	"	بنات العم	"	,
"	cover	"	,	"	غطاء	"	,
"	cow	"	,	"	بقرة	"	,
"	coworkers	"	,	"	زملاء عمل	"	,
"	cows	"	,	"	أبقار	"	,
"	crash	"	,	"	يصطدم	"	,
"	crashes	"	,	"	اصطدامات	"	,
"	crazy	"	,	"	مجنون	"	,
"	cream	"	,	"	كريم	"	,
"	create	"	,	"	يخلق	"	,
"	created	"	,	"	ابدع	"	,
"	creation	"	,	"	خلق	"	,
"	creative	"	,	"	خلاق	"	,
"	credit	"	,	"	الإئتمان	"	,
"	credits	"	,	"	قروض	"	,
"	crisis	"	,	"	أزمة	"	,
"	critical	"	,	"	حرج	"	,
"	crosscultural	"	,	"	بين الثقافات	"	,
"	crosses	"	,	"	صلبان	"	,
"	crossing	"	,	"	عبور	"	,
"	crowd	"	,	"	يحشد	"	,
"	crowded	"	,	"	مزدحم	"	,
"	crystal	"	,	"	كريستال	"	,
"	cultural	"	,	"	ثقافي	"	,
"	culture	"	,	"	حضارة	"	,
"	cultures	"	,	"	ثقافات	"	,
"	cup	"	,	"	كوب	"	,
"	cups	"	,	"	أكواب	"	,
"	cure	"	,	"	دواء	"	,
"	curious	"	,	"	فضولي	"	,
"	custodian	"	,	"	وصي	"	,
"	custom	"	,	"	عادة	"	,
"	customary	"	,	"	معتاد	"	,
"	customers	"	,	"	عملاء	"	,
"	customs	"	,	"	جمارك	"	,
"	cut	"	,	"	يقطع	"	,
"	cute	"	,	"	جذاب	"	,
"	cutting	"	,	"	قطع	"	,



];

var WordQ = Words[NumA-1];
var WordA = Words[NumA];

var WordQ1 = Words[NumA1-1];
var WordA1 = Words[NumA1];

var WordQ2 = Words[NumA2-1];
var WordA2 = Words[NumA2];

var WordQ3 = Words[NumA3-1];
var WordA3 = Words[NumA3];

var WordQ4 = Words[NumA4-1];
var WordA4 = Words[NumA4];


player.SetVar("NumA",NumA);
player.SetVar("NumA1",NumA1);
player.SetVar("NumA2",NumA2);
player.SetVar("NumA3",NumA3);
player.SetVar("NumA4",NumA4);

player.SetVar("WordQ",WordQ);
player.SetVar("WordQ1",WordQ1);
player.SetVar("WordQ2",WordQ2);
player.SetVar("WordQ3",WordQ3);
player.SetVar("WordQ4",WordQ4);


player.SetVar("WordA",WordA);
player.SetVar("WordA1",WordA1);
player.SetVar("WordA2",WordA2);
player.SetVar("WordA3",WordA3);
player.SetVar("WordA4",WordA4);

}

function Script47()
{
  // Odd = Engligh question, next Even = Arabic answer;
// random is even for arabic answer;

var player = GetPlayer();

var Words = 264; 

var NumA= Math.floor(Math.random()*Words+1)*2;
var NumA1= Math.floor(Math.random()*Words+1)*2;
var NumA2= Math.floor(Math.random()*Words+1)*2;
var NumA3= Math.floor(Math.random()*Words+1)*2;
var NumA4= Math.floor(Math.random()*Words+1)*2;




if ( (NumA1 == NumA)  || (NumA1 ==  NumA2) || (NumA1 ==  NumA3) || (NumA1 ==  NumA4) ) {
  var NumA1= 0
}

if ( (NumA2 == NumA)  || (NumA2 ==  NumA1) || (NumA2 ==  NumA3) || (NumA2 ==  NumA4) ) {
  var NumA2=  0
}

if ( (NumA3 == NumA)  || (NumA3 ==  NumA1) || (NumA3 ==  NumA2) || (NumA3 ==  NumA4) ) {
  var NumA3= 0
}


if ( (NumA4 == NumA)  || (NumA4 ==  NumA1) || (NumA4 ==  NumA2) || (NumA4 ==  NumA3) ) {
  var NumA4= 0
}


var Words= [
"Free Answer for You",


"	cab	"	,	"	سيارة أجرة	"	,
"	cable	"	,	"	كابل	"	,
"	cables	"	,	"	كابلات	"	,
"	cafeteria	"	,	"	كافيتيريا	"	,
"	cake	"	,	"	كيك	"	,
"	California	"	,	"	كاليفورنيا	"	,
"	call	"	,	"	يتصل	"	,
"	called	"	,	"	مسمى	"	,
"	calm	"	,	"	هادئ	"	,
"	came	"	,	"	أتى	"	,
"	camera	"	,	"	الة تصوير	"	,
"	cameras	"	,	"	كاميرات	"	,
"	camping	"	,	"	تخييم	"	,
"	campus	"	,	"	حرم الجامعي	"	,
"	can	"	,	"	علبة	"	,
"	Canada	"	,	"	كندا	"	,
"	cancel	"	,	"	إلغاء	"	,
"	cancer	"	,	"	سرطان	"	,
"	candy	"	,	"	حلويات	"	,
"	cannot	"	,	"	لا تستطيع	"	,
"	capitals	"	,	"	عواصم	"	,
"	car	"	,	"	سيارات	"	,
"	card	"	,	"	بطاقة	"	,
"	cards	"	,	"	بطاقات	"	,
"	care	"	,	"	رعاية	"	,
"	career	"	,	"	حياة مهنية	"	,
"	careful	"	,	"	حذر	"	,
"	carefully	"	,	"	بحرص	"	,
"	carpenter	"	,	"	نجار	"	,
"	carpets	"	,	"	سجاد	"	,
"	carriage	"	,	"	عربة قطار	"	,
"	carrots	"	,	"	جزر	"	,
"	carry	"	,	"	احمل	"	,
"	carrying	"	,	"	حمل	"	,
"	cars	"	,	"	سيارات	"	,
"	cartoonists	"	,	"	رسامي الكاريكاتير	"	,
"	cases	"	,	"	حالات	"	,
"	catch	"	,	"	قبض على	"	,
"	catching	"	,	"	اصطياد	"	,
"	caught	"	,	"	قبض على	"	,
"	cause	"	,	"	سبب	"	,
"	caused	"	,	"	يتسبب	"	,
"	causes	"	,	"	أسباب	"	,
"	causing	"	,	"	مما تسبب في	"	,
"	cease	"	,	"	انقطع	"	,
"	celebrate	"	,	"	احتفل	"	,
"	celebrities	"	,	"	مشاهير	"	,
"	cell	"	,	"	خلية	"	,
"	Celsius	"	,	"	درجة مئوية	"	,
"	center	"	,	"	مركز	"	,
"	certain	"	,	"	تأكيد	"	,
"	certainly	"	,	"	بالتأكيد	"	,
"	chain	"	,	"	سلسلة	"	,
"	chair	"	,	"	كرسي	"	,
"	chairs	"	,	"	كراسي جلوس	"	,
"	challenge	"	,	"	تحدي	"	,
"	champion	"	,	"	بطل	"	,
"	chance	"	,	"	فرصة	"	,
"	change	"	,	"	يتغيرون	"	,
"	changed	"	,	"	تغير	"	,
"	changes	"	,	"	تغييرات	"	,
"	channel	"	,	"	قناة	"	,
"	chants	"	,	"	أناشيد	"	,
"	character	"	,	"	حرف	"	,
"	characterize	"	,	"	يتميز	"	,
"	charity	"	,	"	اعمال الخيرية	"	,
"	Charles	"	,	"	تشارلز	"	,
"	charts	"	,	"	رسوم البيانية	"	,
"	cheap	"	,	"	رخيص	"	,
"	cheat	"	,	"	يغش	"	,
"	check	"	,	"	التحقق من	"	,
"	checklist	"	,	"	قائمة تدقيق	"	,
"	checkout	"	,	"	دفع	"	,
"	cheeks	"	,	"	الخدين	"	,
"	chef	"	,	"	طاه	"	,
"	chemicals	"	,	"	مواد كيميائية	"	,
"	chew	"	,	"	مضغ	"	,
"	Chicago	"	,	"	شيكاغو	"	,
"	chicken	"	,	"	دجاج	"	,
"	child	"	,	"	طفل	"	,
"	children	"	,	"	أطفال	"	,
"	China	"	,	"	الصين	"	,
"	Chinese	"	,	"	صينى	"	,
"	choice	"	,	"	خيار	"	,
"	choices	"	,	"	اختيارات	"	,
"	choose	"	,	"	يختار	"	,
"	choosing	"	,	"	اختيار	"	,
"	chosen	"	,	"	مختار	"	,
"	cigarette	"	,	"	سيجارة	"	,
"	circle	"	,	"	دائرة	"	,
"	circles	"	,	"	دوائر	"	,
"	cities	"	,	"	مدن	"	,
"	citizens	"	,	"	مواطنين	"	,
"	city	"	,	"	مدينة	"	,
"	claims	"	,	"	مزاعم	"	,
"	class	"	,	"	صف دراسي	"	,
"	classes	"	,	"	طبقات	"	,
"	classic	"	,	"	كلاسيكي	"	,
"	classify	"	,	"	يصنف	"	,
"	classmate	"	,	"	زميل الصف	"	,
"	classmates	"	,	"	زملاء الصف	"	,
"	clauses	"	,	"	شروط	"	,
"	clean	"	,	"	ينظف	"	,
"	cleaner	"	,	"	منظف	"	,
"	cleaning	"	,	"	تنظيف	"	,
"	clear	"	,	"	صافي	"	,
"	clearly	"	,	"	بوضوح	"	,
"	clever	"	,	"	ماهر	"	,
"	climate	"	,	"	مناخ	"	,
"	climb	"	,	"	تسلق	"	,
"	clinic	"	,	"	عيادة	"	,
"	close	"	,	"	قريب	"	,
"	closely	"	,	"	بعناية	"	,
"	closeness	"	,	"	قرب	"	,
"	closest	"	,	"	الأقرب	"	,
"	closet	"	,	"	خزانة	"	,
"	closing	"	,	"	إغلاق	"	,
"	clothes	"	,	"	ملابس	"	,
"	cloud	"	,	"	غيم	"	,
"	club	"	,	"	النادي	"	,
"	clusters	"	,	"	عناقيد المجموعات	"	,
"	coach	"	,	"	مدرب رياضي	"	,
"	co exist	"	,	"	تعايش	"	,
"	coffee	"	,	"	قهوة	"	,
"	cognitive	"	,	"	إدراكي	"	,
"	coincidence	"	,	"	صدفة	"	,
"	cold	"	,	"	برد	"	,
"	colder	"	,	"	ابرد	"	,
"	colleagues	"	,	"	زملاء	"	,
"	college	"	,	"	كلية	"	,
"	color	"	,	"	لون	"	,
"	colorful	"	,	"	زاهى الألوان	"	,
"	combine	"	,	"	يجمع	"	,
"	combined	"	,	"	مجموع	"	,
"	come	"	,	"	تأتي	"	,
"	comfortable	"	,	"	مريح	"	,
"	coming	"	,	"	آت	"	,
"	commands	"	,	"	أوامر	"	,
"	comments	"	,	"	تعليقات	"	,
"	common	"	,	"	مشترك	"	,
"	communicate	"	,	"	يتواصل	"	,
"	communication	"	,	"	اتصالات	"	,
"	community	"	,	"	مجموعة متضامنة	"	,
"	company	"	,	"	شركة	"	,
"	compare	"	,	"	يقارن	"	,
"	comparing	"	,	"	مقارنة	"	,
"	compartment	"	,	"	حجرة	"	,
"	compete	"	,	"	يتنافس	"	,
"	competitions	"	,	"	مسابقات	"	,
"	complain	"	,	"	يتذمر	"	,
"	complaint	"	,	"	شكوى	"	,
"	complaints	"	,	"	شكاوي	"	,
"	complete	"	,	"	اكتمال	"	,
"	completed	"	,	"	منجز	"	,
"	completely	"	,	"	بالكامل	"	,
"	compliment	"	,	"	إطراء	"	,
"	complimenting	"	,	"	المدح	"	,
"	comprehension	"	,	"	فهم	"	,
"	computer	"	,	"	الحاسوب	"	,
"	concentration	"	,	"	تركيز	"	,
"	concept	"	,	"	مفهوم	"	,
"	concepts	"	,	"	مفاهيم	"	,
"	concern	"	,	"	اهتمام	"	,
"	conclusion	"	,	"	استنتاج	"	,
"	condition	"	,	"	حالة	"	,
"	conditional	"	,	"	مشروط	"	,
"	cone	"	,	"	مخروط	"	,
"	conference	"	,	"	مؤتمر	"	,
"	confident	"	,	"	موثوق	"	,
"	confidently	"	,	"	بثقة	"	,
"	confirm	"	,	"	يتأكد	"	,
"	confirmation	"	,	"	تأكيد	"	,
"	confuse	"	,	"	يشوش	"	,
"	confused	"	,	"	مشوش	"	,
"	confusing	"	,	"	مربك	"	,
"	confusion	"	,	"	التباس	"	,
"	connected	"	,	"	متصل	"	,
"	connections	"	,	"	روابط	"	,
"	conquer	"	,	"	يسيطر	"	,
"	consent	"	,	"	موافقة	"	,
"	consequence	"	,	"	عاقبة	"	,
"	consequences	"	,	"	آثار	"	,
"	consequently	"	,	"	بناء على ذلك	"	,
"	conservationist	"	,	"	حفاظ على البيئة	"	,
"	conservationists	"	,	"	محفاظ على البيئة	"	,
"	consider	"	,	"	ينصح	"	,
"	considered	"	,	"	معتبر	"	,
"	consistent	"	,	"	ثابت	"	,
"	consonant	"	,	"	حرف ساكن	"	,
"	constantly	"	,	"	باستمرار	"	,
"	construction	"	,	"	اعمال بناء	"	,
"	contact	"	,	"	اتصل	"	,
"	contain	"	,	"	يحتوي	"	,
"	contemporary	"	,	"	معاصر	"	,
"	contents	"	,	"	محتويات	"	,
"	context	"	,	"	سياق الكلام	"	,
"	continue	"	,	"	استمر	"	,
"	continuously	"	,	"	بشكل متواصل	"	,
"	contraction	"	,	"	تقلص	"	,
"	contribute	"	,	"	يساهم	"	,
"	contributing	"	,	"	مساهمة	"	,
"	control	"	,	"	تحكم	"	,
"	conversation	"	,	"	محادثة	"	,
"	conversational	"	,	"	تخاطبي	"	,
"	conversations	"	,	"	محادثات	"	,
"	cook	"	,	"	يطبخ	"	,
"	cooked	"	,	"	المطبوخة	"	,
"	cooking	"	,	"	طبخ	"	,
"	cool	"	,	"	بارد	"	,
"	coordinator	"	,	"	منسق	"	,
"	copyright	"	,	"	حقوق النشر	"	,
"	corner	"	,	"	ركن	"	,
"	correct	"	,	"	صحيح	"	,
"	correctly	"	,	"	بشكل صحيح	"	,
"	cost	"	,	"	كلفة	"	,
"	costs	"	,	"	تكاليف	"	,
"	could	"	,	"	يمكن أن	"	,
"	couldn’t	"	,	"	لم أستطع	"	,
"	council	"	,	"	مجلس	"	,
"	counters	"	,	"	عدادات	"	,
"	countries	"	,	"	الدول	"	,
"	country	"	,	"	بلد	"	,
"	countryside	"	,	"	اطراف المدينة	"	,
"	couple	"	,	"	زوج	"	,
"	course	"	,	"	طريقة او دورة	"	,
"	cousin	"	,	"	ولد عم	"	,
"	cousins	"	,	"	بنات العم	"	,
"	cover	"	,	"	غطاء	"	,
"	cow	"	,	"	بقرة	"	,
"	coworkers	"	,	"	زملاء عمل	"	,
"	cows	"	,	"	أبقار	"	,
"	crash	"	,	"	يصطدم	"	,
"	crashes	"	,	"	اصطدامات	"	,
"	crazy	"	,	"	مجنون	"	,
"	cream	"	,	"	كريم	"	,
"	create	"	,	"	يخلق	"	,
"	created	"	,	"	ابدع	"	,
"	creation	"	,	"	خلق	"	,
"	creative	"	,	"	خلاق	"	,
"	credit	"	,	"	الإئتمان	"	,
"	credits	"	,	"	قروض	"	,
"	crisis	"	,	"	أزمة	"	,
"	critical	"	,	"	حرج	"	,
"	crosscultural	"	,	"	بين الثقافات	"	,
"	crosses	"	,	"	صلبان	"	,
"	crossing	"	,	"	عبور	"	,
"	crowd	"	,	"	يحشد	"	,
"	crowded	"	,	"	مزدحم	"	,
"	crystal	"	,	"	كريستال	"	,
"	cultural	"	,	"	ثقافي	"	,
"	culture	"	,	"	حضارة	"	,
"	cultures	"	,	"	ثقافات	"	,
"	cup	"	,	"	كوب	"	,
"	cups	"	,	"	أكواب	"	,
"	cure	"	,	"	دواء	"	,
"	curious	"	,	"	فضولي	"	,
"	custodian	"	,	"	وصي	"	,
"	custom	"	,	"	عادة	"	,
"	customary	"	,	"	معتاد	"	,
"	customers	"	,	"	عملاء	"	,
"	customs	"	,	"	جمارك	"	,
"	cut	"	,	"	يقطع	"	,
"	cute	"	,	"	جذاب	"	,
"	cutting	"	,	"	قطع	"	,



];

var WordQ = Words[NumA-1];
var WordA = Words[NumA];

var WordQ1 = Words[NumA1-1];
var WordA1 = Words[NumA1];

var WordQ2 = Words[NumA2-1];
var WordA2 = Words[NumA2];

var WordQ3 = Words[NumA3-1];
var WordA3 = Words[NumA3];

var WordQ4 = Words[NumA4-1];
var WordA4 = Words[NumA4];


player.SetVar("NumA",NumA);
player.SetVar("NumA1",NumA1);
player.SetVar("NumA2",NumA2);
player.SetVar("NumA3",NumA3);
player.SetVar("NumA4",NumA4);

player.SetVar("WordQ",WordQ);
player.SetVar("WordQ1",WordQ1);
player.SetVar("WordQ2",WordQ2);
player.SetVar("WordQ3",WordQ3);
player.SetVar("WordQ4",WordQ4);


player.SetVar("WordA",WordA);
player.SetVar("WordA1",WordA1);
player.SetVar("WordA2",WordA2);
player.SetVar("WordA3",WordA3);
player.SetVar("WordA4",WordA4);

}

function Script48()
{
  // Odd = Engligh question, next Even = Arabic answer;
// random is even for arabic answer;

var player = GetPlayer();

var Words = 264; 

var NumA= Math.floor(Math.random()*Words+1)*2;
var NumA1= Math.floor(Math.random()*Words+1)*2;
var NumA2= Math.floor(Math.random()*Words+1)*2;
var NumA3= Math.floor(Math.random()*Words+1)*2;
var NumA4= Math.floor(Math.random()*Words+1)*2;




if ( (NumA1 == NumA)  || (NumA1 ==  NumA2) || (NumA1 ==  NumA3) || (NumA1 ==  NumA4) ) {
  var NumA1= 0
}

if ( (NumA2 == NumA)  || (NumA2 ==  NumA1) || (NumA2 ==  NumA3) || (NumA2 ==  NumA4) ) {
  var NumA2=  0
}

if ( (NumA3 == NumA)  || (NumA3 ==  NumA1) || (NumA3 ==  NumA2) || (NumA3 ==  NumA4) ) {
  var NumA3= 0
}


if ( (NumA4 == NumA)  || (NumA4 ==  NumA1) || (NumA4 ==  NumA2) || (NumA4 ==  NumA3) ) {
  var NumA4= 0
}


var Words= [
"Free Answer for You",


"	cab	"	,	"	سيارة أجرة	"	,
"	cable	"	,	"	كابل	"	,
"	cables	"	,	"	كابلات	"	,
"	cafeteria	"	,	"	كافيتيريا	"	,
"	cake	"	,	"	كيك	"	,
"	California	"	,	"	كاليفورنيا	"	,
"	call	"	,	"	يتصل	"	,
"	called	"	,	"	مسمى	"	,
"	calm	"	,	"	هادئ	"	,
"	came	"	,	"	أتى	"	,
"	camera	"	,	"	الة تصوير	"	,
"	cameras	"	,	"	كاميرات	"	,
"	camping	"	,	"	تخييم	"	,
"	campus	"	,	"	حرم الجامعي	"	,
"	can	"	,	"	علبة	"	,
"	Canada	"	,	"	كندا	"	,
"	cancel	"	,	"	إلغاء	"	,
"	cancer	"	,	"	سرطان	"	,
"	candy	"	,	"	حلويات	"	,
"	cannot	"	,	"	لا تستطيع	"	,
"	capitals	"	,	"	عواصم	"	,
"	car	"	,	"	سيارات	"	,
"	card	"	,	"	بطاقة	"	,
"	cards	"	,	"	بطاقات	"	,
"	care	"	,	"	رعاية	"	,
"	career	"	,	"	حياة مهنية	"	,
"	careful	"	,	"	حذر	"	,
"	carefully	"	,	"	بحرص	"	,
"	carpenter	"	,	"	نجار	"	,
"	carpets	"	,	"	سجاد	"	,
"	carriage	"	,	"	عربة قطار	"	,
"	carrots	"	,	"	جزر	"	,
"	carry	"	,	"	احمل	"	,
"	carrying	"	,	"	حمل	"	,
"	cars	"	,	"	سيارات	"	,
"	cartoonists	"	,	"	رسامي الكاريكاتير	"	,
"	cases	"	,	"	حالات	"	,
"	catch	"	,	"	قبض على	"	,
"	catching	"	,	"	اصطياد	"	,
"	caught	"	,	"	قبض على	"	,
"	cause	"	,	"	سبب	"	,
"	caused	"	,	"	يتسبب	"	,
"	causes	"	,	"	أسباب	"	,
"	causing	"	,	"	مما تسبب في	"	,
"	cease	"	,	"	انقطع	"	,
"	celebrate	"	,	"	احتفل	"	,
"	celebrities	"	,	"	مشاهير	"	,
"	cell	"	,	"	خلية	"	,
"	Celsius	"	,	"	درجة مئوية	"	,
"	center	"	,	"	مركز	"	,
"	certain	"	,	"	تأكيد	"	,
"	certainly	"	,	"	بالتأكيد	"	,
"	chain	"	,	"	سلسلة	"	,
"	chair	"	,	"	كرسي	"	,
"	chairs	"	,	"	كراسي جلوس	"	,
"	challenge	"	,	"	تحدي	"	,
"	champion	"	,	"	بطل	"	,
"	chance	"	,	"	فرصة	"	,
"	change	"	,	"	يتغيرون	"	,
"	changed	"	,	"	تغير	"	,
"	changes	"	,	"	تغييرات	"	,
"	channel	"	,	"	قناة	"	,
"	chants	"	,	"	أناشيد	"	,
"	character	"	,	"	حرف	"	,
"	characterize	"	,	"	يتميز	"	,
"	charity	"	,	"	اعمال الخيرية	"	,
"	Charles	"	,	"	تشارلز	"	,
"	charts	"	,	"	رسوم البيانية	"	,
"	cheap	"	,	"	رخيص	"	,
"	cheat	"	,	"	يغش	"	,
"	check	"	,	"	التحقق من	"	,
"	checklist	"	,	"	قائمة تدقيق	"	,
"	checkout	"	,	"	دفع	"	,
"	cheeks	"	,	"	الخدين	"	,
"	chef	"	,	"	طاه	"	,
"	chemicals	"	,	"	مواد كيميائية	"	,
"	chew	"	,	"	مضغ	"	,
"	Chicago	"	,	"	شيكاغو	"	,
"	chicken	"	,	"	دجاج	"	,
"	child	"	,	"	طفل	"	,
"	children	"	,	"	أطفال	"	,
"	China	"	,	"	الصين	"	,
"	Chinese	"	,	"	صينى	"	,
"	choice	"	,	"	خيار	"	,
"	choices	"	,	"	اختيارات	"	,
"	choose	"	,	"	يختار	"	,
"	choosing	"	,	"	اختيار	"	,
"	chosen	"	,	"	مختار	"	,
"	cigarette	"	,	"	سيجارة	"	,
"	circle	"	,	"	دائرة	"	,
"	circles	"	,	"	دوائر	"	,
"	cities	"	,	"	مدن	"	,
"	citizens	"	,	"	مواطنين	"	,
"	city	"	,	"	مدينة	"	,
"	claims	"	,	"	مزاعم	"	,
"	class	"	,	"	صف دراسي	"	,
"	classes	"	,	"	طبقات	"	,
"	classic	"	,	"	كلاسيكي	"	,
"	classify	"	,	"	يصنف	"	,
"	classmate	"	,	"	زميل الصف	"	,
"	classmates	"	,	"	زملاء الصف	"	,
"	clauses	"	,	"	شروط	"	,
"	clean	"	,	"	ينظف	"	,
"	cleaner	"	,	"	منظف	"	,
"	cleaning	"	,	"	تنظيف	"	,
"	clear	"	,	"	صافي	"	,
"	clearly	"	,	"	بوضوح	"	,
"	clever	"	,	"	ماهر	"	,
"	climate	"	,	"	مناخ	"	,
"	climb	"	,	"	تسلق	"	,
"	clinic	"	,	"	عيادة	"	,
"	close	"	,	"	قريب	"	,
"	closely	"	,	"	بعناية	"	,
"	closeness	"	,	"	قرب	"	,
"	closest	"	,	"	الأقرب	"	,
"	closet	"	,	"	خزانة	"	,
"	closing	"	,	"	إغلاق	"	,
"	clothes	"	,	"	ملابس	"	,
"	cloud	"	,	"	غيم	"	,
"	club	"	,	"	النادي	"	,
"	clusters	"	,	"	عناقيد المجموعات	"	,
"	coach	"	,	"	مدرب رياضي	"	,
"	co exist	"	,	"	تعايش	"	,
"	coffee	"	,	"	قهوة	"	,
"	cognitive	"	,	"	إدراكي	"	,
"	coincidence	"	,	"	صدفة	"	,
"	cold	"	,	"	برد	"	,
"	colder	"	,	"	ابرد	"	,
"	colleagues	"	,	"	زملاء	"	,
"	college	"	,	"	كلية	"	,
"	color	"	,	"	لون	"	,
"	colorful	"	,	"	زاهى الألوان	"	,
"	combine	"	,	"	يجمع	"	,
"	combined	"	,	"	مجموع	"	,
"	come	"	,	"	تأتي	"	,
"	comfortable	"	,	"	مريح	"	,
"	coming	"	,	"	آت	"	,
"	commands	"	,	"	أوامر	"	,
"	comments	"	,	"	تعليقات	"	,
"	common	"	,	"	مشترك	"	,
"	communicate	"	,	"	يتواصل	"	,
"	communication	"	,	"	اتصالات	"	,
"	community	"	,	"	مجموعة متضامنة	"	,
"	company	"	,	"	شركة	"	,
"	compare	"	,	"	يقارن	"	,
"	comparing	"	,	"	مقارنة	"	,
"	compartment	"	,	"	حجرة	"	,
"	compete	"	,	"	يتنافس	"	,
"	competitions	"	,	"	مسابقات	"	,
"	complain	"	,	"	يتذمر	"	,
"	complaint	"	,	"	شكوى	"	,
"	complaints	"	,	"	شكاوي	"	,
"	complete	"	,	"	اكتمال	"	,
"	completed	"	,	"	منجز	"	,
"	completely	"	,	"	بالكامل	"	,
"	compliment	"	,	"	إطراء	"	,
"	complimenting	"	,	"	المدح	"	,
"	comprehension	"	,	"	فهم	"	,
"	computer	"	,	"	الحاسوب	"	,
"	concentration	"	,	"	تركيز	"	,
"	concept	"	,	"	مفهوم	"	,
"	concepts	"	,	"	مفاهيم	"	,
"	concern	"	,	"	اهتمام	"	,
"	conclusion	"	,	"	استنتاج	"	,
"	condition	"	,	"	حالة	"	,
"	conditional	"	,	"	مشروط	"	,
"	cone	"	,	"	مخروط	"	,
"	conference	"	,	"	مؤتمر	"	,
"	confident	"	,	"	موثوق	"	,
"	confidently	"	,	"	بثقة	"	,
"	confirm	"	,	"	يتأكد	"	,
"	confirmation	"	,	"	تأكيد	"	,
"	confuse	"	,	"	يشوش	"	,
"	confused	"	,	"	مشوش	"	,
"	confusing	"	,	"	مربك	"	,
"	confusion	"	,	"	التباس	"	,
"	connected	"	,	"	متصل	"	,
"	connections	"	,	"	روابط	"	,
"	conquer	"	,	"	يسيطر	"	,
"	consent	"	,	"	موافقة	"	,
"	consequence	"	,	"	عاقبة	"	,
"	consequences	"	,	"	آثار	"	,
"	consequently	"	,	"	بناء على ذلك	"	,
"	conservationist	"	,	"	حفاظ على البيئة	"	,
"	conservationists	"	,	"	محفاظ على البيئة	"	,
"	consider	"	,	"	ينصح	"	,
"	considered	"	,	"	معتبر	"	,
"	consistent	"	,	"	ثابت	"	,
"	consonant	"	,	"	حرف ساكن	"	,
"	constantly	"	,	"	باستمرار	"	,
"	construction	"	,	"	اعمال بناء	"	,
"	contact	"	,	"	اتصل	"	,
"	contain	"	,	"	يحتوي	"	,
"	contemporary	"	,	"	معاصر	"	,
"	contents	"	,	"	محتويات	"	,
"	context	"	,	"	سياق الكلام	"	,
"	continue	"	,	"	استمر	"	,
"	continuously	"	,	"	بشكل متواصل	"	,
"	contraction	"	,	"	تقلص	"	,
"	contribute	"	,	"	يساهم	"	,
"	contributing	"	,	"	مساهمة	"	,
"	control	"	,	"	تحكم	"	,
"	conversation	"	,	"	محادثة	"	,
"	conversational	"	,	"	تخاطبي	"	,
"	conversations	"	,	"	محادثات	"	,
"	cook	"	,	"	يطبخ	"	,
"	cooked	"	,	"	المطبوخة	"	,
"	cooking	"	,	"	طبخ	"	,
"	cool	"	,	"	بارد	"	,
"	coordinator	"	,	"	منسق	"	,
"	copyright	"	,	"	حقوق النشر	"	,
"	corner	"	,	"	ركن	"	,
"	correct	"	,	"	صحيح	"	,
"	correctly	"	,	"	بشكل صحيح	"	,
"	cost	"	,	"	كلفة	"	,
"	costs	"	,	"	تكاليف	"	,
"	could	"	,	"	يمكن أن	"	,
"	couldn’t	"	,	"	لم أستطع	"	,
"	council	"	,	"	مجلس	"	,
"	counters	"	,	"	عدادات	"	,
"	countries	"	,	"	الدول	"	,
"	country	"	,	"	بلد	"	,
"	countryside	"	,	"	اطراف المدينة	"	,
"	couple	"	,	"	زوج	"	,
"	course	"	,	"	طريقة او دورة	"	,
"	cousin	"	,	"	ولد عم	"	,
"	cousins	"	,	"	بنات العم	"	,
"	cover	"	,	"	غطاء	"	,
"	cow	"	,	"	بقرة	"	,
"	coworkers	"	,	"	زملاء عمل	"	,
"	cows	"	,	"	أبقار	"	,
"	crash	"	,	"	يصطدم	"	,
"	crashes	"	,	"	اصطدامات	"	,
"	crazy	"	,	"	مجنون	"	,
"	cream	"	,	"	كريم	"	,
"	create	"	,	"	يخلق	"	,
"	created	"	,	"	ابدع	"	,
"	creation	"	,	"	خلق	"	,
"	creative	"	,	"	خلاق	"	,
"	credit	"	,	"	الإئتمان	"	,
"	credits	"	,	"	قروض	"	,
"	crisis	"	,	"	أزمة	"	,
"	critical	"	,	"	حرج	"	,
"	crosscultural	"	,	"	بين الثقافات	"	,
"	crosses	"	,	"	صلبان	"	,
"	crossing	"	,	"	عبور	"	,
"	crowd	"	,	"	يحشد	"	,
"	crowded	"	,	"	مزدحم	"	,
"	crystal	"	,	"	كريستال	"	,
"	cultural	"	,	"	ثقافي	"	,
"	culture	"	,	"	حضارة	"	,
"	cultures	"	,	"	ثقافات	"	,
"	cup	"	,	"	كوب	"	,
"	cups	"	,	"	أكواب	"	,
"	cure	"	,	"	دواء	"	,
"	curious	"	,	"	فضولي	"	,
"	custodian	"	,	"	وصي	"	,
"	custom	"	,	"	عادة	"	,
"	customary	"	,	"	معتاد	"	,
"	customers	"	,	"	عملاء	"	,
"	customs	"	,	"	جمارك	"	,
"	cut	"	,	"	يقطع	"	,
"	cute	"	,	"	جذاب	"	,
"	cutting	"	,	"	قطع	"	,



];

var WordQ = Words[NumA-1];
var WordA = Words[NumA];

var WordQ1 = Words[NumA1-1];
var WordA1 = Words[NumA1];

var WordQ2 = Words[NumA2-1];
var WordA2 = Words[NumA2];

var WordQ3 = Words[NumA3-1];
var WordA3 = Words[NumA3];

var WordQ4 = Words[NumA4-1];
var WordA4 = Words[NumA4];


player.SetVar("NumA",NumA);
player.SetVar("NumA1",NumA1);
player.SetVar("NumA2",NumA2);
player.SetVar("NumA3",NumA3);
player.SetVar("NumA4",NumA4);

player.SetVar("WordQ",WordQ);
player.SetVar("WordQ1",WordQ1);
player.SetVar("WordQ2",WordQ2);
player.SetVar("WordQ3",WordQ3);
player.SetVar("WordQ4",WordQ4);


player.SetVar("WordA",WordA);
player.SetVar("WordA1",WordA1);
player.SetVar("WordA2",WordA2);
player.SetVar("WordA3",WordA3);
player.SetVar("WordA4",WordA4);

}

function Script49()
{
  // Odd = Engligh question, next Even = Arabic answer;
// random is even for arabic answer;

var player = GetPlayer();

var Words = 264; 

var NumA= Math.floor(Math.random()*Words+1)*2;
var NumA1= Math.floor(Math.random()*Words+1)*2;
var NumA2= Math.floor(Math.random()*Words+1)*2;
var NumA3= Math.floor(Math.random()*Words+1)*2;
var NumA4= Math.floor(Math.random()*Words+1)*2;




if ( (NumA1 == NumA)  || (NumA1 ==  NumA2) || (NumA1 ==  NumA3) || (NumA1 ==  NumA4) ) {
  var NumA1= 0
}

if ( (NumA2 == NumA)  || (NumA2 ==  NumA1) || (NumA2 ==  NumA3) || (NumA2 ==  NumA4) ) {
  var NumA2=  0
}

if ( (NumA3 == NumA)  || (NumA3 ==  NumA1) || (NumA3 ==  NumA2) || (NumA3 ==  NumA4) ) {
  var NumA3= 0
}


if ( (NumA4 == NumA)  || (NumA4 ==  NumA1) || (NumA4 ==  NumA2) || (NumA4 ==  NumA3) ) {
  var NumA4= 0
}


var Words= [
"Free Answer for You",


"	cab	"	,	"	سيارة أجرة	"	,
"	cable	"	,	"	كابل	"	,
"	cables	"	,	"	كابلات	"	,
"	cafeteria	"	,	"	كافيتيريا	"	,
"	cake	"	,	"	كيك	"	,
"	California	"	,	"	كاليفورنيا	"	,
"	call	"	,	"	يتصل	"	,
"	called	"	,	"	مسمى	"	,
"	calm	"	,	"	هادئ	"	,
"	came	"	,	"	أتى	"	,
"	camera	"	,	"	الة تصوير	"	,
"	cameras	"	,	"	كاميرات	"	,
"	camping	"	,	"	تخييم	"	,
"	campus	"	,	"	حرم الجامعي	"	,
"	can	"	,	"	علبة	"	,
"	Canada	"	,	"	كندا	"	,
"	cancel	"	,	"	إلغاء	"	,
"	cancer	"	,	"	سرطان	"	,
"	candy	"	,	"	حلويات	"	,
"	cannot	"	,	"	لا تستطيع	"	,
"	capitals	"	,	"	عواصم	"	,
"	car	"	,	"	سيارات	"	,
"	card	"	,	"	بطاقة	"	,
"	cards	"	,	"	بطاقات	"	,
"	care	"	,	"	رعاية	"	,
"	career	"	,	"	حياة مهنية	"	,
"	careful	"	,	"	حذر	"	,
"	carefully	"	,	"	بحرص	"	,
"	carpenter	"	,	"	نجار	"	,
"	carpets	"	,	"	سجاد	"	,
"	carriage	"	,	"	عربة قطار	"	,
"	carrots	"	,	"	جزر	"	,
"	carry	"	,	"	احمل	"	,
"	carrying	"	,	"	حمل	"	,
"	cars	"	,	"	سيارات	"	,
"	cartoonists	"	,	"	رسامي الكاريكاتير	"	,
"	cases	"	,	"	حالات	"	,
"	catch	"	,	"	قبض على	"	,
"	catching	"	,	"	اصطياد	"	,
"	caught	"	,	"	قبض على	"	,
"	cause	"	,	"	سبب	"	,
"	caused	"	,	"	يتسبب	"	,
"	causes	"	,	"	أسباب	"	,
"	causing	"	,	"	مما تسبب في	"	,
"	cease	"	,	"	انقطع	"	,
"	celebrate	"	,	"	احتفل	"	,
"	celebrities	"	,	"	مشاهير	"	,
"	cell	"	,	"	خلية	"	,
"	Celsius	"	,	"	درجة مئوية	"	,
"	center	"	,	"	مركز	"	,
"	certain	"	,	"	تأكيد	"	,
"	certainly	"	,	"	بالتأكيد	"	,
"	chain	"	,	"	سلسلة	"	,
"	chair	"	,	"	كرسي	"	,
"	chairs	"	,	"	كراسي جلوس	"	,
"	challenge	"	,	"	تحدي	"	,
"	champion	"	,	"	بطل	"	,
"	chance	"	,	"	فرصة	"	,
"	change	"	,	"	يتغيرون	"	,
"	changed	"	,	"	تغير	"	,
"	changes	"	,	"	تغييرات	"	,
"	channel	"	,	"	قناة	"	,
"	chants	"	,	"	أناشيد	"	,
"	character	"	,	"	حرف	"	,
"	characterize	"	,	"	يتميز	"	,
"	charity	"	,	"	اعمال الخيرية	"	,
"	Charles	"	,	"	تشارلز	"	,
"	charts	"	,	"	رسوم البيانية	"	,
"	cheap	"	,	"	رخيص	"	,
"	cheat	"	,	"	يغش	"	,
"	check	"	,	"	التحقق من	"	,
"	checklist	"	,	"	قائمة تدقيق	"	,
"	checkout	"	,	"	دفع	"	,
"	cheeks	"	,	"	الخدين	"	,
"	chef	"	,	"	طاه	"	,
"	chemicals	"	,	"	مواد كيميائية	"	,
"	chew	"	,	"	مضغ	"	,
"	Chicago	"	,	"	شيكاغو	"	,
"	chicken	"	,	"	دجاج	"	,
"	child	"	,	"	طفل	"	,
"	children	"	,	"	أطفال	"	,
"	China	"	,	"	الصين	"	,
"	Chinese	"	,	"	صينى	"	,
"	choice	"	,	"	خيار	"	,
"	choices	"	,	"	اختيارات	"	,
"	choose	"	,	"	يختار	"	,
"	choosing	"	,	"	اختيار	"	,
"	chosen	"	,	"	مختار	"	,
"	cigarette	"	,	"	سيجارة	"	,
"	circle	"	,	"	دائرة	"	,
"	circles	"	,	"	دوائر	"	,
"	cities	"	,	"	مدن	"	,
"	citizens	"	,	"	مواطنين	"	,
"	city	"	,	"	مدينة	"	,
"	claims	"	,	"	مزاعم	"	,
"	class	"	,	"	صف دراسي	"	,
"	classes	"	,	"	طبقات	"	,
"	classic	"	,	"	كلاسيكي	"	,
"	classify	"	,	"	يصنف	"	,
"	classmate	"	,	"	زميل الصف	"	,
"	classmates	"	,	"	زملاء الصف	"	,
"	clauses	"	,	"	شروط	"	,
"	clean	"	,	"	ينظف	"	,
"	cleaner	"	,	"	منظف	"	,
"	cleaning	"	,	"	تنظيف	"	,
"	clear	"	,	"	صافي	"	,
"	clearly	"	,	"	بوضوح	"	,
"	clever	"	,	"	ماهر	"	,
"	climate	"	,	"	مناخ	"	,
"	climb	"	,	"	تسلق	"	,
"	clinic	"	,	"	عيادة	"	,
"	close	"	,	"	قريب	"	,
"	closely	"	,	"	بعناية	"	,
"	closeness	"	,	"	قرب	"	,
"	closest	"	,	"	الأقرب	"	,
"	closet	"	,	"	خزانة	"	,
"	closing	"	,	"	إغلاق	"	,
"	clothes	"	,	"	ملابس	"	,
"	cloud	"	,	"	غيم	"	,
"	club	"	,	"	النادي	"	,
"	clusters	"	,	"	عناقيد المجموعات	"	,
"	coach	"	,	"	مدرب رياضي	"	,
"	co exist	"	,	"	تعايش	"	,
"	coffee	"	,	"	قهوة	"	,
"	cognitive	"	,	"	إدراكي	"	,
"	coincidence	"	,	"	صدفة	"	,
"	cold	"	,	"	برد	"	,
"	colder	"	,	"	ابرد	"	,
"	colleagues	"	,	"	زملاء	"	,
"	college	"	,	"	كلية	"	,
"	color	"	,	"	لون	"	,
"	colorful	"	,	"	زاهى الألوان	"	,
"	combine	"	,	"	يجمع	"	,
"	combined	"	,	"	مجموع	"	,
"	come	"	,	"	تأتي	"	,
"	comfortable	"	,	"	مريح	"	,
"	coming	"	,	"	آت	"	,
"	commands	"	,	"	أوامر	"	,
"	comments	"	,	"	تعليقات	"	,
"	common	"	,	"	مشترك	"	,
"	communicate	"	,	"	يتواصل	"	,
"	communication	"	,	"	اتصالات	"	,
"	community	"	,	"	مجموعة متضامنة	"	,
"	company	"	,	"	شركة	"	,
"	compare	"	,	"	يقارن	"	,
"	comparing	"	,	"	مقارنة	"	,
"	compartment	"	,	"	حجرة	"	,
"	compete	"	,	"	يتنافس	"	,
"	competitions	"	,	"	مسابقات	"	,
"	complain	"	,	"	يتذمر	"	,
"	complaint	"	,	"	شكوى	"	,
"	complaints	"	,	"	شكاوي	"	,
"	complete	"	,	"	اكتمال	"	,
"	completed	"	,	"	منجز	"	,
"	completely	"	,	"	بالكامل	"	,
"	compliment	"	,	"	إطراء	"	,
"	complimenting	"	,	"	المدح	"	,
"	comprehension	"	,	"	فهم	"	,
"	computer	"	,	"	الحاسوب	"	,
"	concentration	"	,	"	تركيز	"	,
"	concept	"	,	"	مفهوم	"	,
"	concepts	"	,	"	مفاهيم	"	,
"	concern	"	,	"	اهتمام	"	,
"	conclusion	"	,	"	استنتاج	"	,
"	condition	"	,	"	حالة	"	,
"	conditional	"	,	"	مشروط	"	,
"	cone	"	,	"	مخروط	"	,
"	conference	"	,	"	مؤتمر	"	,
"	confident	"	,	"	موثوق	"	,
"	confidently	"	,	"	بثقة	"	,
"	confirm	"	,	"	يتأكد	"	,
"	confirmation	"	,	"	تأكيد	"	,
"	confuse	"	,	"	يشوش	"	,
"	confused	"	,	"	مشوش	"	,
"	confusing	"	,	"	مربك	"	,
"	confusion	"	,	"	التباس	"	,
"	connected	"	,	"	متصل	"	,
"	connections	"	,	"	روابط	"	,
"	conquer	"	,	"	يسيطر	"	,
"	consent	"	,	"	موافقة	"	,
"	consequence	"	,	"	عاقبة	"	,
"	consequences	"	,	"	آثار	"	,
"	consequently	"	,	"	بناء على ذلك	"	,
"	conservationist	"	,	"	حفاظ على البيئة	"	,
"	conservationists	"	,	"	محفاظ على البيئة	"	,
"	consider	"	,	"	ينصح	"	,
"	considered	"	,	"	معتبر	"	,
"	consistent	"	,	"	ثابت	"	,
"	consonant	"	,	"	حرف ساكن	"	,
"	constantly	"	,	"	باستمرار	"	,
"	construction	"	,	"	اعمال بناء	"	,
"	contact	"	,	"	اتصل	"	,
"	contain	"	,	"	يحتوي	"	,
"	contemporary	"	,	"	معاصر	"	,
"	contents	"	,	"	محتويات	"	,
"	context	"	,	"	سياق الكلام	"	,
"	continue	"	,	"	استمر	"	,
"	continuously	"	,	"	بشكل متواصل	"	,
"	contraction	"	,	"	تقلص	"	,
"	contribute	"	,	"	يساهم	"	,
"	contributing	"	,	"	مساهمة	"	,
"	control	"	,	"	تحكم	"	,
"	conversation	"	,	"	محادثة	"	,
"	conversational	"	,	"	تخاطبي	"	,
"	conversations	"	,	"	محادثات	"	,
"	cook	"	,	"	يطبخ	"	,
"	cooked	"	,	"	المطبوخة	"	,
"	cooking	"	,	"	طبخ	"	,
"	cool	"	,	"	بارد	"	,
"	coordinator	"	,	"	منسق	"	,
"	copyright	"	,	"	حقوق النشر	"	,
"	corner	"	,	"	ركن	"	,
"	correct	"	,	"	صحيح	"	,
"	correctly	"	,	"	بشكل صحيح	"	,
"	cost	"	,	"	كلفة	"	,
"	costs	"	,	"	تكاليف	"	,
"	could	"	,	"	يمكن أن	"	,
"	couldn’t	"	,	"	لم أستطع	"	,
"	council	"	,	"	مجلس	"	,
"	counters	"	,	"	عدادات	"	,
"	countries	"	,	"	الدول	"	,
"	country	"	,	"	بلد	"	,
"	countryside	"	,	"	اطراف المدينة	"	,
"	couple	"	,	"	زوج	"	,
"	course	"	,	"	طريقة او دورة	"	,
"	cousin	"	,	"	ولد عم	"	,
"	cousins	"	,	"	بنات العم	"	,
"	cover	"	,	"	غطاء	"	,
"	cow	"	,	"	بقرة	"	,
"	coworkers	"	,	"	زملاء عمل	"	,
"	cows	"	,	"	أبقار	"	,
"	crash	"	,	"	يصطدم	"	,
"	crashes	"	,	"	اصطدامات	"	,
"	crazy	"	,	"	مجنون	"	,
"	cream	"	,	"	كريم	"	,
"	create	"	,	"	يخلق	"	,
"	created	"	,	"	ابدع	"	,
"	creation	"	,	"	خلق	"	,
"	creative	"	,	"	خلاق	"	,
"	credit	"	,	"	الإئتمان	"	,
"	credits	"	,	"	قروض	"	,
"	crisis	"	,	"	أزمة	"	,
"	critical	"	,	"	حرج	"	,
"	crosscultural	"	,	"	بين الثقافات	"	,
"	crosses	"	,	"	صلبان	"	,
"	crossing	"	,	"	عبور	"	,
"	crowd	"	,	"	يحشد	"	,
"	crowded	"	,	"	مزدحم	"	,
"	crystal	"	,	"	كريستال	"	,
"	cultural	"	,	"	ثقافي	"	,
"	culture	"	,	"	حضارة	"	,
"	cultures	"	,	"	ثقافات	"	,
"	cup	"	,	"	كوب	"	,
"	cups	"	,	"	أكواب	"	,
"	cure	"	,	"	دواء	"	,
"	curious	"	,	"	فضولي	"	,
"	custodian	"	,	"	وصي	"	,
"	custom	"	,	"	عادة	"	,
"	customary	"	,	"	معتاد	"	,
"	customers	"	,	"	عملاء	"	,
"	customs	"	,	"	جمارك	"	,
"	cut	"	,	"	يقطع	"	,
"	cute	"	,	"	جذاب	"	,
"	cutting	"	,	"	قطع	"	,



];

var WordQ = Words[NumA-1];
var WordA = Words[NumA];

var WordQ1 = Words[NumA1-1];
var WordA1 = Words[NumA1];

var WordQ2 = Words[NumA2-1];
var WordA2 = Words[NumA2];

var WordQ3 = Words[NumA3-1];
var WordA3 = Words[NumA3];

var WordQ4 = Words[NumA4-1];
var WordA4 = Words[NumA4];


player.SetVar("NumA",NumA);
player.SetVar("NumA1",NumA1);
player.SetVar("NumA2",NumA2);
player.SetVar("NumA3",NumA3);
player.SetVar("NumA4",NumA4);

player.SetVar("WordQ",WordQ);
player.SetVar("WordQ1",WordQ1);
player.SetVar("WordQ2",WordQ2);
player.SetVar("WordQ3",WordQ3);
player.SetVar("WordQ4",WordQ4);


player.SetVar("WordA",WordA);
player.SetVar("WordA1",WordA1);
player.SetVar("WordA2",WordA2);
player.SetVar("WordA3",WordA3);
player.SetVar("WordA4",WordA4);

}

function Script50()
{
  // Odd = Engligh question, next Even = Arabic answer;
// random is even for arabic answer;

var player = GetPlayer();

var Words = 264; 

var NumA= Math.floor(Math.random()*Words+1)*2;
var NumA1= Math.floor(Math.random()*Words+1)*2;
var NumA2= Math.floor(Math.random()*Words+1)*2;
var NumA3= Math.floor(Math.random()*Words+1)*2;
var NumA4= Math.floor(Math.random()*Words+1)*2;




if ( (NumA1 == NumA)  || (NumA1 ==  NumA2) || (NumA1 ==  NumA3) || (NumA1 ==  NumA4) ) {
  var NumA1= 0
}

if ( (NumA2 == NumA)  || (NumA2 ==  NumA1) || (NumA2 ==  NumA3) || (NumA2 ==  NumA4) ) {
  var NumA2=  0
}

if ( (NumA3 == NumA)  || (NumA3 ==  NumA1) || (NumA3 ==  NumA2) || (NumA3 ==  NumA4) ) {
  var NumA3= 0
}


if ( (NumA4 == NumA)  || (NumA4 ==  NumA1) || (NumA4 ==  NumA2) || (NumA4 ==  NumA3) ) {
  var NumA4= 0
}


var Words= [
"Free Answer for You",


"	cab	"	,	"	سيارة أجرة	"	,
"	cable	"	,	"	كابل	"	,
"	cables	"	,	"	كابلات	"	,
"	cafeteria	"	,	"	كافيتيريا	"	,
"	cake	"	,	"	كيك	"	,
"	California	"	,	"	كاليفورنيا	"	,
"	call	"	,	"	يتصل	"	,
"	called	"	,	"	مسمى	"	,
"	calm	"	,	"	هادئ	"	,
"	came	"	,	"	أتى	"	,
"	camera	"	,	"	الة تصوير	"	,
"	cameras	"	,	"	كاميرات	"	,
"	camping	"	,	"	تخييم	"	,
"	campus	"	,	"	حرم الجامعي	"	,
"	can	"	,	"	علبة	"	,
"	Canada	"	,	"	كندا	"	,
"	cancel	"	,	"	إلغاء	"	,
"	cancer	"	,	"	سرطان	"	,
"	candy	"	,	"	حلويات	"	,
"	cannot	"	,	"	لا تستطيع	"	,
"	capitals	"	,	"	عواصم	"	,
"	car	"	,	"	سيارات	"	,
"	card	"	,	"	بطاقة	"	,
"	cards	"	,	"	بطاقات	"	,
"	care	"	,	"	رعاية	"	,
"	career	"	,	"	حياة مهنية	"	,
"	careful	"	,	"	حذر	"	,
"	carefully	"	,	"	بحرص	"	,
"	carpenter	"	,	"	نجار	"	,
"	carpets	"	,	"	سجاد	"	,
"	carriage	"	,	"	عربة قطار	"	,
"	carrots	"	,	"	جزر	"	,
"	carry	"	,	"	احمل	"	,
"	carrying	"	,	"	حمل	"	,
"	cars	"	,	"	سيارات	"	,
"	cartoonists	"	,	"	رسامي الكاريكاتير	"	,
"	cases	"	,	"	حالات	"	,
"	catch	"	,	"	قبض على	"	,
"	catching	"	,	"	اصطياد	"	,
"	caught	"	,	"	قبض على	"	,
"	cause	"	,	"	سبب	"	,
"	caused	"	,	"	يتسبب	"	,
"	causes	"	,	"	أسباب	"	,
"	causing	"	,	"	مما تسبب في	"	,
"	cease	"	,	"	انقطع	"	,
"	celebrate	"	,	"	احتفل	"	,
"	celebrities	"	,	"	مشاهير	"	,
"	cell	"	,	"	خلية	"	,
"	Celsius	"	,	"	درجة مئوية	"	,
"	center	"	,	"	مركز	"	,
"	certain	"	,	"	تأكيد	"	,
"	certainly	"	,	"	بالتأكيد	"	,
"	chain	"	,	"	سلسلة	"	,
"	chair	"	,	"	كرسي	"	,
"	chairs	"	,	"	كراسي جلوس	"	,
"	challenge	"	,	"	تحدي	"	,
"	champion	"	,	"	بطل	"	,
"	chance	"	,	"	فرصة	"	,
"	change	"	,	"	يتغيرون	"	,
"	changed	"	,	"	تغير	"	,
"	changes	"	,	"	تغييرات	"	,
"	channel	"	,	"	قناة	"	,
"	chants	"	,	"	أناشيد	"	,
"	character	"	,	"	حرف	"	,
"	characterize	"	,	"	يتميز	"	,
"	charity	"	,	"	اعمال الخيرية	"	,
"	Charles	"	,	"	تشارلز	"	,
"	charts	"	,	"	رسوم البيانية	"	,
"	cheap	"	,	"	رخيص	"	,
"	cheat	"	,	"	يغش	"	,
"	check	"	,	"	التحقق من	"	,
"	checklist	"	,	"	قائمة تدقيق	"	,
"	checkout	"	,	"	دفع	"	,
"	cheeks	"	,	"	الخدين	"	,
"	chef	"	,	"	طاه	"	,
"	chemicals	"	,	"	مواد كيميائية	"	,
"	chew	"	,	"	مضغ	"	,
"	Chicago	"	,	"	شيكاغو	"	,
"	chicken	"	,	"	دجاج	"	,
"	child	"	,	"	طفل	"	,
"	children	"	,	"	أطفال	"	,
"	China	"	,	"	الصين	"	,
"	Chinese	"	,	"	صينى	"	,
"	choice	"	,	"	خيار	"	,
"	choices	"	,	"	اختيارات	"	,
"	choose	"	,	"	يختار	"	,
"	choosing	"	,	"	اختيار	"	,
"	chosen	"	,	"	مختار	"	,
"	cigarette	"	,	"	سيجارة	"	,
"	circle	"	,	"	دائرة	"	,
"	circles	"	,	"	دوائر	"	,
"	cities	"	,	"	مدن	"	,
"	citizens	"	,	"	مواطنين	"	,
"	city	"	,	"	مدينة	"	,
"	claims	"	,	"	مزاعم	"	,
"	class	"	,	"	صف دراسي	"	,
"	classes	"	,	"	طبقات	"	,
"	classic	"	,	"	كلاسيكي	"	,
"	classify	"	,	"	يصنف	"	,
"	classmate	"	,	"	زميل الصف	"	,
"	classmates	"	,	"	زملاء الصف	"	,
"	clauses	"	,	"	شروط	"	,
"	clean	"	,	"	ينظف	"	,
"	cleaner	"	,	"	منظف	"	,
"	cleaning	"	,	"	تنظيف	"	,
"	clear	"	,	"	صافي	"	,
"	clearly	"	,	"	بوضوح	"	,
"	clever	"	,	"	ماهر	"	,
"	climate	"	,	"	مناخ	"	,
"	climb	"	,	"	تسلق	"	,
"	clinic	"	,	"	عيادة	"	,
"	close	"	,	"	قريب	"	,
"	closely	"	,	"	بعناية	"	,
"	closeness	"	,	"	قرب	"	,
"	closest	"	,	"	الأقرب	"	,
"	closet	"	,	"	خزانة	"	,
"	closing	"	,	"	إغلاق	"	,
"	clothes	"	,	"	ملابس	"	,
"	cloud	"	,	"	غيم	"	,
"	club	"	,	"	النادي	"	,
"	clusters	"	,	"	عناقيد المجموعات	"	,
"	coach	"	,	"	مدرب رياضي	"	,
"	co exist	"	,	"	تعايش	"	,
"	coffee	"	,	"	قهوة	"	,
"	cognitive	"	,	"	إدراكي	"	,
"	coincidence	"	,	"	صدفة	"	,
"	cold	"	,	"	برد	"	,
"	colder	"	,	"	ابرد	"	,
"	colleagues	"	,	"	زملاء	"	,
"	college	"	,	"	كلية	"	,
"	color	"	,	"	لون	"	,
"	colorful	"	,	"	زاهى الألوان	"	,
"	combine	"	,	"	يجمع	"	,
"	combined	"	,	"	مجموع	"	,
"	come	"	,	"	تأتي	"	,
"	comfortable	"	,	"	مريح	"	,
"	coming	"	,	"	آت	"	,
"	commands	"	,	"	أوامر	"	,
"	comments	"	,	"	تعليقات	"	,
"	common	"	,	"	مشترك	"	,
"	communicate	"	,	"	يتواصل	"	,
"	communication	"	,	"	اتصالات	"	,
"	community	"	,	"	مجموعة متضامنة	"	,
"	company	"	,	"	شركة	"	,
"	compare	"	,	"	يقارن	"	,
"	comparing	"	,	"	مقارنة	"	,
"	compartment	"	,	"	حجرة	"	,
"	compete	"	,	"	يتنافس	"	,
"	competitions	"	,	"	مسابقات	"	,
"	complain	"	,	"	يتذمر	"	,
"	complaint	"	,	"	شكوى	"	,
"	complaints	"	,	"	شكاوي	"	,
"	complete	"	,	"	اكتمال	"	,
"	completed	"	,	"	منجز	"	,
"	completely	"	,	"	بالكامل	"	,
"	compliment	"	,	"	إطراء	"	,
"	complimenting	"	,	"	المدح	"	,
"	comprehension	"	,	"	فهم	"	,
"	computer	"	,	"	الحاسوب	"	,
"	concentration	"	,	"	تركيز	"	,
"	concept	"	,	"	مفهوم	"	,
"	concepts	"	,	"	مفاهيم	"	,
"	concern	"	,	"	اهتمام	"	,
"	conclusion	"	,	"	استنتاج	"	,
"	condition	"	,	"	حالة	"	,
"	conditional	"	,	"	مشروط	"	,
"	cone	"	,	"	مخروط	"	,
"	conference	"	,	"	مؤتمر	"	,
"	confident	"	,	"	موثوق	"	,
"	confidently	"	,	"	بثقة	"	,
"	confirm	"	,	"	يتأكد	"	,
"	confirmation	"	,	"	تأكيد	"	,
"	confuse	"	,	"	يشوش	"	,
"	confused	"	,	"	مشوش	"	,
"	confusing	"	,	"	مربك	"	,
"	confusion	"	,	"	التباس	"	,
"	connected	"	,	"	متصل	"	,
"	connections	"	,	"	روابط	"	,
"	conquer	"	,	"	يسيطر	"	,
"	consent	"	,	"	موافقة	"	,
"	consequence	"	,	"	عاقبة	"	,
"	consequences	"	,	"	آثار	"	,
"	consequently	"	,	"	بناء على ذلك	"	,
"	conservationist	"	,	"	حفاظ على البيئة	"	,
"	conservationists	"	,	"	محفاظ على البيئة	"	,
"	consider	"	,	"	ينصح	"	,
"	considered	"	,	"	معتبر	"	,
"	consistent	"	,	"	ثابت	"	,
"	consonant	"	,	"	حرف ساكن	"	,
"	constantly	"	,	"	باستمرار	"	,
"	construction	"	,	"	اعمال بناء	"	,
"	contact	"	,	"	اتصل	"	,
"	contain	"	,	"	يحتوي	"	,
"	contemporary	"	,	"	معاصر	"	,
"	contents	"	,	"	محتويات	"	,
"	context	"	,	"	سياق الكلام	"	,
"	continue	"	,	"	استمر	"	,
"	continuously	"	,	"	بشكل متواصل	"	,
"	contraction	"	,	"	تقلص	"	,
"	contribute	"	,	"	يساهم	"	,
"	contributing	"	,	"	مساهمة	"	,
"	control	"	,	"	تحكم	"	,
"	conversation	"	,	"	محادثة	"	,
"	conversational	"	,	"	تخاطبي	"	,
"	conversations	"	,	"	محادثات	"	,
"	cook	"	,	"	يطبخ	"	,
"	cooked	"	,	"	المطبوخة	"	,
"	cooking	"	,	"	طبخ	"	,
"	cool	"	,	"	بارد	"	,
"	coordinator	"	,	"	منسق	"	,
"	copyright	"	,	"	حقوق النشر	"	,
"	corner	"	,	"	ركن	"	,
"	correct	"	,	"	صحيح	"	,
"	correctly	"	,	"	بشكل صحيح	"	,
"	cost	"	,	"	كلفة	"	,
"	costs	"	,	"	تكاليف	"	,
"	could	"	,	"	يمكن أن	"	,
"	couldn’t	"	,	"	لم أستطع	"	,
"	council	"	,	"	مجلس	"	,
"	counters	"	,	"	عدادات	"	,
"	countries	"	,	"	الدول	"	,
"	country	"	,	"	بلد	"	,
"	countryside	"	,	"	اطراف المدينة	"	,
"	couple	"	,	"	زوج	"	,
"	course	"	,	"	طريقة او دورة	"	,
"	cousin	"	,	"	ولد عم	"	,
"	cousins	"	,	"	بنات العم	"	,
"	cover	"	,	"	غطاء	"	,
"	cow	"	,	"	بقرة	"	,
"	coworkers	"	,	"	زملاء عمل	"	,
"	cows	"	,	"	أبقار	"	,
"	crash	"	,	"	يصطدم	"	,
"	crashes	"	,	"	اصطدامات	"	,
"	crazy	"	,	"	مجنون	"	,
"	cream	"	,	"	كريم	"	,
"	create	"	,	"	يخلق	"	,
"	created	"	,	"	ابدع	"	,
"	creation	"	,	"	خلق	"	,
"	creative	"	,	"	خلاق	"	,
"	credit	"	,	"	الإئتمان	"	,
"	credits	"	,	"	قروض	"	,
"	crisis	"	,	"	أزمة	"	,
"	critical	"	,	"	حرج	"	,
"	crosscultural	"	,	"	بين الثقافات	"	,
"	crosses	"	,	"	صلبان	"	,
"	crossing	"	,	"	عبور	"	,
"	crowd	"	,	"	يحشد	"	,
"	crowded	"	,	"	مزدحم	"	,
"	crystal	"	,	"	كريستال	"	,
"	cultural	"	,	"	ثقافي	"	,
"	culture	"	,	"	حضارة	"	,
"	cultures	"	,	"	ثقافات	"	,
"	cup	"	,	"	كوب	"	,
"	cups	"	,	"	أكواب	"	,
"	cure	"	,	"	دواء	"	,
"	curious	"	,	"	فضولي	"	,
"	custodian	"	,	"	وصي	"	,
"	custom	"	,	"	عادة	"	,
"	customary	"	,	"	معتاد	"	,
"	customers	"	,	"	عملاء	"	,
"	customs	"	,	"	جمارك	"	,
"	cut	"	,	"	يقطع	"	,
"	cute	"	,	"	جذاب	"	,
"	cutting	"	,	"	قطع	"	,



];

var WordQ = Words[NumA-1];
var WordA = Words[NumA];

var WordQ1 = Words[NumA1-1];
var WordA1 = Words[NumA1];

var WordQ2 = Words[NumA2-1];
var WordA2 = Words[NumA2];

var WordQ3 = Words[NumA3-1];
var WordA3 = Words[NumA3];

var WordQ4 = Words[NumA4-1];
var WordA4 = Words[NumA4];


player.SetVar("NumA",NumA);
player.SetVar("NumA1",NumA1);
player.SetVar("NumA2",NumA2);
player.SetVar("NumA3",NumA3);
player.SetVar("NumA4",NumA4);

player.SetVar("WordQ",WordQ);
player.SetVar("WordQ1",WordQ1);
player.SetVar("WordQ2",WordQ2);
player.SetVar("WordQ3",WordQ3);
player.SetVar("WordQ4",WordQ4);


player.SetVar("WordA",WordA);
player.SetVar("WordA1",WordA1);
player.SetVar("WordA2",WordA2);
player.SetVar("WordA3",WordA3);
player.SetVar("WordA4",WordA4);

}

