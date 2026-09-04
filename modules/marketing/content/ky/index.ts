import type { RouteKey } from '@/libs/config/site';
import type { NavLabels, PageContent } from '@/types/content';

import { home } from './home';
import { howItWorks } from './how-it-works';
import { features } from './features';
import { extensions } from './extensions';
import { security } from './security';
import { privacy } from './privacy';
import { networkPrivacy } from './network-privacy';
import { download } from './download';
import { openSource } from './open-source';
import { story } from './story';
import { roadmap } from './roadmap';
import { compare } from './compare';
import { turkey } from './turkey';
import { help } from './help';
import { blog } from './blog';
import { blogScreenshot } from './blog-screenshot';
import { releases } from './releases';
import { legalPrivacy } from './legal-privacy';
import { legalTerms } from './legal-terms';
import { legalLicense } from './legal-license';

/**
 * Кыргызча мазмун — `../en/` папкасынын күзгүсү, ачкыч-ачкычка.
 *
 * ## Бул котормону эч бир кыргыз тилинде сүйлөгөн адам окуган жок
 *
 * Бул файлдагы эң маанилүү сүйлөм ушул жана ал жогоруда турат, төмөндө эмес.
 *
 * `en/` менен `tr/` бир эле адам жазган жана карап чыккан. `ky/` башкача:
 * котормо толук, ар бир дарбаза өтөт жана эч ким аны эне тилинде окуп чыккан
 * жок. Бул кемчилик эмес — бул фактынын кайда жазылганы. Сайттын бүтүндөй
 * аргументи «биздин ырастоолорубуз текшериле алат» болгондуктан, текшерилбеген
 * котормону текшерилгендей көрсөтүү — так ошол аргументти бузмак.
 *
 * Практикада күтүлө турган нерселер: техникалык терминология айрым жерлерде
 * ойлоп табылган (мис. «жабык абалда токтоочу өчүргүч», «булганган каптал
 * таасир»); стилдин деңгээли бир калыпта болбошу мүмкүн; жана кыргыз тилинде
 * иштеген адамга табигый угулбаган айрым бурулуштар болушу ыктымал.
 *
 * Эмне туура: фактылар. Сандар, файл аттары, буйруктар, лицензия аталыштары,
 * жол картасынын абалдары жана `alt` тексттеринин мазмуну англисчеси менен бирге
 * текшерилди — б.а. котормо жаңылса, стилден жаңылат, ырастоодон эмес.
 *
 * ## Атайын жасалган үч чечим
 *
 *   - `turkey.ts` `../tr/` эмес, `../en/` файлынан которулду. Түркчө версия —
 *     ошол беттин аслы жана ар күнү түркчө жазган окурман үчүн жазылган; кыргыз
 *     окурман, англис окурман сыяктуу, сырттан карайт.
 *   - `roadmap.ts` ичиндеги белгилүү көйгөйлөр таблицасы англисче калат жана
 *     `../en/known-issues.generated` модулунан импорттолот — түркчө бет да
 *     ушундай кылат жана себеби бирдей: колго которулган көчүрмө биринчи жогорку
 *     агым оңдоосунда унчукпай эскирет.
 *   - `features.ts` англисчеде жок бир `callout` алып жүрөт: браузердин
 *     интерфейсинде кыргыз тили ЖОК. Кыргызча сайт кыргызча продуктту
 *     билдирбейт жана бул айырманы айтпай коюу — бул сайттын өзү каршы турган
 *     тымызын жалган болмок.
 */
export const KY_PAGES: Record<RouteKey, PageContent> = {
  home,
  howItWorks,
  features,
  extensions,
  security,
  privacy,
  networkPrivacy,
  download,
  openSource,
  story,
  roadmap,
  compare,
  turkey,
  help,
  blog,
  blogScreenshot,
  releases,
  legalPrivacy,
  legalTerms,
  legalLicense,
};

/**
 * Башкы жана аяккы навигация үчүн кыска белгилер.
 *
 * `turkey` — «Түркия», өлкөнүн кыргызча аты. `blogScreenshot` — жазуунун
 * аталышы, навигация сөзү эмес; үч тилде тең ошондой.
 */
export const KY_NAV_LABELS: NavLabels = {
  home: 'Башкы бет',
  howItWorks: 'Кантип иштейт',
  features: 'Мүмкүнчүлүктөр',
  extensions: 'Кеңейтүүлөр',
  security: 'Коопсуздук',
  privacy: 'Купуялык',
  networkPrivacy: 'Тармак купуялыгы',
  download: 'Жүктөп алуу',
  openSource: 'Ачык код',
  story: 'Тарых',
  roadmap: 'Жол картасы',
  compare: 'Салыштыруу',
  turkey: 'Түркия',
  help: 'Жардам',
  blog: 'Куруу журналы',
  blogScreenshot: 'Туура эмес экранды тарткан экран сүрөтү',
  releases: 'Чыгарылыштар',
  legalPrivacy: 'Купуялык саясаты',
  legalTerms: 'Шарттар',
  legalLicense: 'Лицензия',
};
