module.exports = {
    block: 'page',
    title: 'Мэджик Десктоп — программа для умственного развития детей',
    favicon: '/favicon.ico',
    head: [
        { elem: 'meta', attrs: { name: 'description', content: 'Magic Desktop 9.1 - полноценная компьютерная система для детей!' } },
        { elem: 'meta', attrs: { name: 'viewport', content: 'width=device-width, initial-scale=1' } },
        { elem: 'css', url: 'content/styles.min.css' },
        [
            {
                property: 'og:title',
                content: 'Magic Desktop 9.1 – полноценная компьютерная система для детей!'
            },
            {
                property: 'og:site_name',
                content: 'Magic Desktop'
            },
            {
                property: 'og:url',
                content: 'http://www.magicdesktop.com/ru-RU'
            },
            {
                property: 'og:image',
                content: 'http://www.magicdesktop.com/i/social_img.jpg'
            },
            {
                property: 'og:description',
                content: 'Вдохновляет детей учиться, обеспечивает их онлайн-безопасность и защищает ваш компьютер от повреждений.'
            },
            {
                property: 'og:type',
                content: 'website'
            },
            {
                property: 'og:locale',
                content: 'ru_RU'
            },
            {
                property: 'fb:app_id',
                content: '567143303315365'
            }
        ].map(function(meta) {
            return {
                elem: 'meta',
                attrs: { property: meta.property, content: meta.content }
            };
        })
    ],
    scripts: [{ elem: 'js', url: 'scripts/scripts.min.js' }],
    content: [
        {
            block: 'section',
            mix: { block: 'header' },
            content: [
                {
                    block: 'social',
                    content: [
                        {
                            name: 'fb',
                            url: '//www.facebook.com/magicdesktop'
                        },
                        {
                            name: 'vk',
                            url: 'https://vk.com/magicdesktop_rus'
                        },
                        {
                            name: 'ok',
                            url: '#ok'
                        }
                    ].map(function(network) {
                        return {
                            block: 'link',
                            url: network.url,
                            mix: {
                                block: 'social',
                                elem: 'item',
                                elemMods: {
                                    network: network.name
                                }
                            }
                        };
                    })
                },
                'Мэджик Десктоп — программа для умственного развития детей',
            ]
        },
        {
            block: 'content',
            content: [
                {
                    block: 'section',
                    mix: { block: 'introduction', js: true },
                    content: [
                        {
                            block: 'introduction',
                            elem: 'slogan',
                            content: [
                                'Все для умственного развития детей ',
                                {
                                    elem: 'em',
                                    content: 'от 2 до 12 лет'
                                },
                                '<br>собрано в Мэджик Десктопе'
                            ]
                        },
                        {
                            block: 'video',
                            url: 'https://www.youtube.com/embed/1ZpTwSULBh0'
                        },
                        {
                            block: 'button',
                            mix: { block: 'introduction', elem: 'download' },
                            mods: { type: 'link', theme: 'md', view: 'round' },
                            url: 'http://www.magicdesktop.com/ru-RU/Download',
                            text: 'Скачать программу'
                        }
                    ]
                },
                {
                    block: 'section',
                    mix: { block: 'description' },
                    content: [
                        {
                            block: 'carousel',
                            js: {
                                live: false,
                                opts: {
                                    mode: 'vertical',
                                    minSlides: 5,
                                    maxSlides: 5,
                                    auto: true,
                                    moveSlides: 1,
                                    pager: false,
                                    speed: 500,
                                    responsive: false,
                                    touchEnabled: false
                                }
                            },
                            content: Array.apply(null, Array(16)).map(function(img, idx) {
                                return {
                                    elem: 'item',
                                    content: {
                                        block: 'link',
                                        js: { url: 'i/24/orig/' + (idx + 1) + '.jpg' },
                                        mods: { pseudo: true },
                                        content: {
                                            block: 'image',
                                            url: 'i/24/preview/' + (idx + 1) + '.jpg'
                                        }
                                    }
                                };
                            })
                        },
                        {
                            block: 'description',
                            elem: 'text',
                            content: [
                                {
                                    block: 'description',
                                    elem: 'main',
                                    content: [
                                        {
                                            tag: 'strong',
                                            content: 'Мэджик Десктоп'
                                        },
                                        ' — это компьютерная программа, которая сама ',
                                        {
                                            tag: 'strong',
                                            content: 'обучает Вашего ребенка'
                                        },
                                        ' с помощью интерактивных игр.'
                                    ]
                                },
                                {
                                    tag: 'p',
                                    content: [
                                        'Занимаясь в Мэджик Десктоп ',
                                        {
                                            tag: 'strong',
                                            content: 'Ваш ребенок разовьёт'
                                        },
                                        ':'
                                    ]
                                },
                                {
                                    block: 'list',
                                    content: [
                                        [{ tag: 'strong', content: 'Внимание' }, ' и восприятие окружающего мира.'],
                                        [{ tag: 'strong', content: 'Способность к анализу' }, ', определению свойств и характеристик предметов (цвет, размер, вес, геометрическая форма и назначение).'],
                                        [{ tag: 'strong', content: 'Память' }, '. Сможет запоминать и расставлять по порядку 10 и более предметов.'],
                                        { tag: 'strong', content: 'Логическое мышление.' },
                                        [{ tag: 'strong', content: 'Навыки устного счета' }, ' и математические способности.'],
                                        { tag: 'strong', content: 'Любовь к чтению.' },
                                        [{ tag: 'strong', content: 'Способность к систематизации' }, ': группировке предметов по их свойствам и назначению.'],
                                        [{ tag: 'strong', content: 'Абстрактное мышление' }, '. Выявление закономерностей. Способность к предположениям.'],
                                        [{ tag: 'strong', content: 'Слух' }, '. Восприятие нот, тона и различных музыкальных инструментов.'],
                                        [{ tag: 'strong', content: 'Творческие способности' }, '. Способность создавать что-то новое.'],
                                        [{ tag: 'strong', content: 'Воображение' }, '. Способность оперировать образами и понятиями в уме.']
                                    ].map(function(item) {
                                        return {
                                            elem: 'item',
                                            content: item
                                        };
                                    })
                                },
                                {
                                    tag: 'p',
                                    content: [
                                        'А еще с помощью обучающих приложений и познавательных видео ',
                                        {
                                            tag: 'strong',
                                            content: 'Ваш ребенок узнает'
                                        },
                                        ' много интересного ',
                                        {
                                            tag: 'strong',
                                            content: 'об окружающем мире'
                                        },
                                        ', различных науках, профессиях, освоит полезные навыки и многое другое.'
                                    ]
                                },
                                {
                                    tag: 'p',
                                    content: [
                                        'В Мэджик Десктопе ',
                                        {
                                            tag: 'strong',
                                            content: 'ребенок'
                                        },
                                        ' сможет ',
                                        {
                                            tag: 'strong',
                                            content: 'сам включить'
                                        },
                                        ' и посмотреть ',
                                        {
                                            tag: 'strong',
                                            content: 'любимые мультики'
                                        },
                                        ', такие как Фиксики, Смешарики, Свинка Пеппа и еще более 1000 поучительных мультфильмов.'
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    block: 'heading',
                    mods: { type: 'possibilities' },
                    content: 'Занимаясь в Мэджик Десктопе Ваш ребенок будет уметь:'
                },
                {
                    block: 'section',
                    mix: { block: 'possibilities' },
                    content: [
                        [0, 1, 2].map(function(i) {
                            return {
                                tag: 'a',
                                attrs: { id: i }
                            };
                        }),
                        {
                            block: 'tabbed-pane',
                            content: [
                                {
                                    elem: 'tabs',
                                    content: [
                                        {
                                            elem: 'tab',
                                            elemMods: { state: 'current' },
                                            content: 'К 4 годам'
                                        },
                                        {
                                            elem: 'tab',
                                            content: 'К 7-8 годам'
                                        },
                                        {
                                            elem: 'tab',
                                            content: 'К 11-12 годам'
                                        }
                                    ]
                                },
                                {
                                    elem: 'panes',
                                    content: [
                                        {
                                            elem: 'pane',
                                            elemMods: { state: 'current' },
                                            content: [
                                                buildCarousel(24, 16, true),
                                                {
                                                    block: 'list',
                                                    content: [
                                                        'Самостоятельно пользоваться компьютером: включать, выключать, использовать мышь и клавиатуру;',
                                                        'Называть основные цвета;',
                                                        'Различать геометрические фигуры;',
                                                        'Запоминать и расставлять по порядку 3-4 предмета;',
                                                        'Обобщать предметы по известным свойствам (найти все красные);',
                                                        'Находить отличия предметов (сравнивать две картинки);',
                                                        'Считать до 10;',
                                                        'Сравнивать количество (больше или меньше);',
                                                        'Читать буквы, слоги и правильно произносить составленные из них слова;',
                                                        'Понимать положение предметов относительно себя (справа, слева, в, на, под, за, между, перед, возле и т. д.);',
                                                        'Рисовать геометрические фигуры (круги, квадраты);',
                                                        'Обводить и раскрашивать рисунки;',
                                                        'Перерисовывать картинки. ',
                                                        'Собирать простые пазлы (4 элемента);',
                                                        'Собирать простые фигуры из элементов;',
                                                        'А также получит представление об окружающем мире в соответствии с возрастными интересами.'
                                                    ].map(function(item) {
                                                        return {
                                                            elem: 'item',
                                                            content: item
                                                        };
                                                    })
                                                },
                                                'Установите Мэджик Декстоп прямо сейчас! ',
                                                {
                                                    block: 'link',
                                                    url: 'http://www.magicdesktop.com/ru-RU/Download',
                                                    content: 'Скачать программу'
                                                },
                                                '.'
                                            ]
                                        },
                                        {
                                            elem: 'pane',
                                            content: [
                                                buildCarousel(58, 16),
                                                {
                                                    block: 'list',
                                                    content: [
                                                        'Отправлять и получать электронную почту;',
                                                        'Пользоваться интернетом;',
                                                        'Смешивать краски и получать новые цвета и оттенки;',
                                                        'Различать физические свойства предметов (вес,  длина, высота, и т.п.);',
                                                        'Понимать назначение предметов (посуда, муз. инструменты);',
                                                        'Понимать взаимосвязь размеров и объема;',
                                                        'Запоминать до 4-9 предметов и их порядок;',
                                                        'Видеть связь предметов не только про внешним свойствам (цвета, размер), но и по назначению (посуда, инструменты, рыболовные снасти);',
                                                        'Сравнивать множества предметов и выстраивать их по порядку, по весу, по размеру, и т. д.',
                                                        'Проводить мысленные эксперименты;',
                                                        'Считать до 1 000 000 +',
                                                        'Сладывать и вычитать в пределах 100;',
                                                        'Читать свободно (про себя) и пересказывать тексты до 100 слов;',
                                                        'Менять точку отсчета. Указывать на положение предмета, относительно другого предмета;',
                                                        'Понимать часовое время. Знать дни, недели, месяца, времена года;',
                                                        'Собирать простые пазлы (10-25 элементов);',
                                                        'А также приобретет основы научных знаний. Усвоит определения тех или иных явлений, предметов и понятий;',
                                                        'Получит представление об окружающем мире в соответствии с возрастными интересами.'
                                                    ].map(function(item) {
                                                        return {
                                                            elem: 'item',
                                                            content: item
                                                        };
                                                    })
                                                },
                                                'Установите Мэджик Декстоп прямо сейчас! ',
                                                {
                                                    block: 'link',
                                                    url: 'http://www.magicdesktop.com/ru-RU/Download',
                                                    content: 'Скачать программу'
                                                },
                                                '.'
                                            ]
                                        },
                                        {
                                            elem: 'pane',
                                            content: [
                                                buildCarousel(812, 9),
                                                {
                                                    block: 'list',
                                                    content: [
                                                        'Группировать предметы по качеству их характеристик (более жидкое – менее жидкое);',
                                                        'Запоминать до 7-11 предметов и их порядок;',
                                                        'Применять техники для запоминания;',
                                                        'Абстрактно мыслить, теоретизировать и делать предположения;',
                                                        'Планировать действия;',
                                                        'Уметь ставить себя на чужое место и смотреть на себя со стороны;',
                                                        'Складывать и вычитать в уме 3-х значные числа;',
                                                        'Умножать и делить в уме в пределах 100;',
                                                        'Свободно читать тексты любых объемов и кратко, обобщенно пересказывать;',
                                                        'Составлять сложные предметы из простых, используя разные свойства простых предметов;',
                                                        'Решать головоломки;',
                                                        'Собирать сложные конструкторы;',
                                                        'А также получит представление об окружающем мире в соответствии с возрастными интересами.'
                                                    ].map(function(item) {
                                                        return {
                                                            elem: 'item',
                                                            content: item
                                                        };
                                                    })
                                                },
                                                'Установите Мэджик Декстоп прямо сейчас! ',
                                                {
                                                    block: 'link',
                                                    url: 'http://www.magicdesktop.com/ru-RU/Download',
                                                    content: 'Скачать программу'
                                                },
                                                '.'
                                            ]
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    block: 'heading',
                    mods: { type: 'features' },
                    content: 'Суперспособности Мэджик Десктоп:'
                },
                {
                    block: 'section',
                    mix: { block: 'features' },
                    content: [
                        {
                            elem: 'container',
                            mix: { block: 'clearfix' },
                            content: [
                                {
                                    elem: 'row',
                                    content: [
                                        {
                                            block: 'feature',
                                            content: [
                                                {
                                                    elem: 'heading',
                                                    content: 'Автозапуск'
                                                },
                                                {
                                                    block: 'image',
                                                    url: 'i/autorun.jpg'
                                                },
                                                {
                                                    elem: 'description',
                                                    content: 'Вы можете настроить Мэджик Десктоп так, что бы он сразу загружался при включении компьютера. Ваш ребенок сможет заниматься самостоятельно, не имея доступа к вашим файлам и программам.'
                                                }
                                            ]
                                        },
                                        {
                                            block: 'feature',
                                            content: [
                                                {
                                                    elem: 'heading',
                                                    content: 'Расписание'
                                                },
                                                {
                                                    block: 'image',
                                                    url: 'i/schedule.jpg'
                                                },
                                                {
                                                    elem: 'description',
                                                    content: 'Вы можете установить расписание, когда и сколько ребенок может использовать как компьютер в целом, так и отдельные программы. Ребенок не будет просиживать все время за компьютером, когда Вас нет дома.'
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    elem: 'row',
                                    content: [
                                        {
                                            block: 'feature',
                                            content: [
                                                {
                                                    elem: 'heading',
                                                    content: 'Любимые приложения'
                                                },
                                                {
                                                    block: 'image',
                                                    url: 'i/favorite.jpg'
                                                },
                                                {
                                                    elem: 'description',
                                                    content: 'Вы можете разрешить использование программ установленных Вами в Windows, добавляя их в меню Мэджик Десктопа. К примеру: Skype, любимые игры ребенка и т.п. А также Вы можете разрешать доступ к видео-файлам, мультикам и фильмам. Все будет под Вашим родительским контролем!'
                                                }
                                            ]
                                        },
                                        {
                                            block: 'feature',
                                            content: [
                                                {
                                                    elem: 'heading',
                                                    content: 'Делу — время, потехе — час'
                                                },
                                                {
                                                    block: 'image',
                                                    url: 'i/time.jpg'
                                                },
                                                {
                                                    elem: 'description',
                                                    content: 'Чтобы играть в развлекательные игры ребенку нужно платить монетки, которые он будет получать за занятия в обучающих программах. Также Вы можете начислять ему монетки за выполнение домашних дел. Вы сами можете установить сколько ребенок будет получать монет за использование обучающих программ и цену за использование развлекательных приложений. Это поможет воспитать у ребенка отношение к деньгам. Ребенок поймет, что за удовольствие нужно платить, а деньги зарабатываются трудом.'
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    block: 'heading',
                    mods: { type: 'users' },
                    content: 'Мэджик Десктоп уже в заботливых семьях:'
                },
                {
                    block: 'section',
                    mix: [{ block: 'users' }, { block: 'clearfix' }],
                    content: [
                        // {
                        //     block: 'users',
                        //     elem: 'screens',
                        //     content: [
                        //         {
                        //             block: 'image',
                        //             url: 'i/users.jpg'
                        //         },
                        //         {
                        //             block: 'image',
                        //             url: 'i/users.jpg'
                        //         },
                        //         {
                        //             block: 'image',
                        //             url: 'i/users.jpg'
                        //         },
                        //         {
                        //             block: 'image',
                        //             url: 'i/users.jpg'
                        //         }
                        //     ]
                        // },
                        {
                            block: 'feedback',
                            content: [
                                {
                                    elem: 'item',
                                    content: [
                                        {
                                            block: 'image',
                                            mix: { block: 'feedback', elem: 'avatar' },
                                            url: 'i/H1uxkVFauUc.jpg'
                                        },
                                        {
                                            elem: 'name',
                                            content: 'Наталья Жилина'
                                        },
                                        {
                                            elem: 'message',
                                            content: [
                                                'Программа просто СУПЕР!!!!!!!!!!!!!!!!!!!!!!',
                                                'Ребенок с удовольствием занимается.',
                                                'Сам включает и изучает буквы и цифры. Уже половину алфавита выучила и считаем до 12.',
                                                'В программе можно посмотреть все популярные мультики и ребенок сам их включает и больше не надо рыться в интернете в поисках новой серии.',
                                                'А самое главное что там можно настроить ограничение на использования компьютера, чтобы ребенок не просиживал только за ним.',
                                                'Раньше ребенка с истериками оттаскивали и ребенок все время обижался. А теперь компьютер говорит "я устал" :) и выключается и ребенок спокойно это воспринимает.',
                                                'В общем программа отличная, советую!'
                                            ].join('<br>')
                                        }
                                    ]
                                },
                                {
                                    elem: 'item',
                                    content: [
                                        {
                                            block: 'image',
                                            mix: { block: 'feedback', elem: 'avatar' },
                                            url: 'i/UuM8PxhmZos.jpg'
                                        },
                                        {
                                            elem: 'name',
                                            content: 'Юлия Сорокина'
                                        },
                                        {
                                            elem: 'message',
                                            content: [
                                                'Спасибо что собрали самые отличные (на мой взгляд) программы для развития в одно место.',
                                                'А то времени мало. Весь день работаешь, готовка, уборка, стирка, а чтобы найти хорошие обучающие приложения нужно много времени. Опять же, оставлять ребенка 1 на 1 с интернетом, - черт знает, на что он там напорется, а тут все под контролем и ничего лишнего не видит.'
                                            ].join('<br>')
                                        }
                                    ]
                                },
                                {
                                    elem: 'item',
                                    content: [
                                        {
                                            block: 'image',
                                            mix: { block: 'feedback', elem: 'avatar' },
                                            url: 'i/2mjpf26B5BE.jpg'
                                        },
                                        {
                                            elem: 'name',
                                            content: 'Валентина Данилова'
                                        },
                                        {
                                            elem: 'message',
                                            content: [
                                                'Очень хорошие приложения для обучения чтению по складам и счету.',
                                                'Ребенку нравистя и уже начинает сам читать слова.',
                                                'Считать тоже учится.',
                                                'Самое главное сам занимается, не надо заставлять 👍',
                                                'Советую, темболее по нынешним временам цена - копейки.'
                                            ].join('<br>')
                                        }
                                    ]
                                },
                                {
                                    elem: 'item',
                                    content: [
                                        {
                                            block: 'image',
                                            mix: { block: 'feedback', elem: 'avatar' },
                                            url: 'i/hR82f6JHyz0.jpg'
                                        },
                                        {
                                            elem: 'name',
                                            content: 'Маша Румянцева'
                                        },
                                        {
                                            elem: 'message',
                                            content: [
                                                'Приложение действительно отличное. Жаль у меня небыло такого в детстве.',
                                                'А сейчас дети быстро развиваются и должны соображать быстро, тем более технологии шагают вперед.'
                                            ].join('<br>')
                                        }
                                    ]
                                },
                                {
                                    elem: 'item',
                                    content: [
                                        {
                                            block: 'image',
                                            mix: { block: 'feedback', elem: 'avatar' },
                                            url: 'i/VVCLnDLZfy0.jpg'
                                        },
                                        {
                                            elem: 'name',
                                            content: 'Михаил Свиридов'
                                        },
                                        {
                                            elem: 'message',
                                            content: [
                                                'Крутая программа!',
                                                'Жаль что в моём детстве не было таких.',
                                                'Ребенок занимается с удовольствием и уже выучил половину алфавита, хотя до этого ни в какую не хотел заниматься.',
                                                'Спасибо.'
                                            ].join('<br>')
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            block: 'users',
                            elem: 'description',
                            content: [
                                '<big><strong>80.000.000</strong></big>',
                                'семей по всему миру',
                                ['и ', '<big><strong>1.500.000</strong></big>', ' семей'],
                                '<big>в России</big>',
                                'уже используют',
                                '<big>Мэджик Десктоп</big>',
                                'для развития своих детей.'
                            ].map(function(line) {
                                return [line, { tag: 'br' }];
                            })
                        }
                    ]
                },
                {
                    block: 'section',
                    mix: { block: 'why' },
                    content: 'Дайте своему ребенку возможность идти в ногу со временем, развиваться быстрее сверстников и добиваться большего в жизни!'
                },
                {
                    block: 'section',
                    mix: { block: 'download', js: true },
                    content: [
                        {
                            block: 'download',
                            elem: 'how',
                            content: 'Используйте Мэджик Десктоп!'
                        },
                        {
                            block: 'button',
                            mix: { block: 'download', elem: 'button' },
                            mods: { type: 'link', theme: 'md' },
                            url: 'http://www.magicdesktop.com/ru-RU/Download',
                            text: 'Нажмите сюда<br>для установки<br>Мэджик Десктоп'
                        }
                    ]
                }
            ]
        },
        {
            block: 'section',
            mix: { block: 'footer' },
            content: [
                'Magic Desktop © all rights reserved 2015'
            ]
        },
        {
            block: 'modal',
            mods: { autoclosable : true, theme : 'islands' }
        },
        {
            block: 'metrika'
        }
    ]
};

function buildCarousel(age, imagesNumber, autoInit) {
    return {
        block: 'carousel',
        js: {
            live: !autoInit,
            opts: {
                mode: 'vertical',
                minSlides: 3,
                maxSlides: 3,
                auto: true,
                moveSlides: 1,
                pager: false,
                speed: 500,
                responsive: false,
                touchEnabled: false
            }
        },
        content: Array.apply(null, Array(imagesNumber)).map(function(img, idx) {
            return {
                elem: 'item',
                content: {
                    block: 'link',
                    js: { url: 'i/' + age + '/orig/' + (idx + 1) + '.jpg' },
                    mods: { pseudo: true },
                    content: {
                        block: 'image',
                        url: 'i/' + age + '/preview/' + (idx + 1) + '.jpg'
                    }
                }
            };
        })
    };
}
