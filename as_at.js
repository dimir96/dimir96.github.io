!function () {
	"use strict";
	Lampa.SettingsApi.addParam({
		component: "interface",
		param: {
			name: "logo_glav",
			type: "select",
			values: { 1: "Скрыть", 0: "Отображать" },
			default: "0"
		},
		field: {
			name: "Логотипы вместо названий",
			description: "Отображает логотипы фильмов вместо текста"
		}
	});

	if (!window.logoplugin) {
		window.logoplugin = !0;
		Lampa.Listener.follow("full", function (a) {
			if (a.type == "complite" && Lampa.Storage.get("logo_glav") != "1") {
				var e = a.data.movie;
				var o = Lampa.TMDB.api(
					(e.name ? "tv" : "movie") + "/" + e.id + "/images?api_key=" + Lampa.TMDB.key() + "&language=" + Lampa.Storage.get("language")
				);
				$.get(o, function (a) {
					if (a.logos && a.logos[0]) {
						var e = a.logos[0].file_path;
						if (e != "") {
							$(".full-start-new__title").html(
								'<img style="margin-top: 5px; max-height: 300px; max-width: 400px;" src="' + Lampa.TMDB.image("/t/p/w300" + e.replace(".svg", ".png")) + '" />'
							);
						}
					}

				});
			}
		});
	}
}();