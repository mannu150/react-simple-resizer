import React from 'react';
import PropTypes from 'prop-types';

const Props = ({props}) => {
	return (
		<table className="props">
			<thead>
				<tr>
					<th>Name</th>
					<th>Description</th>
					<th>Type</th>
					<th>Default</th>
					<th>Required</th>
				</tr>
			</thead>
			<tbody>
				{
				Object.keys(props).map(key => {
					return (
					<tr key={key}>
						<td width="20%">{key}</td>
						<td width="50%">{props[key].description}</td>
						<td width="10%">{props[key].type.name}</td>
						<td width="10%">{props[key].defaultValue && props[key].defaultValue.value}</td>
						<td width="10%">{props[key].required && "X"}</td>
					</tr>
					);
				})
				}
			</tbody>
		</table>
	)
}

Props.propTypes = {
  props: PropTypes.object.isRequired
};

export default Props;