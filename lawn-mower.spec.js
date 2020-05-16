import {getMowerFinalPosition} from './lawn-mower';

describe('getMowerFinalPosition', () => {

    test('should render error', () => {
        expect( getMowerFinalPosition("5 5", "6 2 N", "LFLFLFLFF") ).toEqual('Erreur de coordonnées!'); 

    });
    test('should return 1 3 N ', () => {
        expect( getMowerFinalPosition("5 5", "1 2 N", "LFLFLFLFF") ).toEqual('1 3 N'); 
    });

    test('should return 5 1 E', () => {
        expect( getMowerFinalPosition("5 5", "3 3 E", "FFRFFRFRRF") ).toEqual('5 1 E'); 

    });
});