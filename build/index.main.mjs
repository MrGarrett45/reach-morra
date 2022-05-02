// Automatically generated with Reach 0.1.9 (fa243a96)
/* eslint-disable */
export const _version = '0.1.9';
export const _versionHash = '0.1.9 (fa243a96)';
export const _backendVersion = 11;

export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getEvents(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Digest;
  
  return {
    infos: {
      },
    views: {
      1: [ctc0, ctc1, ctc1],
      5: [ctc0, ctc1, ctc0, ctc1, ctc1],
      7: [ctc0, ctc1, ctc0, ctc1, ctc2, ctc1],
      9: [ctc0, ctc1, ctc0, ctc1, ctc2, ctc2, ctc1],
      11: [ctc0, ctc1, ctc0, ctc1, ctc2, ctc2, ctc1, ctc1],
      13: [ctc0, ctc1, ctc0, ctc1, ctc2, ctc2, ctc1, ctc1, ctc1],
      15: [ctc0, ctc1, ctc0, ctc1, ctc2, ctc1, ctc1, ctc1, ctc1],
      17: [ctc0, ctc1, ctc0, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1]
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Tuple([]);
  return {
    mapDataTy: ctc0
    };
  };
export async function Alice(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Alice expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Alice expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Null;
  const ctc2 = stdlib.T_Tuple([ctc0, ctc0]);
  const ctc3 = stdlib.T_Digest;
  const ctc4 = stdlib.T_Address;
  
  
  const v501 = stdlib.protect(ctc0, interact.wager, 'for Alice\'s interact field wager');
  
  const txn1 = await (ctc.sendrecv({
    args: [v501],
    evt_cnt: 1,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:79:9:dot', stdlib.UInt_max, 0),
    onlyIf: true,
    out_tys: [ctc0],
    pay: [v501, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v505], secs: v507, time: v506, didSend: v71, from: v504 } = txn1;
      
      sim_r.txns.push({
        amt: v505,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      const v516 = stdlib.add(v506, stdlib.checkedBigNumberify('./index.rsh:67:18:decimal', stdlib.UInt_max, 30));
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v505], secs: v507, time: v506, didSend: v71, from: v504 } = txn1;
  ;
  const v516 = stdlib.add(v506, stdlib.checkedBigNumberify('./index.rsh:67:18:decimal', stdlib.UInt_max, 30));
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 0,
    funcNum: 1,
    out_tys: [],
    timeoutAt: ['time', v516],
    waitIfNotPresent: false
    }));
  if (txn2.didTimeout) {
    const txn3 = await (ctc.sendrecv({
      args: [v504, v505, v516],
      evt_cnt: 0,
      funcNum: 2,
      lct: v506,
      onlyIf: true,
      out_tys: [],
      pay: [stdlib.checkedBigNumberify('reach standard library:189:11:decimal', stdlib.UInt_max, 0), []],
      sim_p: (async (txn3) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [], secs: v808, time: v807, didSend: v446, from: v806 } = txn3;
        
        ;
        sim_r.txns.push({
          amt: v505,
          kind: 'from',
          to: v504,
          tok: undefined /* Nothing */
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        
        return sim_r;
        }),
      soloSend: false,
      timeoutAt: undefined /* mto */,
      tys: [ctc4, ctc0, ctc0],
      waitIfNotPresent: false
      }));
    const {data: [], secs: v808, time: v807, didSend: v446, from: v806 } = txn3;
    ;
    ;
    stdlib.protect(ctc1, await interact.informTimeout(), {
      at: './index.rsh:76:35:application',
      fs: ['at ./index.rsh:75:15:application call to [unknown function] (defined at: ./index.rsh:75:27:function exp)', 'at reach standard library:192:8:application call to "after" (defined at: ./index.rsh:74:34:function exp)', 'at ./index.rsh:86:55:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
      msg: 'informTimeout',
      who: 'Alice'
      });
    
    return;
    
    }
  else {
    const {data: [], secs: v522, time: v521, didSend: v80, from: v520 } = txn2;
    const v524 = stdlib.add(v505, v505);
    ;
    let v525 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1);
    let v526 = v521;
    let v533 = v524;
    
    while (await (async () => {
      const v541 = stdlib.eq(v525, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1));
      
      return v541;})()) {
      const v548 = stdlib.add(v526, stdlib.checkedBigNumberify('./index.rsh:67:18:decimal', stdlib.UInt_max, 30));
      const v552 = stdlib.protect(ctc0, await interact.getFingers(), {
        at: './index.rsh:93:48:application',
        fs: ['at ./index.rsh:92:15:application call to [unknown function] (defined at: ./index.rsh:92:19:function exp)'],
        msg: 'getFingers',
        who: 'Alice'
        });
      const v553 = stdlib.protect(ctc0, await interact.getGuess(v552), {
        at: './index.rsh:94:44:application',
        fs: ['at ./index.rsh:92:15:application call to [unknown function] (defined at: ./index.rsh:92:19:function exp)'],
        msg: 'getGuess',
        who: 'Alice'
        });
      stdlib.protect(ctc1, await interact.log(v552), {
        at: './index.rsh:95:23:application',
        fs: ['at ./index.rsh:92:15:application call to [unknown function] (defined at: ./index.rsh:92:19:function exp)'],
        msg: 'log',
        who: 'Alice'
        });
      const v554 = stdlib.protect(ctc0, await interact.random(), {
        at: 'reach standard library:53:31:application',
        fs: ['at ./index.rsh:97:52:application call to "makeCommitment" (defined at: reach standard library:52:8:function exp)', 'at ./index.rsh:92:15:application call to [unknown function] (defined at: ./index.rsh:92:19:function exp)'],
        msg: 'random',
        who: 'Alice'
        });
      const v555 = stdlib.digest(ctc2, [v554, v552]);
      const v557 = stdlib.protect(ctc0, await interact.random(), {
        at: 'reach standard library:53:31:application',
        fs: ['at ./index.rsh:99:62:application call to "makeCommitment" (defined at: reach standard library:52:8:function exp)', 'at ./index.rsh:92:15:application call to [unknown function] (defined at: ./index.rsh:92:19:function exp)'],
        msg: 'random',
        who: 'Alice'
        });
      const v558 = stdlib.digest(ctc2, [v557, v553]);
      
      const txn3 = await (ctc.sendrecv({
        args: [v504, v505, v520, v533, v548, v555],
        evt_cnt: 1,
        funcNum: 4,
        lct: v526,
        onlyIf: true,
        out_tys: [ctc3],
        pay: [stdlib.checkedBigNumberify('./index.rsh:103:11:decimal', stdlib.UInt_max, 0), []],
        sim_p: (async (txn3) => {
          const sim_r = { txns: [], mapRefs: [], maps: [] };
          let sim_txn_ctr = stdlib.UInt_max;
          const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
          
          
          const {data: [v561], secs: v563, time: v562, didSend: v111, from: v560 } = txn3;
          
          ;
          const v564 = stdlib.addressEq(v504, v560);
          ;
          const v571 = stdlib.add(v562, stdlib.checkedBigNumberify('./index.rsh:67:18:decimal', stdlib.UInt_max, 30));
          sim_r.isHalt = false;
          
          return sim_r;
          }),
        soloSend: true,
        timeoutAt: ['time', v548],
        tys: [ctc4, ctc0, ctc4, ctc0, ctc0, ctc3],
        waitIfNotPresent: false
        }));
      if (txn3.didTimeout) {
        const txn4 = await (ctc.sendrecv({
          args: [v504, v505, v520, v533, v548],
          evt_cnt: 0,
          funcNum: 5,
          lct: v526,
          onlyIf: true,
          out_tys: [],
          pay: [stdlib.checkedBigNumberify('reach standard library:189:11:decimal', stdlib.UInt_max, 0), []],
          sim_p: (async (txn4) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            let sim_txn_ctr = stdlib.UInt_max;
            const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
            
            
            const {data: [], secs: v774, time: v773, didSend: v397, from: v772 } = txn4;
            
            ;
            const v775 = stdlib.addressEq(v504, v772);
            const v776 = stdlib.addressEq(v520, v772);
            const v777 = v775 ? true : v776;
            ;
            sim_r.txns.push({
              amt: v533,
              kind: 'from',
              to: v520,
              tok: undefined /* Nothing */
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            
            return sim_r;
            }),
          soloSend: false,
          timeoutAt: undefined /* mto */,
          tys: [ctc4, ctc0, ctc4, ctc0, ctc0],
          waitIfNotPresent: false
          }));
        const {data: [], secs: v774, time: v773, didSend: v397, from: v772 } = txn4;
        ;
        const v775 = stdlib.addressEq(v504, v772);
        const v776 = stdlib.addressEq(v520, v772);
        const v777 = v775 ? true : v776;
        stdlib.assert(v777, {
          at: 'reach standard library:189:11:dot',
          fs: ['at ./index.rsh:104:57:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
          msg: 'sender correct',
          who: 'Alice'
          });
        ;
        stdlib.protect(ctc1, await interact.informTimeout(), {
          at: './index.rsh:76:35:application',
          fs: ['at ./index.rsh:75:15:application call to [unknown function] (defined at: ./index.rsh:75:27:function exp)', 'at reach standard library:192:8:application call to "after" (defined at: ./index.rsh:74:34:function exp)', 'at ./index.rsh:104:57:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
          msg: 'informTimeout',
          who: 'Alice'
          });
        
        return;
        
        }
      else {
        const {data: [v561], secs: v563, time: v562, didSend: v111, from: v560 } = txn3;
        ;
        const v564 = stdlib.addressEq(v504, v560);
        stdlib.assert(v564, {
          at: './index.rsh:103:11:dot',
          fs: [],
          msg: 'sender correct',
          who: 'Alice'
          });
        const v571 = stdlib.add(v562, stdlib.checkedBigNumberify('./index.rsh:67:18:decimal', stdlib.UInt_max, 30));
        const txn4 = await (ctc.sendrecv({
          args: [v504, v505, v520, v533, v561, v571, v558],
          evt_cnt: 1,
          funcNum: 6,
          lct: v562,
          onlyIf: true,
          out_tys: [ctc3],
          pay: [stdlib.checkedBigNumberify('./index.rsh:107:11:decimal', stdlib.UInt_max, 0), []],
          sim_p: (async (txn4) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            let sim_txn_ctr = stdlib.UInt_max;
            const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
            
            
            const {data: [v574], secs: v576, time: v575, didSend: v117, from: v573 } = txn4;
            
            ;
            const v577 = stdlib.addressEq(v504, v573);
            ;
            const v584 = stdlib.add(v575, stdlib.checkedBigNumberify('./index.rsh:67:18:decimal', stdlib.UInt_max, 30));
            sim_r.isHalt = false;
            
            return sim_r;
            }),
          soloSend: true,
          timeoutAt: ['time', v571],
          tys: [ctc4, ctc0, ctc4, ctc0, ctc3, ctc0, ctc3],
          waitIfNotPresent: false
          }));
        if (txn4.didTimeout) {
          const txn5 = await (ctc.sendrecv({
            args: [v504, v505, v520, v533, v561, v571],
            evt_cnt: 0,
            funcNum: 7,
            lct: v562,
            onlyIf: true,
            out_tys: [],
            pay: [stdlib.checkedBigNumberify('reach standard library:189:11:decimal', stdlib.UInt_max, 0), []],
            sim_p: (async (txn5) => {
              const sim_r = { txns: [], mapRefs: [], maps: [] };
              let sim_txn_ctr = stdlib.UInt_max;
              const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
              
              
              const {data: [], secs: v756, time: v755, didSend: v363, from: v754 } = txn5;
              
              ;
              const v757 = stdlib.addressEq(v504, v754);
              const v758 = stdlib.addressEq(v520, v754);
              const v759 = v757 ? true : v758;
              ;
              sim_r.txns.push({
                amt: v533,
                kind: 'from',
                to: v520,
                tok: undefined /* Nothing */
                });
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined /* Nothing */
                })
              sim_r.isHalt = true;
              
              return sim_r;
              }),
            soloSend: false,
            timeoutAt: undefined /* mto */,
            tys: [ctc4, ctc0, ctc4, ctc0, ctc3, ctc0],
            waitIfNotPresent: false
            }));
          const {data: [], secs: v756, time: v755, didSend: v363, from: v754 } = txn5;
          ;
          const v757 = stdlib.addressEq(v504, v754);
          const v758 = stdlib.addressEq(v520, v754);
          const v759 = v757 ? true : v758;
          stdlib.assert(v759, {
            at: 'reach standard library:189:11:dot',
            fs: ['at ./index.rsh:108:57:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
            msg: 'sender correct',
            who: 'Alice'
            });
          ;
          stdlib.protect(ctc1, await interact.informTimeout(), {
            at: './index.rsh:76:35:application',
            fs: ['at ./index.rsh:75:15:application call to [unknown function] (defined at: ./index.rsh:75:27:function exp)', 'at reach standard library:192:8:application call to "after" (defined at: ./index.rsh:74:34:function exp)', 'at ./index.rsh:108:57:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
            msg: 'informTimeout',
            who: 'Alice'
            });
          
          return;
          
          }
        else {
          const {data: [v574], secs: v576, time: v575, didSend: v117, from: v573 } = txn4;
          ;
          const v577 = stdlib.addressEq(v504, v573);
          stdlib.assert(v577, {
            at: './index.rsh:107:11:dot',
            fs: [],
            msg: 'sender correct',
            who: 'Alice'
            });
          const v584 = stdlib.add(v575, stdlib.checkedBigNumberify('./index.rsh:67:18:decimal', stdlib.UInt_max, 30));
          const txn5 = await (ctc.recv({
            didSend: false,
            evt_cnt: 1,
            funcNum: 8,
            out_tys: [ctc0],
            timeoutAt: ['time', v584],
            waitIfNotPresent: false
            }));
          if (txn5.didTimeout) {
            const txn6 = await (ctc.sendrecv({
              args: [v504, v505, v520, v533, v561, v574, v584],
              evt_cnt: 0,
              funcNum: 9,
              lct: v575,
              onlyIf: true,
              out_tys: [],
              pay: [stdlib.checkedBigNumberify('reach standard library:189:11:decimal', stdlib.UInt_max, 0), []],
              sim_p: (async (txn6) => {
                const sim_r = { txns: [], mapRefs: [], maps: [] };
                let sim_txn_ctr = stdlib.UInt_max;
                const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
                
                
                const {data: [], secs: v738, time: v737, didSend: v329, from: v736 } = txn6;
                
                ;
                const v739 = stdlib.addressEq(v504, v736);
                const v740 = stdlib.addressEq(v520, v736);
                const v741 = v739 ? true : v740;
                ;
                sim_r.txns.push({
                  amt: v533,
                  kind: 'from',
                  to: v504,
                  tok: undefined /* Nothing */
                  });
                sim_r.txns.push({
                  kind: 'halt',
                  tok: undefined /* Nothing */
                  })
                sim_r.isHalt = true;
                
                return sim_r;
                }),
              soloSend: false,
              timeoutAt: undefined /* mto */,
              tys: [ctc4, ctc0, ctc4, ctc0, ctc3, ctc3, ctc0],
              waitIfNotPresent: false
              }));
            const {data: [], secs: v738, time: v737, didSend: v329, from: v736 } = txn6;
            ;
            const v739 = stdlib.addressEq(v504, v736);
            const v740 = stdlib.addressEq(v520, v736);
            const v741 = v739 ? true : v740;
            stdlib.assert(v741, {
              at: 'reach standard library:189:11:dot',
              fs: ['at ./index.rsh:124:57:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
              msg: 'sender correct',
              who: 'Alice'
              });
            ;
            stdlib.protect(ctc1, await interact.informTimeout(), {
              at: './index.rsh:76:35:application',
              fs: ['at ./index.rsh:75:15:application call to [unknown function] (defined at: ./index.rsh:75:27:function exp)', 'at reach standard library:192:8:application call to "after" (defined at: ./index.rsh:74:34:function exp)', 'at ./index.rsh:124:57:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
              msg: 'informTimeout',
              who: 'Alice'
              });
            
            return;
            
            }
          else {
            const {data: [v591], secs: v593, time: v592, didSend: v128, from: v590 } = txn5;
            ;
            const v594 = stdlib.addressEq(v520, v590);
            stdlib.assert(v594, {
              at: './index.rsh:123:11:dot',
              fs: [],
              msg: 'sender correct',
              who: 'Alice'
              });
            const v601 = stdlib.add(v592, stdlib.checkedBigNumberify('./index.rsh:67:18:decimal', stdlib.UInt_max, 30));
            const txn6 = await (ctc.recv({
              didSend: false,
              evt_cnt: 1,
              funcNum: 10,
              out_tys: [ctc0],
              timeoutAt: ['time', v601],
              waitIfNotPresent: false
              }));
            if (txn6.didTimeout) {
              const txn7 = await (ctc.sendrecv({
                args: [v504, v505, v520, v533, v561, v574, v591, v601],
                evt_cnt: 0,
                funcNum: 11,
                lct: v592,
                onlyIf: true,
                out_tys: [],
                pay: [stdlib.checkedBigNumberify('reach standard library:189:11:decimal', stdlib.UInt_max, 0), []],
                sim_p: (async (txn7) => {
                  const sim_r = { txns: [], mapRefs: [], maps: [] };
                  let sim_txn_ctr = stdlib.UInt_max;
                  const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
                  
                  
                  const {data: [], secs: v720, time: v719, didSend: v295, from: v718 } = txn7;
                  
                  ;
                  const v721 = stdlib.addressEq(v504, v718);
                  const v722 = stdlib.addressEq(v520, v718);
                  const v723 = v721 ? true : v722;
                  ;
                  sim_r.txns.push({
                    amt: v533,
                    kind: 'from',
                    to: v504,
                    tok: undefined /* Nothing */
                    });
                  sim_r.txns.push({
                    kind: 'halt',
                    tok: undefined /* Nothing */
                    })
                  sim_r.isHalt = true;
                  
                  return sim_r;
                  }),
                soloSend: false,
                timeoutAt: undefined /* mto */,
                tys: [ctc4, ctc0, ctc4, ctc0, ctc3, ctc3, ctc0, ctc0],
                waitIfNotPresent: false
                }));
              const {data: [], secs: v720, time: v719, didSend: v295, from: v718 } = txn7;
              ;
              const v721 = stdlib.addressEq(v504, v718);
              const v722 = stdlib.addressEq(v520, v718);
              const v723 = v721 ? true : v722;
              stdlib.assert(v723, {
                at: 'reach standard library:189:11:dot',
                fs: ['at ./index.rsh:127:57:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
                msg: 'sender correct',
                who: 'Alice'
                });
              ;
              stdlib.protect(ctc1, await interact.informTimeout(), {
                at: './index.rsh:76:35:application',
                fs: ['at ./index.rsh:75:15:application call to [unknown function] (defined at: ./index.rsh:75:27:function exp)', 'at reach standard library:192:8:application call to "after" (defined at: ./index.rsh:74:34:function exp)', 'at ./index.rsh:127:57:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
                msg: 'informTimeout',
                who: 'Alice'
                });
              
              return;
              
              }
            else {
              const {data: [v604], secs: v606, time: v605, didSend: v134, from: v603 } = txn6;
              ;
              const v607 = stdlib.addressEq(v520, v603);
              stdlib.assert(v607, {
                at: './index.rsh:126:11:dot',
                fs: [],
                msg: 'sender correct',
                who: 'Alice'
                });
              const v614 = stdlib.add(v605, stdlib.checkedBigNumberify('./index.rsh:67:18:decimal', stdlib.UInt_max, 30));
              const txn7 = await (ctc.sendrecv({
                args: [v504, v505, v520, v533, v561, v574, v591, v604, v614, v554, v552],
                evt_cnt: 2,
                funcNum: 12,
                lct: v605,
                onlyIf: true,
                out_tys: [ctc0, ctc0],
                pay: [stdlib.checkedBigNumberify('./index.rsh:136:11:decimal', stdlib.UInt_max, 0), []],
                sim_p: (async (txn7) => {
                  const sim_r = { txns: [], mapRefs: [], maps: [] };
                  let sim_txn_ctr = stdlib.UInt_max;
                  const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
                  
                  
                  const {data: [v619, v620], secs: v622, time: v621, didSend: v144, from: v618 } = txn7;
                  
                  ;
                  const v623 = stdlib.addressEq(v504, v618);
                  ;
                  const v624 = stdlib.digest(ctc2, [v619, v620]);
                  const v625 = stdlib.digestEq(v561, v624);
                  ;
                  const v632 = stdlib.add(v621, stdlib.checkedBigNumberify('./index.rsh:67:18:decimal', stdlib.UInt_max, 30));
                  sim_r.isHalt = false;
                  
                  return sim_r;
                  }),
                soloSend: true,
                timeoutAt: ['time', v614],
                tys: [ctc4, ctc0, ctc4, ctc0, ctc3, ctc3, ctc0, ctc0, ctc0, ctc0, ctc0],
                waitIfNotPresent: false
                }));
              if (txn7.didTimeout) {
                const txn8 = await (ctc.sendrecv({
                  args: [v504, v505, v520, v533, v561, v574, v591, v604, v614],
                  evt_cnt: 0,
                  funcNum: 13,
                  lct: v605,
                  onlyIf: true,
                  out_tys: [],
                  pay: [stdlib.checkedBigNumberify('reach standard library:189:11:decimal', stdlib.UInt_max, 0), []],
                  sim_p: (async (txn8) => {
                    const sim_r = { txns: [], mapRefs: [], maps: [] };
                    let sim_txn_ctr = stdlib.UInt_max;
                    const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
                    
                    
                    const {data: [], secs: v702, time: v701, didSend: v261, from: v700 } = txn8;
                    
                    ;
                    const v703 = stdlib.addressEq(v504, v700);
                    const v704 = stdlib.addressEq(v520, v700);
                    const v705 = v703 ? true : v704;
                    ;
                    sim_r.txns.push({
                      amt: v533,
                      kind: 'from',
                      to: v520,
                      tok: undefined /* Nothing */
                      });
                    sim_r.txns.push({
                      kind: 'halt',
                      tok: undefined /* Nothing */
                      })
                    sim_r.isHalt = true;
                    
                    return sim_r;
                    }),
                  soloSend: false,
                  timeoutAt: undefined /* mto */,
                  tys: [ctc4, ctc0, ctc4, ctc0, ctc3, ctc3, ctc0, ctc0, ctc0],
                  waitIfNotPresent: false
                  }));
                const {data: [], secs: v702, time: v701, didSend: v261, from: v700 } = txn8;
                ;
                const v703 = stdlib.addressEq(v504, v700);
                const v704 = stdlib.addressEq(v520, v700);
                const v705 = v703 ? true : v704;
                stdlib.assert(v705, {
                  at: 'reach standard library:189:11:dot',
                  fs: ['at ./index.rsh:137:57:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
                  msg: 'sender correct',
                  who: 'Alice'
                  });
                ;
                stdlib.protect(ctc1, await interact.informTimeout(), {
                  at: './index.rsh:76:35:application',
                  fs: ['at ./index.rsh:75:15:application call to [unknown function] (defined at: ./index.rsh:75:27:function exp)', 'at reach standard library:192:8:application call to "after" (defined at: ./index.rsh:74:34:function exp)', 'at ./index.rsh:137:57:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
                  msg: 'informTimeout',
                  who: 'Alice'
                  });
                
                return;
                
                }
              else {
                const {data: [v619, v620], secs: v622, time: v621, didSend: v144, from: v618 } = txn7;
                ;
                const v623 = stdlib.addressEq(v504, v618);
                stdlib.assert(v623, {
                  at: './index.rsh:136:11:dot',
                  fs: [],
                  msg: 'sender correct',
                  who: 'Alice'
                  });
                const v624 = stdlib.digest(ctc2, [v619, v620]);
                const v625 = stdlib.digestEq(v561, v624);
                stdlib.assert(v625, {
                  at: 'reach standard library:58:17:application',
                  fs: ['at ./index.rsh:138:24:application call to "checkCommitment" (defined at: reach standard library:57:8:function exp)'],
                  msg: null,
                  who: 'Alice'
                  });
                const v632 = stdlib.add(v621, stdlib.checkedBigNumberify('./index.rsh:67:18:decimal', stdlib.UInt_max, 30));
                const txn8 = await (ctc.sendrecv({
                  args: [v504, v505, v520, v533, v574, v591, v604, v620, v632, v557, v553],
                  evt_cnt: 2,
                  funcNum: 14,
                  lct: v621,
                  onlyIf: true,
                  out_tys: [ctc0, ctc0],
                  pay: [stdlib.checkedBigNumberify('./index.rsh:141:11:decimal', stdlib.UInt_max, 0), []],
                  sim_p: (async (txn8) => {
                    const sim_r = { txns: [], mapRefs: [], maps: [] };
                    let sim_txn_ctr = stdlib.UInt_max;
                    const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
                    
                    
                    const {data: [v635, v636], secs: v638, time: v637, didSend: v154, from: v634 } = txn8;
                    
                    ;
                    const v639 = stdlib.addressEq(v504, v634);
                    ;
                    const v640 = stdlib.digest(ctc2, [v635, v636]);
                    const v641 = stdlib.digestEq(v574, v640);
                    ;
                    const v648 = stdlib.add(v637, stdlib.checkedBigNumberify('./index.rsh:67:18:decimal', stdlib.UInt_max, 30));
                    sim_r.isHalt = false;
                    
                    return sim_r;
                    }),
                  soloSend: true,
                  timeoutAt: ['time', v632],
                  tys: [ctc4, ctc0, ctc4, ctc0, ctc3, ctc0, ctc0, ctc0, ctc0, ctc0, ctc0],
                  waitIfNotPresent: false
                  }));
                if (txn8.didTimeout) {
                  const txn9 = await (ctc.sendrecv({
                    args: [v504, v505, v520, v533, v574, v591, v604, v620, v632],
                    evt_cnt: 0,
                    funcNum: 15,
                    lct: v621,
                    onlyIf: true,
                    out_tys: [],
                    pay: [stdlib.checkedBigNumberify('reach standard library:189:11:decimal', stdlib.UInt_max, 0), []],
                    sim_p: (async (txn9) => {
                      const sim_r = { txns: [], mapRefs: [], maps: [] };
                      let sim_txn_ctr = stdlib.UInt_max;
                      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
                      
                      
                      const {data: [], secs: v684, time: v683, didSend: v227, from: v682 } = txn9;
                      
                      ;
                      const v685 = stdlib.addressEq(v504, v682);
                      const v686 = stdlib.addressEq(v520, v682);
                      const v687 = v685 ? true : v686;
                      ;
                      sim_r.txns.push({
                        amt: v533,
                        kind: 'from',
                        to: v520,
                        tok: undefined /* Nothing */
                        });
                      sim_r.txns.push({
                        kind: 'halt',
                        tok: undefined /* Nothing */
                        })
                      sim_r.isHalt = true;
                      
                      return sim_r;
                      }),
                    soloSend: false,
                    timeoutAt: undefined /* mto */,
                    tys: [ctc4, ctc0, ctc4, ctc0, ctc3, ctc0, ctc0, ctc0, ctc0],
                    waitIfNotPresent: false
                    }));
                  const {data: [], secs: v684, time: v683, didSend: v227, from: v682 } = txn9;
                  ;
                  const v685 = stdlib.addressEq(v504, v682);
                  const v686 = stdlib.addressEq(v520, v682);
                  const v687 = v685 ? true : v686;
                  stdlib.assert(v687, {
                    at: 'reach standard library:189:11:dot',
                    fs: ['at ./index.rsh:142:55:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
                    msg: 'sender correct',
                    who: 'Alice'
                    });
                  ;
                  stdlib.protect(ctc1, await interact.informTimeout(), {
                    at: './index.rsh:76:35:application',
                    fs: ['at ./index.rsh:75:15:application call to [unknown function] (defined at: ./index.rsh:75:27:function exp)', 'at reach standard library:192:8:application call to "after" (defined at: ./index.rsh:74:34:function exp)', 'at ./index.rsh:142:55:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
                    msg: 'informTimeout',
                    who: 'Alice'
                    });
                  
                  return;
                  
                  }
                else {
                  const {data: [v635, v636], secs: v638, time: v637, didSend: v154, from: v634 } = txn8;
                  ;
                  const v639 = stdlib.addressEq(v504, v634);
                  stdlib.assert(v639, {
                    at: './index.rsh:141:11:dot',
                    fs: [],
                    msg: 'sender correct',
                    who: 'Alice'
                    });
                  const v640 = stdlib.digest(ctc2, [v635, v636]);
                  const v641 = stdlib.digestEq(v574, v640);
                  stdlib.assert(v641, {
                    at: 'reach standard library:58:17:application',
                    fs: ['at ./index.rsh:143:24:application call to "checkCommitment" (defined at: reach standard library:57:8:function exp)'],
                    msg: null,
                    who: 'Alice'
                    });
                  const v648 = stdlib.add(v637, stdlib.checkedBigNumberify('./index.rsh:67:18:decimal', stdlib.UInt_max, 30));
                  const v652 = stdlib.add(v620, v591);
                  stdlib.protect(ctc1, await interact.seeWinning(v652), {
                    at: './index.rsh:149:30:application',
                    fs: ['at ./index.rsh:147:15:application call to [unknown function] (defined at: ./index.rsh:147:19:function exp)'],
                    msg: 'seeWinning',
                    who: 'Alice'
                    });
                  
                  const txn9 = await (ctc.sendrecv({
                    args: [v504, v505, v520, v533, v591, v604, v620, v636, v648, v652],
                    evt_cnt: 1,
                    funcNum: 16,
                    lct: v637,
                    onlyIf: true,
                    out_tys: [ctc0],
                    pay: [stdlib.checkedBigNumberify('./index.rsh:152:11:decimal', stdlib.UInt_max, 0), []],
                    sim_p: (async (txn9) => {
                      const sim_r = { txns: [], mapRefs: [], maps: [] };
                      let sim_txn_ctr = stdlib.UInt_max;
                      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
                      
                      
                      const {data: [v654], secs: v656, time: v655, didSend: v167, from: v653 } = txn9;
                      
                      ;
                      const v657 = stdlib.addressEq(v504, v653);
                      ;
                      let v658;
                      const v659 = stdlib.eq(v636, v604);
                      if (v659) {
                        v658 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1);
                        }
                      else {
                        const v660 = stdlib.add(v620, v591);
                        const v661 = stdlib.eq(v660, v636);
                        if (v661) {
                          v658 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 2);
                          }
                        else {
                          const v663 = stdlib.eq(v660, v604);
                          if (v663) {
                            v658 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 0);
                            }
                          else {
                            v658 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1);
                            }
                          }
                        }
                      const cv525 = v658;
                      const cv526 = v655;
                      const cv533 = v533;
                      
                      await (async () => {
                        const v525 = cv525;
                        const v526 = cv526;
                        const v533 = cv533;
                        
                        if (await (async () => {
                          const v541 = stdlib.eq(v525, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1));
                          
                          return v541;})()) {
                          const v548 = stdlib.add(v526, stdlib.checkedBigNumberify('./index.rsh:67:18:decimal', stdlib.UInt_max, 30));
                          sim_r.isHalt = false;
                          }
                        else {
                          const v790 = stdlib.eq(v525, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 2));
                          const v793 = stdlib.mul(stdlib.checkedBigNumberify('./index.rsh:161:16:decimal', stdlib.UInt_max, 2), v505);
                          const v795 = v790 ? v504 : v520;
                          sim_r.txns.push({
                            amt: v793,
                            kind: 'from',
                            to: v795,
                            tok: undefined /* Nothing */
                            });
                          sim_r.txns.push({
                            kind: 'halt',
                            tok: undefined /* Nothing */
                            })
                          sim_r.isHalt = true;
                          }})();
                      return sim_r;
                      }),
                    soloSend: true,
                    timeoutAt: ['time', v648],
                    tys: [ctc4, ctc0, ctc4, ctc0, ctc0, ctc0, ctc0, ctc0, ctc0, ctc0],
                    waitIfNotPresent: false
                    }));
                  if (txn9.didTimeout) {
                    const txn10 = await (ctc.sendrecv({
                      args: [v504, v505, v520, v533, v591, v604, v620, v636, v648],
                      evt_cnt: 0,
                      funcNum: 17,
                      lct: v637,
                      onlyIf: true,
                      out_tys: [],
                      pay: [stdlib.checkedBigNumberify('reach standard library:189:11:decimal', stdlib.UInt_max, 0), []],
                      sim_p: (async (txn10) => {
                        const sim_r = { txns: [], mapRefs: [], maps: [] };
                        let sim_txn_ctr = stdlib.UInt_max;
                        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
                        
                        
                        const {data: [], secs: v666, time: v665, didSend: v193, from: v664 } = txn10;
                        
                        ;
                        const v667 = stdlib.addressEq(v504, v664);
                        const v668 = stdlib.addressEq(v520, v664);
                        const v669 = v667 ? true : v668;
                        ;
                        sim_r.txns.push({
                          amt: v533,
                          kind: 'from',
                          to: v504,
                          tok: undefined /* Nothing */
                          });
                        sim_r.txns.push({
                          kind: 'halt',
                          tok: undefined /* Nothing */
                          })
                        sim_r.isHalt = true;
                        
                        return sim_r;
                        }),
                      soloSend: false,
                      timeoutAt: undefined /* mto */,
                      tys: [ctc4, ctc0, ctc4, ctc0, ctc0, ctc0, ctc0, ctc0, ctc0],
                      waitIfNotPresent: false
                      }));
                    const {data: [], secs: v666, time: v665, didSend: v193, from: v664 } = txn10;
                    ;
                    const v667 = stdlib.addressEq(v504, v664);
                    const v668 = stdlib.addressEq(v520, v664);
                    const v669 = v667 ? true : v668;
                    stdlib.assert(v669, {
                      at: 'reach standard library:189:11:dot',
                      fs: ['at ./index.rsh:153:55:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
                      msg: 'sender correct',
                      who: 'Alice'
                      });
                    ;
                    stdlib.protect(ctc1, await interact.informTimeout(), {
                      at: './index.rsh:76:35:application',
                      fs: ['at ./index.rsh:75:15:application call to [unknown function] (defined at: ./index.rsh:75:27:function exp)', 'at reach standard library:192:8:application call to "after" (defined at: ./index.rsh:74:34:function exp)', 'at ./index.rsh:153:55:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
                      msg: 'informTimeout',
                      who: 'Alice'
                      });
                    
                    return;
                    
                    }
                  else {
                    const {data: [v654], secs: v656, time: v655, didSend: v167, from: v653 } = txn9;
                    ;
                    const v657 = stdlib.addressEq(v504, v653);
                    stdlib.assert(v657, {
                      at: './index.rsh:152:11:dot',
                      fs: [],
                      msg: 'sender correct',
                      who: 'Alice'
                      });
                    let v658;
                    const v659 = stdlib.eq(v636, v604);
                    if (v659) {
                      v658 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1);
                      }
                    else {
                      const v660 = stdlib.add(v620, v591);
                      const v661 = stdlib.eq(v660, v636);
                      if (v661) {
                        v658 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 2);
                        }
                      else {
                        const v663 = stdlib.eq(v660, v604);
                        if (v663) {
                          v658 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 0);
                          }
                        else {
                          v658 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1);
                          }
                        }
                      }
                    const cv525 = v658;
                    const cv526 = v655;
                    const cv533 = v533;
                    
                    v525 = cv525;
                    v526 = cv526;
                    v533 = cv533;
                    
                    continue;}
                  
                  }
                
                }
              
              }
            
            }
          
          }
        
        }
      
      }
    const v790 = stdlib.eq(v525, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 2));
    const v793 = stdlib.mul(stdlib.checkedBigNumberify('./index.rsh:161:16:decimal', stdlib.UInt_max, 2), v505);
    const v795 = v790 ? v504 : v520;
    ;
    stdlib.protect(ctc1, await interact.seeOutcome(v525), {
      at: './index.rsh:165:28:application',
      fs: ['at ./index.rsh:164:11:application call to [unknown function] (defined at: ./index.rsh:164:23:function exp)'],
      msg: 'seeOutcome',
      who: 'Alice'
      });
    
    return;
    }
  
  
  
  };
export async function Bob(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Bob expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Bob expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Null;
  const ctc2 = stdlib.T_Digest;
  const ctc3 = stdlib.T_Tuple([ctc0, ctc0]);
  const ctc4 = stdlib.T_Address;
  
  
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 0,
    out_tys: [ctc0],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v505], secs: v507, time: v506, didSend: v71, from: v504 } = txn1;
  ;
  const v516 = stdlib.add(v506, stdlib.checkedBigNumberify('./index.rsh:67:18:decimal', stdlib.UInt_max, 30));
  stdlib.protect(ctc1, await interact.acceptWager(v505), {
    at: './index.rsh:84:29:application',
    fs: ['at ./index.rsh:83:13:application call to [unknown function] (defined at: ./index.rsh:83:17:function exp)'],
    msg: 'acceptWager',
    who: 'Bob'
    });
  
  const txn2 = await (ctc.sendrecv({
    args: [v504, v505, v516],
    evt_cnt: 0,
    funcNum: 1,
    lct: v506,
    onlyIf: true,
    out_tys: [],
    pay: [v505, []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [], secs: v522, time: v521, didSend: v80, from: v520 } = txn2;
      
      const v524 = stdlib.add(v505, v505);
      sim_r.txns.push({
        amt: v505,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      const v525 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1);
      const v526 = v521;
      const v533 = v524;
      
      if (await (async () => {
        const v541 = stdlib.eq(v525, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1));
        
        return v541;})()) {
        const v548 = stdlib.add(v526, stdlib.checkedBigNumberify('./index.rsh:67:18:decimal', stdlib.UInt_max, 30));
        sim_r.isHalt = false;
        }
      else {
        const v790 = stdlib.eq(v525, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 2));
        const v793 = stdlib.mul(stdlib.checkedBigNumberify('./index.rsh:161:16:decimal', stdlib.UInt_max, 2), v505);
        const v795 = v790 ? v504 : v520;
        sim_r.txns.push({
          amt: v793,
          kind: 'from',
          to: v795,
          tok: undefined /* Nothing */
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        }
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: ['time', v516],
    tys: [ctc4, ctc0, ctc0],
    waitIfNotPresent: false
    }));
  if (txn2.didTimeout) {
    const txn3 = await (ctc.sendrecv({
      args: [v504, v505, v516],
      evt_cnt: 0,
      funcNum: 2,
      lct: v506,
      onlyIf: true,
      out_tys: [],
      pay: [stdlib.checkedBigNumberify('reach standard library:189:11:decimal', stdlib.UInt_max, 0), []],
      sim_p: (async (txn3) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [], secs: v808, time: v807, didSend: v446, from: v806 } = txn3;
        
        ;
        sim_r.txns.push({
          amt: v505,
          kind: 'from',
          to: v504,
          tok: undefined /* Nothing */
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        
        return sim_r;
        }),
      soloSend: false,
      timeoutAt: undefined /* mto */,
      tys: [ctc4, ctc0, ctc0],
      waitIfNotPresent: false
      }));
    const {data: [], secs: v808, time: v807, didSend: v446, from: v806 } = txn3;
    ;
    ;
    stdlib.protect(ctc1, await interact.informTimeout(), {
      at: './index.rsh:76:35:application',
      fs: ['at ./index.rsh:75:15:application call to [unknown function] (defined at: ./index.rsh:75:27:function exp)', 'at reach standard library:192:8:application call to "after" (defined at: ./index.rsh:74:34:function exp)', 'at ./index.rsh:86:55:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
      msg: 'informTimeout',
      who: 'Bob'
      });
    
    return;
    
    }
  else {
    const {data: [], secs: v522, time: v521, didSend: v80, from: v520 } = txn2;
    const v524 = stdlib.add(v505, v505);
    ;
    let v525 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1);
    let v526 = v521;
    let v533 = v524;
    
    while (await (async () => {
      const v541 = stdlib.eq(v525, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1));
      
      return v541;})()) {
      const v548 = stdlib.add(v526, stdlib.checkedBigNumberify('./index.rsh:67:18:decimal', stdlib.UInt_max, 30));
      const txn3 = await (ctc.recv({
        didSend: false,
        evt_cnt: 1,
        funcNum: 4,
        out_tys: [ctc2],
        timeoutAt: ['time', v548],
        waitIfNotPresent: false
        }));
      if (txn3.didTimeout) {
        const txn4 = await (ctc.sendrecv({
          args: [v504, v505, v520, v533, v548],
          evt_cnt: 0,
          funcNum: 5,
          lct: v526,
          onlyIf: true,
          out_tys: [],
          pay: [stdlib.checkedBigNumberify('reach standard library:189:11:decimal', stdlib.UInt_max, 0), []],
          sim_p: (async (txn4) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            let sim_txn_ctr = stdlib.UInt_max;
            const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
            
            
            const {data: [], secs: v774, time: v773, didSend: v397, from: v772 } = txn4;
            
            ;
            const v775 = stdlib.addressEq(v504, v772);
            const v776 = stdlib.addressEq(v520, v772);
            const v777 = v775 ? true : v776;
            ;
            sim_r.txns.push({
              amt: v533,
              kind: 'from',
              to: v520,
              tok: undefined /* Nothing */
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            
            return sim_r;
            }),
          soloSend: false,
          timeoutAt: undefined /* mto */,
          tys: [ctc4, ctc0, ctc4, ctc0, ctc0],
          waitIfNotPresent: false
          }));
        const {data: [], secs: v774, time: v773, didSend: v397, from: v772 } = txn4;
        ;
        const v775 = stdlib.addressEq(v504, v772);
        const v776 = stdlib.addressEq(v520, v772);
        const v777 = v775 ? true : v776;
        stdlib.assert(v777, {
          at: 'reach standard library:189:11:dot',
          fs: ['at ./index.rsh:104:57:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
          msg: 'sender correct',
          who: 'Bob'
          });
        ;
        stdlib.protect(ctc1, await interact.informTimeout(), {
          at: './index.rsh:76:35:application',
          fs: ['at ./index.rsh:75:15:application call to [unknown function] (defined at: ./index.rsh:75:27:function exp)', 'at reach standard library:192:8:application call to "after" (defined at: ./index.rsh:74:34:function exp)', 'at ./index.rsh:104:57:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
          msg: 'informTimeout',
          who: 'Bob'
          });
        
        return;
        
        }
      else {
        const {data: [v561], secs: v563, time: v562, didSend: v111, from: v560 } = txn3;
        ;
        const v564 = stdlib.addressEq(v504, v560);
        stdlib.assert(v564, {
          at: './index.rsh:103:11:dot',
          fs: [],
          msg: 'sender correct',
          who: 'Bob'
          });
        const v571 = stdlib.add(v562, stdlib.checkedBigNumberify('./index.rsh:67:18:decimal', stdlib.UInt_max, 30));
        const txn4 = await (ctc.recv({
          didSend: false,
          evt_cnt: 1,
          funcNum: 6,
          out_tys: [ctc2],
          timeoutAt: ['time', v571],
          waitIfNotPresent: false
          }));
        if (txn4.didTimeout) {
          const txn5 = await (ctc.sendrecv({
            args: [v504, v505, v520, v533, v561, v571],
            evt_cnt: 0,
            funcNum: 7,
            lct: v562,
            onlyIf: true,
            out_tys: [],
            pay: [stdlib.checkedBigNumberify('reach standard library:189:11:decimal', stdlib.UInt_max, 0), []],
            sim_p: (async (txn5) => {
              const sim_r = { txns: [], mapRefs: [], maps: [] };
              let sim_txn_ctr = stdlib.UInt_max;
              const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
              
              
              const {data: [], secs: v756, time: v755, didSend: v363, from: v754 } = txn5;
              
              ;
              const v757 = stdlib.addressEq(v504, v754);
              const v758 = stdlib.addressEq(v520, v754);
              const v759 = v757 ? true : v758;
              ;
              sim_r.txns.push({
                amt: v533,
                kind: 'from',
                to: v520,
                tok: undefined /* Nothing */
                });
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined /* Nothing */
                })
              sim_r.isHalt = true;
              
              return sim_r;
              }),
            soloSend: false,
            timeoutAt: undefined /* mto */,
            tys: [ctc4, ctc0, ctc4, ctc0, ctc2, ctc0],
            waitIfNotPresent: false
            }));
          const {data: [], secs: v756, time: v755, didSend: v363, from: v754 } = txn5;
          ;
          const v757 = stdlib.addressEq(v504, v754);
          const v758 = stdlib.addressEq(v520, v754);
          const v759 = v757 ? true : v758;
          stdlib.assert(v759, {
            at: 'reach standard library:189:11:dot',
            fs: ['at ./index.rsh:108:57:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
            msg: 'sender correct',
            who: 'Bob'
            });
          ;
          stdlib.protect(ctc1, await interact.informTimeout(), {
            at: './index.rsh:76:35:application',
            fs: ['at ./index.rsh:75:15:application call to [unknown function] (defined at: ./index.rsh:75:27:function exp)', 'at reach standard library:192:8:application call to "after" (defined at: ./index.rsh:74:34:function exp)', 'at ./index.rsh:108:57:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
            msg: 'informTimeout',
            who: 'Bob'
            });
          
          return;
          
          }
        else {
          const {data: [v574], secs: v576, time: v575, didSend: v117, from: v573 } = txn4;
          ;
          const v577 = stdlib.addressEq(v504, v573);
          stdlib.assert(v577, {
            at: './index.rsh:107:11:dot',
            fs: [],
            msg: 'sender correct',
            who: 'Bob'
            });
          const v584 = stdlib.add(v575, stdlib.checkedBigNumberify('./index.rsh:67:18:decimal', stdlib.UInt_max, 30));
          const v588 = stdlib.protect(ctc0, await interact.getFingers(), {
            at: './index.rsh:116:48:application',
            fs: ['at ./index.rsh:114:15:application call to [unknown function] (defined at: ./index.rsh:114:19:function exp)'],
            msg: 'getFingers',
            who: 'Bob'
            });
          const v589 = stdlib.protect(ctc0, await interact.getGuess(v588), {
            at: './index.rsh:117:44:application',
            fs: ['at ./index.rsh:114:15:application call to [unknown function] (defined at: ./index.rsh:114:19:function exp)'],
            msg: 'getGuess',
            who: 'Bob'
            });
          
          const txn5 = await (ctc.sendrecv({
            args: [v504, v505, v520, v533, v561, v574, v584, v588],
            evt_cnt: 1,
            funcNum: 8,
            lct: v575,
            onlyIf: true,
            out_tys: [ctc0],
            pay: [stdlib.checkedBigNumberify('./index.rsh:123:11:decimal', stdlib.UInt_max, 0), []],
            sim_p: (async (txn5) => {
              const sim_r = { txns: [], mapRefs: [], maps: [] };
              let sim_txn_ctr = stdlib.UInt_max;
              const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
              
              
              const {data: [v591], secs: v593, time: v592, didSend: v128, from: v590 } = txn5;
              
              ;
              const v594 = stdlib.addressEq(v520, v590);
              ;
              const v601 = stdlib.add(v592, stdlib.checkedBigNumberify('./index.rsh:67:18:decimal', stdlib.UInt_max, 30));
              sim_r.isHalt = false;
              
              return sim_r;
              }),
            soloSend: true,
            timeoutAt: ['time', v584],
            tys: [ctc4, ctc0, ctc4, ctc0, ctc2, ctc2, ctc0, ctc0],
            waitIfNotPresent: false
            }));
          if (txn5.didTimeout) {
            const txn6 = await (ctc.sendrecv({
              args: [v504, v505, v520, v533, v561, v574, v584],
              evt_cnt: 0,
              funcNum: 9,
              lct: v575,
              onlyIf: true,
              out_tys: [],
              pay: [stdlib.checkedBigNumberify('reach standard library:189:11:decimal', stdlib.UInt_max, 0), []],
              sim_p: (async (txn6) => {
                const sim_r = { txns: [], mapRefs: [], maps: [] };
                let sim_txn_ctr = stdlib.UInt_max;
                const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
                
                
                const {data: [], secs: v738, time: v737, didSend: v329, from: v736 } = txn6;
                
                ;
                const v739 = stdlib.addressEq(v504, v736);
                const v740 = stdlib.addressEq(v520, v736);
                const v741 = v739 ? true : v740;
                ;
                sim_r.txns.push({
                  amt: v533,
                  kind: 'from',
                  to: v504,
                  tok: undefined /* Nothing */
                  });
                sim_r.txns.push({
                  kind: 'halt',
                  tok: undefined /* Nothing */
                  })
                sim_r.isHalt = true;
                
                return sim_r;
                }),
              soloSend: false,
              timeoutAt: undefined /* mto */,
              tys: [ctc4, ctc0, ctc4, ctc0, ctc2, ctc2, ctc0],
              waitIfNotPresent: false
              }));
            const {data: [], secs: v738, time: v737, didSend: v329, from: v736 } = txn6;
            ;
            const v739 = stdlib.addressEq(v504, v736);
            const v740 = stdlib.addressEq(v520, v736);
            const v741 = v739 ? true : v740;
            stdlib.assert(v741, {
              at: 'reach standard library:189:11:dot',
              fs: ['at ./index.rsh:124:57:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
              msg: 'sender correct',
              who: 'Bob'
              });
            ;
            stdlib.protect(ctc1, await interact.informTimeout(), {
              at: './index.rsh:76:35:application',
              fs: ['at ./index.rsh:75:15:application call to [unknown function] (defined at: ./index.rsh:75:27:function exp)', 'at reach standard library:192:8:application call to "after" (defined at: ./index.rsh:74:34:function exp)', 'at ./index.rsh:124:57:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
              msg: 'informTimeout',
              who: 'Bob'
              });
            
            return;
            
            }
          else {
            const {data: [v591], secs: v593, time: v592, didSend: v128, from: v590 } = txn5;
            ;
            const v594 = stdlib.addressEq(v520, v590);
            stdlib.assert(v594, {
              at: './index.rsh:123:11:dot',
              fs: [],
              msg: 'sender correct',
              who: 'Bob'
              });
            const v601 = stdlib.add(v592, stdlib.checkedBigNumberify('./index.rsh:67:18:decimal', stdlib.UInt_max, 30));
            const txn6 = await (ctc.sendrecv({
              args: [v504, v505, v520, v533, v561, v574, v591, v601, v589],
              evt_cnt: 1,
              funcNum: 10,
              lct: v592,
              onlyIf: true,
              out_tys: [ctc0],
              pay: [stdlib.checkedBigNumberify('./index.rsh:126:11:decimal', stdlib.UInt_max, 0), []],
              sim_p: (async (txn6) => {
                const sim_r = { txns: [], mapRefs: [], maps: [] };
                let sim_txn_ctr = stdlib.UInt_max;
                const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
                
                
                const {data: [v604], secs: v606, time: v605, didSend: v134, from: v603 } = txn6;
                
                ;
                const v607 = stdlib.addressEq(v520, v603);
                ;
                const v614 = stdlib.add(v605, stdlib.checkedBigNumberify('./index.rsh:67:18:decimal', stdlib.UInt_max, 30));
                sim_r.isHalt = false;
                
                return sim_r;
                }),
              soloSend: true,
              timeoutAt: ['time', v601],
              tys: [ctc4, ctc0, ctc4, ctc0, ctc2, ctc2, ctc0, ctc0, ctc0],
              waitIfNotPresent: false
              }));
            if (txn6.didTimeout) {
              const txn7 = await (ctc.sendrecv({
                args: [v504, v505, v520, v533, v561, v574, v591, v601],
                evt_cnt: 0,
                funcNum: 11,
                lct: v592,
                onlyIf: true,
                out_tys: [],
                pay: [stdlib.checkedBigNumberify('reach standard library:189:11:decimal', stdlib.UInt_max, 0), []],
                sim_p: (async (txn7) => {
                  const sim_r = { txns: [], mapRefs: [], maps: [] };
                  let sim_txn_ctr = stdlib.UInt_max;
                  const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
                  
                  
                  const {data: [], secs: v720, time: v719, didSend: v295, from: v718 } = txn7;
                  
                  ;
                  const v721 = stdlib.addressEq(v504, v718);
                  const v722 = stdlib.addressEq(v520, v718);
                  const v723 = v721 ? true : v722;
                  ;
                  sim_r.txns.push({
                    amt: v533,
                    kind: 'from',
                    to: v504,
                    tok: undefined /* Nothing */
                    });
                  sim_r.txns.push({
                    kind: 'halt',
                    tok: undefined /* Nothing */
                    })
                  sim_r.isHalt = true;
                  
                  return sim_r;
                  }),
                soloSend: false,
                timeoutAt: undefined /* mto */,
                tys: [ctc4, ctc0, ctc4, ctc0, ctc2, ctc2, ctc0, ctc0],
                waitIfNotPresent: false
                }));
              const {data: [], secs: v720, time: v719, didSend: v295, from: v718 } = txn7;
              ;
              const v721 = stdlib.addressEq(v504, v718);
              const v722 = stdlib.addressEq(v520, v718);
              const v723 = v721 ? true : v722;
              stdlib.assert(v723, {
                at: 'reach standard library:189:11:dot',
                fs: ['at ./index.rsh:127:57:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
                msg: 'sender correct',
                who: 'Bob'
                });
              ;
              stdlib.protect(ctc1, await interact.informTimeout(), {
                at: './index.rsh:76:35:application',
                fs: ['at ./index.rsh:75:15:application call to [unknown function] (defined at: ./index.rsh:75:27:function exp)', 'at reach standard library:192:8:application call to "after" (defined at: ./index.rsh:74:34:function exp)', 'at ./index.rsh:127:57:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
                msg: 'informTimeout',
                who: 'Bob'
                });
              
              return;
              
              }
            else {
              const {data: [v604], secs: v606, time: v605, didSend: v134, from: v603 } = txn6;
              ;
              const v607 = stdlib.addressEq(v520, v603);
              stdlib.assert(v607, {
                at: './index.rsh:126:11:dot',
                fs: [],
                msg: 'sender correct',
                who: 'Bob'
                });
              const v614 = stdlib.add(v605, stdlib.checkedBigNumberify('./index.rsh:67:18:decimal', stdlib.UInt_max, 30));
              const txn7 = await (ctc.recv({
                didSend: false,
                evt_cnt: 2,
                funcNum: 12,
                out_tys: [ctc0, ctc0],
                timeoutAt: ['time', v614],
                waitIfNotPresent: false
                }));
              if (txn7.didTimeout) {
                const txn8 = await (ctc.sendrecv({
                  args: [v504, v505, v520, v533, v561, v574, v591, v604, v614],
                  evt_cnt: 0,
                  funcNum: 13,
                  lct: v605,
                  onlyIf: true,
                  out_tys: [],
                  pay: [stdlib.checkedBigNumberify('reach standard library:189:11:decimal', stdlib.UInt_max, 0), []],
                  sim_p: (async (txn8) => {
                    const sim_r = { txns: [], mapRefs: [], maps: [] };
                    let sim_txn_ctr = stdlib.UInt_max;
                    const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
                    
                    
                    const {data: [], secs: v702, time: v701, didSend: v261, from: v700 } = txn8;
                    
                    ;
                    const v703 = stdlib.addressEq(v504, v700);
                    const v704 = stdlib.addressEq(v520, v700);
                    const v705 = v703 ? true : v704;
                    ;
                    sim_r.txns.push({
                      amt: v533,
                      kind: 'from',
                      to: v520,
                      tok: undefined /* Nothing */
                      });
                    sim_r.txns.push({
                      kind: 'halt',
                      tok: undefined /* Nothing */
                      })
                    sim_r.isHalt = true;
                    
                    return sim_r;
                    }),
                  soloSend: false,
                  timeoutAt: undefined /* mto */,
                  tys: [ctc4, ctc0, ctc4, ctc0, ctc2, ctc2, ctc0, ctc0, ctc0],
                  waitIfNotPresent: false
                  }));
                const {data: [], secs: v702, time: v701, didSend: v261, from: v700 } = txn8;
                ;
                const v703 = stdlib.addressEq(v504, v700);
                const v704 = stdlib.addressEq(v520, v700);
                const v705 = v703 ? true : v704;
                stdlib.assert(v705, {
                  at: 'reach standard library:189:11:dot',
                  fs: ['at ./index.rsh:137:57:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
                  msg: 'sender correct',
                  who: 'Bob'
                  });
                ;
                stdlib.protect(ctc1, await interact.informTimeout(), {
                  at: './index.rsh:76:35:application',
                  fs: ['at ./index.rsh:75:15:application call to [unknown function] (defined at: ./index.rsh:75:27:function exp)', 'at reach standard library:192:8:application call to "after" (defined at: ./index.rsh:74:34:function exp)', 'at ./index.rsh:137:57:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
                  msg: 'informTimeout',
                  who: 'Bob'
                  });
                
                return;
                
                }
              else {
                const {data: [v619, v620], secs: v622, time: v621, didSend: v144, from: v618 } = txn7;
                ;
                const v623 = stdlib.addressEq(v504, v618);
                stdlib.assert(v623, {
                  at: './index.rsh:136:11:dot',
                  fs: [],
                  msg: 'sender correct',
                  who: 'Bob'
                  });
                const v624 = stdlib.digest(ctc3, [v619, v620]);
                const v625 = stdlib.digestEq(v561, v624);
                stdlib.assert(v625, {
                  at: 'reach standard library:58:17:application',
                  fs: ['at ./index.rsh:138:24:application call to "checkCommitment" (defined at: reach standard library:57:8:function exp)'],
                  msg: null,
                  who: 'Bob'
                  });
                const v632 = stdlib.add(v621, stdlib.checkedBigNumberify('./index.rsh:67:18:decimal', stdlib.UInt_max, 30));
                const txn8 = await (ctc.recv({
                  didSend: false,
                  evt_cnt: 2,
                  funcNum: 14,
                  out_tys: [ctc0, ctc0],
                  timeoutAt: ['time', v632],
                  waitIfNotPresent: false
                  }));
                if (txn8.didTimeout) {
                  const txn9 = await (ctc.sendrecv({
                    args: [v504, v505, v520, v533, v574, v591, v604, v620, v632],
                    evt_cnt: 0,
                    funcNum: 15,
                    lct: v621,
                    onlyIf: true,
                    out_tys: [],
                    pay: [stdlib.checkedBigNumberify('reach standard library:189:11:decimal', stdlib.UInt_max, 0), []],
                    sim_p: (async (txn9) => {
                      const sim_r = { txns: [], mapRefs: [], maps: [] };
                      let sim_txn_ctr = stdlib.UInt_max;
                      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
                      
                      
                      const {data: [], secs: v684, time: v683, didSend: v227, from: v682 } = txn9;
                      
                      ;
                      const v685 = stdlib.addressEq(v504, v682);
                      const v686 = stdlib.addressEq(v520, v682);
                      const v687 = v685 ? true : v686;
                      ;
                      sim_r.txns.push({
                        amt: v533,
                        kind: 'from',
                        to: v520,
                        tok: undefined /* Nothing */
                        });
                      sim_r.txns.push({
                        kind: 'halt',
                        tok: undefined /* Nothing */
                        })
                      sim_r.isHalt = true;
                      
                      return sim_r;
                      }),
                    soloSend: false,
                    timeoutAt: undefined /* mto */,
                    tys: [ctc4, ctc0, ctc4, ctc0, ctc2, ctc0, ctc0, ctc0, ctc0],
                    waitIfNotPresent: false
                    }));
                  const {data: [], secs: v684, time: v683, didSend: v227, from: v682 } = txn9;
                  ;
                  const v685 = stdlib.addressEq(v504, v682);
                  const v686 = stdlib.addressEq(v520, v682);
                  const v687 = v685 ? true : v686;
                  stdlib.assert(v687, {
                    at: 'reach standard library:189:11:dot',
                    fs: ['at ./index.rsh:142:55:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
                    msg: 'sender correct',
                    who: 'Bob'
                    });
                  ;
                  stdlib.protect(ctc1, await interact.informTimeout(), {
                    at: './index.rsh:76:35:application',
                    fs: ['at ./index.rsh:75:15:application call to [unknown function] (defined at: ./index.rsh:75:27:function exp)', 'at reach standard library:192:8:application call to "after" (defined at: ./index.rsh:74:34:function exp)', 'at ./index.rsh:142:55:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
                    msg: 'informTimeout',
                    who: 'Bob'
                    });
                  
                  return;
                  
                  }
                else {
                  const {data: [v635, v636], secs: v638, time: v637, didSend: v154, from: v634 } = txn8;
                  ;
                  const v639 = stdlib.addressEq(v504, v634);
                  stdlib.assert(v639, {
                    at: './index.rsh:141:11:dot',
                    fs: [],
                    msg: 'sender correct',
                    who: 'Bob'
                    });
                  const v640 = stdlib.digest(ctc3, [v635, v636]);
                  const v641 = stdlib.digestEq(v574, v640);
                  stdlib.assert(v641, {
                    at: 'reach standard library:58:17:application',
                    fs: ['at ./index.rsh:143:24:application call to "checkCommitment" (defined at: reach standard library:57:8:function exp)'],
                    msg: null,
                    who: 'Bob'
                    });
                  const v648 = stdlib.add(v637, stdlib.checkedBigNumberify('./index.rsh:67:18:decimal', stdlib.UInt_max, 30));
                  const txn9 = await (ctc.recv({
                    didSend: false,
                    evt_cnt: 1,
                    funcNum: 16,
                    out_tys: [ctc0],
                    timeoutAt: ['time', v648],
                    waitIfNotPresent: false
                    }));
                  if (txn9.didTimeout) {
                    const txn10 = await (ctc.sendrecv({
                      args: [v504, v505, v520, v533, v591, v604, v620, v636, v648],
                      evt_cnt: 0,
                      funcNum: 17,
                      lct: v637,
                      onlyIf: true,
                      out_tys: [],
                      pay: [stdlib.checkedBigNumberify('reach standard library:189:11:decimal', stdlib.UInt_max, 0), []],
                      sim_p: (async (txn10) => {
                        const sim_r = { txns: [], mapRefs: [], maps: [] };
                        let sim_txn_ctr = stdlib.UInt_max;
                        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
                        
                        
                        const {data: [], secs: v666, time: v665, didSend: v193, from: v664 } = txn10;
                        
                        ;
                        const v667 = stdlib.addressEq(v504, v664);
                        const v668 = stdlib.addressEq(v520, v664);
                        const v669 = v667 ? true : v668;
                        ;
                        sim_r.txns.push({
                          amt: v533,
                          kind: 'from',
                          to: v504,
                          tok: undefined /* Nothing */
                          });
                        sim_r.txns.push({
                          kind: 'halt',
                          tok: undefined /* Nothing */
                          })
                        sim_r.isHalt = true;
                        
                        return sim_r;
                        }),
                      soloSend: false,
                      timeoutAt: undefined /* mto */,
                      tys: [ctc4, ctc0, ctc4, ctc0, ctc0, ctc0, ctc0, ctc0, ctc0],
                      waitIfNotPresent: false
                      }));
                    const {data: [], secs: v666, time: v665, didSend: v193, from: v664 } = txn10;
                    ;
                    const v667 = stdlib.addressEq(v504, v664);
                    const v668 = stdlib.addressEq(v520, v664);
                    const v669 = v667 ? true : v668;
                    stdlib.assert(v669, {
                      at: 'reach standard library:189:11:dot',
                      fs: ['at ./index.rsh:153:55:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
                      msg: 'sender correct',
                      who: 'Bob'
                      });
                    ;
                    stdlib.protect(ctc1, await interact.informTimeout(), {
                      at: './index.rsh:76:35:application',
                      fs: ['at ./index.rsh:75:15:application call to [unknown function] (defined at: ./index.rsh:75:27:function exp)', 'at reach standard library:192:8:application call to "after" (defined at: ./index.rsh:74:34:function exp)', 'at ./index.rsh:153:55:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
                      msg: 'informTimeout',
                      who: 'Bob'
                      });
                    
                    return;
                    
                    }
                  else {
                    const {data: [v654], secs: v656, time: v655, didSend: v167, from: v653 } = txn9;
                    ;
                    const v657 = stdlib.addressEq(v504, v653);
                    stdlib.assert(v657, {
                      at: './index.rsh:152:11:dot',
                      fs: [],
                      msg: 'sender correct',
                      who: 'Bob'
                      });
                    let v658;
                    const v659 = stdlib.eq(v636, v604);
                    if (v659) {
                      v658 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1);
                      }
                    else {
                      const v660 = stdlib.add(v620, v591);
                      const v661 = stdlib.eq(v660, v636);
                      if (v661) {
                        v658 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 2);
                        }
                      else {
                        const v663 = stdlib.eq(v660, v604);
                        if (v663) {
                          v658 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 0);
                          }
                        else {
                          v658 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1);
                          }
                        }
                      }
                    const cv525 = v658;
                    const cv526 = v655;
                    const cv533 = v533;
                    
                    v525 = cv525;
                    v526 = cv526;
                    v533 = cv533;
                    
                    continue;}
                  
                  }
                
                }
              
              }
            
            }
          
          }
        
        }
      
      }
    const v790 = stdlib.eq(v525, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 2));
    const v793 = stdlib.mul(stdlib.checkedBigNumberify('./index.rsh:161:16:decimal', stdlib.UInt_max, 2), v505);
    const v795 = v790 ? v504 : v520;
    ;
    stdlib.protect(ctc1, await interact.seeOutcome(v525), {
      at: './index.rsh:165:28:application',
      fs: ['at ./index.rsh:164:11:application call to [unknown function] (defined at: ./index.rsh:164:23:function exp)'],
      msg: 'seeOutcome',
      who: 'Bob'
      });
    
    return;
    }
  
  
  
  };
const _ALGO = {
  ABI: {
    impure: [],
    pure: [],
    sigs: []
    },
  appApproval: `BiAVAAFIIB4RcAUICQ0PAguQAQdQmAGIAaABKCYDAQABAQAiNQAxGEEIiypkSSJbNQEhCFs1AjYaABdJQQAHIjUEIzUGADYaAhc1BDYaAzYaARdJIQkMQAR9SSEKDEACYkkhCwxAAUxJgRAMQADySSEFDEAAUyEFEkQhBTQBEkQ0BEkiEkw0AhIRRChkSTUDVwAgNf+ABACB0o6wMgY0AyEGWw9ENP8xABI0A1coIDEAEhFEsSKyATQDJFuyCCOyEDT/sgezQgelSCEFNAESRDQESSISTDQCEhFEKGRJNQNJSVcAIDX/gVhbNf6BaFs1/Uk1BRc1/IAEfoUQcTT8FlCwMgY0AyEGWwxENP8xABJENP00/hJBAAYjNftCACw0A4FgWzQDIRBbCEk1+jT9EkEAByEMNftCABE0+jT+EkEABiI1+0IAAyM1+zT/NAMlWzQDVyggNPsyBjQDJFtCBrFIIQs0ARJENARJIhJMNAISEUQoZClkUEk1A1coIDX/gARGR4xesDIGNAMhElsPRDQDVwAgMQASNP8xABIRRLEisgE0AyRbsggjshA0/7IHs0IGukmBDgxAALVIIQs0ARJENARJIhJMNAISEUQoZClkUEk1A0lKSklXACA1/yVbNf5XKCA1/SRbNfwhBls1+4F4WzX6gYABWzX5STUFSSJbNfghCFs194AEva7n1TT4FlA09xZQsDIGNAMhElsMRDT/MQASRDQDV1AgNPgWNPcWUAESRDIGIQQINfY0/zT+FlA0/VA0/BZQNPsWUDT6FlA0+RZQNPcWUDT2FlAoSwFXAHhnSCEFNQEyBjUCQgYaSCEKNAESRDQESSISTDQCEhFEKGQpZFBJNQNXKCA1/4AEIp+XA7AyBjQDIRNbD0Q0A1cAIDEAEjT/MQASEUSxIrIBNAMkW7III7IQNP+yB7NCBatJIQ0MQAEUSYEMDEAAukghCjQBEkQ0BEkiEkw0AhIRRChkKWRQSTUDSUpKSVcAIDX/JVs1/lcoIDX9JFs1/FdwIDX7IQ5bNfohEVs1+Uk1BUkiWzX4IQhbNfeABMOqkME0+BZQNPcWULAyBjQDIRNbDEQ0/zEAEkQ0A1dQIDT4FjT3FlABEkQyBiEECDX2NP80/hZQNP1QNPwWUDT7UDT6FlA0+RZQNPcWUDT2FlAoSwFXAH9nKUsBV38RZ0ghCzUBMgY1AkIE/0ghDTQBEkQ0BEkiEkw0AhIRRChkKWRQSTUDVwAgNf+ABOPZNjWwMgY0AyERWw9ENP8xABI0A1coIDEAEhFEsSKyATQDJFuyCCOyEDT/sgezQgSQSYEKDEAAn0ghDTQBEkQ0BEkiEkw0AhIRRChkKWRQSTUDSUpKSVcAIDX/JVs1/lcoIDX9JFs1/FdQIDX7V3AgNfohDls1+Uk1BRc1+IAEp4vCCzT4FlCwMgY0AyERWwxENP0xABJEMgYhBAg19zT/NP4WUDT9UDT8FlA0+1A0+lA0+RZQNPgWUDT3FlAoSwFXAH9nKUsBV38pZ0ghCjUBMgY1AkIEBkghCTQBEkQ0BEkiEkw0AhIRRChkKWRQSTUDVwAgNf+ABKIFZo6wMgY0AyEOWw9ENP8xABI0A1coIDEAEhFEsSKyATQDJFuyCCOyEDT/sgezQgOXSYEEDEACT0mBBgxAAXpJIQ8MQADsSSEIDEAAlUghCTQBEkQ0BEkiEkw0AhIRRChkKWRQSTUDSUpKVwAgNf8lWzX+VyggNf0kWzX8V1AgNftXcCA1+kk1BRc1+YAEL9rpHTT5FlCwMgY0AyEOWwxENP0xABJEMgYhBAg1+DT/NP4WUDT9UDT8FlA0+1A0+lA0+RZQNPgWUChLAVcAf2cpSwFXfyFnSCENNQEyBjUCQgMCSCEPNAESRDQESSISTDQCEhFEKGRJNQNXKCA1/4AE4huzqbAyBjQDIQZbD0Q0A1cAIDEAEjT/MQASEUSxIrIBNAMkW7III7IQNP+yB7NCApZIIQ80ARJENARJIhJMNAISEUQoZEk1A0lKSVcAIDX/JVs1/lcoIDX9JFs1/FdQIDX7STUFNfqABGnuOz40+lCwMgY0AyEGWwxENP8xABJEMgYhBAg1+TT/NP4WUDT9UDT8FlA0+1A0+lA0+RZQKEsBVwB/ZylLAVd/GWdIIQk1ATIGNQJCAitJIQcMQABQSCEHNAESRDQESSISTDQCEhFEKGRJNQNXKCA1/4AEzJmSXLAyBjQDIRBbD0Q0A1cAIDEAEjT/MQASEUSxIrIBNAMkW7III7IQNP+yB7NCAbhIIQc0ARJENARJIhJMNAISEUQoZEk1A0lKVwAgNf8lWzX+VyggNf0kWzX8STUFNfuABDiwIy00+1CwMgY0AyEQWwxENP8xABJEMgYhBAg1+jT/NP4WUDT9UDT8FlA0+1A0+hZQKEsBVwB4Z0ghDzUBMgY1AkIBXUkhDAxAAEVJgQMMQAABSEgjNAESRDQESSISTDQCEhFEKGQ1A4AEQbFATbAyBjQDIRRbD0SxIrIBNAMlW7III7IQNANXACCyB7NCAPVJIwxAAEJIIzQBEkQ0BEkiEkw0AhIRRChkSTUDJVs1/4AEmouRdLAyBjQDIRRbDEQ0/4gBFjQDVwAgNP8xACMyBjT/SQhCAFFIIjQBEkQ0BEkiEkw0AhIRREk1BRc1/4AEgsRh/jT/FlCwgaCNBogA2jT/iADVMgYhBAg1/jEANP8WUDT+FlAoSwFXADBnSCM1ATIGNQJCAHg1/zX+Nf01/DX7Nfo0/SMSQQArNP4hBAg1+TT6NPsWUDT8UDT/FlA0+RZQKEsBVwBYZ0ghBzUBMgY1AkIAOrEisgEhDDT7C7III7IQNPw0+jT9IQwSTbIHs0IAADEZIQcSRLEisgEisggjshAyCbIJMgqyB7NCAAUxGSISRCo0ARY0AhZQZzQGQQAKgAQVH3x1NAdQsDQASSMIMgQSRDEWEkQjQzEZIhJEIjUBIjUCQv/LNABJSiMINQA4BzIKEkQ4ECMSRDgIEkSJ`,
  appClear: `Bg==`,
  companionInfo: null,
  extraPages: 1,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 2,
  stateSize: 168,
  unsupported: [],
  version: 10,
  warnings: []
  };
const _ETH = {
  ABI: `[
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v505",
                "type": "uint256"
              }
            ],
            "internalType": "struct T1",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T2",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "stateMutability": "payable",
    "type": "constructor"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "msg",
        "type": "uint256"
      }
    ],
    "name": "ReachError",
    "type": "error"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v505",
                "type": "uint256"
              }
            ],
            "internalType": "struct T1",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T2",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e0",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e1",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v604",
                "type": "uint256"
              }
            ],
            "internalType": "struct T19",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T20",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e10",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e11",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v619",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v620",
                "type": "uint256"
              }
            ],
            "internalType": "struct T22",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T23",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e12",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e13",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v635",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v636",
                "type": "uint256"
              }
            ],
            "internalType": "struct T25",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T26",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e14",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e15",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v654",
                "type": "uint256"
              }
            ],
            "internalType": "struct T27",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T28",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e16",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e17",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e2",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v561",
                "type": "uint256"
              }
            ],
            "internalType": "struct T10",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T11",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e4",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e5",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v574",
                "type": "uint256"
              }
            ],
            "internalType": "struct T13",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T14",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e6",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e7",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v591",
                "type": "uint256"
              }
            ],
            "internalType": "struct T16",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T17",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e8",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e9",
    "type": "event"
  },
  {
    "stateMutability": "payable",
    "type": "fallback"
  },
  {
    "inputs": [],
    "name": "_reachCreationTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentState",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "bytes",
        "name": "",
        "type": "bytes"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m1",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v604",
                "type": "uint256"
              }
            ],
            "internalType": "struct T19",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T20",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m10",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m11",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v619",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v620",
                "type": "uint256"
              }
            ],
            "internalType": "struct T22",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T23",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m12",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m13",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v635",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v636",
                "type": "uint256"
              }
            ],
            "internalType": "struct T25",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T26",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m14",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m15",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v654",
                "type": "uint256"
              }
            ],
            "internalType": "struct T27",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T28",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m16",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m17",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m2",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v561",
                "type": "uint256"
              }
            ],
            "internalType": "struct T10",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T11",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m4",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m5",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v574",
                "type": "uint256"
              }
            ],
            "internalType": "struct T13",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T14",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m6",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m7",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v591",
                "type": "uint256"
              }
            ],
            "internalType": "struct T16",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T17",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m8",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m9",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x608060405260405162002bf838038062002bf88339810160408190526200002691620001ed565b6000808055436003556040805160208101909152908152604080518351815260208085015151908201527fd2fa1fac07e66d08cb46271d2f3a2585d9761d2d591a51cc30a2056942bc38db910160405180910390a16020820151516200009090341460076200011d565b6200009d601e436200028f565b8152604080516060808201835260006020808401828152848601838152338087528984015151835288518252600194859055439094558651928301939093525194810194909452519083015290608001604051602081830303815290604052600290805190602001906200011392919062000147565b50505050620002f3565b81620001435760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b8280546200015590620002b6565b90600052602060002090601f016020900481019282620001795760008555620001c4565b82601f106200019457805160ff1916838001178555620001c4565b82800160010185558215620001c4579182015b82811115620001c4578251825591602001919060010190620001a7565b50620001d2929150620001d6565b5090565b5b80821115620001d25760008155600101620001d7565b60008183036040808212156200020257600080fd5b80518082016001600160401b0380821183831017156200023257634e487b7160e01b600052604160045260246000fd5b818452865183526020601f19860112156200024c57600080fd5b8351945060208501915084821081831117156200027957634e487b7160e01b600052604160045260246000fd5b5090915260209384015182529283015250919050565b60008219821115620002b157634e487b7160e01b600052601160045260246000fd5b500190565b600181811c90821680620002cb57607f821691505b60208210811415620002ed57634e487b7160e01b600052602260045260246000fd5b50919050565b6128f580620003036000396000f3fe60806040526004361061010c5760003560e01c80638b9fadc81161009a578063ab53f2c611610061578063ab53f2c614610232578063b608682e14610255578063bf2c5b2414610268578063de7369981461027b578063f37e1b9b1461028e57005b80638b9fadc8146101d35780638e314769146101e6578063980b6eac146101f95780639f2518101461020c578063a209ad4e1461021f57005b80633a3e43b0116100de5780633a3e43b0146101725780635471c5a81461018557806379b8ead7146101985780637eea518c146101ab57806383230757146101be57005b80631e93b0f11461011557806329bdceb9146101395780632c10a1591461014c5780633a31ddbd1461015f57005b3661011357005b005b34801561012157600080fd5b506003545b6040519081526020015b60405180910390f35b6101136101473660046122ef565b6102a1565b61011361015a3660046122ef565b610539565b61011361016d3660046122ef565b6106c2565b610113610180366004612324565b610877565b6101136101933660046122ef565b610ae7565b6101136101a6366004612324565b610c40565b6101136101b93660046122ef565b610eb0565b3480156101ca57600080fd5b50600154610126565b6101136101e13660046122ef565b611011565b6101136101f43660046122ef565b6111a6565b6101136102073660046122ef565b6112fe565b61011361021a3660046122ef565b611538565b61011361022d3660046122ef565b611691565b34801561023e57600080fd5b506102476118af565b604051610130929190612340565b6101136102633660046122ef565b61194c565b6101136102763660046122ef565b611b6c565b6101136102893660046122ef565b611cc4565b61011361029c3660046122ef565b611e1c565b6102b1600960005414602661203e565b6102cb813515806102c457506001548235145b602761203e565b6000808055600280546102dd9061239d565b80601f01602080910402602001604051908101604052809291908181526020018280546103099061239d565b80156103565780601f1061032b57610100808354040283529160200191610356565b820191906000526020600020905b81548152906001019060200180831161033957829003601f168201915b505050505080602001905181019061036e9190612426565b90506103866040518060200160405280600081525090565b6103978260c001514310602861203e565b7fd35ad1aca64c2a7362497fc455219b1326ea65851cccf4bcfcdd0090fca16540836040516103c691906124c4565b60405180910390a16103da3415602461203e565b60408201516103f5906001600160a01b03163314602561203e565b610400601e436124f3565b81526040805161010081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e081019190915282516001600160a01b0390811682526020808501518184015260408086015190921682840152606080860151908401526080808601519084015260a080860151908401528581013560c0840152835160e0840152600b60005543600155905161050e9183910160006101008201905060018060a01b038084511683526020840151602084015280604085015116604084015250606083015160608301526080830151608083015260a083015160a083015260c083015160c083015260e083015160e083015292915050565b604051602081830303815290604052600290805190602001906105329291906121af565b5050505050565b610549600160005414600961203e565b6105638135158061055c57506001548235145b600a61203e565b6000808055600280546105759061239d565b80601f01602080910402602001604051908101604052809291908181526020018280546105a19061239d565b80156105ee5780601f106105c3576101008083540402835291602001916105ee565b820191906000526020600020905b8154815290600101906020018083116105d157829003601f168201915b5050505050806020019051810190610606919061250b565b905061061981604001514310600b61203e565b7f79ca1a789d797004bc78dff9632d64e202e102f2d008dcc20c5a645ef7d4a7d182604051610648919061257a565b60405180910390a161066181602001513414600861203e565b610669612233565b815181516001600160a01b0390911690526020808301805183518301528251336040909101528183018051600190525143920191909152516106ab90806124f3565b6020820151604001526106bd81612063565b505050565b6106d2600f60005414604b61203e565b6106ec813515806106e557506001548235145b604c61203e565b6000808055600280546106fe9061239d565b80601f016020809104026020016040519081016040528092919081815260200182805461072a9061239d565b80156107775780601f1061074c57610100808354040283529160200191610777565b820191906000526020600020905b81548152906001019060200180831161075a57829003601f168201915b505050505080602001905181019061078f919061262b565b90506107a4816101000151431015604d61203e565b7f96969340a6658e1e09f3b3af80819f55bac87c191bbf60c7b83615ec9e37fc06826040516107d3919061257a565b60405180910390a16107e73415604961203e565b805161081b906001600160a01b031633146108115760408201516001600160a01b03163314610814565b60015b604a61203e565b80604001516001600160a01b03166108fc82606001519081150290604051600060405180830381858888f1935050505015801561085c573d6000803e3d6000fd5b506000808055600181905561087390600290612285565b5050565b610887600f60005414604661203e565b6108a18135158061089a57506001548235145b604761203e565b6000808055600280546108b39061239d565b80601f01602080910402602001604051908101604052809291908181526020018280546108df9061239d565b801561092c5780601f106109015761010080835404028352916020019161092c565b820191906000526020600020905b81548152906001019060200180831161090f57829003601f168201915b5050505050806020019051810190610944919061262b565b905061095c6040518060200160405280600081525090565b61096e8261010001514310604861203e565b7f958a3241fda076a77d37f3f7b1cbe8cc470cd495f586396be9ede30fc88618328360405161099d9190612648565b60405180910390a16109b13415604361203e565b81516109c9906001600160a01b03163314604461203e565b60408051610a15916109ef91602080880135928801359101918252602082015260400190565b6040516020818303038152906040528051906020012060001c836080015114604561203e565b610a20601e436124f3565b81526040805161012081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e0810182905261010081019190915282516001600160a01b03908116825260208085015181840152604080860151909216828401526060808601519084015260a080860151608085015260c0808701519185019190915260e0808701519185019190915286830135908401528351610100840152601160005543600155905161050e91839101612669565b610af7600d60005414604061203e565b610b1181351580610b0a57506001548235145b604161203e565b600080805560028054610b239061239d565b80601f0160208091040260200160405190810160405280929190818152602001828054610b4f9061239d565b8015610b9c5780601f10610b7157610100808354040283529160200191610b9c565b820191906000526020600020905b815481529060010190602001808311610b7f57829003601f168201915b5050505050806020019051810190610bb4919061262b565b9050610bc9816101000151431015604261203e565b7f07e6cc8e2fc82a9375e0bae2c8fb95cb33ae4f7121cc887b7bcd23b343d8ec0582604051610bf8919061257a565b60405180910390a1610c0c3415603e61203e565b805161081b906001600160a01b03163314610c365760408201516001600160a01b03163314610c39565b60015b603f61203e565b610c50600d60005414603b61203e565b610c6a81351580610c6357506001548235145b603c61203e565b600080805560028054610c7c9061239d565b80601f0160208091040260200160405190810160405280929190818152602001828054610ca89061239d565b8015610cf55780601f10610cca57610100808354040283529160200191610cf5565b820191906000526020600020905b815481529060010190602001808311610cd857829003601f168201915b5050505050806020019051810190610d0d919061262b565b9050610d256040518060200160405280600081525090565b610d378261010001514310603d61203e565b7f6df01b59e7af1b4e575f12c5e2be125c31bd937c4a198e80569276ca84c05bb783604051610d669190612648565b60405180910390a1610d7a3415603861203e565b8151610d92906001600160a01b03163314603961203e565b60408051610dde91610db891602080880135928801359101918252602082015260400190565b6040516020818303038152906040528051906020012060001c836080015114603a61203e565b610de9601e436124f3565b81526040805161012081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e0810182905261010081019190915282516001600160a01b03908116825260208085015181840152604080860151909216828401526060808601519084015260a080860151608085015260c0808701519185019190915260e0808701519185019190915286830135908401528351610100840152600f60005543600155905161050e91839101612669565b610ec0600160005414600d61203e565b610eda81351580610ed357506001548235145b600e61203e565b600080805560028054610eec9061239d565b80601f0160208091040260200160405190810160405280929190818152602001828054610f189061239d565b8015610f655780601f10610f3a57610100808354040283529160200191610f65565b820191906000526020600020905b815481529060010190602001808311610f4857829003601f168201915b5050505050806020019051810190610f7d919061250b565b9050610f918160400151431015600f61203e565b7f82e152e8b1d7e41adffbddbd5b2fe2e130356df9b7ab7d06526a80d7888af3e182604051610fc0919061257a565b60405180910390a1610fd43415600c61203e565b805160208201516040516001600160a01b039092169181156108fc0291906000818181858888f1935050505015801561085c573d6000803e3d6000fd5b611021600b60005414603561203e565b61103b8135158061103457506001548235145b603661203e565b60008080556002805461104d9061239d565b80601f01602080910402602001604051908101604052809291908181526020018280546110799061239d565b80156110c65780601f1061109b576101008083540402835291602001916110c6565b820191906000526020600020905b8154815290600101906020018083116110a957829003601f168201915b50505050508060200190518101906110de91906126d6565b90506110f28160e00151431015603761203e565b7f5fe72957f5855f25860ec325face1305075da64ba42ea3b56918fbe46e26b40482604051611121919061257a565b60405180910390a16111353415603361203e565b8051611169906001600160a01b0316331461115f5760408201516001600160a01b03163314611162565b60015b603461203e565b805160608201516040516001600160a01b039092169181156108fc0291906000818181858888f1935050505015801561085c573d6000803e3d6000fd5b6111b6600560005414601761203e565b6111d0813515806111c957506001548235145b601861203e565b6000808055600280546111e29061239d565b80601f016020809104026020016040519081016040528092919081815260200182805461120e9061239d565b801561125b5780601f106112305761010080835404028352916020019161125b565b820191906000526020600020905b81548152906001019060200180831161123e57829003601f168201915b50505050508060200190518101906112739190612782565b90506112878160800151431015601961203e565b7f9cdba579557d44a893ea7929682d6795d48dd5c40dc981d852842d4b18914de8826040516112b6919061257a565b60405180910390a16112ca3415601561203e565b805161081b906001600160a01b031633146112f45760408201516001600160a01b031633146112f7565b60015b601661203e565b61130e600760005414601c61203e565b6113288135158061132157506001548235145b601d61203e565b60008080556002805461133a9061239d565b80601f01602080910402602001604051908101604052809291908181526020018280546113669061239d565b80156113b35780601f10611388576101008083540402835291602001916113b3565b820191906000526020600020905b81548152906001019060200180831161139657829003601f168201915b50505050508060200190518101906113cb919061280c565b90506113e36040518060200160405280600081525090565b6113f48260a001514310601e61203e565b7f47a1195f23e4ca8f87a7a744a702eeb3eb5b0d56dae31e23931e0349a611c7098360405161142391906124c4565b60405180910390a16114373415601a61203e565b815161144f906001600160a01b03163314601b61203e565b61145a601e436124f3565b81526040805160e081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c081019190915282516001600160a01b0390811680835260208086015181850190815260408088015185168187019081526060808a01518189019081526080808c0151818b019081528d88013560a0808d019182528d5160c0808f0191825260096000554360015589519b8c019c909c529851978a01979097529451909916928701929092525190850152945190830152925191810191909152905160e08201526101000161050e565b611548601160005414605561203e565b6115628135158061155b57506001548235145b605661203e565b6000808055600280546115749061239d565b80601f01602080910402602001604051908101604052809291908181526020018280546115a09061239d565b80156115ed5780601f106115c2576101008083540402835291602001916115ed565b820191906000526020600020905b8154815290600101906020018083116115d057829003601f168201915b5050505050806020019051810190611605919061262b565b905061161a816101000151431015605761203e565b7fa2bfcfc2bf018598bf89847a2aa2dc48cb8eec269fecfd468afbe606d78101bd82604051611649919061257a565b60405180910390a161165d3415605361203e565b8051611169906001600160a01b031633146116875760408201516001600160a01b0316331461168a565b60015b605461203e565b6116a1600560005414601261203e565b6116bb813515806116b457506001548235145b601361203e565b6000808055600280546116cd9061239d565b80601f01602080910402602001604051908101604052809291908181526020018280546116f99061239d565b80156117465780601f1061171b57610100808354040283529160200191611746565b820191906000526020600020905b81548152906001019060200180831161172957829003601f168201915b505050505080602001905181019061175e9190612782565b90506117766040518060200160405280600081525090565b61178782608001514310601461203e565b7f7d7741a24b17d1850d95beda5136388f520bc575ba9499f2f40fdfa7647ad82f836040516117b691906124c4565b60405180910390a16117ca3415601061203e565b81516117e2906001600160a01b03163314601161203e565b6117ed601e436124f3565b81526040805160c081018252600080825260208201819052918101829052606081018290526080810182905260a081019190915282516001600160a01b0390811680835260208086015181850190815260408088015185168187019081526060808a01518189019081528b8601356080808b019182528b5160a0808d019182526007600055436001558751998a019a909a52965195880195909552925190971690850152945190830152925191810191909152905160c082015260e00161050e565b6000606060005460028080546118c49061239d565b80601f01602080910402602001604051908101604052809291908181526020018280546118f09061239d565b801561193d5780601f106119125761010080835404028352916020019161193d565b820191906000526020600020905b81548152906001019060200180831161192057829003601f168201915b50505050509050915091509091565b61195c600b60005414603061203e565b6119768135158061196f57506001548235145b603161203e565b6000808055600280546119889061239d565b80601f01602080910402602001604051908101604052809291908181526020018280546119b49061239d565b8015611a015780601f106119d657610100808354040283529160200191611a01565b820191906000526020600020905b8154815290600101906020018083116119e457829003601f168201915b5050505050806020019051810190611a1991906126d6565b9050611a316040518060200160405280600081525090565b611a428260e001514310603261203e565b7fc99abf4f2124876ba493db2d7e7c61c978cfbe8e164cbc61bfbbca544c6a7a4e83604051611a7191906124c4565b60405180910390a1611a853415602e61203e565b6040820151611aa0906001600160a01b03163314602f61203e565b611aab601e436124f3565b81526040805161012081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e0810182905261010081019190915282516001600160a01b0390811682526020808501518184015260408086015190921682840152606080860151908401526080808601519084015260a0808601519084015260c080860151908401528581013560e08401528351610100840152600d60005543600155905161050e91839101612669565b611b7c600760005414602161203e565b611b9681351580611b8f57506001548235145b602261203e565b600080805560028054611ba89061239d565b80601f0160208091040260200160405190810160405280929190818152602001828054611bd49061239d565b8015611c215780601f10611bf657610100808354040283529160200191611c21565b820191906000526020600020905b815481529060010190602001808311611c0457829003601f168201915b5050505050806020019051810190611c39919061280c565b9050611c4d8160a00151431015602361203e565b7fba16100ad25f3c6798bc3b7e9ca316fb231388e6fa4444c0f477e2a4336514e082604051611c7c919061257a565b60405180910390a1611c903415601f61203e565b805161081b906001600160a01b03163314611cba5760408201516001600160a01b03163314611cbd565b60015b602061203e565b611cd4600960005414602b61203e565b611cee81351580611ce757506001548235145b602c61203e565b600080805560028054611d009061239d565b80601f0160208091040260200160405190810160405280929190818152602001828054611d2c9061239d565b8015611d795780601f10611d4e57610100808354040283529160200191611d79565b820191906000526020600020905b815481529060010190602001808311611d5c57829003601f168201915b5050505050806020019051810190611d919190612426565b9050611da58160c00151431015602d61203e565b7fb764c356a899e639c4043e82fb6274894baac6d84c74f3b3ae78d8f4b22b000382604051611dd4919061257a565b60405180910390a1611de83415602961203e565b8051611169906001600160a01b03163314611e125760408201516001600160a01b03163314611e15565b60015b602a61203e565b611e2c601160005414605061203e565b611e4681351580611e3f57506001548235145b605161203e565b600080805560028054611e589061239d565b80601f0160208091040260200160405190810160405280929190818152602001828054611e849061239d565b8015611ed15780601f10611ea657610100808354040283529160200191611ed1565b820191906000526020600020905b815481529060010190602001808311611eb457829003601f168201915b5050505050806020019051810190611ee9919061262b565b9050611f08604051806040016040528060008152602001600081525090565b611f1a8261010001514310605261203e565b7f0cefefd14ff1b389a32d136c772bb55c0beb86aa78815aa8c485d7618fc1338283604051611f4991906124c4565b60405180910390a1611f5d3415604e61203e565b8151611f75906001600160a01b03163314604f61203e565b8160a001518260e001511415611f8e5760018152611fdb565b81608001518260c00151611fa291906124f3565b6020820181905260e08301511415611fbd5760028152611fdb565b8160a0015181602001511415611fd65760008152611fdb565b600181525b611fe3612233565b825181516001600160a01b039182169052602080850151835182015260408086015184519316928101929092528351818401805191909152805143920191909152606085015190519091015261203881612063565b50505050565b816108735760405163100960cb60e01b81526004810182905260240160405180910390fd5b6040805160208101909152600081526020820151516001141561214a57601e82602001516020015161209591906124f3565b81526040805160a0808201835260008083526020808401828152848601838152606080870185815260808089018781528c51516001600160a01b03908116808c528e5189015188528e518d0151821687528e8901518d015185528d5183526005909955436001558b51808901999099529551888c0152935190941691860191909152519184019190915251828401528451808303909301835260c09091019093528051919261203892600292909101906121af565b60208201515160021461216257815160400151612166565b8151515b6001600160a01b03166108fc836000015160200151600261218791906128a0565b6040518115909202916000818181858888f1935050505015801561085c573d6000803e3d6000fd5b8280546121bb9061239d565b90600052602060002090601f0160209004810192826121dd5760008555612223565b82601f106121f657805160ff1916838001178555612223565b82800160010185558215612223579182015b82811115612223578251825591602001919060010190612208565b5061222f9291506122c2565b5090565b6040805160a0810182526000918101828152606082018390526080820192909252908190815260200161228060405180606001604052806000815260200160008152602001600081525090565b905290565b5080546122919061239d565b6000825580601f106122a1575050565b601f0160209004906000526020600020908101906122bf91906122c2565b50565b5b8082111561222f57600081556001016122c3565b6000604082840312156122e957600080fd5b50919050565b60006040828403121561230157600080fd5b61230b83836122d7565b9392505050565b6000606082840312156122e957600080fd5b60006060828403121561233657600080fd5b61230b8383612312565b82815260006020604081840152835180604085015260005b8181101561237457858101830151858201606001528201612358565b81811115612386576000606083870101525b50601f01601f191692909201606001949350505050565b600181811c908216806123b157607f821691505b602082108114156122e957634e487b7160e01b600052602260045260246000fd5b604051610120810167ffffffffffffffff8111828210171561240457634e487b7160e01b600052604160045260246000fd5b60405290565b80516001600160a01b038116811461242157600080fd5b919050565b600060e0828403121561243857600080fd5b60405160e0810181811067ffffffffffffffff8211171561246957634e487b7160e01b600052604160045260246000fd5b6040526124758361240a565b81526020830151602082015261248d6040840161240a565b6040820152606083015160608201526080830151608082015260a083015160a082015260c083015160c08201528091505092915050565b8135815260208083013590820152604081015b92915050565b634e487b7160e01b600052601160045260246000fd5b60008219821115612506576125066124dd565b500190565b60006060828403121561251d57600080fd5b6040516060810181811067ffffffffffffffff8211171561254e57634e487b7160e01b600052604160045260246000fd5b60405261255a8361240a565b815260208301516020820152604083015160408201528091505092915050565b8135815260408101602083013580151580821461259657600080fd5b806020850152505092915050565b600061012082840312156125b757600080fd5b6125bf6123d2565b90506125ca8261240a565b8152602082015160208201526125e26040830161240a565b6040820152606082015160608201526080820151608082015260a082015160a082015260c082015160c082015260e082015160e082015261010080830151818301525092915050565b6000610120828403121561263e57600080fd5b61230b83836125a4565b813581526020808301359082015260408083013590820152606081016124d7565b81516001600160a01b0390811682526020808401519083015260408084015190911690820152606080830151908201526080808301519082015260a0808301519082015260c0808301519082015260e08083015190820152610100808301519082015261012081016124d7565b60006101008083850312156126ea57600080fd5b6040519081019067ffffffffffffffff8211818310171561271b57634e487b7160e01b600052604160045260246000fd5b816040526127288461240a565b8152602084015160208201526127406040850161240a565b6040820152606084015160608201526080840151608082015260a084015160a082015260c084015160c082015260e084015160e0820152809250505092915050565b600060a0828403121561279457600080fd5b60405160a0810181811067ffffffffffffffff821117156127c557634e487b7160e01b600052604160045260246000fd5b6040526127d18361240a565b8152602083015160208201526127e96040840161240a565b604082015260608301516060820152608083015160808201528091505092915050565b600060c0828403121561281e57600080fd5b60405160c0810181811067ffffffffffffffff8211171561284f57634e487b7160e01b600052604160045260246000fd5b60405261285b8361240a565b8152602083015160208201526128736040840161240a565b6040820152606083015160608201526080830151608082015260a083015160a08201528091505092915050565b60008160001904831182151516156128ba576128ba6124dd565b50029056fea26469706673582212201dccaa6518dfa502edcac32c0cef4b5ddde2d5c49cabff5afdcc42256d07a9e464736f6c634300080c0033`,
  BytecodeLen: 11256,
  Which: `oD`,
  version: 6,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:81:15:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  2: {
    at: 'reach standard library:191:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:86:55:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './index.rsh:162:15:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  5: {
    at: './index.rsh:91:17:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  6: {
    at: 'reach standard library:191:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:104:57:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
    msg: null,
    who: 'Module'
    },
  7: {
    at: './index.rsh:105:17:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  8: {
    at: 'reach standard library:191:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:108:57:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
    msg: null,
    who: 'Module'
    },
  9: {
    at: './index.rsh:110:17:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  10: {
    at: 'reach standard library:191:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:124:57:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
    msg: null,
    who: 'Module'
    },
  11: {
    at: './index.rsh:125:17:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  12: {
    at: 'reach standard library:191:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:127:57:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
    msg: null,
    who: 'Module'
    },
  13: {
    at: './index.rsh:130:17:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  14: {
    at: 'reach standard library:191:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:137:57:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
    msg: null,
    who: 'Module'
    },
  15: {
    at: './index.rsh:139:17:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  16: {
    at: 'reach standard library:191:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:142:55:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
    msg: null,
    who: 'Module'
    },
  17: {
    at: './index.rsh:145:17:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  18: {
    at: 'reach standard library:191:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:153:55:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
    msg: null,
    who: 'Module'
    }
  };
export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };
export const _Participants = {
  "Alice": Alice,
  "Bob": Bob
  };
export const _APIs = {
  };
