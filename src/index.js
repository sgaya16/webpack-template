import './styles/style.scss';
import cuteKitty from './assets/cute-kitty.svg';
import generatePurryPuns from './generatePurryPuns';
import { camelCase } from 'lodash';

const cuteKittyImg = document.getElementById('cuteKittyImg');
cuteKittyImg.src = cuteKitty;

console.log(camelCase('hello world'));
console.log(generatePurryPuns());

const punBtn = document.getElementById('pun-btn');
punBtn.addEventListener('click', generatePurryPuns)

generatePurryPuns();