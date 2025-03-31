import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavBarComponent } from '../../components/nav-bar/nav-bar.component';
import { CommonModule } from '@angular/common';

interface Chapter {
  id: number;
  title: string;
  date: string;
  read: boolean;
  url: string;
}

@Component({
  selector: 'app-serie',
  standalone: true,
  imports: [NavBarComponent, CommonModule],
  templateUrl: './serie.component.html',
  styleUrls: ['./serie.component.css'],
})
export class SerieComponent implements OnInit {
  comic = {
    title: 'Me hice cargo de la Academia con un solo cuchillo de sashimi',
    year: 2018,
    imageUrl:
      'https://dashboard.olympusbiblioteca.com/storage/comics/covers/1407/30-xl.webp',
    synopsis:
      '"‘Si lo tocas, te cortaré.’ Yo, que solía ser llamado el mejor espadachín del país, terminé en un juego móvil en el que solo he gastado algo de dinero. ¡Y recibí la bendición del ‘Dios de la Espada’...!"',
    genres: ['Acción', 'Fantasia', 'Seinen', 'Vida Escolar', 'Drama'],
    chapters: [
      {
        id: 1,
        title: 'Capítulo 1',
        date: '2024-03-01',
        read: false,
        url: 'https://olympusbiblioteca.com/capitulo/99600/comic-me-hice-cargo-de-la-academia-con-un-solo-cuchillo-de-sashimi',
      },
      {
        id: 2,
        title: 'Capítulo 2',
        date: '2024-03-05',
        read: false,
        url: '/capitulo/2',
      },
      {
        id: 3,
        title: 'Capítulo 3',
        date: '2024-03-10',
        read: false,
        url: '/capitulo/3',
      },
    ],
  };

  constructor(private router: Router) {}

  ngOnInit() {
    this.loadReadChapters(); // Carga los capítulos leídos desde el localStorage al inicializar el componente
  }

  loadReadChapters() {
    // Recupera los capítulos leídos desde el localStorage y marca los capítulos correspondientes
    const readChapters = JSON.parse(
      localStorage.getItem('readChapters') || '[]'
    );

    this.comic.chapters.forEach((chapter) => {
      if (readChapters.includes(chapter.id)) {
        chapter.read = true; // Marca como leído el capítulo si está en localStorage
      }
    });
  }

  readAndGoToChapter(chapter: Chapter) {
    // Marca un capítulo como leído, guarda el estado en localStorage y redirige a la URL del capítulo
    chapter.read = true;
    console.log(`Capítulo marcado como leído: ${chapter.title}`);

    this.saveReadChapter(chapter); // Guarda el estado de leído en localStorage

    // Redirige según la URL del capítulo, ya sea interna o externa
    if (chapter.url.startsWith('http')) {
      window.location.href = chapter.url; // Redirige a una URL externa
    } else {
      this.router.navigate([chapter.url]); // Redirige a una URL interna
    }
  }

  saveReadChapter(chapter: Chapter) {
    // Guarda el capítulo leído en localStorage para que persista en futuras visitas
    let readChapters = JSON.parse(localStorage.getItem('readChapters') || '[]');

    if (!readChapters.includes(chapter.id)) {
      readChapters.push(chapter.id); // Añade el capítulo si no está en la lista
      localStorage.setItem('readChapters', JSON.stringify(readChapters)); // Guarda en localStorage
    }
  }

  likeComic() {
    console.log('Te gusta este cómic.'); // Función para "me gusta", solo log para ejemplo
  }

  dislikeComic() {
    console.log('No te gusta este cómic.'); // Función para "no me gusta", solo log para ejemplo
  }

  addToFavorites() {
    console.log('Cómic agregado a favoritos.'); // Función para agregar a favoritos, solo log para ejemplo
  }

  goToFirstChapter() {
    // Redirige al primer capítulo y marca como leído
    if (this.comic.chapters.length > 0) {
      const firstChapter = this.comic.chapters[0];
      firstChapter.read = true; // Marca el primer capítulo como leído
      this.saveReadChapter(firstChapter); // Guarda el estado de leído en localStorage

      console.log(`Navegando al primer capítulo: ${firstChapter.title}`);
      window.location.href = firstChapter.url; // Redirige a la URL del primer capítulo
    }
  }
}
