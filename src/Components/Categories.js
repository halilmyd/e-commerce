import React, { useState } from 'react'
import './Categories.css'


const Categories = () => {

    const [categories, setCategories] = useState([
        {
            "id": "EVBAKIM-JT4GV",
            "name": "EV BAKIM",
            "title": "EV BAKIM",
            "images": [{ "id": "28c8b9fd-7a91-413f-bbe2-135a225fb192" }],
            "itemCount": 230,
            "modelName": "rbs.pimcategory",
            "sortingOrder": 1,
            "subCategories": [
                {
                    "id": "DETERJAN-6NOA2",
                    "name": "Deterjan",
                    "title": "Deterjan",
                    "images": [],
                    "itemCount": 33,
                    "modelName": "rbs.pimcategory",
                    "sortingOrder": 1,
                    "subCategories": [
                        {
                            "id": "BULASIK-1CU9E",
                            "name": "Bulaşık Deterjanı",
                            "title": "Bulaşık Deterjanı",
                            "images": [],
                            "itemCount": 3,
                            "modelName": "rbs.pimcategory",
                            "sortingOrder": 1,
                            "subCategories": []
                        },
                        {
                            "id": "CAMASIRDETERJANI-7DNRA",
                            "name": "Çamaşır Deterjanı",
                            "title": "Çamaşır Deterjanı",
                            "images": [],
                            "itemCount": 30,
                            "modelName": "rbs.pimcategory",
                            "sortingOrder": 2,
                            "subCategories": []
                        }
                    ]
                },
                {
                    "id": "CAMASIRSUYU-W0BHX",
                    "name": "Çamaşır Suyu",
                    "title": "Çamaşır Suyu",
                    "images": [],
                    "itemCount": 16,
                    "modelName": "rbs.pimcategory",
                    "sortingOrder": 10,
                    "subCategories": []
                },
                {
                    "id": "HASERE-RFWYI",
                    "name": "Haşere",
                    "title": "Haşere",
                    "images": [],
                    "itemCount": 10,
                    "modelName": "rbs.pimcategory",
                    "sortingOrder": 25,
                    "subCategories": []
                },
                {
                    "id": "HIJYENIKMENDIL-EVQLZ",
                    "name": "Hijyenik Mendil",
                    "title": "Hijyenik Mendil",
                    "images": [],
                    "itemCount": 2,
                    "modelName": "rbs.pimcategory",
                    "sortingOrder": 30,
                    "subCategories": []
                },
                {
                    "id": "KIREC-YL7IZ",
                    "name": "Kireç Sökücü",
                    "title": "Kireç Sökücü",
                    "images": [],
                    "itemCount": 1,
                    "modelName": "rbs.pimcategory",
                    "sortingOrder": 40,
                    "subCategories": []
                },
                {
                    "id": "KOPUK-QVAKJ",
                    "name": "Köpük",
                    "title": "Köpük",
                    "images": [],
                    "itemCount": 6,
                    "modelName": "rbs.pimcategory",
                    "sortingOrder": 50,
                    "subCategories": []
                },
                {
                    "id": "LEKECIKARICI-LDKW2",
                    "name": "Leke Çıkarıcı",
                    "title": "Leke Çıkarıcı",
                    "images": [],
                    "itemCount": 3,
                    "modelName": "rbs.pimcategory",
                    "sortingOrder": 60,
                    "subCategories": []
                },
                {
                    "id": "MUTFAK-E5TKV",
                    "name": "Mutfak Ürünleri",
                    "title": "Mutfak Ürünleri",
                    "images": [],
                    "itemCount": 28,
                    "modelName": "rbs.pimcategory",
                    "sortingOrder": 70,
                    "subCategories": []
                },
                {
                    "id": "ODAKOKUSU-Z9JLB",
                    "name": "Oda Kokusu",
                    "title": "Oda Kokusu",
                    "images": [],
                    "itemCount": 3,
                    "modelName": "rbs.pimcategory",
                    "sortingOrder": 80,
                    "subCategories": []
                },
                {
                    "id": "SPREY-8HS51",
                    "name": "Sprey",
                    "title": "Sprey",
                    "images": [],
                    "itemCount": 21,
                    "modelName": "rbs.pimcategory",
                    "sortingOrder": 90,
                    "subCategories": []
                },
                {
                    "id": "TEMIZLEYICI-3H1G4",
                    "name": "Temizleyiciler",
                    "title": "Temizleyiciler",
                    "images": [],
                    "itemCount": 48,
                    "modelName": "rbs.pimcategory",
                    "sortingOrder": 100,
                    "subCategories": [
                        {
                            "id": "JEL-W7455",
                            "name": "Jel Temizleyici",
                            "title": "Jel Temizleyici",
                            "images": [],
                            "itemCount": 11,
                            "modelName": "rbs.pimcategory",
                            "sortingOrder": 10,
                            "subCategories": []
                        },
                        {
                            "id": "KREM-NHVAU",
                            "name": "Krem Temizleyici",
                            "title": "Krem Temizleyici",
                            "images": [],
                            "itemCount": 17,
                            "modelName": "rbs.pimcategory",
                            "sortingOrder": 20,
                            "subCategories": []
                        },
                        {
                            "id": "MAKINETEMIZLEYICI-VQBQV",
                            "name": "Makine Temizleyici",
                            "title": "Makine Temizleyici",
                            "images": [],
                            "itemCount": 2,
                            "modelName": "rbs.pimcategory",
                            "sortingOrder": 30,
                            "subCategories": []
                        },
                        {
                            "id": "TUVALETTEMIZLEYICI-KY6BW",
                            "name": "Tuvalet Temizleyici",
                            "title": "Tuvalet Temizleyici",
                            "images": [],
                            "itemCount": 9,
                            "modelName": "rbs.pimcategory",
                            "sortingOrder": 40,
                            "subCategories": []
                        },
                        {
                            "id": "YUZEYTEMIZLEYICI-LW5F7",
                            "name": "Yüzey Temizleyici",
                            "title": "Yüzey Temizleyici",
                            "images": [],
                            "itemCount": 9,
                            "modelName": "rbs.pimcategory",
                            "sortingOrder": 50,
                            "subCategories": []
                        }
                    ]
                },
                {
                    "id": "TEMIZLIK-2ILW6",
                    "name": "Temizlik Malzemeleri",
                    "title": "Temizlik Malzemeleri",
                    "images": [],
                    "itemCount": 38,
                    "modelName": "rbs.pimcategory",
                    "sortingOrder": 110,
                    "subCategories": []
                },
                {
                    "id": "YUMUSAT-FCWX3",
                    "name": "Yumuşatıcılar",
                    "title": "Yumuşatıcılar",
                    "images": [],
                    "itemCount": 20,
                    "modelName": "rbs.pimcategory",
                    "sortingOrder": 120,
                    "subCategories": []
                }
            ]
        },
        {
            "id": "GUZELLIK-Z5BVT",
            "name": "GÜZELLİK & KİŞİSEL BAKIM",
            "title": "GÜZELLİK & KİŞİSEL BAKIM",
            "images": [{ "id": "50d51fd1-27a0-4ab3-99bf-e0b58df32109" }],
            "itemCount": 360,
            "modelName": "rbs.pimcategory",
            "sortingOrder": 2,
            "subCategories": [
                {
                    "id": "AGDA-01ZYR",
                    "name": "Ağda",
                    "title": "Ağda",
                    "images": [],
                    "itemCount": 6,
                    "modelName": "rbs.pimcategory",
                    "sortingOrder": 10,
                    "subCategories": []
                },
                {
                    "id": "AGIZ-HDMYR",
                    "name": "Ağız Bakım",
                    "title": "Ağız Bakım",
                    "images": [],
                    "itemCount": 35,
                    "modelName": "rbs.pimcategory",
                    "sortingOrder": 20,
                    "subCategories": [
                        {
                            "id": "DISFIRCASI-30ZU7",
                            "name": "Diş Fırçası",
                            "title": "Diş Fırçası",
                            "images": [],
                            "itemCount": 14,
                            "modelName": "rbs.pimcategory",
                            "sortingOrder": 10,
                            "subCategories": []
                        },
                        {
                            "id": "DISMACUNU-L6NI8",
                            "name": "Diş Macunu",
                            "title": "Diş Macunu",
                            "images": [],
                            "itemCount": 21,
                            "modelName": "rbs.pimcategory",
                            "sortingOrder": 20,
                            "subCategories": []
                        }
                    ]
                },
                {
                    "id": "CILT-T2536",
                    "name": "Cilt",
                    "title": "Cilt",
                    "images": [],
                    "itemCount": 83,
                    "modelName": "rbs.pimcategory",
                    "sortingOrder": 30,
                    "subCategories": [
                        {
                            "id": "CBAKIM-AD2EU",
                            "name": "Cilt Bakım",
                            "title": "Cilt Bakım",
                            "images": [],
                            "itemCount": 29,
                            "modelName": "rbs.pimcategory",
                            "sortingOrder": 10,
                            "subCategories": []
                        },
                        {
                            "id": "CTEMIZLIK-6GL4I",
                            "name": "Cilt Temizlik",
                            "title": "Cilt Temizlik",
                            "images": [],
                            "itemCount": 54,
                            "modelName": "rbs.pimcategory",
                            "sortingOrder": 20,
                            "subCategories": []
                        }
                    ]
                },
                {
                    "id": "PEDLER-NSDDO",
                    "name": "Hijyenik Ped",
                    "title": "Hijyenik Ped",
                    "images": [],
                    "itemCount": 31,
                    "modelName": "rbs.pimcategory",
                    "sortingOrder": 40,
                    "subCategories": []
                },
                {
                    "id": "KAGIT-3F406",
                    "name": "Kağıt Ürünleri",
                    "title": "Kağıt Ürünleri",
                    "images": [],
                    "itemCount": 10,
                    "modelName": "rbs.pimcategory",
                    "sortingOrder": 50,
                    "subCategories": []
                },
                {
                    "id": "KOLONYA-926ED",
                    "name": "Kolonya",
                    "title": "Kolonya",
                    "images": [],
                    "itemCount": 5,
                    "modelName": "rbs.pimcategory",
                    "sortingOrder": 60,
                    "subCategories": []
                },
                {
                    "id": "PDS-L1306",
                    "name": "Parfüm & Deodorant",
                    "title": "Parfüm & Deodorant",
                    "images": [],
                    "itemCount": 67,
                    "modelName": "rbs.pimcategory",
                    "sortingOrder": 70,
                    "subCategories": [
                        {
                            "id": "DEODORANT-QJ52D",
                            "name": "Deodorant/Body Spray",
                            "title": "Deodorant/Body Spray",
                            "images": [],
                            "itemCount": 42,
                            "modelName": "rbs.pimcategory",
                            "sortingOrder": 10,
                            "subCategories": []
                        },
                        {
                            "id": "DEOROLANT-JJGPQ",
                            "name": "Deorolant/Stick",
                            "title": "Deorolant/Stick",
                            "images": [],
                            "itemCount": 22,
                            "modelName": "rbs.pimcategory",
                            "sortingOrder": 20,
                            "subCategories": []
                        },
                        {
                            "id": "PARFUM-CNN9T",
                            "name": "Parfüm",
                            "title": "Parfüm ",
                            "images": [],
                            "itemCount": 3,
                            "modelName": "rbs.pimcategory",
                            "sortingOrder": 30,
                            "subCategories": []
                        }
                    ]
                },
                {
                    "id": "SACBAKIM-HWKY9",
                    "name": "Saç Bakım",
                    "title": "Saç Bakım",
                    "images": [],
                    "itemCount": 100,
                    "modelName": "rbs.pimcategory",
                    "sortingOrder": 80,
                    "subCategories": [
                        {
                            "id": "SACKREMI-FLGCJ",
                            "name": "Saç Kremi & Yağı",
                            "title": "Saç Kremi & Yağı",
                            "images": [],
                            "itemCount": 42,
                            "modelName": "rbs.pimcategory",
                            "sortingOrder": 10,
                            "subCategories": []
                        },
                        {
                            "id": "SACMASKESI-TS0TQ",
                            "name": "Saç Maskesi",
                            "title": "Saç Maskesi",
                            "images": [],
                            "itemCount": 1,
                            "modelName": "rbs.pimcategory",
                            "sortingOrder": 20,
                            "subCategories": []
                        },
                        {
                            "id": "SEKILLENDIRICILER-1Y435",
                            "name": "Saç Şekillendirici",
                            "title": "Saç Şekillendirici",
                            "images": [],
                            "itemCount": 12,
                            "modelName": "rbs.pimcategory",
                            "sortingOrder": 30,
                            "subCategories": []
                        },
                        {
                            "id": "SAMPUAN-X8MWW",
                            "name": "Şampuan",
                            "title": "Şampuan",
                            "images": [],
                            "itemCount": 45,
                            "modelName": "rbs.pimcategory",
                            "sortingOrder": 40,
                            "subCategories": []
                        }
                    ]
                },
                {
                    "id": "SAGLIK-0F8TN",
                    "name": "Sağlık",
                    "title": "Sağlık",
                    "images": [],
                    "itemCount": 12,
                    "modelName": "rbs.pimcategory",
                    "sortingOrder": 90,
                    "subCategories": [
                        {
                            "id": "CINSEL-WL7HN",
                            "name": "Cinsel Sağlık",
                            "title": "Cinsel Sağlık",
                            "images": [],
                            "itemCount": 8,
                            "modelName": "rbs.pimcategory",
                            "sortingOrder": 10,
                            "subCategories": []
                        },
                        {
                            "id": "DEZ-RIYWG",
                            "name": "Dezenfektan",
                            "title": "Dezenfektan",
                            "images": [],
                            "itemCount": 3,
                            "modelName": "rbs.pimcategory",
                            "sortingOrder": 20,
                            "subCategories": []
                        },
                        {
                            "id": "MASKE-CCRMK",
                            "name": "Hijyenik Maske",
                            "title": "Hijyenik Maske",
                            "images": [],
                            "itemCount": 1,
                            "modelName": "rbs.pimcategory",
                            "sortingOrder": 30,
                            "subCategories": []
                        }
                    ]
                },
                {
                    "id": "TIRNAK-SFQAM",
                    "name": "Tırnak Bakım",
                    "title": "Tırnak Bakım",
                    "images": [],
                    "itemCount": 2,
                    "modelName": "rbs.pimcategory",
                    "sortingOrder": 100,
                    "subCategories": []
                }
            ]
        },
        {
            "id": "GIDA-OF7AC",
            "name": "GIDA",
            "title": "GIDA",
            "images": [{ "id": "a22ba45e-2ba2-49d9-850b-af811cfea336" }],
            "itemCount": 289,
            "modelName": "rbs.pimcategory",
            "sortingOrder": 3,
            "subCategories": [
                {
                    "id": "ATISTIRMALIK-N5RUF",
                    "name": "Atıştırmalık",
                    "title": "Atıştırmalık",
                    "images": [],
                    "itemCount": 119,
                    "modelName": "rbs.pimcategory",
                    "sortingOrder": 10,
                    "subCategories": [
                        {
                            "id": "BAR-KL7G6",
                            "name": "Bar",
                            "title": "Bar",
                            "images": [],
                            "itemCount": 21,
                            "modelName": "rbs.pimcategory",
                            "sortingOrder": 10,
                            "subCategories": []
                        },
                        {
                            "id": "BISKUVI-0OPUQ",
                            "name": "Bisküvi",
                            "title": "Bisküvi",
                            "images": [],
                            "itemCount": 17,
                            "modelName": "rbs.pimcategory",
                            "sortingOrder": 20,
                            "subCategories": []
                        },
                        {
                            "id": "CIPS-P1OZG",
                            "name": "Cips & Kraker",
                            "title": "Cips & Kraker",
                            "images": [],
                            "itemCount": 10,
                            "modelName": "rbs.pimcategory",
                            "sortingOrder": 40,
                            "subCategories": []
                        },
                        {
                            "id": "CIKOLATA-XY76W",
                            "name": "Çikolata",
                            "title": "Çikolata",
                            "images": [],
                            "itemCount": 5,
                            "modelName": "rbs.pimcategory",
                            "sortingOrder": 45,
                            "subCategories": []
                        },
                        {
                            "id": "DELIKASI-R27ZB",
                            "name": "Delikasi",
                            "title": "Delikasi",
                            "images": [],
                            "itemCount": 3,
                            "modelName": "rbs.pimcategory",
                            "sortingOrder": 47,
                            "subCategories": []
                        },
                        {
                            "id": "GOFRET-9D5RP",
                            "name": "Gofret",
                            "title": "Gofret",
                            "images": [],
                            "itemCount": 5,
                            "modelName": "rbs.pimcategory",
                            "sortingOrder": 50,
                            "subCategories": []
                        },
                        {
                            "id": "KAHVALTILIKGEVREK-FZNFB",
                            "name": "Kahvaltılık Gevrek",
                            "title": "Kahvaltılık Gevrek",
                            "images": [],
                            "itemCount": 8,
                            "modelName": "rbs.pimcategory",
                            "sortingOrder": 60,
                            "subCategories": []
                        },
                        {
                            "id": "KEK-R0TJV",
                            "name": "Kek",
                            "title": "Kek",
                            "images": [],
                            "itemCount": 4,
                            "modelName": "rbs.pimcategory",
                            "sortingOrder": 70,
                            "subCategories": []
                        },
                        {
                            "id": "KURUYEMIS-U1CBH",
                            "name": "Kuruyemiş",
                            "title": "Kuruyemiş",
                            "images": [],
                            "itemCount": 32,
                            "modelName": "rbs.pimcategory",
                            "sortingOrder": 80,
                            "subCategories": []
                        },
                        {
                            "id": "LOKUM-0P8WU",
                            "name": "Lokum",
                            "title": "Lokum",
                            "images": [],
                            "itemCount": 4,
                            "modelName": "rbs.pimcategory",
                            "sortingOrder": 85,
                            "subCategories": []
                        },
                        {
                            "id": "SEKERLEME-152NW",
                            "name": "Şekerleme",
                            "title": "Şekerleme",
                            "images": [],
                            "itemCount": 10,
                            "modelName": "rbs.pimcategory",
                            "sortingOrder": 90,
                            "subCategories": []
                        }
                    ]
                },
                {
                    "id": "TEMELGIDA-4D592",
                    "name": "Temel Gıda",
                    "title": "Temel Gıda",
                    "images": [],
                    "itemCount": 166,
                    "modelName": "rbs.pimcategory",
                    "sortingOrder": 30,
                    "subCategories": [
                        {
                            "id": "BAHARAT-4Y3ED",
                            "name": "Baharatlar",
                            "title": "Baharatlar",
                            "images": [],
                            "itemCount": 11,
                            "modelName": "rbs.pimcategory",
                            "sortingOrder": 10,
                            "subCategories": []
                        },
                        {
                            "id": "BAKLIYAT-RLHBX",
                            "name": "Bakliyat",
                            "title": "Bakliyat",
                            "images": [],
                            "itemCount": 11,
                            "modelName": "rbs.pimcategory",
                            "sortingOrder": 20,
                            "subCategories": []
                        },
                        {
                            "id": "BAL-EY0EQ",
                            "name": "Bal",
                            "title": "Bal",
                            "images": [],
                            "itemCount": 19,
                            "modelName": "rbs.pimcategory",
                            "sortingOrder": 30,
                            "subCategories": []
                        },
                        {
                            "id": "BULYON-8FBTW",
                            "name": "Bulyon",
                            "title": "Bulyon",
                            "images": [],
                            "itemCount": 4,
                            "modelName": "rbs.pimcategory",
                            "sortingOrder": 40,
                            "subCategories": []
                        },
                        {
                            "id": "CORBA-0PZJV",
                            "name": "Çorba",
                            "title": "Çorba",
                            "images": [],
                            "itemCount": 22,
                            "modelName": "rbs.pimcategory",
                            "sortingOrder": 50,
                            "subCategories": []
                        },
                        {
                            "id": "HARCLARCESNILER-VA1Z3",
                            "name": "Harçlar & Çeşniler",
                            "title": "Harçlar & Çeşniler",
                            "images": [],
                            "itemCount": 17,
                            "modelName": "rbs.pimcategory",
                            "sortingOrder": 60,
                            "subCategories": []
                        },
                        {
                            "id": "KAHVALTILIK-D50GR",
                            "name": "Kahvaltılık",
                            "title": "Kahvaltılık",
                            "images": [],
                            "itemCount": 9,
                            "modelName": "rbs.pimcategory",
                            "sortingOrder": 65,
                            "subCategories": []
                        },
                        {
                            "id": "MAKARNA-71KRH",
                            "name": "Makarna",
                            "title": "Makarna",
                            "images": [],
                            "itemCount": 9,
                            "modelName": "rbs.pimcategory",
                            "sortingOrder": 70,
                            "subCategories": []
                        },
                        {
                            "id": "KONSERVE-AF49L",
                            "name": "Pratik Yemek ",
                            "title": "Pratik Yemek ",
                            "images": [],
                            "itemCount": 6,
                            "modelName": "rbs.pimcategory",
                            "sortingOrder": 71,
                            "subCategories": []
                        },
                        {
                            "id": "UN-UDJZ3",
                            "name": "Un",
                            "title": "Un",
                            "images": [],
                            "itemCount": 1,
                            "modelName": "rbs.pimcategory",
                            "sortingOrder": 75,
                            "subCategories": []
                        },
                        {
                            "id": "SIRKE-H5QG5",
                            "name": "Sirke",
                            "images": [],
                            "itemCount": 1,
                            "modelName": "rbs.pimcategory",
                            "sortingOrder": 78,
                            "subCategories": []
                        },
                        {
                            "id": "SOSLAR-U48MD",
                            "name": "Soslar",
                            "title": "Soslar",
                            "images": [],
                            "itemCount": 45,
                            "modelName": "rbs.pimcategory",
                            "sortingOrder": 80,
                            "subCategories": []
                        },
                        {
                            "id": "SEKER-7844Y",
                            "name": "Şeker",
                            "title": "Şeker",
                            "images": [],
                            "itemCount": 1,
                            "modelName": "rbs.pimcategory",
                            "sortingOrder": 85,
                            "subCategories": []
                        },
                        {
                            "id": "YAGLAR-EILZC",
                            "name": "Yağlar",
                            "title": "Yağlar",
                            "images": [],
                            "itemCount": 10,
                            "modelName": "rbs.pimcategory",
                            "sortingOrder": 110,
                            "subCategories": []
                        }
                    ]
                },
                {
                    "id": "TAKVIYEGIDA-E3NNI",
                    "name": "Takviye Edici Gıda",
                    "title": "Takviye Edici Gıda",
                    "images": [],
                    "itemCount": 4,
                    "modelName": "rbs.pimcategory",
                    "sortingOrder": 30,
                    "subCategories": []
                }
            ]
        },
        {
            "id": "ICECEK-JJ7CL",
            "name": "SU & İÇECEK",
            "title": "SU & İÇECEK",
            "images": [{ "id": "90afa125-9d69-4db8-b854-af279f4152ba" }],
            "itemCount": 108,
            "modelName": "rbs.pimcategory",
            "sortingOrder": 4,
            "subCategories": [
                {
                    "id": "CAYLAR-6J8C7",
                    "name": "Çay",
                    "title": "Çay",
                    "images": [],
                    "itemCount": 61,
                    "modelName": "rbs.pimcategory",
                    "sortingOrder": 10,
                    "subCategories": [
                        {
                            "id": "BARDAKPOSET-X2P1G",
                            "name": "Bardak Poşet Çay",
                            "title": "Bardak Poşet Çay",
                            "images": [],
                            "itemCount": 11,
                            "modelName": "rbs.pimcategory",
                            "sortingOrder": 10,
                            "subCategories": []
                        },
                        {
                            "id": "BITKICAYI-2UTKF",
                            "name": "Bitki ve Meyve Çayları",
                            "title": "Bitki ve Meyve Çayları",
                            "images": [],
                            "itemCount": 23,
                            "modelName": "rbs.pimcategory",
                            "sortingOrder": 20,
                            "subCategories": []
                        },
                        {
                            "id": "DEMLIKPOS-71C57",
                            "name": "Demlik Poşet Çay",
                            "title": "Demlik Poşet Çay",
                            "images": [],
                            "itemCount": 10,
                            "modelName": "rbs.pimcategory",
                            "sortingOrder": 30,
                            "subCategories": []
                        },
                        {
                            "id": "DOKMECAY-2F054",
                            "name": "Dökme Çay",
                            "title": "Dökme Çay",
                            "images": [],
                            "itemCount": 12,
                            "modelName": "rbs.pimcategory",
                            "sortingOrder": 40,
                            "subCategories": []
                        },
                        {
                            "id": "PREMIUM-X32D1",
                            "name": "Premium Çay",
                            "title": "Premium Çay",
                            "images": [],
                            "itemCount": 5,
                            "modelName": "rbs.pimcategory",
                            "sortingOrder": 50,
                            "subCategories": []
                        }
                    ]
                },
                {
                    "id": "KAHVE-Y40RS",
                    "name": "Kahve",
                    "title": "Kahve",
                    "images": [],
                    "itemCount": 19,
                    "modelName": "rbs.pimcategory",
                    "sortingOrder": 20,
                    "subCategories": [
                        {
                            "id": "CEKIRDEKKAHVE-NWEVZ",
                            "name": "Çekirdek Kahve",
                            "title": "Çekirdek Kahve",
                            "images": [],
                            "itemCount": 2,
                            "modelName": "rbs.pimcategory",
                            "sortingOrder": 10,
                            "subCategories": []
                        },
                        {
                            "id": "FILTREKAHVE-TSNXU",
                            "name": "Filtre Kahve",
                            "title": "Filtre Kahve",
                            "images": [],
                            "itemCount": 2,
                            "modelName": "rbs.pimcategory",
                            "sortingOrder": 20,
                            "subCategories": []
                        },
                        {
                            "id": "KAPSULKAHVE-RQHLD",
                            "name": "Kapsül Kahve",
                            "title": "Kapsül Kahve",
                            "images": [],
                            "itemCount": 1,
                            "modelName": "rbs.pimcategory",
                            "sortingOrder": 40,
                            "subCategories": []
                        },
                        {
                            "id": "SOGUKKAHVE-32EYS",
                            "name": "Soğuk Kahve",
                            "title": "Soğuk Kahve",
                            "images": [],
                            "itemCount": 3,
                            "modelName": "rbs.pimcategory",
                            "sortingOrder": 50,
                            "subCategories": []
                        },
                        {
                            "id": "TURKKAHVESI-ZEZVQ",
                            "name": "Türk Kahvesi",
                            "title": "Türk Kahvesi",
                            "images": [],
                            "itemCount": 11,
                            "modelName": "rbs.pimcategory",
                            "sortingOrder": 60,
                            "subCategories": []
                        }
                    ]
                },
                {
                    "id": "SUT-YUPCL",
                    "name": "Süt",
                    "title": "Süt",
                    "images": [],
                    "itemCount": 24,
                    "modelName": "rbs.pimcategory",
                    "sortingOrder": 30,
                    "subCategories": [
                        {
                            "id": "VEGAN-A4MWQ",
                            "name": "Vegan Sütler",
                            "title": "Vegan Sütler",
                            "images": [],
                            "itemCount": 10,
                            "modelName": "rbs.pimcategory",
                            "sortingOrder": -1,
                            "subCategories": []
                        },
                        {
                            "id": "AROMALI-T7GKK",
                            "name": "Aromalı Sütler",
                            "title": "Aromalı Sütler",
                            "images": [],
                            "itemCount": 7,
                            "modelName": "rbs.pimcategory",
                            "sortingOrder": -1,
                            "subCategories": []
                        },
                        {
                            "id": "HAYVANSUTU-ZAGV3",
                            "name": "Pastörize Süt",
                            "title": "Pastörize Süt",
                            "images": [],
                            "itemCount": 7,
                            "modelName": "rbs.pimcategory",
                            "sortingOrder": -1,
                            "subCategories": []
                        }
                    ]
                },
                {
                    "id": "MEYVESUYU-7TUTD",
                    "name": "Meyve Suyu",
                    "title": "Meyve Suyu",
                    "images": [],
                    "itemCount": 5,
                    "modelName": "rbs.pimcategory",
                    "sortingOrder": 30,
                    "subCategories": []
                }
            ]
        },
        {
            "id": "EVCIL-QWAP7",
            "name": "SEVİMLİ DOSTLARIMIZA",
            "title": "SEVİMLİ DOSTLARIMIZA",
            "images": [{ "id": "18718a70-5a41-4f4f-921f-a0c4043ac75b" }],
            "itemCount": 18,
            "modelName": "rbs.pimcategory",
            "sortingOrder": 5,
            "subCategories": [
                {
                    "id": "KEDI-4LG98",
                    "name": "Kedi",
                    "title": "Kedi",
                    "images": [],
                    "itemCount": 7,
                    "modelName": "rbs.pimcategory",
                    "sortingOrder": 100,
                    "subCategories": []
                },
                {
                    "id": "KOPEK-IEQQ6",
                    "name": "Köpek",
                    "images": [],
                    "itemCount": 7,
                    "modelName": "rbs.pimcategory",
                    "sortingOrder": 200,
                    "subCategories": []
                }
            ]
        },
        {
            "id": "ANNEBEBEKK-X3FXX",
            "name": "ANNE - BEBEK",
            "title": "ANNE - BEBEK",
            "images": [{ "id": "e93a9e5e-8f91-4c11-b940-f85e92121da5" }],
            "itemCount": 63,
            "modelName": "rbs.pimcategory",
            "sortingOrder": 100,
            "subCategories": [
                {
                    "id": "BEBEKBAKIM-W0AUR",
                    "name": "Bebek Bakım",
                    "title": "Bebek Bakım",
                    "images": [],
                    "itemCount": 21,
                    "modelName": "rbs.pimcategory",
                    "sortingOrder": 20,
                    "subCategories": []
                },
                {
                    "id": "BEBEKBEZI-EAG3L",
                    "name": "Bebek Bezi",
                    "title": "Bebek Bezi",
                    "images": [],
                    "itemCount": 10,
                    "modelName": "rbs.pimcategory",
                    "sortingOrder": 30,
                    "subCategories": []
                },
                {
                    "id": "BEBEKGIDA-57D48",
                    "name": "Bebek Gıda",
                    "title": "Bebek Gıda",
                    "images": [],
                    "itemCount": 21,
                    "modelName": "rbs.pimcategory",
                    "sortingOrder": 40,
                    "subCategories": []
                },
                {
                    "id": "BEBEKSAMPUAN-CRI7T",
                    "name": "Bebek Şampuanı",
                    "title": "Bebek Şampuanı",
                    "images": [],
                    "itemCount": 4,
                    "modelName": "rbs.pimcategory",
                    "sortingOrder": 50,
                    "subCategories": []
                },
                {
                    "id": "BEBEKTEMIZLIK-UID67",
                    "name": "Bebek Temizlik Ürünleri",
                    "title": "Bebek Temizlik Ürünleri",
                    "images": [],
                    "itemCount": 7,
                    "modelName": "rbs.pimcategory",
                    "sortingOrder": 60,
                    "subCategories": []
                }
            ]
        },
        {
            "id": "SETLER-1PWTD",
            "name": "AVANTAJLI SETLER",
            "title": "AVANTAJLI SETLER",
            "images": [{ "id": "686d87b2-75d9-430c-be86-57dfbfcccba5" }],
            "itemCount": 4,
            "modelName": "rbs.pimcategory",
            "sortingOrder": 200,
            "subCategories": []
        },
        {
            "id": "KH-SXZBF",
            "name": "KIRTASİYE & HOBİ",
            "title": "KIRTASİYE & HOBİ",
            "images": [{ "id": "e592a5c0-91dc-497a-a880-6bdcaf53536a" }],
            "itemCount": 10,
            "modelName": "rbs.pimcategory",
            "sortingOrder": 701,
            "subCategories": [
                {
                    "id": "KALEM-5KDD5",
                    "name": "Kalem",
                    "title": "Kalem",
                    "images": [],
                    "itemCount": 2,
                    "modelName": "rbs.pimcategory",
                    "sortingOrder": 100,
                    "subCategories": [
                        {
                            "id": "KURSUN-C6NM8",
                            "name": "Kurşun Kalem",
                            "title": "Kurşun Kalem",
                            "images": [],
                            "itemCount": 1,
                            "modelName": "rbs.pimcategory",
                            "sortingOrder": 150,
                            "subCategories": []
                        },
                        {
                            "id": "IGNEUCLU-X2JPQ",
                            "name": "İğne Uçlu Kalem",
                            "title": "İğne Uçlu Kalem",
                            "images": [],
                            "itemCount": 1,
                            "modelName": "rbs.pimcategory",
                            "sortingOrder": 180,
                            "subCategories": []
                        }
                    ]
                },
                {
                    "id": "KITAP-GITHQ",
                    "name": "Kitap",
                    "title": "Kitap",
                    "images": [],
                    "itemCount": 3,
                    "modelName": "rbs.pimcategory",
                    "sortingOrder": 200,
                    "subCategories": []
                },
                {
                    "id": "SIRTCANTA-HMQ18",
                    "name": "Sırt Çantası",
                    "title": "Sırt Çantası",
                    "images": [],
                    "itemCount": 1,
                    "modelName": "rbs.pimcategory",
                    "sortingOrder": 250,
                    "subCategories": []
                },
                {
                    "id": "OYUNCAK-MXEYR",
                    "name": "Oyuncak",
                    "title": "Oyuncak",
                    "images": [],
                    "itemCount": 4,
                    "modelName": "rbs.pimcategory",
                    "sortingOrder": 300,
                    "subCategories": []
                }
            ]
        },
        {
            "id": "TEKNOLOJI-QAAAL",
            "name": "TEKNOLOJİ",
            "title": "TEKNOLOJİ",
            "images": [{ "id": "0cd257cc-09b6-4313-ae87-1bf23c845889" }],
            "itemCount": 21,
            "modelName": "rbs.pimcategory",
            "sortingOrder": 800,
            "subCategories": [
                {
                    "id": "KAHVEMAKINE-T36LB",
                    "name": "Kahve Makineleri",
                    "title": "Kahve Makineleri",
                    "images": [],
                    "itemCount": 5,
                    "modelName": "rbs.pimcategory",
                    "sortingOrder": 20,
                    "subCategories": []
                },
                {
                    "id": "KULAKLIK-Z8KHN",
                    "name": "Kulaklık",
                    "title": "Kulaklık",
                    "images": [],
                    "itemCount": 1,
                    "modelName": "rbs.pimcategory",
                    "sortingOrder": 30,
                    "subCategories": []
                },
                {
                    "id": "PILLER-3BY1O",
                    "name": "Piller & Şarj Aletleri",
                    "title": "Piller & Şarj Aletleri",
                    "images": [],
                    "itemCount": 13,
                    "modelName": "rbs.pimcategory",
                    "sortingOrder": 30,
                    "subCategories": [
                        {
                            "id": "PIL-FMRPC",
                            "name": "Pil",
                            "title": "Pil",
                            "images": [],
                            "itemCount": 10,
                            "modelName": "rbs.pimcategory",
                            "sortingOrder": 10,
                            "subCategories": []
                        },
                        {
                            "id": "POWERBANK-KS62D",
                            "name": "Powerbank",
                            "title": "Powerbank",
                            "images": [],
                            "itemCount": 1,
                            "modelName": "rbs.pimcategory",
                            "sortingOrder": 20,
                            "subCategories": []
                        },
                        {
                            "id": "SARJ-31RBQ",
                            "name": "Şarj Aletleri",
                            "title": "Şarj Aletleri",
                            "images": [],
                            "itemCount": 2,
                            "modelName": "rbs.pimcategory",
                            "sortingOrder": 30,
                            "subCategories": []
                        }
                    ]
                },
                {
                    "id": "TABLET-LE8FZ",
                    "name": "Tablet",
                    "title": "Tablet",
                    "images": [],
                    "itemCount": 2,
                    "modelName": "rbs.pimcategory",
                    "sortingOrder": 40,
                    "subCategories": []
                }
            ]
        }
    ])
    return (
        <div className="Categories ">
            <ul className="menu">
                <li>
                    <a href="#"><img className="menu-icon" src="https://imgyukle.com/f/2021/11/07/kXFyvj.png" />Kategoriler<img className="down-icon" src="https://imgyukle.com/f/2021/11/07/kXbpW1.png" /></a>
                    <ul>
                        {categories.map((categori) => {
                            return (
                                <li className="baslık"><a href="#">{categori.name}</a>
                                <ul>
                                {categori.subCategories.map(subCategori=>{
                                        return (
                                        <li><a href="#">{subCategori.name}</a></li>
                                        )
                                    })}
                                    
                                </ul>
                                    </li>
                            )
                        })} 
                    </ul>
                </li>
            </ul>
        </div>
    )
}
export default Categories;