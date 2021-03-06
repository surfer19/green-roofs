
import React from "react"
import { useTranslation } from "react-i18next";
import MapLegendRowInfo from '../MapLegendRowInfo';
import MapLegendRow from "../MapLegendRow";
import { getDataByCategoryType } from "./utils"
import { IMapLegendNewProps } from "../../types";

const MapLegend: React.FC <IMapLegendNewProps> = ({
	legendList,
	showPopupsInfoMessage
}) => {
	const { t } = useTranslation();
	return (
		<div className="legend">
			{legendList.map((legendType :any, i) => {
				let categoryData = getDataByCategoryType(legendType, t);
				return <MapLegendRow categoryData={categoryData} key={i}/>;
			})}
			{showPopupsInfoMessage ? 
				<div>
					<MapLegendRowInfo tooltipLabelText="Klikni na budovu" tooltipText={t('map.legend.after-click')}/>
					<MapLegendRowInfo tooltipLabelText="Najeď myší na budovu" tooltipText={t('map.legend.after-hover')}/>
				</div>
			: null}
		</div>
	)
}

export default MapLegend;

