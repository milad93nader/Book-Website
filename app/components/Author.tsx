import React from 'react';
import Pray from "../assets/pexels-photo-1904769.jpeg";
import Image from 'next/image';
const Author: React.FC = () => {
   return (
<>
<section className="section-1">
      <div className="container text-center">
        <div className="row">
          <div className="col-md-6 col-12">
            <div className="pray">
              <Image src={Pray.src} width={600} height={500} alt="Pray" className="" />
            </div>
          </div>
          <div className="col-md-6 col-12">
            <div className="panel text-left">
              <h1>Mr. Devid Smith</h1>
              <p className="pt-4">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere iure adipisci harum ducimus accusantium, repudiandae aperiam
                voluptatum, id ex ratione omnis reiciendis possimus officiis.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi vitae, tenetur quidem eum aliquid vel labore sint placeat
                ad deserunt consectetur fugit ullam. Eius unde neque ducimus obcaecati ipsum quos vero totam recusandae hic
                expedita nemo sit, illum harum. Quisquam impedit ullam itaque facere et ad molestiae quod reprehenderit excepturi!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>


</>
   );
    };

    export default Author;