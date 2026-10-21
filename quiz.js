const questions = [
  {topic:'ARRAY / 陣列',text:'若陣列的起始位址已知，透過索引存取其中一個元素的時間複雜度為何？',options:['O(1)','O(log n)','O(n)','O(n²)'],answer:0,explanation:'陣列元素連續儲存，可利用起始位址與索引直接計算位置，因此索引存取是 O(1)。'},
  {topic:'LINKED LIST / 鏈結串列',text:'在單向鏈結串列中，已知某節點的位置，在該節點後插入新節點（不含尋找位置）的時間複雜度為何？',options:['O(n²)','O(n)','O(1)','O(log n)'],answer:2,explanation:'已知插入位置時，只需調整固定數量的指標，因此為 O(1)；若要先尋找位置，則可能需要 O(n)。'},
  {topic:'STACK / 堆疊',text:'堆疊（Stack）遵循哪一種資料取出順序？',options:['先進先出 FIFO','後進先出 LIFO','依數值由小到大','隨機取出'],answer:1,explanation:'堆疊遵循 LIFO：最後放入的元素最先取出，就像一疊盤子從最上面拿起。'},
  {topic:'QUEUE / 佇列',text:'將 A、B、C 依序加入一個空佇列，再移除一次，會移除哪個元素？',options:['C','B','三個一起移除','A'],answer:3,explanation:'佇列遵循先進先出（FIFO），因此最先加入的 A 會先被移除。'},
  {topic:'BINARY SEARCH / 二分搜尋',text:'要對陣列使用標準二分搜尋，資料必須先滿足哪個條件？',options:['所有元素都不同','依搜尋用的比較規則排序','元素數量必須是偶數','只能儲存整數'],answer:1,explanation:'二分搜尋需要有序資料，才能依中間值排除一半範圍；資料不必互異，也不限於整數。'},
  {topic:'TREE / 二元樹',text:'一棵二元樹的每個節點，最多可以有幾個子節點？',options:['1 個','3 個','2 個','不限數量'],answer:2,explanation:'二元樹每個節點最多有兩個子節點，通常稱為左子節點與右子節點。'},
  {topic:'BST / 二元搜尋樹',text:'對鍵值互異的二元搜尋樹進行中序走訪（左 → 根 → 右），會得到什麼順序？',options:['由小到大','由大到小','依插入時間排列','一定是隨機順序'],answer:0,explanation:'二元搜尋樹的左子樹鍵值小於根、右子樹鍵值大於根，因此中序走訪會得到遞增序列。'},
  {topic:'HEAP / 堆積',text:'最小堆積（Min-Heap）的根節點具備什麼性質？',options:['一定是最後插入的元素','一定是最大值','一定等於所有元素平均值','是整個堆積的最小值'],answer:3,explanation:'最小堆積中，每個父節點的值都不大於其子節點，因此根節點是全體的最小值。'},
  {topic:'HASH TABLE / 雜湊表',text:'雜湊表中，兩個不同的鍵被映射到同一個儲存位置，稱為什麼？',options:['遞迴（Recursion）','碰撞（Collision）','走訪（Traversal）','平衡（Balancing）'],answer:1,explanation:'不同鍵對應到同一個位置稱為碰撞，可用鏈結法或開放定址法等方式處理。'},
  {topic:'GRAPH / 廣度優先搜尋',text:'圖的廣度優先搜尋（BFS）通常使用哪種結構管理待探索的節點？',options:['堆疊','最小堆積','佇列','二元搜尋樹'],answer:2,explanation:'BFS 使用佇列，讓先發現的節點先被探索，逐層向外擴展；也需記錄已拜訪節點以避免重複處理。'},
  {topic:'SORTING / 排序',text:'標準合併排序（Merge Sort）的最壞時間複雜度為何？',options:['O(n log n)','O(1)','O(log n)','O(n²)'],answer:0,explanation:'合併排序約有 log n 層分割，每層合併總共處理 n 個元素，因此最壞時間複雜度為 O(n log n)。'},
  {topic:'COMPLEXITY / 複雜度',text:'兩層巢狀迴圈各自執行 n 次，內層每次只做固定時間操作，總時間複雜度為何？',options:['O(n)','O(log n)','O(n log n)','O(n²)'],answer:3,explanation:'外層 n 次，每次內層又執行 n 次，固定操作共執行 n × n 次，因此為 O(n²)。'}
];
const form = document.querySelector('#quiz');
const list = document.querySelector('#question-list');
const nav = document.querySelector('#question-nav');
let submitted = false;
questions.forEach((q,i) => {
  const field = document.createElement('fieldset');
  field.id = `q${i+1}`;
  field.innerHTML = `<legend><span class="topic">${q.topic}</span><span class="number">${String(i+1).padStart(2,'0')}</span>${q.text}</legend><div class="options">${q.options.map((option,j)=>`<label class="option"><input type="radio" name="q${i}" value="${j}"><span>${String.fromCharCode(65+j)}. ${option}</span></label>`).join('')}</div><p class="explanation" hidden></p>`;
  list.append(field);
  const link = document.createElement('a');
  link.href = `#q${i+1}`;
  link.textContent = String(i+1).padStart(2,'0');
  link.setAttribute('aria-label',`第 ${i+1} 題，未作答`);
  nav.append(link);
});
function updateProgress(){
  let count=0;
  questions.forEach((_,i)=>{
    const answered = Boolean(form.querySelector(`input[name="q${i}"]:checked`));
    count+=Number(answered);
    nav.children[i].classList.toggle('done',answered);
    nav.children[i].setAttribute('aria-label',`第 ${i+1} 題，${answered?'已作答':'未作答'}`);
  });
  document.querySelector('#progress').value=count;
  document.querySelector('#progress-text').textContent=`已完成 ${count} / ${questions.length} 題`;
  document.querySelector('#notice').textContent='';
}
form.addEventListener('change',updateProgress);
form.addEventListener('submit',event=>{
  event.preventDefault();
  if(submitted)return;
  const selected=questions.map((_,i)=>form.querySelector(`input[name="q${i}"]:checked`));
  const missing=selected.findIndex(value=>!value);
  if(missing!==-1){
    document.querySelector('#notice').textContent=`還有 ${selected.filter(value=>!value).length} 題未作答，請先完成第 ${missing+1} 題。`;
    list.children[missing].querySelector('input').focus();
    return;
  }
  submitted=true;
  let score=0;
  questions.forEach((q,i)=>{
    const correct=Number(selected[i].value)===q.answer;
    if(correct)score++;
    const field=list.children[i];
    field.querySelectorAll('input').forEach((input,j)=>{
      input.disabled=true;
      input.closest('label').classList.toggle('correct',j===q.answer);
      input.closest('label').classList.toggle('wrong',input.checked&&!correct);
    });
    const explanation=field.querySelector('.explanation');
    explanation.hidden=false;
    explanation.textContent=`${correct?'✓ 答對了':'✕ 答錯了'} · 正確答案：${String.fromCharCode(65+q.answer)}。${q.explanation}`;
  });
  document.querySelector('.actions').hidden=true;
  document.querySelector('#notice').textContent='';
  document.querySelector('#score').textContent=`${score} / ${questions.length} 分（${Math.round(score/questions.length*100)}%）`;
  document.querySelector('#feedback').textContent=score===12?'全部答對！你的基礎觀念很扎實。':score>=9?'做得不錯！再看看錯題詳解，把觀念補齊。':'每一次練習都是進步。看看各題解析，再挑戰一次吧！';
  const results=document.querySelector('#results');
  results.hidden=false;
  results.focus();
});
document.querySelector('#retry').addEventListener('click',()=>{
  submitted=false;
  form.reset();
  list.querySelectorAll('input').forEach(input=>input.disabled=false);
  list.querySelectorAll('.option').forEach(option=>option.classList.remove('correct','wrong'));
  list.querySelectorAll('.explanation').forEach(explanation=>explanation.hidden=true);
  document.querySelector('#results').hidden=true;
  document.querySelector('.actions').hidden=false;
  updateProgress();
  list.querySelector('input').focus();
});
