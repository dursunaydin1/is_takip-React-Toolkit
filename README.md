<h1># İş Takip Uygulaması</h1></br>

<h4>Bu proje, iş başvurularını takip etmek için kullanılan bir iş takip uygulamasıdır. Kullanıcılar yeni işler ekleyebilir, mevcut işleri listeleyebilir ve işleri filtreleyebilirler.</h4></br>

<h1>## Özellikler</h1></br>

- Yeni iş ekleme: Kullanıcılar pozisyon, şirket, lokasyon, durum, tür ve tarih bilgilerini girerek yeni bir iş ekleyebilirler.</br>
- İşleri listeleme: Kullanıcılar eklenen işleri listeleyebilirler. Listelenen işler, şirket adı, pozisyon, lokasyon, tür ve durum bilgilerini içerir.</br>
- İşleri filtreleme: Kullanıcılar işleri durum ve tür gibi özelliklere göre filtreleyebilirler.</br>
- Arama yapma: Kullanıcılar şirket adına göre işleri arayabilirler.</br>
- Sıralama: Kullanıcılar işleri şirket adına göre A'dan Z'ye veya Z'den A'ya sıralayabilirler.</br>
- Filtreleri temizleme: Kullanıcılar tüm filtreleri temizleyerek orijinal iş listesine dönebilirler.</br>

<h1>## Veri Saklama</h1>

Bu uygulama, verileri `db.json` dosyasında saklamaktadır. İşlerin eklenmesi ve listelenmesi bu dosya üzerinden gerçekleşir. İşlem yapılırken, Axios kütüphanesi kullanılarak HTTP istekleri gönderilir ve bu dosya üzerinde işlemler yapılır.</br>

Yeni bir iş eklenmek istendiğinde, kullanıcı tarafından girilen veriler `POST` isteği ile `db.json` dosyasına gönderilir ve dosyaya kaydedilir. İşler listelendiğinde ise `GET` isteği ile `db.json` dosyasından veriler çekilir ve kullanıcıya gösterilir.</br>

<h1>## Kullanılan Teknolojiler</h1></br>

- React: Kullanıcı arayüzü oluşturmak için kullanılan JavaScript kütüphanesi.</br>
- Redux: Uygulama durumunu yönetmek için kullanılan durum yönetim kütüphanesi.</br>
- React Router: Sayfalar arası gezinme için kullanılan React kütüphanesi.</br>
- Axios: HTTP istekleri göndermek için kullanılan bir kütüphane.</br>
- react-toastify: Bildirim mesajlarını görüntülemek için kullanılan bir React bileşeni.</br>
- SCSS: Stil sayfalarını oluşturmak için kullanılan CSS önprosesörü.</br>

<h1><a href="">## Canlı Önizleme</a></h1>
<img src="./public/images/screen.gif" alt="">
