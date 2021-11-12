import React, { useState, useEffect } from 'react'
import Footer from './Footer';
import { toast } from "react-toastify";
import XCard from './XCard';


toast.configure()
const Basket = () => {
    const [productList] = useState([
        {
            "id": "1665700",
            "variantGroupId": "1665700",
            "images": "https://core.rtbs.io/user/action/6ad47403c22043a795e973c7ec83dcc7/rbs.storage.get.GET_IMAGE?auth=&data=eyJpbWFnZUlkIjoiOTdkM2M3ZWEtNTUzNC00MWU0LWI1ZGUtYjllNmE2OWFlOWIwIiwid2lkdGgiOjQwMCwiaGVpZ2h0Ijo0MDAsImZpdCI6Im91dHNpZGUiLCJjb250ZW50VHlwZSI6ImltYWdlL3dlYnAiLCJxdWFsaXR5IjozMH0&platform=WEB&",
            "attributes": [
                {
                    "attType": "LIST",
                    "fieldName": "categories",
                    "fieldNameLabel": "Kategoriler",
                    "valueLabel": "",
                    "value": "",
                    "listValue": ["GIDA-OF7AC", "ATISTIRMALIK-N5RUF", "GOFRET-9D5RP"],
                    "listValueLabel": ["GIDA", "Atıştırmalık", "Gofret"],
                    "badges": []
                },
                {
                    "attType": "TEXT",
                    "fieldName": "shortName",
                    "fieldNameLabel": "shortName",
                    "valueLabel": "Eti Çikolatalı Gofret 34 g",
                    "value": "Eti Çikolatalı Gofret 34 g"
                },
                {
                    "attType": "KEYWORD",
                    "fieldName": "brand",
                    "fieldNameLabel": "Markalar",
                    "valueLabel": "ETI",
                    "value": "ETI"
                },
                {
                    "attType": "LONG_TEXT",
                    "fieldName": "productDescription",
                    "fieldNameLabel": "productDescription",
                    "valueLabel": "Kullanım Önerileri\nDikkat! Buzdolabına koymayıp, 18-22 C'de muhafaza ediniz. Isıdan, kokudan, nemden uzak tutunuz.\n\nNet Miktar (g/ml)\n34\n\nMenşei\nTÜRKİYE\n\nİçindekiler\nFındıklı Krema %46,9 [Şeker, Bitkisel Yağ (Palm), Maltodekstrin, Fındık Püresi %10,5, Peynir Altı Suyu Tozu (Süt Ürünü), Yağsız Süt Tozu, Yağı Azaltılmış Kakao Tozu, Buğday Unu (Gluten içerir), Emülgatör (Ayçiçek Lesitini), Tuz, Aroma verici], Sütlü Çikolata %33 [Şeker, Kakao Kitlesi, Kakao Yağı, Peynir Altı Suyu Tozu (Süt Ürünü), Yağsız Süt Tozu, Bitkisel Yağ (Palm), Tereyağı (Süt Ürünü), Emülgatör (Ayçiçek Lesitini, Poligliserol Polirisinolat), Aroma verici (Vanilin)], Gofret Yaprağı %20,1 [Buğday Unu (Gluten içerir), Patates Nişastası, Kabartıcılar (Sodyum Hidrojen Karbonat, Sodyum Asit Pirofosfat, Amonyum Hidrojen Karbonat), Tuz, Emülgatör (Ayçiçek Lesitini), Hindistan Cevizi Yağı, Yağı Azaltılmış Kakao Tozu, Maya Ekstraktı]. Sütlü çikolatadaki süt kuru maddesi en az %27, kakao kuru maddesi en az %29' dur.\n\nAlerjen Uyarısı\nFındık Püresi, Peynir Altı Suyu Tozu (Süt Ürünü), Yağsız Süt Tozu, Buğday Unu (Gluten içerir), Peynir Altı Suyu Tozu (Süt Ürünü), Yağsız Süt Tozu, Tereyağı (Süt Ürünü). Eser miktarda Soya Ürünü, Susam ve Yer Fıstığı ve Yumurta içerebilir\n\nSaklama Koşulları\nSerin ve Kuru ortamda muhafaza ediniz\n\nGıda İşletmecisi / Üretici / İthalatçı / Dağıtıcı\nETİ GIDA SAN.ve TİC.A.Ş.",
                    "value": "Kullanım Önerileri\nDikkat! Buzdolabına koymayıp, 18-22 C'de muhafaza ediniz. Isıdan, kokudan, nemden uzak tutunuz.\n\nNet Miktar (g/ml)\n34\n\nMenşei\nTÜRKİYE\n\nİçindekiler\nFındıklı Krema %46,9 [Şeker, Bitkisel Yağ (Palm), Maltodekstrin, Fındık Püresi %10,5, Peynir Altı Suyu Tozu (Süt Ürünü), Yağsız Süt Tozu, Yağı Azaltılmış Kakao Tozu, Buğday Unu (Gluten içerir), Emülgatör (Ayçiçek Lesitini), Tuz, Aroma verici], Sütlü Çikolata %33 [Şeker, Kakao Kitlesi, Kakao Yağı, Peynir Altı Suyu Tozu (Süt Ürünü), Yağsız Süt Tozu, Bitkisel Yağ (Palm), Tereyağı (Süt Ürünü), Emülgatör (Ayçiçek Lesitini, Poligliserol Polirisinolat), Aroma verici (Vanilin)], Gofret Yaprağı %20,1 [Buğday Unu (Gluten içerir), Patates Nişastası, Kabartıcılar (Sodyum Hidrojen Karbonat, Sodyum Asit Pirofosfat, Amonyum Hidrojen Karbonat), Tuz, Emülgatör (Ayçiçek Lesitini), Hindistan Cevizi Yağı, Yağı Azaltılmış Kakao Tozu, Maya Ekstraktı]. Sütlü çikolatadaki süt kuru maddesi en az %27, kakao kuru maddesi en az %29' dur.\n\nAlerjen Uyarısı\nFındık Püresi, Peynir Altı Suyu Tozu (Süt Ürünü), Yağsız Süt Tozu, Buğday Unu (Gluten içerir), Peynir Altı Suyu Tozu (Süt Ürünü), Yağsız Süt Tozu, Tereyağı (Süt Ürünü). Eser miktarda Soya Ürünü, Susam ve Yer Fıstığı ve Yumurta içerebilir\n\nSaklama Koşulları\nSerin ve Kuru ortamda muhafaza ediniz\n\nGıda İşletmecisi / Üretici / İthalatçı / Dağıtıcı\nETİ GIDA SAN.ve TİC.A.Ş."
                },
                {
                    "attType": "LIST",
                    "fieldName": "productFeature",
                    "fieldNameLabel": "Ürün Özelliği",
                    "valueLabel": "",
                    "value": "",
                    "listValue": [],
                    "listValueLabel": [],
                    "badges": []
                },
                {
                    "attType": "LIST",
                    "fieldName": "tags",
                    "fieldNameLabel": "tags",
                    "valueLabel": "",
                    "value": "",
                    "listValue": [],
                    "listValueLabel": [],
                    "badges": []
                },
                {
                    "attType": "TEXT",
                    "fieldName": "longName",
                    "fieldNameLabel": "longName",
                    "valueLabel": "Eti Çikolatalı Gofret 34 g",
                    "value": "Eti Çikolatalı Gofret 34 g"
                }
            ],
            "priceTag": {
                "currency": "TRY",
                "merchantId": "default",
                "values": [],
                "price": 150,
                "priceLabel": "1.50 TL",
                "discountedPrice": 138,
                "discountedPriceLabel": "1.38 TL",
                "discountRate": 8,
                "discountRateLabel": "8"
            },
            "stockStatus": "HIGH",
            "itemType": "SINGLE"
        },
        {
            "id": "1812300",
            "variantGroupId": "1812300",
            "images": "https://core.rtbs.io/user/action/6ad47403c22043a795e973c7ec83dcc7/rbs.storage.get.GET_IMAGE?auth=&data=eyJpbWFnZUlkIjoiNWU4MGU0ZmEtZmUzZi00ZGRlLWFkYmUtZjlmNjZkZDE1N2YwIiwid2lkdGgiOjQwMCwiaGVpZ2h0Ijo0MDAsImZpdCI6Im91dHNpZGUiLCJjb250ZW50VHlwZSI6ImltYWdlL3dlYnAiLCJxdWFsaXR5IjozMH0&platform=WEB&",
            "attributes": [
                {
                    "attType": "LIST",
                    "fieldName": "categories",
                    "fieldNameLabel": "Kategoriler",
                    "valueLabel": "",
                    "value": "",
                    "listValue": ["GIDA-OF7AC", "ATISTIRMALIK-N5RUF", "BISKUVI-0OPUQ"],
                    "listValueLabel": ["GIDA", "Atıştırmalık", "Bisküvi"],
                    "badges": []
                },
                {
                    "attType": "TEXT",
                    "fieldName": "shortName",
                    "fieldNameLabel": "shortName",
                    "valueLabel": "Eti Form Limon Lifli 50 g",
                    "value": "Eti Form Limon Lifli 50 g"
                },
                {
                    "attType": "KEYWORD",
                    "fieldName": "brand",
                    "fieldNameLabel": "Markalar",
                    "valueLabel": "ETI",
                    "value": "ETI"
                },
                {
                    "attType": "LONG_TEXT",
                    "fieldName": "productDescription",
                    "fieldNameLabel": "productDescription",
                    "valueLabel": "\nEti Form Limon Lifli Kepekli Bisküvi 50 g x 24 Adet\n\nEti Form Limon Lifli Kepekli Bisküvi\nNefis limon tadı ile kendinizi formda hissettirecek, yağı %65 azaltılmış Eti Form Limon Lifli Kepekli Bisküvi ile ara öğünlerinize keyif katabilirsiniz.\n\nİçindekiler: Buğday Unu, Bitkisel Yağ (Palm, Ayçiçek, Pamuk, Kanola), Şeker, Oligofruktoz, Kepek %5, Kabartıcılar (Amonyum Hidrojen Karbonat, Sodyum Hidrojen Karbonat), Polidekstroz, İnvert Şeker Şurubu, Limon Lifi %0,6, Doğal Portakal Aroma vericisi.\n\nALLERJEN UYARISI: Glüten içerir. Eser miktarda Süt ürünü içerebilir.\n",
                    "value": "\nEti Form Limon Lifli Kepekli Bisküvi 50 g x 24 Adet\n\nEti Form Limon Lifli Kepekli Bisküvi\nNefis limon tadı ile kendinizi formda hissettirecek, yağı %65 azaltılmış Eti Form Limon Lifli Kepekli Bisküvi ile ara öğünlerinize keyif katabilirsiniz.\n\nİçindekiler: Buğday Unu, Bitkisel Yağ (Palm, Ayçiçek, Pamuk, Kanola), Şeker, Oligofruktoz, Kepek %5, Kabartıcılar (Amonyum Hidrojen Karbonat, Sodyum Hidrojen Karbonat), Polidekstroz, İnvert Şeker Şurubu, Limon Lifi %0,6, Doğal Portakal Aroma vericisi.\n\nALLERJEN UYARISI: Glüten içerir. Eser miktarda Süt ürünü içerebilir.\n"
                },
                {
                    "attType": "LIST",
                    "fieldName": "productFeature",
                    "fieldNameLabel": "Ürün Özelliği",
                    "valueLabel": "",
                    "value": "",
                    "listValue": [],
                    "listValueLabel": [],
                    "badges": []
                },
                {
                    "attType": "LIST",
                    "fieldName": "tags",
                    "fieldNameLabel": "tags",
                    "valueLabel": "",
                    "value": "",
                    "listValue": [],
                    "listValueLabel": [],
                    "badges": []
                },
                {
                    "attType": "TEXT",
                    "fieldName": "longName",
                    "fieldNameLabel": "longName",
                    "valueLabel": "Eti Form Limon Lifli 50 g",
                    "value": "Eti Form Limon Lifli 50 g"
                }
            ],
            "priceTag": {
                "currency": "TRY",
                "merchantId": "default",
                "values": [],
                "price": 175,
                "priceLabel": "1.75 TL",
                "discountedPrice": 149,
                "discountedPriceLabel": "1.49 TL",
                "discountRate": 15,
                "discountRateLabel": "15"
            },
            "stockStatus": "HIGH",
            "itemType": "SINGLE"
        },
        {
            "id": "63000081",
            "variantGroupId": "63000081",
            "images": "https://core.rtbs.io/user/action/6ad47403c22043a795e973c7ec83dcc7/rbs.storage.get.GET_IMAGE?auth=&data=eyJpbWFnZUlkIjoiZDMzMDJjMzAtMDY4Ny00ZWI3LWI2ZDMtM2M3OTM1NGVhYWE2Iiwid2lkdGgiOjQwMCwiaGVpZ2h0Ijo0MDAsImZpdCI6Im91dHNpZGUiLCJjb250ZW50VHlwZSI6ImltYWdlL3dlYnAiLCJxdWFsaXR5IjozMH0&platform=WEB&",
            "attributes": [
                {
                    "attType": "LIST",
                    "fieldName": "categories",
                    "fieldNameLabel": "Kategoriler",
                    "valueLabel": "",
                    "value": "",
                    "listValue": ["GIDA-OF7AC", "ATISTIRMALIK-N5RUF", "BAR-KL7G6"],
                    "listValueLabel": ["GIDA", "Atıştırmalık", "Bar"],
                    "badges": []
                },
                {
                    "attType": "TEXT",
                    "fieldName": "shortName",
                    "fieldNameLabel": "shortName",
                    "valueLabel": "Tadım Yer Fıstıklı Kuruyemiş Bar 30 g",
                    "value": "Tadım Yer Fıstıklı Kuruyemiş Bar 30 g"
                },
                {
                    "attType": "KEYWORD",
                    "fieldName": "brand",
                    "fieldNameLabel": "Markalar",
                    "valueLabel": "TADIM",
                    "value": "TADIM"
                },
                {
                    "attType": "LONG_TEXT",
                    "fieldName": "productDescription",
                    "fieldNameLabel": "productDescription",
                    "valueLabel": "Tadım'ın kuruyemiş sektöründeki sağlık ve kalite anlayışıyla çıkardığı bu ürününün içerisinde 65% oranında yer fıstığı ve kuru meyve, yulaf, pirinç patlakları ve bal bulunuyor. Tadım'ın tüm ürünleri gibi doğal olan Kuruyemiş Bar, doyurucu özelliği ile açlığınızı yatıştırmak için de bire bir. Düşük kalorisiyle kahvaltıda, çocukların beslenme çantalarında, iş yerinizde, toplantılarda, okulda, öğün aralarında, arabada, spordan önce ve sonra, kısacası acıktığınızı hissettiğiniz her anda ve her yerde yanınızda olan Kuruyemiş Bar, sadece Tadım'da.",
                    "value": "Tadım'ın kuruyemiş sektöründeki sağlık ve kalite anlayışıyla çıkardığı bu ürününün içerisinde 65% oranında yer fıstığı ve kuru meyve, yulaf, pirinç patlakları ve bal bulunuyor. Tadım'ın tüm ürünleri gibi doğal olan Kuruyemiş Bar, doyurucu özelliği ile açlığınızı yatıştırmak için de bire bir. Düşük kalorisiyle kahvaltıda, çocukların beslenme çantalarında, iş yerinizde, toplantılarda, okulda, öğün aralarında, arabada, spordan önce ve sonra, kısacası acıktığınızı hissettiğiniz her anda ve her yerde yanınızda olan Kuruyemiş Bar, sadece Tadım'da."
                },
                {
                    "attType": "LIST",
                    "fieldName": "productFeature",
                    "fieldNameLabel": "Ürün Özelliği",
                    "valueLabel": "",
                    "value": "",
                    "listValue": [],
                    "listValueLabel": [],
                    "badges": []
                },
                {
                    "attType": "LIST",
                    "fieldName": "tags",
                    "fieldNameLabel": "tags",
                    "valueLabel": "",
                    "value": "",
                    "listValue": [],
                    "listValueLabel": [],
                    "badges": []
                },
                {
                    "attType": "TEXT",
                    "fieldName": "longName",
                    "fieldNameLabel": "longName",
                    "valueLabel": "Tadım Yer Fıstıklı Kuruyemiş Bar 30 g",
                    "value": "Tadım Yer Fıstıklı Kuruyemiş Bar 30 g"
                }
            ],
            "priceTag": {
                "currency": "TRY",
                "merchantId": "default",
                "values": [],
                "price": 200,
                "priceLabel": "2.00 TL",
                "discountedPrice": 170,
                "discountedPriceLabel": "1.70 TL",
                "discountRate": 15,
                "discountRateLabel": "15"
            },
            "stockStatus": "HIGH",
            "itemType": "SINGLE"
        },
        {
            "id": "7830660X",
            "variantGroupId": "7830660X",
            "images": "https://core.rtbs.io/user/action/6ad47403c22043a795e973c7ec83dcc7/rbs.storage.get.GET_IMAGE?auth=&data=eyJpbWFnZUlkIjoiZjljYmY4ZDktMDQ5NC00YTk2LWI1ODQtYmI3YjllOTFmMDNjIiwid2lkdGgiOjQwMCwiaGVpZ2h0Ijo0MDAsImZpdCI6Im91dHNpZGUiLCJjb250ZW50VHlwZSI6ImltYWdlL3dlYnAiLCJxdWFsaXR5IjozMH0&platform=WEB&",
            "attributes": [
                {
                    "attType": "LIST",
                    "fieldName": "categories",
                    "fieldNameLabel": "Kategoriler",
                    "valueLabel": "",
                    "value": "",
                    "listValue": ["GIDA-OF7AC", "DONDURMA-K123P", "TEKLI-G1R2T"],
                    "listValueLabel": ["GIDA", "Dondurma", "Tekli Dondurma"],
                    "badges": []
                },
                {
                    "attType": "TEXT",
                    "fieldName": "shortName",
                    "fieldNameLabel": "shortName",
                    "valueLabel": "Algida Frigola Fındık Çikolata 55 ml",
                    "value": "Algida Frigola Fındık Çikolata 55 ml"
                },
                {
                    "attType": "KEYWORD",
                    "fieldName": "brand",
                    "fieldNameLabel": "Markalar",
                    "valueLabel": "FRIGOLA",
                    "value": "FRIGOLA"
                },
                {
                    "attType": "LONG_TEXT",
                    "fieldName": "productDescription",
                    "fieldNameLabel": "productDescription",
                    "valueLabel": "Algida Frigola içeriğindeki yoğun çikolata lezzeti sayesinde çikolata krizlerinizi en hızlı, hafif ve mutluluk veren bir şekilde atlatabilirsiniz. Eşsiz çikolata kaplaması ile çıtır çıtır bir serinliğe, fındıklı çeşidi ile damağınızda iz bırakacak bir lezzete ulaşabilirsiniz.",
                    "value": "Algida Frigola içeriğindeki yoğun çikolata lezzeti sayesinde çikolata krizlerinizi en hızlı, hafif ve mutluluk veren bir şekilde atlatabilirsiniz. Eşsiz çikolata kaplaması ile çıtır çıtır bir serinliğe, fındıklı çeşidi ile damağınızda iz bırakacak bir lezzete ulaşabilirsiniz."
                },
                {
                    "attType": "LIST",
                    "fieldName": "productFeature",
                    "fieldNameLabel": "Ürün Özelliği",
                    "valueLabel": "",
                    "value": "",
                    "listValue": [],
                    "listValueLabel": [],
                    "badges": []
                },
                {
                    "attType": "LIST",
                    "fieldName": "tags",
                    "fieldNameLabel": "tags",
                    "valueLabel": "",
                    "value": "",
                    "listValue": [],
                    "listValueLabel": [],
                    "badges": []
                },
                {
                    "attType": "TEXT",
                    "fieldName": "longName",
                    "fieldNameLabel": "longName",
                    "valueLabel": "Algida Frigola Fındık Çikolata 55 ml",
                    "value": "Algida Frigola Fındık Çikolata 55 ml"
                }
            ],
            "priceTag": {
                "currency": "TRY",
                "merchantId": "default",
                "values": [],
                "price": 250,
                "priceLabel": "2.50 TL",
                "discountedPrice": 175,
                "discountedPriceLabel": "1.75 TL",
                "discountRate": 30,
                "discountRateLabel": "30"
            },
            "stockStatus": "HIGH",
            "itemType": "SINGLE"
        },
        {
            "id": "21042012",
            "variantGroupId": "21042012",
            "images": "https://core.rtbs.io/user/action/6ad47403c22043a795e973c7ec83dcc7/rbs.storage.get.GET_IMAGE?auth=&data=eyJpbWFnZUlkIjoiYjk3YWUxMzktNGE5ZS00MGM3LWE5NDAtNzlkZmI1NDZkYWM3Iiwid2lkdGgiOjQwMCwiaGVpZ2h0Ijo0MDAsImZpdCI6Im91dHNpZGUiLCJjb250ZW50VHlwZSI6ImltYWdlL3dlYnAiLCJxdWFsaXR5IjozMH0&platform=WEB&",
            "attributes": [
                {
                    "attType": "LIST",
                    "fieldName": "categories",
                    "fieldNameLabel": "Kategoriler",
                    "valueLabel": "",
                    "value": "",
                    "listValue": ["GIDA-OF7AC", "TEMELGIDA-4D592", "CORBA-0PZJV"],
                    "listValueLabel": ["GIDA", "Temel Gıda", "Çorba"],
                    "badges": []
                },
                {
                    "attType": "TEXT",
                    "fieldName": "shortName",
                    "fieldNameLabel": "shortName",
                    "valueLabel": "Knorr Ezogelin Çabuk Çorba 22 g ",
                    "value": "Knorr Ezogelin Çabuk Çorba 22 g "
                },
                {
                    "attType": "KEYWORD",
                    "fieldName": "brand",
                    "fieldNameLabel": "Markalar",
                    "valueLabel": "KNORR",
                    "value": "KNORR"
                },
                {
                    "attType": "LONG_TEXT",
                    "fieldName": "productDescription",
                    "fieldNameLabel": "productDescription",
                    "valueLabel": "Acıktığında Sıcacık Bir Mola! Knorr Ezogelin Çabuk Çorba Her Zaman Yanında. Tek Yapman Gereken En Sevdiğin Kupana Ezogelin Çabuk Çorba ve Bardağın 3/4'ü kadar Kaynar Su Ekleyip Karıştırmak. Sıcacık Ezogelin Çorban 1 DK'da Hazır!",
                    "value": "Acıktığında Sıcacık Bir Mola! Knorr Ezogelin Çabuk Çorba Her Zaman Yanında. Tek Yapman Gereken En Sevdiğin Kupana Ezogelin Çabuk Çorba ve Bardağın 3/4'ü kadar Kaynar Su Ekleyip Karıştırmak. Sıcacık Ezogelin Çorban 1 DK'da Hazır!"
                },
                {
                    "attType": "LIST",
                    "fieldName": "productFeature",
                    "fieldNameLabel": "Ürün Özelliği",
                    "valueLabel": "",
                    "value": "",
                    "listValue": [],
                    "listValueLabel": [],
                    "badges": []
                },
                {
                    "attType": "LIST",
                    "fieldName": "tags",
                    "fieldNameLabel": "tags",
                    "valueLabel": "",
                    "value": "",
                    "listValue": [],
                    "listValueLabel": [],
                    "badges": []
                },
                {
                    "attType": "TEXT",
                    "fieldName": "longName",
                    "fieldNameLabel": "longName",
                    "valueLabel": "Knorr Ezogelin Çabuk Çorba 22 g ",
                    "value": "Knorr Ezogelin Çabuk Çorba 22 g "
                }
            ],
            "priceTag": {
                "currency": "TRY",
                "merchantId": "default",
                "values": [],
                "price": 225,
                "priceLabel": "2.25 TL",
                "discountedPrice": 200,
                "discountedPriceLabel": "2.00 TL",
                "discountRate": 11,
                "discountRateLabel": "11"
            },
            "stockStatus": "HIGH",
            "itemType": "SINGLE"
        },
        {
            "id": "21042007",
            "variantGroupId": "21042007",
            "images": "https://core.rtbs.io/user/action/6ad47403c22043a795e973c7ec83dcc7/rbs.storage.get.GET_IMAGE?auth=&data=eyJpbWFnZUlkIjoiN2I1YWVjZDUtMGQ2MS00M2E3LThmZTctZDFmNGIyZWJmNGEyIiwid2lkdGgiOjQwMCwiaGVpZ2h0Ijo0MDAsImZpdCI6Im91dHNpZGUiLCJjb250ZW50VHlwZSI6ImltYWdlL3dlYnAiLCJxdWFsaXR5IjozMH0&platform=WEB&",
            "attributes": [
                {
                    "attType": "LIST",
                    "fieldName": "categories",
                    "fieldNameLabel": "Kategoriler",
                    "valueLabel": "",
                    "value": "",
                    "listValue": ["GIDA-OF7AC", "TEMELGIDA-4D592", "CORBA-0PZJV"],
                    "listValueLabel": ["GIDA", "Temel Gıda", "Çorba"],
                    "badges": []
                },
                {
                    "attType": "TEXT",
                    "fieldName": "shortName",
                    "fieldNameLabel": "shortName",
                    "valueLabel": "Knorr Acılı Domates Çabuk Çorba 22 g",
                    "value": "Knorr Acılı Domates Çabuk Çorba 22 g"
                },
                {
                    "attType": "KEYWORD",
                    "fieldName": "brand",
                    "fieldNameLabel": "Markalar",
                    "valueLabel": "KNORR",
                    "value": "KNORR"
                },
                {
                    "attType": "LONG_TEXT",
                    "fieldName": "productDescription",
                    "fieldNameLabel": "productDescription",
                    "valueLabel": "Acıktığında Sıcacık Bir Mola! Knorr Acılı Domatesli Çabuk Çorba Her Zaman Yanında. Tek Yapman Gereken En Sevdiğin Kupana Acılı Domatesli Çabuk Çorba ve Bardağın 3/4'ü kadar Kaynar Su Ekleyip Karıştırmak. Sıcacık Acılı Domatesli Çorban 1 DK'da Hazır!",
                    "value": "Acıktığında Sıcacık Bir Mola! Knorr Acılı Domatesli Çabuk Çorba Her Zaman Yanında. Tek Yapman Gereken En Sevdiğin Kupana Acılı Domatesli Çabuk Çorba ve Bardağın 3/4'ü kadar Kaynar Su Ekleyip Karıştırmak. Sıcacık Acılı Domatesli Çorban 1 DK'da Hazır!"
                },
                {
                    "attType": "LIST",
                    "fieldName": "productFeature",
                    "fieldNameLabel": "Ürün Özelliği",
                    "valueLabel": "",
                    "value": "",
                    "listValue": [],
                    "listValueLabel": [],
                    "badges": []
                },
                {
                    "attType": "LIST",
                    "fieldName": "tags",
                    "fieldNameLabel": "tags",
                    "valueLabel": "",
                    "value": "",
                    "listValue": [],
                    "listValueLabel": [],
                    "badges": []
                },
                {
                    "attType": "TEXT",
                    "fieldName": "longName",
                    "fieldNameLabel": "longName",
                    "valueLabel": "Knorr Acılı Domates Çabuk Çorba 22 g",
                    "value": "Knorr Acılı Domates Çabuk Çorba 22 g"
                }
            ],
            "priceTag": {
                "currency": "TRY",
                "merchantId": "default",
                "values": [],
                "price": 225,
                "priceLabel": "2.25 TL",
                "discountedPrice": 200,
                "discountedPriceLabel": "2.00 TL",
                "discountRate": 11,
                "discountRateLabel": "11"
            },
            "stockStatus": "HIGH",
            "itemType": "SINGLE"
        },
        {
            "id": "68611762",
            "variantGroupId": "68611762",
            "images": "https://core.rtbs.io/user/action/6ad47403c22043a795e973c7ec83dcc7/rbs.storage.get.GET_IMAGE?auth=&data=eyJpbWFnZUlkIjoiZjBkYTg4Y2YtYWQ1YS00NWJiLTk0NzItMDE3MDA5MWFiZTQxIiwid2lkdGgiOjQwMCwiaGVpZ2h0Ijo0MDAsImZpdCI6Im91dHNpZGUiLCJjb250ZW50VHlwZSI6ImltYWdlL3dlYnAiLCJxdWFsaXR5IjozMH0&platform=WEB&",
            "attributes": [
                {
                    "attType": "LIST",
                    "fieldName": "categories",
                    "fieldNameLabel": "Kategoriler",
                    "valueLabel": "",
                    "value": "",
                    "listValue": ["GIDA-OF7AC", "TEMELGIDA-4D592", "BAHARAT-4Y3ED"],
                    "listValueLabel": ["GIDA", "Temel Gıda", "Baharatlar"],
                    "badges": []
                },
                {
                    "attType": "TEXT",
                    "fieldName": "shortName",
                    "fieldNameLabel": "shortName",
                    "valueLabel": "Knorr Kuru Nane 25 g",
                    "value": "Knorr Kuru Nane 25 g"
                },
                {
                    "attType": "KEYWORD",
                    "fieldName": "brand",
                    "fieldNameLabel": "Markalar",
                    "valueLabel": "KNORR",
                    "value": "KNORR"
                },
                {
                    "attType": "LONG_TEXT",
                    "fieldName": "productDescription",
                    "fieldNameLabel": "productDescription",
                    "valueLabel": "<p>Özenle toplanan, kurutulan ve öğütülen, el değmeden paketlenen Knorr baharatlar, lezzetini uzun süre koruyan özel paketi ve geri geri dönüştürülebilir ambajıyla şimdi Unishop'ta!<br></p>",
                    "value": "<p>Özenle toplanan, kurutulan ve öğütülen, el değmeden paketlenen Knorr baharatlar, lezzetini uzun süre koruyan özel paketi ve geri geri dönüştürülebilir ambajıyla şimdi Unishop'ta!<br></p>"
                },
                {
                    "attType": "LIST",
                    "fieldName": "productFeature",
                    "fieldNameLabel": "Ürün Özelliği",
                    "valueLabel": "",
                    "value": "",
                    "listValue": [],
                    "listValueLabel": [],
                    "badges": []
                },
                {
                    "attType": "LIST",
                    "fieldName": "tags",
                    "fieldNameLabel": "tags",
                    "valueLabel": "",
                    "value": "",
                    "listValue": [],
                    "listValueLabel": [],
                    "badges": []
                },
                {
                    "attType": "TEXT",
                    "fieldName": "longName",
                    "fieldNameLabel": "longName",
                    "valueLabel": "Knorr Kuru Nane 25 g",
                    "value": "Knorr Kuru Nane 25 g"
                }
            ],
            "priceTag": {
                "currency": "TRY",
                "merchantId": "default",
                "values": [],
                "price": 315,
                "priceLabel": "3.15 TL",
                "discountedPrice": 200,
                "discountedPriceLabel": "2.00 TL",
                "discountRate": 37,
                "discountRateLabel": "37"
            },
            "stockStatus": "HIGH",
            "itemType": "SINGLE"
        },
        {
            "id": "21041980",
            "variantGroupId": "21041980",
            "images": "https://core.rtbs.io/user/action/6ad47403c22043a795e973c7ec83dcc7/rbs.storage.get.GET_IMAGE?auth=&data=eyJpbWFnZUlkIjoiOGYyYzc5ZDItMWFiMS00ZGZjLTgxYWMtMjZlY2RkNDE4Mjg1Iiwid2lkdGgiOjQwMCwiaGVpZ2h0Ijo0MDAsImZpdCI6Im91dHNpZGUiLCJjb250ZW50VHlwZSI6ImltYWdlL3dlYnAiLCJxdWFsaXR5IjozMH0&platform=WEB&",
            "attributes": [
                {
                    "attType": "LIST",
                    "fieldName": "categories",
                    "fieldNameLabel": "Kategoriler",
                    "valueLabel": "",
                    "value": "",
                    "listValue": ["GIDA-OF7AC", "TEMELGIDA-4D592", "CORBA-0PZJV"],
                    "listValueLabel": ["GIDA", "Temel Gıda", "Çorba"],
                    "badges": []
                },
                {
                    "attType": "TEXT",
                    "fieldName": "shortName",
                    "fieldNameLabel": "shortName",
                    "valueLabel": "Knorr Mercimek Çabuk Çorba 22 g",
                    "value": "Knorr Mercimek Çabuk Çorba 22 g"
                },
                {
                    "attType": "KEYWORD",
                    "fieldName": "brand",
                    "fieldNameLabel": "Markalar",
                    "valueLabel": "KNORR",
                    "value": "KNORR"
                },
                {
                    "attType": "LONG_TEXT",
                    "fieldName": "productDescription",
                    "fieldNameLabel": "productDescription",
                    "valueLabel": "Çabuk Çorbalardan Mercimek Çorbası \r\r\r\nMasa lambanı yakmış, kitaplarını açmış çalışıyor musun? Peki, yanında 1’dk da hazır olacak sıcacık bir mercimek çorbası iyi gitmez mi? Tek yapman gereken sıcak su eklemek ve karıştırmak ? İhtiyacın olduğu her an sana eşlik etmek için ben hazırım. Afiyet olsun!\r\r\r\n1 dk'da Hazır Sıcacık 1 Porsiyonluk Çorba",
                    "value": "Çabuk Çorbalardan Mercimek Çorbası \r\r\r\nMasa lambanı yakmış, kitaplarını açmış çalışıyor musun? Peki, yanında 1’dk da hazır olacak sıcacık bir mercimek çorbası iyi gitmez mi? Tek yapman gereken sıcak su eklemek ve karıştırmak ? İhtiyacın olduğu her an sana eşlik etmek için ben hazırım. Afiyet olsun!\r\r\r\n1 dk'da Hazır Sıcacık 1 Porsiyonluk Çorba"
                },
                {
                    "attType": "LIST",
                    "fieldName": "productFeature",
                    "fieldNameLabel": "Ürün Özelliği",
                    "valueLabel": "",
                    "value": "",
                    "listValue": [],
                    "listValueLabel": [],
                    "badges": []
                },
                {
                    "attType": "LIST",
                    "fieldName": "tags",
                    "fieldNameLabel": "tags",
                    "valueLabel": "",
                    "value": "",
                    "listValue": [],
                    "listValueLabel": [],
                    "badges": []
                },
                {
                    "attType": "TEXT",
                    "fieldName": "longName",
                    "fieldNameLabel": "longName",
                    "valueLabel": "Knorr Mercimek Çabuk Çorba 22 g",
                    "value": "Knorr Mercimek Çabuk Çorba 22 g"
                }
            ],
            "priceTag": {
                "currency": "TRY",
                "merchantId": "default",
                "values": [],
                "price": 225,
                "priceLabel": "2.25 TL",
                "discountedPrice": 200,
                "discountedPriceLabel": "2.00 TL",
                "discountRate": 11,
                "discountRateLabel": "11"
            },
            "stockStatus": "HIGH",
            "itemType": "SINGLE"
        },
        {
            "id": "68611766",
            "variantGroupId": "68611766",
            "images": "https://core.rtbs.io/user/action/6ad47403c22043a795e973c7ec83dcc7/rbs.storage.get.GET_IMAGE?auth=&data=eyJpbWFnZUlkIjoiNmQ1OTVjM2ItYzhkNy00ZWU2LWIxYzAtYTAwNTdkM2FmZDg5Iiwid2lkdGgiOjQwMCwiaGVpZ2h0Ijo0MDAsImZpdCI6Im91dHNpZGUiLCJjb250ZW50VHlwZSI6ImltYWdlL3dlYnAiLCJxdWFsaXR5IjozMH0&platform=WEB&",
            "attributes": [
                {
                    "attType": "LIST",
                    "fieldName": "categories",
                    "fieldNameLabel": "Kategoriler",
                    "valueLabel": "",
                    "value": "",
                    "listValue": ["GIDA-OF7AC", "TEMELGIDA-4D592", "BAHARAT-4Y3ED"],
                    "listValueLabel": ["GIDA", "Temel Gıda", "Baharatlar"],
                    "badges": []
                },
                {
                    "attType": "TEXT",
                    "fieldName": "shortName",
                    "fieldNameLabel": "shortName",
                    "valueLabel": "Knorr Kekik 20 g",
                    "value": "Knorr Kekik 20 g"
                },
                {
                    "attType": "KEYWORD",
                    "fieldName": "brand",
                    "fieldNameLabel": "Markalar",
                    "valueLabel": "KNORR",
                    "value": "KNORR"
                },
                {
                    "attType": "LONG_TEXT",
                    "fieldName": "productDescription",
                    "fieldNameLabel": "productDescription",
                    "valueLabel": "<p>Özenle toplanan, kurutulan ve öğütülen, el değmeden paketlenen Knorr baharatlar, lezzetini uzun süre koruyan özel paketi ve geri geri dönüştürülebilir ambajıyla şimdi Unishop'ta!<br></p>",
                    "value": "<p>Özenle toplanan, kurutulan ve öğütülen, el değmeden paketlenen Knorr baharatlar, lezzetini uzun süre koruyan özel paketi ve geri geri dönüştürülebilir ambajıyla şimdi Unishop'ta!<br></p>"
                },
                {
                    "attType": "LIST",
                    "fieldName": "productFeature",
                    "fieldNameLabel": "Ürün Özelliği",
                    "valueLabel": "",
                    "value": "",
                    "listValue": [],
                    "listValueLabel": [],
                    "badges": []
                },
                {
                    "attType": "LIST",
                    "fieldName": "tags",
                    "fieldNameLabel": "tags",
                    "valueLabel": "",
                    "value": "",
                    "listValue": [],
                    "listValueLabel": [],
                    "badges": []
                },
                {
                    "attType": "TEXT",
                    "fieldName": "longName",
                    "fieldNameLabel": "longName",
                    "valueLabel": "Knorr Kekik 20 g",
                    "value": "Knorr Kekik 20 g"
                }
            ],
            "priceTag": {
                "currency": "TRY",
                "merchantId": "default",
                "values": [],
                "price": 350,
                "priceLabel": "3.50 TL",
                "discountedPrice": 200,
                "discountedPriceLabel": "2.00 TL",
                "discountRate": 43,
                "discountRateLabel": "43"
            },
            "stockStatus": "HIGH",
            "itemType": "SINGLE"
        },
        {
            "id": "21042017",
            "variantGroupId": "21042017",
            "images": "https://core.rtbs.io/user/action/6ad47403c22043a795e973c7ec83dcc7/rbs.storage.get.GET_IMAGE?auth=&data=eyJpbWFnZUlkIjoiZGUwZWZkMjktNDcwZS00YzUzLTg0NTktOGUzOGMxZTg3Y2MyIiwid2lkdGgiOjQwMCwiaGVpZ2h0Ijo0MDAsImZpdCI6Im91dHNpZGUiLCJjb250ZW50VHlwZSI6ImltYWdlL3dlYnAiLCJxdWFsaXR5IjozMH0&platform=WEB&",
            "attributes": [
                {
                    "attType": "LIST",
                    "fieldName": "categories",
                    "fieldNameLabel": "Kategoriler",
                    "valueLabel": "",
                    "value": "",
                    "listValue": ["GIDA-OF7AC", "TEMELGIDA-4D592", "CORBA-0PZJV"],
                    "listValueLabel": ["GIDA", "Temel Gıda", "Çorba"],
                    "badges": []
                },
                {
                    "attType": "TEXT",
                    "fieldName": "shortName",
                    "fieldNameLabel": "shortName",
                    "valueLabel": "Knorr Kıtırlı Domates Çabuk Çorba 22 g",
                    "value": "Knorr Kıtırlı Domates Çabuk Çorba 22 g"
                },
                {
                    "attType": "KEYWORD",
                    "fieldName": "brand",
                    "fieldNameLabel": "Markalar",
                    "valueLabel": "KNORR",
                    "value": "KNORR"
                },
                {
                    "attType": "LONG_TEXT",
                    "fieldName": "productDescription",
                    "fieldNameLabel": "productDescription",
                    "valueLabel": "Çabuk Çorbalardan Kıtırlı Domates Çorbası \r\nTelevizyonun karşısına kurulmuş, en sevdiğin progamı mı izliyorsun? Peki, yanında 1’dk da hazır olacak sıcacık bir kıtırlı domates çorbası iyi gitmez mi? Tek yapman gereken sıcak su eklemek ve karıştırmak ? İhtiyacın olduğu her an sana eşlik etmek için ben hazırım. Afiyet olsun!\r\n1 dk'da Hazır Sıcacık 1 Porsiyonluk Çorba",
                    "value": "Çabuk Çorbalardan Kıtırlı Domates Çorbası \r\nTelevizyonun karşısına kurulmuş, en sevdiğin progamı mı izliyorsun? Peki, yanında 1’dk da hazır olacak sıcacık bir kıtırlı domates çorbası iyi gitmez mi? Tek yapman gereken sıcak su eklemek ve karıştırmak ? İhtiyacın olduğu her an sana eşlik etmek için ben hazırım. Afiyet olsun!\r\n1 dk'da Hazır Sıcacık 1 Porsiyonluk Çorba"
                },
                {
                    "attType": "LIST",
                    "fieldName": "productFeature",
                    "fieldNameLabel": "Ürün Özelliği",
                    "valueLabel": "",
                    "value": "",
                    "listValue": [],
                    "listValueLabel": [],
                    "badges": []
                },
                {
                    "attType": "LIST",
                    "fieldName": "tags",
                    "fieldNameLabel": "tags",
                    "valueLabel": "",
                    "value": "",
                    "listValue": [],
                    "listValueLabel": [],
                    "badges": []
                },
                {
                    "attType": "TEXT",
                    "fieldName": "longName",
                    "fieldNameLabel": "longName",
                    "valueLabel": "Knorr Kıtırlı Domates Çabuk Çorba 22 g",
                    "value": "Knorr Kıtırlı Domates Çabuk Çorba 22 g"
                }
            ],
            "priceTag": {
                "currency": "TRY",
                "merchantId": "default",
                "values": [],
                "price": 225,
                "priceLabel": "2.25 TL",
                "discountedPrice": 200,
                "discountedPriceLabel": "2.00 TL",
                "discountRate": 11,
                "discountRateLabel": "11"
            },
            "stockStatus": "HIGH",
            "itemType": "SINGLE"
        },
        {
            "id": "21041975",
            "variantGroupId": "21041975",
            "images": "https://core.rtbs.io/user/action/6ad47403c22043a795e973c7ec83dcc7/rbs.storage.get.GET_IMAGE?auth=&data=eyJpbWFnZUlkIjoiNDJkYzkzZjYtMzJhZi00YjQ5LTgxNjUtYzY1NjFjMDIxMDczIiwid2lkdGgiOjQwMCwiaGVpZ2h0Ijo0MDAsImZpdCI6Im91dHNpZGUiLCJjb250ZW50VHlwZSI6ImltYWdlL3dlYnAiLCJxdWFsaXR5IjozMH0&platform=WEB&",
            "attributes": [
                {
                    "attType": "LIST",
                    "fieldName": "categories",
                    "fieldNameLabel": "Kategoriler",
                    "valueLabel": "",
                    "value": "",
                    "listValue": ["GIDA-OF7AC", "TEMELGIDA-4D592", "CORBA-0PZJV"],
                    "listValueLabel": ["GIDA", "Temel Gıda", "Çorba"],
                    "badges": []
                },
                {
                    "attType": "TEXT",
                    "fieldName": "shortName",
                    "fieldNameLabel": "shortName",
                    "valueLabel": "Knorr Kremalı Tavuk Çabuk Çorba 18 g",
                    "value": "Knorr Kremalı Tavuk Çabuk Çorba 18 g"
                },
                {
                    "attType": "KEYWORD",
                    "fieldName": "brand",
                    "fieldNameLabel": "Markalar",
                    "valueLabel": "KNORR",
                    "value": "KNORR"
                },
                {
                    "attType": "LONG_TEXT",
                    "fieldName": "productDescription",
                    "fieldNameLabel": "productDescription",
                    "valueLabel": "Çabuk Çorbalardan Kremalı Tavuk Çorbası\r\nSırt çantanı takmış, haritan elinde diyar diyar geziyor musun? Peki, yanında 1’dk da hazır olacak sıcacık bir kremalı tavuk çorbası iyi gitmez mi? Tek yapman gereken sıcak su eklemek ve karıştırmak ? İhtiyacın olduğu her an sana eşlik etmek için ben hazırım. Afiyet olsun!\r\n1 dk'da Hazır Sıcacık 1 Porsiyonluk Çorba",
                    "value": "Çabuk Çorbalardan Kremalı Tavuk Çorbası\r\nSırt çantanı takmış, haritan elinde diyar diyar geziyor musun? Peki, yanında 1’dk da hazır olacak sıcacık bir kremalı tavuk çorbası iyi gitmez mi? Tek yapman gereken sıcak su eklemek ve karıştırmak ? İhtiyacın olduğu her an sana eşlik etmek için ben hazırım. Afiyet olsun!\r\n1 dk'da Hazır Sıcacık 1 Porsiyonluk Çorba"
                },
                {
                    "attType": "LIST",
                    "fieldName": "productFeature",
                    "fieldNameLabel": "Ürün Özelliği",
                    "valueLabel": "",
                    "value": "",
                    "listValue": [],
                    "listValueLabel": [],
                    "badges": []
                },
                {
                    "attType": "LIST",
                    "fieldName": "tags",
                    "fieldNameLabel": "tags",
                    "valueLabel": "",
                    "value": "",
                    "listValue": [],
                    "listValueLabel": [],
                    "badges": []
                },
                {
                    "attType": "TEXT",
                    "fieldName": "longName",
                    "fieldNameLabel": "longName",
                    "valueLabel": "Knorr Kremalı Tavuk Çabuk Çorba 18 g",
                    "value": "Knorr Kremalı Tavuk Çabuk Çorba 18 g"
                }
            ],
            "priceTag": {
                "currency": "TRY",
                "merchantId": "default",
                "values": [],
                "price": 225,
                "priceLabel": "2.25 TL",
                "discountedPrice": 200,
                "discountedPriceLabel": "2.00 TL",
                "discountRate": 11,
                "discountRateLabel": "11"
            },
            "stockStatus": "HIGH",
            "itemType": "SINGLE"
        },
        {
            "id": "21041965",
            "variantGroupId": "21041965",
            "images": "https://core.rtbs.io/user/action/6ad47403c22043a795e973c7ec83dcc7/rbs.storage.get.GET_IMAGE?auth=&data=eyJpbWFnZUlkIjoiMDRhZmVlNjktMjQzYy00ODliLTliMDktNDIyYWYyODhjN2M4Iiwid2lkdGgiOjQwMCwiaGVpZ2h0Ijo0MDAsImZpdCI6Im91dHNpZGUiLCJjb250ZW50VHlwZSI6ImltYWdlL3dlYnAiLCJxdWFsaXR5IjozMH0&platform=WEB&",
            "attributes": [
                {
                    "attType": "LIST",
                    "fieldName": "categories",
                    "fieldNameLabel": "Kategoriler",
                    "valueLabel": "",
                    "value": "",
                    "listValue": ["GIDA-OF7AC", "TEMELGIDA-4D592", "CORBA-0PZJV"],
                    "listValueLabel": ["GIDA", "Temel Gıda", "Çorba"],
                    "badges": []
                },
                {
                    "attType": "TEXT",
                    "fieldName": "shortName",
                    "fieldNameLabel": "shortName",
                    "valueLabel": "Knorr Kremalı Mantar Çabuk Çorba 19 g",
                    "value": "Knorr Kremalı Mantar Çabuk Çorba 19 g"
                },
                {
                    "attType": "KEYWORD",
                    "fieldName": "brand",
                    "fieldNameLabel": "Markalar",
                    "valueLabel": "KNORR",
                    "value": "KNORR"
                },
                {
                    "attType": "LONG_TEXT",
                    "fieldName": "productDescription",
                    "fieldNameLabel": "productDescription",
                    "valueLabel": "Çabuk Çorbalardan Kremalı Mantar Çorbası\r\nSırt çantanı takmış, haritan elinde diyar diyar geziyor musun? Peki, yanında 1’dk da hazır olacak sıcacık bir kremalı mantar çorbası iyi gitmez mi? Tek yapman gereken sıcak su eklemek ve karıştırmak ? İhtiyacın olduğu her an sana eşlik etmek için ben hazırım. Afiyet olsun!\r\n1 dk'da Hazır Sıcacık 1 Porsiyonluk Çorba",
                    "value": "Çabuk Çorbalardan Kremalı Mantar Çorbası\r\nSırt çantanı takmış, haritan elinde diyar diyar geziyor musun? Peki, yanında 1’dk da hazır olacak sıcacık bir kremalı mantar çorbası iyi gitmez mi? Tek yapman gereken sıcak su eklemek ve karıştırmak ? İhtiyacın olduğu her an sana eşlik etmek için ben hazırım. Afiyet olsun!\r\n1 dk'da Hazır Sıcacık 1 Porsiyonluk Çorba"
                },
                {
                    "attType": "LIST",
                    "fieldName": "productFeature",
                    "fieldNameLabel": "Ürün Özelliği",
                    "valueLabel": "",
                    "value": "",
                    "listValue": [],
                    "listValueLabel": [],
                    "badges": []
                },
                {
                    "attType": "LIST",
                    "fieldName": "tags",
                    "fieldNameLabel": "tags",
                    "valueLabel": "",
                    "value": "",
                    "listValue": [],
                    "listValueLabel": [],
                    "badges": []
                },
                {
                    "attType": "TEXT",
                    "fieldName": "longName",
                    "fieldNameLabel": "longName",
                    "valueLabel": "Knorr Kremalı Mantar Çabuk Çorba 19 g",
                    "value": "Knorr Kremalı Mantar Çabuk Çorba 19 g"
                }
            ],
            "priceTag": {
                "currency": "TRY",
                "merchantId": "default",
                "values": [],
                "price": 225,
                "priceLabel": "2.25 TL",
                "discountedPrice": 200,
                "discountedPriceLabel": "2.00 TL",
                "discountRate": 11,
                "discountRateLabel": "11"
            },
            "stockStatus": "HIGH",
            "itemType": "SINGLE"
        },
        {
            "id": "1629500",
            "variantGroupId": "1629500",
            "images": "https://core.rtbs.io/user/action/6ad47403c22043a795e973c7ec83dcc7/rbs.storage.get.GET_IMAGE?auth=&data=eyJpbWFnZUlkIjoiZTEzY2RmMGUtMGJiMi00ODc2LWE1MTMtYWFhMWE5M2E4OTJlIiwid2lkdGgiOjQwMCwiaGVpZ2h0Ijo0MDAsImZpdCI6Im91dHNpZGUiLCJjb250ZW50VHlwZSI6ImltYWdlL3dlYnAiLCJxdWFsaXR5IjozMH0&platform=WEB&",
            "attributes": [
                {
                    "attType": "LIST",
                    "fieldName": "categories",
                    "fieldNameLabel": "Kategoriler",
                    "valueLabel": "",
                    "value": "",
                    "listValue": ["GIDA-OF7AC", "ATISTIRMALIK-N5RUF", "BISKUVI-0OPUQ"],
                    "listValueLabel": ["GIDA", "Atıştırmalık", "Bisküvi"],
                    "badges": []
                },
                {
                    "attType": "TEXT",
                    "fieldName": "shortName",
                    "fieldNameLabel": "shortName",
                    "valueLabel": "Eti Burçak Çörekotlu Bisküvi 91 g",
                    "value": "Eti Burçak Çörekotlu Bisküvi 91 g"
                },
                {
                    "attType": "KEYWORD",
                    "fieldName": "brand",
                    "fieldNameLabel": "Markalar",
                    "valueLabel": "ETI",
                    "value": "ETI"
                },
                {
                    "attType": "LONG_TEXT",
                    "fieldName": "productDescription",
                    "fieldNameLabel": "productDescription",
                    "valueLabel": "Eti Burçak Çörekotlu Bisküvi 91 g",
                    "value": "Eti Burçak Çörekotlu Bisküvi 91 g"
                },
                {
                    "attType": "LIST",
                    "fieldName": "productFeature",
                    "fieldNameLabel": "Ürün Özelliği",
                    "valueLabel": "",
                    "value": "",
                    "listValue": [],
                    "listValueLabel": [],
                    "badges": []
                },
                {
                    "attType": "LIST",
                    "fieldName": "tags",
                    "fieldNameLabel": "tags",
                    "valueLabel": "",
                    "value": "",
                    "listValue": [],
                    "listValueLabel": [],
                    "badges": []
                },
                {
                    "attType": "TEXT",
                    "fieldName": "longName",
                    "fieldNameLabel": "longName",
                    "valueLabel": "Eti Burçak Çörekotlu Bisküvi 91 g",
                    "value": "Eti Burçak Çörekotlu Bisküvi 91 g"
                }
            ],
            "priceTag": {
                "currency": "TRY",
                "merchantId": "default",
                "values": [],
                "price": 250,
                "priceLabel": "2.50 TL",
                "discountedPrice": 213,
                "discountedPriceLabel": "2.13 TL",
                "discountRate": 15,
                "discountRateLabel": "15"
            },
            "stockStatus": "NONE",
            "itemType": "SINGLE"
        },
        {
            "id": "1617100",
            "variantGroupId": "1617100",
            "images": "https://core.rtbs.io/user/action/6ad47403c22043a795e973c7ec83dcc7/rbs.storage.get.GET_IMAGE?auth=&data=eyJpbWFnZUlkIjoiZTE4ODIxMjctYzAzMi00N2I4LTk0YjgtMTAzM2FhYzUwOTY1Iiwid2lkdGgiOjQwMCwiaGVpZ2h0Ijo0MDAsImZpdCI6Im91dHNpZGUiLCJjb250ZW50VHlwZSI6ImltYWdlL3dlYnAiLCJxdWFsaXR5IjozMH0&platform=WEB&",
            "attributes": [
                {
                    "attType": "LIST",
                    "fieldName": "categories",
                    "fieldNameLabel": "Kategoriler",
                    "valueLabel": "",
                    "value": "",
                    "listValue": ["GIDA-OF7AC", "ATISTIRMALIK-N5RUF", "BISKUVI-0OPUQ"],
                    "listValueLabel": ["GIDA", "Atıştırmalık", "Bisküvi"],
                    "badges": []
                },
                {
                    "attType": "TEXT",
                    "fieldName": "shortName",
                    "fieldNameLabel": "shortName",
                    "valueLabel": "Eti Burçak Zeytinli Bisküvi 91 g",
                    "value": "Eti Burçak Zeytinli Bisküvi 91 g"
                },
                {
                    "attType": "KEYWORD",
                    "fieldName": "brand",
                    "fieldNameLabel": "Markalar",
                    "valueLabel": "ETI",
                    "value": "ETI"
                },
                {
                    "attType": "LONG_TEXT",
                    "fieldName": "productDescription",
                    "fieldNameLabel": "productDescription",
                    "valueLabel": "Eti Burçak Zeytinli Bisküvi 91 g",
                    "value": "Eti Burçak Zeytinli Bisküvi 91 g"
                },
                {
                    "attType": "LIST",
                    "fieldName": "productFeature",
                    "fieldNameLabel": "Ürün Özelliği",
                    "valueLabel": "",
                    "value": "",
                    "listValue": [],
                    "listValueLabel": [],
                    "badges": []
                },
                {
                    "attType": "LIST",
                    "fieldName": "tags",
                    "fieldNameLabel": "tags",
                    "valueLabel": "",
                    "value": "",
                    "listValue": [],
                    "listValueLabel": [],
                    "badges": []
                },
                {
                    "attType": "TEXT",
                    "fieldName": "longName",
                    "fieldNameLabel": "longName",
                    "valueLabel": "Eti Burçak Zeytinli Bisküvi 91 g",
                    "value": "Eti Burçak Zeytinli Bisküvi 91 g"
                }
            ],
            "priceTag": {
                "currency": "TRY",
                "merchantId": "default",
                "values": [],
                "price": 250,
                "priceLabel": "2.50 TL",
                "discountedPrice": 213,
                "discountedPriceLabel": "2.13 TL",
                "discountRate": 15,
                "discountRateLabel": "15"
            },
            "stockStatus": "NONE",
            "itemType": "SINGLE"
        },
        {
            "id": "2233500",
            "variantGroupId": "2233500",
            "images": "https://core.rtbs.io/user/action/6ad47403c22043a795e973c7ec83dcc7/rbs.storage.get.GET_IMAGE?auth=&data=eyJpbWFnZUlkIjoiNzExYzk5NGYtNGNlMy00OTZkLWFlNmQtN2IxNDViNTFjOGNkIiwid2lkdGgiOjQwMCwiaGVpZ2h0Ijo0MDAsImZpdCI6Im91dHNpZGUiLCJjb250ZW50VHlwZSI6ImltYWdlL3dlYnAiLCJxdWFsaXR5IjozMH0&platform=WEB&",
            "attributes": [
                {
                    "attType": "LIST",
                    "fieldName": "categories",
                    "fieldNameLabel": "Kategoriler",
                    "valueLabel": "",
                    "value": "",
                    "listValue": ["GIDA-OF7AC", "ATISTIRMALIK-N5RUF", "BISKUVI-0OPUQ"],
                    "listValueLabel": ["GIDA", "Atıştırmalık", "Bisküvi"],
                    "badges": []
                },
                {
                    "attType": "TEXT",
                    "fieldName": "shortName",
                    "fieldNameLabel": "shortName",
                    "valueLabel": "Eti Tutku 100 g",
                    "value": "Eti Tutku 100 g"
                },
                {
                    "attType": "KEYWORD",
                    "fieldName": "brand",
                    "fieldNameLabel": "Markalar",
                    "valueLabel": "ETI",
                    "value": "ETI"
                },
                {
                    "attType": "LONG_TEXT",
                    "fieldName": "productDescription",
                    "fieldNameLabel": "productDescription",
                    "valueLabel": "Eti Tutku Kakao Kremalı Mozaik Bisküvi Torba, kıtır mozaik bisküvisi içindeki  akışkan çikolata kreması ile çay kahvenin yanına çok yakışıyor. \n\nHem kendiniz deneyimleyin hem de misafirlerinize ikram edin diye büyük paket içerisinde sunulan Eti Tutku bisküvi, öğün aralarında canı tatlı isteyenler için de harika bir çözüm sunuyor. \n\nKullanım Önerileri\nDoğrudan güneş ışığına maruz bırakmayınız. Serin ve rutubetsiz yerde muhafaza ediniz.\n\nNet Miktar (g/ml)\n210\n\nMenşei\nTÜRKİYE\n\nİçindekiler\nBuğday Unu (Gluten içerir), Bitkisel Yağ (Palm, Ayçiçek, Pamuk, Kanola), Şeker, Mısır Nişastası, Yağı Azaltılmış Kakao Tozu %1, Tuz, Kabartıcılar (Sodyum Asit Pirofosfat, Sodyum Hidrojen Karbonat), Aroma vericiler, Krema %30 [Şeker, Bitkisel Yağ (Palm, Ayçiçek, Pamuk, Kanola), Susam Ezmesi, Yağı Azaltılmış Kakao Tozu %6, Fındık Püresi, Laktoz (Süt Ürünü), Keçiboynuzu Unu, Emülgatör (Ayçiçek Lesitini), Aroma vericiler, Tuz].\n\nAlerjen Uyarısı\nFındık, Gluten, Susam ve Süt ürünü içerir. Eser miktarda Soya ürünü ve Yumurta içerebilir.\n\nSaklama Koşulları\nSerin ve Kuru ortamda muhafaza ediniz\n\nGıda İşletmecisi / Üretici / İthalatçı / Dağıtıcı\nETİ GIDA SAN.ve TİC.A.Ş.",
                    "value": "Eti Tutku Kakao Kremalı Mozaik Bisküvi Torba, kıtır mozaik bisküvisi içindeki  akışkan çikolata kreması ile çay kahvenin yanına çok yakışıyor. \n\nHem kendiniz deneyimleyin hem de misafirlerinize ikram edin diye büyük paket içerisinde sunulan Eti Tutku bisküvi, öğün aralarında canı tatlı isteyenler için de harika bir çözüm sunuyor. \n\nKullanım Önerileri\nDoğrudan güneş ışığına maruz bırakmayınız. Serin ve rutubetsiz yerde muhafaza ediniz.\n\nNet Miktar (g/ml)\n210\n\nMenşei\nTÜRKİYE\n\nİçindekiler\nBuğday Unu (Gluten içerir), Bitkisel Yağ (Palm, Ayçiçek, Pamuk, Kanola), Şeker, Mısır Nişastası, Yağı Azaltılmış Kakao Tozu %1, Tuz, Kabartıcılar (Sodyum Asit Pirofosfat, Sodyum Hidrojen Karbonat), Aroma vericiler, Krema %30 [Şeker, Bitkisel Yağ (Palm, Ayçiçek, Pamuk, Kanola), Susam Ezmesi, Yağı Azaltılmış Kakao Tozu %6, Fındık Püresi, Laktoz (Süt Ürünü), Keçiboynuzu Unu, Emülgatör (Ayçiçek Lesitini), Aroma vericiler, Tuz].\n\nAlerjen Uyarısı\nFındık, Gluten, Susam ve Süt ürünü içerir. Eser miktarda Soya ürünü ve Yumurta içerebilir.\n\nSaklama Koşulları\nSerin ve Kuru ortamda muhafaza ediniz\n\nGıda İşletmecisi / Üretici / İthalatçı / Dağıtıcı\nETİ GIDA SAN.ve TİC.A.Ş."
                },
                {
                    "attType": "LIST",
                    "fieldName": "productFeature",
                    "fieldNameLabel": "Ürün Özelliği",
                    "valueLabel": "",
                    "value": "",
                    "listValue": [],
                    "listValueLabel": [],
                    "badges": []
                },
                {
                    "attType": "LIST",
                    "fieldName": "tags",
                    "fieldNameLabel": "tags",
                    "valueLabel": "",
                    "value": "",
                    "listValue": [],
                    "listValueLabel": [],
                    "badges": []
                },
                {
                    "attType": "TEXT",
                    "fieldName": "longName",
                    "fieldNameLabel": "longName",
                    "valueLabel": "Eti Tutku 100 g",
                    "value": "Eti Tutku 100 g"
                }
            ],
            "priceTag": {
                "currency": "TRY",
                "merchantId": "default",
                "values": [],
                "price": 250,
                "priceLabel": "2.50 TL",
                "discountedPrice": 213,
                "discountedPriceLabel": "2.13 TL",
                "discountRate": 15,
                "discountRateLabel": "15"
            },
            "stockStatus": "HIGH",
            "itemType": "SINGLE"
        },
        {
            "id": "5846700",
            "variantGroupId": "5846700",
            "images": "https://core.rtbs.io/user/action/6ad47403c22043a795e973c7ec83dcc7/rbs.storage.get.GET_IMAGE?auth=&data=eyJpbWFnZUlkIjoiZjQyNTA3NDQtODNlYy00MTUxLWFhNGMtMGY2Y2Q2Y2JjZjVmIiwid2lkdGgiOjQwMCwiaGVpZ2h0Ijo0MDAsImZpdCI6Im91dHNpZGUiLCJjb250ZW50VHlwZSI6ImltYWdlL3dlYnAiLCJxdWFsaXR5IjozMH0&platform=WEB&",
            "attributes": [
                {
                    "attType": "LIST",
                    "fieldName": "categories",
                    "fieldNameLabel": "Kategoriler",
                    "valueLabel": "",
                    "value": "",
                    "listValue": ["GIDA-OF7AC", "ATISTIRMALIK-N5RUF", "CIPS-P1OZG"],
                    "listValueLabel": ["GIDA", "Atıştırmalık", "Cips & Kraker"],
                    "badges": []
                },
                {
                    "attType": "TEXT",
                    "fieldName": "shortName",
                    "fieldNameLabel": "shortName",
                    "valueLabel": "Eti Gong 64 g",
                    "value": "Eti Gong 64 g"
                },
                {
                    "attType": "KEYWORD",
                    "fieldName": "brand",
                    "fieldNameLabel": "Markalar",
                    "valueLabel": "ETI",
                    "value": "ETI"
                },
                {
                    "attType": "LONG_TEXT",
                    "fieldName": "productDescription",
                    "fieldNameLabel": "productDescription",
                    "valueLabel": "Tuzlu bisküviler bölümünde yer alan Eti Gong 64 g istediğiniz an patlamış mısır yeme keyfi yaşatıyor. 64 gamlık, dayanıklı ambalaj içerisinde sizlere sunulan ürünü rahatlık ile yanınızda taşıyabilirsiniz. Kolay açılan ambalajı içerisinde 8 adet disk şeklinde mısır ve pirinç patlağı bulunuyor. Besleyici içeriği buğday ve yulaf ile artırılan Eti Gong’u evde televizyon izlerken veya canınız atıştırmalık çektiğinde tüketebilirsiniz. Sağlıklı yapısı ile cipse alternatif olan ürünü doğada yürüyüş yaparken veya iş yerinde, okulda açlığınızı bastırmak için yiyebilirsiniz.\nSıvılar eşliğinde yendiğinde midede şişen ürün uzun süreli tokluk hissi yaratıyor. Ayrıca içeriğindeki diyet lifleri sayesinde kan şekerinin dengelenmesine yardımcı oluyor. Üretiminde bitkisel yağlar kullanılan ürün şekersiz yapısı ile dikkat çekiyor ve 1 porsiyonunda 138 kcal enerji bulunuyor. Tahıl bazlı olduğu için yapısında gluten barındıran ürün trans yağ içermiyor. Doğrudan güneş ışığına maruz bırakılmaması gereken ürün, ambalajı açılmadığı sürece 4 ay boyunca tazeliğini koruyor. Ürünün kuru ve serin bir ortamda muhafaza edilmesi öneriliyor.\nMısır ve pirinç patlağından oluşan lezzetli atıştırmalığı satın almak için hemen alışverişe başlayın.\nÜrün Kodu: 455113",
                    "value": "Tuzlu bisküviler bölümünde yer alan Eti Gong 64 g istediğiniz an patlamış mısır yeme keyfi yaşatıyor. 64 gamlık, dayanıklı ambalaj içerisinde sizlere sunulan ürünü rahatlık ile yanınızda taşıyabilirsiniz. Kolay açılan ambalajı içerisinde 8 adet disk şeklinde mısır ve pirinç patlağı bulunuyor. Besleyici içeriği buğday ve yulaf ile artırılan Eti Gong’u evde televizyon izlerken veya canınız atıştırmalık çektiğinde tüketebilirsiniz. Sağlıklı yapısı ile cipse alternatif olan ürünü doğada yürüyüş yaparken veya iş yerinde, okulda açlığınızı bastırmak için yiyebilirsiniz.\nSıvılar eşliğinde yendiğinde midede şişen ürün uzun süreli tokluk hissi yaratıyor. Ayrıca içeriğindeki diyet lifleri sayesinde kan şekerinin dengelenmesine yardımcı oluyor. Üretiminde bitkisel yağlar kullanılan ürün şekersiz yapısı ile dikkat çekiyor ve 1 porsiyonunda 138 kcal enerji bulunuyor. Tahıl bazlı olduğu için yapısında gluten barındıran ürün trans yağ içermiyor. Doğrudan güneş ışığına maruz bırakılmaması gereken ürün, ambalajı açılmadığı sürece 4 ay boyunca tazeliğini koruyor. Ürünün kuru ve serin bir ortamda muhafaza edilmesi öneriliyor.\nMısır ve pirinç patlağından oluşan lezzetli atıştırmalığı satın almak için hemen alışverişe başlayın.\nÜrün Kodu: 455113"
                },
                {
                    "attType": "LIST",
                    "fieldName": "productFeature",
                    "fieldNameLabel": "Ürün Özelliği",
                    "valueLabel": "",
                    "value": "",
                    "listValue": [],
                    "listValueLabel": [],
                    "badges": []
                },
                {
                    "attType": "LIST",
                    "fieldName": "tags",
                    "fieldNameLabel": "tags",
                    "valueLabel": "",
                    "value": "",
                    "listValue": [],
                    "listValueLabel": [],
                    "badges": []
                },
                {
                    "attType": "TEXT",
                    "fieldName": "longName",
                    "fieldNameLabel": "longName",
                    "valueLabel": "Eti Gong 64 g",
                    "value": "Eti Gong 64 g"
                }
            ],
            "priceTag": {
                "currency": "TRY",
                "merchantId": "default",
                "values": [],
                "price": 250,
                "priceLabel": "2.50 TL",
                "discountedPrice": 213,
                "discountedPriceLabel": "2.13 TL",
                "discountRate": 15,
                "discountRateLabel": "15"
            },
            "stockStatus": "HIGH",
            "itemType": "SINGLE"
        },
        {
            "id": "3031700",
            "variantGroupId": "3031700",
            "images": "https://core.rtbs.io/user/action/6ad47403c22043a795e973c7ec83dcc7/rbs.storage.get.GET_IMAGE?auth=&data=eyJpbWFnZUlkIjoiMjJhZjk2MTAtZGFlZi00NzBiLWE3Y2MtM2RhZTc3OGEyN2ZhIiwid2lkdGgiOjQwMCwiaGVpZ2h0Ijo0MDAsImZpdCI6Im91dHNpZGUiLCJjb250ZW50VHlwZSI6ImltYWdlL3dlYnAiLCJxdWFsaXR5IjozMH0&platform=WEB&",
            "attributes": [
                {
                    "attType": "LIST",
                    "fieldName": "categories",
                    "fieldNameLabel": "Kategoriler",
                    "valueLabel": "",
                    "value": "",
                    "listValue": ["GIDA-OF7AC", "ATISTIRMALIK-N5RUF", "BISKUVI-0OPUQ"],
                    "listValueLabel": ["GIDA", "Atıştırmalık", "Bisküvi"],
                    "badges": []
                },
                {
                    "attType": "TEXT",
                    "fieldName": "shortName",
                    "fieldNameLabel": "shortName",
                    "valueLabel": "Eti Cin Lokmalık 114 g",
                    "value": "Eti Cin Lokmalık 114 g"
                },
                {
                    "attType": "KEYWORD",
                    "fieldName": "brand",
                    "fieldNameLabel": "Markalar",
                    "valueLabel": "ETI",
                    "value": "ETI"
                },
                {
                    "attType": "LONG_TEXT",
                    "fieldName": "productDescription",
                    "fieldNameLabel": "productDescription",
                    "valueLabel": "Eti Cin Lokmalık, çocukluğun sevilen lezzetini, tek lokmalık atıştırmalıklar olarak sunar. \n\n\n\nÇay kahve yanında tüketebileceğiniz, bu tatlı mı tatlı atıştırmalık bir lokması ile bile tatlı ihtiyacınızı karşılayacak ve molalarınıza keyif katacak. \n\n\nKullanım Önerileri\nDoğrudan güneş ışığına maruz bırakmayınız. Serin ve rutubetsiz yerde muhafaza ediniz.\n\nNet Miktar (g/ml)\n114\n\nMenşei\nTÜRKİYE\n\nİçindekiler\nBisküvi %60 [Buğday Unu (Gluten içerir), Bitkisel Yağ (Palm, Ayçiçek, Pamuk, Kanola), Şeker, Glukoz-Fruktoz Şurubu, Kabartıcılar (Amonyum Hidrojen Karbonat, Sodyum Hidrojen Karbonat, Sodyum Asit Pirofosfat), Tuz, Aroma verici], Portakallı Sos %30 [Glukoz-Fruktoz Şurubu, Şeker, Portakal Pulpu %2,6, Kıvam Arttırıcı (Pektin), Asitliği Düzenleyici (Sitrik Asit), Doğal Portakal Aroma vericisi, Stabilizör (Trisodyum Sitrat), Renklendiriciler (Beta Karoten, Antosiyanin)], ganül %10 [Şeker, Bitkisel Yağ (Palm, Ayçiçek, Pamuk, Kanola), Glukoz Şurubu, Kakao %3, Yenilebilir Sığır Jelatini, Asitliği Düzenleyici (Sodyum Asit Pirofosfat), Topaklanmayı Önleyici (Talk), Parlatıcı (Gam Arabik)].\n\nAlerjen Uyarısı\nGluten içerir. Eser miktarda Fındık, Susam, Süt ürünü ve Yumurta içerebilir.\n\nSaklama Koşulları\nSerin ve Kuru ortamda muhafaza ediniz\n\nGıda İşletmecisi / Üretici / İthalatçı / Dağıtıcı\nETİ GIDA SAN.ve TİC.A.Ş.\n",
                    "value": "Eti Cin Lokmalık, çocukluğun sevilen lezzetini, tek lokmalık atıştırmalıklar olarak sunar. \n\n\n\nÇay kahve yanında tüketebileceğiniz, bu tatlı mı tatlı atıştırmalık bir lokması ile bile tatlı ihtiyacınızı karşılayacak ve molalarınıza keyif katacak. \n\n\nKullanım Önerileri\nDoğrudan güneş ışığına maruz bırakmayınız. Serin ve rutubetsiz yerde muhafaza ediniz.\n\nNet Miktar (g/ml)\n114\n\nMenşei\nTÜRKİYE\n\nİçindekiler\nBisküvi %60 [Buğday Unu (Gluten içerir), Bitkisel Yağ (Palm, Ayçiçek, Pamuk, Kanola), Şeker, Glukoz-Fruktoz Şurubu, Kabartıcılar (Amonyum Hidrojen Karbonat, Sodyum Hidrojen Karbonat, Sodyum Asit Pirofosfat), Tuz, Aroma verici], Portakallı Sos %30 [Glukoz-Fruktoz Şurubu, Şeker, Portakal Pulpu %2,6, Kıvam Arttırıcı (Pektin), Asitliği Düzenleyici (Sitrik Asit), Doğal Portakal Aroma vericisi, Stabilizör (Trisodyum Sitrat), Renklendiriciler (Beta Karoten, Antosiyanin)], ganül %10 [Şeker, Bitkisel Yağ (Palm, Ayçiçek, Pamuk, Kanola), Glukoz Şurubu, Kakao %3, Yenilebilir Sığır Jelatini, Asitliği Düzenleyici (Sodyum Asit Pirofosfat), Topaklanmayı Önleyici (Talk), Parlatıcı (Gam Arabik)].\n\nAlerjen Uyarısı\nGluten içerir. Eser miktarda Fındık, Susam, Süt ürünü ve Yumurta içerebilir.\n\nSaklama Koşulları\nSerin ve Kuru ortamda muhafaza ediniz\n\nGıda İşletmecisi / Üretici / İthalatçı / Dağıtıcı\nETİ GIDA SAN.ve TİC.A.Ş.\n"
                },
                {
                    "attType": "LIST",
                    "fieldName": "productFeature",
                    "fieldNameLabel": "Ürün Özelliği",
                    "valueLabel": "",
                    "value": "",
                    "listValue": [],
                    "listValueLabel": [],
                    "badges": []
                },
                {
                    "attType": "LIST",
                    "fieldName": "tags",
                    "fieldNameLabel": "tags",
                    "valueLabel": "",
                    "value": "",
                    "listValue": [],
                    "listValueLabel": [],
                    "badges": []
                },
                {
                    "attType": "TEXT",
                    "fieldName": "longName",
                    "fieldNameLabel": "longName",
                    "valueLabel": "Eti Cin Lokmalık 114 g",
                    "value": "Eti Cin Lokmalık 114 g"
                }
            ],
            "priceTag": {
                "currency": "TRY",
                "merchantId": "default",
                "values": [],
                "price": 250,
                "priceLabel": "2.50 TL",
                "discountedPrice": 213,
                "discountedPriceLabel": "2.13 TL",
                "discountRate": 15,
                "discountRateLabel": "15"
            },
            "stockStatus": "LOW",
            "itemType": "SINGLE"
        },
        {
            "id": "1672500",
            "variantGroupId": "1672500",
            "images": "https://core.rtbs.io/user/action/6ad47403c22043a795e973c7ec83dcc7/rbs.storage.get.GET_IMAGE?auth=&data=eyJpbWFnZUlkIjoiZDFhM2Y4ODgtYjg4My00ZTU0LWE3NzctMGEyYWExODM3ZWNkIiwid2lkdGgiOjQwMCwiaGVpZ2h0Ijo0MDAsImZpdCI6Im91dHNpZGUiLCJjb250ZW50VHlwZSI6ImltYWdlL3dlYnAiLCJxdWFsaXR5IjozMH0&platform=WEB&",
            "attributes": [
                {
                    "attType": "LIST",
                    "fieldName": "categories",
                    "fieldNameLabel": "Kategoriler",
                    "valueLabel": "",
                    "value": "",
                    "listValue": ["GIDA-OF7AC", "ATISTIRMALIK-N5RUF", "CIKOLATA-XY76W"],
                    "listValueLabel": ["GIDA", "Atıştırmalık", "Çikolata"],
                    "badges": []
                },
                {
                    "attType": "TEXT",
                    "fieldName": "shortName",
                    "fieldNameLabel": "shortName",
                    "valueLabel": "Eti Canga 45 g",
                    "value": "Eti Canga 45 g"
                },
                {
                    "attType": "KEYWORD",
                    "fieldName": "brand",
                    "fieldNameLabel": "Markalar",
                    "valueLabel": "ETI",
                    "value": "ETI"
                },
                {
                    "attType": "LONG_TEXT",
                    "fieldName": "productDescription",
                    "fieldNameLabel": "productDescription",
                    "valueLabel": "\nEti Canga\nCanga üzerine serpiştirilen yarım yer fıstıkları ile eşsiz bir yeme deneyimi sunar.\n\nİçindekiler: Yer Fıstığı, Şeker, Tam Yağlı Süt Tozu, Invert Şeker Şurubu, Kakao Yağı, Maltodekstrin, Bitkisel Yağ (Tam Hidrojenize Palm, Palm), Kakao Kitlesi, Peynir Altı Suyu Tozu (Süt Ürünü), Nem verici (Sorbitol), Yağı Azaltılmış Kakao Tozu, Emülgatörler (Ayçiçek Lesitini, Poligliserol Polirisinolat), Yumurta Akı Tozu, Inülin, Buğday Unu (Gluten içerir), Tuz, Tereyağı (Süt Ürünü), Aroma vericiler, Asitliği Düzenleyici (Sodyum Hidrojen Karbonat). Sütlü çikolatadaki süt kuru maddesi en az %30, kakao kuru maddesi en az %28' dir.\n\nALERJEN UYARISI: Glüten, süt ürünü, yer fıstığı ve yumurta içerir. Eser miktarda fındık ve soya ürünü içerebilir.\n",
                    "value": "\nEti Canga\nCanga üzerine serpiştirilen yarım yer fıstıkları ile eşsiz bir yeme deneyimi sunar.\n\nİçindekiler: Yer Fıstığı, Şeker, Tam Yağlı Süt Tozu, Invert Şeker Şurubu, Kakao Yağı, Maltodekstrin, Bitkisel Yağ (Tam Hidrojenize Palm, Palm), Kakao Kitlesi, Peynir Altı Suyu Tozu (Süt Ürünü), Nem verici (Sorbitol), Yağı Azaltılmış Kakao Tozu, Emülgatörler (Ayçiçek Lesitini, Poligliserol Polirisinolat), Yumurta Akı Tozu, Inülin, Buğday Unu (Gluten içerir), Tuz, Tereyağı (Süt Ürünü), Aroma vericiler, Asitliği Düzenleyici (Sodyum Hidrojen Karbonat). Sütlü çikolatadaki süt kuru maddesi en az %30, kakao kuru maddesi en az %28' dir.\n\nALERJEN UYARISI: Glüten, süt ürünü, yer fıstığı ve yumurta içerir. Eser miktarda fındık ve soya ürünü içerebilir.\n"
                },
                {
                    "attType": "LIST",
                    "fieldName": "productFeature",
                    "fieldNameLabel": "Ürün Özelliği",
                    "valueLabel": "",
                    "value": "",
                    "listValue": [],
                    "listValueLabel": [],
                    "badges": []
                },
                {
                    "attType": "LIST",
                    "fieldName": "tags",
                    "fieldNameLabel": "tags",
                    "valueLabel": "",
                    "value": "",
                    "listValue": [],
                    "listValueLabel": [],
                    "badges": []
                },
                {
                    "attType": "TEXT",
                    "fieldName": "longName",
                    "fieldNameLabel": "longName",
                    "valueLabel": "Eti Canga 45 g",
                    "value": "Eti Canga 45 g"
                }
            ],
            "priceTag": {
                "currency": "TRY",
                "merchantId": "default",
                "values": [],
                "price": 250,
                "priceLabel": "2.50 TL",
                "discountedPrice": 213,
                "discountedPriceLabel": "2.13 TL",
                "discountRate": 15,
                "discountRateLabel": "15"
            },
            "stockStatus": "HIGH",
            "itemType": "SINGLE"
        },
        {
            "id": "4933600",
            "variantGroupId": "4933600",
            "images": "https://core.rtbs.io/user/action/6ad47403c22043a795e973c7ec83dcc7/rbs.storage.get.GET_IMAGE?auth=&data=eyJpbWFnZUlkIjoiOWVhYTdkNzYtOTRiMi00MGY0LWIwNjctNDZhYTg2ODBjNmE5Iiwid2lkdGgiOjQwMCwiaGVpZ2h0Ijo0MDAsImZpdCI6Im91dHNpZGUiLCJjb250ZW50VHlwZSI6ImltYWdlL3dlYnAiLCJxdWFsaXR5IjozMH0&platform=WEB&",
            "attributes": [
                {
                    "attType": "LIST",
                    "fieldName": "categories",
                    "fieldNameLabel": "Kategoriler",
                    "valueLabel": "",
                    "value": "",
                    "listValue": ["GIDA-OF7AC", "ATISTIRMALIK-N5RUF", "BISKUVI-0OPUQ"],
                    "listValueLabel": ["GIDA", "Atıştırmalık", "Bisküvi"],
                    "badges": []
                },
                {
                    "attType": "TEXT",
                    "fieldName": "shortName",
                    "fieldNameLabel": "shortName",
                    "valueLabel": "Burçak Kremalı 100 g",
                    "value": "Burçak Kremalı 100 g"
                },
                {
                    "attType": "KEYWORD",
                    "fieldName": "brand",
                    "fieldNameLabel": "Markalar",
                    "valueLabel": "ETI",
                    "value": "ETI"
                },
                {
                    "attType": "LONG_TEXT",
                    "fieldName": "productDescription",
                    "fieldNameLabel": "productDescription",
                    "valueLabel": "Eti Burçak Sütlü Kremalı Yulaflı 100 g., hem çok hafif hem de çok lezzetli bir atıştırmalıktır. Çayın ve kahvenin yanına çok yakışır. \n\nSade tüketebilir, bisküvilerle tatlı tarifler deneyebilirsiniz. \n\nİşletme Kayıt No\nTR-26-K-000045\n\nKullanım Önerileri\nDoğrudan güneş ışığına maruz bırakmayınız. Serin ve rutubetsiz yerde muhafaza ediniz.\n\nNet Miktar (g/ml)\n100\n\nMenşei\nTÜRKİYE\n\nİçindekiler\nYulaf Ezmesi %25, Buğday Unu, Bitkisel Yağ (Palm, Ayçiçek, Pamuk, Kanola), Şeker, Tam Buğday Unu %12, İnvert Şeker Şurubu, Kabartıcılar (Sodyum Hidrojen Karbonat, Amonyum Hidrojen Karbonat, Sodyum Asit Pirofosfat), Melas Şurubu, Tuz, Aroma vericiler, Sütlü Krema %23 [Şeker, Bitkisel Yağ (Palm, Ayçiçek, Pamuk, Kanola), Tam Yağlı Süt Tozu %23, Mısır Nişastası, Laktoz (Süt Ürünü), Dekstroz, Doğal Krema Aroma vericisi, Aroma vericiler, Tuz, Emülgatör (Ayçiçek Lesitini)].\n\nAlerjen Uyarısı\nGluten ve Süt ürünü içerir. Eser miktarda Fındık, susam, yumurta ve Soya ürünü içerebilir.",
                    "value": "Eti Burçak Sütlü Kremalı Yulaflı 100 g., hem çok hafif hem de çok lezzetli bir atıştırmalıktır. Çayın ve kahvenin yanına çok yakışır. \n\nSade tüketebilir, bisküvilerle tatlı tarifler deneyebilirsiniz. \n\nİşletme Kayıt No\nTR-26-K-000045\n\nKullanım Önerileri\nDoğrudan güneş ışığına maruz bırakmayınız. Serin ve rutubetsiz yerde muhafaza ediniz.\n\nNet Miktar (g/ml)\n100\n\nMenşei\nTÜRKİYE\n\nİçindekiler\nYulaf Ezmesi %25, Buğday Unu, Bitkisel Yağ (Palm, Ayçiçek, Pamuk, Kanola), Şeker, Tam Buğday Unu %12, İnvert Şeker Şurubu, Kabartıcılar (Sodyum Hidrojen Karbonat, Amonyum Hidrojen Karbonat, Sodyum Asit Pirofosfat), Melas Şurubu, Tuz, Aroma vericiler, Sütlü Krema %23 [Şeker, Bitkisel Yağ (Palm, Ayçiçek, Pamuk, Kanola), Tam Yağlı Süt Tozu %23, Mısır Nişastası, Laktoz (Süt Ürünü), Dekstroz, Doğal Krema Aroma vericisi, Aroma vericiler, Tuz, Emülgatör (Ayçiçek Lesitini)].\n\nAlerjen Uyarısı\nGluten ve Süt ürünü içerir. Eser miktarda Fındık, susam, yumurta ve Soya ürünü içerebilir."
                },
                {
                    "attType": "LIST",
                    "fieldName": "productFeature",
                    "fieldNameLabel": "Ürün Özelliği",
                    "valueLabel": "",
                    "value": "",
                    "listValue": [],
                    "listValueLabel": [],
                    "badges": []
                },
                {
                    "attType": "LIST",
                    "fieldName": "tags",
                    "fieldNameLabel": "tags",
                    "valueLabel": "",
                    "value": "",
                    "listValue": [],
                    "listValueLabel": [],
                    "badges": []
                },
                {
                    "attType": "TEXT",
                    "fieldName": "longName",
                    "fieldNameLabel": "longName",
                    "valueLabel": "Burçak Kremalı 100 g",
                    "value": "Burçak Kremalı 100 g"
                }
            ],
            "priceTag": {
                "currency": "TRY",
                "merchantId": "default",
                "values": [],
                "price": 250,
                "priceLabel": "2.50 TL",
                "discountedPrice": 213,
                "discountedPriceLabel": "2.13 TL",
                "discountRate": 15,
                "discountRateLabel": "15"
            },
            "stockStatus": "HIGH",
            "itemType": "SINGLE"
        },
        {
            "id": "3532900",
            "variantGroupId": "3532900",
            "images": "https://core.rtbs.io/user/action/6ad47403c22043a795e973c7ec83dcc7/rbs.storage.get.GET_IMAGE?auth=&data=eyJpbWFnZUlkIjoiYzQ2NTI2ZGMtMjVkMi00ZThiLWI1ZTMtYWFmZjEyNmM1ODlmIiwid2lkdGgiOjQwMCwiaGVpZ2h0Ijo0MDAsImZpdCI6Im91dHNpZGUiLCJjb250ZW50VHlwZSI6ImltYWdlL3dlYnAiLCJxdWFsaXR5IjozMH0&platform=WEB&",
            "attributes": [
                {
                    "attType": "LIST",
                    "fieldName": "categories",
                    "fieldNameLabel": "Kategoriler",
                    "valueLabel": "",
                    "value": "",
                    "listValue": ["GIDA-OF7AC", "ATISTIRMALIK-N5RUF", "BISKUVI-0OPUQ"],
                    "listValueLabel": ["GIDA", "Atıştırmalık", "Bisküvi"],
                    "badges": []
                },
                {
                    "attType": "TEXT",
                    "fieldName": "shortName",
                    "fieldNameLabel": "shortName",
                    "valueLabel": "Eti Benimo Çikolatalı 80 g",
                    "value": "Eti Benimo Çikolatalı 80 g"
                },
                {
                    "attType": "KEYWORD",
                    "fieldName": "brand",
                    "fieldNameLabel": "Markalar",
                    "valueLabel": "ETI",
                    "value": "ETI"
                },
                {
                    "attType": "LONG_TEXT",
                    "fieldName": "productDescription",
                    "fieldNameLabel": "productDescription",
                    "valueLabel": "Kullanım Önerileri\nDoğrudan güneş ışığına maruz bırakmayınız. Serin ve rutubetsiz yerde muhafaza ediniz.\n\nNet Miktar (g/ml)\n80\n\nMenşei\nTÜRKİYE\n\nİçindekiler\nBuğday Unu (Gluten içerir), Şeker, Bitkisel Yağ (Palm, Ayçiçek, Pamuk, Kanola), İnvert Şeker Şurubu, Pastörize Yumurta, Kabartıcılar (Amonyum Hidrojen Karbonat, Sodyum Hidrojen Karbonat, Sodyum Asit Pirofosfat), Tuz, Aroma vericiler, Emülgatör (Mono ve Digliseritlerin Diasetil Tartarik Asit Esterleri), Un İşlem Maddesi (Sodyum Metabisülfit), Kuvertür Çikolata %32,3 [Şeker, Kakao Yağı, Kakao Kitlesi, Peynir Altı Suyu Tozu (Süt Ürünü), Yağı Azaltılmış Kakao Tozu, Yağsız Süt Tozu, Emülgatörler (Ayçiçek Lesitini, Poligliserol Polirisinolat), Aroma verici (Vanilin), Tuz. Kakao Kuru Maddesi En Az %35'tir.], Marshmallow %22,8 [Şeker, İnvert Şeker Şurubu, Mısır Nişastası, Nem verici (Sorbitol), Yenilebilir Sığır Jelatini, Laktoz (Süt Ürünü), Koruyucu (Potasyum Sorbat), Aroma verici], Hindistan Cevizi %5,2.\n\nAlerjen Uyarısı\nGluten, Sülfit, Süt ürünü ve Yumurta içerir. Eser miktarda Fındık, Soya ürünü ve Susam içerebilir.\n\nSaklama Koşulları\nSerin ve Kuru ortamda muhafaza ediniz\n\nGıda İşletmecisi / Üretici / İthalatçı / Dağıtıcı\nETİ GIDA SAN.ve TİC.A.Ş.",
                    "value": "Kullanım Önerileri\nDoğrudan güneş ışığına maruz bırakmayınız. Serin ve rutubetsiz yerde muhafaza ediniz.\n\nNet Miktar (g/ml)\n80\n\nMenşei\nTÜRKİYE\n\nİçindekiler\nBuğday Unu (Gluten içerir), Şeker, Bitkisel Yağ (Palm, Ayçiçek, Pamuk, Kanola), İnvert Şeker Şurubu, Pastörize Yumurta, Kabartıcılar (Amonyum Hidrojen Karbonat, Sodyum Hidrojen Karbonat, Sodyum Asit Pirofosfat), Tuz, Aroma vericiler, Emülgatör (Mono ve Digliseritlerin Diasetil Tartarik Asit Esterleri), Un İşlem Maddesi (Sodyum Metabisülfit), Kuvertür Çikolata %32,3 [Şeker, Kakao Yağı, Kakao Kitlesi, Peynir Altı Suyu Tozu (Süt Ürünü), Yağı Azaltılmış Kakao Tozu, Yağsız Süt Tozu, Emülgatörler (Ayçiçek Lesitini, Poligliserol Polirisinolat), Aroma verici (Vanilin), Tuz. Kakao Kuru Maddesi En Az %35'tir.], Marshmallow %22,8 [Şeker, İnvert Şeker Şurubu, Mısır Nişastası, Nem verici (Sorbitol), Yenilebilir Sığır Jelatini, Laktoz (Süt Ürünü), Koruyucu (Potasyum Sorbat), Aroma verici], Hindistan Cevizi %5,2.\n\nAlerjen Uyarısı\nGluten, Sülfit, Süt ürünü ve Yumurta içerir. Eser miktarda Fındık, Soya ürünü ve Susam içerebilir.\n\nSaklama Koşulları\nSerin ve Kuru ortamda muhafaza ediniz\n\nGıda İşletmecisi / Üretici / İthalatçı / Dağıtıcı\nETİ GIDA SAN.ve TİC.A.Ş."
                },
                {
                    "attType": "LIST",
                    "fieldName": "productFeature",
                    "fieldNameLabel": "Ürün Özelliği",
                    "valueLabel": "",
                    "value": "",
                    "listValue": [],
                    "listValueLabel": [],
                    "badges": []
                },
                {
                    "attType": "LIST",
                    "fieldName": "tags",
                    "fieldNameLabel": "tags",
                    "valueLabel": "",
                    "value": "",
                    "listValue": [],
                    "listValueLabel": [],
                    "badges": []
                },
                {
                    "attType": "TEXT",
                    "fieldName": "longName",
                    "fieldNameLabel": "longName",
                    "valueLabel": "Eti Benimo Çikolatalı 80 g",
                    "value": "Eti Benimo Çikolatalı 80 g"
                }
            ],
            "priceTag": {
                "currency": "TRY",
                "merchantId": "default",
                "values": [],
                "price": 275,
                "priceLabel": "2.75 TL",
                "discountedPrice": 234,
                "discountedPriceLabel": "2.34 TL",
                "discountRate": 15,
                "discountRateLabel": "15"
            },
            "stockStatus": "HIGH",
            "itemType": "SINGLE"
        },
        {
            "id": "7145658X",
            "variantGroupId": "7145658X",
            "images": "https://core.rtbs.io/user/action/6ad47403c22043a795e973c7ec83dcc7/rbs.storage.get.GET_IMAGE?auth=&data=eyJpbWFnZUlkIjoiNDgwNzBiYTItODA5ZS00ZmM1LTgzYWItYTFiOTFjMWQwZDQ2Iiwid2lkdGgiOjQwMCwiaGVpZ2h0Ijo0MDAsImZpdCI6Im91dHNpZGUiLCJjb250ZW50VHlwZSI6ImltYWdlL3dlYnAiLCJxdWFsaXR5IjozMH0&platform=WEB&",
            "attributes": [
                {
                    "attType": "LIST",
                    "fieldName": "categories",
                    "fieldNameLabel": "Kategoriler",
                    "valueLabel": "",
                    "value": "",
                    "listValue": ["GIDA-OF7AC", "DONDURMA-K123P", "TEKLI-G1R2T"],
                    "listValueLabel": ["GIDA", "Dondurma", "Tekli Dondurma"],
                    "badges": []
                },
                {
                    "attType": "TEXT",
                    "fieldName": "shortName",
                    "fieldNameLabel": "shortName",
                    "valueLabel": "Algida Maraş Usulü Sade Kap Dondurma 105 ml",
                    "value": "Algida Maraş Usulü Sade Kap Dondurma 105 ml"
                },
                {
                    "attType": "KEYWORD",
                    "fieldName": "brand",
                    "fieldNameLabel": "Markalar",
                    "valueLabel": "ALGİDA",
                    "value": "ALGİDA"
                },
                {
                    "attType": "LONG_TEXT",
                    "fieldName": "productDescription",
                    "fieldNameLabel": "productDescription",
                    "valueLabel": "Eşsiz bir kıvam ve aromaya sahip meşhur Maraş dövme dondurması yaz vakitlerinin serinleticisi olarak beğeninize sunuluyor. Keçi sütü ve sahlepin kendine özgü tadıyla taçlanan Algida Maraş Cup, sizlere yaz kış demeden keyifle tüketebileceğiniz serinletici Maraş usulü dondurma keyfi sunuyor. Geleneksel bir lezzet olduğu kadar dünyaca da ünlü olan Maraş dondurma, bölgede yetişen yabani orkidelerden elde edilen sahlep ve Ahir dağında beslenen keçilerin sütlerinden elde ediliyor.",
                    "value": "Eşsiz bir kıvam ve aromaya sahip meşhur Maraş dövme dondurması yaz vakitlerinin serinleticisi olarak beğeninize sunuluyor. Keçi sütü ve sahlepin kendine özgü tadıyla taçlanan Algida Maraş Cup, sizlere yaz kış demeden keyifle tüketebileceğiniz serinletici Maraş usulü dondurma keyfi sunuyor. Geleneksel bir lezzet olduğu kadar dünyaca da ünlü olan Maraş dondurma, bölgede yetişen yabani orkidelerden elde edilen sahlep ve Ahir dağında beslenen keçilerin sütlerinden elde ediliyor."
                },
                {
                    "attType": "LIST",
                    "fieldName": "productFeature",
                    "fieldNameLabel": "Ürün Özelliği",
                    "valueLabel": "",
                    "value": "",
                    "listValue": [],
                    "listValueLabel": [],
                    "badges": []
                },
                {
                    "attType": "LIST",
                    "fieldName": "tags",
                    "fieldNameLabel": "tags",
                    "valueLabel": "",
                    "value": "",
                    "listValue": [],
                    "listValueLabel": [],
                    "badges": []
                },
                {
                    "attType": "TEXT",
                    "fieldName": "longName",
                    "fieldNameLabel": "longName",
                    "valueLabel": "Algida Maraş Usulü Sade Kap Dondurma 105 ml",
                    "value": "Algida Maraş Usulü Sade Kap Dondurma 105 ml"
                }
            ],
            "priceTag": {
                "currency": "TRY",
                "merchantId": "default",
                "values": [],
                "price": 350,
                "priceLabel": "3.50 TL",
                "discountedPrice": 245,
                "discountedPriceLabel": "2.45 TL",
                "discountRate": 30,
                "discountRateLabel": "30"
            },
            "stockStatus": "HIGH",
            "itemType": "SINGLE"
        },
        {
            "id": "7161247X",
            "variantGroupId": "7161247X",
            "images": "https://core.rtbs.io/user/action/6ad47403c22043a795e973c7ec83dcc7/rbs.storage.get.GET_IMAGE?auth=&data=eyJpbWFnZUlkIjoiMjVkZTA5MjAtMjIxNC00ZjEyLTkzY2ItNjI1MTYwMzcxMzY3Iiwid2lkdGgiOjQwMCwiaGVpZ2h0Ijo0MDAsImZpdCI6Im91dHNpZGUiLCJjb250ZW50VHlwZSI6ImltYWdlL3dlYnAiLCJxdWFsaXR5IjozMH0&platform=WEB&",
            "attributes": [
                {
                    "attType": "LIST",
                    "fieldName": "categories",
                    "fieldNameLabel": "Kategoriler",
                    "valueLabel": "",
                    "value": "",
                    "listValue": ["GIDA-OF7AC", "DONDURMA-K123P", "TEKLI-G1R2T"],
                    "listValueLabel": ["GIDA", "Dondurma", "Tekli Dondurma"],
                    "badges": []
                },
                {
                    "attType": "TEXT",
                    "fieldName": "shortName",
                    "fieldNameLabel": "shortName",
                    "valueLabel": "Cornetto Classico Kaymaklı 125 ml",
                    "value": "Cornetto Classico Kaymaklı 125 ml"
                },
                {
                    "attType": "KEYWORD",
                    "fieldName": "brand",
                    "fieldNameLabel": "Markalar",
                    "valueLabel": "CORNETTO",
                    "value": "CORNETTO"
                },
                {
                    "attType": "LONG_TEXT",
                    "fieldName": "productDescription",
                    "fieldNameLabel": "productDescription",
                    "valueLabel": "Dondurmanın klasiği, dondurma gibi dondurma Cornetto Classico Kaymak! Kaymağa doyamam diyenler için Cornetto Classico Kaymak nefis çıtır külahı ve şımartan fındık parçalarıyla ilk ısırıkta başlayan lezzet serüvenini, kakaolu tatlı son ile noktalıyor.",
                    "value": "Dondurmanın klasiği, dondurma gibi dondurma Cornetto Classico Kaymak! Kaymağa doyamam diyenler için Cornetto Classico Kaymak nefis çıtır külahı ve şımartan fındık parçalarıyla ilk ısırıkta başlayan lezzet serüvenini, kakaolu tatlı son ile noktalıyor."
                },
                {
                    "attType": "LIST",
                    "fieldName": "productFeature",
                    "fieldNameLabel": "Ürün Özelliği",
                    "valueLabel": "",
                    "value": "",
                    "listValue": [],
                    "listValueLabel": [],
                    "badges": []
                },
                {
                    "attType": "LIST",
                    "fieldName": "tags",
                    "fieldNameLabel": "tags",
                    "valueLabel": "",
                    "value": "",
                    "listValue": [],
                    "listValueLabel": [],
                    "badges": []
                },
                {
                    "attType": "TEXT",
                    "fieldName": "longName",
                    "fieldNameLabel": "longName",
                    "valueLabel": "Cornetto Classico Kaymaklı 125 ml",
                    "value": "Cornetto Classico Kaymaklı 125 ml"
                }
            ],
            "priceTag": {
                "currency": "TRY",
                "merchantId": "default",
                "values": [],
                "price": 350,
                "priceLabel": "3.50 TL",
                "discountedPrice": 245,
                "discountedPriceLabel": "2.45 TL",
                "discountRate": 30,
                "discountRateLabel": "30"
            },
            "stockStatus": "HIGH",
            "itemType": "SINGLE"
        },
        {
            "id": "68225200",
            "variantGroupId": "68225200",
            "images": "https://core.rtbs.io/user/action/6ad47403c22043a795e973c7ec83dcc7/rbs.storage.get.GET_IMAGE?auth=&data=eyJpbWFnZUlkIjoiYjQ3ZDUyZmEtNjgxMS00YzRjLTg5ZGQtNDliZTFjMGEzODU3Iiwid2lkdGgiOjQwMCwiaGVpZ2h0Ijo0MDAsImZpdCI6Im91dHNpZGUiLCJjb250ZW50VHlwZSI6ImltYWdlL3dlYnAiLCJxdWFsaXR5IjozMH0&platform=WEB&",
            "attributes": [
                {
                    "attType": "LIST",
                    "fieldName": "categories",
                    "fieldNameLabel": "Kategoriler",
                    "valueLabel": "",
                    "value": "",
                    "listValue": ["GIDA-OF7AC", "TEMELGIDA-4D592", "MAKARNA-71KRH"],
                    "listValueLabel": ["GIDA", "Temel Gıda", "Makarna"],
                    "badges": []
                },
                {
                    "attType": "TEXT",
                    "fieldName": "shortName",
                    "fieldNameLabel": "shortName",
                    "valueLabel": "Knorr Çabuk Noodle Acılı Domatesli 67 g",
                    "value": "Knorr Çabuk Noodle Acılı Domatesli 67 g"
                },
                {
                    "attType": "KEYWORD",
                    "fieldName": "brand",
                    "fieldNameLabel": "Markalar",
                    "valueLabel": "KNORR",
                    "value": "KNORR"
                },
                {
                    "attType": "LONG_TEXT",
                    "fieldName": "productDescription",
                    "fieldNameLabel": "productDescription",
                    "valueLabel": "Yeni Knorr Çabuk Noodle, Hızlı ve Lezzetli! Klasik Acılı Domatesli Noodle, Knorr'un Lezzeti ve Kalitesiyle Buluşuyor! Lezzetini 4 Farklı Baharatın Uyumu ve Sebzelerden Alan Yeni Knorr Acılı Domatesli Noodle Lezzeti Sadece 3 Dk Uzağında!  Lezzete Doymak İçin Tek Yapman Gereken Bir Kapta Noodle'ı, Paket İçinden Çıkan Çeşniyi ve Kaynar Suyu karıştırmak ve 3 Dk kısık ateşte pişirmek. Afiyet olsun :)",
                    "value": "Yeni Knorr Çabuk Noodle, Hızlı ve Lezzetli! Klasik Acılı Domatesli Noodle, Knorr'un Lezzeti ve Kalitesiyle Buluşuyor! Lezzetini 4 Farklı Baharatın Uyumu ve Sebzelerden Alan Yeni Knorr Acılı Domatesli Noodle Lezzeti Sadece 3 Dk Uzağında!  Lezzete Doymak İçin Tek Yapman Gereken Bir Kapta Noodle'ı, Paket İçinden Çıkan Çeşniyi ve Kaynar Suyu karıştırmak ve 3 Dk kısık ateşte pişirmek. Afiyet olsun :)"
                },
                {
                    "attType": "LIST",
                    "fieldName": "productFeature",
                    "fieldNameLabel": "Ürün Özelliği",
                    "valueLabel": "",
                    "value": "",
                    "listValue": [],
                    "listValueLabel": [],
                    "badges": []
                },
                {
                    "attType": "LIST",
                    "fieldName": "tags",
                    "fieldNameLabel": "tags",
                    "valueLabel": "",
                    "value": "",
                    "listValue": [],
                    "listValueLabel": [],
                    "badges": []
                },
                {
                    "attType": "TEXT",
                    "fieldName": "longName",
                    "fieldNameLabel": "longName",
                    "valueLabel": "Knorr Çabuk Noodle Acılı Domatesli 67 g",
                    "value": "Knorr Çabuk Noodle Acılı Domatesli 67 g"
                }
            ],
            "priceTag": {
                "currency": "TRY",
                "merchantId": "default",
                "values": [],
                "price": 345,
                "priceLabel": "3.45 TL",
                "discountedPrice": 250,
                "discountedPriceLabel": "2.50 TL",
                "discountRate": 28,
                "discountRateLabel": "28"
            },
            "stockStatus": "HIGH",
            "itemType": "SINGLE"
        },
        {
            "id": "68167038",
            "variantGroupId": "68167038",
            "images": "https://core.rtbs.io/user/action/6ad47403c22043a795e973c7ec83dcc7/rbs.storage.get.GET_IMAGE?auth=&data=eyJpbWFnZUlkIjoiYmVkZjU1NzItZTU5My00OGE4LTkxNjktYmE3NDY2Yjg5ODU4Iiwid2lkdGgiOjQwMCwiaGVpZ2h0Ijo0MDAsImZpdCI6Im91dHNpZGUiLCJjb250ZW50VHlwZSI6ImltYWdlL3dlYnAiLCJxdWFsaXR5IjozMH0&platform=WEB&",
            "attributes": [
                {
                    "attType": "LIST",
                    "fieldName": "categories",
                    "fieldNameLabel": "Kategoriler",
                    "valueLabel": "",
                    "value": "",
                    "listValue": ["GIDA-OF7AC", "TEMELGIDA-4D592", "MAKARNA-71KRH"],
                    "listValueLabel": ["GIDA", "Temel Gıda", "Makarna"],
                    "badges": []
                },
                {
                    "attType": "TEXT",
                    "fieldName": "shortName",
                    "fieldNameLabel": "shortName",
                    "valueLabel": "Knorr Çabuk Noodle Sebzeli Et Çeşnili 66 g",
                    "value": "Knorr Çabuk Noodle Sebzeli Et Çeşnili 66 g"
                },
                {
                    "attType": "KEYWORD",
                    "fieldName": "brand",
                    "fieldNameLabel": "Markalar",
                    "valueLabel": "KNORR",
                    "value": "KNORR"
                },
                {
                    "attType": "LONG_TEXT",
                    "fieldName": "productDescription",
                    "fieldNameLabel": "productDescription",
                    "valueLabel": "Yeni Knorr Çabuk Noodle, Hızlı ve Lezzetli! Klasik Et Çeşnili Noodle, Knorr'un Lezzeti ve Kalitesiyle Buluşuyor! Lezzetini Gerçek Sebzelerden ve baharatlardan Alan Yeni Knorr Sebzeli Et Çeşnili Noodle Lezzeti Sadece 3 Dk Uzağında!  Lezzete Doymak İçin Tek Yapman Gereken Bir Kapta Noodle'ı, Paket İçinden Çıkan Çeşniyi ve Kaynar Suyu karıştırmak ve 3 Dk kısık ateşte pişirmek. Afiyet olsun :)",
                    "value": "Yeni Knorr Çabuk Noodle, Hızlı ve Lezzetli! Klasik Et Çeşnili Noodle, Knorr'un Lezzeti ve Kalitesiyle Buluşuyor! Lezzetini Gerçek Sebzelerden ve baharatlardan Alan Yeni Knorr Sebzeli Et Çeşnili Noodle Lezzeti Sadece 3 Dk Uzağında!  Lezzete Doymak İçin Tek Yapman Gereken Bir Kapta Noodle'ı, Paket İçinden Çıkan Çeşniyi ve Kaynar Suyu karıştırmak ve 3 Dk kısık ateşte pişirmek. Afiyet olsun :)"
                },
                {
                    "attType": "LIST",
                    "fieldName": "productFeature",
                    "fieldNameLabel": "Ürün Özelliği",
                    "valueLabel": "",
                    "value": "",
                    "listValue": [],
                    "listValueLabel": [],
                    "badges": []
                },
                {
                    "attType": "LIST",
                    "fieldName": "tags",
                    "fieldNameLabel": "tags",
                    "valueLabel": "",
                    "value": "",
                    "listValue": [],
                    "listValueLabel": [],
                    "badges": []
                },
                {
                    "attType": "TEXT",
                    "fieldName": "longName",
                    "fieldNameLabel": "longName",
                    "valueLabel": "Knorr Çabuk Noodle Sebzeli Et Çeşnili 66 g",
                    "value": "Knorr Çabuk Noodle Sebzeli Et Çeşnili 66 g"
                }
            ],
            "priceTag": {
                "currency": "TRY",
                "merchantId": "default",
                "values": [],
                "price": 345,
                "priceLabel": "3.45 TL",
                "discountedPrice": 250,
                "discountedPriceLabel": "2.50 TL",
                "discountRate": 28,
                "discountRateLabel": "28"
            },
            "stockStatus": "HIGH",
            "itemType": "SINGLE"
        },
        {
            "id": "68167030",
            "variantGroupId": "68167030",
            "images": "https://core.rtbs.io/user/action/6ad47403c22043a795e973c7ec83dcc7/rbs.storage.get.GET_IMAGE?auth=&data=eyJpbWFnZUlkIjoiNmU0OTg4ZjAtY2MwYy00YTFjLTk3ZTEtZTM5NjY4OGMxOWNiIiwid2lkdGgiOjQwMCwiaGVpZ2h0Ijo0MDAsImZpdCI6Im91dHNpZGUiLCJjb250ZW50VHlwZSI6ImltYWdlL3dlYnAiLCJxdWFsaXR5IjozMH0&platform=WEB&",
            "attributes": [
                {
                    "attType": "LIST",
                    "fieldName": "categories",
                    "fieldNameLabel": "Kategoriler",
                    "valueLabel": "",
                    "value": "",
                    "listValue": ["GIDA-OF7AC", "TEMELGIDA-4D592", "MAKARNA-71KRH"],
                    "listValueLabel": ["GIDA", "Temel Gıda", "Makarna"],
                    "badges": []
                },
                {
                    "attType": "TEXT",
                    "fieldName": "shortName",
                    "fieldNameLabel": "shortName",
                    "valueLabel": "Knorr Çabuk Noodle Tavuk Çeşnili 66 g",
                    "value": "Knorr Çabuk Noodle Tavuk Çeşnili 66 g"
                },
                {
                    "attType": "KEYWORD",
                    "fieldName": "brand",
                    "fieldNameLabel": "Markalar",
                    "valueLabel": "KNORR",
                    "value": "KNORR"
                },
                {
                    "attType": "LONG_TEXT",
                    "fieldName": "productDescription",
                    "fieldNameLabel": "productDescription",
                    "valueLabel": "Yeni Knorr Çabuk Noodle, Hızlı ve Lezzetli! Klasik Tavuk Çeşnili Noodle, Knorr'un Lezzeti ve Kalitesiyle Buluşuyor! Lezzetini Gerçek Sebzelerden ve baharatlardan Alan Yeni Knorr Tavuk Çeşnili Noodle Lezzeti Sadece 3 Dk Uzağında!  Lezzete Doymak İçin Tek Yapman Gereken Bir Kapta Noodle'ı, Paket İçinden Çıkan Çeşniyi ve Kaynar Suyu karıştırmak ve 3 Dk kısık ateşte pişirmek. Afiyet olsun :)",
                    "value": "Yeni Knorr Çabuk Noodle, Hızlı ve Lezzetli! Klasik Tavuk Çeşnili Noodle, Knorr'un Lezzeti ve Kalitesiyle Buluşuyor! Lezzetini Gerçek Sebzelerden ve baharatlardan Alan Yeni Knorr Tavuk Çeşnili Noodle Lezzeti Sadece 3 Dk Uzağında!  Lezzete Doymak İçin Tek Yapman Gereken Bir Kapta Noodle'ı, Paket İçinden Çıkan Çeşniyi ve Kaynar Suyu karıştırmak ve 3 Dk kısık ateşte pişirmek. Afiyet olsun :)"
                },
                {
                    "attType": "LIST",
                    "fieldName": "productFeature",
                    "fieldNameLabel": "Ürün Özelliği",
                    "valueLabel": "",
                    "value": "",
                    "listValue": [],
                    "listValueLabel": [],
                    "badges": []
                },
                {
                    "attType": "LIST",
                    "fieldName": "tags",
                    "fieldNameLabel": "tags",
                    "valueLabel": "",
                    "value": "",
                    "listValue": [],
                    "listValueLabel": [],
                    "badges": []
                },
                {
                    "attType": "TEXT",
                    "fieldName": "longName",
                    "fieldNameLabel": "longName",
                    "valueLabel": "Knorr Çabuk Noodle Tavuk Çeşnili 66 g",
                    "value": "Knorr Çabuk Noodle Tavuk Çeşnili 66 g"
                }
            ],
            "priceTag": {
                "currency": "TRY",
                "merchantId": "default",
                "values": [],
                "price": 345,
                "priceLabel": "3.45 TL",
                "discountedPrice": 250,
                "discountedPriceLabel": "2.50 TL",
                "discountRate": 28,
                "discountRateLabel": "28"
            },
            "stockStatus": "HIGH",
            "itemType": "SINGLE"
        },
        {
            "id": "68167032",
            "variantGroupId": "68167032",
            "images": "https://core.rtbs.io/user/action/6ad47403c22043a795e973c7ec83dcc7/rbs.storage.get.GET_IMAGE?auth=&data=eyJpbWFnZUlkIjoiM2FkOWUzYjktOWRmMy00ZGFhLWFmODctMGYyN2Y1MzE1OWZhIiwid2lkdGgiOjQwMCwiaGVpZ2h0Ijo0MDAsImZpdCI6Im91dHNpZGUiLCJjb250ZW50VHlwZSI6ImltYWdlL3dlYnAiLCJxdWFsaXR5IjozMH0&platform=WEB&",
            "attributes": [
                {
                    "attType": "NUMBER",
                    "fieldName": "rating",
                    "fieldNameLabel": "rating",
                    "valueLabel": "5",
                    "value": 5
                },
                {
                    "attType": "LIST",
                    "fieldName": "categories",
                    "fieldNameLabel": "Kategoriler",
                    "valueLabel": "",
                    "value": "",
                    "listValue": ["GIDA-OF7AC", "TEMELGIDA-4D592", "MAKARNA-71KRH"],
                    "listValueLabel": ["GIDA", "Temel Gıda", "Makarna"],
                    "badges": []
                },
                {
                    "attType": "TEXT",
                    "fieldName": "shortName",
                    "fieldNameLabel": "shortName",
                    "valueLabel": "Knorr Çabuk Noodle Körili 66 g",
                    "value": "Knorr Çabuk Noodle Körili 66 g"
                },
                {
                    "attType": "KEYWORD",
                    "fieldName": "brand",
                    "fieldNameLabel": "Markalar",
                    "valueLabel": "KNORR",
                    "value": "KNORR"
                },
                {
                    "attType": "LONG_TEXT",
                    "fieldName": "productDescription",
                    "fieldNameLabel": "productDescription",
                    "valueLabel": "Yeni Knorr Çabuk Noodle, Hızlı ve Lezzetli! Klasik Körili Noodle, Knorr'un Lezzeti ve Kalitesiyle Buluşuyor! Lezzetini 7 Farklı Baharatın Uyumundan Alan Yeni Knorr Körili Noodle Lezzeti Sadece 3 Dk Uzağında!  Lezzete Doymak İçin Tek Yapman Gereken Bir Kapta Noodle'ı, Paket İçinden Çıkan Çeşniyi ve Kaynar Suyu karıştırmak ve 3 Dk kısık ateşte pişirmek. Afiyet olsun :)",
                    "value": "Yeni Knorr Çabuk Noodle, Hızlı ve Lezzetli! Klasik Körili Noodle, Knorr'un Lezzeti ve Kalitesiyle Buluşuyor! Lezzetini 7 Farklı Baharatın Uyumundan Alan Yeni Knorr Körili Noodle Lezzeti Sadece 3 Dk Uzağında!  Lezzete Doymak İçin Tek Yapman Gereken Bir Kapta Noodle'ı, Paket İçinden Çıkan Çeşniyi ve Kaynar Suyu karıştırmak ve 3 Dk kısık ateşte pişirmek. Afiyet olsun :)"
                },
                {
                    "attType": "LIST",
                    "fieldName": "productFeature",
                    "fieldNameLabel": "Ürün Özelliği",
                    "valueLabel": "",
                    "value": "",
                    "listValue": [],
                    "listValueLabel": [],
                    "badges": []
                },
                {
                    "attType": "LIST",
                    "fieldName": "tags",
                    "fieldNameLabel": "tags",
                    "valueLabel": "",
                    "value": "",
                    "listValue": [],
                    "listValueLabel": [],
                    "badges": []
                },
                {
                    "attType": "TEXT",
                    "fieldName": "longName",
                    "fieldNameLabel": "longName",
                    "valueLabel": "Knorr Çabuk Noodle Körili 66 g",
                    "value": "Knorr Çabuk Noodle Körili 66 g"
                }
            ],
            "priceTag": {
                "currency": "TRY",
                "merchantId": "default",
                "values": [],
                "price": 345,
                "priceLabel": "3.45 TL",
                "discountedPrice": 250,
                "discountedPriceLabel": "2.50 TL",
                "discountRate": 28,
                "discountRateLabel": "28"
            },
            "stockStatus": "HIGH",
            "itemType": "SINGLE"
        },
        {
            "id": "4031800",
            "variantGroupId": "4031800",
            "images": "https://core.rtbs.io/user/action/6ad47403c22043a795e973c7ec83dcc7/rbs.storage.get.GET_IMAGE?auth=&data=eyJpbWFnZUlkIjoiOTAyMGQ3NGUtNmUxYi00ZDg3LTg4ODItNjkzMTE1MGYzMDc5Iiwid2lkdGgiOjQwMCwiaGVpZ2h0Ijo0MDAsImZpdCI6Im91dHNpZGUiLCJjb250ZW50VHlwZSI6ImltYWdlL3dlYnAiLCJxdWFsaXR5IjozMH0&platform=WEB&",
            "attributes": [
                {
                    "attType": "LIST",
                    "fieldName": "categories",
                    "fieldNameLabel": "Kategoriler",
                    "valueLabel": "",
                    "value": "",
                    "listValue": ["GIDA-OF7AC", "ATISTIRMALIK-N5RUF", "BISKUVI-0OPUQ"],
                    "listValueLabel": ["GIDA", "Atıştırmalık", "Bisküvi"],
                    "badges": []
                },
                {
                    "attType": "TEXT",
                    "fieldName": "shortName",
                    "fieldNameLabel": "shortName",
                    "valueLabel": "Eti Negro 110 g",
                    "value": "Eti Negro 110 g"
                },
                {
                    "attType": "KEYWORD",
                    "fieldName": "brand",
                    "fieldNameLabel": "Markalar",
                    "valueLabel": "ETI",
                    "value": "ETI"
                },
                {
                    "attType": "LONG_TEXT",
                    "fieldName": "productDescription",
                    "fieldNameLabel": "productDescription",
                    "valueLabel": "Eti Nego Kakaolu Kremalı Bisküvi 110 g, kakaonun yoğun tadını sevenler için lezzetli bir alternatif. Eti Nego, kakaolu kıtır bisküvi ve nefis kremanın uyumunu bir arada sunuyor. \n\nTatlı bir şeyler atıştırmak istediğiniz zamanlara veya beş çayı vakitlerinize keyif katan Nego'yu, birbirinden lezzetli tatlı tariflerinde kullanarak da tüketebilirsiniz. \n\nEti Nego ile Cheesecake Tarifi\n\n﻿Eti Nego ile kolayca hazırlanabilen cheesecake tarifi için malzemeler:\n\nTabanı için:\n- 60 g tereyağı\n- 3 paket Eti Nego bisküvi\n\nKreması için:\n- 2 paket labne peyniri\n- 1 paket çiğ krema (200 ml)\n- 5 yemek kaşığı toz şeker\n- 3 adet yumurta\n- 1 paket vanilya\n\nYapılışı:\n1. İlk önce tereyağını yakmadan eritin. Eti Nego'ları rondodan geçirin ve tereyağı ile karıştırın. \n2. Kelepçeli kabınızın alt tabanına hazırladığını karışı iyice yayın. \n3. Daha sonra labne ve şekeri güzelce çırpın. İyice karışınca üstüne çiğ kremayı ve vanilyayı ilave edin. Karışım homojen hale gelince yumurtaları teker teker ekleyerek çırpmaya devam edin. \n4. Kremayı, önceden hazırladığınız tabanın üzerine dökün ve önceden ısıtılmış 170 derece fırında 45 dakika kadar pişirin. Buzdolabında en az 5 saat kadar bekletip servis edin. \n\nKullanım Önerileri\nDoğrudan güneş ışığına maruz bırakmayınız. Serin ve rutubetsiz yerde muhafaza ediniz.\n\nNet Miktar (g/ml)\n110\n\nMenşei\nTÜRKİYE\n\nİçindekiler\nBuğday Unu (Gluten içerir), Bitkisel Yağ (Palm, Ayçiçek, Pamuk, Kanola), Şeker, İnvert Şeker Şurubu, Kakao %8, Süt Tozu, Kabartıcılar (Amonyum Hidrojen Karbonat, Sodyum Hidrojen Karbonat), Tuz, Aroma verici, Krema %20 [Şeker, Bitkisel Yağ (Palm, Ayçiçek, Pamuk, Kanola), Nişasta, Süt Tozu, Aroma verici].\n\nAlerjen Uyarısı\nGluten ve Süt ürünü içerir. Eser miktarda Fındık, Soya ürünü ve Yumurta içerebilir.\n\nSaklama Koşulları\nSerin ve Kuru ortamda muhafaza ediniz\n\nGıda İşletmecisi / Üretici / İthalatçı / Dağıtıcı\nETİ GIDA SAN.ve TİC.A.Ş.",
                    "value": "Eti Nego Kakaolu Kremalı Bisküvi 110 g, kakaonun yoğun tadını sevenler için lezzetli bir alternatif. Eti Nego, kakaolu kıtır bisküvi ve nefis kremanın uyumunu bir arada sunuyor. \n\nTatlı bir şeyler atıştırmak istediğiniz zamanlara veya beş çayı vakitlerinize keyif katan Nego'yu, birbirinden lezzetli tatlı tariflerinde kullanarak da tüketebilirsiniz. \n\nEti Nego ile Cheesecake Tarifi\n\n﻿Eti Nego ile kolayca hazırlanabilen cheesecake tarifi için malzemeler:\n\nTabanı için:\n- 60 g tereyağı\n- 3 paket Eti Nego bisküvi\n\nKreması için:\n- 2 paket labne peyniri\n- 1 paket çiğ krema (200 ml)\n- 5 yemek kaşığı toz şeker\n- 3 adet yumurta\n- 1 paket vanilya\n\nYapılışı:\n1. İlk önce tereyağını yakmadan eritin. Eti Nego'ları rondodan geçirin ve tereyağı ile karıştırın. \n2. Kelepçeli kabınızın alt tabanına hazırladığını karışı iyice yayın. \n3. Daha sonra labne ve şekeri güzelce çırpın. İyice karışınca üstüne çiğ kremayı ve vanilyayı ilave edin. Karışım homojen hale gelince yumurtaları teker teker ekleyerek çırpmaya devam edin. \n4. Kremayı, önceden hazırladığınız tabanın üzerine dökün ve önceden ısıtılmış 170 derece fırında 45 dakika kadar pişirin. Buzdolabında en az 5 saat kadar bekletip servis edin. \n\nKullanım Önerileri\nDoğrudan güneş ışığına maruz bırakmayınız. Serin ve rutubetsiz yerde muhafaza ediniz.\n\nNet Miktar (g/ml)\n110\n\nMenşei\nTÜRKİYE\n\nİçindekiler\nBuğday Unu (Gluten içerir), Bitkisel Yağ (Palm, Ayçiçek, Pamuk, Kanola), Şeker, İnvert Şeker Şurubu, Kakao %8, Süt Tozu, Kabartıcılar (Amonyum Hidrojen Karbonat, Sodyum Hidrojen Karbonat), Tuz, Aroma verici, Krema %20 [Şeker, Bitkisel Yağ (Palm, Ayçiçek, Pamuk, Kanola), Nişasta, Süt Tozu, Aroma verici].\n\nAlerjen Uyarısı\nGluten ve Süt ürünü içerir. Eser miktarda Fındık, Soya ürünü ve Yumurta içerebilir.\n\nSaklama Koşulları\nSerin ve Kuru ortamda muhafaza ediniz\n\nGıda İşletmecisi / Üretici / İthalatçı / Dağıtıcı\nETİ GIDA SAN.ve TİC.A.Ş."
                },
                {
                    "attType": "LIST",
                    "fieldName": "productFeature",
                    "fieldNameLabel": "Ürün Özelliği",
                    "valueLabel": "",
                    "value": "",
                    "listValue": [],
                    "listValueLabel": [],
                    "badges": []
                },
                {
                    "attType": "LIST",
                    "fieldName": "tags",
                    "fieldNameLabel": "tags",
                    "valueLabel": "",
                    "value": "",
                    "listValue": [],
                    "listValueLabel": [],
                    "badges": []
                },
                {
                    "attType": "TEXT",
                    "fieldName": "longName",
                    "fieldNameLabel": "longName",
                    "valueLabel": "Eti Nego 110 g",
                    "value": "Eti Nego 110 g"
                }
            ],
            "priceTag": {
                "currency": "TRY",
                "merchantId": "default",
                "values": [],
                "price": 275,
                "priceLabel": "2.75 TL",
                "discountedPrice": 253,
                "discountedPriceLabel": "2.53 TL",
                "discountRate": 8,
                "discountRateLabel": "8"
            },
            "stockStatus": "HIGH",
            "itemType": "SINGLE"
        },
        {
            "id": "63000080",
            "variantGroupId": "63000080",
            "images": "https://core.rtbs.io/user/action/6ad47403c22043a795e973c7ec83dcc7/rbs.storage.get.GET_IMAGE?auth=&data=eyJpbWFnZUlkIjoiZmNmZTQyZDgtMmI4MS00Y2UyLWEwYzQtOGE1NTJlMjRmYmE5Iiwid2lkdGgiOjQwMCwiaGVpZ2h0Ijo0MDAsImZpdCI6Im91dHNpZGUiLCJjb250ZW50VHlwZSI6ImltYWdlL3dlYnAiLCJxdWFsaXR5IjozMH0&platform=WEB&",
            "attributes": [
                {
                    "attType": "LIST",
                    "fieldName": "categories",
                    "fieldNameLabel": "Kategoriler",
                    "valueLabel": "",
                    "value": "",
                    "listValue": ["GIDA-OF7AC", "ATISTIRMALIK-N5RUF", "BAR-KL7G6"],
                    "listValueLabel": ["GIDA", "Atıştırmalık", "Bar"],
                    "badges": []
                },
                {
                    "attType": "TEXT",
                    "fieldName": "shortName",
                    "fieldNameLabel": "shortName",
                    "valueLabel": "Tadım Fındıklı Kuruyemiş Bar 30 g",
                    "value": "Tadım Fındıklı Kuruyemiş Bar 30 g"
                },
                {
                    "attType": "KEYWORD",
                    "fieldName": "brand",
                    "fieldNameLabel": "Markalar",
                    "valueLabel": "TADIM",
                    "value": "TADIM"
                },
                {
                    "attType": "LONG_TEXT",
                    "fieldName": "productDescription",
                    "fieldNameLabel": "productDescription",
                    "valueLabel": "Tadım'ın kuruyemiş sektöründeki sağlık ve kalite anlayışıyla çıkardığı bu ürününün içerisinde 63 % oranında fındık ve kuru meyve, yulaf, pirinç patlakları ve bal bulunuyor. Tadım'ın tüm ürünleri gibi doğal olan Kuruyemiş Bar, doyurucu özelliği ile açlığınızı yatıştırmak için de bire bir. Düşük kalorisiyle kahvaltıda, çocukların beslenme çantalarında, iş yerinizde, toplantılarda, okulda, öğün aralarında, arabada, spordan önce ve sonra, kısacası acıktığınızı hissettiğiniz her anda ve her yerde yanınızda olan Kuruyemiş Bar, sadece Tadım'da.",
                    "value": "Tadım'ın kuruyemiş sektöründeki sağlık ve kalite anlayışıyla çıkardığı bu ürününün içerisinde 63 % oranında fındık ve kuru meyve, yulaf, pirinç patlakları ve bal bulunuyor. Tadım'ın tüm ürünleri gibi doğal olan Kuruyemiş Bar, doyurucu özelliği ile açlığınızı yatıştırmak için de bire bir. Düşük kalorisiyle kahvaltıda, çocukların beslenme çantalarında, iş yerinizde, toplantılarda, okulda, öğün aralarında, arabada, spordan önce ve sonra, kısacası acıktığınızı hissettiğiniz her anda ve her yerde yanınızda olan Kuruyemiş Bar, sadece Tadım'da."
                },
                {
                    "attType": "LIST",
                    "fieldName": "productFeature",
                    "fieldNameLabel": "Ürün Özelliği",
                    "valueLabel": "",
                    "value": "",
                    "listValue": [],
                    "listValueLabel": [],
                    "badges": []
                },
                {
                    "attType": "LIST",
                    "fieldName": "tags",
                    "fieldNameLabel": "tags",
                    "valueLabel": "",
                    "value": "",
                    "listValue": [],
                    "listValueLabel": [],
                    "badges": []
                },
                {
                    "attType": "TEXT",
                    "fieldName": "longName",
                    "fieldNameLabel": "longName",
                    "valueLabel": "Tadım Fındıklı Kuruyemiş Bar 30 g",
                    "value": "Tadım Fındıklı Kuruyemiş Bar 30 g"
                }
            ],
            "priceTag": {
                "currency": "TRY",
                "merchantId": "default",
                "values": [],
                "price": 300,
                "priceLabel": "3.00 TL",
                "discountedPrice": 255,
                "discountedPriceLabel": "2.55 TL",
                "discountRate": 15,
                "discountRateLabel": "15"
            },
            "stockStatus": "2",
            "itemType": "SINGLE"
        },
        {
            "id": "63000357",
            "variantGroupId": "63000357",
            "images": "https://core.rtbs.io/user/action/6ad47403c22043a795e973c7ec83dcc7/rbs.storage.get.GET_IMAGE?auth=&data=eyJpbWFnZUlkIjoiMTgzZWE1ZDgtODdkOS00NDg4LTgzODMtMzQ3ZGQ0Zjg3YTMxIiwid2lkdGgiOjQwMCwiaGVpZ2h0Ijo0MDAsImZpdCI6Im91dHNpZGUiLCJjb250ZW50VHlwZSI6ImltYWdlL3dlYnAiLCJxdWFsaXR5IjozMH0&platform=WEB&",
            "attributes": [
                {
                    "attType": "LIST",
                    "fieldName": "categories",
                    "fieldNameLabel": "Kategoriler",
                    "valueLabel": "",
                    "value": "",
                    "listValue": ["GIDA-OF7AC", "ATISTIRMALIK-N5RUF", "BAR-KL7G6"],
                    "listValueLabel": ["GIDA", "Atıştırmalık", "Bar"],
                    "badges": []
                },
                {
                    "attType": "TEXT",
                    "fieldName": "shortName",
                    "fieldNameLabel": "shortName",
                    "valueLabel": "Tadım Sportif Bar 30 g",
                    "value": "Tadım Sportif Bar 30 g"
                },
                {
                    "attType": "KEYWORD",
                    "fieldName": "brand",
                    "fieldNameLabel": "Markalar",
                    "valueLabel": "TADIM",
                    "value": "TADIM"
                },
                {
                    "attType": "LONG_TEXT",
                    "fieldName": "productDescription",
                    "fieldNameLabel": "productDescription",
                    "valueLabel": "Tadım'ın kuruyemiş sektöründeki sağlık ve kalite anlayışıyla çıkardığı bu ürününün içerisinde 65% oranında kuruyemiş ve kuru meyve, yulaf, pirinç patlakları ve bal bulunuyor. Tadım'ın tüm ürünleri gibi doğal olan Kuruyemiş Bar, doyurucu özelliği ile açlığınızı yatıştırmak için de bire bir. Protein kaynağı olarak spordan önce ve sonra, kahvaltıda, iş yerinizde, toplantılarda, okulda, öğün aralarında, arabada, kısacası acıktığınızı hissettiğiniz her anda ve her yerde yanınızda olan Kuruyemiş Bar, sadece Tadım'da.",
                    "value": "Tadım'ın kuruyemiş sektöründeki sağlık ve kalite anlayışıyla çıkardığı bu ürününün içerisinde 65% oranında kuruyemiş ve kuru meyve, yulaf, pirinç patlakları ve bal bulunuyor. Tadım'ın tüm ürünleri gibi doğal olan Kuruyemiş Bar, doyurucu özelliği ile açlığınızı yatıştırmak için de bire bir. Protein kaynağı olarak spordan önce ve sonra, kahvaltıda, iş yerinizde, toplantılarda, okulda, öğün aralarında, arabada, kısacası acıktığınızı hissettiğiniz her anda ve her yerde yanınızda olan Kuruyemiş Bar, sadece Tadım'da."
                },
                {
                    "attType": "LIST",
                    "fieldName": "productFeature",
                    "fieldNameLabel": "Ürün Özelliği",
                    "valueLabel": "",
                    "value": "",
                    "listValue": [],
                    "listValueLabel": [],
                    "badges": []
                },
                {
                    "attType": "LIST",
                    "fieldName": "tags",
                    "fieldNameLabel": "tags",
                    "valueLabel": "",
                    "value": "",
                    "listValue": [],
                    "listValueLabel": [],
                    "badges": []
                },
                {
                    "attType": "TEXT",
                    "fieldName": "longName",
                    "fieldNameLabel": "longName",
                    "valueLabel": "Tadım Sportif Bar 30 g",
                    "value": "Tadım Sportif Bar 30 g"
                }
            ],
            "priceTag": {
                "currency": "TRY",
                "merchantId": "default",
                "values": [],
                "price": 300,
                "priceLabel": "3.00 TL",
                "discountedPrice": 255,
                "discountedPriceLabel": "2.55 TL",
                "discountRate": 15,
                "discountRateLabel": "15"
            },
            "stockStatus": "HIGH",
            "itemType": "SINGLE"
        },
        {
            "id": "3710100",
            "variantGroupId": "3710100",
            "images": "https://core.rtbs.io/user/action/6ad47403c22043a795e973c7ec83dcc7/rbs.storage.get.GET_IMAGE?auth=&data=eyJpbWFnZUlkIjoiNTUzN2RiNzUtZWM1MC00Y2U5LWI4YzYtNmQzNWFhMjNjMTYzIiwid2lkdGgiOjQwMCwiaGVpZ2h0Ijo0MDAsImZpdCI6Im91dHNpZGUiLCJjb250ZW50VHlwZSI6ImltYWdlL3dlYnAiLCJxdWFsaXR5IjozMH0&platform=WEB&",
            "attributes": [
                {
                    "attType": "LIST",
                    "fieldName": "categories",
                    "fieldNameLabel": "Kategoriler",
                    "valueLabel": "",
                    "value": "",
                    "listValue": ["GIDA-OF7AC", "ATISTIRMALIK-N5RUF", "BISKUVI-0OPUQ"],
                    "listValueLabel": ["GIDA", "Atıştırmalık", "Bisküvi"],
                    "badges": []
                },
                {
                    "attType": "TEXT",
                    "fieldName": "shortName",
                    "fieldNameLabel": "shortName",
                    "valueLabel": "Eti Petit Beurre mini 175 g",
                    "value": "Eti Petit Beurre mini 175 g"
                },
                {
                    "attType": "KEYWORD",
                    "fieldName": "brand",
                    "fieldNameLabel": "Markalar",
                    "valueLabel": "ETI",
                    "value": "ETI"
                },
                {
                    "attType": "LONG_TEXT",
                    "fieldName": "productDescription",
                    "fieldNameLabel": "productDescription",
                    "valueLabel": "Net Miktar (g/ml)\n175\n\nMenşei\nTÜRKİYE\n\nİçindekiler\nBuğday Unu (Gluten içerir), Şeker, Bitkisel Yağ (Palm, Ayçiçek, Pamuk, Kanola), Yağsız Pastörize Süt %6, İnvert Şeker Şurubu, Kabartıcılar (Amonyum Hidrojen Karbonat, Sodyum Hidrojen Karbonat), Tuz, Aroma verici, Un İşlem Maddesi (Sodyum Metabisülfit).\n\nAlerjen Uyarısı\nGluten, Sülfit ve Süt ürünü içerir.Eser miktarda Soya ürünü içerebilir.",
                    "value": "Net Miktar (g/ml)\n175\n\nMenşei\nTÜRKİYE\n\nİçindekiler\nBuğday Unu (Gluten içerir), Şeker, Bitkisel Yağ (Palm, Ayçiçek, Pamuk, Kanola), Yağsız Pastörize Süt %6, İnvert Şeker Şurubu, Kabartıcılar (Amonyum Hidrojen Karbonat, Sodyum Hidrojen Karbonat), Tuz, Aroma verici, Un İşlem Maddesi (Sodyum Metabisülfit).\n\nAlerjen Uyarısı\nGluten, Sülfit ve Süt ürünü içerir.Eser miktarda Soya ürünü içerebilir."
                },
                {
                    "attType": "LIST",
                    "fieldName": "productFeature",
                    "fieldNameLabel": "Ürün Özelliği",
                    "valueLabel": "",
                    "value": "",
                    "listValue": [],
                    "listValueLabel": [],
                    "badges": []
                },
                {
                    "attType": "LIST",
                    "fieldName": "tags",
                    "fieldNameLabel": "tags",
                    "valueLabel": "",
                    "value": "",
                    "listValue": [],
                    "listValueLabel": [],
                    "badges": []
                },
                {
                    "attType": "TEXT",
                    "fieldName": "longName",
                    "fieldNameLabel": "longName",
                    "valueLabel": "Eti Petit Beurre mini 175 g",
                    "value": "Eti Petit Beurre mini 175 g"
                }
            ],
            "priceTag": {
                "currency": "TRY",
                "merchantId": "default",
                "values": [],
                "price": 325,
                "priceLabel": "3.25 TL",
                "discountedPrice": 276,
                "discountedPriceLabel": "2.76 TL",
                "discountRate": 15,
                "discountRateLabel": "15"
            },
            "stockStatus": "HIGH",
            "itemType": "SINGLE"
        },
        {
            "id": "67270301",
            "variantGroupId": "67270301",
            "images": "https://core.rtbs.io/user/action/6ad47403c22043a795e973c7ec83dcc7/rbs.storage.get.GET_IMAGE?auth=&data=eyJpbWFnZUlkIjoiNjllOThhNmItM2I3Mi00OTgzLTk1NjMtZGM4MTY5NGVjMzk4Iiwid2lkdGgiOjQwMCwiaGVpZ2h0Ijo0MDAsImZpdCI6Im91dHNpZGUiLCJjb250ZW50VHlwZSI6ImltYWdlL3dlYnAiLCJxdWFsaXR5IjozMH0&platform=WEB&",
            "attributes": [
                {
                    "attType": "LIST",
                    "fieldName": "categories",
                    "fieldNameLabel": "Kategoriler",
                    "valueLabel": "",
                    "value": "",
                    "listValue": ["GUZELLIK-Z5BVT", "CILT-T2536", "CTEMIZLIK-6GL4I"],
                    "listValueLabel": ["GÜZELLİK & KİŞİSEL BAKIM", "Cilt", "Cilt Temizlik"],
                    "badges": []
                },
                {
                    "attType": "TEXT",
                    "fieldName": "shortName",
                    "fieldNameLabel": "shortName",
                    "valueLabel": "Lux Sabun Soft Touch 85 g",
                    "value": "Lux Sabun Soft Touch 85 g"
                },
                {
                    "attType": "KEYWORD",
                    "fieldName": "brand",
                    "fieldNameLabel": "Markalar",
                    "valueLabel": "LUX",
                    "value": "LUX"
                },
                {
                    "attType": "LONG_TEXT",
                    "fieldName": "productDescription",
                    "fieldNameLabel": "productDescription",
                    "valueLabel": "Lux Soft Touch Sabun parfüm katkılı içeriği ile uzun süre kalıcı hoş koku bırakır ve gün boyu ferahlık hissi verir.",
                    "value": "Lux Soft Touch Sabun parfüm katkılı içeriği ile uzun süre kalıcı hoş koku bırakır ve gün boyu ferahlık hissi verir."
                },
                {
                    "attType": "LIST",
                    "fieldName": "productFeature",
                    "fieldNameLabel": "Ürün Özelliği",
                    "valueLabel": "",
                    "value": "",
                    "listValue": [],
                    "listValueLabel": [],
                    "badges": []
                },
                {
                    "attType": "LIST",
                    "fieldName": "tags",
                    "fieldNameLabel": "tags",
                    "valueLabel": "",
                    "value": "",
                    "listValue": [],
                    "listValueLabel": [],
                    "badges": []
                },
                {
                    "attType": "TEXT",
                    "fieldName": "longName",
                    "fieldNameLabel": "longName",
                    "valueLabel": "Lux Sabun Soft Touch 85 g",
                    "value": "Lux Sabun Soft Touch 85 g"
                }
            ],
            "priceTag": {
                "currency": "TRY",
                "merchantId": "default",
                "values": [],
                "price": 375,
                "priceLabel": "3.75 TL",
                "discountedPrice": 290,
                "discountedPriceLabel": "2.90 TL",
                "discountRate": 23,
                "discountRateLabel": "23"
            },
            "stockStatus": "HIGH",
            "itemType": "SINGLE"
        },
        {
            "id": "67270306",
            "variantGroupId": "67270306",
            "images": "https://core.rtbs.io/user/action/6ad47403c22043a795e973c7ec83dcc7/rbs.storage.get.GET_IMAGE?auth=&data=eyJpbWFnZUlkIjoiNzYzMzYxZTMtOTFhMi00ZWU1LTk0NDMtZjFhNGYzMzIxNGVhIiwid2lkdGgiOjQwMCwiaGVpZ2h0Ijo0MDAsImZpdCI6Im91dHNpZGUiLCJjb250ZW50VHlwZSI6ImltYWdlL3dlYnAiLCJxdWFsaXR5IjozMH0&platform=WEB&",
            "attributes": [
                {
                    "attType": "LIST",
                    "fieldName": "categories",
                    "fieldNameLabel": "Kategoriler",
                    "valueLabel": "",
                    "value": "",
                    "listValue": ["GUZELLIK-Z5BVT", "CILT-T2536", "CTEMIZLIK-6GL4I"],
                    "listValueLabel": ["GÜZELLİK & KİŞİSEL BAKIM", "Cilt", "Cilt Temizlik"],
                    "badges": []
                },
                {
                    "attType": "TEXT",
                    "fieldName": "shortName",
                    "fieldNameLabel": "shortName",
                    "valueLabel": "Lux Sabun Creamy Perfection 85 g",
                    "value": "Lux Sabun Creamy Perfection 85 g"
                },
                {
                    "attType": "KEYWORD",
                    "fieldName": "brand",
                    "fieldNameLabel": "Markalar",
                    "valueLabel": "LUX",
                    "value": "LUX"
                },
                {
                    "attType": "LONG_TEXT",
                    "fieldName": "productDescription",
                    "fieldNameLabel": "productDescription",
                    "valueLabel": "Belirgin Derecede Yumuşak Ciltler İçin Yağlı ve Hassa Beyaz Çiçekler",
                    "value": "Belirgin Derecede Yumuşak Ciltler İçin Yağlı ve Hassa Beyaz Çiçekler"
                },
                {
                    "attType": "LIST",
                    "fieldName": "productFeature",
                    "fieldNameLabel": "Ürün Özelliği",
                    "valueLabel": "",
                    "value": "",
                    "listValue": [],
                    "listValueLabel": [],
                    "badges": []
                },
                {
                    "attType": "LIST",
                    "fieldName": "tags",
                    "fieldNameLabel": "tags",
                    "valueLabel": "",
                    "value": "",
                    "listValue": [],
                    "listValueLabel": [],
                    "badges": []
                },
                {
                    "attType": "TEXT",
                    "fieldName": "longName",
                    "fieldNameLabel": "longName",
                    "valueLabel": "Lux Sabun Creamy Perfection 85 g",
                    "value": "Lux Sabun Creamy Perfection 85 g"
                }
            ],
            "priceTag": {
                "currency": "TRY",
                "merchantId": "default",
                "values": [],
                "price": 375,
                "priceLabel": "3.75 TL",
                "discountedPrice": 290,
                "discountedPriceLabel": "2.90 TL",
                "discountRate": 23,
                "discountRateLabel": "23"
            },
            "stockStatus": "HIGH",
            "itemType": "SINGLE"
        },
        {
            "id": "67270287",
            "variantGroupId": "67270287",
            "images": "https://core.rtbs.io/user/action/6ad47403c22043a795e973c7ec83dcc7/rbs.storage.get.GET_IMAGE?auth=&data=eyJpbWFnZUlkIjoiM2IwMDk2OTYtOTFlOC00ZjBjLWE1NzgtNGQ4Yzc1MDdjMTExIiwid2lkdGgiOjQwMCwiaGVpZ2h0Ijo0MDAsImZpdCI6Im91dHNpZGUiLCJjb250ZW50VHlwZSI6ImltYWdlL3dlYnAiLCJxdWFsaXR5IjozMH0&platform=WEB&",
            "attributes": [
                {
                    "attType": "LIST",
                    "fieldName": "categories",
                    "fieldNameLabel": "Kategoriler",
                    "valueLabel": "",
                    "value": "",
                    "listValue": ["GUZELLIK-Z5BVT", "CILT-T2536", "CTEMIZLIK-6GL4I"],
                    "listValueLabel": ["GÜZELLİK & KİŞİSEL BAKIM", "Cilt", "Cilt Temizlik"],
                    "badges": []
                },
                {
                    "attType": "TEXT",
                    "fieldName": "shortName",
                    "fieldNameLabel": "shortName",
                    "valueLabel": "Lux Sabun Velvet Touch 85 g",
                    "value": "Lux Sabun Velvet Touch 85 g"
                },
                {
                    "attType": "KEYWORD",
                    "fieldName": "brand",
                    "fieldNameLabel": "Markalar",
                    "valueLabel": "LUX",
                    "value": "LUX"
                },
                {
                    "attType": "LONG_TEXT",
                    "fieldName": "productDescription",
                    "fieldNameLabel": "productDescription",
                    "valueLabel": "Lux velvet Touch Sabun kalıcı kokusu ile gün boyu ferah ve temiz hissetmenizi sağlar.",
                    "value": "Lux velvet Touch Sabun kalıcı kokusu ile gün boyu ferah ve temiz hissetmenizi sağlar."
                },
                {
                    "attType": "LIST",
                    "fieldName": "productFeature",
                    "fieldNameLabel": "Ürün Özelliği",
                    "valueLabel": "",
                    "value": "",
                    "listValue": [],
                    "listValueLabel": [],
                    "badges": []
                },
                {
                    "attType": "LIST",
                    "fieldName": "tags",
                    "fieldNameLabel": "tags",
                    "valueLabel": "",
                    "value": "",
                    "listValue": [],
                    "listValueLabel": [],
                    "badges": []
                },
                {
                    "attType": "TEXT",
                    "fieldName": "longName",
                    "fieldNameLabel": "longName",
                    "valueLabel": "Lux Sabun Velvet Touch 85 g",
                    "value": "Lux Sabun Velvet Touch 85 g"
                }
            ],
            "priceTag": {
                "currency": "TRY",
                "merchantId": "default",
                "values": [],
                "price": 375,
                "priceLabel": "3.75 TL",
                "discountedPrice": 290,
                "discountedPriceLabel": "2.90 TL",
                "discountRate": 23,
                "discountRateLabel": "23"
            },
            "stockStatus": "LOW",
            "itemType": "SINGLE"
        },
        {
            "id": "67270299",
            "variantGroupId": "67270299",
            "images": "https://core.rtbs.io/user/action/6ad47403c22043a795e973c7ec83dcc7/rbs.storage.get.GET_IMAGE?auth=&data=eyJpbWFnZUlkIjoiNjllOThhNmItM2I3Mi00OTgzLTk1NjMtZGM4MTY5NGVjMzk4Iiwid2lkdGgiOjQwMCwiaGVpZ2h0Ijo0MDAsImZpdCI6Im91dHNpZGUiLCJjb250ZW50VHlwZSI6ImltYWdlL3dlYnAiLCJxdWFsaXR5IjozMH0&platform=WEB&",
            "attributes": [
                {
                    "attType": "LIST",
                    "fieldName": "categories",
                    "fieldNameLabel": "Kategoriler",
                    "valueLabel": "",
                    "value": "",
                    "listValue": ["GUZELLIK-Z5BVT", "CILT-T2536", "CTEMIZLIK-6GL4I"],
                    "listValueLabel": ["GÜZELLİK & KİŞİSEL BAKIM", "Cilt", "Cilt Temizlik"],
                    "badges": []
                },
                {
                    "attType": "TEXT",
                    "fieldName": "shortName",
                    "fieldNameLabel": "shortName",
                    "valueLabel": "Lux Sabun Dream Delight 85 g",
                    "value": "Lux Sabun Dream Delight 85 g"
                },
                {
                    "attType": "KEYWORD",
                    "fieldName": "brand",
                    "fieldNameLabel": "Markalar",
                    "valueLabel": "LUX",
                    "value": "LUX"
                },
                {
                    "attType": "LONG_TEXT",
                    "fieldName": "productDescription",
                    "fieldNameLabel": "productDescription",
                    "valueLabel": "Lux Dream Delight Sabun ülkemizde bu kadar çok tercih edilme sebeplerinden biri de doğal ve her bütçeye uygun olmasıdır. Sabun markalarının başında gelmesi ve hemen hemen her evde kullanılması lux sabunun kendine has ve özel bir kokuya sahip olmasından kaynaklanır. Ayrıca ciltteki tüm kirleri ve mikropları etkili bir şekilde yok etme özelliğine sahip bir sabundur. Gerekli hijyeni sağlayabilmemiz için sabun seçimi çok önemlidir. Evde yaşayan kişilerin veya en önemlisi çocukların hastalanmamaları ev ve vücut temizliğine büyük oranda bağlıdır",
                    "value": "Lux Dream Delight Sabun ülkemizde bu kadar çok tercih edilme sebeplerinden biri de doğal ve her bütçeye uygun olmasıdır. Sabun markalarının başında gelmesi ve hemen hemen her evde kullanılması lux sabunun kendine has ve özel bir kokuya sahip olmasından kaynaklanır. Ayrıca ciltteki tüm kirleri ve mikropları etkili bir şekilde yok etme özelliğine sahip bir sabundur. Gerekli hijyeni sağlayabilmemiz için sabun seçimi çok önemlidir. Evde yaşayan kişilerin veya en önemlisi çocukların hastalanmamaları ev ve vücut temizliğine büyük oranda bağlıdır"
                },
                {
                    "attType": "LIST",
                    "fieldName": "productFeature",
                    "fieldNameLabel": "Ürün Özelliği",
                    "valueLabel": "",
                    "value": "",
                    "listValue": [],
                    "listValueLabel": [],
                    "badges": []
                },
                {
                    "attType": "LIST",
                    "fieldName": "tags",
                    "fieldNameLabel": "tags",
                    "valueLabel": "",
                    "value": "",
                    "listValue": [],
                    "listValueLabel": [],
                    "badges": []
                },
                {
                    "attType": "TEXT",
                    "fieldName": "longName",
                    "fieldNameLabel": "longName",
                    "valueLabel": "Lux Sabun Dream Delight 85 g",
                    "value": "Lux Sabun Dream Delight 85 g"
                }
            ],
            "priceTag": {
                "currency": "TRY",
                "merchantId": "default",
                "values": [],
                "price": 375,
                "priceLabel": "3.75 TL",
                "discountedPrice": 290,
                "discountedPriceLabel": "2.90 TL",
                "discountRate": 23,
                "discountRateLabel": "23"
            },
            "stockStatus": "HIGH",
            "itemType": "SINGLE"
        },
        {
            "id": "1635000",
            "variantGroupId": "1635000",
            "images": "https://core.rtbs.io/user/action/6ad47403c22043a795e973c7ec83dcc7/rbs.storage.get.GET_IMAGE?auth=&data=eyJpbWFnZUlkIjoiMmI0ZDgwNWQtOTUwMS00ZWVlLTkwMDYtODk2ODJlOTUwNWYzIiwid2lkdGgiOjQwMCwiaGVpZ2h0Ijo0MDAsImZpdCI6Im91dHNpZGUiLCJjb250ZW50VHlwZSI6ImltYWdlL3dlYnAiLCJxdWFsaXR5IjozMH0&platform=WEB&",
            "attributes": [
                {
                    "attType": "LIST",
                    "fieldName": "categories",
                    "fieldNameLabel": "Kategoriler",
                    "valueLabel": "",
                    "value": "",
                    "listValue": ["GIDA-OF7AC", "ATISTIRMALIK-N5RUF", "BISKUVI-0OPUQ"],
                    "listValueLabel": ["GIDA", "Atıştırmalık", "Bisküvi"],
                    "badges": []
                },
                {
                    "attType": "TEXT",
                    "fieldName": "shortName",
                    "fieldNameLabel": "shortName",
                    "valueLabel": "Eti Burçak Çikolatalı 114 g",
                    "value": "Eti Burçak Çikolatalı 114 g"
                },
                {
                    "attType": "KEYWORD",
                    "fieldName": "brand",
                    "fieldNameLabel": "Markalar",
                    "valueLabel": "ETI",
                    "value": "ETI"
                },
                {
                    "attType": "LONG_TEXT",
                    "fieldName": "productDescription",
                    "fieldNameLabel": "productDescription",
                    "valueLabel": "Eti Burçak Sütlü Çikolatalı Bisküvi, besin özellikleri açısından oldukça zengin olan Eti'nin bu geleneksel lezzeti, kepekli doğal buğday unuyla yapılması sayesinde çok hafif bir tat sunar.\n\n\n\nŞimdi ise lezzetli, ağızda dağılan, geleneksel Eti Burçak bisküvisini, nefis sütlü çikolata ile buluşturarak bisküvi keyfini ikiye katlıyor! \n\nKullanım Önerileri\nDoğrudan güneş ışığına maruz bırakmayınız. Serin ve rutubetsiz ortamda muhafaza ediniz.\n\nNet Miktar (g/ml)\n114\n\nMenşei\nTÜRKİYE\n\nİçindekiler\nBisküvi %71 [Buğday Unu, Tam Buğday Unu %24, Bitkisel Yağ (Palm, Ayçiçek, Pamuk, Kanola), Şeker, İnvert Şeker Şurubu, Yağsız Süt Tozu, Kabartıcılar (Amonyum Hidrojen Karbonat, Sodyum Hidrojen Karbonat, Sodyum Asit Pirofosfat), Pastörize Yumurta, Malt Ekstrakt (Arpa Ürünü), Kepek, Tuz, Aroma vericiler, Emülgatör (Mono ve Digliseritlerin Diasetil Tartarik Asit Esterleri), Renklendirici (Karamel)], Sütlü Çikolata %29 [Şeker, Tam Yağlı Süt Tozu, Kakao Yağı, Kakao Kitlesi, Tereyağı (Süt Ürünü), Bitkisel Yağ (Palm), Yağsız Süt Tozu, Emülgatörler (Ayçiçek Lesitini, Poligliserol Polirisinolat), Aroma verici (Vanilin), Kakao Kuru Maddesi En Az %27'dir].\n\nAlerjen Uyarısı\nGluten içerir. Eser miktarda Fındık ve Soya ürünü ve Susam içerebilir\n\nSaklama Koşulları\nSerin ve Kuru ortamda muhafaza ediniz\n\nGıda İşletmecisi / Üretici / İthalatçı / Dağıtıcı\nETİ GIDA SAN.ve TİC.A.Ş.",
                    "value": "Eti Burçak Sütlü Çikolatalı Bisküvi, besin özellikleri açısından oldukça zengin olan Eti'nin bu geleneksel lezzeti, kepekli doğal buğday unuyla yapılması sayesinde çok hafif bir tat sunar.\n\n\n\nŞimdi ise lezzetli, ağızda dağılan, geleneksel Eti Burçak bisküvisini, nefis sütlü çikolata ile buluşturarak bisküvi keyfini ikiye katlıyor! \n\nKullanım Önerileri\nDoğrudan güneş ışığına maruz bırakmayınız. Serin ve rutubetsiz ortamda muhafaza ediniz.\n\nNet Miktar (g/ml)\n114\n\nMenşei\nTÜRKİYE\n\nİçindekiler\nBisküvi %71 [Buğday Unu, Tam Buğday Unu %24, Bitkisel Yağ (Palm, Ayçiçek, Pamuk, Kanola), Şeker, İnvert Şeker Şurubu, Yağsız Süt Tozu, Kabartıcılar (Amonyum Hidrojen Karbonat, Sodyum Hidrojen Karbonat, Sodyum Asit Pirofosfat), Pastörize Yumurta, Malt Ekstrakt (Arpa Ürünü), Kepek, Tuz, Aroma vericiler, Emülgatör (Mono ve Digliseritlerin Diasetil Tartarik Asit Esterleri), Renklendirici (Karamel)], Sütlü Çikolata %29 [Şeker, Tam Yağlı Süt Tozu, Kakao Yağı, Kakao Kitlesi, Tereyağı (Süt Ürünü), Bitkisel Yağ (Palm), Yağsız Süt Tozu, Emülgatörler (Ayçiçek Lesitini, Poligliserol Polirisinolat), Aroma verici (Vanilin), Kakao Kuru Maddesi En Az %27'dir].\n\nAlerjen Uyarısı\nGluten içerir. Eser miktarda Fındık ve Soya ürünü ve Susam içerebilir\n\nSaklama Koşulları\nSerin ve Kuru ortamda muhafaza ediniz\n\nGıda İşletmecisi / Üretici / İthalatçı / Dağıtıcı\nETİ GIDA SAN.ve TİC.A.Ş."
                },
                {
                    "attType": "LIST",
                    "fieldName": "productFeature",
                    "fieldNameLabel": "Ürün Özelliği",
                    "valueLabel": "",
                    "value": "",
                    "listValue": [],
                    "listValueLabel": [],
                    "badges": []
                },
                {
                    "attType": "LIST",
                    "fieldName": "tags",
                    "fieldNameLabel": "tags",
                    "valueLabel": "",
                    "value": "",
                    "listValue": [],
                    "listValueLabel": [],
                    "badges": []
                },
                {
                    "attType": "TEXT",
                    "fieldName": "longName",
                    "fieldNameLabel": "longName",
                    "valueLabel": "Eti Burçak Çikolatalı 114 g",
                    "value": "Eti Burçak Çikolatalı 114 g"
                }
            ],
            "priceTag": {
                "currency": "TRY",
                "merchantId": "default",
                "values": [],
                "price": 350,
                "priceLabel": "3.50 TL",
                "discountedPrice": 298,
                "discountedPriceLabel": "2.98 TL",
                "discountRate": 15,
                "discountRateLabel": "15"
            },
            "stockStatus": "HIGH",
            "itemType": "SINGLE"
        },
        {
            "id": "1645900",
            "variantGroupId": "1645900",
            "images": "https://core.rtbs.io/user/action/6ad47403c22043a795e973c7ec83dcc7/rbs.storage.get.GET_IMAGE?auth=&data=eyJpbWFnZUlkIjoiMjQ4MGRkNDMtMzA0NC00OGFmLThjOTktNDEyYTYxYThjMzc1Iiwid2lkdGgiOjQwMCwiaGVpZ2h0Ijo0MDAsImZpdCI6Im91dHNpZGUiLCJjb250ZW50VHlwZSI6ImltYWdlL3dlYnAiLCJxdWFsaXR5IjozMH0&platform=WEB&",
            "attributes": [
                {
                    "attType": "LIST",
                    "fieldName": "categories",
                    "fieldNameLabel": "Kategoriler",
                    "valueLabel": "",
                    "value": "",
                    "listValue": ["GIDA-OF7AC", "ATISTIRMALIK-N5RUF", "BAR-KL7G6"],
                    "listValueLabel": ["GIDA", "Atıştırmalık", "Bar"],
                    "badges": []
                },
                {
                    "attType": "TEXT",
                    "fieldName": "shortName",
                    "fieldNameLabel": "shortName",
                    "valueLabel": "Eti Lifalif Bitter Çikolatalı Yulaf Bar 35 g",
                    "value": "Eti Lifalif Bitter Çikolatalı Yulaf Bar 35 g"
                },
                {
                    "attType": "KEYWORD",
                    "fieldName": "brand",
                    "fieldNameLabel": "Markalar",
                    "valueLabel": "ETI",
                    "value": "ETI"
                },
                {
                    "attType": "LONG_TEXT",
                    "fieldName": "productDescription",
                    "fieldNameLabel": "productDescription",
                    "valueLabel": "Eti Lifalif Bitter Çikolatalı Müsli Bar, yulaflı içeriği ile uzun süre tokluk sağladığı gibi, tatlı bir lezzet sunarak, çay kahve yanına da çok yakışıyor. \n\n\n\nTatlı isteğinizi hafif seçimlerle atlatmak isterseniz deneyebileceğiniz Eti Lifalif çikolatalı müsli barı, okulda, işte, yolculuklarda yanınızda taşıyarak açlığınızı bastırabilirsiniz. \n\nKullanım Önerileri\nDoğrudan güneş ışığına maruz bırakmayınız. Serin ve kuru ortamda saklayınız.\n\nNet Miktar (g/ml)\n35\n\nMenşei\nTÜRKİYE\n\nİçindekiler\nYulaf Ezmesi %51, Bitter Çikolata %14,3 [Kakao Kitlesi, Şeker, Kakao, Kakao Yağı, Dekstroz, Emülgatör (Ayçiçek Lesitini), Aroma verici (Vanilin). Kakao Kuru Maddesi En Az %70'tir.], Zeytinyağı, Tam Buğday Gevreği, Hurma Özü, Elma Suyu Konsantresi, Tereyağı (Süt Ürünü), Tuz.\n\nAlerjen Uyarısı\nGluten ve Süt ürünü içerir.Eser miktarda Badem, Fındık, Yer Fıstığı ve Yumurta içerebilir.\n\nSaklama Koşulları\nSerin ve Kuru ortamda muhafaza ediniz\n\nGıda İşletmecisi / Üretici / İthalatçı / Dağıtıcı\nETİ GIDA SAN.ve TİC.A.Ş.",
                    "value": "Eti Lifalif Bitter Çikolatalı Müsli Bar, yulaflı içeriği ile uzun süre tokluk sağladığı gibi, tatlı bir lezzet sunarak, çay kahve yanına da çok yakışıyor. \n\n\n\nTatlı isteğinizi hafif seçimlerle atlatmak isterseniz deneyebileceğiniz Eti Lifalif çikolatalı müsli barı, okulda, işte, yolculuklarda yanınızda taşıyarak açlığınızı bastırabilirsiniz. \n\nKullanım Önerileri\nDoğrudan güneş ışığına maruz bırakmayınız. Serin ve kuru ortamda saklayınız.\n\nNet Miktar (g/ml)\n35\n\nMenşei\nTÜRKİYE\n\nİçindekiler\nYulaf Ezmesi %51, Bitter Çikolata %14,3 [Kakao Kitlesi, Şeker, Kakao, Kakao Yağı, Dekstroz, Emülgatör (Ayçiçek Lesitini), Aroma verici (Vanilin). Kakao Kuru Maddesi En Az %70'tir.], Zeytinyağı, Tam Buğday Gevreği, Hurma Özü, Elma Suyu Konsantresi, Tereyağı (Süt Ürünü), Tuz.\n\nAlerjen Uyarısı\nGluten ve Süt ürünü içerir.Eser miktarda Badem, Fındık, Yer Fıstığı ve Yumurta içerebilir.\n\nSaklama Koşulları\nSerin ve Kuru ortamda muhafaza ediniz\n\nGıda İşletmecisi / Üretici / İthalatçı / Dağıtıcı\nETİ GIDA SAN.ve TİC.A.Ş."
                },
                {
                    "attType": "LIST",
                    "fieldName": "productFeature",
                    "fieldNameLabel": "Ürün Özelliği",
                    "valueLabel": "",
                    "value": "",
                    "listValue": [],
                    "listValueLabel": [],
                    "badges": []
                },
                {
                    "attType": "LIST",
                    "fieldName": "tags",
                    "fieldNameLabel": "tags",
                    "valueLabel": "",
                    "value": "",
                    "listValue": [],
                    "listValueLabel": [],
                    "badges": []
                },
                {
                    "attType": "TEXT",
                    "fieldName": "longName",
                    "fieldNameLabel": "longName",
                    "valueLabel": "Eti Lifalif Bitter Çikolatalı Yulaf Bar 35 g",
                    "value": "Eti Lifalif Bitter Çikolatalı Yulaf Bar 35 g"
                }
            ],
            "priceTag": {
                "currency": "TRY",
                "merchantId": "default",
                "values": [],
                "price": 350,
                "priceLabel": "3.50 TL",
                "discountedPrice": 298,
                "discountedPriceLabel": "2.98 TL",
                "discountRate": 15,
                "discountRateLabel": "15"
            },
            "stockStatus": "HIGH",
            "itemType": "SINGLE"
        },
        {
            "id": "8116790X",
            "variantGroupId": "8116790X",
            "images": "https://core.rtbs.io/user/action/6ad47403c22043a795e973c7ec83dcc7/rbs.storage.get.GET_IMAGE?auth=&data=eyJpbWFnZUlkIjoiZTc4MTRiZDktZjM5MS00NTM1LTlmYWItYzdlOGRhZjcyNmNjIiwid2lkdGgiOjQwMCwiaGVpZ2h0Ijo0MDAsImZpdCI6Im91dHNpZGUiLCJjb250ZW50VHlwZSI6ImltYWdlL3dlYnAiLCJxdWFsaXR5IjozMH0&platform=WEB&",
            "attributes": [
                {
                    "attType": "LIST",
                    "fieldName": "categories",
                    "fieldNameLabel": "Kategoriler",
                    "valueLabel": "",
                    "value": "",
                    "listValue": ["GIDA-OF7AC", "DONDURMA-K123P", "TEKLI-G1R2T"],
                    "listValueLabel": ["GIDA", "Dondurma", "Tekli Dondurma"],
                    "badges": []
                },
                {
                    "attType": "TEXT",
                    "fieldName": "shortName",
                    "fieldNameLabel": "shortName",
                    "valueLabel": "Algida Frootie Super Energy 105 ml",
                    "value": "Algida Frootie Super Energy 105 ml"
                },
                {
                    "attType": "KEYWORD",
                    "fieldName": "brand",
                    "fieldNameLabel": "Markalar",
                    "valueLabel": "FROOTIE",
                    "value": "FROOTIE"
                },
                {
                    "attType": "LONG_TEXT",
                    "fieldName": "productDescription",
                    "fieldNameLabel": "productDescription",
                    "valueLabel": "Algida Frootie Super Energy 105 ml",
                    "value": "Algida Frootie Super Energy 105 ml"
                },
                {
                    "attType": "LIST",
                    "fieldName": "productFeature",
                    "fieldNameLabel": "Ürün Özelliği",
                    "valueLabel": "",
                    "value": "",
                    "listValue": [],
                    "listValueLabel": [],
                    "badges": []
                },
                {
                    "attType": "LIST",
                    "fieldName": "tags",
                    "fieldNameLabel": "tags",
                    "valueLabel": "",
                    "value": "",
                    "listValue": [],
                    "listValueLabel": [],
                    "badges": []
                },
                {
                    "attType": "TEXT",
                    "fieldName": "longName",
                    "fieldNameLabel": "longName",
                    "valueLabel": "Algida Frootie Super Energy 105 ml",
                    "value": "Algida Frootie Super Energy 105 ml"
                }
            ],
            "priceTag": {
                "currency": "TRY",
                "merchantId": "default",
                "values": [],
                "price": 400,
                "priceLabel": "4.00 TL",
                "discountedPrice": 300,
                "discountedPriceLabel": "3.00 TL",
                "discountRate": 25,
                "discountRateLabel": "25"
            },
            "stockStatus": "LOW",
            "itemType": "SINGLE"
        },
        {
            "id": "8116795X",
            "variantGroupId": "8116795X",
            "images": "https://core.rtbs.io/user/action/6ad47403c22043a795e973c7ec83dcc7/rbs.storage.get.GET_IMAGE?auth=&data=eyJpbWFnZUlkIjoiYjdhODk0NGMtMGQ0NS00YTUxLThmMWYtMDkyYTI2YWI2NjhiIiwid2lkdGgiOjQwMCwiaGVpZ2h0Ijo0MDAsImZpdCI6Im91dHNpZGUiLCJjb250ZW50VHlwZSI6ImltYWdlL3dlYnAiLCJxdWFsaXR5IjozMH0&platform=WEB&",
            "attributes": [
                {
                    "attType": "LIST",
                    "fieldName": "categories",
                    "fieldNameLabel": "Kategoriler",
                    "valueLabel": "",
                    "value": "",
                    "listValue": ["GIDA-OF7AC", "DONDURMA-K123P", "TEKLI-G1R2T"],
                    "listValueLabel": ["GIDA", "Dondurma", "Tekli Dondurma"],
                    "badges": []
                },
                {
                    "attType": "TEXT",
                    "fieldName": "shortName",
                    "fieldNameLabel": "shortName",
                    "valueLabel": "Frootie Super Defence 105 ml",
                    "value": "Frootie Super Defence 105 ml"
                },
                {
                    "attType": "KEYWORD",
                    "fieldName": "brand",
                    "fieldNameLabel": "Markalar",
                    "valueLabel": "FROOTIE",
                    "value": "FROOTIE"
                },
                {
                    "attType": "LONG_TEXT",
                    "fieldName": "productDescription",
                    "fieldNameLabel": "productDescription",
                    "valueLabel": "Algida Frootie’den muhteşem lezzet! Portakal, limon, zencefil ve zerdeçalın birleşiminden oluşan lezzetli bir ferahlık. Hem de sadece 60 kalori, vegan ve şeker ilavesiz. ",
                    "value": "Algida Frootie’den muhteşem lezzet! Portakal, limon, zencefil ve zerdeçalın birleşiminden oluşan lezzetli bir ferahlık. Hem de sadece 60 kalori, vegan ve şeker ilavesiz. "
                },
                {
                    "attType": "LIST",
                    "fieldName": "productFeature",
                    "fieldNameLabel": "Ürün Özelliği",
                    "valueLabel": "",
                    "value": "",
                    "listValue": [],
                    "listValueLabel": [],
                    "badges": []
                },
                {
                    "attType": "LIST",
                    "fieldName": "tags",
                    "fieldNameLabel": "tags",
                    "valueLabel": "",
                    "value": "",
                    "listValue": [],
                    "listValueLabel": [],
                    "badges": []
                },
                {
                    "attType": "TEXT",
                    "fieldName": "longName",
                    "fieldNameLabel": "longName",
                    "valueLabel": "Frootie Super Defence 105 ml",
                    "value": "Frootie Super Defence 105 ml"
                }
            ],
            "priceTag": {
                "currency": "TRY",
                "merchantId": "default",
                "values": [],
                "price": 400,
                "priceLabel": "4.00 TL",
                "discountedPrice": 300,
                "discountedPriceLabel": "3.00 TL",
                "discountRate": 25,
                "discountRateLabel": "25"
            },
            "stockStatus": "LOW",
            "itemType": "SINGLE"
        },
        {
            "id": "7830649X",
            "variantGroupId": "7830649X",
            "images": "https://core.rtbs.io/user/action/6ad47403c22043a795e973c7ec83dcc7/rbs.storage.get.GET_IMAGE?auth=&data=eyJpbWFnZUlkIjoiNDk4OWM4YjYtYjE3MC00Zjg0LWE4NWMtMWIxODI0YjQ1YzE2Iiwid2lkdGgiOjQwMCwiaGVpZ2h0Ijo0MDAsImZpdCI6Im91dHNpZGUiLCJjb250ZW50VHlwZSI6ImltYWdlL3dlYnAiLCJxdWFsaXR5IjozMH0&platform=WEB&",
            "attributes": [
                {
                    "attType": "LIST",
                    "fieldName": "categories",
                    "fieldNameLabel": "Kategoriler",
                    "valueLabel": "",
                    "value": "",
                    "listValue": ["GIDA-OF7AC", "DONDURMA-K123P", "TEKLI-G1R2T"],
                    "listValueLabel": ["GIDA", "Dondurma", "Tekli Dondurma"],
                    "badges": []
                },
                {
                    "attType": "TEXT",
                    "fieldName": "shortName",
                    "fieldNameLabel": "shortName",
                    "valueLabel": "Algida Boom Boom 90 ml",
                    "value": "Algida Boom Boom 90 ml"
                },
                {
                    "attType": "KEYWORD",
                    "fieldName": "brand",
                    "fieldNameLabel": "Markalar",
                    "valueLabel": "ALGİDA",
                    "value": "ALGİDA"
                },
                {
                    "attType": "LONG_TEXT",
                    "fieldName": "productDescription",
                    "fieldNameLabel": "productDescription",
                    "valueLabel": "İçindeki nefis yoğun çikolata lezzetine dayanamayacağın Algida Boom Boom! İçindekini görsen inanamazsin!",
                    "value": "İçindeki nefis yoğun çikolata lezzetine dayanamayacağın Algida Boom Boom! İçindekini görsen inanamazsin!"
                },
                {
                    "attType": "LIST",
                    "fieldName": "productFeature",
                    "fieldNameLabel": "Ürün Özelliği",
                    "valueLabel": "",
                    "value": "",
                    "listValue": [],
                    "listValueLabel": [],
                    "badges": []
                },
                {
                    "attType": "LIST",
                    "fieldName": "tags",
                    "fieldNameLabel": "tags",
                    "valueLabel": "",
                    "value": "",
                    "listValue": [],
                    "listValueLabel": [],
                    "badges": []
                },
                {
                    "attType": "TEXT",
                    "fieldName": "longName",
                    "fieldNameLabel": "longName",
                    "valueLabel": "Algida Boom Boom 90 ml",
                    "value": "Algida Boom Boom 90 ml"
                }
            ],
            "priceTag": {
                "currency": "TRY",
                "merchantId": "default",
                "values": [],
                "price": 400,
                "priceLabel": "4.00 TL",
                "discountedPrice": 300,
                "discountedPriceLabel": "3.00 TL",
                "discountRate": 25,
                "discountRateLabel": "25"
            },
            "stockStatus": "HIGH",
            "itemType": "SINGLE"
        },
        {
            "id": "7400253X",
            "variantGroupId": "7400253X",
            "images": "https://core.rtbs.io/user/action/6ad47403c22043a795e973c7ec83dcc7/rbs.storage.get.GET_IMAGE?auth=&data=eyJpbWFnZUlkIjoiNmNjOTFkNzQtNGMzYS00ZjNkLTgzY2UtNzc1NzZmMWYyYjgwIiwid2lkdGgiOjQwMCwiaGVpZ2h0Ijo0MDAsImZpdCI6Im91dHNpZGUiLCJjb250ZW50VHlwZSI6ImltYWdlL3dlYnAiLCJxdWFsaXR5IjozMH0&platform=WEB&",
            "attributes": [
                {
                    "attType": "LIST",
                    "fieldName": "categories",
                    "fieldNameLabel": "Kategoriler",
                    "valueLabel": "",
                    "value": "",
                    "listValue": ["GIDA-OF7AC", "DONDURMA-K123P", "TEKLI-G1R2T"],
                    "listValueLabel": ["GIDA", "Dondurma", "Tekli Dondurma"],
                    "badges": []
                },
                {
                    "attType": "TEXT",
                    "fieldName": "shortName",
                    "fieldNameLabel": "shortName",
                    "valueLabel": "Nogger Sandwich 145 ml",
                    "value": "Nogger Sandwich 145 ml"
                },
                {
                    "attType": "KEYWORD",
                    "fieldName": "brand",
                    "fieldNameLabel": "Markalar",
                    "valueLabel": "NOGGER",
                    "value": "NOGGER"
                },
                {
                    "attType": "LONG_TEXT",
                    "fieldName": "productDescription",
                    "fieldNameLabel": "productDescription",
                    "valueLabel": "Kakao mu? Karamel mi? İkisinin arasında durma… Hem kakaolu hem karamelli Algida iki nefis bisküvi arasında… Enfes serinleten atıştırmalık Nogger Sandwich'le durma, hemen Nogger'la!",
                    "value": "Kakao mu? Karamel mi? İkisinin arasında durma… Hem kakaolu hem karamelli Algida iki nefis bisküvi arasında… Enfes serinleten atıştırmalık Nogger Sandwich'le durma, hemen Nogger'la!"
                },
                {
                    "attType": "LIST",
                    "fieldName": "productFeature",
                    "fieldNameLabel": "Ürün Özelliği",
                    "valueLabel": "",
                    "value": "",
                    "listValue": [],
                    "listValueLabel": [],
                    "badges": []
                },
                {
                    "attType": "LIST",
                    "fieldName": "tags",
                    "fieldNameLabel": "tags",
                    "valueLabel": "",
                    "value": "",
                    "listValue": [],
                    "listValueLabel": [],
                    "badges": []
                },
                {
                    "attType": "TEXT",
                    "fieldName": "longName",
                    "fieldNameLabel": "longName",
                    "valueLabel": "Nogger Sandwich 145 ml",
                    "value": "Nogger Sandwich 145 ml"
                }
            ],
            "priceTag": {
                "currency": "TRY",
                "merchantId": "default",
                "values": [],
                "price": 400,
                "priceLabel": "4.00 TL",
                "discountedPrice": 300,
                "discountedPriceLabel": "3.00 TL",
                "discountRate": 25,
                "discountRateLabel": "25"
            },
            "stockStatus": "HIGH",
            "itemType": "SINGLE"
        },
        {
            "id": "7867059X",
            "variantGroupId": "7867059X",
            "images": "https://core.rtbs.io/user/action/6ad47403c22043a795e973c7ec83dcc7/rbs.storage.get.GET_IMAGE?auth=&data=eyJpbWFnZUlkIjoiYjRlMzUyODEtM2ExOS00MDVmLWE1ZjktNTg0YTBjNzE3MDQ5Iiwid2lkdGgiOjQwMCwiaGVpZ2h0Ijo0MDAsImZpdCI6Im91dHNpZGUiLCJjb250ZW50VHlwZSI6ImltYWdlL3dlYnAiLCJxdWFsaXR5IjozMH0&platform=WEB&",
            "attributes": [
                {
                    "attType": "LIST",
                    "fieldName": "categories",
                    "fieldNameLabel": "Kategoriler",
                    "valueLabel": "",
                    "value": "",
                    "listValue": ["GIDA-OF7AC", "DONDURMA-K123P", "TEKLI-G1R2T"],
                    "listValueLabel": ["GIDA", "Dondurma", "Tekli Dondurma"],
                    "badges": []
                },
                {
                    "attType": "TEXT",
                    "fieldName": "shortName",
                    "fieldNameLabel": "shortName",
                    "valueLabel": "Cornetto Classico Çikolatalı 125 ml",
                    "value": "Cornetto Classico Çikolatalı 125 ml"
                },
                {
                    "attType": "KEYWORD",
                    "fieldName": "brand",
                    "fieldNameLabel": "Markalar",
                    "valueLabel": "CORNETTO",
                    "value": "CORNETTO"
                },
                {
                    "attType": "LONG_TEXT",
                    "fieldName": "productDescription",
                    "fieldNameLabel": "productDescription",
                    "valueLabel": "Lezzetiyle akıllardan çıkmayacak Cornetto Classico Çikolata dondurma yalnızca tatlı bir son sunmuyor. Kakao kaplı çıtır külahının tamamını kaplayan eşsiz lezzeti ile seni tatlı bir rüyaya çağırıyor.",
                    "value": "Lezzetiyle akıllardan çıkmayacak Cornetto Classico Çikolata dondurma yalnızca tatlı bir son sunmuyor. Kakao kaplı çıtır külahının tamamını kaplayan eşsiz lezzeti ile seni tatlı bir rüyaya çağırıyor."
                },
                {
                    "attType": "LIST",
                    "fieldName": "productFeature",
                    "fieldNameLabel": "Ürün Özelliği",
                    "valueLabel": "",
                    "value": "",
                    "listValue": [],
                    "listValueLabel": [],
                    "badges": []
                },
                {
                    "attType": "LIST",
                    "fieldName": "tags",
                    "fieldNameLabel": "tags",
                    "valueLabel": "",
                    "value": "",
                    "listValue": [],
                    "listValueLabel": [],
                    "badges": []
                },
                {
                    "attType": "TEXT",
                    "fieldName": "longName",
                    "fieldNameLabel": "longName",
                    "valueLabel": "Cornetto Classico Çikolatalı 125 ml",
                    "value": "Cornetto Classico Çikolatalı 125 ml"
                }
            ],
            "priceTag": {
                "currency": "TRY",
                "merchantId": "default",
                "values": [],
                "price": 450,
                "priceLabel": "4.50 TL",
                "discountedPrice": 315,
                "discountedPriceLabel": "3.15 TL",
                "discountRate": 30,
                "discountRateLabel": "30"
            },
            "stockStatus": "HIGH",
            "itemType": "SINGLE"
        },
        {
            "id": "31001422",
            "variantGroupId": "31001422",
            "images": "https://core.rtbs.io/user/action/6ad47403c22043a795e973c7ec83dcc7/rbs.storage.get.GET_IMAGE?auth=&data=eyJpbWFnZUlkIjoiMDlkYmMzYTUtOTFkMi00YTM3LTk5MWEtZDFmMmNhZTAxMTkxIiwid2lkdGgiOjQwMCwiaGVpZ2h0Ijo0MDAsImZpdCI6Im91dHNpZGUiLCJjb250ZW50VHlwZSI6ImltYWdlL3dlYnAiLCJxdWFsaXR5IjozMH0&platform=WEB&",
            "attributes": [
                {
                    "attType": "LIST",
                    "fieldName": "categories",
                    "fieldNameLabel": "Kategoriler",
                    "valueLabel": "",
                    "value": "",
                    "listValue": ["GIDA-OF7AC", "ATISTIRMALIK-N5RUF", "BAR-KL7G6"],
                    "listValueLabel": ["GIDA", "Atıştırmalık", "Bar"],
                    "badges": []
                },
                {
                    "attType": "TEXT",
                    "fieldName": "shortName",
                    "fieldNameLabel": "shortName",
                    "valueLabel": "Züber Kidz Muzlu Kakaolu 30 g",
                    "value": "Züber Kidz Muzlu Kakaolu 30 g"
                },
                {
                    "attType": "KEYWORD",
                    "fieldName": "brand",
                    "fieldNameLabel": "Markalar",
                    "valueLabel": "ZUBER",
                    "value": "ZUBER"
                },
                {
                    "attType": "LONG_TEXT",
                    "fieldName": "productDescription",
                    "fieldNameLabel": "productDescription",
                    "valueLabel": "<p>Ba-na-naaa! Çocuklarla birlikte Minionlar da ona aşık!</p><p>Züber Kidz Muzlu'da miniklere özel bir formül var. İşte o formülü açıklıyoruz: Koruyucu ve tatlandırıcı yok; hurma, muz, badem çok.</p><p>Potasyum zengini muzun, mucizevi hurma, taptaze kuruyemişler ve doğal kakaoyla muhteşem birlikteliği, ambalajlarında eğlenceli ve çılgın Minion karakterleriyle buluşuyor.</p><p>İçindekiler: Hurma, muz (%25), kakao kitlesi (%7) (kakao tozu, kakao yağı), hindiba kökü lifi, fındık, muz konsantresi</p><p>Alerjen Uyarısı: Fındık içerir. Antep fıstığı, yer fıstığı, kaju ve badem içerebilir</p>",
                    "value": "<p>Ba-na-naaa! Çocuklarla birlikte Minionlar da ona aşık!</p><p>Züber Kidz Muzlu'da miniklere özel bir formül var. İşte o formülü açıklıyoruz: Koruyucu ve tatlandırıcı yok; hurma, muz, badem çok.</p><p>Potasyum zengini muzun, mucizevi hurma, taptaze kuruyemişler ve doğal kakaoyla muhteşem birlikteliği, ambalajlarında eğlenceli ve çılgın Minion karakterleriyle buluşuyor.</p><p>İçindekiler: Hurma, muz (%25), kakao kitlesi (%7) (kakao tozu, kakao yağı), hindiba kökü lifi, fındık, muz konsantresi</p><p>Alerjen Uyarısı: Fındık içerir. Antep fıstığı, yer fıstığı, kaju ve badem içerebilir</p>"
                },
                {
                    "attType": "LIST",
                    "fieldName": "productFeature",
                    "fieldNameLabel": "Ürün Özelliği",
                    "valueLabel": "",
                    "value": "",
                    "listValue": [],
                    "listValueLabel": [],
                    "badges": []
                },
                {
                    "attType": "LIST",
                    "fieldName": "tags",
                    "fieldNameLabel": "tags",
                    "valueLabel": "",
                    "value": "",
                    "listValue": [],
                    "listValueLabel": [],
                    "badges": []
                },
                {
                    "attType": "TEXT",
                    "fieldName": "longName",
                    "fieldNameLabel": "longName",
                    "valueLabel": "Züber Kidz Muzlu Kakaolu 30 g",
                    "value": "Züber Kidz Muzlu Kakaolu 30 g"
                }
            ],
            "priceTag": {
                "currency": "TRY",
                "merchantId": "default",
                "values": [],
                "price": 495,
                "priceLabel": "4.95 TL",
                "discountedPrice": 350,
                "discountedPriceLabel": "3.50 TL",
                "discountRate": 29,
                "discountRateLabel": "29"
            },
            "stockStatus": "HIGH",
            "itemType": "SINGLE"
        },
        {
            "id": "31001421",
            "variantGroupId": "31001421",
            "images": "https://core.rtbs.io/user/action/6ad47403c22043a795e973c7ec83dcc7/rbs.storage.get.GET_IMAGE?auth=&data=eyJpbWFnZUlkIjoiM2Q0ZDgzYzgtOGJmNi00ZTRhLWEwZmItYzZkYzhmYTlhNjI4Iiwid2lkdGgiOjQwMCwiaGVpZ2h0Ijo0MDAsImZpdCI6Im91dHNpZGUiLCJjb250ZW50VHlwZSI6ImltYWdlL3dlYnAiLCJxdWFsaXR5IjozMH0&platform=WEB&",
            "attributes": [
                {
                    "attType": "LIST",
                    "fieldName": "categories",
                    "fieldNameLabel": "Kategoriler",
                    "valueLabel": "",
                    "value": "",
                    "listValue": ["GIDA-OF7AC", "ATISTIRMALIK-N5RUF", "BAR-KL7G6"],
                    "listValueLabel": ["GIDA", "Atıştırmalık", "Bar"],
                    "badges": []
                },
                {
                    "attType": "TEXT",
                    "fieldName": "shortName",
                    "fieldNameLabel": "shortName",
                    "valueLabel": "Züber Kidz Çilekli Kakaolu 30 g",
                    "value": "Züber Kidz Çilekli Kakaolu 30 g"
                },
                {
                    "attType": "KEYWORD",
                    "fieldName": "brand",
                    "fieldNameLabel": "Markalar",
                    "valueLabel": "ZUBER",
                    "value": "ZUBER"
                },
                {
                    "attType": "LONG_TEXT",
                    "fieldName": "productDescription",
                    "fieldNameLabel": "productDescription",
                    "valueLabel": "<p>Çileğe bayılan çocuklar Züber Kidz çilekliye de bayılıyor. İçinde ne koruyucu var ne tatlandırıcı. En tazesinden bol bol çilek, enerjisi vermesi için de hurma var. Minionların da bu enfes lezzette parmağı var.</p><p>Tadına doyulmaz çilekle, mucizevi hurmanın, taptaze kuruyemişler ve kakaoyla muhteşem birlikteliği, ambalajlarında eğlenceli ve çılgın Minion karakterleriyle buluşuyor.</p><p>İçindekiler: Hurma, çilek (%25), fındık, hindiba kökü lifi, kakao kitlesi (%7) (kakao tozu, kakao yağı), çilek konsantresi</p><p>Alerjen Uyarısı: Fındık içerir. Antep fıstığı, yer fıstığı, kaju ve badem içerebilir.</p>",
                    "value": "<p>Çileğe bayılan çocuklar Züber Kidz çilekliye de bayılıyor. İçinde ne koruyucu var ne tatlandırıcı. En tazesinden bol bol çilek, enerjisi vermesi için de hurma var. Minionların da bu enfes lezzette parmağı var.</p><p>Tadına doyulmaz çilekle, mucizevi hurmanın, taptaze kuruyemişler ve kakaoyla muhteşem birlikteliği, ambalajlarında eğlenceli ve çılgın Minion karakterleriyle buluşuyor.</p><p>İçindekiler: Hurma, çilek (%25), fındık, hindiba kökü lifi, kakao kitlesi (%7) (kakao tozu, kakao yağı), çilek konsantresi</p><p>Alerjen Uyarısı: Fındık içerir. Antep fıstığı, yer fıstığı, kaju ve badem içerebilir.</p>"
                },
                {
                    "attType": "LIST",
                    "fieldName": "productFeature",
                    "fieldNameLabel": "Ürün Özelliği",
                    "valueLabel": "",
                    "value": "",
                    "listValue": [],
                    "listValueLabel": [],
                    "badges": []
                },
                {
                    "attType": "LIST",
                    "fieldName": "tags",
                    "fieldNameLabel": "tags",
                    "valueLabel": "",
                    "value": "",
                    "listValue": [],
                    "listValueLabel": [],
                    "badges": []
                },
                {
                    "attType": "TEXT",
                    "fieldName": "longName",
                    "fieldNameLabel": "longName",
                    "valueLabel": "Züber Kidz Çilekli Kakaolu 30 g",
                    "value": "Züber Kidz Çilekli Kakaolu 30 g"
                }
            ],
            "priceTag": {
                "currency": "TRY",
                "merchantId": "default",
                "values": [],
                "price": 495,
                "priceLabel": "4.95 TL",
                "discountedPrice": 350,
                "discountedPriceLabel": "3.50 TL",
                "discountRate": 29,
                "discountRateLabel": "29"
            },
            "stockStatus": "HIGH",
            "itemType": "SINGLE"
        },
        {
            "id": "67476103",
            "variantGroupId": "67476103",
            "images": "https://core.rtbs.io/user/action/6ad47403c22043a795e973c7ec83dcc7/rbs.storage.get.GET_IMAGE?auth=&data=eyJpbWFnZUlkIjoiZWVlMzRlNzQtZTg1OS00ZjM0LTkxNzctNWM1Yzk2MGYyMjY4Iiwid2lkdGgiOjQwMCwiaGVpZ2h0Ijo0MDAsImZpdCI6Im91dHNpZGUiLCJjb250ZW50VHlwZSI6ImltYWdlL3dlYnAiLCJxdWFsaXR5IjozMH0&platform=WEB&",
            "attributes": [
                {
                    "attType": "LIST",
                    "fieldName": "categories",
                    "fieldNameLabel": "Kategoriler",
                    "valueLabel": "",
                    "value": "",
                    "listValue": ["GIDA-OF7AC", "TEMELGIDA-4D592", "CORBA-0PZJV"],
                    "listValueLabel": ["GIDA", "Temel Gıda", "Çorba"],
                    "badges": []
                },
                {
                    "attType": "TEXT",
                    "fieldName": "shortName",
                    "fieldNameLabel": "shortName",
                    "valueLabel": "Knorr Ezogelin Çorbası 74 g",
                    "value": "Knorr Ezogelin Çorbası 74 g"
                },
                {
                    "attType": "KEYWORD",
                    "fieldName": "brand",
                    "fieldNameLabel": "Markalar",
                    "valueLabel": "KNORR",
                    "value": "KNORR"
                },
                {
                    "attType": "LONG_TEXT",
                    "fieldName": "productDescription",
                    "fieldNameLabel": "productDescription",
                    "valueLabel": "Güneşte olgunlaşan ve mevsiminde toplanan sebze ve baharatlardan geleneksel olarak kurutulmuş ezogelin çorbası lezzetli bir başlangıç için ideal bir üründür. Her seferinde mükemmel kıvamı ve uyumu yakaladığımız çorbalarımızda sizin için özenle seçtiğimiz malzeme ve tarifleri harmanlıyoruz. Çorbalarımızı beslenme uzmanları ve Knorr şefleriyle hazırlıyoruz. Böylece lezzeti ve pratikliği aynı pakette sofralarınıza getiriyoruz. Hava, ışık ve neme karşı koruma sağlayan 3 kata kadar dayanaklı ambalajlarımız ile de çorbalarımızın tazeliğini uzun süre koruyoruz. Knorr Ezogelin Çorbası lezzeti ve pratikliği ile ihtiyacınız olan her an size eşlik etmek için hazır. Kısıtlı zamanlarda, zor ve zaman alan yemek tarifleri ile uğraşmadan en lezzetli çorba çeşitlerinin keyfini afiyetle çıkarabilirsiniz. Menülerinizi kolay yemekler ve hızlı tariflerle süsleyebilirsiniz.\r\r\n\r\r\nKnorr Ezogelin Çorbası sofraların vazgeçilmez lezzetini en pratik hali ile sizlere sunuyor. Knorr çorbalar iftar menülerini zenginleştirir. Salata tarifleri ile hafif bir öğün yani pratik ev yemeği haline gelir. Özellikle öğrenciler ve çalışanlar için ideal bir tercih olan ezogelin çorbası, mercimeğin tadını seven ve daha kısa sürede hazır olmasını isteyen herkes için ideal bir üründür. Knorr çorba çeşitlerinin yapımı oldukça pratiktir. Bir paket ile 4 porsiyon çorba yapabilirsiniz. ",
                    "value": "Güneşte olgunlaşan ve mevsiminde toplanan sebze ve baharatlardan geleneksel olarak kurutulmuş ezogelin çorbası lezzetli bir başlangıç için ideal bir üründür. Her seferinde mükemmel kıvamı ve uyumu yakaladığımız çorbalarımızda sizin için özenle seçtiğimiz malzeme ve tarifleri harmanlıyoruz. Çorbalarımızı beslenme uzmanları ve Knorr şefleriyle hazırlıyoruz. Böylece lezzeti ve pratikliği aynı pakette sofralarınıza getiriyoruz. Hava, ışık ve neme karşı koruma sağlayan 3 kata kadar dayanaklı ambalajlarımız ile de çorbalarımızın tazeliğini uzun süre koruyoruz. Knorr Ezogelin Çorbası lezzeti ve pratikliği ile ihtiyacınız olan her an size eşlik etmek için hazır. Kısıtlı zamanlarda, zor ve zaman alan yemek tarifleri ile uğraşmadan en lezzetli çorba çeşitlerinin keyfini afiyetle çıkarabilirsiniz. Menülerinizi kolay yemekler ve hızlı tariflerle süsleyebilirsiniz.\r\r\n\r\r\nKnorr Ezogelin Çorbası sofraların vazgeçilmez lezzetini en pratik hali ile sizlere sunuyor. Knorr çorbalar iftar menülerini zenginleştirir. Salata tarifleri ile hafif bir öğün yani pratik ev yemeği haline gelir. Özellikle öğrenciler ve çalışanlar için ideal bir tercih olan ezogelin çorbası, mercimeğin tadını seven ve daha kısa sürede hazır olmasını isteyen herkes için ideal bir üründür. Knorr çorba çeşitlerinin yapımı oldukça pratiktir. Bir paket ile 4 porsiyon çorba yapabilirsiniz. "
                },
                {
                    "attType": "LIST",
                    "fieldName": "productFeature",
                    "fieldNameLabel": "Ürün Özelliği",
                    "valueLabel": "",
                    "value": "",
                    "listValue": [],
                    "listValueLabel": [],
                    "badges": []
                },
                {
                    "attType": "LIST",
                    "fieldName": "tags",
                    "fieldNameLabel": "tags",
                    "valueLabel": "",
                    "value": "",
                    "listValue": [],
                    "listValueLabel": [],
                    "badges": []
                },
                {
                    "attType": "TEXT",
                    "fieldName": "longName",
                    "fieldNameLabel": "longName",
                    "valueLabel": "Knorr Ezogelin Çorbası 74 g",
                    "value": "Knorr Ezogelin Çorbası 74 g"
                }
            ],
            "priceTag": {
                "currency": "TRY",
                "merchantId": "default",
                "values": [],
                "price": 425,
                "priceLabel": "4.25 TL",
                "discountedPrice": 350,
                "discountedPriceLabel": "3.50 TL",
                "discountRate": 18,
                "discountRateLabel": "18"
            },
            "stockStatus": "HIGH",
            "itemType": "SINGLE"
        },
        {
            "id": "20292365",
            "variantGroupId": "20292365",
            "images": "https://core.rtbs.io/user/action/6ad47403c22043a795e973c7ec83dcc7/rbs.storage.get.GET_IMAGE?auth=&data=eyJpbWFnZUlkIjoiYjAzMWU0MmMtMTc2ZS00NDI0LWE1OGItNjIxZjEzMWY0YWNkIiwid2lkdGgiOjQwMCwiaGVpZ2h0Ijo0MDAsImZpdCI6Im91dHNpZGUiLCJjb250ZW50VHlwZSI6ImltYWdlL3dlYnAiLCJxdWFsaXR5IjozMH0&platform=WEB&",
            "attributes": [
                {
                    "attType": "LIST",
                    "fieldName": "categories",
                    "fieldNameLabel": "Kategoriler",
                    "valueLabel": "",
                    "value": "",
                    "listValue": ["GIDA-OF7AC", "TEMELGIDA-4D592", "CORBA-0PZJV"],
                    "listValueLabel": ["GIDA", "Temel Gıda", "Çorba"],
                    "badges": []
                },
                {
                    "attType": "TEXT",
                    "fieldName": "shortName",
                    "fieldNameLabel": "shortName",
                    "valueLabel": "Knorr Mercimek Çorbası 76 g",
                    "value": "Knorr Mercimek Çorbası 76 g"
                },
                {
                    "attType": "KEYWORD",
                    "fieldName": "brand",
                    "fieldNameLabel": "Markalar",
                    "valueLabel": "KNORR",
                    "value": "KNORR"
                },
                {
                    "attType": "LONG_TEXT",
                    "fieldName": "productDescription",
                    "fieldNameLabel": "productDescription",
                    "valueLabel": "Knorr şeflerinin ustalıkla hazırladığı lezzetli çorba çeşitlerini, sofralarınızda tüm sevdiklerinizle afiyetle paylaşın. Süzme mercimeğin ve dengeli baharatların doyumsuz lezzeti",
                    "value": "Knorr şeflerinin ustalıkla hazırladığı lezzetli çorba çeşitlerini, sofralarınızda tüm sevdiklerinizle afiyetle paylaşın. Süzme mercimeğin ve dengeli baharatların doyumsuz lezzeti"
                },
                {
                    "attType": "LIST",
                    "fieldName": "productFeature",
                    "fieldNameLabel": "Ürün Özelliği",
                    "valueLabel": "",
                    "value": "",
                    "listValue": [],
                    "listValueLabel": [],
                    "badges": []
                },
                {
                    "attType": "LIST",
                    "fieldName": "tags",
                    "fieldNameLabel": "tags",
                    "valueLabel": "",
                    "value": "",
                    "listValue": [],
                    "listValueLabel": [],
                    "badges": []
                },
                {
                    "attType": "TEXT",
                    "fieldName": "longName",
                    "fieldNameLabel": "longName",
                    "valueLabel": "Knorr Mercimek Çorbası 76 g",
                    "value": "Knorr Mercimek Çorbası 76 g"
                }
            ],
            "priceTag": {
                "currency": "TRY",
                "merchantId": "default",
                "values": [],
                "price": 425,
                "priceLabel": "4.25 TL",
                "discountedPrice": 350,
                "discountedPriceLabel": "3.50 TL",
                "discountRate": 18,
                "discountRateLabel": "18"
            },
            "stockStatus": "HIGH",
            "itemType": "SINGLE"
        },
        {
            "id": "67474578",
            "variantGroupId": "67474578",
            "images": "https://core.rtbs.io/user/action/6ad47403c22043a795e973c7ec83dcc7/rbs.storage.get.GET_IMAGE?auth=&data=eyJpbWFnZUlkIjoiYzBlOWQ0NDMtYzNjMi00Yzk0LTgzNjItM2FmMDA3YzQ4OTk4Iiwid2lkdGgiOjQwMCwiaGVpZ2h0Ijo0MDAsImZpdCI6Im91dHNpZGUiLCJjb250ZW50VHlwZSI6ImltYWdlL3dlYnAiLCJxdWFsaXR5IjozMH0&platform=WEB&",
            "attributes": [
                {
                    "attType": "LIST",
                    "fieldName": "categories",
                    "fieldNameLabel": "Kategoriler",
                    "valueLabel": "",
                    "value": "",
                    "listValue": ["GIDA-OF7AC", "TEMELGIDA-4D592", "CORBA-0PZJV"],
                    "listValueLabel": ["GIDA", "Temel Gıda", "Çorba"],
                    "badges": []
                },
                {
                    "attType": "TEXT",
                    "fieldName": "shortName",
                    "fieldNameLabel": "shortName",
                    "valueLabel": "Knorr Yayla Çorbası 72 g",
                    "value": "Knorr Yayla Çorbası 72 g"
                },
                {
                    "attType": "KEYWORD",
                    "fieldName": "brand",
                    "fieldNameLabel": "Markalar",
                    "valueLabel": "KNORR",
                    "value": "KNORR"
                },
                {
                    "attType": "LONG_TEXT",
                    "fieldName": "productDescription",
                    "fieldNameLabel": "productDescription",
                    "valueLabel": "Güneşte olgunlaşan ve mevsiminde toplanan sebze ve baharatlardan geleneksel olarak kurutulmuş Yayla Çorbası… Her seferinde mükemmel kıvamı ve uyumu yakalamak için çorbalarımız için sizin için özenle seçtiğimiz malzeme ve tarifleri harmanlıyoruz. Çorbalarımızı beslenme uzmanları ve  Knorr şefleriyle hazırlıyoruz. Hava, ışık ve neme karşı koruma sağlayan 3 katlı paketlerimiz ile çorbalarımızın tazeliğini uzun süre koruyoruz. Bir paket ile 4 porsiyon çorba yapabilirsiniz.",
                    "value": "Güneşte olgunlaşan ve mevsiminde toplanan sebze ve baharatlardan geleneksel olarak kurutulmuş Yayla Çorbası… Her seferinde mükemmel kıvamı ve uyumu yakalamak için çorbalarımız için sizin için özenle seçtiğimiz malzeme ve tarifleri harmanlıyoruz. Çorbalarımızı beslenme uzmanları ve  Knorr şefleriyle hazırlıyoruz. Hava, ışık ve neme karşı koruma sağlayan 3 katlı paketlerimiz ile çorbalarımızın tazeliğini uzun süre koruyoruz. Bir paket ile 4 porsiyon çorba yapabilirsiniz."
                },
                {
                    "attType": "LIST",
                    "fieldName": "productFeature",
                    "fieldNameLabel": "Ürün Özelliği",
                    "valueLabel": "",
                    "value": "",
                    "listValue": [],
                    "listValueLabel": [],
                    "badges": []
                },
                {
                    "attType": "LIST",
                    "fieldName": "tags",
                    "fieldNameLabel": "tags",
                    "valueLabel": "",
                    "value": "",
                    "listValue": [],
                    "listValueLabel": [],
                    "badges": []
                },
                {
                    "attType": "TEXT",
                    "fieldName": "longName",
                    "fieldNameLabel": "longName",
                    "valueLabel": "Knorr Yayla Çorbası 72 g",
                    "value": "Knorr Yayla Çorbası 72 g"
                }
            ],
            "priceTag": {
                "currency": "TRY",
                "merchantId": "default",
                "values": [],
                "price": 425,
                "priceLabel": "4.25 TL",
                "discountedPrice": 350,
                "discountedPriceLabel": "3.50 TL",
                "discountRate": 18,
                "discountRateLabel": "18"
            },
            "stockStatus": "HIGH",
            "itemType": "SINGLE"
        },
        {
            "id": "21004809",
            "variantGroupId": "21004809",
            "images": "https://core.rtbs.io/user/action/6ad47403c22043a795e973c7ec83dcc7/rbs.storage.get.GET_IMAGE?auth=&data=eyJpbWFnZUlkIjoiODI2Nzg2YjctYjBhMi00MzY0LWE3MTAtNmRiNDdlZGNjMGZhIiwid2lkdGgiOjQwMCwiaGVpZ2h0Ijo0MDAsImZpdCI6Im91dHNpZGUiLCJjb250ZW50VHlwZSI6ImltYWdlL3dlYnAiLCJxdWFsaXR5IjozMH0&platform=WEB&",
            "attributes": [
                {
                    "attType": "LIST",
                    "fieldName": "categories",
                    "fieldNameLabel": "Kategoriler",
                    "valueLabel": "",
                    "value": "",
                    "listValue": ["GIDA-OF7AC", "TEMELGIDA-4D592", "CORBA-0PZJV"],
                    "listValueLabel": ["GIDA", "Temel Gıda", "Çorba"],
                    "badges": []
                },
                {
                    "attType": "TEXT",
                    "fieldName": "shortName",
                    "fieldNameLabel": "shortName",
                    "valueLabel": "Knorr Kremalı Tavuk Çorbası 65 g",
                    "value": "Knorr Kremalı Tavuk Çorbası 65 g"
                },
                {
                    "attType": "KEYWORD",
                    "fieldName": "brand",
                    "fieldNameLabel": "Markalar",
                    "valueLabel": "KNORR",
                    "value": "KNORR"
                },
                {
                    "attType": "LONG_TEXT",
                    "fieldName": "productDescription",
                    "fieldNameLabel": "productDescription",
                    "valueLabel": "Knorr'dan sofralarınızı şenlendirecek Kremalı Tavuk Çorbası  ürünü bir tık uzağınızda incelemenizi bekliyor. Knorr'un lezzetli çorbalarına daha yakından bakın.",
                    "value": "Knorr'dan sofralarınızı şenlendirecek Kremalı Tavuk Çorbası  ürünü bir tık uzağınızda incelemenizi bekliyor. Knorr'un lezzetli çorbalarına daha yakından bakın."
                },
                {
                    "attType": "LIST",
                    "fieldName": "productFeature",
                    "fieldNameLabel": "Ürün Özelliği",
                    "valueLabel": "",
                    "value": "",
                    "listValue": [],
                    "listValueLabel": [],
                    "badges": []
                },
                {
                    "attType": "LIST",
                    "fieldName": "tags",
                    "fieldNameLabel": "tags",
                    "valueLabel": "",
                    "value": "",
                    "listValue": [],
                    "listValueLabel": [],
                    "badges": []
                },
                {
                    "attType": "TEXT",
                    "fieldName": "longName",
                    "fieldNameLabel": "longName",
                    "valueLabel": "Knorr Kremalı Tavuk Çorbası 65 g",
                    "value": "Knorr Kremalı Tavuk Çorbası 65 g"
                }
            ],
            "priceTag": {
                "currency": "TRY",
                "merchantId": "default",
                "values": [],
                "price": 425,
                "priceLabel": "4.25 TL",
                "discountedPrice": 350,
                "discountedPriceLabel": "3.50 TL",
                "discountRate": 18,
                "discountRateLabel": "18"
            },
            "stockStatus": "HIGH",
            "itemType": "SINGLE"
        },
        {
            "id": "67129112",
            "variantGroupId": "67129112",
            "images": "https://core.rtbs.io/user/action/6ad47403c22043a795e973c7ec83dcc7/rbs.storage.get.GET_IMAGE?auth=&data=eyJpbWFnZUlkIjoiODdmMTgzZTctYTY4MS00NDNmLWE0OWMtZGFlOGJjZDc1MzhhIiwid2lkdGgiOjQwMCwiaGVpZ2h0Ijo0MDAsImZpdCI6Im91dHNpZGUiLCJjb250ZW50VHlwZSI6ImltYWdlL3dlYnAiLCJxdWFsaXR5IjozMH0&platform=WEB&",
            "attributes": [
                {
                    "attType": "LIST",
                    "fieldName": "categories",
                    "fieldNameLabel": "Kategoriler",
                    "valueLabel": "",
                    "value": "",
                    "listValue": ["GIDA-OF7AC", "TEMELGIDA-4D592", "CORBA-0PZJV"],
                    "listValueLabel": ["GIDA", "Temel Gıda", "Çorba"],
                    "badges": []
                },
                {
                    "attType": "TEXT",
                    "fieldName": "shortName",
                    "fieldNameLabel": "shortName",
                    "valueLabel": "Knorr Kremalı Domates Çorbası 69 g",
                    "value": "Knorr Kremalı Domates Çorbası 69 g"
                },
                {
                    "attType": "KEYWORD",
                    "fieldName": "brand",
                    "fieldNameLabel": "Markalar",
                    "valueLabel": "KNORR",
                    "value": "KNORR"
                },
                {
                    "attType": "LONG_TEXT",
                    "fieldName": "productDescription",
                    "fieldNameLabel": "productDescription",
                    "valueLabel": "Knorr Domates Çorbası, artık 100% sürdürülebilir tarım ile üretilmiş domatesler ile hazırlanıyor. Çocuklarımız da bizler gibi domatesin mis gibi kokusunu içlerine çekip, yıllar boyunca çorbalarımızda aynı lezzeti bulabilsinler diye...",
                    "value": "Knorr Domates Çorbası, artık 100% sürdürülebilir tarım ile üretilmiş domatesler ile hazırlanıyor. Çocuklarımız da bizler gibi domatesin mis gibi kokusunu içlerine çekip, yıllar boyunca çorbalarımızda aynı lezzeti bulabilsinler diye..."
                },
                {
                    "attType": "LIST",
                    "fieldName": "productFeature",
                    "fieldNameLabel": "Ürün Özelliği",
                    "valueLabel": "",
                    "value": "",
                    "listValue": [],
                    "listValueLabel": [],
                    "badges": []
                },
                {
                    "attType": "LIST",
                    "fieldName": "tags",
                    "fieldNameLabel": "tags",
                    "valueLabel": "",
                    "value": "",
                    "listValue": [],
                    "listValueLabel": [],
                    "badges": []
                },
                {
                    "attType": "TEXT",
                    "fieldName": "longName",
                    "fieldNameLabel": "longName",
                    "valueLabel": "Knorr Kremalı Domates Çorbası 69 g",
                    "value": "Knorr Kremalı Domates Çorbası 69 g"
                }
            ],
            "priceTag": {
                "currency": "TRY",
                "merchantId": "default",
                "values": [],
                "price": 425,
                "priceLabel": "4.25 TL",
                "discountedPrice": 350,
                "discountedPriceLabel": "3.50 TL",
                "discountRate": 18,
                "discountRateLabel": "18"
            },
            "stockStatus": "HIGH",
            "itemType": "SINGLE"
        },
        {
            "id": "68611760",
            "variantGroupId": "68611760",
            "images": "https://core.rtbs.io/user/action/6ad47403c22043a795e973c7ec83dcc7/rbs.storage.get.GET_IMAGE?auth=&data=eyJpbWFnZUlkIjoiMjMxY2Y0OTctY2E4ZC00ZGZkLWJlNzktODYwZjc0MjVhNzM4Iiwid2lkdGgiOjQwMCwiaGVpZ2h0Ijo0MDAsImZpdCI6Im91dHNpZGUiLCJjb250ZW50VHlwZSI6ImltYWdlL3dlYnAiLCJxdWFsaXR5IjozMH0&platform=WEB&",
            "attributes": [
                {
                    "attType": "LIST",
                    "fieldName": "categories",
                    "fieldNameLabel": "Kategoriler",
                    "valueLabel": "",
                    "value": "",
                    "listValue": ["GIDA-OF7AC", "TEMELGIDA-4D592", "BAHARAT-4Y3ED"],
                    "listValueLabel": ["GIDA", "Temel Gıda", "Baharatlar"],
                    "badges": []
                },
                {
                    "attType": "TEXT",
                    "fieldName": "shortName",
                    "fieldNameLabel": "shortName",
                    "valueLabel": "Knorr Pul Biber 65 g",
                    "value": "Knorr Pul Biber 65 g"
                },
                {
                    "attType": "KEYWORD",
                    "fieldName": "brand",
                    "fieldNameLabel": "Markalar",
                    "valueLabel": "KNORR",
                    "value": "KNORR"
                },
                {
                    "attType": "LONG_TEXT",
                    "fieldName": "productDescription",
                    "fieldNameLabel": "productDescription",
                    "valueLabel": "Özenle toplanan, kurutulan ve öğütülen, el değmeden paketlenen Knorr baharatlar, lezzetini uzun süre koruyan özel paketi ve geri geri dönüştürülebilir ambajıyla şimdi Unishop'ta!",
                    "value": "Özenle toplanan, kurutulan ve öğütülen, el değmeden paketlenen Knorr baharatlar, lezzetini uzun süre koruyan özel paketi ve geri geri dönüştürülebilir ambajıyla şimdi Unishop'ta!"
                },
                {
                    "attType": "LIST",
                    "fieldName": "productFeature",
                    "fieldNameLabel": "Ürün Özelliği",
                    "valueLabel": "",
                    "value": "",
                    "listValue": [],
                    "listValueLabel": [],
                    "badges": []
                },
                {
                    "attType": "LIST",
                    "fieldName": "tags",
                    "fieldNameLabel": "tags",
                    "valueLabel": "",
                    "value": "",
                    "listValue": [],
                    "listValueLabel": [],
                    "badges": []
                },
                {
                    "attType": "TEXT",
                    "fieldName": "longName",
                    "fieldNameLabel": "longName",
                    "valueLabel": "Knorr Pul Biber 65 g",
                    "value": "Knorr Pul Biber 65 g"
                }
            ],
            "priceTag": {
                "currency": "TRY",
                "merchantId": "default",
                "values": [],
                "price": 620,
                "priceLabel": "6.20 TL",
                "discountedPrice": 350,
                "discountedPriceLabel": "3.50 TL",
                "discountRate": 44,
                "discountRateLabel": "44"
            },
            "stockStatus": "HIGH",
            "itemType": "SINGLE"
        },
        {
            "id": "31001420",
            "variantGroupId": "31001420",
            "images": "https://core.rtbs.io/user/action/6ad47403c22043a795e973c7ec83dcc7/rbs.storage.get.GET_IMAGE?auth=&data=eyJpbWFnZUlkIjoiMjFjZDQxZGQtNTA1YS00NTgwLTg2ZDAtNWM5MWRjODdhYzk0Iiwid2lkdGgiOjQwMCwiaGVpZ2h0Ijo0MDAsImZpdCI6Im91dHNpZGUiLCJjb250ZW50VHlwZSI6ImltYWdlL3dlYnAiLCJxdWFsaXR5IjozMH0&platform=WEB&",
            "attributes": [
                {
                    "attType": "LIST",
                    "fieldName": "categories",
                    "fieldNameLabel": "Kategoriler",
                    "valueLabel": "",
                    "value": "",
                    "listValue": ["GIDA-OF7AC", "ATISTIRMALIK-N5RUF", "BAR-KL7G6"],
                    "listValueLabel": ["GIDA", "Atıştırmalık", "Bar"],
                    "badges": []
                },
                {
                    "attType": "TEXT",
                    "fieldName": "shortName",
                    "fieldNameLabel": "shortName",
                    "valueLabel": "Züber Kidz Kakaolu 30 g",
                    "value": "Züber Kidz Kakaolu 30 g"
                },
                {
                    "attType": "KEYWORD",
                    "fieldName": "brand",
                    "fieldNameLabel": "Markalar",
                    "valueLabel": "ZUBER",
                    "value": "ZUBER"
                },
                {
                    "attType": "LONG_TEXT",
                    "fieldName": "productDescription",
                    "fieldNameLabel": "productDescription",
                    "valueLabel": "<p>Çikolatanın peşinden koşan çocuklar Züber Kakaolu Kidz'le abur cuburu unutuyor. Kakaonun mutluluk veren tadı çocuklar için bu kez hurma, badem ve fındıkla bir araya geliyor. Koruyucusuz, tatlandırıcız, glutensiz ve şeker ilavesiz bu bara Minionların aşık olduğu söyleniyor.</p><p>Mutluluk veren kakaoyla, mucizevi hurmanın, taptaze kuruyemişler ile muhteşem birlikteliği, ambalajlarında eğlenceli ve çılgın Minion karakterleriyle buluşuyor</p><p>İçindekiler: Hurma, fındık (%20), kakao kitlesi (%7) (kakao tozu, kakao yağı), hindiba kökü lif</p>",
                    "value": "<p>Çikolatanın peşinden koşan çocuklar Züber Kakaolu Kidz'le abur cuburu unutuyor. Kakaonun mutluluk veren tadı çocuklar için bu kez hurma, badem ve fındıkla bir araya geliyor. Koruyucusuz, tatlandırıcız, glutensiz ve şeker ilavesiz bu bara Minionların aşık olduğu söyleniyor.</p><p>Mutluluk veren kakaoyla, mucizevi hurmanın, taptaze kuruyemişler ile muhteşem birlikteliği, ambalajlarında eğlenceli ve çılgın Minion karakterleriyle buluşuyor</p><p>İçindekiler: Hurma, fındık (%20), kakao kitlesi (%7) (kakao tozu, kakao yağı), hindiba kökü lif</p>"
                },
                {
                    "attType": "LIST",
                    "fieldName": "productFeature",
                    "fieldNameLabel": "Ürün Özelliği",
                    "valueLabel": "",
                    "value": "",
                    "listValue": [],
                    "listValueLabel": [],
                    "badges": []
                },
                {
                    "attType": "LIST",
                    "fieldName": "tags",
                    "fieldNameLabel": "tags",
                    "valueLabel": "",
                    "value": "",
                    "listValue": [],
                    "listValueLabel": [],
                    "badges": []
                },
                {
                    "attType": "TEXT",
                    "fieldName": "longName",
                    "fieldNameLabel": "longName",
                    "valueLabel": "Züber Kidz Kakaolu 30 g",
                    "value": "Züber Kidz Kakaolu 30 g"
                }
            ],
            "priceTag": {
                "currency": "TRY",
                "merchantId": "default",
                "values": [],
                "price": 495,
                "priceLabel": "4.95 TL",
                "discountedPrice": 350,
                "discountedPriceLabel": "3.50 TL",
                "discountRate": 29,
                "discountRateLabel": "29"
            },
            "stockStatus": "HIGH",
            "itemType": "SINGLE"
        },
        {
            "id": "68611746",
            "variantGroupId": "68611746",
            "images": "https://core.rtbs.io/user/action/6ad47403c22043a795e973c7ec83dcc7/rbs.storage.get.GET_IMAGE?auth=&data=eyJpbWFnZUlkIjoiZWU4ZjFlMTctZmI3YS00M2NmLWJmZTEtZjFhZDhjOGNmZTYwIiwid2lkdGgiOjQwMCwiaGVpZ2h0Ijo0MDAsImZpdCI6Im91dHNpZGUiLCJjb250ZW50VHlwZSI6ImltYWdlL3dlYnAiLCJxdWFsaXR5IjozMH0&platform=WEB&",
            "attributes": [
                {
                    "attType": "LIST",
                    "fieldName": "categories",
                    "fieldNameLabel": "Kategoriler",
                    "valueLabel": "",
                    "value": "",
                    "listValue": ["GIDA-OF7AC", "TEMELGIDA-4D592", "BAHARAT-4Y3ED"],
                    "listValueLabel": ["GIDA", "Temel Gıda", "Baharatlar"],
                    "badges": []
                },
                {
                    "attType": "TEXT",
                    "fieldName": "shortName",
                    "fieldNameLabel": "shortName",
                    "valueLabel": "Knorr Zencefil 50 G",
                    "value": "Knorr Zencefil 50 G"
                },
                {
                    "attType": "KEYWORD",
                    "fieldName": "brand",
                    "fieldNameLabel": "Markalar",
                    "valueLabel": "KNORR",
                    "value": "KNORR"
                },
                {
                    "attType": "LONG_TEXT",
                    "fieldName": "productDescription",
                    "fieldNameLabel": "productDescription",
                    "valueLabel": "<p>Özenle toplanan, kurutulan ve öğütülen, el değmeden paketlenen Knorr baharatlar, lezzetini uzun süre koruyan özel paketi ve geri geri dönüştürülebilir ambajıyla şimdi Unishop'ta!<br></p>",
                    "value": "<p>Özenle toplanan, kurutulan ve öğütülen, el değmeden paketlenen Knorr baharatlar, lezzetini uzun süre koruyan özel paketi ve geri geri dönüştürülebilir ambajıyla şimdi Unishop'ta!<br></p>"
                },
                {
                    "attType": "LIST",
                    "fieldName": "productFeature",
                    "fieldNameLabel": "Ürün Özelliği",
                    "valueLabel": "",
                    "value": "",
                    "listValue": [],
                    "listValueLabel": [],
                    "badges": []
                },
                {
                    "attType": "LIST",
                    "fieldName": "tags",
                    "fieldNameLabel": "tags",
                    "valueLabel": "",
                    "value": "",
                    "listValue": [],
                    "listValueLabel": [],
                    "badges": []
                },
                {
                    "attType": "TEXT",
                    "fieldName": "longName",
                    "fieldNameLabel": "longName",
                    "valueLabel": "Knorr Zencefil 50 G",
                    "value": "Knorr Zencefil 50 G"
                }
            ],
            "priceTag": {
                "currency": "TRY",
                "merchantId": "default",
                "values": [],
                "price": 850,
                "priceLabel": "8.50 TL",
                "discountedPrice": 500,
                "discountedPriceLabel": "5.00 TL",
                "discountRate": 41,
                "discountRateLabel": "41"
            },
            "stockStatus": "HIGH",
            "itemType": "SINGLE"
        },
        {
            "id": "70003293",
            "variantGroupId": "70003293",
            "images": "https://core.rtbs.io/user/action/6ad47403c22043a795e973c7ec83dcc7/rbs.storage.get.GET_IMAGE?auth=&data=eyJpbWFnZUlkIjoiZmRjOGY4M2YtZWRiOS00Njg2LWFiZWUtY2Q0YThjMWJmMWEwIiwid2lkdGgiOjQwMCwiaGVpZ2h0Ijo0MDAsImZpdCI6Im91dHNpZGUiLCJjb250ZW50VHlwZSI6ImltYWdlL3dlYnAiLCJxdWFsaXR5IjozMH0&platform=WEB&",
            "attributes": [
                {
                    "attType": "LIST",
                    "fieldName": "categories",
                    "fieldNameLabel": "Kategoriler",
                    "valueLabel": "",
                    "value": "",
                    "listValue": ["GIDA-OF7AC", "TEMELGIDA-4D592", "SOSLAR-U48MD"],
                    "listValueLabel": ["GIDA", "Temel Gıda", "Soslar"],
                    "badges": []
                },
                {
                    "attType": "TEXT",
                    "fieldName": "shortName",
                    "fieldNameLabel": "shortName",
                    "valueLabel": "Knorr Bolonez Makarna Sosu 45 g",
                    "value": "Knorr Bolonez Makarna Sosu 45 g"
                },
                {
                    "attType": "KEYWORD",
                    "fieldName": "brand",
                    "fieldNameLabel": "Markalar",
                    "valueLabel": "KNORR",
                    "value": "KNORR"
                },
                {
                    "attType": "LONG_TEXT",
                    "fieldName": "productDescription",
                    "fieldNameLabel": "productDescription",
                    "valueLabel": "Knorr'dan İtalyan Usulü tam tadında tam kıvamında Bolonez makarna sosu. Geleneksel yönteme göre daha az kıyma kullanımı sağlar. Kıymalı yemeklerde lezzet ve miktar artırıcı olarak kullanılabilir. Knorr Bolonez sosu'nu kıyma ilave etmeden 'Domates Sos' olarak da kullanabilirsiniz. Farklı bir lezzet için şeflerimiz Knorr Bolonez makarna sosuyla hazırlanan lazanya öneriyor. Yaklaşık 3 kişiliktir.",
                    "value": "Knorr'dan İtalyan Usulü tam tadında tam kıvamında Bolonez makarna sosu. Geleneksel yönteme göre daha az kıyma kullanımı sağlar. Kıymalı yemeklerde lezzet ve miktar artırıcı olarak kullanılabilir. Knorr Bolonez sosu'nu kıyma ilave etmeden 'Domates Sos' olarak da kullanabilirsiniz. Farklı bir lezzet için şeflerimiz Knorr Bolonez makarna sosuyla hazırlanan lazanya öneriyor. Yaklaşık 3 kişiliktir."
                },
                {
                    "attType": "LIST",
                    "fieldName": "productFeature",
                    "fieldNameLabel": "Ürün Özelliği",
                    "valueLabel": "",
                    "value": "",
                    "listValue": [],
                    "listValueLabel": [],
                    "badges": []
                },
                {
                    "attType": "LIST",
                    "fieldName": "tags",
                    "fieldNameLabel": "tags",
                    "valueLabel": "",
                    "value": "",
                    "listValue": [],
                    "listValueLabel": [],
                    "badges": []
                },
                {
                    "attType": "TEXT",
                    "fieldName": "longName",
                    "fieldNameLabel": "longName",
                    "valueLabel": "Knorr Bolonez Makarna Sosu 45 g",
                    "value": "Knorr Bolonez Makarna Sosu 45 g"
                }
            ],
            "priceTag": {
                "currency": "TRY",
                "merchantId": "default",
                "values": [],
                "price": 695,
                "priceLabel": "6.95 TL",
                "discountedPrice": 500,
                "discountedPriceLabel": "5.00 TL",
                "discountRate": 28,
                "discountRateLabel": "28"
            },
            "stockStatus": "HIGH",
            "itemType": "SINGLE"
        },
        {
            "id": "68225181",
            "variantGroupId": "68225181",
            "images": "https://core.rtbs.io/user/action/6ad47403c22043a795e973c7ec83dcc7/rbs.storage.get.GET_IMAGE?auth=&data=eyJpbWFnZUlkIjoiNjZmMDYwM2UtODU2Yi00YzUzLWFiMmUtMmExMzhkYzE0NDUzIiwid2lkdGgiOjQwMCwiaGVpZ2h0Ijo0MDAsImZpdCI6Im91dHNpZGUiLCJjb250ZW50VHlwZSI6ImltYWdlL3dlYnAiLCJxdWFsaXR5IjozMH0&platform=WEB&",
            "attributes": [
                {
                    "attType": "LIST",
                    "fieldName": "categories",
                    "fieldNameLabel": "Kategoriler",
                    "valueLabel": "",
                    "value": "",
                    "listValue": ["GIDA-OF7AC", "TEMELGIDA-4D592", "CORBA-0PZJV"],
                    "listValueLabel": ["GIDA", "Temel Gıda", "Çorba"],
                    "badges": []
                },
                {
                    "attType": "TEXT",
                    "fieldName": "shortName",
                    "fieldNameLabel": "shortName",
                    "valueLabel": "Knorr Anadolu Tahıllı Refika Tarhana Çorbası 85 g",
                    "value": "Knorr Anadolu Tahıllı Refika Tarhana Çorbası 85 g"
                },
                {
                    "attType": "KEYWORD",
                    "fieldName": "brand",
                    "fieldNameLabel": "Markalar",
                    "valueLabel": "KNORR",
                    "value": "KNORR"
                },
                {
                    "attType": "LONG_TEXT",
                    "fieldName": "productDescription",
                    "fieldNameLabel": "productDescription",
                    "valueLabel": "Tarifi Refika'dan Lezzeti Knorr'dan! Besleyici Anadolu Tahılları Refika Birgül'ün özel tarifiyle, Knorr'la sofranızda! Geleneksel Tarhana Çorbası Anadolu'nun Leziz Erişteleri ve Zamanında Toplanıp, Sizler İçin Kurutulmuş Sebze ve Baharatlarla Bir Araya Geliyor. Bambaşka bir kurutulmuş çorba deneyimi için yeni Knorr Refika'dan Erişteli Tarhana Çorbasını Mutlaka Deneyin! ",
                    "value": "Tarifi Refika'dan Lezzeti Knorr'dan! Besleyici Anadolu Tahılları Refika Birgül'ün özel tarifiyle, Knorr'la sofranızda! Geleneksel Tarhana Çorbası Anadolu'nun Leziz Erişteleri ve Zamanında Toplanıp, Sizler İçin Kurutulmuş Sebze ve Baharatlarla Bir Araya Geliyor. Bambaşka bir kurutulmuş çorba deneyimi için yeni Knorr Refika'dan Erişteli Tarhana Çorbasını Mutlaka Deneyin! "
                },
                {
                    "attType": "LIST",
                    "fieldName": "productFeature",
                    "fieldNameLabel": "Ürün Özelliği",
                    "valueLabel": "",
                    "value": "",
                    "listValue": [],
                    "listValueLabel": [],
                    "badges": []
                },
                {
                    "attType": "LIST",
                    "fieldName": "tags",
                    "fieldNameLabel": "tags",
                    "valueLabel": "",
                    "value": "",
                    "listValue": [],
                    "listValueLabel": [],
                    "badges": []
                },
                {
                    "attType": "TEXT",
                    "fieldName": "longName",
                    "fieldNameLabel": "longName",
                    "valueLabel": "Knorr Anadolu Tahıllı Refika Tarhana Çorbası 85 g",
                    "value": "Knorr Anadolu Tahıllı Refika Tarhana Çorbası 85 g"
                }
            ],
            "priceTag": {
                "currency": "TRY",
                "merchantId": "default",
                "values": [],
                "price": 695,
                "priceLabel": "6.95 TL",
                "discountedPrice": 500,
                "discountedPriceLabel": "5.00 TL",
                "discountRate": 28,
                "discountRateLabel": "28"
            },
            "stockStatus": "LOW",
            "itemType": "SINGLE"
        },
        {
            "id": "67707904",
            "variantGroupId": "67707904",
            "images": "https://core.rtbs.io/user/action/6ad47403c22043a795e973c7ec83dcc7/rbs.storage.get.GET_IMAGE?auth=&data=eyJpbWFnZUlkIjoiZGJlNzhjOWItYzUzZS00MDgyLWE1OGEtZmQ5YzVhNzMxZDBkIiwid2lkdGgiOjQwMCwiaGVpZ2h0Ijo0MDAsImZpdCI6Im91dHNpZGUiLCJjb250ZW50VHlwZSI6ImltYWdlL3dlYnAiLCJxdWFsaXR5IjozMH0&platform=WEB&",
            "attributes": [
                {
                    "attType": "LIST",
                    "fieldName": "categories",
                    "fieldNameLabel": "Kategoriler",
                    "valueLabel": "",
                    "value": "",
                    "listValue": ["GIDA-OF7AC", "TEMELGIDA-4D592", "MAKARNA-71KRH"],
                    "listValueLabel": ["GIDA", "Temel Gıda", "Makarna"],
                    "badges": []
                },
                {
                    "attType": "TEXT",
                    "fieldName": "shortName",
                    "fieldNameLabel": "shortName",
                    "valueLabel": "Knorr Napoliten Çabuk Makarna 67 g",
                    "value": "Knorr Napoliten Çabuk Makarna 67 g"
                },
                {
                    "attType": "KEYWORD",
                    "fieldName": "brand",
                    "fieldNameLabel": "Markalar",
                    "valueLabel": "KNORR",
                    "value": "KNORR"
                },
                {
                    "attType": "LONG_TEXT",
                    "fieldName": "productDescription",
                    "fieldNameLabel": "productDescription",
                    "valueLabel": "Karnınız Aç Zamanınız Azsa, Knorr Çabuk Makarna 5 Dakikada Hazır! Enfes Napoliten Soslu Makarna İçin İhtiyacın Olan Tek Şey Sıcak Su. Su Isıtıcısında Kaynattığın Suyu, Paket İçinde Gösterilen Alana Kadar Doldur, İyice Karıştır, Kapağını Kapat, 5 Dakika Bekle ve Makarnan Hazır! Afiyet Olsun ?",
                    "value": "Karnınız Aç Zamanınız Azsa, Knorr Çabuk Makarna 5 Dakikada Hazır! Enfes Napoliten Soslu Makarna İçin İhtiyacın Olan Tek Şey Sıcak Su. Su Isıtıcısında Kaynattığın Suyu, Paket İçinde Gösterilen Alana Kadar Doldur, İyice Karıştır, Kapağını Kapat, 5 Dakika Bekle ve Makarnan Hazır! Afiyet Olsun ?"
                },
                {
                    "attType": "LIST",
                    "fieldName": "productFeature",
                    "fieldNameLabel": "Ürün Özelliği",
                    "valueLabel": "",
                    "value": "",
                    "listValue": [],
                    "listValueLabel": [],
                    "badges": []
                },
                {
                    "attType": "LIST",
                    "fieldName": "tags",
                    "fieldNameLabel": "tags",
                    "valueLabel": "",
                    "value": "",
                    "listValue": [],
                    "listValueLabel": [],
                    "badges": []
                },
                {
                    "attType": "TEXT",
                    "fieldName": "longName",
                    "fieldNameLabel": "longName",
                    "valueLabel": "Knorr Napoliten Çabuk Makarna 67 g",
                    "value": "Knorr Napoliten Çabuk Makarna 67 g"
                }
            ],
            "priceTag": {
                "currency": "TRY",
                "merchantId": "default",
                "values": [],
                "price": 695,
                "priceLabel": "6.95 TL",
                "discountedPrice": 500,
                "discountedPriceLabel": "5.00 TL",
                "discountRate": 28,
                "discountRateLabel": "28"
            },
            "stockStatus": "HIGH",
            "itemType": "SINGLE"
        },
        {
            "id": "67903861",
            "variantGroupId": "67903861",
            "images": "https://core.rtbs.io/user/action/6ad47403c22043a795e973c7ec83dcc7/rbs.storage.get.GET_IMAGE?auth=&data=eyJpbWFnZUlkIjoiNmU4MmEwYmMtMmRmMy00ZWI5LWFkNWEtYTEzYzFlMmU4NTJiIiwid2lkdGgiOjQwMCwiaGVpZ2h0Ijo0MDAsImZpdCI6Im91dHNpZGUiLCJjb250ZW50VHlwZSI6ImltYWdlL3dlYnAiLCJxdWFsaXR5IjozMH0&platform=WEB&",
            "attributes": [
                {
                    "attType": "LIST",
                    "fieldName": "categories",
                    "fieldNameLabel": "Kategoriler",
                    "valueLabel": "",
                    "value": "",
                    "listValue": ["GIDA-OF7AC", "ATISTIRMALIK-N5RUF", "CIPS-P1OZG"],
                    "listValueLabel": ["GIDA", "Atıştırmalık", "Cips & Kraker"],
                    "badges": []
                },
                {
                    "attType": "TEXT",
                    "fieldName": "shortName",
                    "fieldNameLabel": "shortName",
                    "valueLabel": "Knorr Veggies Yeşil Kabak Kıtırı 20 g",
                    "value": "Knorr Veggies Yeşil Kabak Kıtırı 20 g"
                },
                {
                    "attType": "KEYWORD",
                    "fieldName": "brand",
                    "fieldNameLabel": "Markalar",
                    "valueLabel": "KNORR",
                    "value": "KNORR"
                },
                {
                    "attType": "LONG_TEXT",
                    "fieldName": "productDescription",
                    "fieldNameLabel": "productDescription",
                    "valueLabel": "Sürdürülebilir Tarım Destekçisi Knorr'dan Sağlıklı Atıştırmalığın Yeni Adresi, Knorr veggies Sebze Kıtırları! Karnın Açsa ve Sağlıklı Bir Atıştırmalık Arıyorsan Yeni Knorr veggies Tam Sana Göre! Glutensiz, Potasyum, Protein ve Lif Kaynağı Yeşil Kabak Kıtırlarını Hemen Denemelisin!",
                    "value": "Sürdürülebilir Tarım Destekçisi Knorr'dan Sağlıklı Atıştırmalığın Yeni Adresi, Knorr veggies Sebze Kıtırları! Karnın Açsa ve Sağlıklı Bir Atıştırmalık Arıyorsan Yeni Knorr veggies Tam Sana Göre! Glutensiz, Potasyum, Protein ve Lif Kaynağı Yeşil Kabak Kıtırlarını Hemen Denemelisin!"
                },
                {
                    "attType": "LIST",
                    "fieldName": "productFeature",
                    "fieldNameLabel": "Ürün Özelliği",
                    "valueLabel": "",
                    "value": "",
                    "listValue": [],
                    "listValueLabel": [],
                    "badges": []
                },
                {
                    "attType": "LIST",
                    "fieldName": "tags",
                    "fieldNameLabel": "tags",
                    "valueLabel": "",
                    "value": "",
                    "listValue": [],
                    "listValueLabel": [],
                    "badges": []
                },
                {
                    "attType": "TEXT",
                    "fieldName": "longName",
                    "fieldNameLabel": "longName",
                    "valueLabel": "Knorr Veggies Yeşil Kabak Kıtırı 20 g",
                    "value": "Knorr Veggies Yeşil Kabak Kıtırı 20 g"
                }
            ],
            "priceTag": {
                "currency": "TRY",
                "merchantId": "default",
                "values": [],
                "price": 895,
                "priceLabel": "8.95 TL",
                "discountedPrice": 500,
                "discountedPriceLabel": "5.00 TL",
                "discountRate": 44,
                "discountRateLabel": "44"
            },
            "stockStatus": "HIGH",
            "itemType": "SINGLE"
        },
        {
            "id": "68225179",
            "variantGroupId": "68225179",
            "images": "https://core.rtbs.io/user/action/6ad47403c22043a795e973c7ec83dcc7/rbs.storage.get.GET_IMAGE?auth=&data=eyJpbWFnZUlkIjoiNWY1MmUwOWUtZWViZC00YjcwLTkyMDItNTgwOThjZWI3MzU4Iiwid2lkdGgiOjQwMCwiaGVpZ2h0Ijo0MDAsImZpdCI6Im91dHNpZGUiLCJjb250ZW50VHlwZSI6ImltYWdlL3dlYnAiLCJxdWFsaXR5IjozMH0&platform=WEB&",
            "attributes": [
                {
                    "attType": "NUMBER",
                    "fieldName": "rating",
                    "fieldNameLabel": "rating",
                    "valueLabel": "5",
                    "value": 5
                },
                {
                    "attType": "LIST",
                    "fieldName": "categories",
                    "fieldNameLabel": "Kategoriler",
                    "valueLabel": "",
                    "value": "",
                    "listValue": ["GIDA-OF7AC", "TEMELGIDA-4D592", "CORBA-0PZJV"],
                    "listValueLabel": ["GIDA", "Temel Gıda", "Çorba"],
                    "badges": []
                },
                {
                    "attType": "TEXT",
                    "fieldName": "shortName",
                    "fieldNameLabel": "shortName",
                    "valueLabel": "Knorr Anadolu Tahıllı Refika Tavuk Çorbası 75 g",
                    "value": "Knorr Anadolu Tahıllı Refika Tavuk Çorbası 75 g"
                },
                {
                    "attType": "KEYWORD",
                    "fieldName": "brand",
                    "fieldNameLabel": "Markalar",
                    "valueLabel": "KNORR",
                    "value": "KNORR"
                },
                {
                    "attType": "LONG_TEXT",
                    "fieldName": "productDescription",
                    "fieldNameLabel": "productDescription",
                    "valueLabel": "Tarifi Refika'dan Lezzeti Knorr'dan! Besleyici Anadolu Tahılları Refika Birgül'ün özel tarifiyle, Knorr'la sofranızda! Banvit'in Leziz Tavukları, Besleyici Kuskus, Mantar ve zamanında toplanıp, Sizler İçin Kurutulan Sebze ve Baharatların Harmanıyla Hazırlandı.  Bambaşka bir kurutulmuş çorba deneyimi için yeni Knorr Refika'dan Kuskuslu, Mantarlı Tavuk Çorbasını Mutlaka Deneyin! ",
                    "value": "Tarifi Refika'dan Lezzeti Knorr'dan! Besleyici Anadolu Tahılları Refika Birgül'ün özel tarifiyle, Knorr'la sofranızda! Banvit'in Leziz Tavukları, Besleyici Kuskus, Mantar ve zamanında toplanıp, Sizler İçin Kurutulan Sebze ve Baharatların Harmanıyla Hazırlandı.  Bambaşka bir kurutulmuş çorba deneyimi için yeni Knorr Refika'dan Kuskuslu, Mantarlı Tavuk Çorbasını Mutlaka Deneyin! "
                },
                {
                    "attType": "LIST",
                    "fieldName": "productFeature",
                    "fieldNameLabel": "Ürün Özelliği",
                    "valueLabel": "",
                    "value": "",
                    "listValue": [],
                    "listValueLabel": [],
                    "badges": []
                },
                {
                    "attType": "LIST",
                    "fieldName": "tags",
                    "fieldNameLabel": "tags",
                    "valueLabel": "",
                    "value": "",
                    "listValue": [],
                    "listValueLabel": [],
                    "badges": []
                },
                {
                    "attType": "TEXT",
                    "fieldName": "longName",
                    "fieldNameLabel": "longName",
                    "valueLabel": "Knorr Anadolu Tahıllı Refika Tavuk Çorbası 75 g",
                    "value": "Knorr Anadolu Tahıllı Refika Tavuk Çorbası 75 g"
                }
            ],
            "priceTag": {
                "currency": "TRY",
                "merchantId": "default",
                "values": [],
                "price": 695,
                "priceLabel": "6.95 TL",
                "discountedPrice": 500,
                "discountedPriceLabel": "5.00 TL",
                "discountRate": 28,
                "discountRateLabel": "28"
            },
            "stockStatus": "HIGH",
            "itemType": "SINGLE"
        },
        {
            "id": "67793860",
            "variantGroupId": "67793860",
            "images": "https://core.rtbs.io/user/action/6ad47403c22043a795e973c7ec83dcc7/rbs.storage.get.GET_IMAGE?auth=&data=eyJpbWFnZUlkIjoiMTM0YTY5MDMtMGE5OC00M2EwLTgyNzEtODczOGYyY2ZiZDQ3Iiwid2lkdGgiOjQwMCwiaGVpZ2h0Ijo0MDAsImZpdCI6Im91dHNpZGUiLCJjb250ZW50VHlwZSI6ImltYWdlL3dlYnAiLCJxdWFsaXR5IjozMH0&platform=WEB&",
            "attributes": [
                {
                    "attType": "LIST",
                    "fieldName": "categories",
                    "fieldNameLabel": "Kategoriler",
                    "valueLabel": "",
                    "value": "",
                    "listValue": ["GIDA-OF7AC", "TEMELGIDA-4D592", "CORBA-0PZJV"],
                    "listValueLabel": ["GIDA", "Temel Gıda", "Çorba"],
                    "badges": []
                },
                {
                    "attType": "TEXT",
                    "fieldName": "shortName",
                    "fieldNameLabel": "shortName",
                    "valueLabel": "Knorr Firikli Ezogelin Çorbası 98 g",
                    "value": "Knorr Firikli Ezogelin Çorbası 98 g"
                },
                {
                    "attType": "KEYWORD",
                    "fieldName": "brand",
                    "fieldNameLabel": "Markalar",
                    "valueLabel": "KNORR",
                    "value": "KNORR"
                },
                {
                    "attType": "LONG_TEXT",
                    "fieldName": "productDescription",
                    "fieldNameLabel": "productDescription",
                    "valueLabel": "Kalabalık sofra sevenlere; Knorr’dan Firik Bulgurlu Ezogelin Çorbası\n\nSevdiğiniz ezogelin çorbası lezzetini Anadolu’nun besleyici tahıllarından firik bulguru ve kuru baklagillerinden mercimek ile bir araya getirdik.\n\nİyi bir haberimiz var!\nSürdürülebilir domatesler kullanılarak hazırlanan Knorr Firik Bulgurlu Ezogelin Çorbası, yüksek protein ve lif kaynağı içeriğiyle Anadolu’nun eşsiz lezzetlerini sofranıza getiriyor. Güneşte olgunlaşan ve mevsiminde toplanan sebze, tahıl ve baharatları geleneksel yöntemlerle kurutarak hazırladığımız Knorr Firik Bulgurlu Ezogelin Çorbası vazgeçemediğiniz ezogelin lezzetini daha da vazgeçilmez kılıyor.\n\nKnorr şeflerinin ustalıkla hazırladıkları lezzetli çorba çeşitlerini sofralarınızda tüm sevdiklerinizle afiyetle paylaşın.\n•\tMükemmel lezzetli ve besleyici çorbalarımızı yaratırken Knorr şefleri ve beslenme uzmanları ile çalışıyoruz.\n•\tTarhana gibi kuruttuğumuz çorbalarımızın tazeliğini, hava, ışık ve neme karşı koruma sağlayan 3 katlı paketlerimiz ile uzun süre koruyoruz.\n•\tBir pakette 4 kişilik çorba bulunuyor.",
                    "value": "Kalabalık sofra sevenlere; Knorr’dan Firik Bulgurlu Ezogelin Çorbası\n\nSevdiğiniz ezogelin çorbası lezzetini Anadolu’nun besleyici tahıllarından firik bulguru ve kuru baklagillerinden mercimek ile bir araya getirdik.\n\nİyi bir haberimiz var!\nSürdürülebilir domatesler kullanılarak hazırlanan Knorr Firik Bulgurlu Ezogelin Çorbası, yüksek protein ve lif kaynağı içeriğiyle Anadolu’nun eşsiz lezzetlerini sofranıza getiriyor. Güneşte olgunlaşan ve mevsiminde toplanan sebze, tahıl ve baharatları geleneksel yöntemlerle kurutarak hazırladığımız Knorr Firik Bulgurlu Ezogelin Çorbası vazgeçemediğiniz ezogelin lezzetini daha da vazgeçilmez kılıyor.\n\nKnorr şeflerinin ustalıkla hazırladıkları lezzetli çorba çeşitlerini sofralarınızda tüm sevdiklerinizle afiyetle paylaşın.\n•\tMükemmel lezzetli ve besleyici çorbalarımızı yaratırken Knorr şefleri ve beslenme uzmanları ile çalışıyoruz.\n•\tTarhana gibi kuruttuğumuz çorbalarımızın tazeliğini, hava, ışık ve neme karşı koruma sağlayan 3 katlı paketlerimiz ile uzun süre koruyoruz.\n•\tBir pakette 4 kişilik çorba bulunuyor."
                },
                {
                    "attType": "LIST",
                    "fieldName": "productFeature",
                    "fieldNameLabel": "Ürün Özelliği",
                    "valueLabel": "",
                    "value": "",
                    "listValue": [],
                    "listValueLabel": [],
                    "badges": []
                },
                {
                    "attType": "LIST",
                    "fieldName": "tags",
                    "fieldNameLabel": "tags",
                    "valueLabel": "",
                    "value": "",
                    "listValue": [],
                    "listValueLabel": [],
                    "badges": []
                },
                {
                    "attType": "TEXT",
                    "fieldName": "longName",
                    "fieldNameLabel": "longName",
                    "valueLabel": "Knorr Firikli Ezogelin Çorbası 98 g",
                    "value": "Knorr Firikli Ezogelin Çorbası 98 g"
                }
            ],
            "priceTag": {
                "currency": "TRY",
                "merchantId": "default",
                "values": [],
                "price": 695,
                "priceLabel": "6.95 TL",
                "discountedPrice": 500,
                "discountedPriceLabel": "5.00 TL",
                "discountRate": 28,
                "discountRateLabel": "28"
            },
            "stockStatus": "HIGH",
            "itemType": "SINGLE"
        },
        {
            "id": "68422103",
            "variantGroupId": "68422103",
            "images": "https://core.rtbs.io/user/action/6ad47403c22043a795e973c7ec83dcc7/rbs.storage.get.GET_IMAGE?auth=&data=eyJpbWFnZUlkIjoiMjNhNTA4ZTktOWYxOC00ZmQyLWFhNjgtODRhN2U3ODYxMjQ3Iiwid2lkdGgiOjQwMCwiaGVpZ2h0Ijo0MDAsImZpdCI6Im91dHNpZGUiLCJjb250ZW50VHlwZSI6ImltYWdlL3dlYnAiLCJxdWFsaXR5IjozMH0&platform=WEB&",
            "attributes": [
                {
                    "attType": "LIST",
                    "fieldName": "categories",
                    "fieldNameLabel": "Kategoriler",
                    "valueLabel": "",
                    "value": "",
                    "listValue": ["GIDA-OF7AC", "TEMELGIDA-4D592", "HARCLARCESNILER-VA1Z3"],
                    "listValueLabel": ["GIDA", "Temel Gıda", "Harçlar & Çeşniler"],
                    "badges": []
                },
                {
                    "attType": "TEXT",
                    "fieldName": "shortName",
                    "fieldNameLabel": "shortName",
                    "valueLabel": "Knorr Mangal Harcı 40 g",
                    "value": "Knorr Mangal Harcı 40 g"
                },
                {
                    "attType": "KEYWORD",
                    "fieldName": "brand",
                    "fieldNameLabel": "Markalar",
                    "valueLabel": "KNORR",
                    "value": "KNORR"
                },
                {
                    "attType": "LONG_TEXT",
                    "fieldName": "productDescription",
                    "fieldNameLabel": "productDescription",
                    "valueLabel": "Knorr Mangal harcı ile et ve tavuklarınız saatlerce marine edilmiş gibi lezzetli ve yumuşacık olur. Sadece 1 kg tavuk pirzola (derisiz, kemiksiz), 3 yemek kaşığı ayçiçek yağı, 3 yemek kaşığı su ekleyin. Tuz ve baharat ilave etmenize gerek yoktur. Knorr Mangal harcı'nı tavuk göğüs eti, kuzu eti, dana eti, hindi veya fileto balıklar için de kullanabilirsiniz.",
                    "value": "Knorr Mangal harcı ile et ve tavuklarınız saatlerce marine edilmiş gibi lezzetli ve yumuşacık olur. Sadece 1 kg tavuk pirzola (derisiz, kemiksiz), 3 yemek kaşığı ayçiçek yağı, 3 yemek kaşığı su ekleyin. Tuz ve baharat ilave etmenize gerek yoktur. Knorr Mangal harcı'nı tavuk göğüs eti, kuzu eti, dana eti, hindi veya fileto balıklar için de kullanabilirsiniz."
                },
                {
                    "attType": "LIST",
                    "fieldName": "productFeature",
                    "fieldNameLabel": "Ürün Özelliği",
                    "valueLabel": "",
                    "value": "",
                    "listValue": [],
                    "listValueLabel": [],
                    "badges": []
                },
                {
                    "attType": "LIST",
                    "fieldName": "tags",
                    "fieldNameLabel": "tags",
                    "valueLabel": "",
                    "value": "",
                    "listValue": [],
                    "listValueLabel": [],
                    "badges": []
                },
                {
                    "attType": "TEXT",
                    "fieldName": "longName",
                    "fieldNameLabel": "longName",
                    "valueLabel": "Knorr Mangal Harcı 40 g",
                    "value": "Knorr Mangal Harcı 40 g"
                }
            ],
            "priceTag": {
                "currency": "TRY",
                "merchantId": "default",
                "values": [],
                "price": 645,
                "priceLabel": "6.45 TL",
                "discountedPrice": 500,
                "discountedPriceLabel": "5.00 TL",
                "discountRate": 22,
                "discountRateLabel": "22"
            },
            "stockStatus": "HIGH",
            "itemType": "SINGLE"
        },
        {
            "id": "20085798",
            "variantGroupId": "20085798",
            "images": "https://core.rtbs.io/user/action/6ad47403c22043a795e973c7ec83dcc7/rbs.storage.get.GET_IMAGE?auth=&data=eyJpbWFnZUlkIjoiOGI3OWViZGMtMmFlZi00YjMyLTllMjUtZGRlNWE4Y2MyNzBjIiwid2lkdGgiOjQwMCwiaGVpZ2h0Ijo0MDAsImZpdCI6Im91dHNpZGUiLCJjb250ZW50VHlwZSI6ImltYWdlL3dlYnAiLCJxdWFsaXR5IjozMH0&platform=WEB&",
            "attributes": [
                {
                    "attType": "LIST",
                    "fieldName": "categories",
                    "fieldNameLabel": "Kategoriler",
                    "valueLabel": "",
                    "value": "",
                    "listValue": ["GIDA-OF7AC", "TEMELGIDA-4D592", "HARCLARCESNILER-VA1Z3"],
                    "listValueLabel": ["GIDA", "Temel Gıda", "Harçlar & Çeşniler"],
                    "badges": []
                },
                {
                    "attType": "TEXT",
                    "fieldName": "shortName",
                    "fieldNameLabel": "shortName",
                    "valueLabel": "Knorr Tavuk Çeşnili Mangal Lezzeti 32 g",
                    "value": "Knorr Tavuk Çeşnili Mangal Lezzeti 32 g"
                },
                {
                    "attType": "KEYWORD",
                    "fieldName": "brand",
                    "fieldNameLabel": "Markalar",
                    "valueLabel": "KNORR",
                    "value": "KNORR"
                },
                {
                    "attType": "LONG_TEXT",
                    "fieldName": "productDescription",
                    "fieldNameLabel": "productDescription",
                    "valueLabel": "Knorr Şefleri tarafından harmanlanan Tavuk çeşnisi Knorr baharat çeşnilerinin dengeli baharat karışımızı mufağınıza lezzet, size zaman kazandıracak.  Üstelik içinde sadece doğal malzemeler var.  Bir paket ile  yaklaşık 46 porsiyona lezzet katabilirsiniz.  Kullanışlı paketiyle tazeliğini uzun süre korur bu sayede  ihtiyacınız olan her an elinizin altında.  Knorr Ürünlerini Keşfetmek İçin: https://www.herkessofraya.com/",
                    "value": "Knorr Şefleri tarafından harmanlanan Tavuk çeşnisi Knorr baharat çeşnilerinin dengeli baharat karışımızı mufağınıza lezzet, size zaman kazandıracak.  Üstelik içinde sadece doğal malzemeler var.  Bir paket ile  yaklaşık 46 porsiyona lezzet katabilirsiniz.  Kullanışlı paketiyle tazeliğini uzun süre korur bu sayede  ihtiyacınız olan her an elinizin altında.  Knorr Ürünlerini Keşfetmek İçin: https://www.herkessofraya.com/"
                },
                {
                    "attType": "LIST",
                    "fieldName": "productFeature",
                    "fieldNameLabel": "Ürün Özelliği",
                    "valueLabel": "",
                    "value": "",
                    "listValue": [],
                    "listValueLabel": [],
                    "badges": []
                },
                {
                    "attType": "LIST",
                    "fieldName": "tags",
                    "fieldNameLabel": "tags",
                    "valueLabel": "",
                    "value": "",
                    "listValue": [],
                    "listValueLabel": [],
                    "badges": []
                },
                {
                    "attType": "TEXT",
                    "fieldName": "longName",
                    "fieldNameLabel": "longName",
                    "valueLabel": "Knorr Tavuk Çeşnili Mangal Lezzeti 32 g",
                    "value": "Knorr Tavuk Çeşnili Mangal Lezzeti 32 g"
                }
            ],
            "priceTag": {
                "currency": "TRY",
                "merchantId": "default",
                "values": [],
                "price": 645,
                "priceLabel": "6.45 TL",
                "discountedPrice": 500,
                "discountedPriceLabel": "5.00 TL",
                "discountRate": 22,
                "discountRateLabel": "22"
            },
            "stockStatus": "HIGH",
            "itemType": "SINGLE"
        },
        {
            "id": "67889742",
            "variantGroupId": "67889742",
            "images": "https://core.rtbs.io/user/action/6ad47403c22043a795e973c7ec83dcc7/rbs.storage.get.GET_IMAGE?auth=&data=eyJpbWFnZUlkIjoiZThlMTZhM2ItNmFjOS00MzRmLTk2OWEtYTFlMDkyNmQxMWNiIiwid2lkdGgiOjQwMCwiaGVpZ2h0Ijo0MDAsImZpdCI6Im91dHNpZGUiLCJjb250ZW50VHlwZSI6ImltYWdlL3dlYnAiLCJxdWFsaXR5IjozMH0&platform=WEB&",
            "attributes": [
                {
                    "attType": "LIST",
                    "fieldName": "categories",
                    "fieldNameLabel": "Kategoriler",
                    "valueLabel": "",
                    "value": "",
                    "listValue": ["GIDA-OF7AC", "ATISTIRMALIK-N5RUF", "CIPS-P1OZG"],
                    "listValueLabel": ["GIDA", "Atıştırmalık", "Cips & Kraker"],
                    "badges": []
                },
                {
                    "attType": "TEXT",
                    "fieldName": "shortName",
                    "fieldNameLabel": "shortName",
                    "valueLabel": "Knorr Veggies Havuç Kıtırı 25 g",
                    "value": "Knorr Veggies Havuç Kıtırı 25 g"
                },
                {
                    "attType": "KEYWORD",
                    "fieldName": "brand",
                    "fieldNameLabel": "Markalar",
                    "valueLabel": "KNORR",
                    "value": "KNORR"
                },
                {
                    "attType": "LONG_TEXT",
                    "fieldName": "productDescription",
                    "fieldNameLabel": "productDescription",
                    "valueLabel": "Sürdürülebilir Tarım Destekçisi Knorr'dan Sağlıklı Atıştırmalığın Yeni Adresi, Knorr veggies Sebze Kıtırları! Karnın Açsa ve Sağlıklı Bir Atıştırmalık Arıyorsan Yeni Knorr veggies Tam Sana Göre! Glutensiz, Yağsız, Yüksek Lif ve A Vitamini Kaynağı Havuç Kıtırlarını Hemen Denemelisin!",
                    "value": "Sürdürülebilir Tarım Destekçisi Knorr'dan Sağlıklı Atıştırmalığın Yeni Adresi, Knorr veggies Sebze Kıtırları! Karnın Açsa ve Sağlıklı Bir Atıştırmalık Arıyorsan Yeni Knorr veggies Tam Sana Göre! Glutensiz, Yağsız, Yüksek Lif ve A Vitamini Kaynağı Havuç Kıtırlarını Hemen Denemelisin!"
                },
                {
                    "attType": "LIST",
                    "fieldName": "productFeature",
                    "fieldNameLabel": "Ürün Özelliği",
                    "valueLabel": "",
                    "value": "",
                    "listValue": [],
                    "listValueLabel": [],
                    "badges": []
                },
                {
                    "attType": "LIST",
                    "fieldName": "tags",
                    "fieldNameLabel": "tags",
                    "valueLabel": "",
                    "value": "",
                    "listValue": [],
                    "listValueLabel": [],
                    "badges": []
                },
                {
                    "attType": "TEXT",
                    "fieldName": "longName",
                    "fieldNameLabel": "longName",
                    "valueLabel": "Knorr Veggies Havuç Kıtırı 25 g",
                    "value": "Knorr Veggies Havuç Kıtırı 25 g"
                }
            ],
            "priceTag": {
                "currency": "TRY",
                "merchantId": "default",
                "values": [],
                "price": 895,
                "priceLabel": "8.95 TL",
                "discountedPrice": 500,
                "discountedPriceLabel": "5.00 TL",
                "discountRate": 44,
                "discountRateLabel": "44"
            },
            "stockStatus": "LOW",
            "itemType": "SINGLE"
        },
        {
            "id": "20270364",
            "variantGroupId": "20270364",
            "images": "https://core.rtbs.io/user/action/6ad47403c22043a795e973c7ec83dcc7/rbs.storage.get.GET_IMAGE?auth=&data=eyJpbWFnZUlkIjoiNmNhYjE2ODItZmE0Ny00ODBmLTkxYTAtMGU5NWJkMGNlOTM0Iiwid2lkdGgiOjQwMCwiaGVpZ2h0Ijo0MDAsImZpdCI6Im91dHNpZGUiLCJjb250ZW50VHlwZSI6ImltYWdlL3dlYnAiLCJxdWFsaXR5IjozMH0&platform=WEB&",
            "attributes": [
                {
                    "attType": "LIST",
                    "fieldName": "categories",
                    "fieldNameLabel": "Kategoriler",
                    "valueLabel": "",
                    "value": "",
                    "listValue": ["GUZELLIK-Z5BVT", "AGIZ-HDMYR", "DISFIRCASI-30ZU7"],
                    "listValueLabel": [
                        "GÜZELLİK & KİŞİSEL BAKIM",
                        "Ağız Bakım",
                        "Diş Fırçası"
                    ],
                    "badges": []
                },
                {
                    "attType": "TEXT",
                    "fieldName": "shortName",
                    "fieldNameLabel": "shortName",
                    "valueLabel": "Signal Beyaz Güç Diş Fırçası Orta",
                    "value": "Signal Beyaz Güç Diş Fırçası Orta"
                },
                {
                    "attType": "KEYWORD",
                    "fieldName": "brand",
                    "fieldNameLabel": "Markalar",
                    "valueLabel": "SIGNAL",
                    "value": "SIGNAL"
                },
                {
                    "attType": "LONG_TEXT",
                    "fieldName": "productDescription",
                    "fieldNameLabel": "productDescription",
                    "valueLabel": "Signal Beyaz Güç Diş Fırçası, diş ve diş eti sağlığını korur. Dişinizde oluşan bakteri ve mikropları kolayca temizler. Böylece dişlerin çürümesine engel olur. Ayrıca çürümeye bağlı ağızda oluşabilecek kötü kokuları da yok eder. Özel olarak geliştirilmiş Tynex kılları ile diş üzerinde oluşan lekeleri diş minesine zarar vermeden kolayca temizler. Diş taşı ve tartar oluşumunu engeller. Orta kıllı yapısı sayesinde diş etine zarar vermez. Dişinizin üzerinde oluşan sarı lekeleri gözle görülür şekilde yok eder.<pre>\r\n<pre>Ağız ve diş yapısına uygun olarak tasarlanan uzun ve dar yapısıyla Signal Beyaz Güç Diş Fırçası, kolay kullanımı ile sıradan fırçaların aksine ulaşılması zor yerlere rahatlıkla ulaşarak plak ve bakterileri temizler. Tynex kılları sayesinde dar diş aralarında derinlemesine bir temizlik sağlar. Kolay fırça kullanımına sahip olan tasarımıyla Signal Beyaz Güç Diş Fırçası, günlük ve düzenli bir kullanımda dişlerin ilk günkü gibi doğal beyazlığına kavuşmasını sağlar. Signal Beyaz Güç Diş Fırçası ile bembeyaz dişlere ve ışıl ışıl bir gülümsemeye sahip olabilirsiniz.",
                    "value": "Signal Beyaz Güç Diş Fırçası, diş ve diş eti sağlığını korur. Dişinizde oluşan bakteri ve mikropları kolayca temizler. Böylece dişlerin çürümesine engel olur. Ayrıca çürümeye bağlı ağızda oluşabilecek kötü kokuları da yok eder. Özel olarak geliştirilmiş Tynex kılları ile diş üzerinde oluşan lekeleri diş minesine zarar vermeden kolayca temizler. Diş taşı ve tartar oluşumunu engeller. Orta kıllı yapısı sayesinde diş etine zarar vermez. Dişinizin üzerinde oluşan sarı lekeleri gözle görülür şekilde yok eder.<pre>\r\n<pre>Ağız ve diş yapısına uygun olarak tasarlanan uzun ve dar yapısıyla Signal Beyaz Güç Diş Fırçası, kolay kullanımı ile sıradan fırçaların aksine ulaşılması zor yerlere rahatlıkla ulaşarak plak ve bakterileri temizler. Tynex kılları sayesinde dar diş aralarında derinlemesine bir temizlik sağlar. Kolay fırça kullanımına sahip olan tasarımıyla Signal Beyaz Güç Diş Fırçası, günlük ve düzenli bir kullanımda dişlerin ilk günkü gibi doğal beyazlığına kavuşmasını sağlar. Signal Beyaz Güç Diş Fırçası ile bembeyaz dişlere ve ışıl ışıl bir gülümsemeye sahip olabilirsiniz."
                },
                {
                    "attType": "LIST",
                    "fieldName": "productFeature",
                    "fieldNameLabel": "Ürün Özelliği",
                    "valueLabel": "",
                    "value": "",
                    "listValue": [],
                    "listValueLabel": [],
                    "badges": []
                },
                {
                    "attType": "LIST",
                    "fieldName": "tags",
                    "fieldNameLabel": "tags",
                    "valueLabel": "",
                    "value": "",
                    "listValue": [],
                    "listValueLabel": [],
                    "badges": []
                },
                {
                    "attType": "TEXT",
                    "fieldName": "longName",
                    "fieldNameLabel": "longName",
                    "valueLabel": "Signal Beyaz Güç Diş Fırçası Orta",
                    "value": "Signal Beyaz Güç Diş Fırçası Orta"
                }
            ],
            "priceTag": {
                "currency": "TRY",
                "merchantId": "default",
                "values": [],
                "price": 795,
                "priceLabel": "7.95 TL",
                "discountedPrice": 500,
                "discountedPriceLabel": "5.00 TL",
                "discountRate": 37,
                "discountRateLabel": "37"
            },
            "stockStatus": "HIGH",
            "itemType": "SINGLE"
        },
        {
            "id": "70003552",
            "variantGroupId": "70003552",
            "images": "https://core.rtbs.io/user/action/6ad47403c22043a795e973c7ec83dcc7/rbs.storage.get.GET_IMAGE?auth=&data=eyJpbWFnZUlkIjoiOWYwMmNlNzAtYTU2YS00YTlkLWFjOWMtNDJkMTQ0NDUyZWIzIiwid2lkdGgiOjQwMCwiaGVpZ2h0Ijo0MDAsImZpdCI6Im91dHNpZGUiLCJjb250ZW50VHlwZSI6ImltYWdlL3dlYnAiLCJxdWFsaXR5IjozMH0&platform=WEB&",
            "attributes": [
                {
                    "attType": "LIST",
                    "fieldName": "categories",
                    "fieldNameLabel": "Kategoriler",
                    "valueLabel": "",
                    "value": "",
                    "listValue": ["GIDA-OF7AC", "TEMELGIDA-4D592", "BULYON-8FBTW"],
                    "listValueLabel": ["GIDA", "Temel Gıda", "Bulyon"],
                    "badges": []
                },
                {
                    "attType": "TEXT",
                    "fieldName": "shortName",
                    "fieldNameLabel": "shortName",
                    "valueLabel": "Knorr Tavuk Bulyon 6 lt 12 Adet",
                    "value": "Knorr Tavuk Bulyon 6 lt 12 Adet"
                },
                {
                    "attType": "KEYWORD",
                    "fieldName": "brand",
                    "fieldNameLabel": "Markalar",
                    "valueLabel": "KNORR",
                    "value": "KNORR"
                },
                {
                    "attType": "LONG_TEXT",
                    "fieldName": "productDescription",
                    "fieldNameLabel": "productDescription",
                    "valueLabel": "Knorr'un en özel yemeklerinize ve çorbalarınıza lezzet katacak Tavuk Suyu Bulyon (6lt) ürününü yakından incelemek için tıklayın!",
                    "value": "Knorr'un en özel yemeklerinize ve çorbalarınıza lezzet katacak Tavuk Suyu Bulyon (6lt) ürününü yakından incelemek için tıklayın!"
                },
                {
                    "attType": "LIST",
                    "fieldName": "productFeature",
                    "fieldNameLabel": "Ürün Özelliği",
                    "valueLabel": "",
                    "value": "",
                    "listValue": [],
                    "listValueLabel": [],
                    "badges": []
                },
                {
                    "attType": "LIST",
                    "fieldName": "tags",
                    "fieldNameLabel": "tags",
                    "valueLabel": "",
                    "value": "",
                    "listValue": [],
                    "listValueLabel": [],
                    "badges": []
                },
                {
                    "attType": "TEXT",
                    "fieldName": "longName",
                    "fieldNameLabel": "longName",
                    "valueLabel": "Knorr Tavuk Bulyon 6 lt 12 Adet",
                    "value": "Knorr Tavuk Bulyon 6 lt 12 Adet"
                }
            ],
            "priceTag": {
                "currency": "TRY",
                "merchantId": "default",
                "values": [],
                "price": 635,
                "priceLabel": "6.35 TL",
                "discountedPrice": 500,
                "discountedPriceLabel": "5.00 TL",
                "discountRate": 21,
                "discountRateLabel": "21"
            },
            "stockStatus": "HIGH",
            "itemType": "SINGLE"
        },
        {
            "id": "68580015",
            "variantGroupId": "68580015",
            "images": "https://core.rtbs.io/user/action/6ad47403c22043a795e973c7ec83dcc7/rbs.storage.get.GET_IMAGE?auth=&data=eyJpbWFnZUlkIjoiNDk5OTZhMDYtNjQ1MC00MWYyLWIzZWEtNDY3YjNiNmJjMDQzIiwid2lkdGgiOjQwMCwiaGVpZ2h0Ijo0MDAsImZpdCI6Im91dHNpZGUiLCJjb250ZW50VHlwZSI6ImltYWdlL3dlYnAiLCJxdWFsaXR5IjozMH0&platform=WEB&",
            "attributes": [
                {
                    "attType": "LIST",
                    "fieldName": "categories",
                    "fieldNameLabel": "Kategoriler",
                    "valueLabel": "",
                    "value": "",
                    "listValue": ["GIDA-OF7AC", "TEMELGIDA-4D592", "CORBA-0PZJV"],
                    "listValueLabel": ["GIDA", "Temel Gıda", "Çorba"],
                    "badges": []
                },
                {
                    "attType": "TEXT",
                    "fieldName": "shortName",
                    "fieldNameLabel": "shortName",
                    "valueLabel": "Knorr Zerdeçallı Mercimekli Yoğurt Çorbası 98 g",
                    "value": "Knorr Zerdeçallı Mercimekli Yoğurt Çorbası 98 g"
                },
                {
                    "attType": "KEYWORD",
                    "fieldName": "brand",
                    "fieldNameLabel": "Markalar",
                    "valueLabel": "KNORR",
                    "value": "KNORR"
                },
                {
                    "attType": "LONG_TEXT",
                    "fieldName": "productDescription",
                    "fieldNameLabel": "productDescription",
                    "valueLabel": "Dönemin vazgeçilmez lezzeti zerdeçalla zenginleştirilmiş, besleyici protein kaynağı Knorr Zerdeçallı Mercimekli Yoğurt Çorbası, şimdi sizin dokunuşunuzla daha lezzetli! Mutfağınızda kolayca bulacağınız yumurte ve yoğurt ile lezzetini kendiniz yaratın!",
                    "value": "Dönemin vazgeçilmez lezzeti zerdeçalla zenginleştirilmiş, besleyici protein kaynağı Knorr Zerdeçallı Mercimekli Yoğurt Çorbası, şimdi sizin dokunuşunuzla daha lezzetli! Mutfağınızda kolayca bulacağınız yumurte ve yoğurt ile lezzetini kendiniz yaratın!"
                },
                {
                    "attType": "LIST",
                    "fieldName": "productFeature",
                    "fieldNameLabel": "Ürün Özelliği",
                    "valueLabel": "",
                    "value": "",
                    "listValue": [],
                    "listValueLabel": [],
                    "badges": []
                },
                {
                    "attType": "LIST",
                    "fieldName": "tags",
                    "fieldNameLabel": "tags",
                    "valueLabel": "",
                    "value": "",
                    "listValue": [],
                    "listValueLabel": [],
                    "badges": []
                },
                {
                    "attType": "TEXT",
                    "fieldName": "longName",
                    "fieldNameLabel": "longName",
                    "valueLabel": "Knorr Zerdeçallı Mercimekli Yoğurt Çorbası 98 g",
                    "value": "Knorr Zerdeçallı Mercimekli Yoğurt Çorbası 98 g"
                }
            ],
            "priceTag": {
                "currency": "TRY",
                "merchantId": "default",
                "values": [],
                "price": 695,
                "priceLabel": "6.95 TL",
                "discountedPrice": 500,
                "discountedPriceLabel": "5.00 TL",
                "discountRate": 28,
                "discountRateLabel": "28"
            },
            "stockStatus": "HIGH",
            "itemType": "SINGLE"
        },
        {
            "id": "67889740",
            "variantGroupId": "67889740",
            "images": "https://core.rtbs.io/user/action/6ad47403c22043a795e973c7ec83dcc7/rbs.storage.get.GET_IMAGE?auth=&data=eyJpbWFnZUlkIjoiMzkzZDE3ZDUtNGNlOS00NzMzLTg5OTYtOWE4ODdkYTg0MTQ4Iiwid2lkdGgiOjQwMCwiaGVpZ2h0Ijo0MDAsImZpdCI6Im91dHNpZGUiLCJjb250ZW50VHlwZSI6ImltYWdlL3dlYnAiLCJxdWFsaXR5IjozMH0&platform=WEB&",
            "attributes": [
                {
                    "attType": "LIST",
                    "fieldName": "categories",
                    "fieldNameLabel": "Kategoriler",
                    "valueLabel": "",
                    "value": "",
                    "listValue": ["GIDA-OF7AC", "ATISTIRMALIK-N5RUF", "CIPS-P1OZG"],
                    "listValueLabel": ["GIDA", "Atıştırmalık", "Cips & Kraker"],
                    "badges": []
                },
                {
                    "attType": "TEXT",
                    "fieldName": "shortName",
                    "fieldNameLabel": "shortName",
                    "valueLabel": "Knorr Veggies Kimyonlu Nohut Kıtırı 25 g",
                    "value": "Knorr Veggies Kimyonlu Nohut Kıtırı 25 g"
                },
                {
                    "attType": "KEYWORD",
                    "fieldName": "brand",
                    "fieldNameLabel": "Markalar",
                    "valueLabel": "KNORR",
                    "value": "KNORR"
                },
                {
                    "attType": "LONG_TEXT",
                    "fieldName": "productDescription",
                    "fieldNameLabel": "productDescription",
                    "valueLabel": "Sürdürülebilir Tarım Destekçisi Knorr'dan Sağlıklı Atıştırmalığın Yeni Adresi, Knorr veggies Sebze Kıtırları! Karnın Açsa ve Sağlıklı Bir Atıştırmalık Arıyorsan Yeni Knorr veggies Tam Sana Göre! Glutensiz, Yüksek Protein ve Lif Kaynağı Kimyonlu Nohut Kıtırlarını Hemen Denemelisin!",
                    "value": "Sürdürülebilir Tarım Destekçisi Knorr'dan Sağlıklı Atıştırmalığın Yeni Adresi, Knorr veggies Sebze Kıtırları! Karnın Açsa ve Sağlıklı Bir Atıştırmalık Arıyorsan Yeni Knorr veggies Tam Sana Göre! Glutensiz, Yüksek Protein ve Lif Kaynağı Kimyonlu Nohut Kıtırlarını Hemen Denemelisin!"
                },
                {
                    "attType": "LIST",
                    "fieldName": "productFeature",
                    "fieldNameLabel": "Ürün Özelliği",
                    "valueLabel": "",
                    "value": "",
                    "listValue": [],
                    "listValueLabel": [],
                    "badges": []
                },
                {
                    "attType": "LIST",
                    "fieldName": "tags",
                    "fieldNameLabel": "tags",
                    "valueLabel": "",
                    "value": "",
                    "listValue": [],
                    "listValueLabel": [],
                    "badges": []
                },
                {
                    "attType": "TEXT",
                    "fieldName": "longName",
                    "fieldNameLabel": "longName",
                    "valueLabel": "Knorr Veggies Kimyonlu Nohut Kıtırı 25 g",
                    "value": "Knorr Veggies Kimyonlu Nohut Kıtırı 25 g"
                }
            ],
            "priceTag": {
                "currency": "TRY",
                "merchantId": "default",
                "values": [],
                "price": 895,
                "priceLabel": "8.95 TL",
                "discountedPrice": 500,
                "discountedPriceLabel": "5.00 TL",
                "discountRate": 44,
                "discountRateLabel": "44"
            },
            "stockStatus": "HIGH",
            "itemType": "SINGLE"
        },
        {
            "id": "20030944",
            "variantGroupId": "20030944",
            "images": "https://core.rtbs.io/user/action/6ad47403c22043a795e973c7ec83dcc7/rbs.storage.get.GET_IMAGE?auth=&data=eyJpbWFnZUlkIjoiODBiMzBhY2QtYzhhYS00Y2EwLTkwZGMtYmYyOGJlMzhiZjU3Iiwid2lkdGgiOjQwMCwiaGVpZ2h0Ijo0MDAsImZpdCI6Im91dHNpZGUiLCJjb250ZW50VHlwZSI6ImltYWdlL3dlYnAiLCJxdWFsaXR5IjozMH0&platform=WEB&",
            "attributes": [
                {
                    "attType": "LIST",
                    "fieldName": "categories",
                    "fieldNameLabel": "Kategoriler",
                    "valueLabel": "",
                    "value": "",
                    "listValue": ["GIDA-OF7AC", "TEMELGIDA-4D592", "SOSLAR-U48MD"],
                    "listValueLabel": ["GIDA", "Temel Gıda", "Soslar"],
                    "badges": []
                },
                {
                    "attType": "TEXT",
                    "fieldName": "shortName",
                    "fieldNameLabel": "shortName",
                    "valueLabel": "Knorr Peynirli Makarna Sosu 50 g",
                    "value": "Knorr Peynirli Makarna Sosu 50 g"
                },
                {
                    "attType": "KEYWORD",
                    "fieldName": "brand",
                    "fieldNameLabel": "Markalar",
                    "valueLabel": "KNORR",
                    "value": "KNORR"
                },
                {
                    "attType": "LONG_TEXT",
                    "fieldName": "productDescription",
                    "fieldNameLabel": "productDescription",
                    "valueLabel": "Knorr'dan İtalyan Usulü tam tadında tam kıvamında 4 Peynirli makarna sosu. Sadece makarna sosu olarak değil, farklı birçok yemekte lezzet arttırıcı olarak kullanılabilir. Tuz ve baharat eklemenize gerek yoktur. Hazırlanmış sos, yarım paket (250 g) kuru makarna (500 g haşlanmış) için yeterlidir. Farklı bir lezzet için şeflerimiz Knorr 4 Peynirli makarna sosu ile fırında baharatlı makarna pay öneriyor. ",
                    "value": "Knorr'dan İtalyan Usulü tam tadında tam kıvamında 4 Peynirli makarna sosu. Sadece makarna sosu olarak değil, farklı birçok yemekte lezzet arttırıcı olarak kullanılabilir. Tuz ve baharat eklemenize gerek yoktur. Hazırlanmış sos, yarım paket (250 g) kuru makarna (500 g haşlanmış) için yeterlidir. Farklı bir lezzet için şeflerimiz Knorr 4 Peynirli makarna sosu ile fırında baharatlı makarna pay öneriyor. "
                },
                {
                    "attType": "LIST",
                    "fieldName": "productFeature",
                    "fieldNameLabel": "Ürün Özelliği",
                    "valueLabel": "",
                    "value": "",
                    "listValue": [],
                    "listValueLabel": [],
                    "badges": []
                },
                {
                    "attType": "LIST",
                    "fieldName": "tags",
                    "fieldNameLabel": "tags",
                    "valueLabel": "",
                    "value": "",
                    "listValue": [],
                    "listValueLabel": [],
                    "badges": []
                },
                {
                    "attType": "TEXT",
                    "fieldName": "longName",
                    "fieldNameLabel": "longName",
                    "valueLabel": "Knorr Peynirli Makarna Sosu 50 g",
                    "value": "Knorr Peynirli Makarna Sosu 50 g"
                }
            ],
            "priceTag": {
                "currency": "TRY",
                "merchantId": "default",
                "values": [],
                "price": 695,
                "priceLabel": "6.95 TL",
                "discountedPrice": 500,
                "discountedPriceLabel": "5.00 TL",
                "discountRate": 28,
                "discountRateLabel": "28"
            },
            "stockStatus": "HIGH",
            "itemType": "SINGLE"
        },
        {
            "id": "68422101",
            "variantGroupId": "68422101",
            "images": "https://core.rtbs.io/user/action/6ad47403c22043a795e973c7ec83dcc7/rbs.storage.get.GET_IMAGE?auth=&data=eyJpbWFnZUlkIjoiNzgxNzY3NjYtNjZjMy00ODFiLTk2NDYtNTE3OGJhYjQ4ZmY5Iiwid2lkdGgiOjQwMCwiaGVpZ2h0Ijo0MDAsImZpdCI6Im91dHNpZGUiLCJjb250ZW50VHlwZSI6ImltYWdlL3dlYnAiLCJxdWFsaXR5IjozMH0&platform=WEB&",
            "attributes": [
                {
                    "attType": "LIST",
                    "fieldName": "categories",
                    "fieldNameLabel": "Kategoriler",
                    "valueLabel": "",
                    "value": "",
                    "listValue": ["GIDA-OF7AC", "TEMELGIDA-4D592", "HARCLARCESNILER-VA1Z3"],
                    "listValueLabel": ["GIDA", "Temel Gıda", "Harçlar & Çeşniler"],
                    "badges": []
                },
                {
                    "attType": "TEXT",
                    "fieldName": "shortName",
                    "fieldNameLabel": "shortName",
                    "valueLabel": "Knorr Mangal Lezzeti Fırında Tavuk Çeşnisi 32 g ",
                    "value": "Knorr Mangal Lezzeti Fırında Tavuk Çeşnisi 32 g "
                },
                {
                    "attType": "KEYWORD",
                    "fieldName": "brand",
                    "fieldNameLabel": "Markalar",
                    "valueLabel": "KNORR",
                    "value": "KNORR"
                },
                {
                    "attType": "LONG_TEXT",
                    "fieldName": "productDescription",
                    "fieldNameLabel": "productDescription",
                    "valueLabel": "Knorr'dan lezzetli fırında tavuk çeşnisi mangal lezzeti ve damak tadınıza uygun nefis tarifler, pratik ürünler.",
                    "value": "Knorr'dan lezzetli fırında tavuk çeşnisi mangal lezzeti ve damak tadınıza uygun nefis tarifler, pratik ürünler."
                },
                {
                    "attType": "LIST",
                    "fieldName": "productFeature",
                    "fieldNameLabel": "Ürün Özelliği",
                    "valueLabel": "",
                    "value": "",
                    "listValue": [],
                    "listValueLabel": [],
                    "badges": []
                },
                {
                    "attType": "LIST",
                    "fieldName": "tags",
                    "fieldNameLabel": "tags",
                    "valueLabel": "",
                    "value": "",
                    "listValue": [],
                    "listValueLabel": [],
                    "badges": []
                },
                {
                    "attType": "TEXT",
                    "fieldName": "longName",
                    "fieldNameLabel": "longName",
                    "valueLabel": "Knorr Mangal Lezzeti Fırında Tavuk Çeşnisi 32 g ",
                    "value": "Knorr Mangal Lezzeti Fırında Tavuk Çeşnisi 32 g "
                }
            ],
            "priceTag": {
                "currency": "TRY",
                "merchantId": "default",
                "values": [],
                "price": 645,
                "priceLabel": "6.45 TL",
                "discountedPrice": 500,
                "discountedPriceLabel": "5.00 TL",
                "discountRate": 22,
                "discountRateLabel": "22"
            },
            "stockStatus": "HIGH",
            "itemType": "SINGLE"
        },
        {
            "id": "70003292",
            "variantGroupId": "70003292",
            "images": "https://core.rtbs.io/user/action/6ad47403c22043a795e973c7ec83dcc7/rbs.storage.get.GET_IMAGE?auth=&data=eyJpbWFnZUlkIjoiZWZkMDI5ZGUtYjUwNS00MmRiLThmM2UtOGIxNzg2ZjI0NjFkIiwid2lkdGgiOjQwMCwiaGVpZ2h0Ijo0MDAsImZpdCI6Im91dHNpZGUiLCJjb250ZW50VHlwZSI6ImltYWdlL3dlYnAiLCJxdWFsaXR5IjozMH0&platform=WEB&",
            "attributes": [
                {
                    "attType": "LIST",
                    "fieldName": "categories",
                    "fieldNameLabel": "Kategoriler",
                    "valueLabel": "",
                    "value": "",
                    "listValue": ["GIDA-OF7AC", "TEMELGIDA-4D592", "SOSLAR-U48MD"],
                    "listValueLabel": ["GIDA", "Temel Gıda", "Soslar"],
                    "badges": []
                },
                {
                    "attType": "TEXT",
                    "fieldName": "shortName",
                    "fieldNameLabel": "shortName",
                    "valueLabel": "Knorr Kremalı Mantar Makarna Sosu 52 g",
                    "value": "Knorr Kremalı Mantar Makarna Sosu 52 g"
                },
                {
                    "attType": "KEYWORD",
                    "fieldName": "brand",
                    "fieldNameLabel": "Markalar",
                    "valueLabel": "KNORR",
                    "value": "KNORR"
                },
                {
                    "attType": "LONG_TEXT",
                    "fieldName": "productDescription",
                    "fieldNameLabel": "productDescription",
                    "valueLabel": "Knorr'un en özel tariflerinize lezzet katacak enfes Kremalı Mantarlı Makarna Sosu ürününü incelemek ve daha yakından tanımak için tıklayın! En lezzetli ve pratik soslar Knorr'da!",
                    "value": "Knorr'un en özel tariflerinize lezzet katacak enfes Kremalı Mantarlı Makarna Sosu ürününü incelemek ve daha yakından tanımak için tıklayın! En lezzetli ve pratik soslar Knorr'da!"
                },
                {
                    "attType": "LIST",
                    "fieldName": "productFeature",
                    "fieldNameLabel": "Ürün Özelliği",
                    "valueLabel": "",
                    "value": "",
                    "listValue": [],
                    "listValueLabel": [],
                    "badges": []
                },
                {
                    "attType": "LIST",
                    "fieldName": "tags",
                    "fieldNameLabel": "tags",
                    "valueLabel": "",
                    "value": "",
                    "listValue": [],
                    "listValueLabel": [],
                    "badges": []
                },
                {
                    "attType": "TEXT",
                    "fieldName": "longName",
                    "fieldNameLabel": "longName",
                    "valueLabel": "Knorr Kremalı Mantar Makarna Sosu 52 g",
                    "value": "Knorr Kremalı Mantar Makarna Sosu 52 g"
                }
            ],
            "priceTag": {
                "currency": "TRY",
                "merchantId": "default",
                "values": [],
                "price": 695,
                "priceLabel": "6.95 TL",
                "discountedPrice": 500,
                "discountedPriceLabel": "5.00 TL",
                "discountRate": 28,
                "discountRateLabel": "28"
            },
            "stockStatus": "HIGH",
            "itemType": "SINGLE"
        },
        {
            "id": "68422097",
            "variantGroupId": "68422097",
            "images": "https://core.rtbs.io/user/action/6ad47403c22043a795e973c7ec83dcc7/rbs.storage.get.GET_IMAGE?auth=&data=eyJpbWFnZUlkIjoiYzI5NDQyYjktNzcyZi00NTc0LWE3ZmItOTE2ODAwMWYyZmVhIiwid2lkdGgiOjQwMCwiaGVpZ2h0Ijo0MDAsImZpdCI6Im91dHNpZGUiLCJjb250ZW50VHlwZSI6ImltYWdlL3dlYnAiLCJxdWFsaXR5IjozMH0&platform=WEB&",
            "attributes": [
                {
                    "attType": "LIST",
                    "fieldName": "categories",
                    "fieldNameLabel": "Kategoriler",
                    "valueLabel": "",
                    "value": "",
                    "listValue": ["GIDA-OF7AC", "TEMELGIDA-4D592", "HARCLARCESNILER-VA1Z3"],
                    "listValueLabel": ["GIDA", "Temel Gıda", "Harçlar & Çeşniler"],
                    "badges": []
                },
                {
                    "attType": "TEXT",
                    "fieldName": "shortName",
                    "fieldNameLabel": "shortName",
                    "valueLabel": "Knorr Acılı Baharatlı Fırında Tavuk Çeşnisi 31 g ",
                    "value": "Knorr Acılı Baharatlı Fırında Tavuk Çeşnisi 31 g "
                },
                {
                    "attType": "KEYWORD",
                    "fieldName": "brand",
                    "fieldNameLabel": "Markalar",
                    "valueLabel": "KNORR",
                    "value": "KNORR"
                },
                {
                    "attType": "LONG_TEXT",
                    "fieldName": "productDescription",
                    "fieldNameLabel": "productDescription",
                    "valueLabel": "Knorr'dan hazırlaması pratik yumuşacık tavuklar için Acılı Baharatlı Fırında Tavuk Çeşnisi! Tavuklarınızı Knorr'un en özel baharatların dengeli karışımıyla hazırlanmış çeşnileri ile süsleyin. Üstelik fırın torbası da içinde!",
                    "value": "Knorr'dan hazırlaması pratik yumuşacık tavuklar için Acılı Baharatlı Fırında Tavuk Çeşnisi! Tavuklarınızı Knorr'un en özel baharatların dengeli karışımıyla hazırlanmış çeşnileri ile süsleyin. Üstelik fırın torbası da içinde!"
                },
                {
                    "attType": "LIST",
                    "fieldName": "productFeature",
                    "fieldNameLabel": "Ürün Özelliği",
                    "valueLabel": "",
                    "value": "",
                    "listValue": [],
                    "listValueLabel": [],
                    "badges": []
                },
                {
                    "attType": "LIST",
                    "fieldName": "tags",
                    "fieldNameLabel": "tags",
                    "valueLabel": "",
                    "value": "",
                    "listValue": [],
                    "listValueLabel": [],
                    "badges": []
                },
                {
                    "attType": "TEXT",
                    "fieldName": "longName",
                    "fieldNameLabel": "longName",
                    "valueLabel": "Knorr Acılı Baharatlı Fırında Tavuk Çeşnisi 31 g ",
                    "value": "Knorr Acılı Baharatlı Fırında Tavuk Çeşnisi 31 g "
                }
            ],
            "priceTag": {
                "currency": "TRY",
                "merchantId": "default",
                "values": [],
                "price": 645,
                "priceLabel": "6.45 TL",
                "discountedPrice": 500,
                "discountedPriceLabel": "5.00 TL",
                "discountRate": 22,
                "discountRateLabel": "22"
            },
            "stockStatus": "HIGH",
            "itemType": "SINGLE"
        },
        {
            "id": "67794498",
            "variantGroupId": "67794498",
            "images": "https://core.rtbs.io/user/action/6ad47403c22043a795e973c7ec83dcc7/rbs.storage.get.GET_IMAGE?auth=&data=eyJpbWFnZUlkIjoiMTQ2NGMyZmYtMjMwZS00ZjE3LWIzZTctZjYxOGUzZGUxY2MyIiwid2lkdGgiOjQwMCwiaGVpZ2h0Ijo0MDAsImZpdCI6Im91dHNpZGUiLCJjb250ZW50VHlwZSI6ImltYWdlL3dlYnAiLCJxdWFsaXR5IjozMH0&platform=WEB&",
            "attributes": [
                {
                    "attType": "LIST",
                    "fieldName": "categories",
                    "fieldNameLabel": "Kategoriler",
                    "valueLabel": "",
                    "value": "",
                    "listValue": ["GIDA-OF7AC", "TEMELGIDA-4D592", "CORBA-0PZJV"],
                    "listValueLabel": ["GIDA", "Temel Gıda", "Çorba"],
                    "badges": []
                },
                {
                    "attType": "TEXT",
                    "fieldName": "shortName",
                    "fieldNameLabel": "shortName",
                    "valueLabel": "Knorr Bulgurlu Analı Kızlı Çorbası 92 g",
                    "value": "Knorr Bulgurlu Analı Kızlı Çorbası 92 g"
                },
                {
                    "attType": "KEYWORD",
                    "fieldName": "brand",
                    "fieldNameLabel": "Markalar",
                    "valueLabel": "KNORR",
                    "value": "KNORR"
                },
                {
                    "attType": "LONG_TEXT",
                    "fieldName": "productDescription",
                    "fieldNameLabel": "productDescription",
                    "valueLabel": "Geleneksel lezzetleri sofrasından eksik etmeyenlere; Knorr’dan Bulgurlu Analı Kızlı Çorbası\r\r\n\r\r\nAnadolu’nun geleneksel Analı Kızlı tarifini bulgur taneleri ile zenginleştirdik, hem lezzetini hem besleyiciliğini katladık.\r\r\n\r\r\nİyi bir haberimiz var!\r\r\nSürdürülebilir domateslerle üretilen Knorr Bulgurlu Analı Kızlı Çorbası, protein ve lif kaynağı olan içeriğiyle Anadolu’nun eşsiz lezzetlerini sofranıza getirmeye devam ediyor. Güneşte olgunlaşan ve mevsiminde toplanan sebze, tahıl ve baharatları geleneksel yöntemlerle kurutarak hazırladığımız Knorr Bulgurlu Analı Kızlı Çorbası tam tadında, tam kıvamında…\r\r\n\r\r\nKnorr şeflerinin ustalıkla hazırladıkları lezzetli çorba çeşitlerini sofralarınızda tüm sevdiklerinizle afiyetle paylaşın.\r\r\n•\tMükemmel lezzetli ve besleyici çorbalarımızı yaratırken Knorr şefleri ve beslenme uzmanları ile çalışıyoruz.\r\r\n•\tTarhana gibi kuruttuğumuz çorbalarımızın tazeliğini, hava, ışık ve neme karşı koruma sağlayan 3 katlı paketlerimiz ile uzun süre koruyoruz.\r\r\n•\tBir pakette 4 kişilik çorba bulunuyor.",
                    "value": "Geleneksel lezzetleri sofrasından eksik etmeyenlere; Knorr’dan Bulgurlu Analı Kızlı Çorbası\r\r\n\r\r\nAnadolu’nun geleneksel Analı Kızlı tarifini bulgur taneleri ile zenginleştirdik, hem lezzetini hem besleyiciliğini katladık.\r\r\n\r\r\nİyi bir haberimiz var!\r\r\nSürdürülebilir domateslerle üretilen Knorr Bulgurlu Analı Kızlı Çorbası, protein ve lif kaynağı olan içeriğiyle Anadolu’nun eşsiz lezzetlerini sofranıza getirmeye devam ediyor. Güneşte olgunlaşan ve mevsiminde toplanan sebze, tahıl ve baharatları geleneksel yöntemlerle kurutarak hazırladığımız Knorr Bulgurlu Analı Kızlı Çorbası tam tadında, tam kıvamında…\r\r\n\r\r\nKnorr şeflerinin ustalıkla hazırladıkları lezzetli çorba çeşitlerini sofralarınızda tüm sevdiklerinizle afiyetle paylaşın.\r\r\n•\tMükemmel lezzetli ve besleyici çorbalarımızı yaratırken Knorr şefleri ve beslenme uzmanları ile çalışıyoruz.\r\r\n•\tTarhana gibi kuruttuğumuz çorbalarımızın tazeliğini, hava, ışık ve neme karşı koruma sağlayan 3 katlı paketlerimiz ile uzun süre koruyoruz.\r\r\n•\tBir pakette 4 kişilik çorba bulunuyor."
                },
                {
                    "attType": "LIST",
                    "fieldName": "productFeature",
                    "fieldNameLabel": "Ürün Özelliği",
                    "valueLabel": "",
                    "value": "",
                    "listValue": [],
                    "listValueLabel": [],
                    "badges": []
                },
                {
                    "attType": "LIST",
                    "fieldName": "tags",
                    "fieldNameLabel": "tags",
                    "valueLabel": "",
                    "value": "",
                    "listValue": [],
                    "listValueLabel": [],
                    "badges": []
                },
                {
                    "attType": "TEXT",
                    "fieldName": "longName",
                    "fieldNameLabel": "longName",
                    "valueLabel": "Knorr Bulgurlu Analı Kızlı Çorbası 92 g",
                    "value": "Knorr Bulgurlu Analı Kızlı Çorbası 92 g"
                }
            ],
            "priceTag": {
                "currency": "TRY",
                "merchantId": "default",
                "values": [],
                "price": 695,
                "priceLabel": "6.95 TL",
                "discountedPrice": 500,
                "discountedPriceLabel": "5.00 TL",
                "discountRate": 28,
                "discountRateLabel": "28"
            },
            "stockStatus": "HIGH",
            "itemType": "SINGLE"
        },
        {
            "id": "67707906",
            "variantGroupId": "67707906",
            "images": "https://core.rtbs.io/user/action/6ad47403c22043a795e973c7ec83dcc7/rbs.storage.get.GET_IMAGE?auth=&data=eyJpbWFnZUlkIjoiOTljMzE5Y2EtZmMzMy00NjJkLWEyZDMtYWNiYWM1ZGE0YjhjIiwid2lkdGgiOjQwMCwiaGVpZ2h0Ijo0MDAsImZpdCI6Im91dHNpZGUiLCJjb250ZW50VHlwZSI6ImltYWdlL3dlYnAiLCJxdWFsaXR5IjozMH0&platform=WEB&",
            "attributes": [
                {
                    "attType": "LIST",
                    "fieldName": "categories",
                    "fieldNameLabel": "Kategoriler",
                    "valueLabel": "",
                    "value": "",
                    "listValue": ["GIDA-OF7AC", "TEMELGIDA-4D592", "MAKARNA-71KRH"],
                    "listValueLabel": ["GIDA", "Temel Gıda", "Makarna"],
                    "badges": []
                },
                {
                    "attType": "TEXT",
                    "fieldName": "shortName",
                    "fieldNameLabel": "shortName",
                    "valueLabel": "Knorr 3 Peynirli Çabuk Makarna 67 Gr",
                    "value": "Knorr 3 Peynirli Çabuk Makarna 67 Gr"
                },
                {
                    "attType": "KEYWORD",
                    "fieldName": "brand",
                    "fieldNameLabel": "Markalar",
                    "valueLabel": "KNORR",
                    "value": "KNORR"
                },
                {
                    "attType": "LONG_TEXT",
                    "fieldName": "productDescription",
                    "fieldNameLabel": "productDescription",
                    "valueLabel": "Karnınız Aç Zamanınız Azsa, Knorr Çabuk Makarna 5 Dakikada Hazır! Birbirinden Lezziz Peynirlerle Hazırlanmış 3 Peynirli Makarna İçin İhtiyacın Olan Tek Şey Sıcak Su. Su Isıtıcısında Kaynattığın Suyu, Paket İçinde Gösterilen Alana Kadar Doldur, İyice Karıştır, Kapağını Kapat, 5 Dakika Bekle ve Makarnan Hazır! Afiyet Olsun ?",
                    "value": "Karnınız Aç Zamanınız Azsa, Knorr Çabuk Makarna 5 Dakikada Hazır! Birbirinden Lezziz Peynirlerle Hazırlanmış 3 Peynirli Makarna İçin İhtiyacın Olan Tek Şey Sıcak Su. Su Isıtıcısında Kaynattığın Suyu, Paket İçinde Gösterilen Alana Kadar Doldur, İyice Karıştır, Kapağını Kapat, 5 Dakika Bekle ve Makarnan Hazır! Afiyet Olsun ?"
                },
                {
                    "attType": "LIST",
                    "fieldName": "productFeature",
                    "fieldNameLabel": "Ürün Özelliği",
                    "valueLabel": "",
                    "value": "",
                    "listValue": [],
                    "listValueLabel": [],
                    "badges": []
                },
                {
                    "attType": "LIST",
                    "fieldName": "tags",
                    "fieldNameLabel": "tags",
                    "valueLabel": "",
                    "value": "",
                    "listValue": [],
                    "listValueLabel": [],
                    "badges": []
                },
                {
                    "attType": "TEXT",
                    "fieldName": "longName",
                    "fieldNameLabel": "longName",
                    "valueLabel": "Knorr 3 Peynirli Çabuk Makarna 67 Gr",
                    "value": "Knorr 3 Peynirli Çabuk Makarna 67 Gr"
                }
            ],
            "priceTag": {
                "currency": "TRY",
                "merchantId": "default",
                "values": [],
                "price": 695,
                "priceLabel": "6.95 TL",
                "discountedPrice": 500,
                "discountedPriceLabel": "5.00 TL",
                "discountRate": 28,
                "discountRateLabel": "28"
            },
            "stockStatus": "HIGH",
            "itemType": "SINGLE"
        },
        {
            "id": "70004590",
            "variantGroupId": "70004590",
            "images": "https://core.rtbs.io/user/action/6ad47403c22043a795e973c7ec83dcc7/rbs.storage.get.GET_IMAGE?auth=&data=eyJpbWFnZUlkIjoiMjQ4ZTk2YWYtNmUyOC00NDUxLTgxN2EtZDQ2NTQyMjQ4YjE0Iiwid2lkdGgiOjQwMCwiaGVpZ2h0Ijo0MDAsImZpdCI6Im91dHNpZGUiLCJjb250ZW50VHlwZSI6ImltYWdlL3dlYnAiLCJxdWFsaXR5IjozMH0&platform=WEB&",
            "attributes": [
                {
                    "attType": "LIST",
                    "fieldName": "categories",
                    "fieldNameLabel": "Kategoriler",
                    "valueLabel": "",
                    "value": "",
                    "listValue": ["GIDA-OF7AC", "TEMELGIDA-4D592", "HARCLARCESNILER-VA1Z3"],
                    "listValueLabel": ["GIDA", "Temel Gıda", "Harçlar & Çeşniler"],
                    "badges": []
                },
                {
                    "attType": "TEXT",
                    "fieldName": "shortName",
                    "fieldNameLabel": "shortName",
                    "valueLabel": "Knorr Çıtır Pane Harcı 90 g",
                    "value": "Knorr Çıtır Pane Harcı 90 g"
                },
                {
                    "attType": "KEYWORD",
                    "fieldName": "brand",
                    "fieldNameLabel": "Markalar",
                    "valueLabel": "KNORR",
                    "value": "KNORR"
                },
                {
                    "attType": "LONG_TEXT",
                    "fieldName": "productDescription",
                    "fieldNameLabel": "productDescription",
                    "valueLabel": "Dışı çıtır çıtır içi yumuşacık tavuklar pişirmek ister misiniz?\n\nO halde Knorr şefleri tarafından harmanlanan Knorr Çıtır Pane Harcı tam size göre. İçerisinde katkı maddesi bulundurmayan pane harcı mufağınıza lezzet, size zaman kazandıracak. Yalnızca tavuklara değil çeşitli yemeklere de lezzet katacak çıtır pane harcını tavuk baget haricinde et, balık ve sebzelerinize de çok yakışacak. Dengeli baharat karışımız ile elde ettiğimiz pane harcı, tavuklarınıza çıtırtı verir ve Türk Gıda Kodeksi'ne uygundur. Knorr Çıtır Pane Harcı kısıtlı zamanlarda, zor ve zaman alan yemek tariflerindense pratik yemekler ile menünüzü zenginleştirmenizi sağlar. Aniden gelen bir misafire lezzetli bir sofra hazırlamak isterseniz; Sadece 4 adet (500 gam) tavuk baget, 2 adet yumurta ve Knorr Çıtır Pane Harcı ile dışı çıtır çıtır içi yumuşacık tavuklar pişirebilirsiniz. Pane harcını Knorr şefleri özenle harmanlamıştır. Tuz ve baharat ilave etmenize gerek yoktur. Böylelikle pratik ev yemeklerinin olmazsa olmazı tavuğu farklı ve hızlı bir şekilde misafirlerinize sunabilir, menülerinizi kolay yemekler ve hızlı tariflerle süsleyebilirsiniz.\n\nKnorr Çıtır Pane Harcını, tavuk, dana, kuzu, dana, hindi, balık, deniz ürünleri, patates köftesi, sebzeler, krep, börek ve hamur işlerinde kullanabilirsiniz. Pane harcı, et üzerine de çıtır bir lezzet katar. Sıkıldığınız tarifleri eğlenceli hale getirir ve Knorr şefleri tarafından seçilen doğal lezzetlerle yemeklerinizi buluşturur.",
                    "value": "Dışı çıtır çıtır içi yumuşacık tavuklar pişirmek ister misiniz?\n\nO halde Knorr şefleri tarafından harmanlanan Knorr Çıtır Pane Harcı tam size göre. İçerisinde katkı maddesi bulundurmayan pane harcı mufağınıza lezzet, size zaman kazandıracak. Yalnızca tavuklara değil çeşitli yemeklere de lezzet katacak çıtır pane harcını tavuk baget haricinde et, balık ve sebzelerinize de çok yakışacak. Dengeli baharat karışımız ile elde ettiğimiz pane harcı, tavuklarınıza çıtırtı verir ve Türk Gıda Kodeksi'ne uygundur. Knorr Çıtır Pane Harcı kısıtlı zamanlarda, zor ve zaman alan yemek tariflerindense pratik yemekler ile menünüzü zenginleştirmenizi sağlar. Aniden gelen bir misafire lezzetli bir sofra hazırlamak isterseniz; Sadece 4 adet (500 gam) tavuk baget, 2 adet yumurta ve Knorr Çıtır Pane Harcı ile dışı çıtır çıtır içi yumuşacık tavuklar pişirebilirsiniz. Pane harcını Knorr şefleri özenle harmanlamıştır. Tuz ve baharat ilave etmenize gerek yoktur. Böylelikle pratik ev yemeklerinin olmazsa olmazı tavuğu farklı ve hızlı bir şekilde misafirlerinize sunabilir, menülerinizi kolay yemekler ve hızlı tariflerle süsleyebilirsiniz.\n\nKnorr Çıtır Pane Harcını, tavuk, dana, kuzu, dana, hindi, balık, deniz ürünleri, patates köftesi, sebzeler, krep, börek ve hamur işlerinde kullanabilirsiniz. Pane harcı, et üzerine de çıtır bir lezzet katar. Sıkıldığınız tarifleri eğlenceli hale getirir ve Knorr şefleri tarafından seçilen doğal lezzetlerle yemeklerinizi buluşturur."
                },
                {
                    "attType": "LIST",
                    "fieldName": "productFeature",
                    "fieldNameLabel": "Ürün Özelliği",
                    "valueLabel": "",
                    "value": "",
                    "listValue": [],
                    "listValueLabel": [],
                    "badges": []
                },
                {
                    "attType": "LIST",
                    "fieldName": "tags",
                    "fieldNameLabel": "tags",
                    "valueLabel": "",
                    "value": "",
                    "listValue": [],
                    "listValueLabel": [],
                    "badges": []
                },
                {
                    "attType": "TEXT",
                    "fieldName": "longName",
                    "fieldNameLabel": "longName",
                    "valueLabel": "Knorr Çıtır Pane Harcı 90 g",
                    "value": "Knorr Çıtır Pane Harcı 90 g"
                }
            ],
            "priceTag": {
                "currency": "TRY",
                "merchantId": "default",
                "values": [],
                "price": 645,
                "priceLabel": "6.45 TL",
                "discountedPrice": 500,
                "discountedPriceLabel": "5.00 TL",
                "discountRate": 22,
                "discountRateLabel": "22"
            },
            "stockStatus": "HIGH",
            "itemType": "SINGLE"
        },
        {
            "id": "67889738",
            "variantGroupId": "67889738",
            "images": "https://core.rtbs.io/user/action/6ad47403c22043a795e973c7ec83dcc7/rbs.storage.get.GET_IMAGE?auth=&data=eyJpbWFnZUlkIjoiYmQ2MTBlNWMtMTMwNS00ZjA0LWIwMTEtOTE1MDQxMmU5ZjY1Iiwid2lkdGgiOjQwMCwiaGVpZ2h0Ijo0MDAsImZpdCI6Im91dHNpZGUiLCJjb250ZW50VHlwZSI6ImltYWdlL3dlYnAiLCJxdWFsaXR5IjozMH0&platform=WEB&",
            "attributes": [
                {
                    "attType": "LIST",
                    "fieldName": "categories",
                    "fieldNameLabel": "Kategoriler",
                    "valueLabel": "",
                    "value": "",
                    "listValue": ["GIDA-OF7AC", "ATISTIRMALIK-N5RUF", "CIPS-P1OZG"],
                    "listValueLabel": ["GIDA", "Atıştırmalık", "Cips & Kraker"],
                    "badges": []
                },
                {
                    "attType": "TEXT",
                    "fieldName": "shortName",
                    "fieldNameLabel": "shortName",
                    "valueLabel": "Knorr Veggies Pancar Kıtırı 25 g",
                    "value": "Knorr Veggies Pancar Kıtırı 25 g"
                },
                {
                    "attType": "KEYWORD",
                    "fieldName": "brand",
                    "fieldNameLabel": "Markalar",
                    "valueLabel": "KNORR",
                    "value": "KNORR"
                },
                {
                    "attType": "LONG_TEXT",
                    "fieldName": "productDescription",
                    "fieldNameLabel": "productDescription",
                    "valueLabel": "Sürdürülebilir Tarım Destekçisi Knorr'dan Sağlıklı Atıştırmalığın Yeni Adresi, Knorr veggies Sebze Kıtırları! Karnın Açsa ve Sağlıklı Bir Atıştırmalık Arıyorsan Yeni Knorr veggies Tam Sana Göre! Glutensiz, Yağsız, Protein ve Potasyum Kaynağı Pancar Kıtırlarını Hemen Denemelisin!",
                    "value": "Sürdürülebilir Tarım Destekçisi Knorr'dan Sağlıklı Atıştırmalığın Yeni Adresi, Knorr veggies Sebze Kıtırları! Karnın Açsa ve Sağlıklı Bir Atıştırmalık Arıyorsan Yeni Knorr veggies Tam Sana Göre! Glutensiz, Yağsız, Protein ve Potasyum Kaynağı Pancar Kıtırlarını Hemen Denemelisin!"
                },
                {
                    "attType": "LIST",
                    "fieldName": "productFeature",
                    "fieldNameLabel": "Ürün Özelliği",
                    "valueLabel": "",
                    "value": "",
                    "listValue": [],
                    "listValueLabel": [],
                    "badges": []
                },
                {
                    "attType": "LIST",
                    "fieldName": "tags",
                    "fieldNameLabel": "tags",
                    "valueLabel": "",
                    "value": "",
                    "listValue": [],
                    "listValueLabel": [],
                    "badges": []
                },
                {
                    "attType": "TEXT",
                    "fieldName": "longName",
                    "fieldNameLabel": "longName",
                    "valueLabel": "Knorr Veggies Pancar Kıtırı 25 g",
                    "value": "Knorr Veggies Pancar Kıtırı 25 g"
                }
            ],
            "priceTag": {
                "currency": "TRY",
                "merchantId": "default",
                "values": [],
                "price": 895,
                "priceLabel": "8.95 TL",
                "discountedPrice": 500,
                "discountedPriceLabel": "5.00 TL",
                "discountRate": 44,
                "discountRateLabel": "44"
            },
            "stockStatus": "HIGH",
            "itemType": "SINGLE"
        },
        {
            "id": "20030941",
            "variantGroupId": "20030941",
            "images": "https://core.rtbs.io/user/action/6ad47403c22043a795e973c7ec83dcc7/rbs.storage.get.GET_IMAGE?auth=&data=eyJpbWFnZUlkIjoiMDY5YzQxYjAtMjZlMy00ODVhLTk3YmItYmJiMmRkOWFlZmVkIiwid2lkdGgiOjQwMCwiaGVpZ2h0Ijo0MDAsImZpdCI6Im91dHNpZGUiLCJjb250ZW50VHlwZSI6ImltYWdlL3dlYnAiLCJxdWFsaXR5IjozMH0&platform=WEB&",
            "attributes": [
                {
                    "attType": "LIST",
                    "fieldName": "categories",
                    "fieldNameLabel": "Kategoriler",
                    "valueLabel": "",
                    "value": "",
                    "listValue": ["GIDA-OF7AC", "TEMELGIDA-4D592", "SOSLAR-U48MD"],
                    "listValueLabel": ["GIDA", "Temel Gıda", "Soslar"],
                    "badges": []
                },
                {
                    "attType": "TEXT",
                    "fieldName": "shortName",
                    "fieldNameLabel": "shortName",
                    "valueLabel": "Knorr Fesleğenli Makarna Sosu 50 g",
                    "value": "Knorr Fesleğenli Makarna Sosu 50 g"
                },
                {
                    "attType": "KEYWORD",
                    "fieldName": "brand",
                    "fieldNameLabel": "Markalar",
                    "valueLabel": "KNORR",
                    "value": "KNORR"
                },
                {
                    "attType": "LONG_TEXT",
                    "fieldName": "productDescription",
                    "fieldNameLabel": "productDescription",
                    "valueLabel": "Knorr'dan İtalyan usulü tam tadında tam kıvamında Fesleğenli makarna sosu. Knorr Fesleğenli makarna sosu, fesleğenin müthiş lezzeti ve kokusuyla makarnalarınızın lezzetine lezzet katsın. Tuz ve baharat eklemenize gerek yoktur. Hazırlanmış sos, yarım paket (250 g) kuru makarna (500 g haşlanmış) için yeterlidir. Farklı bir lezzet için şeflerimiz Knorr Fesleğenli makarna sosuyla hazırlanan acılı sebzeli makarna öneriyor. Yaklaşık 4 kişiliktir.",
                    "value": "Knorr'dan İtalyan usulü tam tadında tam kıvamında Fesleğenli makarna sosu. Knorr Fesleğenli makarna sosu, fesleğenin müthiş lezzeti ve kokusuyla makarnalarınızın lezzetine lezzet katsın. Tuz ve baharat eklemenize gerek yoktur. Hazırlanmış sos, yarım paket (250 g) kuru makarna (500 g haşlanmış) için yeterlidir. Farklı bir lezzet için şeflerimiz Knorr Fesleğenli makarna sosuyla hazırlanan acılı sebzeli makarna öneriyor. Yaklaşık 4 kişiliktir."
                },
                {
                    "attType": "LIST",
                    "fieldName": "productFeature",
                    "fieldNameLabel": "Ürün Özelliği",
                    "valueLabel": "",
                    "value": "",
                    "listValue": [],
                    "listValueLabel": [],
                    "badges": []
                },
                {
                    "attType": "LIST",
                    "fieldName": "tags",
                    "fieldNameLabel": "tags",
                    "valueLabel": "",
                    "value": "",
                    "listValue": [],
                    "listValueLabel": [],
                    "badges": []
                },
                {
                    "attType": "TEXT",
                    "fieldName": "longName",
                    "fieldNameLabel": "longName",
                    "valueLabel": "Knorr Fesleğenli Makarna Sosu 50 g",
                    "value": "Knorr Fesleğenli Makarna Sosu 50 g"
                }
            ],
            "priceTag": {
                "currency": "TRY",
                "merchantId": "default",
                "values": [],
                "price": 695,
                "priceLabel": "6.95 TL",
                "discountedPrice": 500,
                "discountedPriceLabel": "5.00 TL",
                "discountRate": 28,
                "discountRateLabel": "28"
            },
            "stockStatus": "LOW",
            "itemType": "SINGLE"
        },
        {
            "id": "67277839",
            "variantGroupId": "67277839",
            "images": "https://core.rtbs.io/user/action/6ad47403c22043a795e973c7ec83dcc7/rbs.storage.get.GET_IMAGE?auth=&data=eyJpbWFnZUlkIjoiOTg4MGU3N2ItZDA3ZS00NTcxLTg4OTgtNjNjOGRiMTJlMDdiIiwid2lkdGgiOjQwMCwiaGVpZ2h0Ijo0MDAsImZpdCI6Im91dHNpZGUiLCJjb250ZW50VHlwZSI6ImltYWdlL3dlYnAiLCJxdWFsaXR5IjozMH0&platform=WEB&",
            "attributes": [
                {
                    "attType": "LIST",
                    "fieldName": "categories",
                    "fieldNameLabel": "Kategoriler",
                    "valueLabel": "",
                    "value": "",
                    "listValue": ["GIDA-OF7AC", "TEMELGIDA-4D592", "SOSLAR-U48MD"],
                    "listValueLabel": ["GIDA", "Temel Gıda", "Soslar"],
                    "badges": []
                },
                {
                    "attType": "TEXT",
                    "fieldName": "shortName",
                    "fieldNameLabel": "shortName",
                    "valueLabel": "Knorr Beşamel Sos 70 g",
                    "value": "Knorr Beşamel Sos 70 g"
                },
                {
                    "attType": "KEYWORD",
                    "fieldName": "brand",
                    "fieldNameLabel": "Markalar",
                    "valueLabel": "KNORR",
                    "value": "KNORR"
                },
                {
                    "attType": "LONG_TEXT",
                    "fieldName": "productDescription",
                    "fieldNameLabel": "productDescription",
                    "valueLabel": "Knorr şefleri tarafından özenle geliştirilen Knorr Beşamel Sos, ister fırında makarnada ister lazanyada tam tadında tam kıvamında.",
                    "value": "Knorr şefleri tarafından özenle geliştirilen Knorr Beşamel Sos, ister fırında makarnada ister lazanyada tam tadında tam kıvamında."
                },
                {
                    "attType": "LIST",
                    "fieldName": "productFeature",
                    "fieldNameLabel": "Ürün Özelliği",
                    "valueLabel": "",
                    "value": "",
                    "listValue": [],
                    "listValueLabel": [],
                    "badges": []
                },
                {
                    "attType": "LIST",
                    "fieldName": "tags",
                    "fieldNameLabel": "tags",
                    "valueLabel": "",
                    "value": "",
                    "listValue": [],
                    "listValueLabel": [],
                    "badges": []
                },
                {
                    "attType": "TEXT",
                    "fieldName": "longName",
                    "fieldNameLabel": "longName",
                    "valueLabel": "Knorr Beşamel Sos 70 g",
                    "value": "Knorr Beşamel Sos 70 g"
                }
            ],
            "priceTag": {
                "currency": "TRY",
                "merchantId": "default",
                "values": [],
                "price": 695,
                "priceLabel": "6.95 TL",
                "discountedPrice": 500,
                "discountedPriceLabel": "5.00 TL",
                "discountRate": 28,
                "discountRateLabel": "28"
            },
            "stockStatus": "HIGH",
            "itemType": "SINGLE"
        },
        {
            "id": "20023323",
            "variantGroupId": "20023323",
            "images": "https://core.rtbs.io/user/action/6ad47403c22043a795e973c7ec83dcc7/rbs.storage.get.GET_IMAGE?auth=&data=eyJpbWFnZUlkIjoiODNiNTNlNDAtZDIxZS00NjUzLWJhMTEtMGEzNmE0ZmM4NDU0Iiwid2lkdGgiOjQwMCwiaGVpZ2h0Ijo0MDAsImZpdCI6Im91dHNpZGUiLCJjb250ZW50VHlwZSI6ImltYWdlL3dlYnAiLCJxdWFsaXR5IjozMH0&platform=WEB&",
            "attributes": [
                {
                    "attType": "LIST",
                    "fieldName": "categories",
                    "fieldNameLabel": "Kategoriler",
                    "valueLabel": "",
                    "value": "",
                    "listValue": ["GUZELLIK-Z5BVT", "CILT-T2536", "CTEMIZLIK-6GL4I"],
                    "listValueLabel": ["GÜZELLİK & KİŞİSEL BAKIM", "Cilt", "Cilt Temizlik"],
                    "badges": []
                },
                {
                    "attType": "TEXT",
                    "fieldName": "shortName",
                    "fieldNameLabel": "shortName",
                    "valueLabel": "Dove Cream Bar Original 100 g Sabun",
                    "value": "Dove Cream Bar Original 100 g Sabun"
                },
                {
                    "attType": "KEYWORD",
                    "fieldName": "brand",
                    "fieldNameLabel": "Markalar",
                    "valueLabel": "DOVE",
                    "value": "DOVE"
                },
                {
                    "attType": "LONG_TEXT",
                    "fieldName": "productDescription",
                    "fieldNameLabel": "productDescription",
                    "valueLabel": "<p>Cildinize nemden gelen gerçek güzellik!</p><p>Ellerinizi ıslatın ve Dove Original Beauty Cream Bar'ı ellerinizin arasında nazikçe köpürtün. Bu köpükle vücudunuza masaj yapın ve ılık suyla yıkayın.</p><p>Cildinizin ipeksi bir yumuşaklığa ve pürüzsüzlüğe sahip olduğunu hissetmek gibisi yoktur.</p><p>Üstelik iyi bir el kremi veya vücut kremlerinin yanı sıra, doğru güzellik sabunuyla yapacağınız temizlik rutiniyle her gün bu hissi yaşayabilirsiniz.</p><p>Dove Original Beauty Cream Bar içeriğindeki nazik temizleyiciler ve klasik 1/4 nemlendirici krem ile kuru cilt bakımı yaparken, size daha yumuşak, daha pürüzsüz ve daha sağlıklı görünen bir cilt vadeder.</p>",
                    "value": "<p>Cildinize nemden gelen gerçek güzellik!</p><p>Ellerinizi ıslatın ve Dove Original Beauty Cream Bar'ı ellerinizin arasında nazikçe köpürtün. Bu köpükle vücudunuza masaj yapın ve ılık suyla yıkayın.</p><p>Cildinizin ipeksi bir yumuşaklığa ve pürüzsüzlüğe sahip olduğunu hissetmek gibisi yoktur.</p><p>Üstelik iyi bir el kremi veya vücut kremlerinin yanı sıra, doğru güzellik sabunuyla yapacağınız temizlik rutiniyle her gün bu hissi yaşayabilirsiniz.</p><p>Dove Original Beauty Cream Bar içeriğindeki nazik temizleyiciler ve klasik 1/4 nemlendirici krem ile kuru cilt bakımı yaparken, size daha yumuşak, daha pürüzsüz ve daha sağlıklı görünen bir cilt vadeder.</p>"
                },
                {
                    "attType": "LIST",
                    "fieldName": "productFeature",
                    "fieldNameLabel": "Ürün Özelliği",
                    "valueLabel": "",
                    "value": "",
                    "listValue": [],
                    "listValueLabel": [],
                    "badges": []
                },
                {
                    "attType": "LIST",
                    "fieldName": "tags",
                    "fieldNameLabel": "tags",
                    "valueLabel": "",
                    "value": "",
                    "listValue": [],
                    "listValueLabel": [],
                    "badges": []
                },
                {
                    "attType": "TEXT",
                    "fieldName": "longName",
                    "fieldNameLabel": "longName",
                    "valueLabel": "Dove Cream Bar Original 100 g Sabun",
                    "value": "Dove Cream Bar Original 100 g Sabun"
                }
            ],
            "priceTag": {
                "currency": "TRY",
                "merchantId": "default",
                "values": [],
                "price": 690,
                "priceLabel": "6.90 TL",
                "discountedPrice": 500,
                "discountedPriceLabel": "5.00 TL",
                "discountRate": 28,
                "discountRateLabel": "28"
            },
            "stockStatus": "HIGH",
            "itemType": "SINGLE"
        },
        {
            "id": "67307641",
            "variantGroupId": "67307641",
            "images": "https://core.rtbs.io/user/action/6ad47403c22043a795e973c7ec83dcc7/rbs.storage.get.GET_IMAGE?auth=&data=eyJpbWFnZUlkIjoiODhiOTYyZWUtM2FlZS00MDI4LTg1NTEtMjAxZTY2NTFiOTQwIiwid2lkdGgiOjQwMCwiaGVpZ2h0Ijo0MDAsImZpdCI6Im91dHNpZGUiLCJjb250ZW50VHlwZSI6ImltYWdlL3dlYnAiLCJxdWFsaXR5IjozMH0&platform=WEB&",
            "attributes": [
                {
                    "attType": "LIST",
                    "fieldName": "categories",
                    "fieldNameLabel": "Kategoriler",
                    "valueLabel": "",
                    "value": "",
                    "listValue": ["GIDA-OF7AC", "TEMELGIDA-4D592", "HARCLARCESNILER-VA1Z3"],
                    "listValueLabel": ["GIDA", "Temel Gıda", "Harçlar & Çeşniler"],
                    "badges": []
                },
                {
                    "attType": "TEXT",
                    "fieldName": "shortName",
                    "fieldNameLabel": "shortName",
                    "valueLabel": "Knorr Köfte Harcı 82 g",
                    "value": "Knorr Köfte Harcı 82 g"
                },
                {
                    "attType": "KEYWORD",
                    "fieldName": "brand",
                    "fieldNameLabel": "Markalar",
                    "valueLabel": "KNORR",
                    "value": "KNORR"
                },
                {
                    "attType": "LONG_TEXT",
                    "fieldName": "productDescription",
                    "fieldNameLabel": "productDescription",
                    "valueLabel": "Annenin köftelerini mi özledin?\r\n\r\nO halde Knorr şefleri tarafından harmanlanan Knorr Köfte Harcı tam sana göre. Knorr şefleri tarafından doğal maddelerin harmanlanmasıyla oluşturulan köfte harcı mufağınıza lezzet, size zaman kazandıracak. Üstelik annelerden ilham alınarak hazırlanan köfte harcı herkesi köftelerinize hayran bırakacak.\r\nBirçok bölgemizin köftesi kendine özgü ve meşhurdur. Ancak annelerin köfteleri her zaman unutulmazdır ve en iyisidir. Sizde Knorr Köfte Harcı ile zaman ve efordan tasarruf ederek pratik ve annenizin köftesi tadında köfteler hazırlayabilirsiniz. \r\n\r\nDengeli baharat karışımız ile elde ettiğimiz köfte harcı, hızlıca hayran bırakan köfteler hazırlamanızı sağlar ve doğal maddelerden elde edilmiştir.  Knorr Köfte Harcı kısıtlı zamanlarda, zor ve zaman alan yemek tariflerindense pratik ev yemeklerin en çok tercih edileni köfteler ile menünüzü zenginleştirmenizi sağlar. Aniden gelen bir misafire lezzetli bir sofra hazırlamak isterseniz; Sadece 500 gam köftelik kıyma, 1/2 su bardağı su, 1 yumurta ve köfte harcını kullanarak harika köfteler hazırlayabilirsiniz. Harcımız Knorr şefleri özenle harmanlamıştır. Ekmeği, soğanı içindedir ve tuz ve baharat ilave etmenize de gerek yoktur. Böylelikle pratik yemeklerin olmazsa olmazı köfteleri hızlı bir şekilde misafirlerinize sunabilir, menülerinizi kolay yemekler ve hızlı tariflerle süsleyebilirsiniz.",
                    "value": "Annenin köftelerini mi özledin?\r\n\r\nO halde Knorr şefleri tarafından harmanlanan Knorr Köfte Harcı tam sana göre. Knorr şefleri tarafından doğal maddelerin harmanlanmasıyla oluşturulan köfte harcı mufağınıza lezzet, size zaman kazandıracak. Üstelik annelerden ilham alınarak hazırlanan köfte harcı herkesi köftelerinize hayran bırakacak.\r\nBirçok bölgemizin köftesi kendine özgü ve meşhurdur. Ancak annelerin köfteleri her zaman unutulmazdır ve en iyisidir. Sizde Knorr Köfte Harcı ile zaman ve efordan tasarruf ederek pratik ve annenizin köftesi tadında köfteler hazırlayabilirsiniz. \r\n\r\nDengeli baharat karışımız ile elde ettiğimiz köfte harcı, hızlıca hayran bırakan köfteler hazırlamanızı sağlar ve doğal maddelerden elde edilmiştir.  Knorr Köfte Harcı kısıtlı zamanlarda, zor ve zaman alan yemek tariflerindense pratik ev yemeklerin en çok tercih edileni köfteler ile menünüzü zenginleştirmenizi sağlar. Aniden gelen bir misafire lezzetli bir sofra hazırlamak isterseniz; Sadece 500 gam köftelik kıyma, 1/2 su bardağı su, 1 yumurta ve köfte harcını kullanarak harika köfteler hazırlayabilirsiniz. Harcımız Knorr şefleri özenle harmanlamıştır. Ekmeği, soğanı içindedir ve tuz ve baharat ilave etmenize de gerek yoktur. Böylelikle pratik yemeklerin olmazsa olmazı köfteleri hızlı bir şekilde misafirlerinize sunabilir, menülerinizi kolay yemekler ve hızlı tariflerle süsleyebilirsiniz."
                },
                {
                    "attType": "LIST",
                    "fieldName": "productFeature",
                    "fieldNameLabel": "Ürün Özelliği",
                    "valueLabel": "",
                    "value": "",
                    "listValue": [],
                    "listValueLabel": [],
                    "badges": []
                },
                {
                    "attType": "LIST",
                    "fieldName": "tags",
                    "fieldNameLabel": "tags",
                    "valueLabel": "",
                    "value": "",
                    "listValue": [],
                    "listValueLabel": [],
                    "badges": []
                },
                {
                    "attType": "TEXT",
                    "fieldName": "longName",
                    "fieldNameLabel": "longName",
                    "valueLabel": "Knorr Köfte Harcı 82 g",
                    "value": "Knorr Köfte Harcı 82 g"
                }
            ],
            "priceTag": {
                "currency": "TRY",
                "merchantId": "default",
                "values": [],
                "price": 645,
                "priceLabel": "6.45 TL",
                "discountedPrice": 500,
                "discountedPriceLabel": "5.00 TL",
                "discountRate": 22,
                "discountRateLabel": "22"
            },
            "stockStatus": "HIGH",
            "itemType": "SINGLE"
        },
        {
            "id": "70003551",
            "variantGroupId": "70003551",
            "images": "https://core.rtbs.io/user/action/6ad47403c22043a795e973c7ec83dcc7/rbs.storage.get.GET_IMAGE?auth=&data=eyJpbWFnZUlkIjoiZGY4NDBjZTYtYTJjMC00MDM5LWJlMTgtNmIyMTFkM2M4MTUxIiwid2lkdGgiOjQwMCwiaGVpZ2h0Ijo0MDAsImZpdCI6Im91dHNpZGUiLCJjb250ZW50VHlwZSI6ImltYWdlL3dlYnAiLCJxdWFsaXR5IjozMH0&platform=WEB&",
            "attributes": [
                {
                    "attType": "LIST",
                    "fieldName": "categories",
                    "fieldNameLabel": "Kategoriler",
                    "valueLabel": "",
                    "value": "",
                    "listValue": ["GIDA-OF7AC", "TEMELGIDA-4D592", "BULYON-8FBTW"],
                    "listValueLabel": ["GIDA", "Temel Gıda", "Bulyon"],
                    "badges": []
                },
                {
                    "attType": "TEXT",
                    "fieldName": "shortName",
                    "fieldNameLabel": "shortName",
                    "valueLabel": "Knorr Et Bulyon 6 lt 12 Adet",
                    "value": "Knorr Et Bulyon 6 lt 12 Adet"
                },
                {
                    "attType": "KEYWORD",
                    "fieldName": "brand",
                    "fieldNameLabel": "Markalar",
                    "valueLabel": "KNORR",
                    "value": "KNORR"
                },
                {
                    "attType": "LONG_TEXT",
                    "fieldName": "productDescription",
                    "fieldNameLabel": "productDescription",
                    "valueLabel": "Knorr'un en özel yemeklerinize ve çorbalarınıza lezzet katacak Et Suyu Bulyon (6lt) ürününü yakından incelemek için tıklayın!",
                    "value": "Knorr'un en özel yemeklerinize ve çorbalarınıza lezzet katacak Et Suyu Bulyon (6lt) ürününü yakından incelemek için tıklayın!"
                },
                {
                    "attType": "LIST",
                    "fieldName": "productFeature",
                    "fieldNameLabel": "Ürün Özelliği",
                    "valueLabel": "",
                    "value": "",
                    "listValue": [],
                    "listValueLabel": [],
                    "badges": []
                },
                {
                    "attType": "LIST",
                    "fieldName": "tags",
                    "fieldNameLabel": "tags",
                    "valueLabel": "",
                    "value": "",
                    "listValue": [],
                    "listValueLabel": [],
                    "badges": []
                },
                {
                    "attType": "TEXT",
                    "fieldName": "longName",
                    "fieldNameLabel": "longName",
                    "valueLabel": "Knorr Et Bulyon 6 lt 12 Adet",
                    "value": "Knorr Et Bulyon 6 lt 12 Adet"
                }
            ],
            "priceTag": {
                "currency": "TRY",
                "merchantId": "default",
                "values": [],
                "price": 635,
                "priceLabel": "6.35 TL",
                "discountedPrice": 500,
                "discountedPriceLabel": "5.00 TL",
                "discountRate": 21,
                "discountRateLabel": "21"
            },
            "stockStatus": "HIGH",
            "itemType": "SINGLE"
        },
        {
            "id": "20023322",
            "variantGroupId": "20023322",
            "images": "https://core.rtbs.io/user/action/6ad47403c22043a795e973c7ec83dcc7/rbs.storage.get.GET_IMAGE?auth=&data=eyJpbWFnZUlkIjoiMWUwZTlhNTEtNTkyZS00MDIxLTk2MDAtMmI1YzVhODU2ZmE4Iiwid2lkdGgiOjQwMCwiaGVpZ2h0Ijo0MDAsImZpdCI6Im91dHNpZGUiLCJjb250ZW50VHlwZSI6ImltYWdlL3dlYnAiLCJxdWFsaXR5IjozMH0&platform=WEB&",
            "attributes": [
                {
                    "attType": "LIST",
                    "fieldName": "categories",
                    "fieldNameLabel": "Kategoriler",
                    "valueLabel": "",
                    "value": "",
                    "listValue": ["GUZELLIK-Z5BVT", "CILT-T2536", "CTEMIZLIK-6GL4I"],
                    "listValueLabel": ["GÜZELLİK & KİŞİSEL BAKIM", "Cilt", "Cilt Temizlik"],
                    "badges": []
                },
                {
                    "attType": "TEXT",
                    "fieldName": "shortName",
                    "fieldNameLabel": "shortName",
                    "valueLabel": "Dove Cream Bar Fresh Touch Sabun 100 g ",
                    "value": "Dove Cream Bar Fresh Touch Sabun 100 g "
                },
                {
                    "attType": "KEYWORD",
                    "fieldName": "brand",
                    "fieldNameLabel": "Markalar",
                    "valueLabel": "DOVE",
                    "value": "DOVE"
                },
                {
                    "attType": "LONG_TEXT",
                    "fieldName": "productDescription",
                    "fieldNameLabel": "productDescription",
                    "valueLabel": "<p>Salatalık ve yeşil çay ferahlığını yaşamaya hazır olun!</p><p>Dove Go Fresh Cream Bar içeriğindeki ¼ nemlendirici krem sayesinde bir yandan cildinizi nemlendirirken bir yandan size salatalık ve yeşil çay ferahlığını yaşatır.</p>",
                    "value": "<p>Salatalık ve yeşil çay ferahlığını yaşamaya hazır olun!</p><p>Dove Go Fresh Cream Bar içeriğindeki ¼ nemlendirici krem sayesinde bir yandan cildinizi nemlendirirken bir yandan size salatalık ve yeşil çay ferahlığını yaşatır.</p>"
                },
                {
                    "attType": "LIST",
                    "fieldName": "productFeature",
                    "fieldNameLabel": "Ürün Özelliği",
                    "valueLabel": "",
                    "value": "",
                    "listValue": [],
                    "listValueLabel": [],
                    "badges": []
                },
                {
                    "attType": "LIST",
                    "fieldName": "tags",
                    "fieldNameLabel": "tags",
                    "valueLabel": "",
                    "value": "",
                    "listValue": [],
                    "listValueLabel": [],
                    "badges": []
                },
                {
                    "attType": "TEXT",
                    "fieldName": "longName",
                    "fieldNameLabel": "longName",
                    "valueLabel": "Dove Cream Bar Fresh Touch Sabun 100 g ",
                    "value": "Dove Cream Bar Fresh Touch Sabun 100 g "
                }
            ],
            "priceTag": {
                "currency": "TRY",
                "merchantId": "default",
                "values": [],
                "price": 690,
                "priceLabel": "6.90 TL",
                "discountedPrice": 500,
                "discountedPriceLabel": "5.00 TL",
                "discountRate": 28,
                "discountRateLabel": "28"
            },
            "stockStatus": "HIGH",
            "itemType": "SINGLE"
        },
        {
            "id": "67922085",
            "variantGroupId": "67922085",
            "images": "https://core.rtbs.io/user/action/6ad47403c22043a795e973c7ec83dcc7/rbs.storage.get.GET_IMAGE?auth=&data=eyJpbWFnZUlkIjoiMzU4YzBkOTctYzQxMC00ZTY0LWI0NWYtNjg4MjdjMGNmM2EwIiwid2lkdGgiOjQwMCwiaGVpZ2h0Ijo0MDAsImZpdCI6Im91dHNpZGUiLCJjb250ZW50VHlwZSI6ImltYWdlL3dlYnAiLCJxdWFsaXR5IjozMH0&platform=WEB&",
            "attributes": [
                {
                    "attType": "LIST",
                    "fieldName": "categories",
                    "fieldNameLabel": "Kategoriler",
                    "valueLabel": "",
                    "value": "",
                    "listValue": ["GUZELLIK-Z5BVT", "CILT-T2536", "CTEMIZLIK-6GL4I"],
                    "listValueLabel": ["GÜZELLİK & KİŞİSEL BAKIM", "Cilt", "Cilt Temizlik"],
                    "badges": []
                },
                {
                    "attType": "TEXT",
                    "fieldName": "shortName",
                    "fieldNameLabel": "shortName",
                    "valueLabel": "Dove Cream Bar Beauty Pink Sabun 100 g",
                    "value": "Dove Cream Bar Beauty Pink Sabun 100 g"
                },
                {
                    "attType": "KEYWORD",
                    "fieldName": "brand",
                    "fieldNameLabel": "Markalar",
                    "valueLabel": "DOVE",
                    "value": "DOVE"
                },
                {
                    "attType": "LONG_TEXT",
                    "fieldName": "productDescription",
                    "fieldNameLabel": "productDescription",
                    "valueLabel": "<p>Cildinizde yumuşaklık hissinin keyfini çıkarmak için, Dove Pink Beauty Cream Bar'ı tercih edin.</p><p>¼ nemlendirici krem içeriğiyle, cildinizi sadece temizlemekle kalmaz, günün izlerini silerken bir yandan da cildinizi besler.</p>",
                    "value": "<p>Cildinizde yumuşaklık hissinin keyfini çıkarmak için, Dove Pink Beauty Cream Bar'ı tercih edin.</p><p>¼ nemlendirici krem içeriğiyle, cildinizi sadece temizlemekle kalmaz, günün izlerini silerken bir yandan da cildinizi besler.</p>"
                },
                {
                    "attType": "LIST",
                    "fieldName": "productFeature",
                    "fieldNameLabel": "Ürün Özelliği",
                    "valueLabel": "",
                    "value": "",
                    "listValue": [],
                    "listValueLabel": [],
                    "badges": []
                },
                {
                    "attType": "LIST",
                    "fieldName": "tags",
                    "fieldNameLabel": "tags",
                    "valueLabel": "",
                    "value": "",
                    "listValue": [],
                    "listValueLabel": [],
                    "badges": []
                },
                {
                    "attType": "TEXT",
                    "fieldName": "longName",
                    "fieldNameLabel": "longName",
                    "valueLabel": "Dove Cream Bar Beauty Pink Sabun 100 g",
                    "value": "Dove Cream Bar Beauty Pink Sabun 100 g"
                }
            ],
            "priceTag": {
                "currency": "TRY",
                "merchantId": "default",
                "values": [],
                "price": 690,
                "priceLabel": "6.90 TL",
                "discountedPrice": 500,
                "discountedPriceLabel": "5.00 TL",
                "discountRate": 28,
                "discountRateLabel": "28"
            },
            "stockStatus": "HIGH",
            "itemType": "SINGLE"
        },
        {
            "id": "2940900",
            "variantGroupId": "2940900",
            "images": "https://core.rtbs.io/user/action/6ad47403c22043a795e973c7ec83dcc7/rbs.storage.get.GET_IMAGE?auth=&data=eyJpbWFnZUlkIjoiZTgxYjdiMWYtNDBhMi00MjQ0LThmNGMtYjY0YzhhYjEwMDc2Iiwid2lkdGgiOjQwMCwiaGVpZ2h0Ijo0MDAsImZpdCI6Im91dHNpZGUiLCJjb250ZW50VHlwZSI6ImltYWdlL3dlYnAiLCJxdWFsaXR5IjozMH0&platform=WEB&",
            "attributes": [
                {
                    "attType": "LIST",
                    "fieldName": "categories",
                    "fieldNameLabel": "Kategoriler",
                    "valueLabel": "",
                    "value": "",
                    "listValue": ["GIDA-OF7AC", "ATISTIRMALIK-N5RUF", "CIPS-P1OZG"],
                    "listValueLabel": ["GIDA", "Atıştırmalık", "Cips & Kraker"],
                    "badges": []
                },
                {
                    "attType": "TEXT",
                    "fieldName": "shortName",
                    "fieldNameLabel": "shortName",
                    "valueLabel": "Eti Form Kepekli 5'li 225 g",
                    "value": "Eti Form Kepekli 5'li 225 g"
                },
                {
                    "attType": "KEYWORD",
                    "fieldName": "brand",
                    "fieldNameLabel": "Markalar",
                    "valueLabel": "ETI",
                    "value": "ETI"
                },
                {
                    "attType": "LONG_TEXT",
                    "fieldName": "productDescription",
                    "fieldNameLabel": "productDescription",
                    "valueLabel": "Açlığını sağlıklı ve keyifli biçimde gidermek isteyenlerin tercihi Eti Form Light kepekli bisküvi. Yağ oranı yüzde 36 azaltılmış olan Eti Form kepekli bisküvi hem ara öğünlerde hem kahvaltıda hem de anlık gelen acıkma hissiyatını giderme anlamında günün herhangi bir saatinde keyifle tüketilebiliyor.\n\nTek başına tüketmesi de son derece keyifli olan bu lezzet, peynir ve yeşilliklerle hazırlanarak da servis ediliyor. \n\nKullanım Önerileri\nDoğrudan güneş ışığına maruz bırakmayınız. Serin ve rutubetsiz yerde muhafaza ediniz.\n\nNet Miktar (g/ml)\n225\n\nMenşei\nTÜRKİYE\n\nİçindekiler\nBuğday Unu, Kepek %10,5, Tam Buğday Unu, Buğday Kırması, Bitkisel Yağ (Palm, Ayçiçek, Pamuk, Kanola), Buğday Gluteni, Kabartıcılar (Amonyum Hidrojen Karbonat, Sodyum Hidrojen Karbonat), Tuz, Aroma verici, Un İşlem Maddesi (Sodyum Metabisülfit).\n\nAlerjen Uyarısı\nGluten ve Sülfit içerir. Eser miktarda Kereviz, Susam, Süt ürünü, Yer Fıstığı ve Yumurta içerebilir.",
                    "value": "Açlığını sağlıklı ve keyifli biçimde gidermek isteyenlerin tercihi Eti Form Light kepekli bisküvi. Yağ oranı yüzde 36 azaltılmış olan Eti Form kepekli bisküvi hem ara öğünlerde hem kahvaltıda hem de anlık gelen acıkma hissiyatını giderme anlamında günün herhangi bir saatinde keyifle tüketilebiliyor.\n\nTek başına tüketmesi de son derece keyifli olan bu lezzet, peynir ve yeşilliklerle hazırlanarak da servis ediliyor. \n\nKullanım Önerileri\nDoğrudan güneş ışığına maruz bırakmayınız. Serin ve rutubetsiz yerde muhafaza ediniz.\n\nNet Miktar (g/ml)\n225\n\nMenşei\nTÜRKİYE\n\nİçindekiler\nBuğday Unu, Kepek %10,5, Tam Buğday Unu, Buğday Kırması, Bitkisel Yağ (Palm, Ayçiçek, Pamuk, Kanola), Buğday Gluteni, Kabartıcılar (Amonyum Hidrojen Karbonat, Sodyum Hidrojen Karbonat), Tuz, Aroma verici, Un İşlem Maddesi (Sodyum Metabisülfit).\n\nAlerjen Uyarısı\nGluten ve Sülfit içerir. Eser miktarda Kereviz, Susam, Süt ürünü, Yer Fıstığı ve Yumurta içerebilir."
                },
                {
                    "attType": "LIST",
                    "fieldName": "productFeature",
                    "fieldNameLabel": "Ürün Özelliği",
                    "valueLabel": "",
                    "value": "",
                    "listValue": [],
                    "listValueLabel": [],
                    "badges": []
                },
                {
                    "attType": "LIST",
                    "fieldName": "tags",
                    "fieldNameLabel": "tags",
                    "valueLabel": "",
                    "value": "",
                    "listValue": [],
                    "listValueLabel": [],
                    "badges": []
                },
                {
                    "attType": "TEXT",
                    "fieldName": "longName",
                    "fieldNameLabel": "longName",
                    "valueLabel": "Eti Form Kepekli 5'li 225 g",
                    "value": "Eti Form Kepekli 5'li 225 g"
                }
            ],
            "priceTag": {
                "currency": "TRY",
                "merchantId": "default",
                "values": [],
                "price": 600,
                "priceLabel": "6.00 TL",
                "discountedPrice": 510,
                "discountedPriceLabel": "5.10 TL",
                "discountRate": 15,
                "discountRateLabel": "15"
            },
            "stockStatus": "HIGH",
            "itemType": "SINGLE"
        },
        {
            "id": "1909367",
            "variantGroupId": "1909367",
            "images": "https://core.rtbs.io/user/action/6ad47403c22043a795e973c7ec83dcc7/rbs.storage.get.GET_IMAGE?auth=&data=eyJpbWFnZUlkIjoiZmU2MmE3YjUtODhjZi00NzI2LTlhODYtNWVhZWU5NDYyYWFhIiwid2lkdGgiOjQwMCwiaGVpZ2h0Ijo0MDAsImZpdCI6Im91dHNpZGUiLCJjb250ZW50VHlwZSI6ImltYWdlL3dlYnAiLCJxdWFsaXR5IjozMH0&platform=WEB&",
            "attributes": [
                {
                    "attType": "LIST",
                    "fieldName": "categories",
                    "fieldNameLabel": "Kategoriler",
                    "valueLabel": "",
                    "value": "",
                    "listValue": ["EVBAKIM-JT4GV", "MUTFAK-E5TKV"],
                    "listValueLabel": ["EV BAKIM", "Mutfak Ürünleri"],
                    "badges": []
                },
                {
                    "attType": "TEXT",
                    "fieldName": "shortName",
                    "fieldNameLabel": "shortName",
                    "valueLabel": "Parex Güçlü Çöp Torbası Orta Boy 55x60 15'li",
                    "value": "Parex Güçlü Çöp Torbası Orta Boy 55x60 15'li"
                },
                {
                    "attType": "KEYWORD",
                    "fieldName": "brand",
                    "fieldNameLabel": "Markalar",
                    "valueLabel": "PAREX",
                    "value": "PAREX"
                },
                {
                    "attType": "LONG_TEXT",
                    "fieldName": "productDescription",
                    "fieldNameLabel": "productDescription",
                    "valueLabel": "Tüm serisi %100 doğada çözünür Parex Çöp Torbaları ile daha temiz bir dünya sizin elinizde.\r\nParex Çöp Torbaları ekolojik dengeyi bozmaz.\r\nÇevrenin temiz tutulmasına yardımcı olur, kalitelidir.\r\nÇöplerin ağzı bağlı şekilde çöp torbasında biriktirildiğinden mikrop, sinek ve haşarat üremesini önler, çöpleri sızdırmaz ve sağlamdır.\r\nÇöp kutularını temizleme işlemine gerek kalmaz.\r\nOrta boy çöp torbası; evlerde orta boy çöp kovaları için idealdir.\r\nPaket içi 15 adet; ölçüleri: 55×60 cm",
                    "value": "Tüm serisi %100 doğada çözünür Parex Çöp Torbaları ile daha temiz bir dünya sizin elinizde.\r\nParex Çöp Torbaları ekolojik dengeyi bozmaz.\r\nÇevrenin temiz tutulmasına yardımcı olur, kalitelidir.\r\nÇöplerin ağzı bağlı şekilde çöp torbasında biriktirildiğinden mikrop, sinek ve haşarat üremesini önler, çöpleri sızdırmaz ve sağlamdır.\r\nÇöp kutularını temizleme işlemine gerek kalmaz.\r\nOrta boy çöp torbası; evlerde orta boy çöp kovaları için idealdir.\r\nPaket içi 15 adet; ölçüleri: 55×60 cm"
                },
                {
                    "attType": "LIST",
                    "fieldName": "productFeature",
                    "fieldNameLabel": "Ürün Özelliği",
                    "valueLabel": "",
                    "value": "",
                    "listValue": [],
                    "listValueLabel": [],
                    "badges": []
                },
                {
                    "attType": "LIST",
                    "fieldName": "tags",
                    "fieldNameLabel": "tags",
                    "valueLabel": "",
                    "value": "",
                    "listValue": [],
                    "listValueLabel": [],
                    "badges": []
                },
                {
                    "attType": "TEXT",
                    "fieldName": "longName",
                    "fieldNameLabel": "longName",
                    "valueLabel": "Parex Güçlü Çöp Torbası Orta Boy 55x60 15'li",
                    "value": "Parex Güçlü Çöp Torbası Orta Boy 55x60 15'li"
                }
            ],
            "priceTag": {
                "currency": "TRY",
                "merchantId": "default",
                "values": [],
                "price": 895,
                "priceLabel": "8.95 TL",
                "discountedPrice": 512,
                "discountedPriceLabel": "5.12 TL",
                "discountRate": 43,
                "discountRateLabel": "43"
            },
            "stockStatus": "HIGH",
            "itemType": "SINGLE"
        },
        {
            "id": "7317873X",
            "variantGroupId": "7317873X",
            "images": "https://core.rtbs.io/user/action/6ad47403c22043a795e973c7ec83dcc7/rbs.storage.get.GET_IMAGE?auth=&data=eyJpbWFnZUlkIjoiNTY1Nzc0NzMtN2M3ZS00ODhmLTkwYWItMDJhMmY4ZjZkNmQ2Iiwid2lkdGgiOjQwMCwiaGVpZ2h0Ijo0MDAsImZpdCI6Im91dHNpZGUiLCJjb250ZW50VHlwZSI6ImltYWdlL3dlYnAiLCJxdWFsaXR5IjozMH0&platform=WEB&",
            "attributes": [
                {
                    "attType": "LIST",
                    "fieldName": "categories",
                    "fieldNameLabel": "Kategoriler",
                    "valueLabel": "",
                    "value": "",
                    "listValue": ["GIDA-OF7AC", "DONDURMA-K123P", "TEKLI-G1R2T"],
                    "listValueLabel": ["GIDA", "Dondurma", "Tekli Dondurma"],
                    "badges": []
                },
                {
                    "attType": "TEXT",
                    "fieldName": "shortName",
                    "fieldNameLabel": "shortName",
                    "valueLabel": "Cornetto Disc Antep Fıstık ve Çikolatalı 140 ml",
                    "value": "Cornetto Disc Antep Fıstık ve Çikolatalı 140 ml"
                },
                {
                    "attType": "KEYWORD",
                    "fieldName": "brand",
                    "fieldNameLabel": "Markalar",
                    "valueLabel": "CORNETTO",
                    "value": "CORNETTO"
                },
                {
                    "attType": "LONG_TEXT",
                    "fieldName": "productDescription",
                    "fieldNameLabel": "productDescription",
                    "valueLabel": "Antep fıstık ve kakaolu Cornetto Disc ile aşka lezzet katın! Kendi aşktan hikayeni yaratmaya var mısın? Benzersiz tadının sırrı; fıstık parçaları ile bezenmiş kakaolu disc ve nefis Antep fıstık lezzetinde gizli. Efsanevi \"tatlı son\" ile aşk son ısırıkta! Aşkta her şeyin mümkün olduğunu unutmayın.",
                    "value": "Antep fıstık ve kakaolu Cornetto Disc ile aşka lezzet katın! Kendi aşktan hikayeni yaratmaya var mısın? Benzersiz tadının sırrı; fıstık parçaları ile bezenmiş kakaolu disc ve nefis Antep fıstık lezzetinde gizli. Efsanevi \"tatlı son\" ile aşk son ısırıkta! Aşkta her şeyin mümkün olduğunu unutmayın."
                },
                {
                    "attType": "LIST",
                    "fieldName": "productFeature",
                    "fieldNameLabel": "Ürün Özelliği",
                    "valueLabel": "",
                    "value": "",
                    "listValue": [],
                    "listValueLabel": [],
                    "badges": []
                },
                {
                    "attType": "LIST",
                    "fieldName": "tags",
                    "fieldNameLabel": "tags",
                    "valueLabel": "",
                    "value": "",
                    "listValue": [],
                    "listValueLabel": [],
                    "badges": []
                },
                {
                    "attType": "TEXT",
                    "fieldName": "longName",
                    "fieldNameLabel": "longName",
                    "valueLabel": "Cornetto Disc Antep Fıstık ve Çikolatalı 140 ml",
                    "value": "Cornetto Disc Antep Fıstık ve Çikolatalı 140 ml"
                }
            ],
            "priceTag": {
                "currency": "TRY",
                "merchantId": "default",
                "values": [],
                "price": 700,
                "priceLabel": "7.00 TL",
                "discountedPrice": 525,
                "discountedPriceLabel": "5.25 TL",
                "discountRate": 25,
                "discountRateLabel": "25"
            },
            "stockStatus": "HIGH",
            "itemType": "SINGLE"
        },
        {
            "id": "7036744X",
            "variantGroupId": "7036744X",
            "images": "https://core.rtbs.io/user/action/6ad47403c22043a795e973c7ec83dcc7/rbs.storage.get.GET_IMAGE?auth=&data=eyJpbWFnZUlkIjoiYWU5ZjFhMGItMjcyYy00ODljLWIyNjktNDNjZWViNmU3YzI1Iiwid2lkdGgiOjQwMCwiaGVpZ2h0Ijo0MDAsImZpdCI6Im91dHNpZGUiLCJjb250ZW50VHlwZSI6ImltYWdlL3dlYnAiLCJxdWFsaXR5IjozMH0&platform=WEB&",
            "attributes": [
                {
                    "attType": "LIST",
                    "fieldName": "categories",
                    "fieldNameLabel": "Kategoriler",
                    "valueLabel": "",
                    "value": "",
                    "listValue": ["GIDA-OF7AC", "DONDURMA-K123P", "TEKLI-G1R2T"],
                    "listValueLabel": ["GIDA", "Dondurma", "Tekli Dondurma"],
                    "badges": []
                },
                {
                    "attType": "TEXT",
                    "fieldName": "shortName",
                    "fieldNameLabel": "shortName",
                    "valueLabel": "Magnum Double Çikolata 95 ml",
                    "value": "Magnum Double Çikolata 95 ml"
                },
                {
                    "attType": "KEYWORD",
                    "fieldName": "brand",
                    "fieldNameLabel": "Markalar",
                    "valueLabel": "MAGNUM",
                    "value": "MAGNUM"
                },
                {
                    "attType": "LONG_TEXT",
                    "fieldName": "productDescription",
                    "fieldNameLabel": "productDescription",
                    "valueLabel": "Kıtır Magnum çikolatası ve iki kat kakao kaplamasının arasında yoğun çikolata sosu ve içinde enfes çikolatalı dondurma. Magnum Double Çikolata ile hazzı ikiye katla.",
                    "value": "Kıtır Magnum çikolatası ve iki kat kakao kaplamasının arasında yoğun çikolata sosu ve içinde enfes çikolatalı dondurma. Magnum Double Çikolata ile hazzı ikiye katla."
                },
                {
                    "attType": "LIST",
                    "fieldName": "productFeature",
                    "fieldNameLabel": "Ürün Özelliği",
                    "valueLabel": "",
                    "value": "",
                    "listValue": [],
                    "listValueLabel": [],
                    "badges": []
                },
                {
                    "attType": "LIST",
                    "fieldName": "tags",
                    "fieldNameLabel": "tags",
                    "valueLabel": "",
                    "value": "",
                    "listValue": [],
                    "listValueLabel": [],
                    "badges": []
                },
                {
                    "attType": "TEXT",
                    "fieldName": "longName",
                    "fieldNameLabel": "longName",
                    "valueLabel": "Magnum Double Çikolata 95 ml",
                    "value": "Magnum Double Çikolata 95 ml"
                }
            ],
            "priceTag": {
                "currency": "TRY",
                "merchantId": "default",
                "values": [],
                "price": 750,
                "priceLabel": "7.50 TL",
                "discountedPrice": 525,
                "discountedPriceLabel": "5.25 TL",
                "discountRate": 30,
                "discountRateLabel": "30"
            },
            "stockStatus": "HIGH",
            "itemType": "SINGLE"
        },
        {
            "id": "8186030X",
            "variantGroupId": "8186030X",
            "images": "https://core.rtbs.io/user/action/6ad47403c22043a795e973c7ec83dcc7/rbs.storage.get.GET_IMAGE?auth=&data=eyJpbWFnZUlkIjoiNjhmZTJjMWUtMjJiNy00MGFjLTk5OGItZGE3ODkzN2Q0MGE5Iiwid2lkdGgiOjQwMCwiaGVpZ2h0Ijo0MDAsImZpdCI6Im91dHNpZGUiLCJjb250ZW50VHlwZSI6ImltYWdlL3dlYnAiLCJxdWFsaXR5IjozMH0&platform=WEB&",
            "attributes": [
                {
                    "attType": "LIST",
                    "fieldName": "categories",
                    "fieldNameLabel": "Kategoriler",
                    "valueLabel": "",
                    "value": "",
                    "listValue": ["GIDA-OF7AC", "DONDURMA-K123P", "TEKLI-G1R2T"],
                    "listValueLabel": ["GIDA", "Dondurma", "Tekli Dondurma"],
                    "badges": []
                },
                {
                    "attType": "TEXT",
                    "fieldName": "shortName",
                    "fieldNameLabel": "shortName",
                    "valueLabel": "Magnum Cookie 95 ml",
                    "value": "Magnum Cookie 95 ml"
                },
                {
                    "attType": "KEYWORD",
                    "fieldName": "brand",
                    "fieldNameLabel": "Markalar",
                    "valueLabel": "MAGNUM",
                    "value": "MAGNUM"
                },
                {
                    "attType": "LONG_TEXT",
                    "fieldName": "productDescription",
                    "fieldNameLabel": "productDescription",
                    "valueLabel": "Magnum hazzının en eğlenceli hali Magnum Cookie'de! Kıtır kurabiye parçaları, %100 Magnum beyaz çikolatası, kakaolu kurabiye sosu ve enfes vanilya lezzetinin mükemmel uyumu.",
                    "value": "Magnum hazzının en eğlenceli hali Magnum Cookie'de! Kıtır kurabiye parçaları, %100 Magnum beyaz çikolatası, kakaolu kurabiye sosu ve enfes vanilya lezzetinin mükemmel uyumu."
                },
                {
                    "attType": "LIST",
                    "fieldName": "productFeature",
                    "fieldNameLabel": "Ürün Özelliği",
                    "valueLabel": "",
                    "value": "",
                    "listValue": [],
                    "listValueLabel": [],
                    "badges": []
                },
                {
                    "attType": "LIST",
                    "fieldName": "tags",
                    "fieldNameLabel": "tags",
                    "valueLabel": "",
                    "value": "",
                    "listValue": [],
                    "listValueLabel": [],
                    "badges": []
                },
                {
                    "attType": "TEXT",
                    "fieldName": "longName",
                    "fieldNameLabel": "longName",
                    "valueLabel": "Magnum Cookie 95 ml",
                    "value": "Magnum Cookie 95 ml"
                }
            ],
            "priceTag": {
                "currency": "TRY",
                "merchantId": "default",
                "values": [],
                "price": 750,
                "priceLabel": "7.50 TL",
                "discountedPrice": 525,
                "discountedPriceLabel": "5.25 TL",
                "discountRate": 30,
                "discountRateLabel": "30"
            },
            "stockStatus": "HIGH",
            "itemType": "SINGLE"
        },
        {
            "id": "8509898X",
            "variantGroupId": "8509898X",
            "images": "https://core.rtbs.io/user/action/6ad47403c22043a795e973c7ec83dcc7/rbs.storage.get.GET_IMAGE?auth=&data=eyJpbWFnZUlkIjoiODAwZDAwNTMtYjkxZS00MjExLTgzZTEtYzc5NzkxOWY1ZjIyIiwid2lkdGgiOjQwMCwiaGVpZ2h0Ijo0MDAsImZpdCI6Im91dHNpZGUiLCJjb250ZW50VHlwZSI6ImltYWdlL3dlYnAiLCJxdWFsaXR5IjozMH0&platform=WEB&",
            "attributes": [
                {
                    "attType": "LIST",
                    "fieldName": "categories",
                    "fieldNameLabel": "Kategoriler",
                    "valueLabel": "",
                    "value": "",
                    "listValue": ["GIDA-OF7AC", "DONDURMA-K123P", "TEKLI-G1R2T"],
                    "listValueLabel": ["GIDA", "Dondurma", "Tekli Dondurma"],
                    "badges": []
                },
                {
                    "attType": "TEXT",
                    "fieldName": "shortName",
                    "fieldNameLabel": "shortName",
                    "valueLabel": "Magnum Double Karamel Gold 90 ml ",
                    "value": "Magnum Double Karamel Gold 90 ml "
                },
                {
                    "attType": "KEYWORD",
                    "fieldName": "brand",
                    "fieldNameLabel": "Markalar",
                    "valueLabel": "MAGNUM",
                    "value": "MAGNUM"
                },
                {
                    "attType": "LONG_TEXT",
                    "fieldName": "productDescription",
                    "fieldNameLabel": "productDescription",
                    "valueLabel": "Magnum hazzının en zengin hali yeni Magnum Double Caramel Gold ile tanışın. Altın Magnum çikolatası, kıtır bisküviler ve dulce de leche sosuyla kaplı kadifemsi Magnum dondurmasının mükemmel uyumuyla her katta ve her ısırıkta zengin haz tecrübesi. ",
                    "value": "Magnum hazzının en zengin hali yeni Magnum Double Caramel Gold ile tanışın. Altın Magnum çikolatası, kıtır bisküviler ve dulce de leche sosuyla kaplı kadifemsi Magnum dondurmasının mükemmel uyumuyla her katta ve her ısırıkta zengin haz tecrübesi. "
                },
                {
                    "attType": "LIST",
                    "fieldName": "productFeature",
                    "fieldNameLabel": "Ürün Özelliği",
                    "valueLabel": "",
                    "value": "",
                    "listValue": [],
                    "listValueLabel": [],
                    "badges": []
                },
                {
                    "attType": "LIST",
                    "fieldName": "tags",
                    "fieldNameLabel": "tags",
                    "valueLabel": "",
                    "value": "",
                    "listValue": [],
                    "listValueLabel": [],
                    "badges": []
                },
                {
                    "attType": "TEXT",
                    "fieldName": "longName",
                    "fieldNameLabel": "longName",
                    "valueLabel": "Magnum Double Karamel Gold 90 ml ",
                    "value": "Magnum Double Karamel Gold 90 ml "
                }
            ],
            "priceTag": {
                "currency": "TRY",
                "merchantId": "default",
                "values": [],
                "price": 750,
                "priceLabel": "7.50 TL",
                "discountedPrice": 525,
                "discountedPriceLabel": "5.25 TL",
                "discountRate": 30,
                "discountRateLabel": "30"
            },
            "stockStatus": "HIGH",
            "itemType": "SINGLE"
        },
        {
            "id": "7451492X",
            "variantGroupId": "7451492X",
            "images": "https://core.rtbs.io/user/action/6ad47403c22043a795e973c7ec83dcc7/rbs.storage.get.GET_IMAGE?auth=&data=eyJpbWFnZUlkIjoiNjk4ODU4MWUtODU0ZS00MjA1LWIyYTktY2RlZmNjMDJiMGMyIiwid2lkdGgiOjQwMCwiaGVpZ2h0Ijo0MDAsImZpdCI6Im91dHNpZGUiLCJjb250ZW50VHlwZSI6ImltYWdlL3dlYnAiLCJxdWFsaXR5IjozMH0&platform=WEB&",
            "attributes": [
                {
                    "attType": "LIST",
                    "fieldName": "categories",
                    "fieldNameLabel": "Kategoriler",
                    "valueLabel": "",
                    "value": "",
                    "listValue": ["GIDA-OF7AC", "DONDURMA-K123P", "TEKLI-G1R2T"],
                    "listValueLabel": ["GIDA", "Dondurma", "Tekli Dondurma"],
                    "badges": []
                },
                {
                    "attType": "TEXT",
                    "fieldName": "shortName",
                    "fieldNameLabel": "shortName",
                    "valueLabel": "Magnum Beyaz 100 ml",
                    "value": "Magnum Beyaz 100 ml"
                },
                {
                    "attType": "KEYWORD",
                    "fieldName": "brand",
                    "fieldNameLabel": "Markalar",
                    "valueLabel": "MAGNUM",
                    "value": "MAGNUM"
                },
                {
                    "attType": "LONG_TEXT",
                    "fieldName": "productDescription",
                    "fieldNameLabel": "productDescription",
                    "valueLabel": "Çıtır beyaz çikolata ve badem parçacıklarıyla enfes vanilya lezzeti. Magnum Classic Beyaz Çikolatalı. Haz peşindeysen.",
                    "value": "Çıtır beyaz çikolata ve badem parçacıklarıyla enfes vanilya lezzeti. Magnum Classic Beyaz Çikolatalı. Haz peşindeysen."
                },
                {
                    "attType": "LIST",
                    "fieldName": "productFeature",
                    "fieldNameLabel": "Ürün Özelliği",
                    "valueLabel": "",
                    "value": "",
                    "listValue": [],
                    "listValueLabel": [],
                    "badges": []
                },
                {
                    "attType": "LIST",
                    "fieldName": "tags",
                    "fieldNameLabel": "tags",
                    "valueLabel": "",
                    "value": "",
                    "listValue": [],
                    "listValueLabel": [],
                    "badges": []
                },
                {
                    "attType": "TEXT",
                    "fieldName": "longName",
                    "fieldNameLabel": "longName",
                    "valueLabel": "Magnum Beyaz 100 ml",
                    "value": "Magnum Beyaz 100 ml"
                }
            ],
            "priceTag": {
                "currency": "TRY",
                "merchantId": "default",
                "values": [],
                "price": 750,
                "priceLabel": "7.50 TL",
                "discountedPrice": 525,
                "discountedPriceLabel": "5.25 TL",
                "discountRate": 30,
                "discountRateLabel": "30"
            },
            "stockStatus": "HIGH",
            "itemType": "SINGLE"
        },
        {
            "id": "8201435X",
            "variantGroupId": "8201435X",
            "images": "https://core.rtbs.io/user/action/6ad47403c22043a795e973c7ec83dcc7/rbs.storage.get.GET_IMAGE?auth=&data=eyJpbWFnZUlkIjoiNTljMzlkMDctODNkYS00MTAzLWFkNTEtMDYwZDFhMjQ5NjU5Iiwid2lkdGgiOjQwMCwiaGVpZ2h0Ijo0MDAsImZpdCI6Im91dHNpZGUiLCJjb250ZW50VHlwZSI6ImltYWdlL3dlYnAiLCJxdWFsaXR5IjozMH0&platform=WEB&",
            "attributes": [
                {
                    "attType": "LIST",
                    "fieldName": "categories",
                    "fieldNameLabel": "Kategoriler",
                    "valueLabel": "",
                    "value": "",
                    "listValue": ["GIDA-OF7AC", "DONDURMA-K123P", "TEKLI-G1R2T"],
                    "listValueLabel": ["GIDA", "Dondurma", "Tekli Dondurma"],
                    "badges": []
                },
                {
                    "attType": "TEXT",
                    "fieldName": "shortName",
                    "fieldNameLabel": "shortName",
                    "valueLabel": "Cornetto Disc Milka 135 ml",
                    "value": "Cornetto Disc Milka 135 ml"
                },
                {
                    "attType": "KEYWORD",
                    "fieldName": "brand",
                    "fieldNameLabel": "Markalar",
                    "valueLabel": "CORNETTO",
                    "value": "CORNETTO"
                },
                {
                    "attType": "LONG_TEXT",
                    "fieldName": "productDescription",
                    "fieldNameLabel": "productDescription",
                    "valueLabel": "Milka’nın enfes çikolatasıyla Cornetto’nun efsane tadı bir araya geldi! \nMilka parçacıklı disc, Milka çikolatalı sos, çilekli ve beyaz çikolatalı Cornetto dondurması şimdi tek külahta!",
                    "value": "Milka’nın enfes çikolatasıyla Cornetto’nun efsane tadı bir araya geldi! \nMilka parçacıklı disc, Milka çikolatalı sos, çilekli ve beyaz çikolatalı Cornetto dondurması şimdi tek külahta!"
                },
                {
                    "attType": "LIST",
                    "fieldName": "productFeature",
                    "fieldNameLabel": "Ürün Özelliği",
                    "valueLabel": "",
                    "value": "",
                    "listValue": [],
                    "listValueLabel": [],
                    "badges": []
                },
                {
                    "attType": "LIST",
                    "fieldName": "tags",
                    "fieldNameLabel": "tags",
                    "valueLabel": "",
                    "value": "",
                    "listValue": [],
                    "listValueLabel": [],
                    "badges": []
                },
                {
                    "attType": "TEXT",
                    "fieldName": "longName",
                    "fieldNameLabel": "longName",
                    "valueLabel": "Cornetto Disc Milka 135 ml",
                    "value": "Cornetto Disc Milka 135 ml"
                }
            ],
            "priceTag": {
                "currency": "TRY",
                "merchantId": "default",
                "values": [],
                "price": 700,
                "priceLabel": "7.00 TL",
                "discountedPrice": 525,
                "discountedPriceLabel": "5.25 TL",
                "discountRate": 25,
                "discountRateLabel": "25"
            },
            "stockStatus": "HIGH",
            "itemType": "SINGLE"
        },
        {
            "id": "7451496X",
            "variantGroupId": "7451496X",
            "images": "https://core.rtbs.io/user/action/6ad47403c22043a795e973c7ec83dcc7/rbs.storage.get.GET_IMAGE?auth=&data=eyJpbWFnZUlkIjoiM2Y0YzRmZjUtOThlMC00OWY3LTk5ZGQtYzEwMmY5ZGMzMzQ1Iiwid2lkdGgiOjQwMCwiaGVpZ2h0Ijo0MDAsImZpdCI6Im91dHNpZGUiLCJjb250ZW50VHlwZSI6ImltYWdlL3dlYnAiLCJxdWFsaXR5IjozMH0&platform=WEB&",
            "attributes": [
                {
                    "attType": "LIST",
                    "fieldName": "categories",
                    "fieldNameLabel": "Kategoriler",
                    "valueLabel": "",
                    "value": "",
                    "listValue": ["GIDA-OF7AC", "DONDURMA-K123P", "TEKLI-G1R2T"],
                    "listValueLabel": ["GIDA", "Dondurma", "Tekli Dondurma"],
                    "badges": []
                },
                {
                    "attType": "TEXT",
                    "fieldName": "shortName",
                    "fieldNameLabel": "shortName",
                    "valueLabel": "Magnum Klasik 100 ml",
                    "value": "Magnum Klasik 100 ml"
                },
                {
                    "attType": "KEYWORD",
                    "fieldName": "brand",
                    "fieldNameLabel": "Markalar",
                    "valueLabel": "MAGNUM",
                    "value": "MAGNUM"
                },
                {
                    "attType": "LONG_TEXT",
                    "fieldName": "productDescription",
                    "fieldNameLabel": "productDescription",
                    "valueLabel": "Magnum Classic, kıtır çikolatası ve enfes vanilyası ile size lezzetin kapılarını aralıyor. Kadifemsi vanilya lezzeti sunan çikolata kaplı vanilyalı ürün, gerçek Magnum hazzıyla tanışmanızı sağlıyor. ",
                    "value": "Magnum Classic, kıtır çikolatası ve enfes vanilyası ile size lezzetin kapılarını aralıyor. Kadifemsi vanilya lezzeti sunan çikolata kaplı vanilyalı ürün, gerçek Magnum hazzıyla tanışmanızı sağlıyor. "
                },
                {
                    "attType": "LIST",
                    "fieldName": "productFeature",
                    "fieldNameLabel": "Ürün Özelliği",
                    "valueLabel": "",
                    "value": "",
                    "listValue": [],
                    "listValueLabel": [],
                    "badges": []
                },
                {
                    "attType": "LIST",
                    "fieldName": "tags",
                    "fieldNameLabel": "tags",
                    "valueLabel": "",
                    "value": "",
                    "listValue": [],
                    "listValueLabel": [],
                    "badges": []
                },
                {
                    "attType": "TEXT",
                    "fieldName": "longName",
                    "fieldNameLabel": "longName",
                    "valueLabel": "Magnum Klasik 100 ml",
                    "value": "Magnum Klasik 100 ml"
                }
            ],
            "priceTag": {
                "currency": "TRY",
                "merchantId": "default",
                "values": [],
                "price": 750,
                "priceLabel": "7.50 TL",
                "discountedPrice": 525,
                "discountedPriceLabel": "5.25 TL",
                "discountRate": 30,
                "discountRateLabel": "30"
            },
            "stockStatus": "HIGH",
            "itemType": "SINGLE"
        },
        {
            "id": "7317875X",
            "variantGroupId": "7317875X",
            "images": "https://core.rtbs.io/user/action/6ad47403c22043a795e973c7ec83dcc7/rbs.storage.get.GET_IMAGE?auth=&data=eyJpbWFnZUlkIjoiM2YxZWY2YTItYTMwNC00MWRmLTlkYjUtMGQxY2I1ZjAxZjllIiwid2lkdGgiOjQwMCwiaGVpZ2h0Ijo0MDAsImZpdCI6Im91dHNpZGUiLCJjb250ZW50VHlwZSI6ImltYWdlL3dlYnAiLCJxdWFsaXR5IjozMH0&platform=WEB&",
            "attributes": [
                {
                    "attType": "LIST",
                    "fieldName": "categories",
                    "fieldNameLabel": "Kategoriler",
                    "valueLabel": "",
                    "value": "",
                    "listValue": ["GIDA-OF7AC", "DONDURMA-K123P", "TEKLI-G1R2T"],
                    "listValueLabel": ["GIDA", "Dondurma", "Tekli Dondurma"],
                    "badges": []
                },
                {
                    "attType": "TEXT",
                    "fieldName": "shortName",
                    "fieldNameLabel": "shortName",
                    "valueLabel": "Cornetto Disc Vanilya Karamel 140 ml",
                    "value": "Cornetto Disc Vanilya Karamel 140 ml"
                },
                {
                    "attType": "KEYWORD",
                    "fieldName": "brand",
                    "fieldNameLabel": "Markalar",
                    "valueLabel": "CORNETTO",
                    "value": "CORNETTO"
                },
                {
                    "attType": "LONG_TEXT",
                    "fieldName": "productDescription",
                    "fieldNameLabel": "productDescription",
                    "valueLabel": "Vanilya ve karamelin muhteşem birleşimi, Fındık parçaları, kakaolu disc, enfes vanilya lezzetli ve ortasındaki yoğun karamel sosuyla rüya gibi bir lezzet. Bu efsane aşkın tadını kaçırma!",
                    "value": "Vanilya ve karamelin muhteşem birleşimi, Fındık parçaları, kakaolu disc, enfes vanilya lezzetli ve ortasındaki yoğun karamel sosuyla rüya gibi bir lezzet. Bu efsane aşkın tadını kaçırma!"
                },
                {
                    "attType": "LIST",
                    "fieldName": "productFeature",
                    "fieldNameLabel": "Ürün Özelliği",
                    "valueLabel": "",
                    "value": "",
                    "listValue": [],
                    "listValueLabel": [],
                    "badges": []
                },
                {
                    "attType": "LIST",
                    "fieldName": "tags",
                    "fieldNameLabel": "tags",
                    "valueLabel": "",
                    "value": "",
                    "listValue": [],
                    "listValueLabel": [],
                    "badges": []
                },
                {
                    "attType": "TEXT",
                    "fieldName": "longName",
                    "fieldNameLabel": "longName",
                    "valueLabel": "Cornetto Disc Vanilya Karamel 140 ml",
                    "value": "Cornetto Disc Vanilya Karamel 140 ml"
                }
            ],
            "priceTag": {
                "currency": "TRY",
                "merchantId": "default",
                "values": [],
                "price": 700,
                "priceLabel": "7.00 TL",
                "discountedPrice": 525,
                "discountedPriceLabel": "5.25 TL",
                "discountRate": 25,
                "discountRateLabel": "25"
            },
            "stockStatus": "HIGH",
            "itemType": "SINGLE"
        },
        {
            "id": "7451494X",
            "variantGroupId": "7451494X",
            "images": "https://core.rtbs.io/user/action/6ad47403c22043a795e973c7ec83dcc7/rbs.storage.get.GET_IMAGE?auth=&data=eyJpbWFnZUlkIjoiZjdmYTkzM2YtYTlhMC00YWZlLWFlYmUtNDQ4ZDExNGU0ZjRlIiwid2lkdGgiOjQwMCwiaGVpZ2h0Ijo0MDAsImZpdCI6Im91dHNpZGUiLCJjb250ZW50VHlwZSI6ImltYWdlL3dlYnAiLCJxdWFsaXR5IjozMH0&platform=WEB&",
            "attributes": [
                {
                    "attType": "LIST",
                    "fieldName": "categories",
                    "fieldNameLabel": "Kategoriler",
                    "valueLabel": "",
                    "value": "",
                    "listValue": ["GIDA-OF7AC", "DONDURMA-K123P", "TEKLI-G1R2T"],
                    "listValueLabel": ["GIDA", "Dondurma", "Tekli Dondurma"],
                    "badges": []
                },
                {
                    "attType": "TEXT",
                    "fieldName": "shortName",
                    "fieldNameLabel": "shortName",
                    "valueLabel": "Magnum Badem 100 ml",
                    "value": "Magnum Badem 100 ml"
                },
                {
                    "attType": "KEYWORD",
                    "fieldName": "brand",
                    "fieldNameLabel": "Markalar",
                    "valueLabel": "MAGNUM",
                    "value": "MAGNUM"
                },
                {
                    "attType": "LONG_TEXT",
                    "fieldName": "productDescription",
                    "fieldNameLabel": "productDescription",
                    "valueLabel": "Sütlü kıtır Magnum çikolatası ve badem parçaları ile kaplı, kadifemsi vanilya lezzeti. Magnum Classic Bademli. Haz peşindeysen.",
                    "value": "Sütlü kıtır Magnum çikolatası ve badem parçaları ile kaplı, kadifemsi vanilya lezzeti. Magnum Classic Bademli. Haz peşindeysen."
                },
                {
                    "attType": "LIST",
                    "fieldName": "productFeature",
                    "fieldNameLabel": "Ürün Özelliği",
                    "valueLabel": "",
                    "value": "",
                    "listValue": [],
                    "listValueLabel": [],
                    "badges": []
                },
                {
                    "attType": "LIST",
                    "fieldName": "tags",
                    "fieldNameLabel": "tags",
                    "valueLabel": "",
                    "value": "",
                    "listValue": [],
                    "listValueLabel": [],
                    "badges": []
                },
                {
                    "attType": "TEXT",
                    "fieldName": "longName",
                    "fieldNameLabel": "longName",
                    "valueLabel": "Magnum Badem 100 ml",
                    "value": "Magnum Badem 100 ml"
                }
            ],
            "priceTag": {
                "currency": "TRY",
                "merchantId": "default",
                "values": [],
                "price": 750,
                "priceLabel": "7.50 TL",
                "discountedPrice": 525,
                "discountedPriceLabel": "5.25 TL",
                "discountRate": 30,
                "discountRateLabel": "30"
            },
            "stockStatus": "HIGH",
            "itemType": "SINGLE"
        },
        {
            "id": "7451498X",
            "variantGroupId": "7451498X",
            "images": "https://core.rtbs.io/user/action/6ad47403c22043a795e973c7ec83dcc7/rbs.storage.get.GET_IMAGE?auth=&data=eyJpbWFnZUlkIjoiNDkyYWE3ZDAtYzFlMy00MTY0LTk2NzQtOGRmNDQ1NThiOTZkIiwid2lkdGgiOjQwMCwiaGVpZ2h0Ijo0MDAsImZpdCI6Im91dHNpZGUiLCJjb250ZW50VHlwZSI6ImltYWdlL3dlYnAiLCJxdWFsaXR5IjozMH0&platform=WEB&",
            "attributes": [
                {
                    "attType": "LIST",
                    "fieldName": "categories",
                    "fieldNameLabel": "Kategoriler",
                    "valueLabel": "",
                    "value": "",
                    "listValue": ["GIDA-OF7AC", "DONDURMA-K123P", "TEKLI-G1R2T"],
                    "listValueLabel": ["GIDA", "Dondurma", "Tekli Dondurma"],
                    "badges": []
                },
                {
                    "attType": "TEXT",
                    "fieldName": "shortName",
                    "fieldNameLabel": "shortName",
                    "valueLabel": "Magnum Antep Fıstıklı 100 ml",
                    "value": "Magnum Antep Fıstıklı 100 ml"
                },
                {
                    "attType": "KEYWORD",
                    "fieldName": "brand",
                    "fieldNameLabel": "Markalar",
                    "valueLabel": "MAGNUM",
                    "value": "MAGNUM"
                },
                {
                    "attType": "LONG_TEXT",
                    "fieldName": "productDescription",
                    "fieldNameLabel": "productDescription",
                    "valueLabel": "Çifte kavrulmuş Antep Fıstığı parçacıkları ve Magnum çikolatası kaplı leziz Antep fıstıklı lezzet Magnum Classic Antep Fıstıklı. Haz Peşindeysen.",
                    "value": "Çifte kavrulmuş Antep Fıstığı parçacıkları ve Magnum çikolatası kaplı leziz Antep fıstıklı lezzet Magnum Classic Antep Fıstıklı. Haz Peşindeysen."
                },
                {
                    "attType": "LIST",
                    "fieldName": "productFeature",
                    "fieldNameLabel": "Ürün Özelliği",
                    "valueLabel": "",
                    "value": "",
                    "listValue": [],
                    "listValueLabel": [],
                    "badges": []
                },
                {
                    "attType": "LIST",
                    "fieldName": "tags",
                    "fieldNameLabel": "tags",
                    "valueLabel": "",
                    "value": "",
                    "listValue": [],
                    "listValueLabel": [],
                    "badges": []
                },
                {
                    "attType": "TEXT",
                    "fieldName": "longName",
                    "fieldNameLabel": "longName",
                    "valueLabel": "Magnum Antep Fıstıklı 100 ml",
                    "value": "Magnum Antep Fıstıklı 100 ml"
                }
            ],
            "priceTag": {
                "currency": "TRY",
                "merchantId": "default",
                "values": [],
                "price": 750,
                "priceLabel": "7.50 TL",
                "discountedPrice": 525,
                "discountedPriceLabel": "5.25 TL",
                "discountRate": 30,
                "discountRateLabel": "30"
            },
            "stockStatus": "HIGH",
            "itemType": "SINGLE"
        },
        {
            "id": "7036742X",
            "variantGroupId": "7036742X",
            "images": "https://core.rtbs.io/user/action/6ad47403c22043a795e973c7ec83dcc7/rbs.storage.get.GET_IMAGE?auth=&data=eyJpbWFnZUlkIjoiYWE1YjQ5ZDktYmU1ZS00YmEyLTliNmItNzc4YjY0OGYyOTM4Iiwid2lkdGgiOjQwMCwiaGVpZ2h0Ijo0MDAsImZpdCI6Im91dHNpZGUiLCJjb250ZW50VHlwZSI6ImltYWdlL3dlYnAiLCJxdWFsaXR5IjozMH0&platform=WEB&",
            "attributes": [
                {
                    "attType": "LIST",
                    "fieldName": "categories",
                    "fieldNameLabel": "Kategoriler",
                    "valueLabel": "",
                    "value": "",
                    "listValue": ["GIDA-OF7AC", "DONDURMA-K123P", "TEKLI-G1R2T"],
                    "listValueLabel": ["GIDA", "Dondurma", "Tekli Dondurma"],
                    "badges": []
                },
                {
                    "attType": "TEXT",
                    "fieldName": "shortName",
                    "fieldNameLabel": "shortName",
                    "valueLabel": "Magnum Double Karadut & Böğürtlen 95 ml",
                    "value": "Magnum Double Karadut & Böğürtlen 95 ml"
                },
                {
                    "attType": "KEYWORD",
                    "fieldName": "brand",
                    "fieldNameLabel": "Markalar",
                    "valueLabel": "MAGNUM",
                    "value": "MAGNUM"
                },
                {
                    "attType": "LONG_TEXT",
                    "fieldName": "productDescription",
                    "fieldNameLabel": "productDescription",
                    "valueLabel": "Kıtır Magnum çikolatası ve iki kat kakao kaplamasının arasında enfes karadut ile böğürtlen sosu ve içinde kadifemsi vanilya lezzeti… Magnum Double Karadut & Böğürtlenli. Meyve dolu bir hazza hazır mısın?",
                    "value": "Kıtır Magnum çikolatası ve iki kat kakao kaplamasının arasında enfes karadut ile böğürtlen sosu ve içinde kadifemsi vanilya lezzeti… Magnum Double Karadut & Böğürtlenli. Meyve dolu bir hazza hazır mısın?"
                },
                {
                    "attType": "LIST",
                    "fieldName": "productFeature",
                    "fieldNameLabel": "Ürün Özelliği",
                    "valueLabel": "",
                    "value": "",
                    "listValue": [],
                    "listValueLabel": [],
                    "badges": []
                },
                {
                    "attType": "LIST",
                    "fieldName": "tags",
                    "fieldNameLabel": "tags",
                    "valueLabel": "",
                    "value": "",
                    "listValue": [],
                    "listValueLabel": [],
                    "badges": []
                },
                {
                    "attType": "TEXT",
                    "fieldName": "longName",
                    "fieldNameLabel": "longName",
                    "valueLabel": "Magnum Double Karadut & Böğürtlen 95 ml",
                    "value": "Magnum Double Karadut & Böğürtlen 95 ml"
                }
            ],
            "priceTag": {
                "currency": "TRY",
                "merchantId": "default",
                "values": [],
                "price": 750,
                "priceLabel": "7.50 TL",
                "discountedPrice": 525,
                "discountedPriceLabel": "5.25 TL",
                "discountRate": 30,
                "discountRateLabel": "30"
            },
            "stockStatus": "HIGH",
            "itemType": "SINGLE"
        },
        {
            "id": "7866941X",
            "variantGroupId": "7866941X",
            "images": "https://core.rtbs.io/user/action/6ad47403c22043a795e973c7ec83dcc7/rbs.storage.get.GET_IMAGE?auth=&data=eyJpbWFnZUlkIjoiYmZmNTgyYzQtYTk5Yi00Yzg5LTk1NTctOGMyMjM2MzcxZTkwIiwid2lkdGgiOjQwMCwiaGVpZ2h0Ijo0MDAsImZpdCI6Im91dHNpZGUiLCJjb250ZW50VHlwZSI6ImltYWdlL3dlYnAiLCJxdWFsaXR5IjozMH0&platform=WEB&",
            "attributes": [
                {
                    "attType": "LIST",
                    "fieldName": "categories",
                    "fieldNameLabel": "Kategoriler",
                    "valueLabel": "",
                    "value": "",
                    "listValue": ["GIDA-OF7AC", "DONDURMA-K123P", "TEKLI-G1R2T"],
                    "listValueLabel": ["GIDA", "Dondurma", "Tekli Dondurma"],
                    "badges": []
                },
                {
                    "attType": "TEXT",
                    "fieldName": "shortName",
                    "fieldNameLabel": "shortName",
                    "valueLabel": "Cornetto Disc Oreo 140 ml",
                    "value": "Cornetto Disc Oreo 140 ml"
                },
                {
                    "attType": "KEYWORD",
                    "fieldName": "brand",
                    "fieldNameLabel": "Markalar",
                    "valueLabel": "CORNETTO",
                    "value": "CORNETTO"
                },
                {
                    "attType": "LONG_TEXT",
                    "fieldName": "productDescription",
                    "fieldNameLabel": "productDescription",
                    "valueLabel": "Karşı konulmaz ikili Cornetto ve OREO! İçindeki enfes Oreo parçacıkları ve çıtır çıtır kakaolu külah ile Cornetto Disc Oreo, damağında eşsiz bir şölene dönüşecek! Karşı konulmaz bu rüya ikili, efsanevi \"tatlı son\"la büyük bir aşka dönüşecek ve vazgeçilmezin olacak!",
                    "value": "Karşı konulmaz ikili Cornetto ve OREO! İçindeki enfes Oreo parçacıkları ve çıtır çıtır kakaolu külah ile Cornetto Disc Oreo, damağında eşsiz bir şölene dönüşecek! Karşı konulmaz bu rüya ikili, efsanevi \"tatlı son\"la büyük bir aşka dönüşecek ve vazgeçilmezin olacak!"
                },
                {
                    "attType": "LIST",
                    "fieldName": "productFeature",
                    "fieldNameLabel": "Ürün Özelliği",
                    "valueLabel": "",
                    "value": "",
                    "listValue": [],
                    "listValueLabel": [],
                    "badges": []
                },
                {
                    "attType": "LIST",
                    "fieldName": "tags",
                    "fieldNameLabel": "tags",
                    "valueLabel": "",
                    "value": "",
                    "listValue": [],
                    "listValueLabel": [],
                    "badges": []
                },
                {
                    "attType": "TEXT",
                    "fieldName": "longName",
                    "fieldNameLabel": "longName",
                    "valueLabel": "Cornetto Disc Oreo 140 ml",
                    "value": "Cornetto Disc Oreo 140 ml"
                }
            ],
            "priceTag": {
                "currency": "TRY",
                "merchantId": "default",
                "values": [],
                "price": 700,
                "priceLabel": "7.00 TL",
                "discountedPrice": 525,
                "discountedPriceLabel": "5.25 TL",
                "discountRate": 25,
                "discountRateLabel": "25"
            },
            "stockStatus": "HIGH",
            "itemType": "SINGLE"
        },
        {
            "id": "68716705X",
            "variantGroupId": "68716705X",
            "images": "https://core.rtbs.io/user/action/6ad47403c22043a795e973c7ec83dcc7/rbs.storage.get.GET_IMAGE?auth=&data=eyJpbWFnZUlkIjoiOTA1MzdkNDctYTVkNy00NTU0LWE3NzAtMmUxOTMwZDcyYTBhIiwid2lkdGgiOjQwMCwiaGVpZ2h0Ijo0MDAsImZpdCI6Im91dHNpZGUiLCJjb250ZW50VHlwZSI6ImltYWdlL3dlYnAiLCJxdWFsaXR5IjozMH0&platform=WEB&",
            "attributes": [
                {
                    "attType": "LIST",
                    "fieldName": "categories",
                    "fieldNameLabel": "Kategoriler",
                    "valueLabel": "",
                    "value": "",
                    "listValue": ["GIDA-OF7AC", "DONDURMA-K123P", "TEKLI-G1R2T"],
                    "listValueLabel": ["GIDA", "Dondurma", "Tekli Dondurma"],
                    "badges": []
                },
                {
                    "attType": "TEXT",
                    "fieldName": "shortName",
                    "fieldNameLabel": "shortName",
                    "valueLabel": "Magnum Double Karamel Gold La Casa De Papel 95 ml",
                    "value": "Magnum Double Karamel Gold La Casa De Papel 95 ml"
                },
                {
                    "attType": "KEYWORD",
                    "fieldName": "brand",
                    "fieldNameLabel": "Markalar",
                    "valueLabel": "MAGNUM",
                    "value": "MAGNUM"
                },
                {
                    "attType": "LONG_TEXT",
                    "fieldName": "productDescription",
                    "fieldNameLabel": "productDescription",
                    "valueLabel": "<p>Magnum hazzının en zengin hali yeni Magnum Double Caramel Gold şimdi La Casa De Papel limitli seri ile satışta! Altın magnum çikolatası, kıtır bisküviler ve dulce de leche sosuyla kaplı kadifemsi Magnum dondurmasının mükemmel uyumuyla her katta ve her ısırıkta zengin haz tecrübesi!&nbsp;</p>",
                    "value": "<p>Magnum hazzının en zengin hali yeni Magnum Double Caramel Gold şimdi La Casa De Papel limitli seri ile satışta! Altın magnum çikolatası, kıtır bisküviler ve dulce de leche sosuyla kaplı kadifemsi Magnum dondurmasının mükemmel uyumuyla her katta ve her ısırıkta zengin haz tecrübesi!&nbsp;</p>"
                },
                {
                    "attType": "LIST",
                    "fieldName": "productFeature",
                    "fieldNameLabel": "Ürün Özelliği",
                    "valueLabel": "",
                    "value": "",
                    "listValue": [],
                    "listValueLabel": [],
                    "badges": []
                },
                {
                    "attType": "LIST",
                    "fieldName": "tags",
                    "fieldNameLabel": "tags",
                    "valueLabel": "",
                    "value": "",
                    "listValue": [],
                    "listValueLabel": [],
                    "badges": []
                },
                {
                    "attType": "TEXT",
                    "fieldName": "longName",
                    "fieldNameLabel": "longName",
                    "valueLabel": "Magnum Double Karamel Gold La Casa De Papel 95 ml",
                    "value": "Magnum Double Karamel Gold La Casa De Papel 95 ml"
                }
            ],
            "priceTag": {
                "currency": "TRY",
                "merchantId": "default",
                "values": [],
                "price": 750,
                "priceLabel": "7.50 TL",
                "discountedPrice": 525,
                "discountedPriceLabel": "5.25 TL",
                "discountRate": 30,
                "discountRateLabel": "30"
            },
            "stockStatus": "HIGH",
            "itemType": "SINGLE"
        },
        {
            "id": "1909378",
            "variantGroupId": "1909378",
            "images": "https://core.rtbs.io/user/action/6ad47403c22043a795e973c7ec83dcc7/rbs.storage.get.GET_IMAGE?auth=&data=eyJpbWFnZUlkIjoiNTZhMzkzOTUtOGEyMy00ZTVmLTgzOWUtMTFmMTJhYWYyMTM0Iiwid2lkdGgiOjQwMCwiaGVpZ2h0Ijo0MDAsImZpdCI6Im91dHNpZGUiLCJjb250ZW50VHlwZSI6ImltYWdlL3dlYnAiLCJxdWFsaXR5IjozMH0&platform=WEB&",
            "attributes": [
                {
                    "attType": "LIST",
                    "fieldName": "categories",
                    "fieldNameLabel": "Kategoriler",
                    "valueLabel": "",
                    "value": "",
                    "listValue": ["EVBAKIM-JT4GV", "MUTFAK-E5TKV"],
                    "listValueLabel": ["EV BAKIM", "Mutfak Ürünleri"],
                    "badges": []
                },
                {
                    "attType": "TEXT",
                    "fieldName": "shortName",
                    "fieldNameLabel": "shortName",
                    "valueLabel": "Parex Buzdolabı Poşeti Büyük Boy 30x45 15'li",
                    "value": "Parex Buzdolabı Poşeti Büyük Boy 30x45 15'li"
                },
                {
                    "attType": "KEYWORD",
                    "fieldName": "brand",
                    "fieldNameLabel": "Markalar",
                    "valueLabel": "PAREX",
                    "value": "PAREX"
                },
                {
                    "attType": "LONG_TEXT",
                    "fieldName": "productDescription",
                    "fieldNameLabel": "productDescription",
                    "valueLabel": "Parex Buzdolabı Poşeti meyve, sebze, kuru gıda gibi yiyeceklerinizi dış etkenlerden korur, gıdaların bozulmasını ve kurumasını önleyerek ilk günkü tazeliğinde korur.\r\r\r\nDondurulacak gıdaların derin dondurucuda saklanması için idealdir.\r\r\r\nHer türlü gıda maddesini ağzını kapatarak buzdolabında saklayabilirsiniz.\r\r\r\n Gıdalarınızı buzdolabı poşeti ile birlikte fırına veya mikrodalga fırına koymayınız.\r\r\r\nPaket içi 15 adet; ölçüleri: 30×45 cm",
                    "value": "Parex Buzdolabı Poşeti meyve, sebze, kuru gıda gibi yiyeceklerinizi dış etkenlerden korur, gıdaların bozulmasını ve kurumasını önleyerek ilk günkü tazeliğinde korur.\r\r\r\nDondurulacak gıdaların derin dondurucuda saklanması için idealdir.\r\r\r\nHer türlü gıda maddesini ağzını kapatarak buzdolabında saklayabilirsiniz.\r\r\r\n Gıdalarınızı buzdolabı poşeti ile birlikte fırına veya mikrodalga fırına koymayınız.\r\r\r\nPaket içi 15 adet; ölçüleri: 30×45 cm"
                },
                {
                    "attType": "LIST",
                    "fieldName": "productFeature",
                    "fieldNameLabel": "Ürün Özelliği",
                    "valueLabel": "",
                    "value": "",
                    "listValue": [],
                    "listValueLabel": [],
                    "badges": []
                },
                {
                    "attType": "LIST",
                    "fieldName": "tags",
                    "fieldNameLabel": "tags",
                    "valueLabel": "",
                    "value": "",
                    "listValue": [],
                    "listValueLabel": [],
                    "badges": []
                },
                {
                    "attType": "TEXT",
                    "fieldName": "longName",
                    "fieldNameLabel": "longName",
                    "valueLabel": "Parex Buzdolabı Poşeti Büyük Boy 30x45 15'li",
                    "value": "Parex Buzdolabı Poşeti Büyük Boy 30x45 15'li"
                }
            ],
            "priceTag": {
                "currency": "TRY",
                "merchantId": "default",
                "values": [],
                "price": 1150,
                "priceLabel": "11.50 TL",
                "discountedPrice": 543,
                "discountedPriceLabel": "5.43 TL",
                "discountRate": 53,
                "discountRateLabel": "53"
            },
            "stockStatus": "HIGH",
            "itemType": "SINGLE"
        },
        {
            "id": "1909370",
            "variantGroupId": "1909370",
            "images": "https://core.rtbs.io/user/action/6ad47403c22043a795e973c7ec83dcc7/rbs.storage.get.GET_IMAGE?auth=&data=eyJpbWFnZUlkIjoiODhiNzdlNTMtMWQ0YS00ZTM3LTkwY2EtYzlhN2FkMTczOGZmIiwid2lkdGgiOjQwMCwiaGVpZ2h0Ijo0MDAsImZpdCI6Im91dHNpZGUiLCJjb250ZW50VHlwZSI6ImltYWdlL3dlYnAiLCJxdWFsaXR5IjozMH0&platform=WEB&",
            "attributes": [
                {
                    "attType": "LIST",
                    "fieldName": "categories",
                    "fieldNameLabel": "Kategoriler",
                    "valueLabel": "",
                    "value": "",
                    "listValue": ["EVBAKIM-JT4GV", "MUTFAK-E5TKV"],
                    "listValueLabel": ["EV BAKIM", "Mutfak Ürünleri"],
                    "badges": []
                },
                {
                    "attType": "TEXT",
                    "fieldName": "shortName",
                    "fieldNameLabel": "shortName",
                    "valueLabel": "Parex Buzdolabı Poşeti Orta Boy 24x38 20'li",
                    "value": "Parex Buzdolabı Poşeti Orta Boy 24x38 20'li"
                },
                {
                    "attType": "KEYWORD",
                    "fieldName": "brand",
                    "fieldNameLabel": "Markalar",
                    "valueLabel": "PAREX",
                    "value": "PAREX"
                },
                {
                    "attType": "LONG_TEXT",
                    "fieldName": "productDescription",
                    "fieldNameLabel": "productDescription",
                    "valueLabel": "Parex Buzdolabı Poşeti meyve, sebze, kuru gıda gibi yiyeceklerinizi dış etkenlerden korur, gıdaların bozulmasını ve kurumasını önleyerek ilk günkü tazeliğinde korur.\r\r\r\nDondurulacak gıdaların derin dondurucuda saklanması için idealdir.\r\r\r\nHer türlü gıda maddesini ağzını kapatarak buzdolabında saklayabilirsiniz.\r\r\r\nGıdalarınızı buzdolabı poşeti ile birlikte fırına veya mikrodalga fırına koymayınız.\r\r\r\nPaket içi 20 adet; ölçüleri: 24×38 cm",
                    "value": "Parex Buzdolabı Poşeti meyve, sebze, kuru gıda gibi yiyeceklerinizi dış etkenlerden korur, gıdaların bozulmasını ve kurumasını önleyerek ilk günkü tazeliğinde korur.\r\r\r\nDondurulacak gıdaların derin dondurucuda saklanması için idealdir.\r\r\r\nHer türlü gıda maddesini ağzını kapatarak buzdolabında saklayabilirsiniz.\r\r\r\nGıdalarınızı buzdolabı poşeti ile birlikte fırına veya mikrodalga fırına koymayınız.\r\r\r\nPaket içi 20 adet; ölçüleri: 24×38 cm"
                },
                {
                    "attType": "LIST",
                    "fieldName": "productFeature",
                    "fieldNameLabel": "Ürün Özelliği",
                    "valueLabel": "",
                    "value": "",
                    "listValue": [],
                    "listValueLabel": [],
                    "badges": []
                },
                {
                    "attType": "LIST",
                    "fieldName": "tags",
                    "fieldNameLabel": "tags",
                    "valueLabel": "",
                    "value": "",
                    "listValue": [],
                    "listValueLabel": [],
                    "badges": []
                },
                {
                    "attType": "TEXT",
                    "fieldName": "longName",
                    "fieldNameLabel": "longName",
                    "valueLabel": "Parex Buzdolabı Poşeti Orta Boy 24x38 20'li",
                    "value": "Parex Buzdolabı Poşeti Orta Boy 24x38 20'li"
                }
            ],
            "priceTag": {
                "currency": "TRY",
                "merchantId": "default",
                "values": [],
                "price": 1150,
                "priceLabel": "11.50 TL",
                "discountedPrice": 543,
                "discountedPriceLabel": "5.43 TL",
                "discountRate": 53,
                "discountRateLabel": "53"
            },
            "stockStatus": "HIGH",
            "itemType": "SINGLE"
        },
        {
            "id": "1909369",
            "variantGroupId": "1909369",
            "images": "https://core.rtbs.io/user/action/6ad47403c22043a795e973c7ec83dcc7/rbs.storage.get.GET_IMAGE?auth=&data=eyJpbWFnZUlkIjoiMWQwZjM1ZmYtNGFkNS00ZDYyLWE2ZmEtY2ExMjY0NzRmNWJlIiwid2lkdGgiOjQwMCwiaGVpZ2h0Ijo0MDAsImZpdCI6Im91dHNpZGUiLCJjb250ZW50VHlwZSI6ImltYWdlL3dlYnAiLCJxdWFsaXR5IjozMH0&platform=WEB&",
            "attributes": [
                {
                    "attType": "LIST",
                    "fieldName": "categories",
                    "fieldNameLabel": "Kategoriler",
                    "valueLabel": "",
                    "value": "",
                    "listValue": ["EVBAKIM-JT4GV", "MUTFAK-E5TKV"],
                    "listValueLabel": ["EV BAKIM", "Mutfak Ürünleri"],
                    "badges": []
                },
                {
                    "attType": "TEXT",
                    "fieldName": "shortName",
                    "fieldNameLabel": "shortName",
                    "valueLabel": "Parex Buzdolabı Poşeti Küçük Boy 20x30 40'lı",
                    "value": "Parex Buzdolabı Poşeti Küçük Boy 20x30 40'lı"
                },
                {
                    "attType": "KEYWORD",
                    "fieldName": "brand",
                    "fieldNameLabel": "Markalar",
                    "valueLabel": "PAREX",
                    "value": "PAREX"
                },
                {
                    "attType": "LONG_TEXT",
                    "fieldName": "productDescription",
                    "fieldNameLabel": "productDescription",
                    "valueLabel": "Parex Buzdolabı Poşeti meyve, sebze, kuru gıda gibi yiyeceklerinizi dış etkenlerden korur, gıdaların bozulmasını ve kurumasını önleyerek ilk günkü tazeliğinde korur.\r\nDondurulacak gıdaların derin dondurucuda saklanması için idealdir.\r\nHer türlü gıda maddesini ağzını kapatarak buzdolabında saklayabilirsiniz.\r\nGıdalarınızı buzdolabı poşeti ile birlikte fırına veya mikrodalga fırına koymayınız.\r\nPaket içi 40 adet; ölçüleri: 20×30 cm",
                    "value": "Parex Buzdolabı Poşeti meyve, sebze, kuru gıda gibi yiyeceklerinizi dış etkenlerden korur, gıdaların bozulmasını ve kurumasını önleyerek ilk günkü tazeliğinde korur.\r\nDondurulacak gıdaların derin dondurucuda saklanması için idealdir.\r\nHer türlü gıda maddesini ağzını kapatarak buzdolabında saklayabilirsiniz.\r\nGıdalarınızı buzdolabı poşeti ile birlikte fırına veya mikrodalga fırına koymayınız.\r\nPaket içi 40 adet; ölçüleri: 20×30 cm"
                },
                {
                    "attType": "LIST",
                    "fieldName": "productFeature",
                    "fieldNameLabel": "Ürün Özelliği",
                    "valueLabel": "",
                    "value": "",
                    "listValue": [],
                    "listValueLabel": [],
                    "badges": []
                },
                {
                    "attType": "LIST",
                    "fieldName": "tags",
                    "fieldNameLabel": "tags",
                    "valueLabel": "",
                    "value": "",
                    "listValue": [],
                    "listValueLabel": [],
                    "badges": []
                },
                {
                    "attType": "TEXT",
                    "fieldName": "longName",
                    "fieldNameLabel": "longName",
                    "valueLabel": "Parex Buzdolabı Poşeti Küçük Boy 20x30 40'lı",
                    "value": "Parex Buzdolabı Poşeti Küçük Boy 20x30 40'lı"
                }
            ],
            "priceTag": {
                "currency": "TRY",
                "merchantId": "default",
                "values": [],
                "price": 1150,
                "priceLabel": "11.50 TL",
                "discountedPrice": 543,
                "discountedPriceLabel": "5.43 TL",
                "discountRate": 53,
                "discountRateLabel": "53"
            },
            "stockStatus": "HIGH",
            "itemType": "SINGLE"
        },
        {
            "id": "9470259",
            "variantGroupId": "9470259",
            "images": "https://core.rtbs.io/user/action/6ad47403c22043a795e973c7ec83dcc7/rbs.storage.get.GET_IMAGE?auth=&data=eyJpbWFnZUlkIjoiYzkwZThkMGMtZTQzZC00OTBiLTk2NzYtNTVjNDg5MGY4NzFjIiwid2lkdGgiOjQwMCwiaGVpZ2h0Ijo0MDAsImZpdCI6Im91dHNpZGUiLCJjb250ZW50VHlwZSI6ImltYWdlL3dlYnAiLCJxdWFsaXR5IjozMH0&platform=WEB&",
            "attributes": [
                {
                    "attType": "LIST",
                    "fieldName": "categories",
                    "fieldNameLabel": "Kategoriler",
                    "valueLabel": "",
                    "value": "",
                    "listValue": ["GUZELLIK-Z5BVT", "CILT-T2536", "CTEMIZLIK-6GL4I"],
                    "listValueLabel": ["GÜZELLİK & KİŞİSEL BAKIM", "Cilt", "Cilt Temizlik"],
                    "badges": []
                },
                {
                    "attType": "TEXT",
                    "fieldName": "shortName",
                    "fieldNameLabel": "shortName",
                    "valueLabel": "Uni Care Kulak Çubuğu 100'lü     ",
                    "value": "Uni Care Kulak Çubuğu 100'lü     "
                },
                {
                    "attType": "KEYWORD",
                    "fieldName": "brand",
                    "fieldNameLabel": "Markalar",
                    "valueLabel": "UNI CARE",
                    "value": "UNI CARE"
                },
                {
                    "attType": "LONG_TEXT",
                    "fieldName": "productDescription",
                    "fieldNameLabel": "productDescription",
                    "valueLabel": "%100 Pamuk\r\r\nSentetik lif içermez\r\r\nEtkin temizlik sağlar.\r\r\nMakyaj uygulama ve çıkarma için idealdir",
                    "value": "%100 Pamuk\r\r\nSentetik lif içermez\r\r\nEtkin temizlik sağlar.\r\r\nMakyaj uygulama ve çıkarma için idealdir"
                },
                {
                    "attType": "LIST",
                    "fieldName": "productFeature",
                    "fieldNameLabel": "Ürün Özelliği",
                    "valueLabel": "",
                    "value": "",
                    "listValue": [],
                    "listValueLabel": [],
                    "badges": []
                },
                {
                    "attType": "LIST",
                    "fieldName": "tags",
                    "fieldNameLabel": "tags",
                    "valueLabel": "",
                    "value": "",
                    "listValue": [],
                    "listValueLabel": [],
                    "badges": []
                },
                {
                    "attType": "TEXT",
                    "fieldName": "longName",
                    "fieldNameLabel": "longName",
                    "valueLabel": "Uni Care Kulak Çubuğu 100'lü     ",
                    "value": "Uni Care Kulak Çubuğu 100'lü     "
                }
            ],
            "priceTag": {
                "currency": "TRY",
                "merchantId": "default",
                "values": [],
                "price": 675,
                "priceLabel": "6.75 TL",
                "discountedPrice": 545,
                "discountedPriceLabel": "5.45 TL",
                "discountRate": 19,
                "discountRateLabel": "19"
            },
            "stockStatus": "HIGH",
            "itemType": "SINGLE"
        },
        {
            "id": "68611768",
            "variantGroupId": "68611768",
            "images": "https://core.rtbs.io/user/action/6ad47403c22043a795e973c7ec83dcc7/rbs.storage.get.GET_IMAGE?auth=&data=eyJpbWFnZUlkIjoiYmE2OTgzYmUtZjgwZS00YTc3LTk1N2MtYmRmMWIzMGE4YjAwIiwid2lkdGgiOjQwMCwiaGVpZ2h0Ijo0MDAsImZpdCI6Im91dHNpZGUiLCJjb250ZW50VHlwZSI6ImltYWdlL3dlYnAiLCJxdWFsaXR5IjozMH0&platform=WEB&",
            "attributes": [
                {
                    "attType": "LIST",
                    "fieldName": "categories",
                    "fieldNameLabel": "Kategoriler",
                    "valueLabel": "",
                    "value": "",
                    "listValue": ["GIDA-OF7AC", "TEMELGIDA-4D592", "BAHARAT-4Y3ED"],
                    "listValueLabel": ["GIDA", "Temel Gıda", "Baharatlar"],
                    "badges": []
                },
                {
                    "attType": "TEXT",
                    "fieldName": "shortName",
                    "fieldNameLabel": "shortName",
                    "valueLabel": "Knorr Karabiber 60 g",
                    "value": "Knorr Karabiber 60 g"
                },
                {
                    "attType": "KEYWORD",
                    "fieldName": "brand",
                    "fieldNameLabel": "Markalar",
                    "valueLabel": "KNORR",
                    "value": "KNORR"
                },
                {
                    "attType": "LONG_TEXT",
                    "fieldName": "productDescription",
                    "fieldNameLabel": "productDescription",
                    "valueLabel": "Özenle toplanan, kurutulan ve öğütülen, el değmeden paketlenen Knorr baharatlar, lezzetini uzun süre koruyan özel paketi ve geri geri dönüştürülebilir ambajıyla şimdi Unishop'ta!",
                    "value": "Özenle toplanan, kurutulan ve öğütülen, el değmeden paketlenen Knorr baharatlar, lezzetini uzun süre koruyan özel paketi ve geri geri dönüştürülebilir ambajıyla şimdi Unishop'ta!"
                },
                {
                    "attType": "LIST",
                    "fieldName": "productFeature",
                    "fieldNameLabel": "Ürün Özelliği",
                    "valueLabel": "",
                    "value": "",
                    "listValue": [],
                    "listValueLabel": [],
                    "badges": []
                },
                {
                    "attType": "LIST",
                    "fieldName": "tags",
                    "fieldNameLabel": "tags",
                    "valueLabel": "",
                    "value": "",
                    "listValue": [],
                    "listValueLabel": [],
                    "badges": []
                },
                {
                    "attType": "TEXT",
                    "fieldName": "longName",
                    "fieldNameLabel": "longName",
                    "valueLabel": "Knorr Karabiber 60 g",
                    "value": "Knorr Karabiber 60 g"
                }
            ],
            "priceTag": {
                "currency": "TRY",
                "merchantId": "default",
                "values": [],
                "price": 895,
                "priceLabel": "8.95 TL",
                "discountedPrice": 550,
                "discountedPriceLabel": "5.50 TL",
                "discountRate": 39,
                "discountRateLabel": "39"
            },
            "stockStatus": "HIGH",
            "itemType": "SINGLE"
        },
        {
            "id": "3964600",
            "variantGroupId": "3964600",
            "images": "https://core.rtbs.io/user/action/6ad47403c22043a795e973c7ec83dcc7/rbs.storage.get.GET_IMAGE?auth=&data=eyJpbWFnZUlkIjoiMjRkZmJlZTctZWZkNC00YzI0LWJhMDAtYzk3NTE3OGU4MjE5Iiwid2lkdGgiOjQwMCwiaGVpZ2h0Ijo0MDAsImZpdCI6Im91dHNpZGUiLCJjb250ZW50VHlwZSI6ImltYWdlL3dlYnAiLCJxdWFsaXR5IjozMH0&platform=WEB&",
            "attributes": [
                {
                    "attType": "LIST",
                    "fieldName": "categories",
                    "fieldNameLabel": "Kategoriler",
                    "valueLabel": "",
                    "value": "",
                    "listValue": ["GIDA-OF7AC", "ATISTIRMALIK-N5RUF", "KEK-R0TJV"],
                    "listValueLabel": ["GIDA", "Atıştırmalık", "Kek"],
                    "badges": []
                },
                {
                    "attType": "TEXT",
                    "fieldName": "shortName",
                    "fieldNameLabel": "shortName",
                    "valueLabel": "Eti Popkek Mini Kakaolu 180 g",
                    "value": "Eti Popkek Mini Kakaolu 180 g"
                },
                {
                    "attType": "KEYWORD",
                    "fieldName": "brand",
                    "fieldNameLabel": "Markalar",
                    "valueLabel": "ETI",
                    "value": "ETI"
                },
                {
                    "attType": "LONG_TEXT",
                    "fieldName": "productDescription",
                    "fieldNameLabel": "productDescription",
                    "valueLabel": "Eti Popkek Mini Çikolata Soslu Kakao Kaplamalı Kek, klasikleşmiş Popkek lezzetini mini bir şekilde sunar. Isırdığınızda ortaya çıkan akışkan çikolata sosu, yumuşacık keki ve dışındaki enfes çikolata kaplamasıyla lezzetine hayır diyemeyeceğiniz Eti Popkek, leziz ve doyurucu bir atıştırmalık olarak vazgeçilmeziniz olur.\n\nKullanım Önerileri\nDoğrudan güneş ışığına maruz bırakmayınız. Serin ve rutubetsiz yerde muhafaza ediniz.\n\nNet Miktar (g/ml)\n180\n\nMenşei\nTÜRKİYE\n\nİçindekiler\nKek %69,4 [Buğday Unu (Gluten içerir), Şeker, Yumurta, Bitkisel Yağ (Palm, Ayçiçek, Pamuk, Kanola), Glukoz-Fruktoz Şurubu, Nem vericiler (Gliserol, Sorbitol), Emülgatörler (Yağ Asitlerinin Mono ve Digliseritleri, Yağ Asitlerinin Poligliserol Esterleri), Tuz, Kabartıcılar (Sodyum Asit Pirofosfat, Sodyum Hidrojen Karbonat), Koruyucu (Sorbik Asit), Aroma vericiler, Asitlik Düzenleyici (Sitrik Asit), Kıvam Arttırıcı (Ksantan Gam)], Kakaolu Kaplama %19,4 [Şeker, Hidrojenize Bitkisel Yağ (Palm, Ayçiçek, Pamuk, Kanola), Peynir Altı Suyu Tozu (Süt Ürünü), Süt Tozu, Kakao %5,2, Emülgatör (Ayçiçek Lesitini, Aroma verici], Çikolata Sosu %11,2 [Şeker, Glukoz-Fruktoz Şurubu, Bitkisel Yağ (Palm, Ayçiçek, Pamuk, Kanola), Peynir Altı Suyu Tozu (Süt Ürünü), Bitter Çikolata %4,2, Modifiye Nişasta, Kakoa, Fındık Püresi, Tuz, Emülgatör Yağ Asitlerinin Mono ve Digliseritleri, Yağ Asitlerinin Poligliserol Esterleri), Asitliği Düzenleyiciler (Sitrik Asit, Sodyum Hidrojen Karbonat), Koruyucu (Sorbik Asit).\n\nAlerjen Uyarısı\nBuğday Unu (Gluten içerir), Yumurta, Peynir Altı Suyu Tozu (Süt ürünü), Süt Tozu, Fındık Püresi içerir. Eser miktarda Soya Ürünü, Susam ve Yer Fıstığı içerebilir.\n\nSaklama Koşulları\nSerin ve Kuru ortamda muhafaza ediniz\n\nGıda İşletmecisi / Üretici / İthalatçı / Dağıtıcı\nETİ GIDA SAN.ve TİC.A.Ş.",
                    "value": "Eti Popkek Mini Çikolata Soslu Kakao Kaplamalı Kek, klasikleşmiş Popkek lezzetini mini bir şekilde sunar. Isırdığınızda ortaya çıkan akışkan çikolata sosu, yumuşacık keki ve dışındaki enfes çikolata kaplamasıyla lezzetine hayır diyemeyeceğiniz Eti Popkek, leziz ve doyurucu bir atıştırmalık olarak vazgeçilmeziniz olur.\n\nKullanım Önerileri\nDoğrudan güneş ışığına maruz bırakmayınız. Serin ve rutubetsiz yerde muhafaza ediniz.\n\nNet Miktar (g/ml)\n180\n\nMenşei\nTÜRKİYE\n\nİçindekiler\nKek %69,4 [Buğday Unu (Gluten içerir), Şeker, Yumurta, Bitkisel Yağ (Palm, Ayçiçek, Pamuk, Kanola), Glukoz-Fruktoz Şurubu, Nem vericiler (Gliserol, Sorbitol), Emülgatörler (Yağ Asitlerinin Mono ve Digliseritleri, Yağ Asitlerinin Poligliserol Esterleri), Tuz, Kabartıcılar (Sodyum Asit Pirofosfat, Sodyum Hidrojen Karbonat), Koruyucu (Sorbik Asit), Aroma vericiler, Asitlik Düzenleyici (Sitrik Asit), Kıvam Arttırıcı (Ksantan Gam)], Kakaolu Kaplama %19,4 [Şeker, Hidrojenize Bitkisel Yağ (Palm, Ayçiçek, Pamuk, Kanola), Peynir Altı Suyu Tozu (Süt Ürünü), Süt Tozu, Kakao %5,2, Emülgatör (Ayçiçek Lesitini, Aroma verici], Çikolata Sosu %11,2 [Şeker, Glukoz-Fruktoz Şurubu, Bitkisel Yağ (Palm, Ayçiçek, Pamuk, Kanola), Peynir Altı Suyu Tozu (Süt Ürünü), Bitter Çikolata %4,2, Modifiye Nişasta, Kakoa, Fındık Püresi, Tuz, Emülgatör Yağ Asitlerinin Mono ve Digliseritleri, Yağ Asitlerinin Poligliserol Esterleri), Asitliği Düzenleyiciler (Sitrik Asit, Sodyum Hidrojen Karbonat), Koruyucu (Sorbik Asit).\n\nAlerjen Uyarısı\nBuğday Unu (Gluten içerir), Yumurta, Peynir Altı Suyu Tozu (Süt ürünü), Süt Tozu, Fındık Püresi içerir. Eser miktarda Soya Ürünü, Susam ve Yer Fıstığı içerebilir.\n\nSaklama Koşulları\nSerin ve Kuru ortamda muhafaza ediniz\n\nGıda İşletmecisi / Üretici / İthalatçı / Dağıtıcı\nETİ GIDA SAN.ve TİC.A.Ş."
                },
                {
                    "attType": "LIST",
                    "fieldName": "productFeature",
                    "fieldNameLabel": "Ürün Özelliği",
                    "valueLabel": "",
                    "value": "",
                    "listValue": [],
                    "listValueLabel": [],
                    "badges": []
                },
                {
                    "attType": "LIST",
                    "fieldName": "tags",
                    "fieldNameLabel": "tags",
                    "valueLabel": "",
                    "value": "",
                    "listValue": [],
                    "listValueLabel": [],
                    "badges": []
                },
                {
                    "attType": "TEXT",
                    "fieldName": "longName",
                    "fieldNameLabel": "longName",
                    "valueLabel": "Eti Popkek Mini Kakaolu 180 g",
                    "value": "Eti Popkek Mini Kakaolu 180 g"
                }
            ],
            "priceTag": {
                "currency": "TRY",
                "merchantId": "default",
                "values": [],
                "price": 650,
                "priceLabel": "6.50 TL",
                "discountedPrice": 553,
                "discountedPriceLabel": "5.53 TL",
                "discountRate": 15,
                "discountRateLabel": "15"
            },
            "stockStatus": "HIGH",
            "itemType": "SINGLE"
        }
    ]

    )
    const [products, setPruducts] = useState([])
    const [totalPrice, setTotalPrice] = useState(0)


    useEffect(() => {
        const sepet = (JSON.parse(localStorage.getItem("sepetim")))
        console.log(sepet)
        const geciciÜrünler = []

        sepet.forEach(item => {
            const product = productList.find(x => x.id === item);
            geciciÜrünler.push(product)
        });
        console.log(geciciÜrünler)
        setPruducts(geciciÜrünler)


    }, []);

    const removeInBasket = (id) => {
        console.log(id)
        let basket = (JSON.parse(localStorage.getItem("sepetim")))
        const index = basket.findIndex(p => p === id)
        basket.splice(index, 1)
        localStorage.setItem("sepetim", JSON.stringify(basket))

        basket = (JSON.parse(localStorage.getItem("sepetim")))
        console.log(basket)
        const basketProducts = []
        basket.forEach(item => {
            const product = productList.find(x => x.id === item);
            basketProducts.push(product)
        });
        console.log(basketProducts)
        setPruducts(basketProducts)


    }

    const BasketNotifyRemove = () => {
        toast.success("Sepetten Kaldırıldı", {
            position: "top-center",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    }
    return (
        <div className="Basket ">

            <h3 className="basket-header">Sepete Eklenen Ürünler</h3>

            <p> Ürün Sayısı:{products.length}</p>

            <br /><br />
            <div className="ürün">
                <div className="urun">
                    {

                        products.map((product) => {
                            return (
                                
                                    <XCard
                                        image={product.images}
                                        price={product.priceTag.discountedPriceLabel}
                                        name={product.attributes.find(x => x.fieldName === "shortName").value}
                                        pricewithout={product.priceTag.priceLabel}
                                        discount={product.priceTag.discountRateLabel}
                                        removeInBasket={(id) => removeInBasket(id)}
                                        BasketNotifyRemove={BasketNotifyRemove}
                                        id={product.id}

                                    />
                                
                            )
                        })
                    }
                </div>

                <div className="sepet">
                    <div><h1>Sepet Toplamı</h1></div>
                    <div><p><big>Ana Toplam : ₺</big></p></div>
                    <div><p><big>Unishop Ayrıcalığı: <strike>-40.20₺</strike></big></p></div>
                    <div><p><big>Ara Toplam: 80.00₺</big></p></div>
                    <div><p><big>Teslimat Ücreti: 10.00₺</big></p></div>
                    <div><h2><big>Toplam : 90.40₺</big></h2></div> <br />
                    <div><button class="ui secondary button save">Siparişi Onayla</button></div>

                </div>
            </div>
            <br /><br /><br /><br />
            <Footer />

        </div>

    )
}
export default Basket;






