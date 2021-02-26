const app = Vue.createApp({
    data() {
        return {
            tasks: [{
                title: 'Emeral Lake State Park, USA',
                src: './images/Emeral_Lake.jpg',
                detail: 'Emerald Lake State Park is a 430-acre state park in East Dorset, Vermont, USA. It is the home of 20-acre Emerald Lake, called such because of its emerald color.Activities includes swimming, non-motorized boating, camping, fishing, hiking, picnicking, bicycling, wildlife watching, and winter sports.',

                like: false,
                dislike: true,
                showInfo: false
            },
            {
                title: 'Floras Lake, USA',
                src: './images/Floras_Lake.jpg',
                detail: 'Floras Lake is a natural 236-acre (96 ha) body of water on the southern Oregon Coast of the United States. Fed by four small tributaries from a basin of about 10 square miles (26 km2) in Curry County, it lies about 10 miles (16 km) north of Port Orford and 2 miles (3 km) west of U.S. Route 101.[1] It was probably named for Fred Flora, a 19th-century settler and miner who lived nearby.',

                like: false,
                dislike: true,
                showInfo: false
            },
            {
                title: 'Ninh Binh, Vietname',
                src: './images/Ninh_Binh_Vietnam.jpg',
                detail: 'Ninh Binh is also known as the Ha Long Bay on land for an obvious reason – it looks like Ha Long Bay but on land instead of water. There are hundreds of limestone monoliths topped by dense greenery that emerge from the ground, scattered around the city with rivers flowing through them and caves formed in them. While the mountains are in the west and northwest, the east and south have coastal parts. Ninh Binh really does have everything.',

                like: false,
                dislike: true,
                showInfo: false
            },
            {
                title: 'Oak Alley, USA',
                src: './images/Oak_Alley_Us.jpg',
                detail: 'Oak Alley Plantation is a historic plantation located on the west bank of the Mississippi River, in the community of Vacherie, St. James Parish, Louisiana, U.S. Oak Alley is named for its distinguishing visual feature, an alley (French allée) or canopied path, created by a double row of southern live oak trees about 800 feet (240 meters) long, planted in the early 18th century — long before the present house was built. The allée or tree avenue runs between the home and the River. The property was designated a National Historic Landmark for its architecture and landscaping, and for the agricultural innovation of grafting pecan trees, performed there in 1846–47 by an enslaved gardener.',
                dislike: true,
                showInfo: false
            },
            {
                title: 'Skagit Valley, USA',
                src: './images/Skagit_Valley_Us.jpg',
                detail: 'The Skagit Valley lies in the northwestern corner of the state of Washington, United States. Its defining feature is the Skagit River, which snakes through local communities which include the seat of Skagit County, Mount Vernon, as well as Sedro-Woolley, Concrete, Lyman-Hamilton, and Burlington.',
                like: false,
                dislike: true,
                showInfo: false
            }
            ],
            searchWord: "",
            searchTab: false,
            zoom: false,
            currentImg:""
        } 
    },

    methods: {
        toggleShow(index) {
            this.searchPic[index].showInfo = !this.tasks[index].showInfo
            //console.log(`ShowInfo : ${this.tasks[index].showInfo}`)
        },
        toggleLike(index) {
            this.searchPic[index].dislike = !this.tasks[index].dislike
            this.searchPic[index].like = !this.tasks[index].like
            //console.log(`${index} \n  LIKE : ${this.tasks[index].like} \n DISLIKE : ${this.tasks[index].dislike}`);
        },
        cancleSearch(){
            this.searchWord = " " 
            this.toggelShowSearchTab() 
            //console.log(this.searchWord)
        },
        toggelShowSearchTab(){
            this.searchTab = !this.searchTab
        },
        zoomInImage(index){
            console.log("zoommain")
            console.log(this.zoom)
            this.currentImg = this.searchPic[index].src 
            this.zoom = true
            console.log(this.zoom)
        },
        zoomOutImage(){
            this.zoom = false
            this.currentImg = ""
        },
        toggleZoom(index){
            this.zoom = !this.zoom
            if(this.currentImg.length != 0) this.currentImg = null
            else this.currentImg = this.searchPic[index]
        }


    },
    computed: {
        countLike() {
            return this.tasks.filter(t => t.like).length
        },
        searchPic() {
            return this.tasks.filter(word => word.title.toLowerCase().includes(this.searchWord.toLowerCase()))
        },


    }
} )