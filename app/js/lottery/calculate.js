class Calculate{
    /**
     *
     * @param active 当前选中的号码
     * @param play_name 玩法标识
     * @returns {number}
     */
    computeCount(active ,play_name){
        
        let count = 0;
        const exist = this.play_list.has(play_name);
        const arr= new Array(active).fill('0');
        if(exist && play_name.at(0) === 'r'){
            count = Calculate.combine(arr,play_name.split('')[1]).length;
        }
        return count;
    }

    /**
     * 奖金范围预测
     * @param active 当前选中的号码
     * @param play_name 玩法标识
     * return           奖金范围
     */
    computeBonus(active,play_name){
        const play= play_name.split('');
        const self = this;
        let arr = new Array(play[1]*1).fill(0);
        let min ,max;
        if(play[0] === 'r'){
            // 最小命中数
            // 例如 :一共是11个号码,任8玩法 从中选5个那么最小命中数5-(11-8)
            let min_active = 5-(11-active);
            if(min_active>0){
                // 玩法的基数
                if(min_active-play[1]>=0){
                    arr = new Array(min_active).fill(0);
                    min = Calculate.combine(arr,play[1]).length;
                }else{
                    if(play[1]-5>0 &&active-play[1]>0){
                        arr = new Array(active-5).fill(0);
                        min = Calculate.combine(arr,play[1]-5).length;
                    }else{
                        min = active-play[1]>-1?1:0
                    }
                }
            }else{
                min = active-play[1]>-1?1:0
            }
            let max_active = Math.min(active,5);
            if(play[1]-5>0){
                if(active - play[1]>=0){
                    arr = new Array(active-5).fill(0);
                    max = Calculate.combine(arr,play[1]-5).length;
                }else{
                    max= 0;
                }
            }else if(play[1]-5<0){
                arr = new Array(Math.min(active,5)).fill(0);
                max = Calculate.combine(arr,play[1]).length;
            }else{
                max = 1;
            }
        }
        return [min,max].map(item=>item*self.play_list.get(play_name).bonus)
    }
    /**
     *组合运算
     * @param arr 参与组合运算的数组
     * @param size 组合运算的基数
     * @returns {number} 计算注数
     */
    static combine(arr,size){
        let allResult = [];
        // 自执行函数
        (function f(arr,size,result) {
            let arrLen = arr.length;
            if(size>arrLen){
                return;
            }
            if(size === arrLen){
                allResult.push([].concat(result,arr))
            }else{
                for(let i=0;i<arrLen;i++){
                    //不断生成新的数组的过程
                     let newResult = [].concat(result);
                     newResult.push(arr[i]);
                     if(size===1){
                         allResult.push(newResult)
                     }else{
                         let newArr=[].concat(arr);
                         newArr.splice(0,i+1);
                         f(newArr,size-1,newResult)
                     }
                }
            }
        })(arr,size,[]);
        return allResult;
    }

}
export default Calculate