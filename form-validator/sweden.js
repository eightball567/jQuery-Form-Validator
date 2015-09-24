/**
 *  jquery-form-validator %>
 *
 *  @website by 
 *  @license MIT
 *  @version 2.2.70
 */
!function(a,b){a.formUtils.addValidator({name:"swesec",validatorFunction:function(c,d){var e,f,g,h;if(d.valAttr("use-hyphen")){if(h=c.split("-"),2!=h.length)return!1;c=h.join("")}if(!c.match(/^(\d{4})(\d{2})(\d{2})(\d{4})$/))return!1;e=RegExp.$1,f=a.formUtils.parseDateInt(RegExp.$2),g=a.formUtils.parseDateInt(RegExp.$3),b.ssnGender=parseInt(RegExp.$4.substring(2,3))%2===0?"female":"male";var i=new Array(31,28,31,30,31,30,31,31,30,31,30,31);if((e%400===0||e%4===0&&e%100!==0)&&(i[1]=29),1>f||f>12||1>g||g>i[f-1])return!1;c=c.substring(2,c.length);for(var j="",k=0;k<c.length;k++)j+=((k+1)%2+1)*c.substring(k,k+1);var l=0;for(k=0;k<j.length;k++)l+=parseInt(j.substring(k,k+1),10);return l%10===0},errorMessage:"",errorMessageKey:"badSecurityNumber"}),a.formUtils.addValidator({name:"swecounty",validatorFunction:function(b){return b=b.toLowerCase(),-1==a.inArray(b,this.counties)?"län"!=b.substr(-3).toLocaleLowerCase()?a.inArray(b+"s län",this.counties)>-1:!1:!0},errorMessage:"",errorMessageKey:"badCustomVal",counties:["stockholms län","uppsala län","södermanlands län","östergötlands län","jönköpings län","kronobergs län","kalmar län","gotlands län","blekinge län","skåne län","hallands län","västra götalands län","värmlands län","örebro län","västmanlands län","dalarnas län","gävleborgs län","västernorrlands län","jämtlands län","västerbottens län","norrbottens län"]}),a.formUtils.addValidator({name:"swemunicipality",validatorFunction:function(b){return b=b.toLowerCase(),-1==a.inArray(b,this.municipalities)?"s kommun"==b.substr(-8)&&a.inArray(b.substr(0,b.length-8),this.municipalities)>-1?!0:" kommun"==b.substr(-7)?a.inArray(b.substr(0,b.length-7),this.municipalities)>-1:!1:!0},errorMessage:"",errorMessageKey:"badCustomVal",municipalities:["ale","alingsås","alvesta","aneby","arboga","arjeplog","arvidsjaur","arvika","askersund","avesta","bengtsfors","berg","bjurholm","bjuv","boden","bollebygd","bollnäs","borgholm","borlänge","borås","botkyrka","boxholm","bromölla","bräcke","burlöv","båstad","dals-ed","danderyd","degerfors","dorotea","eda","ekerö","eksjö","emmaboda","enköpings","eskilstuna","eslövs","essunga","fagersta","falkenberg","falköping","falu","filipstad","finspång","flen","forshaga","färgelanda","gagnef","gislaved","gnesta","gnosjö","gotland","grum","grästorp","gullspång","gällivare","gävle","göteborg","götene","habo","hagfor","hallsberg","hallstahammar","halmstad","hammarö","haninge","haparanda","heby","hedemora","helsingborg","herrljunga","hjo","hofor","huddinge","hudiksvall","hultsfred","hylte","håbo","hällefor","härjedalen","härnösand","härryda","hässleholm","höganäs","högsby","hörby","höör","jokkmokk","järfälla","jönköping","kalix","kalmar","karlsborg","karlshamn","karlskoga","karlskrona","karlstad","katrineholm","kil","kinda","kiruna","klippan","knivsta","kramfors","kristianstad","kristinehamn","krokoms","kumla","kungsbacka","kungsör","kungälv","kävlinge","köping","laholm","landskrona","laxå","lekeberg","leksand","lerum","lessebo","lidingö","lidköping","lilla edets","lindesbergs","linköpings","ljungby","ljusdals","ljusnarsbergs","lomma","ludvika","luleå","lunds","lycksele","lysekil","malmö","malung-sälen","malå","mariestad","marks","markaryd","mellerud","mjölby","mora","motala","mullsjö","munkedal","munkfors","mölndal","mönsterås","mörbylånga","nacka","nora","norberg","nordanstig","nordmaling","norrköping","norrtälje","norsjö","nybro","nykvarn","nyköping","nynäshamn","nässjö","ockelbo","olofström","orsa","orust","osby","oskarshamn","ovanåker","oxelösund","pajala","partille","perstorp","piteå","ragunda","robertsfors","ronneby","rättvik","sala","salem","sandviken","sigtuna","simrishamn","sjöbo","skara","skellefteå","skinnskatteberg","skurup","skövde","smedjebacken","sollefteå","sollentuna","solna","sorsele","sotenäs","staffanstorp","stenungsund","stockholm","storfors","storuman","strängnäs","strömstad","strömsund","sundbyberg","sundsvall","sunne","surahammar","svalöv","svedala","svenljunga","säffle","säter","sävsjö","söderhamns","söderköping","södertälje","sölvesborg","tanum","tibro","tidaholm","tierp","timrå","tingsryd","tjörn","tomelilla","torsby","torså","tranemo","tranå","trelleborg","trollhättan","trosa","tyresö","täby","töreboda","uddevalla","ulricehamns","umeå","upplands väsby","upplands-bro","uppsala","uppvidinge","vadstena","vaggeryd","valdemarsvik","vallentuna","vansbro","vara","varberg","vaxholm","vellinge","vetlanda","vilhelmina","vimmerby","vindeln","vingåker","vårgårda","vänersborg","vännäs","värmdö","värnamo","västervik","västerås","växjö","ydre","ystad","åmål","ånge","åre","årjäng","åsele","åstorp","åtvidaberg","älmhult","älvdalen","älvkarleby","älvsbyn","ängelholm","öckerö","ödeshög","örebro","örkelljunga","örnsköldsvik","östersund","österåker","östhammar","östra göinge","överkalix","övertorneå"]}),a.formUtils.addValidator({name:"swephone",validatorFunction:function(a){var b=a.match(/\+/g),c=a.match(/-/g);return null!==b&&b.length>1||null!==c&&c.length>1?!1:null!==b&&0!==a.indexOf("+")?!1:(a=a.replace(/([-|\+])/g,""),a.length>8&&null===a.match(/[^0-9]/g))},errorMessage:"",errorMessageKey:"badTelephone"}),a.formUtils.addValidator({name:"swemobile",validatorFunction:function(b){if(!a.formUtils.validators.validate_swephone.validatorFunction(b))return!1;b=b.replace(/[^0-9]/g,"");var c=b.substring(0,3);return 10!=b.length&&"467"!==c?!1:11!=b.length&&"467"===c?!1:/07[0-9{1}]/.test(c)||"467"===c},errorMessage:"",errorMessageKey:"badTelephone"});var c=function(b){var c=[];return a.each(b,function(a,b){c.push(b.substr(0,1).toUpperCase()+b.substr(1,b.length))}),c.sort(),c};a.fn.suggestSwedishCounty=function(b){var d=c(a.formUtils.validators.validate_swecounty.counties);return a.formUtils.suggest(this,d,b)},a.fn.suggestSwedishMunicipality=function(b){var d=c(a.formUtils.validators.validate_swemunicipality.municipalities);return a.formUtils.suggest(this,d,b)}}(jQuery,window);