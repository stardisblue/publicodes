import Explanation from '../Explanation'
import { InfixMecanism } from './common'
import { formatValue, serializeUnit } from 'publicodes'

export default function MecanismUnité({ nodeValue, explanation, unit }) {
	if (explanation.nodeKind === 'constant') {
		return formatValue({ nodeValue, unit })
	} else if (explanation.nodeKind === 'reference') {
		return (
			<>
				<Explanation node={explanation} />
				&nbsp;{serializeUnit(unit)}
			</>
		)
	} else {
		return (
			<InfixMecanism value={explanation}>
				<p>
					<strong>Unité : </strong>
					{serializeUnit(unit)}
				</p>
			</InfixMecanism>
		)
	}
}
