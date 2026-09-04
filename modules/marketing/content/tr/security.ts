import type { PageContent } from '@/types/content';
import { REPO_FILES, SITE } from '@/libs/config/site';

/**
 * Source: tepegoz-browser/docs/website/security.md (status: ready) @sourceSha256 a80696d9 (2026-09-02)
 *
 * Türkçe çeviri. Kaynak `../en/security.ts`.
 */
export const security: PageContent = {
  route: '/security',
  title: 'Güvenlik — Tepegöz',
  description:
    'Tepegöz özerk bir ajanı sınırda nasıl tutuyor: belirlenimci kurallar, güvenilmez bir görüntüleyici, kapalı-arıza bir çekirdek — ve neyi kanıtlamadı.',
  status: 'ready',

  hero: {
    eyebrow: 'Güvenlik',
    headline: 'Oturumunuzu kullanan bir ajan bir güvenlik sorunudur. Biz önce bunun için inşa ettik.',
    subhead:
      'Tepegöz güvenilmez içeriği görüntüler ve bir modelin, oturumunuzun açık olduğu sayfalarda davranmasına izin verir. Aşağıdaki her şey, bu birleşim tehlikeli olduğu ve piyasadaki birkaç ürün bunun nasıl bozulduğunu çoktan kanıtladığı için vardır.',
  },

  sections: [
    {
      id: 'premise',
      eyebrow: 'Öncül',
      heading: 'Model bir güvenlik denetimi değildir. Kurallar öyledir.',
      blocks: [
        {
          kind: 'prose',
          body: [
            'Bir dil modeline tarayıcınızı verdiğinizde ona kimliğinizi vermiş olursunuz — oturumu açık postanızı, bankanızı, bulut depolamanızı, parola yöneticinizi. Artık modelin muhakemesi bir güvenlik denetimidir ve kötü bir denetimdir: bir web sayfası onunla tartışabilir.',
            'Bu yüzden Tepegöz’de model bir güvenlik denetimi değildir. **Kurallar öyledir.** Belirlenimci bir çekirdek, bir araç çağrısının neye izinli olduğuna modele danışılmadan önce karar verir ve modelin görüşü bu kararı genişletemez.',
          ],
        },
      ],
    },

    {
      id: 'decisions',
      eyebrow: 'Mimari',
      heading: 'Yükü taşıyan beş karar.',
      blocks: [
        {
          kind: 'cards',
          columns: 2,
          items: [
            {
              title: 'Görüntüleyici süreç güvenilmezdir',
              body: 'Baktığınız pencere, içindeki sayfa tarafından yönlendirilebilir; bu yüzden ona hiçbir yetki verilmez. Gösterir ve iletir. Özerklik düzeyi, izin denetimleri ve onaylar, ayrıcalıklı süreçte, görüntüleyicinin ulaşamayacağı bir duruma karşı değerlendirilir. Bir şeyi onaylamaya çalışan ele geçirilmiş bir görüntüleyici bir kurala karşı gelmiyordur — dinlemeyecek bir sürece soruyordur.',
            },
            {
              title: 'Her araç çağrısı model çalışmadan önce sınıflandırılır',
              body: 'Araçtan, doğrulanmış argümanlarından ve hedefinden türetilen altı katman: **okuma**, **arayüz yazma**, **veri çıkışı**, **finansal**, **kimlik bilgisi**, **yıkıcı**. Sonrasına katman karar verir. Paraya, sırlara ya da silmeye dokunan bir adım, zekice bir ifadeyle kendiliğinden onaylanmış hâle getirilemez; çünkü o ifade karara hiç ulaşmaz.',
            },
            {
              title: 'Sayfa içeriği veridir, asla talimat değil',
              body: 'Bir sayfanın döndürdüğü her şey, girdiği sınırda normalleştirilir ve taranır — enjekte edilmiş komutlar, sahte sistem işaretleri ve bilinen dağarcığın geri kalanı. Piyasadaki rakipleri deviren saldırı sınıfı budur: bir web sayfasındaki gizli bir talimatın, ajan tarafından kullanıcısından gelen bir emir olarak okunması.',
            },
            {
              title: 'Sırlar modele hiç ulaşmaz',
              body: 'Kimlik bilgileri şifreli bir kasada durur ve bir aracı tarafından doldurulur. Model bir oturum açma işleminin yapılmasını isteyebilir; parolayı isteyemez ve bir parolayı hiç görmez. Anahtarlar yalnızca ayrıcalıklı süreçte tutulur, işletim sisteminin anahtar zinciriyle şifrelenir ve günlüklerden çıkarılır.',
            },
            {
              title: 'Kapalı arızalanır',
              body: 'Bir politika, bir yetenek denetimi ya da bir ağ bağlaması bir karara ulaşamadığında yanıt hayırdır. Düşen bir tünele bağlı bir sekme, sessizce gerçek bağlantınıza dönmek yerine çalışmayı durdurur — size sorulsaydı isteyeceğiniz sonuç budur ve sorulamadığında tek makul varsayılan da budur.',
            },
          ],
        },
      ],
    },

    {
      id: 'unlock',
      eyebrow: 'Anahtarlar kimde',
      heading: 'Yalnızca sizin açabilecekleriniz.',
      lede: 'Tehlikeli yetenekler mevcut. Hiçbiri açık değil ve hiçbiri ajan tarafından açılamaz.',
      blocks: [
        {
          kind: 'list',
          variant: 'check',
          items: [
            '**Hassas kategoriler kapalı gelir** — bankacılık, kripto, sağlık, parola yöneticileri; Türk bankacılığı ve bütün `gov.tr` ağacı dâhil. Her biri, bilerek verdiğiniz ayrı bir izindir. Hiçbir özerklik düzeyi sizin yerinize birini açmaz ve ajanın birini kendi başına açacak bir yolu yoktur.',
            '**Harcama, sizin yazdığınız bir yetkiyle sınırlanır.** Cüzdan, tavan, alıcılar ve son kullanma tarihi sizindir; koşudan önce kaydedilir ve ayrıcalıklı süreçte uygulanır. Ajan bu yetkinin içinde harcayabilir, onu genişletemez.',
            '**Ajan kendi izinlerini genişletemez.** İzinler sizin onayladığınız bir plandan üretilir, o plandaki alan adları ve araç sınıflarıyla kapsanır ve koşu bittiğinde sona erer.',
            '**Etkin bir yetkinin dışındaki geri alınamaz eylemler**, ne olacağını adıyla söyleyen belirli bir onay gerektirir.',
          ],
        },
        {
          kind: 'callout',
          tone: 'info',
          title: 'İzin, özerklik düzeyi değildir.',
          body: [
            'Özerklik düzeyi, ajanın altında koştuğu bir duruştur; izin ise sizin yazdığınız belirli ve geri alınabilir bir yetkilendirmedir. Özerklik, çekirdeğin çıkardığı bir istemi atlayabilir — ama bir reddi yine de tersine çeviremez. Bunu yalnızca bir izin yapabilir ve izinler bant dışında oluşturulur; asla ajan tarafından ve asla koşunun ortasında değil.',
          ],
        },
      ],
    },

    {
      id: 'incidents',
      eyebrow: 'Öncekiler',
      heading: 'Başkalarının olaylarından öğrenmek.',
      blocks: [
        {
          kind: 'prose',
          body: [
            'Ajanlı tarayıcı kategorisinin herkese açık bir başarısızlık sicili var ve okuması kısa sürüyor. Gerçek eylemleri süren dolaylı istem enjeksiyonu. Bir parola yöneticisinin kasasını okumaya ikna edilen bir ajan. Bağlı bulut depolamadaki dosyaları silen, sıfır tıklamalı bir talimat. Oturumu açık ekranları yakalayıp bir sunucuya gönderen ekran görüntüleri.',
            `Tepegöz bunların her birini bir manşet olarak değil, bir test durumu olarak ele alıyor. Yayımlanmış olaylar, tarayıcının kalmak zorunda olduğu düşmanca senaryolara çevriliyor — çünkü kendisi olmadan başarısız olan bir senaryosu bulunmayan bir savunma, bir denetim değil bir varsayımdır. Olaylardan türeyen iş kalemleri açıkta izleniyor: [güvenlik fazı](${REPO_FILES.safetyPhase}). Tehdit modelinin tamamı [tehdit modeli](${REPO_FILES.threatModel}) adresinde, bilinen sorunlar ise [bilinen sorunlar](${REPO_FILES.knownIssues}) adresinde yayımlanıyor.`,
          ],
        },
      ],
    },

    {
      id: 'reporting',
      eyebrow: 'Bildirim',
      heading: 'Bir güvenlik açığı bildirmek.',
      lede: 'Güvenlik bildirimleri bu projenin alabileceği en değerli katkıdır ve buna göre ele alınır.',
      blocks: [
        {
          kind: 'callout',
          tone: 'warning',
          title: 'Lütfen herkese açık bir konu açmayın.',
          body: [
            `Depodaki [GitHub özel güvenlik açığı bildirimini](${REPO_FILES.privateVulnReport}) kullanın ya da konu satırında \`${SITE.securitySubjectTag}\` etiketiyle \`${SITE.securityContact}\` adresine yazın.`,
          ],
        },
        {
          kind: 'table',
          caption: 'Bildirim taahhütleri',
          head: ['Aşama', 'Taahhüt'],
          rows: [
            ['Alındı bilgisi', '**5 gün** içinde'],
            ['İlk değerlendirme', '**14 gün** içinde'],
            ['Ana dalda düzeltme', 'Elden gelenin en iyisi, herkese açık izlenir'],
            ['Eşgüdümlü açıklama', 'Varsayılan **90 günlük** pencere'],
            ['Ödül programı', 'Yok'],
            ['Teşekkür', 'Anonim kalmayı tercih etmiyorsanız verilir'],
          ],
        },
        {
          kind: 'prose',
          body: [
            'Bunlar, tek bir geliştiricinin dürüstçe taahhüt edebileceği ölçüde yazılmıştır. Bu politika kapsamındaki iyi niyetli araştırma yetkilidir ve bu proje bu nedenle hukuki yola başvurmaz.',
            `**Politikanın tamamı, kapsam ve güvenli liman** → [SECURITY.md](${REPO_FILES.securityPolicy})`,
          ],
        },
      ],
    },
  ],

  closing: {
    heading: 'Sözümüze güvenmek yerine okuyun.',
    ctas: [
      { label: 'Tehdit modelini okuyun', href: REPO_FILES.threatModel, variant: 'primary', external: true },
      { label: 'Kodu görün', href: SITE.repo, variant: 'outline', external: true },
    ],
  },
};
