data = {
    "apps" : [
        {"name":"Bazarr","url":"subs.example.com","icon":"message-video", "target": "_blank"},
        {"name":"CloudCMD","url":"files.example.com","icon":"folder-multiple-outline"},
        {"name":"Cockpit","url":"cp.example.com","icon":"airplane"},
        {"name":"Feedbin","url":"rss.example.com","icon":"rss"},
        {"name":"Filestash","url":"cloud.example.com","icon":"package"},
        {"name":"Jackett","url":"jackett.example.com","icon":"tshirt-crew-outline"},
        {"name":"Lidarr","url":"music.example.com","icon":"music"},
        {"name":"Minio","url":"minio.example.com","icon":"server"},
        {"name":"Mylar","url":"comics.example.com","icon":"book-open-variant"},
        {"name":"Nextcloud","url":"cloud.example.com","icon":"weather-cloudy"},
        {"name":"Ombi","url":"request.example.com","icon":"file-find-outline"},
        {"name":"Pi-hole","url":"pihole.example.com","icon":"do-not-disturb"},
        {"name":"Plex","url":"play.example.com","icon":"plex"},
        {"name":"Portainer","url":"port1.example.com","icon":"docker"},
        {"name":"Radarr","url":"movies.example.com","icon":"filmstrip"},
        {"name":"Sonarr","url":"tv.example.com","icon":"television-box"},
        {"name":"Stackedit","url":"md.example.com","icon":"markdown"},
        {"name":"Transmission","url":"dl.example.com","icon":"progress-download"},
        {"name":"Ubooquity","url":"opds.example.com","icon":"library-shelves"},
        {"name":"Youtube-DL","url":"yt.example.com","icon":"youtube"}
    ],
    "bookmarks" : [
        {
        "category": "Communicate",
        "links": [
            {
            "name": "Discord",
            "url": "https://discord.com"
            },
            {
            "name": "Gmail",
            "url": "http://gmail.com"
            },
            {
            "name": "Slack",
            "url": "https://slack.com/signin",
            "target": "_blank"
            }
        ]
        },
        {
        "category": "Cloud",
        "links": [
            {
            "name": "Box",
            "url": "https://box.com",
            "target": "sui"
            },
            {
            "name": "Dropbox",
            "url": "https://dropbox.com",
            "target": "sui"
            },
            {
            "name": "Drive",
            "url": "https://drive.google.com"
            }
        ]
        },
        {
        "category": "Design",
        "links": [
            {
            "name": "Awwwards",
            "url": "https://awwwards.com"
            },
            {
            "name": "Dribbble",
            "url": "https://dribbble.com"
            },
            {
            "name": "Muz.li",
            "url": "https://medium.muz.li/"
            }
        ]
        },
        {
        "category": "Dev",
        "links": [
            {
            "name": "Codepen",
            "url": "https://codepen.io/"
            },
            {
            "name": "Devdocs",
            "url": "https://devdocs.io"
            },
            {
            "name": "Devhints",
            "url": "https://devhints.io"
            }
        ]
        },
        {
        "category": "Lifestyle",
        "links": [
            {
            "name": "Design Milk",
            "url": "https://design-milk.com/category/interior-design/"
            },
            {
            "name": "Dwell",
            "url": "https://www.dwell.com/"
            },
            {
            "name": "Freshome",
            "url": "https://www.mymove.com/freshome/"
            }
        ]
        },
        {
        "category": "Media",
        "links": [
            {
            "name": "Spotify",
            "url": "http://browse.spotify.com"
            },
            {
            "name": "Trakt",
            "url": "http://trakt.tv"
            },
            {
            "name": "YouTube",
            "url": "https://youtube.com/feed/subscriptions"
            }
        ]
        },
        {
        "category": "Reading",
        "links": [
            {
            "name": "Instapaper",
            "url": "https://www.instapaper.com/u"
            },
            {
            "name": "Medium",
            "url": "http://medium.com"
            },
            {
            "name": "Reddit",
            "url": "http://reddit.com"
            }
        ]
        },
        {
        "category": "Tech",
        "links": [
            {
            "name": "TheNextWeb",
            "url": "https://thenextweb.com/"
            },
            {
            "name": "The Verge",
            "url": "https://theverge.com/"
            },
            {
            "name": "MIT Technology Review",
            "url": "https://www.technologyreview.com/"
            }
        ]
        }
    ],
    "providers" : [
        {"name":"Allmusic","url":"https://www.allmusic.com/search/all/","prefix":"/a"},
        {"name":"Discogs","url":"https://www.discogs.com/search/?q=","prefix":"/di"},
        {"name":"Duck Duck Go","url":"https://duckduckgo.com/?q=","prefix":"/d"},
        {"name":"iMDB","url":"https://www.imdb.com/find?q=","prefix":"/i"},
        {"name":"TheMovieDB","url":"https://www.themoviedb.org/search?query=","prefix":"/m"},
        {"name":"Reddit","url":"https://www.reddit.com/search?q=","prefix":"/r"},
        {"name":"Qwant","url":"https://www.qwant.com/?q=","prefix":"/q"},
        {"name":"Soundcloud","url":"https://soundcloud.com/search?q=","prefix":"/so"},
        {"name":"Spotify","url":"https://open.spotify.com/search/results/","prefix":"/s"},
        {"name":"TheTVDB","url":"https://www.thetvdb.com/search?query=","prefix":"/tv"},
        {"name":"Trakt","url":"https://trakt.tv/search?query=","prefix":"/t"}
    ]
}

function render(name) {
    const mysource = document.getElementById(name + '-template').innerHTML;
    const mytemplate = Handlebars.compile(mysource);
    const myresult = mytemplate(data);
    document.getElementById(name).innerHTML = myresult;
}

document.addEventListener('DOMContentLoaded', () => {
    render('apps');
    render('links');
    render('providers');
});
