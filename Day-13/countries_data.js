const countries = [
  {
    name: 'Guatemala',
    capital: 'Guatemala City',
    languages: ['Spanish'],
    population: 16176133,
    flag: 'https://restcountries.eu/data/gtm.svg',
    currency: 'Guatemalan quetzal'
  },
  {
    name: 'Guernsey',
    capital: 'St. Peter Port',
    languages: ['English', 'French'],
    population: 62999,
    flag: 'https://restcountries.eu/data/ggy.svg',
    currency: 'British pound'
  },
  {
    name: 'Guinea',
    capital: 'Conakry',
    languages: ['French', 'Fula'],
    population: 12947000,
    flag: 'https://restcountries.eu/data/gin.svg',
    currency: 'Guinean franc'
  },
  {
    name: 'Guinea-Bissau',
    capital: 'Bissau',
    languages: ['Portuguese'],
    population: 1547777,
    flag: 'https://restcountries.eu/data/gnb.svg',
    currency: 'West African CFA franc'
  },
  {
    name: 'Guyana',
    capital: 'Georgetown',
    languages: ['English'],
    population: 746900,
    flag: 'https://restcountries.eu/data/guy.svg',
    currency: 'Guyanese dollar'
  },
  {
    name: 'Haiti',
    capital: 'Port-au-Prince',
    languages: ['French', 'Haitian'],
    population: 11078033,
    flag: 'https://restcountries.eu/data/hti.svg',
    currency: 'Haitian gourde'
  },
  {
    name: 'Heard Island and McDonald Islands',
    capital: '',
    languages: ['English'],
    population: 0,
    flag: 'https://restcountries.eu/data/hmd.svg',
    currency: 'Australian dollar'
  },
  {
    name: 'Holy See',
    capital: 'Rome',
    languages: ['Latin', 'Italian', 'French', 'German'],
    population: 451,
    flag: 'https://restcountries.eu/data/vat.svg',
    currency: 'Euro'
  },
  {
    name: 'Honduras',
    capital: 'Tegucigalpa',
    languages: ['Spanish'],
    population: 8576532,
    flag: 'https://restcountries.eu/data/hnd.svg',
    currency: 'Honduran lempira'
  },
  {
    name: 'Hong Kong',
    capital: 'City of Victoria',
    languages: ['English', 'Chinese'],
    population: 7324300,
    flag: 'https://restcountries.eu/data/hkg.svg',
    currency: 'Hong Kong dollar'
  },
  {
    name: 'Hungary',
    capital: 'Budapest',
    languages: ['Hungarian'],
    population: 9823000,
    flag: 'https://restcountries.eu/data/hun.svg',
    currency: 'Hungarian forint'
  },
  {
    name: 'Iceland',
    capital: 'Reykjavík',
    languages: ['Icelandic'],
    population: 334300,
    flag: 'https://restcountries.eu/data/isl.svg',
    currency: 'Icelandic króna'
  },
  {
    name: 'India',
    capital: 'New Delhi',
    languages: ['Hindi', 'English'],
    population: 1295210000,
    flag: 'https://restcountries.eu/data/ind.svg',
    currency: 'Indian rupee'
  },
  {
    name: 'Indonesia',
    capital: 'Jakarta',
    languages: ['Indonesian'],
    population: 258705000,
    flag: 'https://restcountries.eu/data/idn.svg',
    currency: 'Indonesian rupiah'
  },
  {
    name: "Côte d'Ivoire",
    capital: 'Yamoussoukro',
    languages: ['French'],
    population: 22671331,
    flag: 'https://restcountries.eu/data/civ.svg',
    currency: 'West African CFA franc'
  },
  {
    name: 'Iran (Islamic Republic of)',
    capital: 'Tehran',
    languages: ['Persian (Farsi)'],
    population: 79369900,
    flag: 'https://restcountries.eu/data/irn.svg',
    currency: 'Iranian rial'
  },
  {
    name: 'Iraq',
    capital: 'Baghdad',
    languages: ['Arabic', 'Kurdish'],
    population: 37883543,
    flag: 'https://restcountries.eu/data/irq.svg',
    currency: 'Iraqi dinar'
  },
  {
    name: 'Ireland',
    capital: 'Dublin',
    languages: ['Irish', 'English'],
    population: 6378000,
    flag: 'https://restcountries.eu/data/irl.svg',
    currency: 'Euro'
  },
  {
    name: 'Isle of Man',
    capital: 'Douglas',
    languages: ['English', 'Manx'],
    population: 84497,
    flag: 'https://restcountries.eu/data/imn.svg',
    currency: 'British pound'
  },
  {
    name: 'Israel',
    capital: 'Jerusalem',
    languages: ['Hebrew (modern)', 'Arabic'],
    population: 8527400,
    flag: 'https://restcountries.eu/data/isr.svg',
    currency: 'Israeli new shekel'
  },
  {
    name: 'Italy',
    capital: 'Rome',
    languages: ['Italian'],
    population: 60665551,
    flag: 'https://restcountries.eu/data/ita.svg',
    currency: 'Euro'
  },
  {
    name: 'Jamaica',
    capital: 'Kingston',
    languages: ['English'],
    population: 2723246,
    flag: 'https://restcountries.eu/data/jam.svg',
    currency: 'Jamaican dollar'
  },
  {
    name: 'Japan',
    capital: 'Tokyo',
    languages: ['Japanese'],
    population: 126960000,
    flag: 'https://restcountries.eu/data/jpn.svg',
    currency: 'Japanese yen'
  },
  {
    name: 'Jersey',
    capital: 'Saint Helier',
    languages: ['English', 'French'],
    population: 100800,
    flag: 'https://restcountries.eu/data/jey.svg',
    currency: 'British pound'
  },
  {
    name: 'Jordan',
    capital: 'Amman',
    languages: ['Arabic'],
    population: 9531712,
    flag: 'https://restcountries.eu/data/jor.svg',
    currency: 'Jordanian dinar'
  },
  {
    name: 'Kazakhstan',
    capital: 'Astana',
    languages: ['Kazakh', 'Russian'],
    population: 17753200,
    flag: 'https://restcountries.eu/data/kaz.svg',
    currency: 'Kazakhstani tenge'
  },
  {
    name: 'Kenya',
    capital: 'Nairobi',
    languages: ['English', 'Swahili'],
    population: 47251000,
    flag: 'https://restcountries.eu/data/ken.svg',
    currency: 'Kenyan shilling'
  },
  {
    name: 'Kiribati',
    capital: 'South Tarawa',
    languages: ['English'],
    population: 113400,
    flag: 'https://restcountries.eu/data/kir.svg',
    currency: 'Australian dollar'
  },
  {
    name: 'Kuwait',
    capital: 'Kuwait City',
    languages: ['Arabic'],
    population: 4183658,
    flag: 'https://restcountries.eu/data/kwt.svg',
    currency: 'Kuwaiti dinar'
  },
  {
    name: 'Kyrgyzstan',
    capital: 'Bishkek',
    languages: ['Kyrgyz', 'Russian'],
    population: 6047800,
    flag: 'https://restcountries.eu/data/kgz.svg',
    currency: 'Kyrgyzstani som'
  },
  {
    name: "Lao People's Democratic Republic",
    capital: 'Vientiane',
    languages: ['Lao'],
    population: 6492400,
    flag: 'https://restcountries.eu/data/lao.svg',
    currency: 'Lao kip'
  },
  {
    name: 'Latvia',
    capital: 'Riga',
    languages: ['Latvian'],
    population: 1961600,
    flag: 'https://restcountries.eu/data/lva.svg',
    currency: 'Euro'
  },
  {
    name: 'Lebanon',
    capital: 'Beirut',
    languages: ['Arabic', 'French'],
    population: 5988000,
    flag: 'https://restcountries.eu/data/lbn.svg',
    currency: 'Lebanese pound'
  },
  {
    name: 'Lesotho',
    capital: 'Maseru',
    languages: ['English', 'Southern Sotho'],
    population: 1894194,
    flag: 'https://restcountries.eu/data/lso.svg',
    currency: 'Lesotho loti'
  },
  {
    name: 'Liberia',
    capital: 'Monrovia',
    languages: ['English'],
    population: 4615000,
    flag: 'https://restcountries.eu/data/lbr.svg',
    currency: 'Liberian dollar'
  },
  {
    name: 'Libya',
    capital: 'Tripoli',
    languages: ['Arabic'],
    population: 6385000,
    flag: 'https://restcountries.eu/data/lby.svg',
    currency: 'Libyan dinar'
  },
  {
    name: 'Liechtenstein',
    capital: 'Vaduz',
    languages: ['German'],
    population: 37623,
    flag: 'https://restcountries.eu/data/lie.svg',
    currency: 'Swiss franc'
  },
  {
    name: 'Lithuania',
    capital: 'Vilnius',
    languages: ['Lithuanian'],
    population: 2872294,
    flag: 'https://restcountries.eu/data/ltu.svg',
    currency: 'Euro'
  },
  {
    name: 'Luxembourg',
    capital: 'Luxembourg',
    languages: ['French', 'German', 'Luxembourgish'],
    population: 576200,
    flag: 'https://restcountries.eu/data/lux.svg',
    currency: 'Euro'
  },
  {
    name: 'Macao',
    capital: '',
    languages: ['Chinese', 'Portuguese'],
    population: 649100,
    flag: 'https://restcountries.eu/data/mac.svg',
    currency: 'Macanese pataca'
  },
  {
    name: 'Macedonia (the former Yugoslav Republic of)',
    capital: 'Skopje',
    languages: ['Macedonian'],
    population: 2058539,
    flag: 'https://restcountries.eu/data/mkd.svg',
    currency: 'Macedonian denar'
  },
  {
    name: 'Madagascar',
    capital: 'Antananarivo',
    languages: ['French', 'Malagasy'],
    population: 22434363,
    flag: 'https://restcountries.eu/data/mdg.svg',
    currency: 'Malagasy ariary'
  },
  {
    name: 'Malawi',
    capital: 'Lilongwe',
    languages: ['English', 'Chichewa'],
    population: 16832910,
    flag: 'https://restcountries.eu/data/mwi.svg',
    currency: 'Malawian kwacha'
  },
  {
    name: 'Malaysia',
    capital: 'Kuala Lumpur',
    languages: ['Malaysian'],
    population: 31405416,
    flag: 'https://restcountries.eu/data/mys.svg',
    currency: 'Malaysian ringgit'
  },
  {
    name: 'Maldives',
    capital: 'Malé',
    languages: ['Divehi'],
    population: 344023,
    flag: 'https://restcountries.eu/data/mdv.svg',
    currency: 'Maldivian rufiyaa'
  },
  {
    name: 'Mali',
    capital: 'Bamako',
    languages: ['French'],
    population: 18135000,
    flag: 'https://restcountries.eu/data/mli.svg',
    currency: 'West African CFA franc'
  },
  {
    name: 'Malta',
    capital: 'Valletta',
    languages: ['Maltese', 'English'],
    population: 425384,
    flag: 'https://restcountries.eu/data/mlt.svg',
    currency: 'Euro'
  },
  {
    name: 'Marshall Islands',
    capital: 'Majuro',
    languages: ['English', 'Marshallese'],
    population: 54880,
    flag: 'https://restcountries.eu/data/mhl.svg',
    currency: 'United States dollar'
  },
  {
    name: 'Martinique',
    capital: 'Fort-de-France',
    languages: ['French'],
    population: 378243,
    flag: 'https://restcountries.eu/data/mtq.svg',
    currency: 'Euro'
  },
  {
    name: 'Mauritania',
    capital: 'Nouakchott',
    languages: ['Arabic'],
    population: 3718678,
    flag: 'https://restcountries.eu/data/mrt.svg',
    currency: 'Mauritanian ouguiya'
  },
  {
    name: 'Mauritius',
    capital: 'Port Louis',
    languages: ['English'],
    population: 1262879,
    flag: 'https://restcountries.eu/data/mus.svg',
    currency: 'Mauritian rupee'
  },
  {
    name: 'Mayotte',
    capital: 'Mamoudzou',
    languages: ['French'],
    population: 226915,
    flag: 'https://restcountries.eu/data/myt.svg',
    currency: 'Euro'
  },
  {
    name: 'Mexico',
    capital: 'Mexico City',
    languages: ['Spanish'],
    population: 122273473,
    flag: 'https://restcountries.eu/data/mex.svg',
    currency: 'Mexican peso'
  },
  {
    name: 'Micronesia (Federated States of)',
    capital: 'Palikir',
    languages: ['English'],
    population: 102800,
    flag: 'https://restcountries.eu/data/fsm.svg',
    currency: '[D]'
  },
  {
    name: 'Moldova (Republic of)',
    capital: 'Chișinău',
    languages: ['Romanian'],
    population: 3553100,
    flag: 'https://restcountries.eu/data/mda.svg',
    currency: 'Moldovan leu'
  },
  {
    name: 'Monaco',
    capital: 'Monaco',
    languages: ['French'],
    population: 38400,
    flag: 'https://restcountries.eu/data/mco.svg',
    currency: 'Euro'
  },
  {
    name: 'Mongolia',
    capital: 'Ulan Bator',
    languages: ['Mongolian'],
    population: 3093100,
    flag: 'https://restcountries.eu/data/mng.svg',
    currency: 'Mongolian tögrög'
  },
  {
    name: 'Montenegro',
    capital: 'Podgorica',
    languages: ['Serbian', 'Bosnian', 'Albanian', 'Croatian'],
    population: 621810,
    flag: 'https://restcountries.eu/data/mne.svg',
    currency: 'Euro'
  },
  {
    name: 'Montserrat',
    capital: 'Plymouth',
    languages: ['English'],
    population: 4922,
    flag: 'https://restcountries.eu/data/msr.svg',
    currency: 'East Caribbean dollar'
  },
  {
    name: 'Morocco',
    capital: 'Rabat',
    languages: ['Arabic'],
    population: 33337529,
    flag: 'https://restcountries.eu/data/mar.svg',
    currency: 'Moroccan dirham'
  },
  {
    name: 'Mozambique',
    capital: 'Maputo',
    languages: ['Portuguese'],
    population: 26423700,
    flag: 'https://restcountries.eu/data/moz.svg',
    currency: 'Mozambican metical'
  },
  {
    name: 'Myanmar',
    capital: 'Naypyidaw',
    languages: ['Burmese'],
    population: 51419420,
    flag: 'https://restcountries.eu/data/mmr.svg',
    currency: 'Burmese kyat'
  },
  {
    name: 'Namibia',
    capital: 'Windhoek',
    languages: ['English', 'Afrikaans'],
    population: 2324388,
    flag: 'https://restcountries.eu/data/nam.svg',
    currency: 'Namibian dollar'
  },
  {
    name: 'Nauru',
    capital: 'Yaren',
    languages: ['English', 'Nauruan'],
    population: 10084,
    flag: 'https://restcountries.eu/data/nru.svg',
    currency: 'Australian dollar'
  },
  {
    name: 'Nepal',
    capital: 'Kathmandu',
    languages: ['Nepali'],
    population: 28431500,
    flag: 'https://restcountries.eu/data/npl.svg',
    currency: 'Nepalese rupee'
  },
  {
    name: 'Netherlands',
    capital: 'Amsterdam',
    languages: ['Dutch'],
    population: 17019800,
    flag: 'https://restcountries.eu/data/nld.svg',
    currency: 'Euro'
  },
  {
    name: 'New Caledonia',
    capital: 'Nouméa',
    languages: ['French'],
    population: 268767,
    flag: 'https://restcountries.eu/data/ncl.svg',
    currency: 'CFP franc'
  },
  {
    name: 'New Zealand',
    capital: 'Wellington',
    languages: ['English', 'Māori'],
    population: 4697854,
    flag: 'https://restcountries.eu/data/nzl.svg',
    currency: 'New Zealand dollar'
  },
  {
    name: 'Nicaragua',
    capital: 'Managua',
    languages: ['Spanish'],
    population: 6262703,
    flag: 'https://restcountries.eu/data/nic.svg',
    currency: 'Nicaraguan córdoba'
  },
  {
    name: 'Niger',
    capital: 'Niamey',
    languages: ['French'],
    population: 20715000,
    flag: 'https://restcountries.eu/data/ner.svg',
    currency: 'West African CFA franc'
  },
  {
    name: 'Nigeria',
    capital: 'Abuja',
    languages: ['English'],
    population: 186988000,
    flag: 'https://restcountries.eu/data/nga.svg',
    currency: 'Nigerian naira'
  },
  {
    name: 'Niue',
    capital: 'Alofi',
    languages: ['English'],
    population: 1470,
    flag: 'https://restcountries.eu/data/niu.svg',
    currency: 'New Zealand dollar'
  },
  {
    name: 'Norfolk Island',
    capital: 'Kingston',
    languages: ['English'],
    population: 2302,
    flag: 'https://restcountries.eu/data/nfk.svg',
    currency: 'Australian dollar'
  },
  {
    name: "Korea (Democratic People's Republic of)",
    capital: 'Pyongyang',
    languages: ['Korean'],
    population: 25281000,
    flag: 'https://restcountries.eu/data/prk.svg',
    currency: 'North Korean won'
  },
  {
    name: 'Northern Mariana Islands',
    capital: 'Saipan',
    languages: ['English', 'Chamorro'],
    population: 56940,
    flag: 'https://restcountries.eu/data/mnp.svg',
    currency: 'United States dollar'
  },
  {
    name: 'Norway',
    capital: 'Oslo',
    languages: ['Norwegian', 'Norwegian Bokmål', 'Norwegian Nynorsk'],
    population: 5223256,
    flag: 'https://restcountries.eu/data/nor.svg',
    currency: 'Norwegian krone'
  },
  {
    name: 'Oman',
    capital: 'Muscat',
    languages: ['Arabic'],
    population: 4420133,
    flag: 'https://restcountries.eu/data/omn.svg',
    currency: 'Omani rial'
  },
  {
    name: 'Pakistan',
    capital: 'Islamabad',
    languages: ['English', 'Urdu'],
    population: 194125062,
    flag: 'https://restcountries.eu/data/pak.svg',
    currency: 'Pakistani rupee'
  },
  {
    name: 'Palau',
    capital: 'Ngerulmud',
    languages: ['English'],
    population: 17950,
    flag: 'https://restcountries.eu/data/plw.svg',
    currency: '[E]'
  },
  {
    name: 'Palestine, State of',
    capital: 'Ramallah',
    languages: ['Arabic'],
    population: 4682467,
    flag: 'https://restcountries.eu/data/pse.svg',
    currency: 'Israeli new sheqel'
  },
  {
    name: 'Panama',
    capital: 'Panama City',
    languages: ['Spanish'],
    population: 3814672,
    flag: 'https://restcountries.eu/data/pan.svg',
    currency: 'Panamanian balboa'
  },
  {
    name: 'Papua New Guinea',
    capital: 'Port Moresby',
    languages: ['English'],
    population: 8083700,
    flag: 'https://restcountries.eu/data/png.svg',
    currency: 'Papua New Guinean kina'
  },
  {
    name: 'Paraguay',
    capital: 'Asunción',
    languages: ['Spanish', 'Guaraní'],
    population: 6854536,
    flag: 'https://restcountries.eu/data/pry.svg',
    currency: 'Paraguayan guaraní'
  },
  {
    name: 'Peru',
    capital: 'Lima',
    languages: ['Spanish'],
    population: 31488700,
    flag: 'https://restcountries.eu/data/per.svg',
    currency: 'Peruvian sol'
  },
  {
    name: 'Philippines',
    capital: 'Manila',
    languages: ['English'],
    population: 103279800,
    flag: 'https://restcountries.eu/data/phl.svg',
    currency: 'Philippine peso'
  },
  {
    name: 'Pitcairn',
    capital: 'Adamstown',
    languages: ['English'],
    population: 56,
    flag: 'https://restcountries.eu/data/pcn.svg',
    currency: 'New Zealand dollar'
  },
  {
    name: 'Poland',
    capital: 'Warsaw',
    languages: ['Polish'],
    population: 38437239,
    flag: 'https://restcountries.eu/data/pol.svg',
    currency: 'Polish złoty'
  },
  {
    name: 'Portugal',
    capital: 'Lisbon',
    languages: ['Portuguese'],
    population: 10374822,
    flag: 'https://restcountries.eu/data/prt.svg',
    currency: 'Euro'
  },
  {
    name: 'Puerto Rico',
    capital: 'San Juan',
    languages: ['Spanish', 'English'],
    population: 3474182,
    flag: 'https://restcountries.eu/data/pri.svg',
    currency: 'United States dollar'
  },
  {
    name: 'Qatar',
    capital: 'Doha',
    languages: ['Arabic'],
    population: 2587564,
    flag: 'https://restcountries.eu/data/qat.svg',
    currency: 'Qatari riyal'
  },
  {
    name: 'Republic of Kosovo',
    capital: 'Pristina',
    languages: ['Albanian', 'Serbian'],
    population: 1733842,
    flag: 'https://restcountries.eu/data/kos.svg',
    currency: 'Euro'
  },
  {
    name: 'Réunion',
    capital: 'Saint-Denis',
    languages: ['French'],
    population: 840974,
    flag: 'https://restcountries.eu/data/reu.svg',
    currency: 'Euro'
  },
  {
    name: 'Romania',
    capital: 'Bucharest',
    languages: ['Romanian'],
    population: 19861408,
    flag: 'https://restcountries.eu/data/rou.svg',
    currency: 'Romanian leu'
  },
  {
    name: 'Russian Federation',
    capital: 'Moscow',
    languages: ['Russian'],
    population: 146599183,
    flag: 'https://restcountries.eu/data/rus.svg',
    currency: 'Russian ruble'
  },
  {
    name: 'Rwanda',
    capital: 'Kigali',
    languages: ['Kinyarwanda', 'English', 'French'],
    population: 11553188,
    flag: 'https://restcountries.eu/data/rwa.svg',
    currency: 'Rwandan franc'
  },
  {
    name: 'Saint Barthélemy',
    capital: 'Gustavia',
    languages: ['French'],
    population: 9417,
    flag: 'https://restcountries.eu/data/blm.svg',
    currency: 'Euro'
  },
  {
    name: 'Saint Helena, Ascension and Tristan da Cunha',
    capital: 'Jamestown',
    languages: ['English'],
    population: 4255,
    flag: 'https://restcountries.eu/data/shn.svg',
    currency: 'Saint Helena pound'
  },
  {
    name: 'Saint Kitts and Nevis',
    capital: 'Basseterre',
    languages: ['English'],
    population: 46204,
    flag: 'https://restcountries.eu/data/kna.svg',
    currency: 'East Caribbean dollar'
  },
  {
    name: 'Saint Lucia',
    capital: 'Castries',
    languages: ['English'],
    population: 186000,
    flag: 'https://restcountries.eu/data/lca.svg',
    currency: 'East Caribbean dollar'
  },
  {
    name: 'Saint Martin (French part)',
    capital: 'Marigot',
    languages: ['English', 'French', 'Dutch'],
    population: 36979,
    flag: 'https://restcountries.eu/data/maf.svg',
    currency: 'Euro'
  },
  {
    name: 'Saint Pierre and Miquelon',
    capital: 'Saint-Pierre',
    languages: ['French'],
    population: 6069,
    flag: 'https://restcountries.eu/data/spm.svg',
    currency: 'Euro'
  },
  {
    name: 'Saint Vincent and the Grenadines',
    capital: 'Kingstown',
    languages: ['English'],
    population: 109991,
    flag: 'https://restcountries.eu/data/vct.svg',
    currency: 'East Caribbean dollar'
  },
  {
    name: 'Samoa',
    capital: 'Apia',
    languages: ['Samoan', 'English'],
    population: 194899,
    flag: 'https://restcountries.eu/data/wsm.svg',
    currency: 'Samoan tālā'
  },
  {
    name: 'San Marino',
    capital: 'City of San Marino',
    languages: ['Italian'],
    population: 33005,
    flag: 'https://restcountries.eu/data/smr.svg',
    currency: 'Euro'
  },
  {
    name: 'Sao Tome and Principe',
    capital: 'São Tomé',
    languages: ['Portuguese'],
    population: 187356,
    flag: 'https://restcountries.eu/data/stp.svg',
    currency: 'São Tomé and Príncipe dobra'
  },
  {
    name: 'Saudi Arabia',
    capital: 'Riyadh',
    languages: ['Arabic'],
    population: 32248200,
    flag: 'https://restcountries.eu/data/sau.svg',
    currency: 'Saudi riyal'
  },
  {
    name: 'Senegal',
    capital: 'Dakar',
    languages: ['French'],
    population: 14799859,
    flag: 'https://restcountries.eu/data/sen.svg',
    currency: 'West African CFA franc'
  },
  {
    name: 'Serbia',
    capital: 'Belgrade',
    languages: ['Serbian'],
    population: 7076372,
    flag: 'https://restcountries.eu/data/srb.svg',
    currency: 'Serbian dinar'
  },
  {
    name: 'Seychelles',
    capital: 'Victoria',
    languages: ['French', 'English'],
    population: 91400,
    flag: 'https://restcountries.eu/data/syc.svg',
    currency: 'Seychellois rupee'
  },
  {
    name: 'Sierra Leone',
    capital: 'Freetown',
    languages: ['English'],
    population: 7075641,
    flag: 'https://restcountries.eu/data/sle.svg',
    currency: 'Sierra Leonean leone'
  },
  {
    name: 'Singapore',
    capital: 'Singapore',
    languages: ['English', 'Malay', 'Tamil', 'Chinese'],
    population: 5535000,
    flag: 'https://restcountries.eu/data/sgp.svg',
    currency: 'Brunei dollar'
  },
  {
    name: 'Sint Maarten (Dutch part)',
    capital: 'Philipsburg',
    languages: ['Dutch', 'English'],
    population: 38247,
    flag: 'https://restcountries.eu/data/sxm.svg',
    currency: 'Netherlands Antillean guilder'
  },
  {
    name: 'Slovakia',
    capital: 'Bratislava',
    languages: ['Slovak'],
    population: 5426252,
    flag: 'https://restcountries.eu/data/svk.svg',
    currency: 'Euro'
  },
  {
    name: 'Slovenia',
    capital: 'Ljubljana',
    languages: ['Slovene'],
    population: 2064188,
    flag: 'https://restcountries.eu/data/svn.svg',
    currency: 'Euro'
  },
  {
    name: 'Solomon Islands',
    capital: 'Honiara',
    languages: ['English'],
    population: 642000,
    flag: 'https://restcountries.eu/data/slb.svg',
    currency: 'Solomon Islands dollar'
  },
  {
    name: 'Somalia',
    capital: 'Mogadishu',
    languages: ['Somali', 'Arabic'],
    population: 11079000,
    flag: 'https://restcountries.eu/data/som.svg',
    currency: 'Somali shilling'
  },
  {
    name: 'South Africa',
    capital: 'Pretoria',
    languages: [
      'Afrikaans',
      'English',
      'Southern Ndebele',
      'Southern Sotho',
      'Swati',
      'Tswana',
      'Tsonga',
      'Venda',
      'Xhosa',
      'Zulu'
    ],
    population: 55653654,
    flag: 'https://restcountries.eu/data/zaf.svg',
    currency: 'South African rand'
  },
  {
    name: 'South Georgia and the South Sandwich Islands',
    capital: 'King Edward Point',
    languages: ['English'],
    population: 30,
    flag: 'https://restcountries.eu/data/sgs.svg',
    currency: 'British pound'
  },
  {
    name: 'Korea (Republic of)',
    capital: 'Seoul',
    languages: ['Korean'],
    population: 50801405,
    flag: 'https://restcountries.eu/data/kor.svg',
    currency: 'South Korean won'
  },
  {
    name: 'South Sudan',
    capital: 'Juba',
    languages: ['English'],
    population: 12131000,
    flag: 'https://restcountries.eu/data/ssd.svg',
    currency: 'South Sudanese pound'
  },
  {
    name: 'Spain',
    capital: 'Madrid',
    languages: ['Spanish'],
    population: 46438422,
    flag: 'https://restcountries.eu/data/esp.svg',
    currency: 'Euro'
  },
  {
    name: 'Sri Lanka',
    capital: 'Colombo',
    languages: ['Sinhalese', 'Tamil'],
    population: 20966000,
    flag: 'https://restcountries.eu/data/lka.svg',
    currency: 'Sri Lankan rupee'
  },
  {
    name: 'Sudan',
    capital: 'Khartoum',
    languages: ['Arabic', 'English'],
    population: 39598700,
    flag: 'https://restcountries.eu/data/sdn.svg',
    currency: 'Sudanese pound'
  },
  {
    name: 'Suriname',
    capital: 'Paramaribo',
    languages: ['Dutch'],
    population: 541638,
    flag: 'https://restcountries.eu/data/sur.svg',
    currency: 'Surinamese dollar'
  },
  {
    name: 'Svalbard and Jan Mayen',
    capital: 'Longyearbyen',
    languages: ['Norwegian'],
    population: 2562,
    flag: 'https://restcountries.eu/data/sjm.svg',
    currency: 'Norwegian krone'
  },
  {
    name: 'Swaziland',
    capital: 'Lobamba',
    languages: ['English', 'Swati'],
    population: 1132657,
    flag: 'https://restcountries.eu/data/swz.svg',
    currency: 'Swazi lilangeni'
  },
  {
    name: 'Sweden',
    capital: 'Stockholm',
    languages: ['Swedish'],
    population: 9894888,
    flag: 'https://restcountries.eu/data/swe.svg',
    currency: 'Swedish krona'
  },
  {
    name: 'Switzerland',
    capital: 'Bern',
    languages: ['German', 'French', 'Italian'],
    population: 8341600,
    flag: 'https://restcountries.eu/data/che.svg',
    currency: 'Swiss franc'
  },
  {
    name: 'Syrian Arab Republic',
    capital: 'Damascus',
    languages: ['Arabic'],
    population: 18564000,
    flag: 'https://restcountries.eu/data/syr.svg',
    currency: 'Syrian pound'
  },
  {
    name: 'Taiwan',
    capital: 'Taipei',
    languages: ['Chinese'],
    population: 23503349,
    flag: 'https://restcountries.eu/data/twn.svg',
    currency: 'New Taiwan dollar'
  },
  {
    name: 'Tajikistan',
    capital: 'Dushanbe',
    languages: ['Tajik', 'Russian'],
    population: 8593600,
    flag: 'https://restcountries.eu/data/tjk.svg',
    currency: 'Tajikistani somoni'
  },
  {
    name: 'Tanzania, United Republic of',
    capital: 'Dodoma',
    languages: ['Swahili', 'English'],
    population: 55155000,
    flag: 'https://restcountries.eu/data/tza.svg',
    currency: 'Tanzanian shilling'
  },
  {
    name: 'Thailand',
    capital: 'Bangkok',
    languages: ['Thai'],
    population: 65327652,
    flag: 'https://restcountries.eu/data/tha.svg',
    currency: 'Thai baht'
  },
  {
    name: 'Timor-Leste',
    capital: 'Dili',
    languages: ['Portuguese'],
    population: 1167242,
    flag: 'https://restcountries.eu/data/tls.svg',
    currency: 'United States dollar'
  },
  {
    name: 'Togo',
    capital: 'Lomé',
    languages: ['French'],
    population: 7143000,
    flag: 'https://restcountries.eu/data/tgo.svg',
    currency: 'West African CFA franc'
  },
  {
    name: 'Tokelau',
    capital: 'Fakaofo',
    languages: ['English'],
    population: 1411,
    flag: 'https://restcountries.eu/data/tkl.svg',
    currency: 'New Zealand dollar'
  },
  {
    name: 'Tonga',
    capital: "Nuku'alofa",
    languages: ['English', 'Tonga (Tonga Islands)'],
    population: 103252,
    flag: 'https://restcountries.eu/data/ton.svg',
    currency: 'Tongan paʻanga'
  },
  {
    name: 'Trinidad and Tobago',
    capital: 'Port of Spain',
    languages: ['English'],
    population: 1349667,
    flag: 'https://restcountries.eu/data/tto.svg',
    currency: 'Trinidad and Tobago dollar'
  },
  {
    name: 'Tunisia',
    capital: 'Tunis',
    languages: ['Arabic'],
    population: 11154400,
    flag: 'https://restcountries.eu/data/tun.svg',
    currency: 'Tunisian dinar'
  },
  {
    name: 'Turkey',
    capital: 'Ankara',
    languages: ['Turkish'],
    population: 78741053,
    flag: 'https://restcountries.eu/data/tur.svg',
    currency: 'Turkish lira'
  },
  {
    name: 'Turkmenistan',
    capital: 'Ashgabat',
    languages: ['Turkmen', 'Russian'],
    population: 4751120,
    flag: 'https://restcountries.eu/data/tkm.svg',
    currency: 'Turkmenistan manat'
  },
  {
    name: 'Turks and Caicos Islands',
    capital: 'Cockburn Town',
    languages: ['English'],
    population: 31458,
    flag: 'https://restcountries.eu/data/tca.svg',
    currency: 'United States dollar'
  },
  {
    name: 'Tuvalu',
    capital: 'Funafuti',
    languages: ['English'],
    population: 10640,
    flag: 'https://restcountries.eu/data/tuv.svg',
    currency: 'Australian dollar'
  },
  {
    name: 'Uganda',
    capital: 'Kampala',
    languages: ['English', 'Swahili'],
    population: 33860700,
    flag: 'https://restcountries.eu/data/uga.svg',
    currency: 'Ugandan shilling'
  },
  {
    name: 'Ukraine',
    capital: 'Kiev',
    languages: ['Ukrainian'],
    population: 42692393,
    flag: 'https://restcountries.eu/data/ukr.svg',
    currency: 'Ukrainian hryvnia'
  },
  {
    name: 'United Arab Emirates',
    capital: 'Abu Dhabi',
    languages: ['Arabic'],
    population: 9856000,
    flag: 'https://restcountries.eu/data/are.svg',
    currency: 'United Arab Emirates dirham'
  },
  {
    name: 'United Kingdom of Great Britain and Northern Ireland',
    capital: 'London',
    languages: ['English'],
    population: 65110000,
    flag: 'https://restcountries.eu/data/gbr.svg',
    currency: 'British pound'
  },
  {
    name: 'United States of America',
    capital: 'Washington, D.C.',
    languages: ['English'],
    population: 323947000,
    flag: 'https://restcountries.eu/data/usa.svg',
    currency: 'United States dollar'
  },
  {
    name: 'Uruguay',
    capital: 'Montevideo',
    languages: ['Spanish'],
    population: 3480222,
    flag: 'https://restcountries.eu/data/ury.svg',
    currency: 'Uruguayan peso'
  },
  {
    name: 'Uzbekistan',
    capital: 'Tashkent',
    languages: ['Uzbek', 'Russian'],
    population: 31576400,
    flag: 'https://restcountries.eu/data/uzb.svg',
    currency: "Uzbekistani so'm"
  },
  {
    name: 'Vanuatu',
    capital: 'Port Vila',
    languages: ['Bislama', 'English', 'French'],
    population: 277500,
    flag: 'https://restcountries.eu/data/vut.svg',
    currency: 'Vanuatu vatu'
  },
  {
    name: 'Venezuela (Bolivarian Republic of)',
    capital: 'Caracas',
    languages: ['Spanish'],
    population: 31028700,
    flag: 'https://restcountries.eu/data/ven.svg',
    currency: 'Venezuelan bolívar'
  },
  {
    name: 'Viet Nam',
    capital: 'Hanoi',
    languages: ['Vietnamese'],
    population: 92700000,
    flag: 'https://restcountries.eu/data/vnm.svg',
    currency: 'Vietnamese đồng'
  },
  {
    name: 'Wallis and Futuna',
    capital: 'Mata-Utu',
    languages: ['French'],
    population: 11750,
    flag: 'https://restcountries.eu/data/wlf.svg',
    currency: 'CFP franc'
  },
  {
    name: 'Western Sahara',
    capital: 'El Aaiún',
    languages: ['Spanish'],
    population: 510713,
    flag: 'https://restcountries.eu/data/esh.svg',
    currency: 'Moroccan dirham'
  },
  {
    name: 'Yemen',
    capital: "Sana'a",
    languages: ['Arabic'],
    population: 27478000,
    flag: 'https://restcountries.eu/data/yem.svg',
    currency: 'Yemeni rial'
  },
  {
    name: 'Zambia',
    capital: 'Lusaka',
    languages: ['English'],
    population: 15933883,
    flag: 'https://restcountries.eu/data/zmb.svg',
    currency: 'Zambian kwacha'
  },
  {
    name: 'Zimbabwe',
    capital: 'Harare',
    languages: ['English', 'Shona', 'Northern Ndebele'],
    population: 14240168,
    flag: 'https://restcountries.eu/data/zwe.svg',
    currency: 'Botswana pula'
  }
];

exports.data = countries;