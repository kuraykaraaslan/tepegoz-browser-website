import type { PageContent } from '@/types/content';
import { REPO_FILES } from '@/libs/config/site';

/**
 * Source: tepegoz-browser/docs/website/blog/the-screenshot-that-captured-the-wrong-screen.md
 * @sourceSha256 46e411fd (2026-09-02)
 * (status: ready)
 *
 * Türkçe çeviri. Kaynak `../en/blog-screenshot.ts`. İlk yayımlanan yazı ve
 * birinci tekil şahısla yazılan ilk metin — bu tek geliştiricili bir proje ve
 * yapım günlüğü bir kişinin notlarından ibaret. Çeviride de birinci tekil
 * korunur; bir kişinin anlattığı bir hatayı kurumsal çoğula çevirmek, yazının
 * kendisini bozar.
 *
 * Rotanın kendisi bilerek İngilizce kalır: `/blog/the-screenshot-that-captured-
 * the-wrong-screen` her iki dilde aynı `RouteKey`tir ve yalnızca dil öneki
 * değişir.
 */
export const blogScreenshot: PageContent = {
  route: '/blog/the-screenshot-that-captured-the-wrong-screen',
  title: 'Yanlış ekranı çeken ekran görüntüsü — Tepegöz',
  description:
    'Tarayıcım kendi ekran görüntüsünü alamıyor. Bariz geçici çözüm iki kez kendi masaüstümü çekti, ben de onu silip işi düzgün yaptım.',
  status: 'ready',

  hero: {
    eyebrow: 'Yapım günlüğü · birinci tekil',
    headline: 'Yanlış ekranı çeken ekran görüntüsü.',
    subhead:
      'Tarayıcım kendi ekran görüntüsünü alamıyor. Bariz geçici çözüm iki kez kendi masaüstümü çekti, ben de onu silip işi düzgün yaptım.',
    ctas: [{ label: 'Yapım günlüğüne dön', href: '/blog', variant: 'outline' }],
  },

  sections: [
    {
      id: 'afternoon',
      heading: 'İş bir öğleden sonralık görünüyordu.',
      blocks: [
        {
          kind: 'prose',
          body: [
            'Pazarlama sitesinin tarayıcının resimlerine ihtiyacı vardı. Tarayıcı bende. Onu başlatan bir test düzeneğim var — uçtan uca takım, her gönderimde üç platformda yapılmış uygulamayı sürüyor. Al bir iki ekran görüntüsü.',
            'İlk çekim, çerçevesi kusursuz işlenmiş hâlde geri geldi — sekme şeridi, adres çubuğu, yer imleri çubuğu — ve web sayfasının olması gereken yerde gri bir dikdörtgen.',
          ],
        },
      ],
    },

    {
      id: 'invisible-tabs',
      heading: 'Her sekme, göremediğiniz bir penceredir.',
      blocks: [
        {
          kind: 'prose',
          body: [
            `Tepegöz her sekmeye kendi yalıtılmış \`WebContentsView\`ini verir. Bu [ADR-0012](${REPO_FILES.tabModelAdr})’dir ve bilinçlidir: ele geçirilmiş bir sayfa başka bir sekmenin içine uzanamaz, çünkü aynı yerde değildir. Bir sayfanın çökmesinin pencereyi de götürmemesinin nedeni de budur.`,
            'ADR’ye kimsenin yazmadığı sonuç şu: bu görünümler, **barındıran pencerenin kendi `webContents`inin dışında**, birleştirici tarafından birleştirilir. Yani Playwright’ın `page.screenshot()`’ı görüntüleyiciyi görür, görüntüleyici çerçeveyi çizer ve sayfa görüntüleyicide değildir. Electron’un `BrowserWindow.capturePage()`’i de aynı nedenle aynı şeyi görür.',
            'İkisi de içinde hiçbir şey olmayan bir tarayıcının resmini döndürür. Sekmeleri güvenli kılan yalıtım, onları bariz iki yakalama arayüzüne görünmez kılan yalıtımdır.',
            'Dâhilî `tepegoz://` sayfaları — ayarlar, uzantılar, indirmeler — görüntüleyici penceresinde işlenir ve düzgün yakalanır. İlk kullanılabilir ekran görüntülerimin hepsinin dâhilî sayfalardan olmasının nedeni budur. Bu bir yayın tercihi değildi. İşe yarayan tek şeydi.',
          ],
        },
      ],
    },

    {
      id: 'workaround',
      heading: 'Geçici çözüm ve şu anda neden silinmiş olduğu.',
      blocks: [
        {
          kind: 'prose',
          body: [
            'Sayfayı işletim sistemi birleştiriyorsa, işletim sisteminden yakala. Pencereyi bul, dikdörtgenini oku, o pikselleri ekrandan kopyala. Otuz satır PowerShell. Pencereyi başlığına göre eşleştiriyordu.',
            'Açık başka bir tarayıcım vardı ve orada bu projenin adını taşıyan bir sekme duruyordu. Yakalama **o** pencereyi aldı: açık sekmelerim, yer imleri çubuğum, profil resmim. Doğrudan, herkese açık bir pazarlama sayfasına gidecek dosyaların klasörüne.',
            'Düzeltme bariz görünüyordu — başlık yerine süreç kimliğine göre eşleştir. Bu daha iyi bir tanımlayıcı ve yine de yanlıştı. `CopyFromScreen` bir pencereyi kopyalamaz. Ekranın bir dikdörtgenini kopyalar ve o dikdörtgenin önünde ne varsa dosyaya inen odur. Kod önce `SetForegroundWindow` çağırıyor ve Windows ön plana getirmeyi reddetme hakkına sahip — bunu sıklıkla yapıyor da, üstelik onu iyi bir kural yapan aynı kaçırma karşıtı nedenlerle. İkinci çekim, kendi masaüstümde oynayan bir videoyla geri geldi.',
            'İki çekim, birinin ekranından bir pazarlama varlığında işi olmayan iki ayrı parça. Hiçbiri yayımlanmadı. İkisi de bakıldıktan bir dakika sonra silindi; bu hikâyenin doğru giden tek kısmı budur ve doğru gitmesinin tek nedeni bakmış olmamdır.',
            '**Ders "pencereleri daha dikkatli eşleştir" değildir.** Ders şudur: _ekran_ yakalama ile _pencere_ yakalama farklı işlemlerdir ve kare arabelleğini okuyan bir arayüz, hangi dikdörtgeni istediğinize daha çok dikkat ederek ikincisine dönüştürülemez. Arıza kipi "insanın o sırada ne yaptığını sessizce yakalamak" olan bir araç, ne kadar dikkatli olunursa olunsun otomatik bir hatta ait değildir.',
          ],
        },
      ],
    },

    {
      id: 'works',
      heading: 'Gerçekte ne işe yarıyor.',
      blocks: [
        {
          kind: 'prose',
          body: [
            'Electron doğru ilkel yapıyı zaten sunuyor. `desktopCapturer` yakalama kaynaklarını sıralar ve kimlikler döndürür; bir `BrowserWindow` da size kendi `getMediaSourceId()`ini söyleyebilir. Birini diğeriyle eşleştirin, sonucu `setDisplayMediaRequestHandler`’a verin ve görüntüleyicideki `getDisplayMedia`, birleştirilmiş görünümler dâhil **o pencerenin** akışını döndürsün — üstelik Electron’un kendi hakkında verdiği bir tanımlayıcıyla çözülmüş olarak. Ortada ne bir dikdörtgen ne de bir ön plan var. Birinin masaüstüne kayamaz, çünkü hiçbir noktada masaüstünde ne olduğunu sormaz.',
          ],
        },
        {
          kind: 'callout',
          tone: 'info',
          title: 'Zaman kaybettiren iki ayrıntı',
          body: [
            'Uygulama oturumlarını sertleştiriyor: her web içeriği oluşturulurken üzerine varsayılan-reddet ilkeli bir izin işleyicisi kuruluyor, dolayısıyla iznin **çerçeve penceresinin kendi bölüm oturumuna** verilmesi gerekiyor — devredeki `defaultSession` değil ve oraya vermek sessizce başarısız oluyor.',
            '`callback({ video: theWindow })` yeterli değil. İşleyici bir `BrowserWindow` değil, `desktopCapturer`’dan gelen bir kaynak nesnesi istiyor. Bunu yanlış yapınca aldığınız hata `Invalid capture constraints` oluyor; doğru bir ifade ve size hiçbir şey söylemiyor.',
          ],
        },
        {
          kind: 'prose',
          body: [
            'Çıktı, tarayıcı çerçevesini ve canlı sayfayı aynı karede içeren bir WebM — yani önceki iki yöntemin hiçbirinin üretemediği şey.',
          ],
        },
      ],
    },

    {
      id: 'still-broken',
      heading: 'Ve hâlâ çalışmayan kısım.',
      blocks: [
        {
          kind: 'prose',
          body: [
            'Bütün bunların nedeni, ajanın bir görevi tamamlamasını kaydetmekti; çünkü ana sayfa yazıldığından beri, sabit bir görüntünün bir tarayıcıya cıvatalanmış sohbet paneli ile sekmeleri süren bir ajan arasındaki farkı gösteremeyeceğini ve yerine bir maket konmayacağını söylüyor.',
            'Yakalama çözüldü. Kayıt çözülmedi. Ajana komut paletinin **Yap** kipi üzerinden bir hedef vermek, metni komut süzgecinde bırakıyor — _"Eşleşen komut yok"_ — ve Enter hiçbir koşu başlatmıyor. Doksan saniyelik, hiçbir şey yapmayan bir uygulama videosu.',
            `Yani hâlâ ajanın çalıştığına dair bir kayıt yok ve ana sayfa da bunu söylemeye devam ediyor. Elimde olan şu: gönderim yolu oturur oturmaz kaydı üretecek [bir düzenek](${REPO_FILES.recordAgentScript}), kaydı üretmenin kimseye bir API anahtarına mal olmamasını sağlayan cihaz üstü bir model ve betiğin kendi başlığında, onu çalıştıran herkese bugünkü çıktısının ajanın değil uygulamanın kaydı olduğunu söyleyen bir not.`,
            'Bu, o öğleden sonranın üretmesi gereken sonuçtan küçük bir sonuç. Elime geçen buydu.',
          ],
        },
      ],
    },
  ],

  closing: {
    heading: 'Yapım günlüğünden dahası.',
    ctas: [
      { label: 'Yapım günlüğüne dön', href: '/blog', variant: 'primary' },
      { label: 'Dürüst durum', href: '/roadmap', variant: 'outline' },
    ],
  },
};
