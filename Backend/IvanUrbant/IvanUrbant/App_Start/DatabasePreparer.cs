using System.Linq;
using IvanUrbant.Models;

namespace IvanUrbant
{
    public static class DatabasePreparer
    {
        public static void Prepare()
        {
            using (var context = new ApplicationDbContext())
            {
                if(context.Card.Any() || context.Answer.Any())
                    return;

                context.Database.ExecuteSqlCommand(SQL);
            }
        }

        public const string SQL = @"
INSERT INTO [dbo].[Cards]([Id],[Type],[Title],[Description],[Exp],[Coins],[Status],[CorrectAnswer_Id])
VALUES(1,2,N'Вопрос',N'Как поступить с просроченными медикаментами?',2,0 ,0,null)

INSERT INTO [dbo].[Cards]([Id],[Type],[Title],[Description],[Exp],[Coins],[Status],[CorrectAnswer_Id])
VALUES(2,2,N'Вопрос',N'Почему нельзя сдавать чеки в макулатуру?',2,0 ,0,null)

INSERT INTO [dbo].[Cards]([Id],[Type],[Title],[Description],[Exp],[Coins],[Status],[CorrectAnswer_Id])
VALUES(3,2,N'Вопрос',N'При выборе продуктов обрати внимание на упаковку, а именно...',2,0 ,0,null)

INSERT INTO [dbo].[Cards]([Id],[Type],[Title],[Description],[Exp],[Coins],[Status],[CorrectAnswer_Id])
VALUES(4,3,N'Совет',N'Cминай пластиковые бутылки перед утилизацией, так они займут меньше места.',2,0 ,0,null)

INSERT INTO [dbo].[Cards]([Id],[Type],[Title],[Description],[Exp],[Coins],[Status],[CorrectAnswer_Id])
VALUES(5,3,N'Совет',N'Одноразовые стаканчики внутри покрыты слоем пластика, чтобы не размокали. Их сложно перерабатывать, поэтому лучше использовать многоразовую кружку.',2,0 ,0,null)

INSERT INTO [dbo].[Cards]([Id],[Type],[Title],[Description],[Exp],[Coins],[Status],[CorrectAnswer_Id])
VALUES(6,3,N'Совет',N'Ненужные, но пригодные для использования вещи, могут принести пользу другим, их можно отдать через шеринговые группы в социальных сетях.',2,0 ,0,null)

INSERT INTO [dbo].[Cards]([Id],[Type],[Title],[Description],[Exp],[Coins],[Status],[CorrectAnswer_Id])
VALUES(7,1,N'Задача',N'Перебери аптечку и выкинь все просроченные лекарства. Ненужные, с хорошим сроком годности отдай нуждающимся.',2,0 ,0,null)

INSERT INTO [dbo].[Cards]([Id],[Type],[Title],[Description],[Exp],[Coins],[Status],[CorrectAnswer_Id])
VALUES(8,1,N'Задача',N'Положи в сумку пакет для продуктов, чтобы не покупать на кассе новый.',2,0 ,0,null)

INSERT INTO [dbo].[Cards]([Id],[Type],[Title],[Description],[Exp],[Coins],[Status],[CorrectAnswer_Id])
VALUES(9,1,N'Задача',N'Заведи дома отдельные контейнеры под стекло, пластик и бумагу.',2,0 ,0,null)


INSERT INTO [dbo].[Answers]([Id],[Title],[Card_Id])
     VALUES(1,N'Использовать.', 1)
INSERT INTO [dbo].[Answers]([Id],[Title],[Card_Id])
     VALUES(2,N'Отдать людям.', 1)
INSERT INTO [dbo].[Answers]([Id],[Title],[Card_Id])
     VALUES(3,N'Выкинуть.', 1)
INSERT INTO [dbo].[Answers]([Id],[Title],[Card_Id])
     VALUES(4,N'Накормить ими животных.', 1)

INSERT INTO [dbo].[Answers]([Id],[Title],[Card_Id])
     VALUES(5,N'Для них используется специальная термобумага, которую не перерабатывают.', 2)
INSERT INTO [dbo].[Answers]([Id],[Title],[Card_Id])
     VALUES(6,N'Чеки слишком маленького размера, поэтому их невозможно переработать.', 2)
INSERT INTO [dbo].[Answers]([Id],[Title],[Card_Id])
     VALUES(7,N'На чеках содержится информация о магазине(адрес, телефон, ИНН), если ее кто-то узнает, то это может нанести вред магазину.', 2)
INSERT INTO [dbo].[Answers]([Id],[Title],[Card_Id])
     VALUES(8,N'Чеки можно сдавать в макулатуру.', 2)

INSERT INTO [dbo].[Answers]([Id],[Title],[Card_Id])
     VALUES(9,N'Чтобы было описание товара на разных языках.', 3)
INSERT INTO [dbo].[Answers]([Id],[Title],[Card_Id])
     VALUES(10,N'Чтобы был красивый дизайн.', 3)
INSERT INTO [dbo].[Answers]([Id],[Title],[Card_Id])
     VALUES(11,N'Зачем обращать на нее внимание, это же просто упаковка, главное - что внутри!.', 3)
INSERT INTO [dbo].[Answers]([Id],[Title],[Card_Id])
     VALUES(12,N'Чтобы она была пригодна для переработки.', 3)

UPDATE [dbo].[Cards]
   SET [CorrectAnswer_Id] = 3
 WHERE Id = 1

UPDATE [dbo].[Cards]
   SET [CorrectAnswer_Id] = 5
 WHERE Id = 2

UPDATE [dbo].[Cards]
   SET [CorrectAnswer_Id] = 12
 WHERE Id = 3
";
    }
}