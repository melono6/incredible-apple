import React from 'react';
import _ from 'lodash';

import components, {Layout} from '../components/index';
import Algoliablock from '../components/AlgoliaBlock/AlgoliaBlock';

export default class Advanced extends React.Component {
    render() {
        return (
            <Layout {...this.props}>
            {_.map(_.get(this.props, 'page.sections', null), (section, section_idx) => {
                let component = _.upperFirst(_.camelCase(_.get(section, 'type', null)));
                console.log(component);
                if (!component || !components[component]) {
                    return <div>Component not found</div>;
                }

                let Component = components[component];
                
                return (
                  <Component key={section_idx} {...this.props} section={section} site={this.props} />
                )
            })}
            </Layout>
        );
    }
}
