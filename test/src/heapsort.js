import ava from 'ava' ;

import * as spec from "@aureooms/js-in-situ-sort-spec" ;
import * as heapsort from "../../src" ;

spec.test( ava , [
    [ "heapsort (unary)", heapsort.dary( 1 ) ],
    [ "heapsort (binary)", heapsort.dary( 2 ) ],
    [ "heapsort (ternary)", heapsort.dary( 3 ) ],
    [ "heapsort (4-ary)", heapsort.dary( 4 ) ],
    [ "heapsort (5-ary)", heapsort.dary( 5 ) ]
] ) ;
