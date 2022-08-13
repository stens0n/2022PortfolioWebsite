import React from 'react';
import './experience.css';
import {BsPatchCheckFill} from 'react-icons/bs';

const Experience = () => {
  return (
    <section id='experience'>
      <h5>Get To Know</h5>
      <h2>Kyle's Platform</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>The Issues</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
              <a href='#union'>Unions</a>
              </div>
            </article>

            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon"/>
              <div>
              <a href='#green'>Green New Deal</a>
              </div>
            </article>

            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon"/>
              <div>
              <a href='#housing'>Housing Justice</a>
              </div>
            </article>

            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon"/>
              <div>
              <a href='#health'>Medicare For All</a>
              </div>
            </article>

            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon"/>
              <div>
              <a href='#econjustice'>Economic Justice</a>
              </div>
            </article>

            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon"/>
              <div>
              <a href='#education'>Education For All</a>
              </div>
            </article>

            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon"/>
              <div>
              <a href='#seniors'>Seniors</a>
              </div>
            </article>

          </div>

        </div>

        <div className="experience__backend">
          <h3>The Issues</h3>
          <div className="experience__content">

          <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon"/>
              <div>
              <a href='#Equality4All'>Equality For All</a>
              </div>
            </article>

            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon"/>
              <div>
              <a href='#'>Gun Violence</a>
              </div>
            </article>

            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon"/>
              <div>
              <a href='#'>Criminal Justice</a>
              </div>
            </article>

            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon"/>
              <div>
              <a href='#'>Immigrant Rights</a>
              </div>
            </article>

            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon"/>
              <div>
              <a href='#'>Safe Haven Act</a>
              </div>
            </article>

            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon"/>
              <div>
              <a href='#'>Democracy Intergrity</a>
              </div>
            </article>

            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon"/>
              <div>
              <a href='#'>Foreign Policy</a>
              </div>
            </article>

            </div>

        </div>
      </div>
    </section>
  )
}

export default Experience;