montageDefine("49c9e31","ui/main.reel/main.html",{text:'<!DOCTYPE html><html><head>\n    <meta http-equiv=Content-Type content="text/html; charset=utf-8">\n    <link rel=stylesheet type=text/css href=main.css>\n    <script type=text/montage-serialization>{"owner":{"properties":{"element":{"#":"owner"},"mainContent":{"#":"mainContent"}}},"categories":{"prototype":"ui/categories.reel","properties":{"element":{"#":"categories"}},"bindings":{"categories":{"<-":"@owner.moviesService.categories"}}},"details":{"prototype":"ui/details.reel","properties":{"element":{"#":"details"}},"bindings":{"movie":{"<-":"@moviestrip.categoryContentController.selection.one()"}}},"moviestrip":{"prototype":"ui/moviestrip.reel","properties":{"element":{"#":"moviestrip"},"movieDetails":{"@":"details"}},"bindings":{"categoryContentController":{"<-":"@owner.moviesService.categories.selection.one().contentController"}}},"player":{"prototype":"ui/player.reel","properties":{"element":{"#":"player"}}}}</script>\n</head>\n<body>\n    <div data-montage-id=owner class=Main>\n        <img class=logo src=../../assets/image/logo.png alt=logo>\n        <div data-montage-id=categories></div>\n        <div data-montage-id=mainContent class=Main-content>\n            <div data-montage-id=moviestrip class=Main-strip>\n\n            </div>\n            <div data-montage-id=details class=Main-details></div>\n        </div>\n        <a class=MontageMade href=http://montagejs.org>\n            Made with Montage\n        </a>\n        <div data-montage-id=player class=popup></div>\n    </div>\n\n\n</body></html>'});