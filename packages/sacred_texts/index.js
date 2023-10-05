import {getRandomHadith} from "./main/getRandomHadith";

//index.js

export async function hadith(key, limit) {

	switch (key) {
		case 'random':
			return  getRandomHadith()
			break;

		default:
			// this can have get using key var
			break;
	}
}

// this function should only be called from secure enviroments 
export async function rss(key,language) {
	switch (key) {
		case 'append':
			return  console.log(process.env.RSS_SECRET);
			break;
				case 'read':
			return res;
			break;

		default:
			// this can have get using key var
			break;
	}
}