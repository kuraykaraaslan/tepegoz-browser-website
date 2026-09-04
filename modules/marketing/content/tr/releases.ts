import type { PageContent } from '@/types/content';
import { REPO_FILES, SITE } from '@/libs/config/site';

/**
 * Source: tepegoz-browser/docs/website/release-notes.md (status: ready)
 * @sourceSha256 10cf244f (2026-08-23)
 *
 * Türkçe çeviri. Kaynak `../en/releases.ts`. Henüz sürüm yok, dolayısıyla bu
 * sayfa boş hâliyle yayımlanır ve ilk etiketle birlikte gerçek bir listeye
 * dönüşür. Örnek girdi ya da temsilî sürüm numarası konmaz.
 *
 * BİLİNEN ÇELİŞKİ, bilerek duruyor: `/download` "imzalı yapılar" derken bu
 * sayfa hiç sürüm olmadığını söylüyor ve depoda `v*` etiketi yok. İkisi aynı
 * anda doğru olamaz. Hangisinin düzeltileceği — indirme iddiasını yumuşatmak mı,
 * etiketi çıkarmak mı — bir metin düzenlemesi değil, gerçekte ne söz verildiğine
 * dair bir sahip kararıdır; İngilizce dosyada olduğu gibi burada da çözülmek
 * yerine kaydedilir.
 */
export const releases: PageContent = {
  route: '/releases',
  title: 'Sürümler — Tepegöz',
  description:
    'Her Tepegöz sürümü, neyin değiştiği ve o sürümde neyin bozuk olduğu bilinen. Bir değişiklik günlüğü ayrıştırıcısı için değil, insanlar için yazıldı.',
  status: 'ready',

  hero: {
    eyebrow: 'Sürümler',
    headline: 'Henüz sürüm yok.',
    subhead:
      'Tepegöz henüz etiketlenmedi. Etiketlenene kadar çalıştırmanın yolu kaynaktan derlemek — üç komut ve derleyici yok.',
    ctas: [
      { label: 'Derleyin', href: '/download', variant: 'primary' },
      { label: 'İşi takip edin', href: '/blog', variant: 'outline' },
      { label: 'Depoyu izleyin', href: SITE.repo, variant: 'ghost', external: true },
    ],
  },

  sections: [
    {
      id: 'what-to-expect',
      eyebrow: 'İlk etiket geldiğinde',
      heading: 'Her girdinin söyleyecekleri — hâlâ neyin bozuk olduğu dâhil.',
      blocks: [
        {
          kind: 'callout',
          tone: 'warning',
          title: 'Depo etiketlenmedi.',
          body: [
            'Sürüm etiketi yok, dolayısıyla burada indirilecek bir şey ve aşağıda listelenecek bir şey de yok. Bugün Tepegöz’ü çalıştırmanın tek yolu kaynaktan derlemek.',
            'Bu sayfa, durum değişene kadar boş kalır. Örnek bir girdiyle ya da temsilî bir sürüm numarasıyla doldurulmaz: kimsenin kuramayacağı bir sürümü göstermek, buraya doğrulamaya geldiğiniz tek olguyu yanlış yapmak olurdu.',
          ],
        },
        {
          kind: 'prose',
          body: [
            'Buradaki sürüm notları, işleme başlıklarından ayrıştırılmaz; insanlar için yazılır. Her girdi aynı beş başlığı aynı sırayla taşır, böylece doğrudan aradığınız kısma gidebilirsiniz. Beşincisi bilinen sorunlardır ve her girdide bulunur — güncelleyip güncellememeye karar veriyorsanız, hâlâ neyin bozuk olduğu hikâyenin en çok ihtiyacınız olan yarısıdır ve sürüm sayfalarının çoğunun atladığı yarısıdır.',
          ],
        },
        {
          kind: 'list',
          variant: 'plain',
          items: [
            '**Tek cümlede.** Bu sürüm ne için.',
            '**Yeni.** Artık kullanabileceğiniz özellikler, kullanıcı diliyle.',
            '**Düzeltildi.** Neyin bozuk olduğu ve artık olmadığı.',
            '**Güvenlik.** Güvenlik sonucu olan her şey; bir bildirene atfedilen düzeltmeler dâhil. Bir şey yoksa, başlığı atlamak yerine "bu sürümde yok" yazar.',
            '**Bilinen sorunlar.** Bu yapıda neyin hâlâ yanlış olduğu ve varsa geçici çözümü.',
            '**İndirmeler.** Windows `.exe`, macOS `.dmg`, Linux `.deb` `.rpm` `.tar.gz` — imzalı ve noter onaylı, sağlama toplamlarıyla, GitHub sürümünden bağlanmış hâlde.',
          ],
        },
      ],
    },

    {
      id: 'versioning',
      eyebrow: 'Sürümleme ve destek',
      heading: 'Anlamsal sürümleme ve yalnızca en son sürüm.',
      blocks: [
        {
          kind: 'prose',
          body: [
            '1.0 öncesi olmak, arayüzlerin ara sürümler arasında değişebileceği anlamına gelir — ve değişecekler.',
            '**Yalnızca en son sürüm desteklenir.** Geriye taşınan düzeltme ve uzun vadeli destek dalı yoktur.',
          ],
        },
        {
          kind: 'ctas',
          items: [
            { label: 'Katkıda bulunanlar için değişiklik günlüğü', href: REPO_FILES.changelog, variant: 'outline', external: true },
            { label: 'GitHub sürümleri', href: REPO_FILES.releasesLatest, variant: 'ghost', external: true },
          ],
        },
      ],
    },
  ],

  closing: {
    heading: 'O zamana kadar, kaynaktan derleyin.',
    ctas: [
      { label: 'Derleyin', href: '/download', variant: 'primary' },
      { label: 'İşi takip edin', href: '/blog', variant: 'outline' },
    ],
  },
};
