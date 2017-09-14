import React, { Component } from 'react';

export default class DisciplineList extends Component {

  renderItems() {
    return (
      <div className="discipline-content">
        { 
          this.props.disciplines.map((discipline) => {
            return (
              <div className="col-md-3 col-sm-6" key={discipline.id}>
                <a href={'/' + discipline.slug} className="discipline-item" >
                  <div className={ discipline.highlight ? 'title bonus' : 'title' }>
                    <h2>{discipline.name}</h2>
                  </div>
                  <div className="description">
                    <img src={'/assets_new/images/professores/logged/' + discipline.image}  className="img-circle"/>
                    <p>Prof. <br />{discipline.teacher}</p>
                    <span><i className="fa fa-arrow-circle-o-right"></i></span>
                  </div>
                  <div className="progress">
                    <span>{discipline.percentage}%</span>  
                    <div className="progress-bar" style={{ width: discipline.percentage + '%'}}></div>
                  </div>
                </a>
              </div>
            );
          })
        }
      </div>
    );
  }

  render() {
    return (
      <section className="discipline-container">
        {this.renderItems()}
      </section>
    );
  }
}


