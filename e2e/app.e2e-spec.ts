import { ExamECommercePage } from './app.po';

describe('exam-ecommerce App', () => {
  let page: ExamECommercePage;

  beforeEach(() => {
    page = new ExamECommercePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
