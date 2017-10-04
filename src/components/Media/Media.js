import React, { Component} from 'react';
import Paper from 'material-ui/Paper';
import './css/font-awesome.css';
import './css/font-awesome.min.css';
import './css/materialize-social.css';
import './css/materialize.css';
import './css/materialize.min.css';
import './css/style.css';

class Media extends Component {

	render() {
    var newsfeed = {
      position: 'absolute',
      top: '100vh',
      marginRight: '5em',
      marginLeft: '5em',
      marginTop: '3em'
    };
		return (
      <div className='mediaAll'>
        <div className='mediaHeader valign-wrapper' id='header'>
          <div className='media-bg'></div>
          <h2>Waterloop in the Media</h2>
        </div>
        <div style={newsfeed}>
          <div className='row'>
            <div className='col s12 m8'>
              <div className='card large hoverable'>
                <div className='card-image'>
                  <img src='http://assets.inhabitat.com/wp-content/blogs.dir/1/files/2016/10/Waterloop-Goose-X-exterior-cropped.jpg'></img>
                  <span className='card-title'>BlogTO: Waterloo Students Want to Reinvent Travel</span>
                </div>
                <div className='card-content'>
                  <p>The Hyperloop is one of the most groundbreaking transportation concepts to surface in the last few years, and a university near
                    Toronto hopes to design one of its first iterations, as the push to bring this futuristic technology to realization increases
                    from Elon Musks SpaceX company, the contemporary force behind the idea.</p>
                </div>
                <div className='card-action'>
                  <a href='http://www.blogto.com/tech/2016/11/waterloo_students_want_to_reinvent_travel_between_toronto_and_montreal/'>Learn More</a>
                  <a className='waves-effect waves-light btn-floating social facebook widget-spacing'><i className='fa fa-facebook'></i></a>
                  <a className='waves-effect waves-light btn-floating social twitter widget-spacing'><i className='fa fa-twitter'></i></a>
                  <a className='waves-effect waves-light btn-floating social instagram widget-spacing'><i className='fa fa-instagram'></i></a>
                </div>
              </div>
            </div>
            <div className='col s12 m4'>
              <div className='card large hoverable'>
                <div className='card-image'>
                  <img src='http://static3.businessinsider.com/image/5760193b52bcd026008c90b3-1190-625/the-hyperloop-competition-here-are-the-transportation-pods-of-the-future-being-built-right-now.jpg'></img>
                  <span className='card-title'>Times: See the Futuristic Pods That Could Change How We Travel</span>
                </div>
                <div className='card-content'>
                  <p>More than 1,000 students gathered at Texas A&M University on the weekend to compete in SpaceXs Hyperloop pod competition. </p>
                </div>
                <div className='card-action'>
                  <a href='http://time.com/4207248/hyperloop-pod-design-competition/'>Learn More</a>
                  <a className='waves-effect waves-light btn-floating social facebook widget-spacing'><i className='fa fa-facebook'></i></a>
                  <a className='waves-effect waves-light btn-floating social twitter widget-spacing'><i className='fa fa-twitter'></i></a>
                  <a className='waves-effect waves-light btn-floating social instagram widget-spacing'><i className='fa fa-instagram'></i></a>
                </div>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col s12 m4'>
              <div className='card large hoverable'>
                <div className='card-image'>
                  <img src='http://i.huffpost.com/gen/4514266/thumbs/o-WATERLOOP-570.jpg'></img>
                  <span className='card-title'>HuffPost: Hyperloop Pod Design By Waterloo Students To Be Tested Next Month</span>
                </div>
                <div className='card-content'>
                  <p>A team of whiz kids from the University of Waterloo are heading to California to test a pod that could form part of a new, high-speed train in the coming years.</p>
                </div>
                <div className='card-action'>
                  <a href='http://www.huffingtonpost.ca/2016/07/14/hyperloop-pod-design-waterloo_n_11001594.html'>Learn More</a>
                  <a className='waves-effect waves-light btn-floating social facebook widget-spacing'><i className='fa fa-facebook'></i></a>
                  <a className='waves-effect waves-light btn-floating social twitter widget-spacing'><i className='fa fa-twitter'></i></a>
                  <a className='waves-effect waves-light btn-floating social instagram widget-spacing'><i className='fa fa-instagram'></i></a>
                </div>
              </div>
            </div>
            <div className='col s12 m4'>
              <div className='card large hoverable'>
                <div className='card-image'>
                  <img src='http://static4.businessinsider.com/image/588b76e6713ba11e008b4f43-800/screen%20shot%202017-01-27%20at%20113517%20am.png'></img>
                  <span className='card-title'>Elon Musks Hyperloop contest is happening this weekend</span>
                </div>
                <div className='card-content'>
                  <p>This weekend, though, will mark the first time anyone gets to see the Hyperloop pods in action. </p>
                </div>
                <div className='card-action'>
                  <a href='http://www.businessinsider.com/spacex-hyperloop-competitions-teams-2017-1'>Learn More</a>
                  <a className='waves-effect waves-light btn-floating social facebook widget-spacing'><i className='fa fa-facebook'></i></a>
                  <a className='waves-effect waves-light btn-floating social twitter widget-spacing'><i className='fa fa-twitter'></i></a>
                  <a className='waves-effect waves-light btn-floating social instagram widget-spacing'><i className='fa fa-instagram'></i></a>
                </div>
              </div>
            </div>
            <div className='col s12 m4'>
              <div className='card large hoverable'>
                <div className='card-image'>
                  <img src='https://www.psfk.com/wp-content/uploads/2016/04/12419309_429376137265051_5453737755329657289_o.jpg'></img>
                  <span className='card-title'>PSFK: Applying Minimalist Design To The Hyperloop Concept</span>
                </div>
                <div className='card-content'>
                  <p>The Hyperloop concept is speeding closer to development as scientists and researchers increase their efforts to develop the high speed train.</p>
                </div>
                <div className='card-action'>
                  <a href='https://www.psfk.com/2016/04/applying-minimalist-design-to-the-hyperloop-concept.html'>Learn More</a>
                  <a className='waves-effect waves-light btn-floating social facebook widget-spacing'><i className='fa fa-facebook'></i></a>
                  <a className='waves-effect waves-light btn-floating social twitter widget-spacing'><i className='fa fa-twitter'></i></a>
                  <a className='waves-effect waves-light btn-floating social instagram widget-spacing'><i className='fa fa-instagram'></i></a>
                </div>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col s12 m12'>
              <div className='card large hoverable'>
                <div className='card-image'>
                  <img src='http://assets.inhabitat.com/wp-content/blogs.dir/1/files/2016/10/Waterloop-Goose-X-exterior-cropped.jpg'></img>
                  <span className='card-title'>BlogTO: Waterloo Students Want to Reinvent Travel</span>
                </div>
                <div className='card-content'>
                  <p>The Hyperloop is one of the most groundbreaking transportation concepts to surface in the last few years, and a university near
                    Toronto hopes to design one of its first iterations, as the push to bring this futuristic technology to realization increases
                    from Elon Musks SpaceX company, the contemporary force behind the idea.</p>
                </div>
                <div className='card-action'>
                  <a href='http://www.blogto.com/tech/2016/11/waterloo_students_want_to_reinvent_travel_between_toronto_and_montreal/'>Learn More</a>
                  <a className='waves-effect waves-light btn-floating social facebook widget-spacing'><i className='fa fa-facebook'></i></a>
                  <a className='waves-effect waves-light btn-floating social twitter widget-spacing'><i className='fa fa-twitter'></i></a>
                  <a className='waves-effect waves-light btn-floating social instagram widget-spacing'><i className='fa fa-instagram'></i></a>
                </div>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col s12 m4'>
              <div className='card large hoverable'>
                <div className='card-image'>
                  <img src='http://d3bem67vv0tpdp.cloudfront.net/wp-content/uploads/2016/11/waterloop-demo-1.jpeg'></img>
                  <span className='card-title'>Communitech: Waterloop demo dazzles</span>
                </div>
                <div className='card-content'>
                  <p>The Waterloo team is one of 22 remaining entrants from an initial competition involving 1,200 teams.</p>
                </div>
                <div className='card-action'>
                  <a href='http://news.communitech.ca/news/waterloop-demo-dazzles-as-uw-students-set-out-to-transform-travel/'>Learn More</a>
                  <a className='waves-effect waves-light btn-floating social facebook widget-spacing'><i className='fa fa-facebook'></i></a>
                  <a className='waves-effect waves-light btn-floating social twitter widget-spacing'><i className='fa fa-twitter'></i></a>
                  <a className='waves-effect waves-light btn-floating social instagram widget-spacing'><i className='fa fa-instagram'></i></a>
                </div>
              </div>
            </div>
            <div className='col s12 m8'>
              <div className='card large hoverable'>
                <div className='card-image'>
                  <img src='http://static3.businessinsider.com/image/5760193b52bcd026008c90b3-1190-625/the-hyperloop-competition-here-are-the-transportation-pods-of-the-future-being-built-right-now.jpg'></img>
                  <span className='card-title'>Times: See the Futuristic Pods That Could Change How We Travel</span>
                </div>
                <div className='card-content'>
                  <p >More than 1,000 students gathered at Texas A&M University on the weekend to compete in SpaceXs Hyperloop pod competition. </p>
                </div>
                <div className='card-action'>
                  <a href='http://time.com/4207248/hyperloop-pod-design-competition/'>Learn More</a>
                  <a className='waves-effect waves-light btn-floating social facebook widget-spacing'><i className='fa fa-facebook'></i></a>
                  <a className='waves-effect waves-light btn-floating social twitter widget-spacing'><i className='fa fa-twitter'></i></a>
                  <a className='waves-effect waves-light btn-floating social instagram widget-spacing'><i className='fa fa-instagram'></i></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

		);

	}
}

export default Media;
