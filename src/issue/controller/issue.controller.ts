import { Controller, Get, Res, NotFoundException, HttpStatus, Query,Req } from '@nestjs/common';
import { Issue } from '../entity/issue.entity';
import { IssueService } from '../entity/issue.service';
import { Post,Put, Body, Param } from  '@nestjs/common';
import { CreateIssueDto } from '../entity/issue.dto';
import { IssuehelperService } from '../services/issue-helper/issue-helper.service'

@Controller('Issues')
export class IssueController {
    constructor(private readonly IssuehelperService: IssuehelperService){}

    @Get()
    index(): Promise<Issue[]> {
      return this.IssuehelperService.findAll();
    } 
    
    @Get('issue:/name')  
    async getIssueByName(@Res() res,@Param('name')name){
      const Issue=await this.IssuehelperService.findIssueByName(name);
      if (!Issue) throw new NotFoundException('issue does not exist!');
      /*return res.status(HttpStatus.OK).json(Issue);*/
    }
    @Get('issues')  
    async getIssues(@Res() res,@Param('issues')issues){
      const issue=await this.IssuehelperService.findIssues(issues);
      console.log(req.query.filters.status);/*https://stackoverflow.com/posts/52282953/edit*/
      console.log(req.query.search)
     /* try {
        if (req.query.search) {
 // Declaring query based/search variables
    const searchQuery = req.query.search,
    regex = new RegExp(escapeRegex(req.query.search), 'gi');*/
    // limit pagination//
    /* 
     router.get('/issue/:page',(req,res) => {
const db = require('mysql'),
        Pagination = require('./pagination'),

        // Get current page from url (request parameter)
        page_id = parseInt(req.params.page),
        currentPage = page_id > 0 ? page_id : currentPage,

//Change pageUri to your page url without the 'page' query string 
        pageUri = '/issue/';

        /*Get total issue*/
        /*db.query('SELECT COUNT(id) as totalCount FROM issue',(err,result)=>{

          // Display 10 items per page
          const perPage = 10,
              totalCount = result[0].totalCount;

          // Instantiate Pagination class
          const Paginate = new Pagination(totalCount,currentPage,pageUri,perPage);


          /*Query issue*/
         /* db.query('SELECT * FROM issue LIMIT '+Paginate.perPage+' OFFSET '+Paginate.start,(err,result)=>{

              data = {
                  issue : result,
                  pages : Paginate.links()
              }

              // Send data to view
              res.render('items',data);
          });
      });*/
      if (!issues) throw new NotFoundException('issues does not exist!');
      /*return res.status(HttpStatus.OK).json(Issue);*/
    }

    @Get('issueStatuses')  
    async getIssueStatuses(@Res() res,@Param('issueStatuses')issueStatuses){
      const Issue=await this.IssuehelperService.findIssueStatuses(issueStatuses);
      if (!issueStatuses) throw new NotFoundException('issueStatuses does not exist!');
     /* return res.status(HttpStatus.OK).json(Issue);*/
    }

    @Get('commentsByIssue:/name')  
    async getIssueByComments(@Res() res,@Param('commentsIssue')commentsIssue){
      const Issue=await this.IssuehelperService.findIssueByComments(commentsIssue);
      if (!Issue) throw new NotFoundException('issuecomments does not exist!');
    
    }
    @Post('issue:/name')
    async createIssueByName(@Res() res,@Body()createIssueDto: CreateIssueDto){
      const Issue= await this.IssuehelperService.createIssueByName(createIssueDto);
      return res.status(HttpStatus.OK).json({
        message:'Issue successfully created',
        Issue
      });
    }
    @Put('/issue')
    async updateIssue(@Res() res, @Body() createIssueDto: CreateIssueDto, @Query('issue') Issue) {
        const updatedIssue = await this.IssuehelperService.updateIssue(Issue, createIssueDto);
        if (!updatedIssue) throw new NotFoundException('Issue does not exist!');
        return res.status(HttpStatus.OK).json({
            message: 'Issue Updated Successfully',
            updatedIssue
        });
    }

    /*
    @Post('create')
    async create(@Body() IssueData: Issue): Promise<any> {
      return this.IssueService.create(IssueData);
    } 
    @Put(':id/update')
    async update(@Param('id') id, @Body() IssueData: Issue): Promise<any> {
        IssueData.id = Number(id);
        console.log('Update #' + IssueData.id)
        return this.IssueService.update(IssueData);
    }  
    @Delete(':id/delete')
    async delete(@Param('id') id): Promise<any> {
      return this.IssueService.delete(id);
    } */ 
    /* @Get('')
  async index(@Query('page') page: number = 0, @Query('limit') limit: number = 10) {
    limit = limit > 100 ? 100 : limit;
    return await this.catService.paginate({page, limit, route: 'http://cats.com/cats',});
  }*/

  /* for limit pagination---------------------------https://stackoverflow.com/questions/35694504/pagination-in-nodejs-with-mysql
  router.get('/issue/:page',(req,res) => {
const db = require('mysql'),
        Pagination = require('./pagination'),

        // Get current page from url (request parameter)
        page_id = parseInt(req.params.page),
        currentPage = page_id > 0 ? page_id : currentPage,

//Change pageUri to your page url without the 'page' query string 
        pageUri = '/issue/';

        /*Get total issue*/
        /*db.query('SELECT COUNT(id) as totalCount FROM issue',(err,result)=>{

          // Display 10 items per page
          const perPage = 10,
              totalCount = result[0].totalCount;

          // Instantiate Pagination class
          const Paginate = new Pagination(totalCount,currentPage,pageUri,perPage);


          /*Query issue*/
         /* db.query('SELECT * FROM issue LIMIT '+Paginate.perPage+' OFFSET '+Paginate.start,(err,result)=>{

              data = {
                  issue : result,
                  pages : Paginate.links()
              }

              // Send data to view
              res.render('items',data);
          });
      });

});*/
/*  myModel.find({ $query: {}, $orderby: { created_at : -1 }}, function (err, items) {
    callback( null, items )
  });  */

/* limit pagination---------https://itnext.io/back-end-pagination-with-nodejs-expressjs-mongodb-mongoose-ejs-3566994356e0

router.get('/shop/:page', async (req, res, next) => {
// Declaring variable
const resPerPage = 9; // results per page
const page = req.params.page || 1; // Page 
try {
 if (req.query.search) {
// Declaring query based/search variables
   const searchQuery = req.query.search,
   regex = new RegExp(escapeRegex(req.query.search), 'gi');
// Find Demanded Products - Skipping page values, limit results       per page
const foundProducts = await Product.find({name:regex})
      .skip((resPerPage * page) - resPerPage)
      .limit(resPerPage);
// Count how many products were found
const numOfProducts = await Product.count({name: regex});
// Renders The Page
res.render('shop-products.ejs'), {
   products: foundProducts, 
   currentPage: page, 
   pages: Math.ceil(numOfProducts / resPerPage), 
   searchVal: searchQuery, 
   numOfResults: numOfProducts
  });
 }
} catch (err) {
  throw new Error(err);
}
});*/


manish1