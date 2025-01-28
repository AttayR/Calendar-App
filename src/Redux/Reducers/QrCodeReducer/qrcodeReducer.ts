import { QR_SCAN_SUCESS, QR_SCAN_FAILURE } from '../../constants/qrConstants';

interface QrCodeState {
    scannedData: string | null;
    error: string | null;
}

const initialState: QrCodeState = {
    scannedData: null,
    error: null,
};

export const qrCodeReducer = (state = initialState,action: any): QrCodeState => {
    switch (action.type) {
        case QR_SCAN_SUCESS:
            return {
                ...state,
                scannedData:action.payload,
                error:null,
            };
        case QR_SCAN_FAILURE:
            return {
                ...state,
                scannedData: null,
                error:action.payload,
            };
            default:
                return state;
    }
};

