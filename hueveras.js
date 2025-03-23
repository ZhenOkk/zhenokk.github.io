
	let canvas_w = 800;
	let canvas_h = 450;
	let counter = 60;

			let config = {
			width: canvas_w,
			height: canvas_h,
			scene: {
				preload: precarga,
				create: crea,
				update: actualiza
			}
		};

		let game = new Phaser.Game(config);
			
		let rect;
		let cursors;
		let huevera_b, huevera_m, huevera_d;
		let huevo_b, huevo_m, huevo_d;
		let paja_b, paja_m, paja_d;

		function precarga ()
		{
			this.load.image('huevera', 'huevera.png');
			this.load.image('huevo', 'huevo.png');
			this.load.image('paja', 'paja.png');
			this.load.image('granja', 'granja.png');

			this.load.audio('background_music', 'audio/donko_music.mp3');
		}
			
		function crea ()
		{
			rect = this.add.rectangle(400, 225, 32, 32, 0xffffff);  
			cursors = this.input.keyboard.createCursorKeys();
				
				//Añadir el fondo:
			granja = this.add.image(400, 225, 'granja').setDisplaySize(canvas_w, canvas_h);
				
				//Crear la paja:				
			paja_b = this.add.image(200, 100, 'paja');
			paja_b.setScale(.1);
			paja_m = this.add.image(200, 200, 'paja');
			paja_m.setScale(.1);
			paja_d = this.add.image(200, 300, 'paja');
			paja_d.setScale(.1);

				//Crear hueveras:
			huevera_b = this.add.image(200, 100, 'huevera');
			huevera_b.setScale(.1);

			huevera_m = this.add.image(200, 300, 'huevera');
			huevera_m.setScale(.1);
			huevera_m.setTint (Phaser.Display.Color.GetColor (192, 128, 16));
				
			huevera_d = this.add.image(200, 200, 'huevera');
			huevera_d.setScale(.1);
			huevera_d.setTint (Phaser.Display.Color.GetColor (0, 255, 0));

				//Crear huevos:
			huevo_b = this.add.image(600, 100, 'huevo');
			huevo_b.setScale(.1);

			huevo_m = this.add.image(600, 300, 'huevo');
			huevo_m.setScale(.1);
			huevo_m.setTint (Phaser.Display.Color.GetColor (192, 168, 16));				

			huevo_d = this.add.image(600, 200, 'huevo');
			huevo_d.setScale(.1);
			huevo_d.setTint (Phaser.Display.Color.GetColor (0, 255, 0));
			
				//Crear contador:
			contador = this.add.text(20, 10, counter, {"fontSize": 48, "fontStyle": "bold"});

				//Interacciones de Huevos:
			huevo_b.setInteractive({ draggable: true });
			huevo_b.on('pointerdown', function () {
				console.log("Huevo Blanco Clickado");
				this.setScale(.12);
			});

			huevo_m.setInteractive({ draggable: true });
			huevo_m.setInteractive();
			huevo_m.on('pointerdown', function () {
				console.log("Huevo Amarillo Clickado");
				this.setScale(.12);
			});
				
			huevo_d.setInteractive({ draggable: true });
			huevo_d.setInteractive();
			huevo_d.on('pointerdown', function () {
			console.log("Huevo Verde Clickado");
				this.setScale(.12);
			});

			this.input.on('drag', function (pointer, object, x, y) {
				object.x = x;
				object.y = y;

				if (Phaser.Geom.Intersects.RectangleToRectangle(huevera_m.getBounds(), object.getBounds())){
					console.log("Huevo dentro de Huevera!!!");
				};
			});

			this.input.on('dragend', function (pointer, object, x, y) {
				object.setScale(.1);
			});
		}

let intervalo_contador;
intervalo_contador = setInterval(function (){
	counter--;
	if (counter <= 0){
		console.log("Game Over");
		clearInterval(intervalo_contador);
	}
	contador.setText(counter);
}, 1000);

		function actualiza ()
		{
			if (cursors.left.isDown)
			{
				rect.x -= 2.5;
			}
			else if (cursors.right.isDown)
			{
				rect.x += 2.5;
			}
				
			if (cursors.up.isDown)
			{
				rect.y -= 2.5;
			}
			else if (cursors.down.isDown)
			{
				rect.y += 2.5;
			}
				
			rect.x = Phaser.Math.Clamp(rect.x, 0, canvas_w);
			rect.y = Phaser.Math.Clamp(rect.y, 0, canvas_h);
		}

