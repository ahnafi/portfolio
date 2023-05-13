import CardPort from "./card/CardPort"
import foto01 from '../assets/portfolio/portfolio.jpg'
import foto1 from '../assets/portfolio/foto1.jpg'
import foto2 from '../assets/portfolio/Anfa Portfolio.jpg'
import foto3 from '../assets/portfolio/filmbiasa.jpg'
import foto4 from '../assets/portfolio/katabijak.png'
import foto5 from '../assets/portfolio/doadoa.png'
import foto6 from '../assets/portfolio/mvreact.jpg'

function Portfolio(){
    return (
      <section id="portfolio" className="pb-36 pt-32 bg-slate-100">
      <div className="container">
        <div className="w-full px-4">
          <div className="max-w-xl text-center mx-auto mb-16">
            <h4 className="font-semibold text-xl lg:text-3xl text-dark mb-2">Portfolio</h4>
            <h2 className="font-bold text-3xl text-dark mb-4">Project yang pernah saya buat</h2>
            <p className="font-medium font-serif text-md text-dark">
            ini bukanlah projek terbaik di dunia ,jauh dari kata sempurna .Saya hanya manusia biasa yang mencoba belajar.
            </p>
          </div>
        </div>

        <div className="flex flex-wrap">
          
          <CardPort 
          img={foto01}
          title="My Portfolio"
          parag="website portfolio sekarang"
          url="#"  
            />
          <CardPort 
          img={foto1}
          title="old Portfolio"
          parag="website portfolio lama saya, dibuat dengan html css boostsrap"
          url="https://ahnafi.github.io/newfolio"  
            />
          <CardPort 
          img={foto2}
          title="Anfa Portfolio latihan"
          parag="website portfolio latihan dari tim Anfa dibuat dengan html css boostsrap"
          url="https://ahnafi.github.io/anfaportfolio/"  
            />
          <CardPort 
          img={foto3}
          title="Pencari Detail film"
          parag="website pencari film dengan API dari omdb API ,Jquery ,html ,boostsrap "
          url="https://ahnafi.github.io/cariFilmPublicAPI"  
            />
          <CardPort 
          img={foto4}
          title="Website Kata Kata Bijak"
          parag="Cari Kata bijak di website saya ini, terdapat fakta ,dan joke bapak bapak"
          url="https://ahnafi.github.io/kumpulankatakatabijak"  
            />
          <CardPort 
          img={foto5}
          title="Website Doa Doa sehari hari"
          parag="Kumpulan Doa sehari hari "
          url="https://ahnafi.github.io/kumpulankatakatabijak"  
            />
          <CardPort 
          img={foto6}
          title="cari info film"
          parag="website dibuat dengan reactjs untuk latihan"
          url="https://ahnafi.github.io/mvreactapp/"  
            />
        </div>
      </div>
    </section>
    )
}
export default Portfolio