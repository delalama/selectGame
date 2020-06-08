import { EntityDescription, GameBack } from '../../interfaces'; 

 const LolCharacters: EntityDescription[]=
[{'popular': 100.0, 'src': 'Brand', 'name': 'Brand'}, {'popular': 83.027, 'src': 'Vi', 'name': 'Vi'}, {'popular': 18.69, 'src': 'Twitch', 'name': 'Twitch'}, {'popular': 10.123, 'src': 'Diana', 'name': 'Diana'}, {'popular': 9.153, 'src': 'Miss_Fortune', 'name': 'Miss Fortune'}, {'popular': 8.991, 'src': 'Karma', 'name': 'Karma'}, {'popular': 7.593, 'src': 'Annie', 'name': 'Annie'}, {'popular': 6.437, 'src': 'Twisted_Fate', 'name': 'Twisted Fate'}, {'popular': 6.081, 'src': 'Jinx', 'name': 'Jinx'}, {'popular': 5.855, 'src': 'Zoe', 'name': 'Zoe'}, {'popular': 5.435, 'src': 'Lux', 'name': 'Lux'}, {'popular': 5.265, 'src': 'Dr_Mundo', 'name': 'Dr Mundo'}, {'popular': 4.57, 'src': 'Bard', 'name': 'Bard'}, {'popular': 4.562, 'src': 'Yasuo', 'name': 'Yasuo'}, {'popular': 4.562, 'src': 'Urgot', 'name': 'Urgot'}, {'popular': 3.608, 'src': 'Nami', 'name': 'Nami'}, {'popular': 3.43, 'src': 'Graves', 'name': 'Graves'}, {'popular': 3.43, 'src': 'Jhin', 'name': 'Jhin'}, {'popular': 3.43, 'src': 'Vladimir', 'name': 'Vladimir'}, {'popular': 3.341, 'src': 'Riven', 'name': 'Riven'}, {'popular': 3.317, 'src': 'Morgana', 'name': 'Morgana'}, {'popular': 3.147, 'src': 'Zed', 'name': 'Zed'}, {'popular': 3.034, 'src': 'Sona', 'name': 'Sona'}, {'popular': 2.638, 'src': 'Olaf', 'name': 'Olaf'}, {'popular': 2.549, 'src': 'Zac', 'name': 'Zac'}, {'popular': 2.525, 'src': 'Ezreal', 'name': 'Ezreal'}, {'popular': 2.412, 'src': 'Jax', 'name': 'Jax'}, {'popular': 2.347, 'src': 'Talon', 'name': 'Talon'}, {'popular': 2.315, 'src': 'Rumble', 'name': 'Rumble'}, {'popular': 2.048, 'src': 'Darius', 'name': 'Darius'}, {'popular': 1.983, 'src': 'Evelynn', 'name': 'Evelynn'}, {'popular': 1.959, 'src': 'Xayah', 'name': 'Xayah'}, {'popular': 1.951, 'src': 'Kayle', 'name': 'Kayle'}, {'popular': 1.919, 'src': 'Shen', 'name': 'Shen'}, {'popular': 1.757, 'src': 'Vayne', 'name': 'Vayne'}, {'popular': 1.701, 'src': 'Warwick', 'name': 'Warwick'}, {'popular': 1.692, 'src': 'Viktor', 'name': 'Viktor'}, {'popular': 1.628, 'src': 'Teemo', 'name': 'Teemo'}, {'popular': 1.571, 'src': 'Fiora', 'name': 'Fiora'}, {'popular': 1.523, 'src': 'Soraka', 'name': 'Soraka'}, {'popular': 1.45, 'src': 'Fizz', 'name': 'Fizz'}, {'popular': 1.45, 'src': 'Senna', 'name': 'Senna'}, {'popular': 1.45, 'src': 'Zyra', 'name': 'Zyra'}, {'popular': 1.426, 'src': 'Garen', 'name': 'Garen'}, {'popular': 1.418, 'src': 'Alistar', 'name': 'Alistar'}, {'popular': 1.224, 'src': 'Sejuani', 'name': 'Sejuani'}, {'popular': 1.208, 'src': 'Lucian', 'name': 'Lucian'}, {'popular': 1.199, 'src': 'Thresh', 'name': 'Thresh'}, {'popular': 1.143, 'src': 'Sett', 'name': 'Sett'}, {'popular': 1.005, 'src': 'Nautilus', 'name': 'Nautilus'}, {'popular': 0.731, 'src': 'Irelia', 'name': 'Irelia'}, {'popular': 0.658, 'src': 'Nasus', 'name': 'Nasus'}, {'popular': 0.65, 'src': 'Wukong', 'name': 'Wukong'}, {'popular': 0.642, 'src': 'Gnar', 'name': 'Gnar'}, {'popular': 0.642, 'src': 'Varus', 'name': 'Varus'}, {'popular': 0.634, 'src': 'Tryndamere', 'name': 'Tryndamere'}, {'popular': 0.601, 'src': 'Cassiopeia', 'name': 'Cassiopeia'}, {'popular': 0.554, 'src': 'Aatrox', 'name': 'Aatrox'}, {'popular': 0.547, 'src': 'Syndra', 'name': 'Syndra'}, {'popular': 0.545, 'src': 'Kalista', 'name': 'Kalista'}, {'popular': 0.538, 'src': 'Orianna', 'name': 'Orianna'}, {'popular': 0.534, 'src': 'Tristana', 'name': 'Tristana'}, {'popular': 0.503, 'src': 'Ryze', 'name': 'Ryze'}, {'popular': 0.492, 'src': 'Renekton', 'name': 'Renekton'}, {'popular': 0.476, 'src': 'Swain', 'name': 'Swain'}, {'popular': 0.468, 'src': 'Nidalee', 'name': 'Nidalee'}, {'popular': 0.468, 'src': 'Kayn', 'name': 'Kayn'}, {'popular': 0.453, 'src': 'Amumu', 'name': 'Amumu'}, {'popular': 0.445, 'src': 'Sivir', 'name': 'Sivir'}, {'popular': 0.44, 'src': 'Braum', 'name': 'Braum'}, {'popular': 0.422, 'src': 'Shaco', 'name': 'Shaco'}, {'popular': 0.385, 'src': 'Mordekaiser', 'name': 'Mordekaiser'}, {'popular': 0.372, 'src': 'Singed', 'name': 'Singed'}, {'popular': 0.361, 'src': 'Trundle', 'name': 'Trundle'}, {'popular': 0.361, 'src': "Vel'Koz", 'name': "Vel'Koz"}, {'popular': 0.342, 'src': 'Blitzcrank', 'name': 'Blitzcrank'}, {'popular': 0.342, 'src': 'Caitlyn', 'name': 'Caitlyn'}, {'popular': 0.342, 'src': 'Kennen', 'name': 'Kennen'}, {'popular': 0.342, 'src': 'Karthus', 'name': 'Karthus'}, {'popular': 0.342, 'src': 'Rengar', 'name': 'Rengar'}, {'popular': 0.342, 'src': 'Azir', 'name': 'Azir'}, {'popular': 0.342, 'src': 'LeBlanc', 'name': 'LeBlanc'}, {'popular': 0.342, 'src': 'Quinn', 'name': 'Quinn'}, {'popular': 0.342, 'src': 'Ahri', 'name': 'Ahri'}, {'popular': 0.342, 'src': 'Katarina', 'name': 'Katarina'}, {'popular': 0.342, 'src': 'Corki', 'name': 'Corki'}, {'popular': 0.342, 'src': "Cho'Gath", 'name': "Cho'Gath"}, {'popular': 0.342, 'src': 'Kassadin', 'name': 'Kassadin'}, {'popular': 0.342, 'src': 'Ornn', 'name': 'Ornn'}, {'popular': 0.342, 'src': "Kai'Sa", 'name': "Kai'Sa"}, {'popular': 0.342, 'src': 'Leona', 'name': 'Leona'}, {'popular': 0.342, 'src': 'Nocturne', 'name': 'Nocturne'}, {'popular': 0.342, 'src': 'Poppy', 'name': 'Poppy'}, {'popular': 0.342, 'src': 'Master_Yi', 'name': 'Master Yi'}, {'popular': 0.342, 'src': 'Fiddlesticks', 'name': 'Fiddlesticks'}, {'popular': 0.342, 'src': 'Camille', 'name': 'Camille'}, {'popular': 0.342, 'src': 'Lulu', 'name': 'Lulu'}, {'popular': 0.342, 'src': 'Akali', 'name': 'Akali'}, {'popular': 0.342, 'src': 'Elise', 'name': 'Elise'}, {'popular': 0.342, 'src': "Kog'Maw", 'name': "Kog'Maw"}, {'popular': 0.342, 'src': 'Draven', 'name': 'Draven'}, {'popular': 0.342, 'src': 'Pantheon', 'name': 'Pantheon'}, {'popular': 0.342, 'src': 'Ekko', 'name': 'Ekko'}, {'popular': 0.342, 'src': 'Kled', 'name': 'Kled'}, {'popular': 0.342, 'src': 'Aurelion_Sol', 'name': 'Aurelion Sol'}, {'popular': 0.342, 'src': 'Lee_Sin', 'name': 'Lee Sin'}, {'popular': 0.342, 'src': 'Kindred', 'name': 'Kindred'}, {'popular': 0.342, 'src': 'Janna', 'name': 'Janna'}, {'popular': 0.342, 'src': 'Ashe', 'name': 'Ashe'}, {'popular': 0.342, 'src': 'Qiyana', 'name': 'Qiyana'}, {'popular': 0.342, 'src': 'Aphelios', 'name': 'Aphelios'}, {'popular': 0.342, 'src': 'Nunu_&_Willump', 'name': 'Nunu & Willump'}, {'popular': 0.342, 'src': 'Rakan', 'name': 'Rakan'}, {'popular': 0.33, 'src': "Kha'Zix", 'name': "Kha'Zix"}, {'popular': 0.33, 'src': 'Gangplank', 'name': 'Gangplank'}, {'popular': 0.311, 'src': 'Pyke', 'name': 'Pyke'}, {'popular': 0.311, 'src': 'Yuumi', 'name': 'Yuumi'}, {'popular': 0.294, 'src': 'Xin_Zhao', 'name': 'Xin Zhao'}, {'popular': 0.292, 'src': 'Gragas', 'name': 'Gragas'}, {'popular': 0.276, 'src': 'Veigar', 'name': 'Veigar'}, {'popular': 0.271, 'src': 'Jayce', 'name': 'Jayce'}, {'popular': 0.201, 'src': 'Volibear', 'name': 'Volibear'}, {'popular': 0.196, 'src': 'Ziggs', 'name': 'Ziggs'}, {'popular': 0.193, 'src': 'Sylas', 'name': 'Sylas'}, {'popular': 0.193, 'src': 'Sion', 'name': 'Sion'}, {'popular': 0.174, 'src': 'Taric', 'name': 'Taric'}, {'popular': 0.166, 'src': 'Neeko', 'name': 'Neeko'}, {'popular': 0.163, 'src': 'Shyvana', 'name': 'Shyvana'}, {'popular': 0.158, 'src': 'Malphite', 'name': 'Malphite'}, {'popular': 0.135, 'src': 'Anivia', 'name': 'Anivia'}, {'popular': 0.131, 'src': "Rek'Sai", 'name': "Rek'Sai"}, {'popular': 0.116, 'src': 'Udyr', 'name': 'Udyr'}, {'popular': 0.115, 'src': 'Galio', 'name': 'Galio'}, {'popular': 0.107, 'src': 'Hecarim', 'name': 'Hecarim'}, {'popular': 0.103, 'src': 'Xerath', 'name': 'Xerath'}, {'popular': 0.096, 'src': 'Illaoi', 'name': 'Illaoi'}, {'popular': 0.072, 'src': 'Yorick', 'name': 'Yorick'}, {'popular': 0.07, 'src': 'Jarvan_IV', 'name': 'Jarvan IV'}, {'popular': 0.066, 'src': 'Tahm_Kench', 'name': 'Tahm Kench'}, {'popular': 0.062, 'src': 'Maokai', 'name': 'Maokai'}, {'popular': 0.062, 'src': 'Rammus', 'name': 'Rammus'}, {'popular': 0.044, 'src': 'Skarner', 'name': 'Skarner'}, {'popular': 0.042, 'src': 'Heimerdinger', 'name': 'Heimerdinger'}, {'popular': 0.04, 'src': 'Taliyah', 'name': 'Taliyah'}, {'popular': 0.036, 'src': 'Malzahar', 'name': 'Malzahar'}, {'popular': 0.036, 'src': 'Ivern', 'name': 'Ivern'}, {'popular': 0.036, 'src': 'Lissandra', 'name': 'Lissandra'}, {'popular': 0.0, 'src': 'Zilean', 'name': 'Zilean'}]
;

 const levelsByDensity =
