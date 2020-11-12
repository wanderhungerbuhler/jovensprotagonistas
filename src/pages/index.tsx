import Image from 'next/image';
import Link from 'next/link';

import { Container, Slider, Content, QuemSomos, Comunidade, Logo } from '@/styles/pages/Home';

export default function Home() {
  return (
    <Container>
      <Logo>
        <Image
          src="/images/logo.svg"
          alt="#Jovens Protagonistas"
          width={300}
          height={100}
        />
      </Logo>

      <ul>
        <li><Link href="#"><a>Quem Somos</a></Link></li>
        <li><Link href="#"><a>Blog</a></Link></li>
        <li><Link href="#"><a>Mentorias</a></Link></li>
        <li><Link href="#"><a>Comunidade</a></Link></li>
      </ul>

      <Slider>
        <h1>
          <span>Liderança.</span>
          <span>Conhecimento.</span>
          <span>Habilidade.</span>
        </h1>
      </Slider>

      <Content>
        <section>
          <article>
            <span>Missão</span>
            <p>
              Segurar nas mãos dos Jovens Protagonistas e montar uma comunidade
              para que eles não se sintam sozinhos durante suas jornadas, e que 
              possam contar com apoio independente da área que queiram protagonizar.
            </p>
          </article>

          <article>
            <span>Visão</span>
            <p>Ser a maior empresa de educação jovem do Brasil até 2023.</p>
          </article>

          <article>
            <span>Valores</span>
            <p>Iniciativa própria, comprometimento com o resultado, trabalho em 
              equipe, transparência de comunicação e honestidade.</p>
          </article>
        </section>

        <QuemSomos id="quemsomos">
          <h1>#Quem Somos</h1>
          <p>
            O movimento Jovens Protagonistas nasceu com o objetivo de inspirar, 
            direcionar e educar jovens a serem protagonistas de suas próprias vidas, 
            e com esse espírito, aplicar em um projeto que traga retorno financeiro 
            e felicidade. Além disso, estarão trabalhando em algo que, verdadeiramente,
            comunica o seu propósito e paixão.
          </p>

          <p>
            Fundada em Abril de 2020 pelo jovem empreendedor @davibraga, o nosso 
            principal objetivo é fazer com que os jovens não estejam sozinhos nas 
            suas jornadas e dar todo o apoio necessário para que esses jovens decolem!
          </p>

          <p>
            O movimento tem o intuito de moldar jovens que farão ativamente parte de 
            processos de mudança e transformação do nosso país em diferentes setores.
            Jovens que tomaram a decisão de não passar pela vida em branco, sem sentido 
            e sem propósito; que serão lembrados por suas grandes realizações.
          </p>

          <p>
            Somos contra uma vida na média; somos contra a visão que os jovens não tem
            potencial; somos contra aqueles que cortam as asas dos jovens e nos impede
            de voar, dizendo também que a idade é um limitador para o sucesso.
          </p>

          <p>
            Nós apoiamos toda a iniciativa jovem que parta dele e não atrapalhe o 
            desenvolvimento acadêmico, psicológico ou social do mesmo.
          </p>

          <p>
            Queremos que os jovens corram riscos e aproveitem oportunidades, 
            aproveitem suas jornadas e colham os resultados dela.
          </p>
        </QuemSomos>

        <Comunidade id="comunidade">
          <div>
            <h1>#Comunidade</h1>
            <p>
              A comunidade de networking foi uma forma que achamos de ajudar os 
              jovens que querem se conectar com outros Jovens Protagonistas.
            </p>

            <p>
              Na prática a comunidade é um chat onde os jovens conversam e trocam 
              aprendizados através de aplicativos de mensagens e com o auxílio de 
              um moderador.
            </p>

            <p>
              As vagas para a comunidade são periódicas, mas se você ficou interessado
              pode entrar na lista de espera.
            </p>
            <a href="#">Formulário de Espera</a>
          </div>
          <Image
            src="/images/icon-youngs.svg"
            alt="#Comunidade"
            width={200}
            height={200}
          />
        </Comunidade>
      </Content>
    </Container>
  )
}
