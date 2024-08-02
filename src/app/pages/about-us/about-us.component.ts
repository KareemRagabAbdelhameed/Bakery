import { Component } from '@angular/core';

@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [ ],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.css'
})
export class AboutUsComponent {
  ngOnInit(): void {
    const getCustomizedcakes = document.getElementById("about") as HTMLButtonElement;
    const mainContent = document.getElementById('main') as HTMLDivElement;
    const changeBackground = document.querySelector(".background") as HTMLElement;
    const preventRegister = document.querySelector(".register") as HTMLElement;
    const handleFooter = document.querySelector(".links") as HTMLElement;
    
    if (getCustomizedcakes && mainContent && changeBackground && preventRegister && handleFooter) {
      getCustomizedcakes.addEventListener('click', (event: MouseEvent) => {
        event.preventDefault();
        changeBackground.style.display = "none";
        preventRegister.style.display = "none";
        handleFooter.style.height = "100vh";
        mainContent.innerHTML = `
          <div class="main-container">
            <h1>about us</h1>
            <div class="div1">
              <h2>A Look Back....</h2>
              <p>It all started back in 1996, when MR. BAKER opened its first branch in Kuwait. This marked the birth of one of Kuwait’s most cherished bakery & desserts stores.</p>
              <p>Throughout the years, MR. BAKER built a reputation of utmost quality standards, unbeatable taste & dazzling assortment.</p>
            </div>
            <div class="div2">
              <h2>Leading Kuwait’s Bakery & Desserts Retail</h2>
              <p>With 21 branches in Kuwait, today MR.BAKER produces various and unique types of cakes, Arabic sweets, Italian ice cream, desserts, pastries and chocolates, using state-of-the-art technologies and superior quality of raw products from all around the world.</p>
            </div>
            <div class="div3">
              <h2>A Success Story, Retold</h2>
              <p>While keeping a close eye on successful F&B models within the region, Alex Baking saw a promising opportunity in bringing MR. BAKER to Egypt.</p>
              <p>After all, Egyptians are known for their sweet tooth and given the quality & assortment offered by MR. BAKER, the success story told in Kuwait only needed the franchise backed up by Alex Baking’s expertise to be told in Egypt!</p>
            </div>
            <div class="div4">
              <h2>First stop, Alexandria</h2>
              <p>MR. BAKER inaugurated operation in Egypt with the Semouha branch opening back in 2011. Since then MR. BAKER has opened 4 more branches in Alexandria and became one of the top premium bakery & desserts stores favored by most locals.</p>
              <p>With our quality and assortment, MR. BAKER was able to win the locals’ hearts in a relatively short time despite the heavy competition with other stores that have been around way before us.</p>
            </div>
            <div class="div5">
              <h2>First stop, Alexandria</h2>
              <p>MR. BAKER inaugurated operation in Egypt with the Semouha branch opening back in 2011. Since then MR. BAKER has opened 4 more branches in Alexandria and became one of the top premium bakery & desserts stores favored by most locals.</p>
              <p>With our quality and assortment, MR. BAKER was able to win the locals’ hearts in a relatively short time despite the heavy competition with other stores that have been around way before us.</p>
            </div>
          </div>
        `;
      });
    }
  }
  
}