[{'bottom': 0, 'top': 0}, {'bottom': 1, 'top': 1}, {'bottom': 2, 'top': 2}, {'bottom': 3, 'top': 3}, {'bottom': 4, 'top': 11}, {'bottom': 12, 'top': 147}]
;

 const possibleTrues =
[[0, 1, 2, 3, 4, 5, 6, 7], [8, 9, 10, 11, 12, 13, 14, 15], [16, 17, 18, 19, 20, 21, 22, 23], [24, 25, 26, 27, 28, 29, 30, 31], [32, 33, 34, 35, 36, 37, 38, 39], [40, 41, 42, 43, 44, 45, 46, 47], [48, 49, 50, 51, 52, 53, 54, 55], [56, 57, 58, 59, 60, 61, 62, 63], [64, 65, 66, 67, 68, 69, 70], [71, 72, 73, 74, 75, 76, 77], [78, 79, 80, 81, 82, 83, 84], [85, 86, 87, 88, 89, 90, 91], [92, 93, 94, 95, 96, 97, 98], [99, 100, 101, 102, 103, 104, 105], [106, 107, 108, 109, 110, 111, 112], [113, 114, 115, 116, 117, 118, 119], [120, 121, 122, 123, 124, 125, 126], [127, 128, 129, 130, 131, 132, 133], [134, 135, 136, 137, 138, 139, 140], [141, 142, 143, 144, 145, 146, 147]]
;
export const LolCharactersData : GameBack = { 
 mainArray: LolCharacters,
 possibleTrues: possibleTrues,
 levelsByDensity: levelsByDensity};


 