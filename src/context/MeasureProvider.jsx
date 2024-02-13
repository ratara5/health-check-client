import {useContext, useState} from 'react'
import {MeasureContext} from './MeasureContext'
import {getMeasuresRequest} from '../api/measures.api'


export const useMeasures = () => {
    const context = useContext(MeasureContext);
    if(context===undefined){
        throw new Error('useMeasures must be used with a MeasureContextProvider');
    }
    return context;
}

export const MeasureContextProvider = ({children}) => {

    const [measures, setMeasures] = useState([]);

    const loadMeasures = async (typeId, userId) => {
        try {
            const response = await getMeasuresRequest(typeId, userId);
            console.log(response.data);
            setMeasures(response.data);
        } catch (error) {
            console.log(error)
        }
        
    }

    return (
        <MeasureContext.Provider 
        value={{measures, loadMeasures}}>
            {children}
        </MeasureContext.Provider>
    );

};