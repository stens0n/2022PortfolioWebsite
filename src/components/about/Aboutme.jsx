import React from 'react';
import './about.css';
import ME from '../../assets/KDavis2.png';
import {FaAward} from 'react-icons/fa';
import {FiUsers} from 'react-icons/fi';
import {VscFolderLibrary} from 'react-icons/vsc';

const AboutMe = () => {
  return (
    <section id='about'>
        <h5>Get To Know</h5>
        <h2>Kyle Davis</h2>

        <div className="container about__container">
          <div className="about__me">
            <div className="about__me-image">
              <img src={ME} alt='About Image' />
            </div>
          </div>

          <div className="about__content">
            <div className="about__cards">
              <article className="about__card">
                <FaAward className="about__icon"/>
                <h5>Birthplace</h5>
                <small>Cambridge, MA</small>
              </article>

              <article className="about__card">
                <FiUsers className="about__icon"/>
                <h5>Funded By</h5>
                <small>The Working Class - Not corporate PACs</small>
              </article>
            </div>

            <p>
                 Kyle Davis was born and raised in Massachusetts in a mixed family with two moms, two brothers and two 
                 sisters as the middle child. 
                 Kyle's family members shared with him the experiences of being part of different 
                 oppressed minority groups including a grandmother who was an 
                 immigrant from Curacao and  a Jewish grandfather 
                 whose family members were killed in the Holocaust.  Kyle's 
                 ancestry also includes Mexican, Indigenous and European heritage. 

                 <br></br>
                 <br></br>
                 Coming of age as a gay man in a society 
                 with so much injustice sparked a passion for equality 
                 very early on in life.

                 <br></br>
                 <br></br>
                 After high school, Kyle pursued a career as a recording artist and performer for several years while keeping day jobs such as waitering 
                and delivering for Grubhub. Traveling around the country as a struggling artist and tipped-worker and talking to all different types 
                of Americans along the way only furthered his belief in the need for radical change in the country.

                <br></br>
                <br></br>
                He became more active in 
                organizing, marching and speaking out on social media. When Kyle witnessed the rise of leaders like Alexandria Ocasio Cortez 
                and Cori Bush, he realized that not only was fundamental change possible but it could be achieved by regular working people. 
                "This is exactly what the Senate needs; more members of the working class, more servers, more rideshare drivers. "
            </p>

            <p>
                In his bid for state senate, Kyle won't be taking a dime of corporate PAC money and promises to fight for a bold 
                platform that transforms life for the working class and upends systems of racism and oppression. 
                The North Shore deserves nothing less.
            </p>


            <a href='https://secure.actblue.com/donate/kyledavis'
            className='btn btn-primary'>
              Donate
            </a>
          </div>
        </div>
    </section>
  )
}

export default AboutMe