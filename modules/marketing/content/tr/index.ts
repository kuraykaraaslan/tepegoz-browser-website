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
 * Türkçe içerik — `../en/` klasörünün birebir aynası, anahtar anahtar.
 *
 * `docs/website/README.md`: "İngilizce kaynaktır. Türkçe sonradan akla gelen bir
 * şey değil, birinci sınıf bir çeviridir — ama o dosyalardan çevrilir." Yani
 * buradaki her sayfa `../en/` altındaki karşılığından çevrilmiştir ve karşılığın
 * `@sourceSha256` damgasını taşır: yukarı akıştaki belge değiştiğinde
 * `scripts/sources-check.mjs` iki dosyayı da adıyla bildirir, yalnızca
 * İngilizcesini değil.
 *
 * İki bilinçli istisna, ikisi de kendi dosyasında gerekçesiyle kayıtlı:
 *
 *   - `turkey.ts` çeviri değil, ASLIDIR. Kaynak belgenin kendi notu böyle
 *     istiyor: o sayfada Türkçe sürüm özgün, İngilizce sürüm ise durumu
 *     dışarıdan bir okura açıklayan metindir.
 *   - `roadmap.ts` içindeki bilinen sorunlar tablosu İngilizce kalır ve
 *     `../en/known-issues.generated` modülünden içe aktarılır. Üretilmiş modülün
 *     kendi başlığı bunu söylüyor: tablo, ürün deposunda İngilizce yazılmış
 *     mühendislik cümleleridir ve elle çevrilmiş bir kopya ilk yukarı akış
 *     düzenlemesinde sessizce bayatlar. Sayfa, tablonun neden İngilizce
 *     olduğunu okura ayrıca söyler.
 */
export const TR_PAGES: Record<RouteKey, PageContent> = {
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
 * Başlık ve alt bilgi gezinmesi için kısa etiketler.
 *
 * `blogScreenshot` etiketi yazının başlığıdır, bir gezinme sözcüğü değil; iki
 * dilde de öyle. `turkey` her iki dilde "Türkiye" kalır — bir yer adı çevrilmez.
 */
export const TR_NAV_LABELS: NavLabels = {
  home: 'Ana sayfa',
  howItWorks: 'Nasıl çalışır',
  features: 'Özellikler',
  extensions: 'Uzantılar',
  security: 'Güvenlik',
  privacy: 'Mahremiyet',
  networkPrivacy: 'Ağ mahremiyeti',
  download: 'İndir',
  openSource: 'Açık kaynak',
  story: 'Hikâye',
  roadmap: 'Yol haritası',
  compare: 'Karşılaştırma',
  turkey: 'Türkiye',
  help: 'Yardım',
  blog: 'Yapım günlüğü',
  blogScreenshot: 'Yanlış ekranı çeken ekran görüntüsü',
  releases: 'Sürümler',
  legalPrivacy: 'Gizlilik politikası',
  legalTerms: 'Koşullar',
  legalLicense: 'Lisans',
};
