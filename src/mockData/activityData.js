const activitiesData =
[
  {
    "id":1,
    "name": "Napolyon",
    "startdate": "30-11-2023",
    "enddate": "30-11-2023",
    "starttime": "14:30",
    "endtime": "16:30",
    "description":"Napolyon filmi, Fransız İhtilâli sonrası çalkantılı günler yaşayan Fransa'da Napolyon'un sıradan bir askerden, Fransa İmparatoru'na kadar yükselişinin hikayesini konu ediyor. Film aynı zamanda Bonaparte'ın eşi Josephine ile yaşadığı evliliği de gözler önüne seriyor. Bonapart, tek gerçek aşkı Josephine ile olan bağımlılık yaratan, değişken ilişkisinin prizmasından geçerek iktidara gelmek için amansız bir yolculuğa çıkar. ",
    "PlaceId": 5,
    "CategoryId": 1
  },  
  {
    "id":2,
    "name": "The Marvels",
    "startdate": "02-12.2023",
    "enddate": "02-12-2023",
    "starttime": "14:30",
    "endtime": "16:27",
    "description": "The Marvels filmi, Carol Danvers, Kamala Khan ve Monica Rambeau'nun güçlerini birleştirerek evreni kurtarmak için birlikte çalışmasını konu alıyor. Filminin oyuncu kadrosunda Brie Larson, Iman Vellani, Teyonah Parris, Zawe Ashton, Samuel L. Jackson, Ben Mendelsohn ve Lashana Lynch yer alıyor.",
    "PlaceId": 4,
    "CategoryId": 1
  },  
  {
    "id":3,
    "name": "Amadeus",
    "startdate": "17-12-2023",
    "enddate": "17-12-2023",
    "starttime": "19:30",
    "endtime": "22:30",
    "description": "Peter Shaffer tarafından kaleme alınan, dünya müzik tarihinin unutulmaz bestecileri Wolfgang Amadeus Mozart ile Antonio Salieri’nin eşsiz hikayesi AMADEUS 5. Sezonu ile sahnede!",
    "PlaceId": 7,
    "CategoryId": 2
  },  
  {
    "id":4,
    "name": "Emre Aydın",
    "startdate": "09-12-2023",
    "enddate": "09-12-2023",
    "starttime": "20.00",
    "endtime": "22.30",
    "description": "Emre Aydın kariyerine barlarda canlı müzik yaparak başlamıştır. Barlarda şarkı söyleyerek tanınmaya başlayan Emre Aydın 2002 yılında, Onur Ela ile beraber 6.Cadde isimli kurdukları müzik grubu ile Türkiye çapında düzenlenen 'Sing Your Song' beste yarışmasında 'Dönersen' adlı parçası ile birinci olmuştur. 2006 yılında çıkardığı  Afili Yalnızlık adlı ilk solo albümünü yayınlayan Aydın, Yalnızlık temasını işlediği albüm performansı ile büyük beğeni toplamıştır.",
    "PlaceId": 8,
    "CategoryId": 3
  },  
  {
    "id":5,
    "name": "Vakıfbank - Allianz Vero Volley MILANO (ITA)",
    "startdate": "29-11-2023",
    "enddate": "29-11-2023",
    "starttime": "19:30",
    "endtime": "null",
    "description": "Vakıfbank - Allianz Vero Volley MILANO (ITA) Voleybol Maçı Bileti. Spor müsabakalarında 6 yaş üzeri bilete tabiidir.",
    "PlaceId": 6,
    "CategoryId": 4
  },  
  {
    "id":6,
    "name": "Arkas Spor - Neftohimik BURGAS (BUL)",
    "startdate": "30-11-2023",
    "enddate": "30-11-2023",
    "starttime": "19:00",
    "endtime": "null",
    "description": "Arkas Spor - Neftohimik BURGAS (BUL) Voleybol Maçı Bileti. Spor müsabakalarında 6 yaş üzeri bilete tabiidir.",
    "PlaceId": 9,
    "CategoryId": 4
  },  
  {
    "id":7,
    "name": "Can Kazaz",
    "startdate": "07-12-2023",
    "enddate": "07-12-2023",
    "starttime": "20.00",
    "endtime": "23.00",
    "description": "“Kırlangıçlar Gibi”, “Kendi Halimde”, “Bunca Yıl” ve “Sürsün Bahar” gibi samimi şarkılarıyla geniş kitlelerin huzur kaynağı olan Can Kazaz, 2022'nin son ayında çıkardığı ve Toprak albümüyle dinleyenlerini yine o tanıdığımız masalsı atmosferiyle sarmaladı. Dokuz albüm sığdırdığı 10 yıllık şarkıcı-şarkı yazarlığı yolculuğunu, dinleyenleriyle birlikte kutlamak için en sevilen ve en yeni şarkılarını yeniden sahnesine taşıyor.",
    "PlaceId": 10,
    "CategoryId": 3
  },  
  {
    "id":8,
    "name": "Boğaziçi Komedi Kulübü:Kadıköy Standup Gecesi",
    "startdate": "29-12-2023",
    "enddate": "29-12-2023",
    "starttime": "20.00",
    "endtime": "22.00",
    "description": "Boğaziçi Komedi Kulübü, yeni nesil komedyenlerle deneyimli komedyenlerin bir sahnede buluştuğu standup gecelerine devam ediyor! Her gösteride 5 farklı komedyenin sahne aldığı standup geceleri her Çarşamba Muaf Kadıköy sahnesinde!",
    "PlaceId": 11,
    "CategoryId": 6
  },  
  {
    "id": 9,
    "name": "Hayat",
    "startdate": "06-12-2023",
    "enddate": "06-12-2023",
    "starttime": "19.30",
    "endtime": "22.00",
    "description": "Genç bir kadın olan Hicran, babasının zoruyla nişanlanmak zorunda kalınca çareyi kaçmakta bulunur. Hicran'ın zaten onunla evlenmeyi istemediğini düşünen Rıza, başlarda bu durumu önemsemez. Ancak zaman geçtikçe Hicran tarafından istenmemek zoruna gitmeye başlar ve onunla yüzleşmeye karar verir. Rıza, sadece bir kere gördüğü nişanlısını bulmak için İstanbul'a gider.",
    "PlaceId": 3,
    "CategoryId": 1
  }
  
]

export default activitiesData;
